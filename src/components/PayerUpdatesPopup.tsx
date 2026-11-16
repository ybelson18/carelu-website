import { useEffect, useRef, useState } from 'react';
import { PAYER_UPDATE_STATES as STATES, OPT_IN, hasJoined, joinPayerUpdates } from './payerUpdates';

/* ================================================================
   "Get payer updates for your state" popup. Opens once a visitor has
   been on a payer page for 10 seconds. Never shows to someone who
   already joined (here, the inline box, or the Ask box), and stays
   away for 14 days after "No thanks".
   ================================================================ */

const INK = '#1A1A1A';
const GREEN = '#3f7a34';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DELAY_MS = 10_000;
const DISMISS_KEY = 'carelu_payer_updates_popup_dismissed';
const DISMISS_DAYS = 14;

function dismissedRecently(): boolean {
  try {
    const t = localStorage.getItem(DISMISS_KEY);
    return !!t && Date.now() - Date.parse(t) < DISMISS_DAYS * 86_400_000;
  } catch { return false; }
}

function knownEmail(): string {
  try { return localStorage.getItem('carelu_leads_email') ?? ''; } catch { return ''; }
}

const field: React.CSSProperties = {
  fontFamily: 'var(--font-body)', fontSize: 15, padding: '12px 14px', borderRadius: 10,
  border: '1px solid rgba(43,42,38,0.18)', background: '#fff', color: INK, width: '100%', boxSizing: 'border-box',
};

export default function PayerUpdatesPopup({ defaultState = '' }: { defaultState?: string }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [state, setState] = useState(defaultState === 'US' ? '' : defaultState);
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [error, setError] = useState('');
  const hp = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hasJoined() || dismissedRecently()) return;
    const t = window.setTimeout(() => {
      if (hasJoined()) return; // joined in the meantime
      setEmail((e) => e || knownEmail());
      setOpen(true);
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  function dismiss() {
    if (status !== 'done') {
      try { localStorage.setItem(DISMISS_KEY, new Date().toISOString()); } catch { /* private mode */ }
    }
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') dismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!EMAIL_RE.test(email.trim())) return setError('Enter a valid email.');
    if (!state) return setError('Pick your state.');
    setStatus('busy');
    const r = await joinPayerUpdates({ email, states: [state], website: hp.current?.value ?? '', mode: 'add' });
    if (!r.ok) {
      setStatus('idle');
      return setError(r.error === 'invalid email' ? 'Enter a valid email.' : 'Something went wrong. Try again.');
    }
    setStatus('done');
    window.setTimeout(() => setOpen(false), 3500);
  }

  if (!open) return null;
  const stateName = STATES.find((s) => s.code === state)?.name ?? state;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,26,26,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div role="dialog" aria-modal="true" aria-labelledby="pu-pop-title" style={{
        position: 'relative', width: '100%', maxWidth: 440, background: '#fff', borderRadius: 18,
        padding: 'clamp(22px, 4vw, 30px)', boxShadow: '0 24px 60px rgba(0,0,0,0.18)', boxSizing: 'border-box',
      }}>
        <button type="button" onClick={dismiss} aria-label="Close" style={{
          position: 'absolute', top: 12, right: 12, width: 32, height: 32, border: 0, borderRadius: 100,
          background: 'transparent', color: 'rgba(43,42,38,0.55)', fontSize: 22, lineHeight: 1, cursor: 'pointer',
        }}>×</button>

        <h2 id="pu-pop-title" style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: INK, letterSpacing: '-0.012em', margin: '0 28px 8px 0' }}>
          Get payer updates for your state
        </h2>

        {status === 'done' ? (
          <p style={{ fontSize: 15, color: '#2e5a26', fontWeight: 600, lineHeight: 1.55, margin: '6px 0 0' }}>
            You're on the list for {stateName}. Your first update comes the next time a payer there changes.
          </p>
        ) : (
          <>
            <p style={{ fontSize: 14.5, color: 'rgba(43,42,38,0.68)', lineHeight: 1.6, margin: '0 0 18px' }}>
              Every two weeks, one email with what changed in prior auth, diagnosis, rates and other payer rules in your state. No change, no email.
            </p>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input ref={hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
              <input type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} style={field} aria-label="Email" />
              <select value={state} onChange={(e) => setState(e.target.value)} aria-label="Your state" style={{ ...field, color: state ? INK : 'rgba(43,42,38,0.5)', cursor: 'pointer' }}>
                <option value="">Your state</option>
                {STATES.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
              </select>
              <button type="submit" disabled={status === 'busy'} style={{
                fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: '#fff', background: GREEN, border: 0,
                borderRadius: 100, padding: '13px 24px', cursor: 'pointer', marginTop: 4, opacity: status === 'busy' ? 0.6 : 1,
              }}>
                {status === 'busy' ? 'Joining…' : 'Join the list'}
              </button>
              {error && <span role="alert" style={{ fontSize: 13, color: '#b3261e' }}>{error}</span>}
              <p style={{ fontSize: 12, color: 'rgba(43,42,38,0.55)', lineHeight: 1.5, margin: '2px 0 0' }}>
                By joining you agree: {OPT_IN}
              </p>
              <button type="button" onClick={dismiss} style={{ alignSelf: 'center', background: 'none', border: 0, color: 'rgba(43,42,38,0.55)', fontSize: 13, cursor: 'pointer', textDecoration: 'underline', padding: 4 }}>
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
