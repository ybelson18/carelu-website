import Anthropic from '@anthropic-ai/sdk';
import { waitUntil } from '@vercel/functions';
import { payers, PAYER_REVIEWED } from '../src/data/payers/index.js';
import { vob } from '../src/data/payers/vob/index.js';
import type { SourceRef } from '../src/data/payers/vob/types.js';
import { check, record, clientIp, costOf } from './_askGuard.js';

const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/* ================================================================
   POST /api/ask — the payer-directory chat.
   Grounded Q&A over the payer-guide corpus: retrieve the most
   relevant guide sections for the question, hand ONLY those to
   Claude, and stream back an answer that cites the primary sources.
   ================================================================ */

export const config = { maxDuration: 60 };

type ChatMessage = { role: 'user' | 'assistant'; content: string };

interface Chunk {
  payer: string;
  state: string;
  slug: string;
  title: string;
  text: string;
  hay: string;
  sources: { title: string; url: string }[];
  /** deliveryRules / intakeGates key, for the all-states sweep. */
  rule?: string;
}

const DELIVERY_TITLES: Record<string, string> = {
  supervision: 'Supervision requirements (BCBA supervision of RBTs/techs, ratios)',
  concurrentBilling: 'Concurrent billing (97153 and 97155 at the same time)',
  dailyLimits: 'Daily unit limits (MUE, per-day caps)',
  noteSignature: 'Session note signature requirements',
  placeOfService: 'Place of service: school, IEP, home, community, clinic (where ABA is payable)',
  billAsProvider: 'Rendering vs supervising provider NPI on the claim',
};
const GATE_TITLES: Record<string, string> = {
  ageLimit: 'Age limits on the ABA benefit',
  dxRecency: 'How recent the autism diagnostic evaluation must be',
  diagnosingProviders: 'Who may make the autism diagnosis',
  diagnosticTools: 'Required diagnostic instruments (ADOS etc.)',
  referral: 'Referral or physician order requirement',
  telehealth: 'Telehealth: which ABA codes may be delivered remotely',
  authTurnaround: 'Prior authorization decision time: how long the payer has to approve or deny (standard, expedited/urgent, reauthorization lead time)',
  coordinationOfBenefits: 'Coordination of benefits: who pays first with other insurance (commercial plus Medicaid, secondary, payer of last resort, birthday rule)',
};

