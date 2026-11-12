import Anthropic from '@anthropic-ai/sdk';
import { json, requireConfig, isResponse, getRepoFileText, commitFiles } from './sources/_shared.js';
import { payers } from '../src/data/payers/index.js';
import { STATE_META } from '../src/data/payers/types.js';
import { PAYER_CHANGELOG } from '../src/data/payers/changelog.js';
import type { PayerUpdateSubscriber } from './payer-updates.js';
import { sesClient, sendEmail } from './_ses.js';

/* ================================================================
   GET /api/payer-digest   (Vercel cron, every Monday 14:00 UTC)

   The every-two-weeks "what changed for payers in your states" email,
   sent from updates@carelu.com through Amazon SES (LeadTrap's account).
   Runs weekly but only sends when 13+ days have passed since the last
   send, so a missed or late run self-corrects instead of skipping a
   whole cycle.

   1. Collect every changelog detail dated after the last send and map
      it to states via the guide slugs it names.
   2. Claude writes each changed state's items once, each tagged
      Intake / Clinical care / Billing & ops.
   3. Every subscriber gets ONE email: all of their states that changed,
      each split into the topics they picked. Nobody whose states saw no
      change in their topics gets mail.

   PAYER_DIGEST_AUTOSEND=yes sends to subscribers. Anything else is
   PREVIEW mode: one sample of every distinct email goes to
   PAYER_DIGEST_PREVIEW_TO instead, the send window does not move, and
   Slack hears about it. Flip the env var once the previews look right.

   Auth: Vercel cron sends `Authorization: Bearer $CRON_SECRET`.
   ?dry=1 (same auth) returns sample emails as JSON and sends nothing.
   ?force=1 ignores the 13-day wait.
   ================================================================ */

export const config = { maxDuration: 300 };

const STATE_FILE = 'payer-digest-state.json';
const SUBS_FILE = 'payer-updates.json';
const SITE = 'https://www.carelu.com';
const MIN_DAYS = 13;

const FROM = process.env.PAYER_DIGEST_FROM ?? 'Carelu Payer Updates <payers@carelu.com>';
const PREVIEW_TO = process.env.PAYER_DIGEST_PREVIEW_TO ?? '';
const POSTAL = process.env.PAYER_DIGEST_POSTAL_ADDRESS ?? '';
const AUTOSEND = (process.env.PAYER_DIGEST_AUTOSEND ?? '').toLowerCase() === 'yes';
const SLACK = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';

interface DigestState { lastSent: string; runs: { date: string; since: string; sent: number; failed: number }[] }
export type Topic = 'intake' | 'clinical' | 'billing';
export const TOPICS: { key: Topic; label: string }[] = [
  { key: 'intake', label: 'Intake' },
  { key: 'clinical', label: 'Clinical care' },
  { key: 'billing', label: 'Billing & ops' },
];
export interface Item { slug: string; category: Topic; headline: string; detail: string }
export interface Change { slug: string; payer: string; state: string; field: string; change: string; sourceUrl?: string; date: string }

const STATE_NAME: Record<string, string> = Object.fromEntries([...STATE_META.map((s) => [s.code, s.name]), ['US', 'National plans']]);

/* A detail's `slug` is sometimes one slug, sometimes "a, b, c", sometimes
   "minnesota-medicaid + MN MCOs". Take every known slug it names. */
function slugsIn(raw: string): string[] {
  return raw.split(/[,+&]| and /).map((s) => s.trim()).filter((s) => s in payers);
}

export function changesSince(since: string): Change[] {
  const out: Change[] = [];
  for (const entry of PAYER_CHANGELOG) {
    if (entry.date <= since) continue;
    for (const d of entry.details ?? []) {
      for (const slug of slugsIn(d.slug)) {
        const p = payers[slug];
        out.push({ slug, payer: p.payer, state: p.state ?? "US", field: d.field, change: d.change, sourceUrl: d.sourceUrl, date: entry.date });
      }
    }
  }
  return out;
}

const SECTION_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['items'],
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['slug', 'category', 'headline', 'detail'],
        properties: {
          slug: { type: 'string' },
          category: { type: 'string', enum: ['intake', 'clinical', 'billing'] },
          headline: { type: 'string' },
          detail: { type: 'string' },
        },
      },
    },
  },
} as const;

