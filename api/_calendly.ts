/* ================================================================
   Calendly, for booking demos straight from an email reply.

   Same event the /demo page embeds (src/components/DemoModal.tsx).
   CALENDLY_TOKEN is a personal access token from that Calendly account
   (Integrations > API & Webhooks). Booking uses Calendly's Scheduling
   API (POST /invitees), which needs a paid Calendly plan; Calendly then
   sends the calendar invite and confirmation exactly as if the person
   had booked on the page. Without the token, everything here returns
   null and callers fall back to the booking link.

   Underscore-prefixed so Vercel does not turn this into a route.
   ================================================================ */

const API = 'https://api.calendly.com';
const TOKEN = process.env.CALENDLY_TOKEN ?? '';
export const CALENDLY_URL = 'https://calendly.com/avi-leadtrap/30min';
export const DEMO_TZ = 'America/New_York';

let eventTypeUri: string | null = null;

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { authorization: `Bearer ${TOKEN}`, 'content-type': 'application/json', ...(init.headers ?? {}) },
  });
  const body = await res.text();
  if (!res.ok) throw new Error(`calendly ${path.split('?')[0]} ${res.status}: ${body.slice(0, 300)}`);
  return (body ? JSON.parse(body) : {}) as T;
}

export function calendlyReady(): boolean {
  return TOKEN.length > 0;
}

/** The URI of the 30-minute demo event, found by its public booking URL. */
async function eventType(): Promise<string> {
  if (eventTypeUri) return eventTypeUri;
  const me = await call<{ resource: { uri: string } }>('/users/me');
  const list = await call<{ collection: { uri: string; scheduling_url: string; active: boolean }[] }>(
    `/event_types?user=${encodeURIComponent(me.resource.uri)}&count=100`
  );
  const hit = list.collection.find((e) => e.active && e.scheduling_url.replace(/\/$/, '') === CALENDLY_URL);
  if (!hit) throw new Error(`calendly: no active event type at ${CALENDLY_URL}`);
  eventTypeUri = hit.uri;
  return hit.uri;
}

/** Open demo start times (UTC ISO) from 2 hours from now through the next 7 days. */
export async function openSlots(): Promise<string[] | null> {
  if (!calendlyReady()) return null;
  try {
    const et = await eventType();
    const start = new Date(Date.now() + 2 * 3600_000);
    const end = new Date(start.getTime() + 7 * 24 * 3600_000 - 60_000); // the API allows at most 7 days
    const res = await call<{ collection: { status: string; start_time: string }[] }>(
      `/event_type_available_times?event_type=${encodeURIComponent(et)}&start_time=${start.toISOString()}&end_time=${end.toISOString()}`
    );
    return res.collection.filter((s) => s.status === 'available').map((s) => new Date(s.start_time).toISOString());
  } catch (err) {
    console.error('calendly: open slots failed', err);
    return null;
  }
}

/** Book one slot. Calendly sends the invite. Returns null on any failure. */
export async function book(startIso: string, name: string, email: string): Promise<{ uri: string } | null> {
  if (!calendlyReady()) return null;
  try {
    const et = await eventType();
    const res = await call<{ resource: { uri: string } }>('/invitees', {
      method: 'POST',
      body: JSON.stringify({ event_type: et, start_time: startIso, invitee: { name, email, timezone: DEMO_TZ } }),
    });
    return { uri: res.resource?.uri ?? '' };
  } catch (err) {
    console.error('calendly: booking failed', err);
    return null;
  }
}

/** "Tuesday, Nov 24 at 11:00 AM" in Eastern time. */
export function whenEt(iso: string): string {
  const d = new Date(iso);
  const day = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', timeZone: DEMO_TZ });
  const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: DEMO_TZ });
  return `${day} at ${time}`;
}

/** Up to `n` times to offer: one per business day, closest to late morning Eastern. */
export function pickOffers(slots: string[], n = 3): string[] {
  const byDay = new Map<string, string[]>();
  for (const s of slots) {
    const d = new Date(s);
    const wd = d.toLocaleDateString('en-US', { weekday: 'short', timeZone: DEMO_TZ });
    if (wd === 'Sat' || wd === 'Sun') continue;
    const key = d.toLocaleDateString('en-CA', { timeZone: DEMO_TZ });
    (byDay.get(key) ?? byDay.set(key, []).get(key)!).push(s);
  }
  const hourEt = (s: string) => Number(new Date(s).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, timeZone: DEMO_TZ }));
  const out: string[] = [];
  for (const [, day] of [...byDay.entries()].sort()) {
    const best = [...day].sort((a, b) => Math.abs(hourEt(a) - 11.5) - Math.abs(hourEt(b) - 11.5))[0];
    out.push(best);
    if (out.length >= n) break;
  }
  return out;
}