// Flatten every guide section into a retrievable chunk. Built once per
// (cold) function instance; the corpus is static per deploy.
const CHUNKS: Chunk[] = Object.values(payers).flatMap((p) => {
  const guideSources = p.sources;
  const base = [
    {
      payer: p.payer, state: p.state ?? '', slug: p.slug,
      title: 'At a glance',
      text:
        p.atGlance.map((f) => `${f.label}: ${f.value}`).join('. ') +
        // Carry the status through: the assistant must not state an unverified
        // field as settled fact. `fact()` appends the caveat the data records.
        (p.assessmentPA ? ` Assessment prior auth: ${fact(p.assessmentPA)}.` : '') +
        (p.treatmentPA ? ` Treatment prior auth: ${fact(p.treatmentPA)}.` : '') +
        (p.dxRequired ? ` Autism diagnosis required: ${fact(p.dxRequired)}.` : ''),
      sources: guideSources.slice(0, 2),
    },
    ...p.sections.map((s) => ({
      payer: p.payer, state: p.state ?? '', slug: p.slug,
      title: s.h2,
      text: [
        ...(s.body ?? []),
        ...(s.list ?? []).map((i) => `${i.title}: ${i.desc}`),
      ].join(' '),
      sources: (s.cites && s.cites.length > 0 ? s.cites : guideSources.slice(0, 1)),
    })),
    // The structured layers. School/IEP, place of service, supervision, telehealth,
    // referral and diagnosis rules live here, not in the prose sections, so without
    // them the chat could not answer "what code does an IEP fall under?".
    // The three headline facts, each retrievable (and sweepable across states) on its own.
    ...(p.assessmentPA ? [ruleChunk('assessmentPA', 'Prior authorization for the ABA assessment (97151/97152): required or not', p.assessmentPA)] : []),
    ...(p.treatmentPA ? [ruleChunk('treatmentPA', 'Prior authorization for ABA treatment (97153 and up): required or not, how to submit', p.treatmentPA)] : []),
    ...(p.dxRequired ? [ruleChunk('dxRequired', 'Is an autism (ASD) diagnosis required for ABA coverage', p.dxRequired)] : []),
    ...Object.entries(p.deliveryRules ?? {}).map(([k, f]) => ruleChunk(k, DELIVERY_TITLES[k] ?? k, f)),
    ...Object.entries(p.intakeGates ?? {}).map(([k, f]) => ruleChunk(k, GATE_TITLES[k] ?? k, f)),
    ...(p.faq.length > 0 ? [{
      payer: p.payer, state: p.state ?? '', slug: p.slug, title: 'FAQ',
      text: p.faq.map((f) => `Q: ${f.q} A: ${f.a}`).join(' '),
      sources: guideSources.slice(0, 1),
    }] : []),
    ...(p.collect.length > 0 ? [{
      payer: p.payer, state: p.state ?? '', slug: p.slug, title: 'What intake should collect from the family',
      text: p.collect.map((c) => `${c.title}: ${c.desc}`).join('. '),
      sources: guideSources.slice(0, 1),
    }] : []),
    ...vobChunks(p.slug),
  ];

  function ruleChunk(rule: string, title: string, f: { value: string; status: string; verifyVia?: string; cites?: { title: string; url: string }[] }) {
    return {
      payer: p.payer, state: p.state ?? '', slug: p.slug, title, rule,
      text: fact(f),
      sources: f.cites && f.cites.length > 0 ? f.cites : guideSources.slice(0, 1),
    };
  }

  function vobChunks(slug: string) {
    const v = vob[slug];
    if (!v) return [];
    const src = (refs?: SourceRef[]) =>
      (refs ?? []).slice(0, 3).map((r) => ({ title: r.note ?? new URL(r.url).hostname, url: r.url }));
    const out = [];
    if (v.codeGrid && Object.keys(v.codeGrid).length > 0) {
      const rows = Object.entries(v.codeGrid).map(([code, e]) =>
        `${code}: covered ${e.covered}; PA ${e.paRequired}; units ${e.unitCap} per ${e.capPeriod}; ` +
        `place of service ${e.posAllowed.join(', ') || 'not stated'}; telehealth ${e.telehealth}` +
        (e.modifiers.length ? `; modifiers ${e.modifiers.join(', ')}` : '') + (e.notes ? `; ${e.notes}` : ''));
      out.push({
        payer: p.payer, state: p.state ?? '', slug,
        title: 'Billing codes: coverage, prior auth, unit caps, place of service (school/home/clinic), telehealth, modifiers (CPT 97151-97158, 0362T, 0373T)',
        text: rows.join(' | '),
        sources: src(Object.values(v.codeGrid).flatMap((e) => e.sources ?? [])),
      });
    }
    if (v.rates && Object.keys(v.rates.byCode).length > 0) {
      const rows = Object.entries(v.rates.byCode).map(([code, r]) =>
        `${code}: ${r.rate} per ${r.unit}` +
        (r.modifierTiers ? ` (${Object.entries(r.modifierTiers).map(([m, x]) => `${m} ${x}`).join(', ')})` : ''));
      out.push({
        payer: p.payer, state: p.state ?? '', slug,
        title: `Fee schedule / reimbursement rates (${v.rates.source}, effective ${v.rates.effectiveDate})`,
        text: rows.join(' | '),
        sources: src(v.rates.sources),
      });
    }
    const c = v.vobContact;
    if (c && (c.providerServicesPhone || c.portal || c.fax)) {
      out.push({
        payer: p.payer, state: p.state ?? '', slug,
        title: 'Provider services contact: phone, portal, fax, IVR (for verifying benefits)',
        text: [
          c.providerServicesPhone && `Provider services phone: ${c.providerServicesPhone}`,
          c.ivrPath && `IVR path: ${c.ivrPath}`, c.hours && `Hours: ${c.hours}`,
          c.portal && `Portal: ${c.portal.name} <${c.portal.url}>`, c.fax && `Fax: ${c.fax}`,
          c.scriptedQuestions.length && `Ask on the call: ${c.scriptedQuestions.join(' ')}`,
        ].filter(Boolean).join('. '),
        sources: src(c.sources),
      });
    }
    return out;
  }
  return base.map((c) => ({ ...c, hay: `${c.payer} ${c.state} ${c.title} ${c.text}`.toLowerCase() }));
});

