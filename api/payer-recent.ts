import { json, requireConfig, isResponse, commitFiles } from './sources/_shared.js';
import { changesSince, writeSections, type Change } from './payer-digest.js';

/* ================================================================
   GET /api/payer-recent   (Vercel cron, daily 12:00 UTC)

   Writes what changed for payers in every state over the last 30 days,
   in the same items the every-two-weeks email uses (headline, detail,
   "what this may mean for you", topic). Stored as payer-recent.json in
   the PRIVATE carelu-sources repo.

   The confirmation email a new subscriber gets (api/payer-updates.ts)
   reads this file, so people see their states' recent changes the
   moment they join instead of waiting up to two weeks. Writing the
   items takes a minute, far too slow for a signup request, hence the
   daily job.

   Sends nothing. Auth: Vercel cron sends `Authorization: Bearer
   $CRON_SECRET`. ?dry=1 returns the result without committing.
   ================================================================ */

export const config = { maxDuration: 300 };

export const RECENT_FILE = 'payer-recent.json';
const WINDOW_DAYS = 30;

export async function GET(request: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) return json({ error: 'unauthorized' }, 401);
  const dry = new URL(request.url).searchParams.get('dry') === '1';

  const cfg = requireConfig();
  if (isResponse(cfg)) return cfg;

  const since = new Date(Date.now() - WINDOW_DAYS * 86400e3).toISOString().slice(0, 10);
  const byState: Record<string, Change[]> = {};
  for (const c of changesSince(since)) (byState[c.state] ??= []).push(c);
  const sections = await writeSections(Object.keys(byState), byState);

  const out = { built: new Date().toISOString(), since, sections };
  const counts = Object.fromEntries(Object.entries(sections).map(([st, items]) => [st, items.length]));
  if (dry) return json({ dry: true, since, counts, sections });
  // Never overwrite a good file with an empty one (for example if the
  // model was down for the whole run).
  if (!Object.keys(sections).length) return json({ skipped: 'no sections written', since, statesWithChanges: Object.keys(byState).length });
  await commitFiles(cfg.token, [{ path: RECENT_FILE, content: JSON.stringify(out, null, 1) + '\n' }], `payer-recent: ${out.built.slice(0, 10)}`);
  return json({ ok: true, since, counts });
}