const SYSTEM = `You write the "what changed" section of Carelu's every-two-weeks payer update email for ABA providers' intake, clinical and billing teams.
You get raw change records from Carelu's payer directory for one state. Turn them into short items a busy team member can act on.
Rules:
- Only include a NEW or CHANGED rule: something a provider did one way two weeks ago and should now do differently (a new requirement, a removed requirement, a new effective date, new rates, a new form or process). Records that merely document or confirm how a payer already works (for example "no separate supervision log is required", a turnaround that has not changed) are NOT news: skip them. Fewer, real items beat many weak ones.
- One item per meaningful change. Merge records about the same payer and topic. Drop pure housekeeping (a link moved, a citation title reworded, a source document renamed, internal tooling, our own wording fixes) unless it changes what a provider does.
- category: 'intake' (eligibility, diagnosis and referral rules, documents to collect, prior auth to start services, who can diagnose), 'clinical' (treatment rules: hours, supervision, staffing and credentials of RBTs/BCBAs, treatment plans, reauthorization, telehealth, place of service), or 'billing' (CPT codes, rates, claims, timely filing, credentialing and enrollment, portals). Pick the one team that has to act.
- headline: the payer name and what changed, under 90 characters. detail: one or two plain sentences: the new rule, the effective date if given, and what to do differently.
- Only state facts present in the records. Never invent dates, numbers or rules.
- Never mention Carelu's own corrections or that the directory was wrong before; just state the current rule.
- No em dashes or en dashes. Plain words, no jargon beyond standard ABA/insurance terms (CPT codes, prior auth, MCO are fine).
- slug must be one of the slugs given in the records.
- If nothing is worth telling a provider, return an empty items list.`;

async function writeSection(client: Anthropic, state: string, changes: Change[]): Promise<Item[]> {
  const records = changes.map((c) => ({ slug: c.slug, payer: c.payer, date: c.date, field: c.field, change: c.change.slice(0, 1500) }));
  const res = await client.messages.create({
    model: 'claude-opus-5-5',
    max_tokens: 8000,
    system: SYSTEM,
    output_config: { effort: 'low', format: { type: 'json_schema', schema: SECTION_SCHEMA } },
    messages: [{ role: 'user', content: `State: ${STATE_NAME[state] ?? state}\n\nChange records:\n${JSON.stringify(records, null, 1)}` }],
  });
  const text = res.content.filter((b): b is Anthropic.TextBlock => b.type === 'text').map((b) => b.text).join('');
  const valid = new Set(changes.map((c) => c.slug));
  return ((JSON.parse(text) as { items: Item[] }).items ?? []).filter((i) => valid.has(i.slug));
}