// The whole directory at a glance, one block per guide. Always sent (and cached)
// so the assistant knows every payer and can answer general or comparative
// questions ("which state pays best?") that no keyword pick of sections can serve.
// Retrieved sections below then add the detail for the payers a question names.
const DIRECTORY = Object.values(payers)
  .map((p) => {
    // At-a-glance lines only (~54K tokens). The long assessment/treatment PA and
    // diagnosis facts used to ride along too (~101K tokens, $0.50 per cache write);
    // they now come in as retrieved chunks, and swept across every state when a
    // question asks for a comparison. Same answers on a side-by-side test.
    const lines = p.atGlance.map((f) => `- ${f.label}: ${f.value}`);
    return `## ${p.payer}${p.state ? ` (${p.state})` : ''} — /payers/${p.slug}\n${lines.join('\n')}`;
  })
  .join('\n\n');

// Words that say nothing about which guide a question is about. Without this,
// "which ... has the ..." matched every section equally, and generic words like
// "state" or "insurance" earned the payer-name bonus (Peach State, Anthem ...
// Insurance) and crowded out the sections that actually answered the question.
const STOPWORDS = new Set([
  'the', 'and', 'for', 'are', 'was', 'has', 'have', 'had', 'does', 'did', 'can', 'will',
  'which', 'what', 'who', 'whom', 'when', 'where', 'why', 'how', 'with', 'from', 'that',
  'this', 'these', 'those', 'there', 'their', 'they', 'any', 'all', 'most', 'more',
  'best', 'better', 'worst', 'good', 'about', 'into', 'than', 'then', 'our', 'you', 'your',
  'need', 'needs', 'get', 'give', 'tell', 'show', 'list', 'compare', 'between',
  'fall', 'falls', 'under', 'use', 'used', 'should', 'would', 'could', 'kind', 'type',
]);
const GENERIC_PAYER_WORDS = new Set([
  'state', 'states', 'insurance', 'insurer', 'health', 'plan', 'plans', 'care', 'payer', 'payers', 'aba',
]);

// Question words that the guides spell differently. Expanding them is what
// lets "what code does an IEP fall under" reach the place-of-service rules.
const SYNONYMS: Record<string, string[]> = {
  iep: ['school', 'individualized', 'education', 'place', 'service'],
  ifsp: ['school', 'early', 'intervention'],
  school: ['iep', 'place', 'service'],
  pos: ['place', 'service'],
  code: ['codes', 'billing', 'cpt'],
  codes: ['billing', 'cpt'],
  rate: ['rates', 'fee', 'schedule', 'reimbursement'],
  rates: ['fee', 'schedule', 'reimbursement'],
  pay: ['rates', 'fee', 'reimbursement'],
  telehealth: ['remote', 'virtual'],
  phone: ['contact', 'provider', 'services'],
  rbt: ['supervision', 'technician'],
  secondary: ['coordination', 'benefits', 'primary'],
  cob: ['coordination', 'benefits', 'secondary'],
  turnaround: ['decision', 'authorization', 'days'],
  supervision: ['rbt', 'bcba'],
};

/* A question about one of the rules that names no state or payer ("how old can
   a diagnosis be?") should be answered for EVERY state, not for whichever ten
   sections scored highest. Those questions get the rule from each state's
   Medicaid program plus the national commercial/military guides, whole. */
