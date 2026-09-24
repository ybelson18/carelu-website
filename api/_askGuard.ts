import { getRepoFileText, commitFiles } from './sources/_shared.js';
import { classifyQuestion, type QuestionTags } from './_askIntent.js';

/* ================================================================
   Spend + abuse guard for /api/ask (the payer-directory chat).

   The chat costs real money per question, so:
     - a visitor gives a work email before their first answer
       (ANON_FREE = 0 anonymous questions a day); the email is
       announced in #marketing by /api/leads;
     - an email gets EMAIL_DAILY questions a day, an IP IP_DAILY;
     - the whole chat stops for the day at HARD_CAP_USD;
     - #marketing is pinged once a day when spend passes ALERT_USD,
       with who is using it.

   Usage lives in the PRIVATE carelu-sources repo, one file per day
   (ask-usage/YYYY-MM-DD.json, New York date), next to leads.json.
   It is a read-modify-write, so a race between two answers can lose
   a count; fine for a spend guard, and the loser retries.

   Every answered question is logged WITH who asked it (email, how we
   know it, browser id, conversation id, page) and an intent label, so
   the team can see what people care about at /sources/questions.
   ask-usage/identities.json remembers which email each browser id and
   IP belongs to: a later question that arrives without an email (new
   tab, cleared storage, a storage blip) is still attributed.

   Fails OPEN: if GitHub is unreachable, questions still go through.
   A storage outage must not take the chat down, and the Anthropic
   workspace spend limit is the hard backstop behind this.
   ================================================================ */

export const ANON_FREE = 0;
export const EMAIL_DAILY = 40;
export const IP_DAILY = 80;
export const ALERT_USD = 5;
export const HARD_CAP_USD = 25;

// claude-opus-5-5, $ per million tokens (5-minute cache write = 1.25x input).
const PRICE = { input: 4, output: 20, cacheWrite: 5, cacheRead: 0.2 };

const TOKEN = process.env.GH_SOURCES_TOKEN ?? '';
const MARKETING_SLACK_WEBHOOK_URL = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';
// Every question is posted to Slack as it comes in. A dedicated channel's
// Workflow Builder trigger goes in SLACK_CHAT_QUESTIONS_WEBHOOK_URL (declaring
// the same two variables, `email` and `source`); until then, #marketing.
const QUESTIONS_SLACK_WEBHOOK_URL = process.env.SLACK_CHAT_QUESTIONS_WEBHOOK_URL || MARKETING_SLACK_WEBHOOK_URL;

interface Tally { q: number; cost: number }
interface DayUsage {
  date: string;
  costUsd: number;
  questions: number;
  alerted?: boolean;
  capped?: boolean;
  byEmail: Record<string, Tally>;
  byIp: Record<string, Tally>;
  log: LogEntry[];
}

/** How we know who asked: they typed it, their browser was linked to it
 *  earlier, or (weakest) their IP was. */
export type EmailSource = 'given' | 'browser' | 'ip';

export interface LogEntry {
  ts: string;
  email?: string;
  emailSource?: EmailSource;
  ip: string;
  visitorId?: string;
  conversationId?: string;
  page?: string;
  q: string;
  answer?: string;
  cost: number;
  tags?: QuestionTags;
}

export interface Asked {
  ip: string;
  email?: string;
  emailSource?: EmailSource;
  visitorId?: string;
  conversationId?: string;
  page?: string;
  question: string;
  previousQuestion?: string;
  answer: string;
}

interface Identities {
  visitors: Record<string, { email: string; ts: string }>;
  ips: Record<string, { email: string; ts: string }>;
}
const IDENTITIES = 'ask-usage/identities.json';
// An IP is shared by offices and carriers; only trust a recent link.
const IP_LINK_DAYS = 30;

async function readIdentities(): Promise<Identities | null> {
  if (!TOKEN) return null;
  try {
    return JSON.parse(await getRepoFileText(TOKEN, IDENTITIES)) as Identities;
  } catch (err) {
    if ((err as { status?: number }).status === 404) return { visitors: {}, ips: {} };
    console.error('askGuard: identities read failed', err);
    return null;
  }
}

/** Who is this, when the request carried no email? Browser link first, then a recent IP link. */
export async function resolveIdentity(visitorId: string | undefined, ip: string):
    Promise<{ email: string; source: EmailSource } | undefined> {
  const ids = await readIdentities();
  if (!ids) return undefined;
  if (visitorId && ids.visitors[visitorId]) return { email: ids.visitors[visitorId].email, source: 'browser' };
  const byIp = ids.ips[ip];
  if (byIp && Date.now() - Date.parse(byIp.ts) < IP_LINK_DAYS * 86400_000) return { email: byIp.email, source: 'ip' };
  return undefined;
}

