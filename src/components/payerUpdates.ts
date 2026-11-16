import { STATE_META } from '../data/payers';

/* Shared by every place that offers the payer updates list: the inline
   box, the 10-second popup, and the Ask box's email step. */

export const PAYER_UPDATE_STATES = [...STATE_META].sort((a, b) => a.name.localeCompare(b.name));
export const ALL_TOPICS = ['intake', 'clinical', 'billing'];

/* Must match OPT_IN_TEXT in api/payer-updates.ts (stored with each signup). */
export const OPT_IN =
  'Yes, add me to the Carelu payer updates list. One email every two weeks with what changed for payers in my states. Unsubscribe any time.';

/* Set once someone joins anywhere on the site: the popup never shows again. */
export const JOINED_KEY = 'carelu_payer_updates_joined';

export function markJoined(): void {
  try { localStorage.setItem(JOINED_KEY, new Date().toISOString()); } catch { /* private mode */ }
}

export function hasJoined(): boolean {
  try { return !!localStorage.getItem(JOINED_KEY); } catch { return false; }
}

export async function joinPayerUpdates(p: {
  email: string; states: string[]; topics?: string[]; website?: string;
}): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/payer-updates', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: p.email.trim(),
        states: p.states,
        topics: p.topics ?? ALL_TOPICS,
        optIn: true,
        page: window.location.pathname,
        website: p.website ?? '',
      }),
      keepalive: true,
    });
    if (!res.ok) {
      const d = (await res.json().catch(() => ({}))) as { error?: string };
      return { ok: false, error: d.error };
    }
    markJoined();
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
