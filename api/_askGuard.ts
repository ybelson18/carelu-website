import { getRepoFileText, commitFiles } from './sources/_shared.js';

/* ================================================================
   Spend + abuse guard for /api/ask (the payer-directory chat).

   The chat costs real money per question, so:
     - an anonymous visitor gets ANON_FREE questions a day, then must
       give an email (the same soft gate the referral-list download
       uses; the email is announced in #marketing by /api/leads);
     - an email gets EMAIL_DAILY questions a day, an IP IP_DAILY;
     - the whole chat stops for the day at HARD_CAP_USD;
     - #marketing is pinged once a day when spend passes ALERT_USD,
       with who is using it.

   Usage lives in the PRIVATE carelu-sources repo, one file per day
   (ask-usage/YYYY-MM-DD.json, New York date), next to leads.json.
   It is a read-modify-write, so a race between two answers can lose
   a count; fine for a spend guard, and the loser retries.

   Fails OPEN: if GitHub is unreachable, questions still go through.
   A storage outage must not take the chat down, and the Anthropic
   workspace spend limit is the hard backstop behind this.
   ================================================================ */

export const ANON_FREE = 2;
export const EMAIL_DAILY = 40;
export const IP_DAILY = 80;
export const ALERT_USD = 5;
export const HARD_CAP_USD = 25;

// claude-opus-4-8, $ per million tokens.
const PRICE = { input: 5, output: 25, cacheWrite: 6.25, cacheRead: 0.5 };

const TOKEN = process.env.GH_SOURCES_TOKEN ?? '';
const MARKETING_SLACK_WEBHOOK_URL = process.env.SLACK_MARKETING_WEBHOOK_URL ?? '';

interface Tally { q: number; cost: number }
interface DayUsage {
  date: string;
  costUsd: number;
  questions: number;
  alerted?: boolean;
  capped?: boolean;
  byEmail: Record<string, Tally>;
  byIp: Record<string, Tally>;
  log: { ts: string; email?: string; ip: string; q: string; cost: number }[];
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
      return { ok: false, status: 401, reason: 'email', message: 'Enter your work email to keep asking.' };
    }
    return { ok: true };
  }
  if ((day.byEmail[email]?.q ?? 0) >= EMAIL_DAILY) {
    return { ok: false, status: 429, reason: 'limit',
      message: "You've reached today's question limit. Browse the guides below, or come back tomorrow." };
  }
  return { ok: true };
}

/** Record one answered question and fire the daily alert if it crossed. */
export async function record(ip: string, email: string | undefined, question: string, cost: number): Promise<void> {
  if (!TOKEN) return;
  const date = today();
  for (let attempt = 0; attempt < 4; attempt++) {
    const day = await read(date);
    if (!day) return;

    day.costUsd = Math.round((day.costUsd + cost) * 10000) / 10000;
    day.questions += 1;
    const bump = (m: Record<string, Tally>, k: string) => {
      const t = m[k] ?? { q: 0, cost: 0 };
      m[k] = { q: t.q + 1, cost: Math.round((t.cost + cost) * 10000) / 10000 };
    };
    bump(day.byIp, ip);
    if (email) bump(day.byEmail, email);
    day.log.push({ ts: new Date().toISOString(), ...(email ? { email } : {}), ip, q: question.slice(0, 300), cost: Math.round(cost * 10000) / 10000 });

    const crossedAlert = !day.alerted && day.costUsd >= ALERT_USD;
    const crossedCap = !day.capped && day.costUsd >= HARD_CAP_USD;
    if (crossedAlert) day.alerted = true;
    if (crossedCap) day.capped = true;

    try {
      await commitFiles(TOKEN, [{ path: pathFor(date), content: JSON.stringify(day, null, 1) + '\n' }],
        `ask: ${date} $${day.costUsd.toFixed(2)} (${day.questions}q)`);
    } catch (err) {
      console.error(`askGuard: commit attempt ${attempt + 1} failed`, err);
      await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
      continue;
    }

    if (crossedAlert) await alert(day, `passed $${ALERT_USD} today`);
    if (crossedCap) await alert(day, `hit the $${HARD_CAP_USD} daily cap and is paused until tomorrow`);
    return;
  }
  console.error('askGuard: GAVE UP recording usage', ip, email);
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