export interface Usage {
  input_tokens: number;
  output_tokens: number;
  cache_creation_input_tokens?: number | null;
  cache_read_input_tokens?: number | null;
}

export function costOf(u: Usage): number {
  return (
    u.input_tokens * PRICE.input +
    u.output_tokens * PRICE.output +
    (u.cache_creation_input_tokens ?? 0) * PRICE.cacheWrite +
    (u.cache_read_input_tokens ?? 0) * PRICE.cacheRead
  ) / 1_000_000;
}

function today(): string {
  // en-CA formats as YYYY-MM-DD.
  return new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
}

const pathFor = (date: string) => `ask-usage/${date}.json`;

function empty(date: string): DayUsage {
  return { date, costUsd: 0, questions: 0, byEmail: {}, byIp: {}, log: [] };
}

/** null = storage unavailable (fail open). */
async function read(date: string): Promise<DayUsage | null> {
  if (!TOKEN) return null;
  try {
    return JSON.parse(await getRepoFileText(TOKEN, pathFor(date))) as DayUsage;
  } catch (err) {
    if ((err as { status?: number }).status === 404) return empty(date);
    console.error('askGuard: read failed', err);
    return null;
  }
}

export function clientIp(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  return (fwd?.split(',')[0] ?? request.headers.get('x-real-ip') ?? 'unknown').trim();
}

export type Verdict =
  | { ok: true }
  | { ok: false; status: number; reason: 'email' | 'limit' | 'closed'; message: string };

export async function check(ip: string, email: string | undefined): Promise<Verdict> {
  const day = await read(today());
  if (!day) return { ok: true };

  if (day.costUsd >= HARD_CAP_USD) {
    return { ok: false, status: 429, reason: 'closed',
      message: 'The assistant has hit its limit for today. Browse the guides below, or check back tomorrow.' };
  }
  const byIp = day.byIp[ip]?.q ?? 0;
  if (byIp >= IP_DAILY) {
    return { ok: false, status: 429, reason: 'limit',
      message: "You've reached today's question limit. Browse the guides below, or come back tomorrow." };
  }
  if (!email) {
    if (byIp >= ANON_FREE) {
      return { ok: false, status: 401, reason: 'email', message: 'Enter your work email to get your answer.' };
    }
    return { ok: true };
  }
  if ((day.byEmail[email]?.q ?? 0) >= EMAIL_DAILY) {
    return { ok: false, status: 429, reason: 'limit',
      message: "You've reached today's question limit. Browse the guides below, or come back tomorrow." };
  }
  return { ok: true };
}

/** Record one answered question (who, what, intent) and fire the daily alert if it crossed. */
export async function record(asked: Asked, cost: number): Promise<void> {
  const tags = await classifyQuestion(asked.question, asked.previousQuestion);
  let followUpOf = 0;
  try {
    followUpOf = await store(asked, cost, tags);
  } finally {
    // Slack even when storage failed: no question goes unseen.
    await postQuestion(asked, tags, followUpOf);
  }
}

const INTENT_LABEL: Record<string, string> = {
  'family-coverage-check': 'checking a family\u2019s coverage',
  'intake-process': 'intake process',
  'billing-and-rates': 'billing & rates',
  'authorization': 'prior auth',
  'credentialing-network': 'credentialing / network',
  'market-research': 'market research',
  'vendor-evaluation': 'evaluating Carelu',
  'other': 'other',
};

async function postQuestion(asked: Asked, tags: QuestionTags | undefined, followUpOf: number): Promise<void> {
  if (!QUESTIONS_SLACK_WEBHOOK_URL) return;
  const who = asked.email
    ? (asked.emailSource === 'browser' ? ' (recognised browser)' : asked.emailSource === 'ip' ? ' (matched by IP, unconfirmed)' : '')
    : '';
  const source = [
    `Payer chat question${followUpOf > 1 ? ` (#${followUpOf} in this conversation)` : ''}: "${asked.question.slice(0, 600)}"`,
    tags ? `wants: ${INTENT_LABEL[tags.intent] ?? tags.intent} \u2014 ${tags.summary}` : '',
    tags && (tags.states.length || tags.payers.length) ? `about: ${[...tags.states, ...tags.payers].join(', ')}` : '',
    asked.email ? `asked by ${asked.email}${who}` : `anonymous (IP ${asked.ip})`,
    asked.page ? `on ${asked.page}` : '',
  ].filter(Boolean).join(' | ');
  try {
    // Workflow Builder triggers render only their declared variables: `email` and `source`.
    await fetch(QUESTIONS_SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: asked.email ?? 'anonymous', source }),
    });
  } catch (err) {
    console.error('askGuard: slack question post failed', err);
  }
}

