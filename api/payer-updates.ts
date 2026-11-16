import { randomBytes } from 'node:crypto';
import { json, requireConfig, isResponse, getRepoFileText, commitFiles } from './sources/_shared.js';
import { STATE_META } from '../src/data/payers/types.js';

/* ================================================================
   /api/payer-updates  (public, no auth)

   POST { email, states: string[], topics?: string[], optIn: true, page?, website? }
     The "Get payer updates for your states" list on /payers. A visitor
     gives an email, picks their states and topics (Intake / Clinical
     care / Billing & ops), and ticks yes to joining. Every two weeks
     /api/payer-digest sends them ONE email covering every one of their
     states that changed (nothing changed = no email).

   Source of truth: payer-updates.json in the PRIVATE carelu-sources
   repo, one row per email. Signing up again with the same email
   replaces that person's states and topics. Each row carries an
   unsubscribe token for the email footer and List-Unsubscribe header.

   GET  ?unsubscribe=<token>  shows a confirm button (link scanners in
        corporate inboxes open every link, so a GET must never remove).
   POST ?unsubscribe=<token>  removes the row: the confirm button, and
        Gmail/Yahoo one-click unsubscribe (RFC 8058).

   Never blocks the visitor: storage failures still 200.
   ================================================================ */

export const config = { maxDuration: 30 };

const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const FILE = 'payer-updates.json';
const VALID_STATES = new Set([...STATE_META.map((s) => s.code), 'US']);
const ALL_TOPICS = ['intake', 'clinical', 'billing'];
const MARKETING_SLACK_WEBHOOK_URL = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';

export interface PayerUpdateSubscriber {
  email: string;
  states: string[];
  /** intake | clinical | billing. Absent = all three. */
  topics?: string[];
  ts: string;          // first joined
  updated: string;     // last time states/topics changed
  token: string;       // unsubscribe token
  page?: string;
  optInText: string;   // the exact wording they said yes to
}

/* Must match the checkbox text in src/components/PayerUpdatesSignup.tsx. */
export const OPT_IN_TEXT =
  'Yes, add me to the Carelu payer updates list. One email every two weeks with ' +
  'what changed for payers in my states. Unsubscribe any time.';

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

async function mutate(
  token: string,
  change: (rows: PayerUpdateSubscriber[]) => { rows: PayerUpdateSubscriber[]; message: string } | null
): Promise<boolean> {
  for (let attempt = 0; attempt < 4; attempt++) {
    let rows: PayerUpdateSubscriber[] = [];
    try {
      rows = JSON.parse(await getRepoFileText(token, FILE)) as PayerUpdateSubscriber[];
    } catch (err) {
      // 404 = first subscriber ever. Anything else must not be read as an
      // empty list, or the commit would wipe every subscriber.
      if ((err as { status?: number }).status !== 404) {
        console.error('payer-updates: read failed', err);
        await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
        continue;
      }
    }
    const next = change(rows);
    if (!next) return true;
    try {
      await commitFiles(token, [{ path: FILE, content: JSON.stringify(next.rows, null, 1) + '\n' }], next.message);
      return true;
    } catch (err) {
      console.error(`payer-updates: commit attempt ${attempt + 1} failed`, err);
      await new Promise((r) => setTimeout(r, 250 * (attempt + 1)));
    }
  }
  return false;
}