const RULE_TOPICS: [string, RegExp][] = [
  ['assessmentPA', /(assessment|97151|97152|\beval\w*).*(prior auth|\bpa\b|precert|authoriz)|(prior auth|\bpa\b|precert|authoriz)\w*.*(assessment|97151|97152|\beval)/],
  ['dxRequired', /(require|need)\w*.*(autism|asd) diagnos|(autism|asd) diagnos\w*.*(required|requirement|needed|necessary)|without (an? )?(autism |asd )?diagnos|(don.?t|do not|doesn.?t|does not) (require|need) (an? )?(autism |asd )?diagnos/],
  ['treatmentPA', /(treatment|97153|therapy).*(prior auth|\bpa\b|precert|authoriz)|(prior auth|\bpa\b|precert)\w*.*(treatment|97153|therapy)|which (payers|insurers|plans|states).*(prior auth|precert)/],
  ['dxRecency', /(how (old|recent)|expire|expir|valid|current|years? old|re-?eval\w*|outdated|too old).*(diagnos|eval)|(diagnos|eval)\w*.*(how (old|recent)|expire|expir|valid for|years? old|outdated|too old|recency)/],
  ['ageLimit', /age (limit|cap|cutoff|range)|maximum age|max age|up to age|until age|minimum age|adults?\b|over (18|21)/],
  ['diagnosingProviders', /who (can|may|is allowed to) (diagnose|make the diagnosis)|diagnosing (provider|clinician)s?|(pediatrician|psychologist).*(diagnose|diagnosis)/],
  ['diagnosticTools', /\bados\b|diagnostic (tool|instrument|test)s?|which (tool|instrument|test)/],
  ['referral', /referral|physician order|prescription|\border\b.*(needed|required)/],
  ['telehealth', /telehealth|telemedicine|remote(ly)?|virtual/],
  ['placeOfService', /school|\biep\b|place of service|\bpos\b|in-home|home-based|community|daycare|setting/],
  ['supervision', /supervis/],
  ['concurrentBilling', /concurrent|same time|97153.*97155|97155.*97153|bill (both|together)/],
  ['dailyLimits', /(daily|per day|a day) (limit|cap|units|max)|units (per|a) day|\bmue\b|max(imum)? units/],
  ['noteSignature', /session notes?|sign(ature|s|ed)?\b.*notes?|notes?.*sign/],
  ['billAsProvider', /rendering|\bnpi\b|bill under|billing provider/],
  ['authTurnaround', /how long.*(auth|approv|pa\b|decision)|(auth|approval|pa)\w*.*(take|turnaround|how long|days|timeline|timeframe|decision time)|turnaround|expedited|urgent (auth|request)/],
  ['coordinationOfBenefits', /coordination of benefits|\bcob\b|secondary|primary (insurance|payer)|two (insurances|plans)|both (insurances|plans)|other insurance|dual coverage|payer of last resort|birthday rule|who pays first|bill (first|medicaid second)/],
];
const SWEEP_SLUGS = new Set(
  Object.values(payers).filter((p) => p.kind === 'state-medicaid' || p.state === 'US').map((p) => p.slug),
);
// Words that appear in payer names without naming one ("Georgia Medicaid").
const NOT_A_PAYER_NAME = new Set([...GENERIC_PAYER_WORDS, 'medicaid', 'commercial', 'blue', 'cross', 'shield', 'military', 'behavioral']);

const AMBIGUOUS_ABBR = new Set(['in', 'oh', 'co', 'ma', 'me', 'or', 'ok', 'hi', 'de', 'pa', 'al', 'id']);

const STATE_NAMES: Record<string, string> = {
  ga: 'georgia', nc: 'north carolina', in: 'indiana', va: 'virginia', tn: 'tennessee',
  oh: 'ohio', nj: 'new jersey', md: 'maryland', co: 'colorado', ut: 'utah', az: 'arizona',
  ny: 'new york', nm: 'new mexico', mo: 'missouri', tx: 'texas', ma: 'massachusetts',
  fl: 'florida', ks: 'kansas', ne: 'nebraska',
  id: 'idaho', ca: 'california', mi: 'michigan', pa: 'pennsylvania', hi: 'hawaii', ia: 'iowa', ok: 'oklahoma',
};

