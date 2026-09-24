import { json, requireConfig, isResponse, requireAuth, getRepoFileText, listRepoDir } from './_shared.js';
import type { LogEntry } from '../_askGuard.js';

/* ================================================================
   GET /api/sources/questions?days=30  (auth required)
   Who asked the payer chat what, and why. Reads the per-day usage logs
   (ask-usage/YYYY-MM-DD.json) and leads.json from the private
   carelu-sources repo and groups every question by person, then by
   conversation, with the intent label each question was tagged with.
   Questions with no known email are grouped by browser id / IP.
   ================================================================ */

interface Lead { email: string; source: string; name?: string; company?: string; ts: string }

export async function GET(request: Request): Promise<Response> {
  const cfg = requireConfig();
  if (isResponse(cfg)) return cfg;
  const unauthorized = requireAuth(request, cfg.secret, Date.now());
  if (unauthorized) return unauthorized;

  const days = Math.min(Math.max(Number(new URL(request.url).searchParams.get('days')) || 30, 1), 365);
  const since = new Date(Date.now() - days * 86400_000).toISOString().slice(0, 10);

  let entries: LogEntry[] = [];
  let leads: Lead[] = [];
  try {
    const files = (await listRepoDir(cfg.token, 'ask-usage'))
      .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f) && f.slice(0, 10) >= since)
      .sort();
    const [dayTexts, leadsText] = await Promise.all([
      Promise.all(files.map((f) => getRepoFileText(cfg.token, `ask-usage/${f}`))),
      getRepoFileText(cfg.token, 'leads.json').catch(() => '[]'),
    ]);
    entries = dayTexts.flatMap((t) => (JSON.parse(t) as { log?: LogEntry[] }).log ?? []);
    leads = JSON.parse(leadsText) as Lead[];
  } catch (err) {
    console.error('sources/questions read failed', err);
    return json({ error: 'could not read the question log' }, 502);
  }

  const leadFor = new Map<string, Lead>();
  for (const l of leads) if (!leadFor.has(l.email) || l.name || l.company) leadFor.set(l.email, l);

  const count = (xs: string[]) =>
    Object.entries(xs.reduce<Record<string, number>>((m, x) => ((m[x] = (m[x] ?? 0) + 1), m), {}))
      .sort((a, b) => b[1] - a[1]);

  // Group: person (email, else browser id, else IP) -> conversation -> questions.
  const people = new Map<string, {
    key: string; email?: string; known: boolean; name?: string; company?: string;
    sources: Set<string>; firstSeen: string; lastSeen: string; cost: number;
    intents: string[]; conversations: Map<string, { id: string; page?: string; started: string; questions: LogEntry[] }>;
  }>();
  for (const e of entries) {
    const key = e.email ?? (e.visitorId ? `browser ${e.visitorId.slice(0, 8)}` : `ip ${e.ip}`);
    let p = people.get(key);
    if (!p) {
      const lead = e.email ? leadFor.get(e.email) : undefined;
      p = { key, email: e.email, known: !!e.email, name: lead?.name, company: lead?.company, sources: new Set(),
        firstSeen: e.ts, lastSeen: e.ts, cost: 0, intents: [], conversations: new Map() };
      people.set(key, p);
    }
    if (e.emailSource) p.sources.add(e.emailSource);
    if (e.ts < p.firstSeen) p.firstSeen = e.ts;
    if (e.ts > p.lastSeen) p.lastSeen = e.ts;
    p.cost += e.cost;
    if (e.tags) p.intents.push(e.tags.intent);
    const cid = e.conversationId ?? `solo-${e.ts}`;
    const c = p.conversations.get(cid) ?? { id: cid, page: e.page, started: e.ts, questions: [] };
    c.questions.push(e);
    p.conversations.set(cid, c);
  }

  const tagged = entries.filter((e) => e.tags);
  return json({
    days,
    totals: {
      questions: entries.length,
      people: [...people.values()].filter((p) => p.known).length,
      unknown: [...people.values()].filter((p) => !p.known).length,
      costUsd: Math.round(entries.reduce((s, e) => s + e.cost, 0) * 100) / 100,
      tagged: tagged.length,
    },
    intents: count(tagged.map((e) => e.tags!.intent)),
    topics: count(tagged.flatMap((e) => e.tags!.topics)).slice(0, 20),
    states: count(tagged.flatMap((e) => e.tags!.states)).slice(0, 20),
    payers: count(tagged.flatMap((e) => e.tags!.payers)).slice(0, 20),
    people: [...people.values()]
      .sort((a, b) => b.lastSeen.localeCompare(a.lastSeen))
      .map((p) => ({
        key: p.key, email: p.email, known: p.known, name: p.name, company: p.company,
        emailSources: [...p.sources], firstSeen: p.firstSeen, lastSeen: p.lastSeen,
        costUsd: Math.round(p.cost * 100) / 100,
        questions: [...p.conversations.values()].reduce((n, c) => n + c.questions.length, 0),
        intents: count(p.intents),
        conversations: [...p.conversations.values()]
          .sort((a, b) => b.started.localeCompare(a.started))
          .map((c) => ({ id: c.id, page: c.page, started: c.started, questions: c.questions })),
      })),
  }, 200, { 'cache-control': 'no-store' });
}