function htmlPage(inner: string, status = 200): Response {
  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>Carelu payer updates</title></head><body style="margin:0;font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;` +
    `background:#FAF8F3;color:#1A1A1A;display:flex;min-height:90vh;align-items:center;justify-content:center;padding:16px">` +
    `<div style="max-width:440px;text-align:center">${inner}` +
    `<p style="margin-top:18px"><a href="/payers" style="color:#2e5a26">Back to the payer directory</a></p></div></body></html>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } }
  );
}
const h1 = (t: string) => `<h1 style="font-family:Georgia,serif;font-weight:400;font-size:26px;margin:0 0 10px">${t}</h1>`;

async function unsubscribe(token: string): Promise<boolean> {
  const cfg = requireConfig();
  if (isResponse(cfg)) return false;
  return mutate(cfg.token, (rows) => {
    const row = rows.find((r) => r.token === token);
    if (!row) return null; // already gone: still a success
    return { rows: rows.filter((r) => r !== row), message: `payer-updates: unsubscribe ${row.email}` };
  });
}

export async function POST(request: Request): Promise<Response> {
  const unsubToken = new URL(request.url).searchParams.get('unsubscribe');
  if (unsubToken !== null) {
    if (!/^[0-9a-f]{32}$/.test(unsubToken)) return htmlPage(h1('That unsubscribe link is not valid.'), 400);
    const ok = await unsubscribe(unsubToken);
    return ok
      ? htmlPage(h1('You are off the payer updates list.') + '<p style="color:#5f5c55">You will not get these emails anymore.</p>')
      : htmlPage(h1('Something went wrong.') + '<p style="color:#5f5c55">Please try the link again in a minute.</p>', 500);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'bad request' }, 400);
  }
  if (str(body.website, 200) !== '') return json({ ok: true }); // honeypot

  const email = str(body.email, 254).toLowerCase();
  if (!EMAIL_RE.test(email)) return json({ error: 'invalid email' }, 400);
  if (body.optIn !== true) return json({ error: 'opt-in required' }, 400);
  const states = Array.from(
    new Set((Array.isArray(body.states) ? body.states : []).map((s) => str(s, 4).toUpperCase()))
  ).filter((s) => VALID_STATES.has(s)).sort();
  if (states.length === 0) return json({ error: 'pick at least one state' }, 400);
  const picked = new Set((Array.isArray(body.topics) ? body.topics : []).map((t) => str(t, 20).toLowerCase()));
  const topics = ALL_TOPICS.filter((t) => picked.has(t));
  if (topics.length === 0) return json({ error: 'pick at least one topic' }, 400);
  const page = str(body.page, 200);

  const cfg = requireConfig();
  if (isResponse(cfg)) {
    console.error('payer-updates: sources config missing, signup dropped', email);
    return json({ ok: true });
  }

  const now = new Date().toISOString();
  let isNew = false;
  const stored = await mutate(cfg.token, (rows) => {
    const existing = rows.find((r) => r.email === email);
    if (existing) {
      if (existing.states.join() === states.join() && (existing.topics ?? ALL_TOPICS).join() === topics.join()) return null;
      existing.states = states;
      existing.topics = topics;
      existing.updated = now;
      existing.optInText = OPT_IN_TEXT;
    } else {
      isNew = true;
      rows.push({
        email, states, topics, ts: now, updated: now,
        token: randomBytes(16).toString('hex'),
        ...(page ? { page } : {}),
        optInText: OPT_IN_TEXT,
      });
    }
    return { rows, message: `payer-updates: ${email} (${states.join(',')} / ${topics.join(',')})` };
  });
  if (!stored) console.error('payer-updates: GAVE UP storing', email);

  if (stored && isNew && MARKETING_SLACK_WEBHOOK_URL) {
    try {
      await fetch(MARKETING_SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, source: `Payer updates list · states ${states.join(', ')} · topics ${topics.join(', ')}${page ? ` | from ${page}` : ''}` }),
      });
    } catch (err) {
      console.error('payer-updates: slack notify failed (non-fatal)', err);
    }
  }

  return json({ ok: true, states, topics });
}

export async function GET(request: Request): Promise<Response> {
  const token = new URL(request.url).searchParams.get('unsubscribe') ?? '';
  if (!/^[0-9a-f]{32}$/.test(token)) return htmlPage(h1('That unsubscribe link is not valid.'), 400);
  return htmlPage(
    h1('Leave the payer updates list?') +
    `<p style="color:#5f5c55;line-height:1.55">You will stop getting the every-two-weeks payer update emails.</p>` +
    `<form method="post" action="/api/payer-updates?unsubscribe=${token}" style="margin-top:18px">` +
    `<button type="submit" style="font:600 15px -apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#fff;background:#1A1A1A;border:0;border-radius:100px;padding:12px 26px;cursor:pointer">Unsubscribe</button></form>`
  );
}