function retrieve(question: string, prevUser: string | undefined, limit = 14): Chunk[] {
  const q = `${prevUser ?? ''} ${question}`.toLowerCase();
  const asked = q.split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOPWORDS.has(w));
  const words = Array.from(new Set([...asked, ...asked.flatMap((w) => SYNONYMS[w] ?? [])]));
  const nameWords = words.filter((w) => !GENERIC_PAYER_WORDS.has(w));
  // Rare words decide relevance: "iep" in 40 chunks says far more than "codes"
  // in 3,000. Weight each word by inverse document frequency; expansions count half.
  const weight = new Map(words.map((w) => {
    const df = CHUNKS.reduce((n, c) => n + (c.hay.includes(w) ? 1 : 0), 0);
    const idf = Math.log((CHUNKS.length + 1) / (df + 1));
    return [w, asked.includes(w) ? idf : idf / 2];
  }));
  // Expand state abbreviations so "AZ medicaid" matches "arizona".
  const stateTerms = Object.entries(STATE_NAMES)
    .filter(([abbr, name]) => q.includes(name) || (AMBIGUOUS_ABBR.has(abbr)
      // "done in school" is not Indiana: English-word abbreviations count only in capitals.
      ? new RegExp(`\\b${abbr.toUpperCase()}\\b`).test(`${prevUser ?? ''} ${question}`)
      : new RegExp(`\\b${abbr}\\b`).test(q)))
    .map(([, name]) => name);

  const scored = CHUNKS.map((c) => {
    let score = 0;
    for (const w of words) if (c.hay.includes(w)) score += weight.get(w) ?? 0;
    const payerLower = c.payer.toLowerCase();
    for (const w of nameWords) if (payerLower.includes(w)) score += 4;
    for (const st of stateTerms) {
      if (c.payer.toLowerCase().includes(st) || c.hay.includes(st)) score += 3;
      if (STATE_NAMES[c.state.toLowerCase()] === st) score += 5;
    }
    return { c, score };
  }).filter((x) => x.score > 0);

  scored.sort((a, b) => b.score - a.score);
  const picked: Chunk[] = [];
  let chars = 0;

  const namesPayer = nameWords.some((w) => w.length > 3 && !NOT_A_PAYER_NAME.has(w) &&
    CHUNKS.some((c) => c.payer.toLowerCase().split(/[^a-z0-9]+/).includes(w)));
  if (stateTerms.length === 0 && !namesPayer) {
    const topics = RULE_TOPICS.filter(([, re]) => re.test(question.toLowerCase())).slice(0, 2);
    for (const [rule] of topics) {
      for (const c of CHUNKS) if (c.rule === rule && SWEEP_SLUGS.has(c.slug)) picked.push(c);
    }
    // The sweep is the answer; retrieval below only adds context around it.
    if (topics.length > 0) limit = Math.min(limit, 4);
  }
  const swept = picked.length;
  for (const { c } of scored) {
    if (picked.length - swept >= limit || chars > 42000) break;
    if (picked.includes(c)) continue;
    picked.push(c);
    chars += c.text.length;
  }
  return picked;
}

const SYSTEM = `You are the Carelu ABA Payer Directory assistant, embedded on carelu.com/payers. You answer questions from ABA-provider intake and billing teams about insurance payers — prior authorization, assessment PA, diagnosis requirements, rates, reauthorization cadence, licensure, mandates.

You have two sources:
- The DIRECTORY below: every payer guide Carelu publishes, at a glance (key facts and guide page). Use it to know what the directory covers and to answer general or comparative questions across payers and states.
- Detailed <excerpts> attached to each question: the full guide sections most relevant to it. Prefer them for detail and for citations.

Hard rules:
- Answer ONLY from the directory and the excerpts. They come from Carelu's payer guides, each fact compiled from primary sources (payer policies, state manuals, statutes) and last reviewed ${PAYER_REVIEWED}. Never use outside knowledge for factual claims about payers, rates, or policies — if the excerpts don't contain the answer, say plainly that our directory doesn't have that verified yet and point to the closest relevant guide instead.
- Cite as you go: attach a markdown link to the primary source for each factual claim, e.g. "PA is required for the assessment ([GA DCH ASD Manual](url))". Use the source URLs given with each excerpt, and only for a claim that excerpt actually supports. A fact you take from the directory alone links to its guide page instead (e.g. [New Mexico Medicaid guide](/payers/new-mexico-medicaid)); never borrow an unrelated source to back it. At the end, add a "Read more:" line linking the most relevant guide page(s) using their site paths, e.g. [Georgia Medicaid guide](/payers/georgia-medicaid).
- Be concise and operational — answer the question directly in the first sentence, then only the detail an intake operator needs. Prefer short paragraphs over lists unless comparing several payers.
- Every answer ends with a one-line reminder that policies change and to verify against the payer's live policy for the specific member.
- If the question is not about ABA payers/insurance/intake (or asks for legal, clinical, or billing advice beyond general information), decline briefly and steer back to payer questions.
- When the excerpts carry the same rule for every state Medicaid program (plus the national plans), the question was asked across states: answer state by state, covering EVERY state in the excerpts, one short line each (a compact list, alphabetical by state), then the national commercial/military plans. Lead each line with the bottom-line window (e.g. "no expiry on the diagnosis; assessment within 3 years"), and flag rules marked UNVERIFIED or PLAN-DEPENDENT rather than stating them as settled. Link each state's guide page.
- For comparative questions ("which pays best", "which states require X"), compare across the whole directory, not only the excerpts; say what the comparison covers and name payers the directory lacks data for rather than silently leaving them out. Rates differ by credential tier, unit and setting, so compare like with like.
- Never invent payer names, policy numbers, dollar amounts, or URLs.`;

