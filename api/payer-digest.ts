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
const SITE = 'https://carelu.com'; // not www: it redirects, and one-click unsubscribe POSTs must not
const MIN_DAYS = 13;

const FROM = process.env.PAYER_DIGEST_FROM ?? 'Carelu Payer Updates <payers@carelu.com>';
const PREVIEW_TO = process.env.PAYER_DIGEST_PREVIEW_TO ?? '';
const POSTAL = process.env.PAYER_DIGEST_POSTAL_ADDRESS ?? '';
const AUTOSEND = (process.env.PAYER_DIGEST_AUTOSEND ?? '').toLowerCase() === 'yes';
const SLACK = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';

interface DigestState { lastSent: string; runs: { date: string; since: string; sent: number; failed: number }[] }
export type Topic = 'intake' | 'clinical' | 'billing';
/* Email order: the family's path through the practice, intake first. */
export const TOPICS: { key: Topic; label: string; blurb: string }[] = [
  { key: 'intake', label: 'Intake', blurb: 'Eligibility, diagnosis and referrals, documents, and the prior auth to start services.' },
  { key: 'clinical', label: 'Clinical care', blurb: 'Hours, supervision, staffing, treatment plans, reauthorization and telehealth.' },
  { key: 'billing', label: 'Billing & ops', blurb: 'Codes, rates, claims, credentialing and portals.' },
];
export interface Item { slug: string; category: Topic; headline: string; detail: string; suggestion: string }
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
        required: ['slug', 'category', 'headline', 'detail', 'suggestion'],
        properties: {
          slug: { type: 'string' },
          category: { type: 'string', enum: ['intake', 'clinical', 'billing'] },
          headline: { type: 'string' },
          detail: { type: 'string' },
          suggestion: { type: 'string' },
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
- headline: the payer name and what changed, under 90 characters. detail: one or two plain sentences: the new rule and the effective date if given. Facts only.
- suggestion: "What this may mean for you". Write it the way an experienced ABA clinical director would brief their own intake, clinical or billing team: one or two sentences of practical steps a practice might consider because of this change (for example: update the intake checklist, check which active authorizations renew before the effective date, tell BCBAs before their next treatment plan, update the fee schedule or claim templates, re-train staff on a new form). Phrase steps as suggestions ("Consider...", "You may want to...", "Worth checking..."), never as orders, and never as legal, billing or clinical advice. Base it only on the change itself; never invent numbers, dates or rules. Skip the obvious ("read the policy").
- Only state facts present in the records. Never invent dates, numbers or rules.
- Never mention Carelu's own corrections or that the directory was wrong before; just state the current rule.
- No em dashes or en dashes anywhere, including the suggestion. Plain words, no jargon beyond standard ABA/insurance terms (CPT codes, prior auth, MCO are fine).
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
  // Name the subscriber's own states; national plans ride along, tagged per item.
  const own = states.filter((s) => s !== 'US');
  const names = (own.length ? own : states).map((s) => STATE_NAME[s] ?? s);
  const stateList = names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0];
  // Topic first (intake, then clinical, then billing). Inside a topic: the
  // subscriber's own states in order, national plans last.
  const order = [...states.filter((s) => s !== 'US'), 'US'];
  const cats = TOPICS.filter((t) => topics.includes(t.key))
    .map((t) => ({
      t,
      items: order.flatMap((st) => (sections[st] ?? []).filter((i) => i.category === t.key).map((i) => ({ ...i, st }))),
    }))
    .filter((c) => c.items.length);
  const count = cats.reduce((n, c) => n + c.items.length, 0);
  const subject = `${stateList} payer updates: ${count} ${count === 1 ? 'change' : 'changes'}`;
  const guideUrl = (slug: string) => `${SITE}/payers/${slug}?utm_source=payer-updates&utm_medium=email`;
  const contents = cats.map((c) => `${c.t.label} (${c.items.length})`).join(' · ');
  // Carelu email brand: logo on cream, sky hero, Instrument Serif for the
  // big headings only, DM Sans for everything else, deep green #1A2E1F,
  // white cards. One type scale (13 / 15 / 18 / 28 / 50) so it reads clean.
  // Signed by the brand, never a person. Tables + inline styles so Gmail
  // and Outlook keep the layout.
  const SERIF = `'Instrument Serif','Times New Roman',Georgia,serif`;
  const SANS = `'DM Sans',-apple-system,'Segoe UI',Helvetica,Arial,sans-serif`;
  const DEEP = '#1A2E1F';
  const BODY = '#3A3833';
  const MUTED = '#6B675E';
  const LINK = '#3F6E35';
  const CREAM = '#FAF8F3';
  const SAGE = '#F0F5EE';
  const LIME = '#D4F25C';
  const LINE = '#E7E4DC';
  const utm = 'utm_source=payer-updates&utm_medium=email';
  const LOGO = 'https://carelu.com/carelu-logo.png';
  const pill = (t: string, bg: string, fg: string) => `<span style="display:inline-block;padding:4px 10px;border-radius:100px;background-color:${bg};font-family:${SANS};font-size:12px;font-weight:600;line-height:1.2;color:${fg};">${t}</span>`;
  const table = (inner: string, style = 'border-collapse:collapse;') => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${style}">${inner}</table>`;

  const hasIntake = cats.some((c) => c.t.key === 'intake');
  const careluNote = table(`<tr><td style="background-color:${DEEP};border-radius:18px;padding:22px 26px;">
          ${table(`<tr>
            <td width="34" valign="top" style="padding-top:2px;"><div style="width:22px;height:22px;border-radius:50%;background-color:${LIME};text-align:center;font-family:${SANS};font-size:13px;font-weight:700;line-height:22px;color:${DEEP};">&#10003;</div></td>
            <td valign="top">
              <div style="font-family:${SANS};font-size:16px;font-weight:600;line-height:1.4;color:#FFFFFF;">Using Carelu? Your intake is covered.</div>
              <div style="padding-top:6px;font-family:${SANS};font-size:15px;line-height:1.6;color:rgba(255,255,255,0.82);">We make the intake changes below in your Carelu intake for you, automatically, and let you know once each one is live. Nothing to do on your end.</div>
            </td></tr>`)}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:24px;');

  const contentsRow = cats.map((c) => `<td align="center" style="padding:0 4px;">
            <div style="font-family:${SERIF};font-size:34px;line-height:1;color:${DEEP};">${c.items.length}</div>
            <div style="padding-top:6px;font-family:${SANS};font-size:13px;font-weight:500;color:${MUTED};">${esc(c.t.label)}</div>
          </td>`).join('');

  const itemRow = (i: Item & { st: string }, k: number) => `
            <tr><td style="padding:26px 0;${k ? `border-top:1px solid ${LINE};` : ''}">
              ${pill(esc(STATE_NAME[i.st] ?? i.st), SAGE, LINK)}
              <div style="padding-top:12px;font-family:${SANS};font-size:18px;font-weight:600;line-height:1.4;color:${DEEP};">${esc(i.headline)}</div>
              <div style="padding-top:8px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY};">${esc(i.detail)}</div>
              ${i.suggestion ? `<div style="margin-top:16px;padding:2px 0 2px 16px;border-left:3px solid ${LIME};">
                <div style="font-family:${SANS};font-size:13px;font-weight:600;color:${DEEP};">What this may mean for you</div>
                <div style="padding-top:4px;font-family:${SANS};font-size:15px;line-height:1.65;color:${BODY};">${esc(i.suggestion)}</div>
              </div>` : ''}
              <div style="padding-top:16px;"><a href="${guideUrl(i.slug)}" style="font-family:${SANS};font-size:14px;font-weight:600;color:${LINK};text-decoration:none;">Read the full guide &rarr;</a></div>
            </td></tr>`;

  const blocks = cats.map((c) => `
      ${table(`<tr><td style="padding:44px 4px 14px 4px;">
          <div style="font-family:${SERIF};font-size:30px;line-height:1.15;letter-spacing:-0.01em;color:${DEEP};">${esc(c.t.label)}</div>
          <div style="padding-top:6px;font-family:${SANS};font-size:14px;line-height:1.55;color:${MUTED};">${esc(c.t.blurb)}</div>
        </td></tr>`)}
      ${table(`<tr><td style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:2px 28px;">
          ${table(c.items.map(itemRow).join(''))}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;')}`).join('');

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${esc(subject)}</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
@media (max-width: 620px) { .hero-pad { padding: 48px 22px 44px 22px !important; } .hero-h { font-size: 40px !important; } }
</style></head>
<body style="margin:0;padding:0;background-color:${CREAM};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(contents)}. What changed for payers in ${esc(stateList)}, and what it may mean for your team.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${CREAM};">
<tr><td align="center" style="padding:28px 12px 40px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;background-color:${CREAM};color:${BODY};font-family:${SANS};">
  <tr><td style="padding:0;">

      <!-- MASTHEAD -->
      ${table(`<tr>
          <td valign="middle" style="padding:0 4px 20px 4px;"><a href="${SITE}?${utm}"><img src="${LOGO}" width="74" height="32" alt="Carelu" style="display:block;border:0;width:74px;height:auto;"></a></td>
          <td align="right" valign="middle" style="padding:0 4px 20px 4px;font-family:${SANS};font-size:13px;font-weight:500;color:${MUTED};">Payer updates &middot; ${fmt(new Date().toISOString().slice(0, 10))}</td>
        </tr>`)}

      <!-- HERO: sky -->
      ${table(`<tr><td bgcolor="#8FB2BF" background="https://carelu.com/hero-sky-1920.jpg" style="background-color:#8FB2BF;background-image:url('https://carelu.com/hero-sky-1920.jpg');background-size:cover;background-position:center 30%;background-repeat:no-repeat;border-radius:22px;padding:0;">
          ${table(`<tr><td align="center" class="hero-pad" style="padding:60px 40px 54px 40px;background:linear-gradient(180deg,rgba(0,0,0,0.30) 0%,rgba(0,0,0,0.12) 60%,rgba(0,0,0,0.04) 100%);border-radius:22px;">
              <div class="hero-h" style="font-family:${SERIF};font-weight:400;font-size:50px;line-height:1.05;letter-spacing:-0.01em;color:#FFFFFF;text-shadow:0 2px 28px rgba(0,0,0,0.32);">What changed in <em style="font-style:italic;">${esc(stateList)}</em></div>
              <div style="padding-top:16px;font-family:${SANS};font-size:16px;line-height:1.6;color:rgba(255,255,255,0.95);text-shadow:0 1px 2px rgba(0,0,0,0.3),0 2px 14px rgba(0,0,0,0.35);">${count} payer ${count === 1 ? 'change' : 'changes'} since ${fmt(since)}</div>
            </td></tr>`)}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;')}

      <!-- AT A GLANCE -->
      ${table(`<tr><td style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:22px 12px;">
          ${table(`<tr>${contentsRow}</tr>`)}
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:16px;')}

      ${hasIntake ? careluNote : ''}

      ${blocks}

      <!-- CLOSING BAND -->
      ${table(`<tr><td align="center" style="background-color:${DEEP};border-radius:22px;padding:48px 36px 46px 36px;">
          <div style="font-family:${SERIF};font-weight:400;font-size:36px;line-height:1.12;letter-spacing:-0.01em;color:${CREAM};">Have any questions?</div>
          <div style="padding-top:14px;max-width:420px;margin:0 auto;font-family:${SANS};font-size:15px;line-height:1.65;color:rgba(250,248,243,0.82);">Reply to this email, and we're happy to answer them. Every answer comes from our payer guides with a link to the source. You can also ask the payer directory any time.</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate;margin:26px auto 0 auto;">
            <tr><td style="background-color:${LIME};border-radius:100px;"><a href="${SITE}/payers?${utm}" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:14px;font-weight:600;color:${DEEP};text-decoration:none;white-space:nowrap;">Open the directory &rarr;</a></td></tr>
          </table>
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:44px;')}

      <!-- BOOK A DEMO -->
      ${table(`<tr><td align="center" style="background-color:#FFFFFF;border:1px solid ${LINE};border-radius:18px;padding:30px 28px;">
          <div style="font-family:${SERIF};font-weight:400;font-size:24px;line-height:1.2;color:${DEEP};">See Carelu run your intake</div>
          <div style="padding-top:8px;max-width:400px;margin:0 auto;font-family:${SANS};font-size:14px;line-height:1.6;color:${MUTED};">A short walkthrough with our team, built around your states and payers.</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse:separate;margin:20px auto 0 auto;">
            <tr><td style="background-color:${DEEP};border-radius:100px;"><a href="${SITE}/demo?${utm}&utm_content=book-demo" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:14px;font-weight:600;color:${CREAM};text-decoration:none;white-space:nowrap;">Book a demo with Carelu &rarr;</a></td></tr>
          </table>
        </td></tr>`, 'border-collapse:separate;border-spacing:0;margin-top:16px;')}

      <!-- FOOTER -->
      ${table(`<tr><td align="center" style="padding:32px 24px 0 24px;">
          <a href="${SITE}?${utm}"><img src="${LOGO}" width="60" height="26" alt="Carelu" style="display:block;border:0;width:60px;height:auto;margin:0 auto;opacity:0.85;"></a>
          <div style="padding-top:16px;font-family:${SANS};font-size:12px;line-height:1.7;color:${MUTED};">
            &ldquo;What this may mean for you&rdquo; notes are suggestions to talk through with your team, not legal, billing or clinical advice. Always check the payer's current policy for a specific member.<br><br>
            You get this because you joined the payer updates list on carelu.com.<br>
            <a href="${SITE}/payers?${utm}#payer-updates" style="color:${DEEP};">Change your states or topics</a> &nbsp;&middot;&nbsp; <a href="${unsubscribeUrl}" style="color:${MUTED};">Unsubscribe</a>${POSTAL ? `<br>${esc(POSTAL)}` : ''}
          </div>
        </td></tr>`)}

  </td></tr>
</table>
</td></tr>
</table>
</body></html>`;

  const text = [
    `Carelu payer updates: what changed in ${names.join(', ')} since ${fmt(since)}.`,
    `In this email: ${contents}`,
    ...(cats.some((c) => c.t.key === 'intake') ? ['', 'Using Carelu? Your intake is covered. We make the intake changes below in your Carelu intake for you, automatically, and let you know once each one is live.'] : []),
    ...cats.flatMap((c) => [
      '', c.t.label.toUpperCase(),
      ...c.items.map((i) => `- [${STATE_NAME[i.st] ?? i.st}] ${i.headline}\n  ${i.detail}${i.suggestion ? `\n  What this may mean for you: ${i.suggestion}` : ''}\n  ${guideUrl(i.slug)}`),
    ]),
    '', "Have any questions? Reply to this email, and we're happy to answer them.",
    '', `Book a demo with Carelu: ${SITE}/demo?${utm}&utm_content=book-demo`,
    '', 'The "what this may mean for you" notes are suggestions, not legal, billing or clinical advice.',
    `Change states or topics: ${SITE}/payers#payer-updates`, `Unsubscribe: ${unsubscribeUrl}`, ...(POSTAL ? [POSTAL] : []),
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