/** Write the question to the day's log (+ identity links). Returns its position in the conversation. */
async function store(asked: Asked, cost: number, tags: QuestionTags | undefined): Promise<number> {
  if (!TOKEN) return 0;
  const { ip, email } = asked;
  const date = today();
  for (let attempt = 0; attempt < 4; attempt++) {
    const [day, ids] = await Promise.all([read(date), readIdentities()]);
    if (!day) return 0;

    day.costUsd = Math.round((day.costUsd + cost) * 10000) / 10000;
    day.questions += 1;
    const bump = (m: Record<string, Tally>, k: string) => {
      const t = m[k] ?? { q: 0, cost: 0 };
      m[k] = { q: t.q + 1, cost: Math.round((t.cost + cost) * 10000) / 10000 };
    };
    bump(day.byIp, ip);
    if (email) bump(day.byEmail, email);
    const entry: LogEntry = {
      ts: new Date().toISOString(),
      ...(email ? { email, emailSource: asked.emailSource ?? 'given' } : {}),
      ip,
      ...(asked.visitorId ? { visitorId: asked.visitorId } : {}),
      ...(asked.conversationId ? { conversationId: asked.conversationId } : {}),
      ...(asked.page ? { page: asked.page } : {}),
      q: asked.question.slice(0, 1000),
      answer: asked.answer.slice(0, 1500),
      cost: Math.round(cost * 10000) / 10000,
      ...(tags ? { tags } : {}),
    };
    day.log.push(entry);

    const crossedAlert = !day.alerted && day.costUsd >= ALERT_USD;
    const crossedCap = !day.capped && day.costUsd >= HARD_CAP_USD;
    if (crossedAlert) day.alerted = true;
    if (crossedCap) day.capped = true;

    // Only a typed email creates links; inferred ones never overwrite them.
    const files = [{ path: pathFor(date), content: JSON.stringify(day, null, 1) + '\n' }];
    if (ids && email && (asked.emailSource ?? 'given') === 'given') {
      const now = new Date().toISOString();
      if (asked.visitorId) ids.visitors[asked.visitorId] = { email, ts: now };
      ids.ips[ip] = { email, ts: now };
      files.push({ path: IDENTITIES, content: JSON.stringify(ids, null, 1) + '\n' });
    }

    try {
      await commitFiles(TOKEN, files, `ask: ${date} $${day.costUsd.toFixed(2)} (${day.questions}q)`);
    } catch (err) {
      console.error(`askGuard: commit attempt ${attempt + 1} failed`, err);
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
      continue;
    }

    if (crossedAlert) await alert(day, `passed $${ALERT_USD} today`);
    if (crossedCap) await alert(day, `hit the $${HARD_CAP_USD} daily cap and is paused until tomorrow`);
    return asked.conversationId ? day.log.filter((e) => e.conversationId === asked.conversationId).length : 1;
  }
  console.error('askGuard: GAVE UP recording usage', ip, email);
  return 0;
}

async function alert(day: DayUsage, what: string): Promise<void> {
  const top = (m: Record<string, Tally>) =>
    Object.entries(m).sort((a, b) => b[1].cost - a[1].cost).slice(0, 5)
      .map(([k, t]) => `${k} ${t.q}q $${t.cost.toFixed(2)}`).join(', ');
  const anonQ = day.log.filter((l) => !l.email).length;
  const source = [
    `Payer chat spend ${what}: $${day.costUsd.toFixed(2)} across ${day.questions} questions (${day.date})`,
    `top emails: ${top(day.byEmail) || 'none'}`,
    `top IPs: ${top(day.byIp)}`,
    `${anonQ} anonymous questions`,
    `full log: carelu-sources/ask-usage/${day.date}.json`,
  ].join(' | ');
  console.warn('askGuard alert:', source);
  if (!MARKETING_SLACK_WEBHOOK_URL) return;
  try {
    // The marketing workflow declares exactly `email` and `source` (see api/leads.ts).
    await fetch(MARKETING_SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'payer chat spend alert', source }),
    });
  } catch (err) {
    console.error('askGuard: slack alert failed', err);
  }
}