export async function POST(request: Request): Promise<Response> {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(JSON.stringify({ error: 'not configured' }), { status: 503 });
  }

  let body: { messages?: ChatMessage[]; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'bad request' }), { status: 400 });
  }

  const history = (body.messages ?? [])
    .filter((m): m is ChatMessage => (m?.role === 'user' || m?.role === 'assistant') && typeof m?.content === 'string')
    .slice(-8)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  const last = history[history.length - 1];
  if (!last || last.role !== 'user' || last.content.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'no question' }), { status: 400 });
  }
  if (last.content.length > 1000) {
    return new Response(JSON.stringify({ error: 'question too long' }), { status: 400 });
  }

  const rawEmail = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 254) : '';
  const email = EMAIL_RE.test(rawEmail) ? rawEmail : undefined;
  const ip = clientIp(request);
  const verdict = await check(ip, email);
  if (!verdict.ok) {
    return new Response(JSON.stringify({ error: verdict.reason, message: verdict.message }), {
      status: verdict.status,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    });
  }

  const prevUser = history.filter((m) => m.role === 'user').slice(-2, -1)[0]?.content;
  const chunks = retrieve(last.content, prevUser, 10);

  const excerpts = chunks.length === 0
    ? 'No relevant excerpts found for this question.'
    : chunks.map((c, i) =>
        `[Excerpt ${i + 1}] ${c.payer}${c.state ? ` (${c.state})` : ''} — ${c.title}\nGuide page: /payers/${c.slug}\nSources: ${c.sources.map((s) => `${s.title} <${s.url}>`).join(' | ')}\n${c.text}`
      ).join('\n\n');

  const client = new Anthropic();

  const messages: Anthropic.MessageParam[] = [
    ...history.slice(0, -1),
    {
      role: 'user',
      content: `<excerpts>\n${excerpts}\n</excerpts>\n\nQuestion: ${last.content}`,
    },
  ];

  const stream = client.messages.stream({
    // Opus 5.5: 20% cheaper than Opus 4.8 per token, cache reads $0.20/M (was $0.50).
    // Thinking is always on and counts toward max_tokens, so leave room for it.
    model: 'claude-opus-5-5',
    max_tokens: 8000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'low' },
    // The directory is identical on every call, so cache it: later questions
    // read it at a tenth of the input price instead of paying for ~54K tokens.
    system: [
      { type: 'text', text: SYSTEM },
      { type: 'text', text: `<directory>\n${DIRECTORY}\n</directory>`, cache_control: { type: 'ephemeral' } },
    ],
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    start(controller) {
      stream.on('text', (delta) => controller.enqueue(encoder.encode(delta)));
      stream.on('error', (err) => {
        controller.enqueue(encoder.encode('\n\nSorry — something went wrong generating this answer. Please try again.'));
        console.error('ask stream error', err);
        controller.close();
      });
      stream.on('end', () => controller.close());
      // Tally the spend after the answer is out; the visitor never waits on it.
      stream.on('finalMessage', (msg) => {
        // Safety classifiers can decline with a 200 and stop_reason 'refusal';
        // never leave the visitor looking at an empty answer.
        if (msg.stop_reason === 'refusal') {
          console.warn('ask refusal', msg.stop_details);
          try {
            controller.enqueue(encoder.encode("\n\nSorry, I can't answer that one. Try rephrasing, or browse the payer guides below."));
          } catch { /* stream already closed */ }
        }
        const cost = costOf(msg.usage);
        // One line per answer in the Vercel logs: `vercel logs -q "ask usage"`.
        console.log('ask usage', JSON.stringify({ cost: Math.round(cost * 10000) / 10000, ...msg.usage }));
        waitUntil(record(ip, email, last.content, cost).catch((err) => console.error('ask: record failed', err)));
      });
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
/** Render a PayerRuleFact for the retrieval context, preserving its status so the
 *  assistant never presents an unverified field as a settled answer. */
function fact(f?: { value: string; status: string; verifyVia?: string }): string {
  if (!f) return '';
  if (f.status === 'verified') return f.value;
  const tag = f.status === 'plan-dependent' ? 'PLAN-DEPENDENT' : 'UNVERIFIED';
  return `${f.value} [${tag}${f.verifyVia ? ` — confirm via: ${f.verifyVia}` : ''}]`;
}