export async function writeSections(states: string[], byState: Record<string, Change[]>): Promise<Record<string, Item[]>> {
  const client = new Anthropic({ timeout: 120_000, maxRetries: 1 });
  const sections: Record<string, Item[]> = {};
  await Promise.all(states.filter((st) => byState[st]?.length).map(async (st) => {
    try {
      const items = await writeSection(client, st, byState[st]);
      if (items.length) sections[st] = items;
    } catch (err) {
      console.error('payer-digest: section failed', st, err);
    }
  }));
  return sections;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function renderEmail(
  states: string[], topics: Topic[], sections: Record<string, Item[]>, since: string, unsubscribeUrl: string
): { subject: string; html: string; text: string } {
  const fmt = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', timeZone: 'UTC' });
  const names = states.map((s) => STATE_NAME[s] ?? s);
  const per = states.map((st) => ({
    st,
    cats: TOPICS.filter((t) => topics.includes(t.key))
      .map((t) => ({ t, items: (sections[st] ?? []).filter((i) => i.category === t.key) }))
      .filter((c) => c.items.length),
  }));
  const count = per.reduce((n, p) => n + p.cats.reduce((m, c) => m + c.items.length, 0), 0);
  const subject = `Payer updates: ${count} ${count === 1 ? 'change' : 'changes'} in ${names.join(', ')}`;
  const guideUrl = (slug: string) => `${SITE}/payers/${slug}?utm_source=payer-updates&utm_medium=email`;

  const blocks = per.map(({ st, cats }) => `
    <h2 style="font-family:Georgia,serif;font-weight:400;font-size:24px;margin:32px 0 6px;border-bottom:1px solid #e5e1d8;padding-bottom:6px;color:#1A1A1A">${esc(STATE_NAME[st] ?? st)}</h2>
    ${cats.map((c) => `
      <p style="margin:18px 0 8px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3f7a34">${esc(c.t.label)}</p>
      ${c.items.map((i) => `
      <div style="margin:0 0 18px">
        <p style="margin:0 0 4px;font-weight:700;color:#1A1A1A">${esc(i.headline)}</p>
        <p style="margin:0 0 6px;line-height:1.55;color:#2B2A26">${esc(i.detail)}</p>
        <a href="${guideUrl(i.slug)}" style="color:#2e5a26;font-weight:600;font-size:14px">Read the full guide</a>
      </div>`).join('')}`).join('')}`).join('');

  const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#FAF8F3">
  <div style="max-width:600px;margin:0 auto;padding:28px 20px;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1A1A1A;font-size:15px">
    <p style="font-family:Georgia,serif;font-size:22px;margin:0 0 4px">Carelu</p>
    <p style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8a877f;margin:0 0 22px">Payer updates</p>
    <p style="line-height:1.55;margin:0">Here is what changed for payers in ${esc(names.join(', '))} since ${fmt(since)}. Every item links to the full guide and its source.</p>
    ${blocks}
    <div style="margin-top:34px;padding-top:16px;border-top:1px solid #e5e1d8;font-size:12.5px;line-height:1.6;color:#8a877f">
      You get this because you joined the payer updates list on carelu.com. Want different states or topics? Sign up again on the <a href="${SITE}/payers#payer-updates" style="color:#2e5a26">payer directory</a> with the same email.<br>
      <a href="${unsubscribeUrl}" style="color:#5f5c55">Unsubscribe</a>${POSTAL ? `<br>${esc(POSTAL)}` : ''}
    </div>
  </div>
</body></html>`;

  const text = [
    `Carelu payer updates: what changed in ${names.join(', ')} since ${fmt(since)}.`,
    ...per.flatMap(({ st, cats }) => [
      '', (STATE_NAME[st] ?? st).toUpperCase(),
      ...cats.flatMap((c) => ['', c.t.label, ...c.items.map((i) => `- ${i.headline}\n  ${i.detail}\n  ${guideUrl(i.slug)}`)]),
    ]),
    '', `Change states or topics: ${SITE}/payers#payer-updates`, `Unsubscribe: ${unsubscribeUrl}`, ...(POSTAL ? [POSTAL] : []),
  ].join('\n');

  return { subject, html, text };
}

/* One plan per subscriber whose states (in their topics) actually changed. */
export function plansFor(subs: PayerUpdateSubscriber[], sections: Record<string, Item[]>) {
  return subs.flatMap((s) => {
    const topics: Topic[] = s.topics?.length ? (s.topics as Topic[]) : TOPICS.map((t) => t.key);
    const has = (st: string) => (sections[st] ?? []).some((i) => topics.includes(i.category));
    // Only mail when one of THEIR states changed. National plans apply
    // everywhere, so they ride along in that email but never trigger one.
    const own = s.states.filter((st) => st !== 'US' && has(st));
    if (own.length === 0) return [];
    return [{ sub: s, states: [...own, ...(has('US') ? ['US'] : [])], topics }];
  });
}

export async function GET(request: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) return json({ error: 'unauthorized' }, 401);
  const url = new URL(request.url);
  const dry = url.searchParams.get('dry') === '1';
  const force = url.searchParams.get('force') === '1';

  const cfg = requireConfig();
  if (isResponse(cfg)) return cfg;

  let state: DigestState;
  try {
    state = JSON.parse(await getRepoFileText(cfg.token, STATE_FILE)) as DigestState;
  } catch (err) {
    if ((err as { status?: number }).status !== 404) throw err;
    // First ever run covers the two weeks before it.
    state = { lastSent: new Date(Date.now() - 14 * 86400e3).toISOString().slice(0, 10), runs: [] };
  }

  const today = new Date().toISOString().slice(0, 10);
  const daysSince = (Date.parse(today) - Date.parse(state.lastSent)) / 86400e3;
  if (!force && daysSince < MIN_DAYS) return json({ skipped: `last send ${state.lastSent}, ${daysSince} days ago` });

  let subs: PayerUpdateSubscriber[] = [];
  try {
    subs = JSON.parse(await getRepoFileText(cfg.token, SUBS_FILE)) as PayerUpdateSubscriber[];
  } catch (err) {
    if ((err as { status?: number }).status !== 404) throw err;
  }

  const changes = changesSince(state.lastSent);
  const byState: Record<string, Change[]> = {};
  for (const c of changes) (byState[c.state] ||= []).push(c);
  const wanted = [...new Set(subs.flatMap((s) => [...s.states, 'US']))];
  const sections = await writeSections(wanted, byState);
  const plans = plansFor(subs, sections);
  const unsub = (token: string) => `${SITE}/api/payer-updates?unsubscribe=${token}`;

  if (dry) {
    return json({
      since: state.lastSent, changes: changes.length, subscribers: subs.length, emails: plans.length,
      sample: plans.slice(0, 5).map((p) => ({ to: p.sub.email, states: p.states, topics: p.topics, ...renderEmail(p.states, p.topics, sections, state.lastSent, unsub(p.sub.token)) })),
    });
  }

  const ses = sesClient();
  if (!ses) return json({ error: 'SES not configured (PAYER_SES_ACCESS_KEY_ID / PAYER_SES_SECRET_ACCESS_KEY)' }, 503);

  let sent = 0;
  let failed = 0;
  const since = state.lastSent;
  if (!AUTOSEND) {
    // Preview: one sample per distinct email, to the reviewer only.
    if (!PREVIEW_TO) return json({ error: 'preview mode needs PAYER_DIGEST_PREVIEW_TO' }, 503);
    const keyOf = (p: { states: string[]; topics: Topic[] }) => `${p.states.join()}|${p.topics.join()}`;
    const seen = new Set<string>();
    for (const p of plans) {
      const key = keyOf(p);
      if (seen.has(key)) continue;
      seen.add(key);
      const e = renderEmail(p.states, p.topics, sections, since, unsub(p.sub.token));
      const n = plans.filter((q) => keyOf(q) === key).length;
      try {
        await sendEmail(ses, { from: FROM, to: PREVIEW_TO, subject: `[PREVIEW, ${n} recipient${n === 1 ? '' : 's'}] ${e.subject}`, html: e.html, text: e.text });
        sent++;
      } catch (err) {
        failed++;
        console.error('payer-digest: preview failed', err);
      }
    }
  } else {
    for (const p of plans) {
      const e = renderEmail(p.states, p.topics, sections, since, unsub(p.sub.token));
      try {
        await sendEmail(ses, { from: FROM, to: p.sub.email, subject: e.subject, html: e.html, text: e.text, unsubscribeUrl: unsub(p.sub.token) });
        sent++;
      } catch (err) {
        failed++;
        console.error('payer-digest: send failed', p.sub.email, err);
      }
      await new Promise((r) => setTimeout(r, 80)); // stay under the SES per-second rate
    }
    // Move the window only for a real send; previews leave it for the real one.
    state.runs.push({ date: today, since, sent, failed });
    state.lastSent = today;
    await commitFiles(cfg.token, [{ path: STATE_FILE, content: JSON.stringify(state, null, 1) + '\n' }], `payer-digest: ${today}`);
  }

  if (SLACK && (sent || failed)) {
    await fetch(SLACK, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: 'payer-updates',
        source: AUTOSEND
          ? `Payer updates SENT to ${sent} subscribers${failed ? `, ${failed} failed` : ''} (changes since ${since})`
          : `Payer updates PREVIEW: ${sent} sample email${sent === 1 ? '' : 's'} sent to ${PREVIEW_TO} covering ${plans.length} subscribers. Nothing went to subscribers.`,
      }),
    }).catch(() => {});
  }

  return json({ mode: AUTOSEND ? 'send' : 'preview', since, subscribers: subs.length, emails: plans.length, sent, failed });
}
