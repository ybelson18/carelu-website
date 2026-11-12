import { useEffect, useRef, useState } from 'react';
import { STATE_META } from '../data/payers';

/* ================================================================
   "Get payer updates for your states" — the every-two-weeks list.
   Email + states (dropdown with checkboxes) + topics + an explicit
   yes to joining. Posts to /api/payer-updates. Re-signing with the
   same email replaces that person's states and topics.
   ================================================================ */

const INK = '#1A1A1A';
const GREEN = '#3f7a34';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const STATES = [...STATE_META].sort((a, b) => a.name.localeCompare(b.name));
const TOPICS = [
  { key: 'intake', label: 'Intake', hint: 'eligibility, diagnosis, referrals, documents' },
  { key: 'clinical', label: 'Clinical care', hint: 'hours, supervision, treatment plans, reauths' },
  { key: 'billing', label: 'Billing & ops', hint: 'codes, rates, claims, credentialing' },
];
const OPT_IN = 'Yes, add me to the Carelu payer updates list. One email every two weeks with what changed for payers in my states. Unsubscribe any time.';

const field: React.CSSProperties = {
  fontFamily: 'var(--font-body)', fontSize: 14, padding: '11px 14px', borderRadius: 10,
  border: '1px solid rgba(43,42,38,0.18)', background: '#fff', color: INK, width: '100%', boxSizing: 'border-box',
};

export default function PayerUpdatesSignup({ defaultStates = [] }: { defaultStates?: string[] }) {
  const [email, setEmail] = useState('');
  const [states, setStates] = useState<string[]>(defaultStates.filter((s) => s !== 'US'));
  const [topics, setTopics] = useState<string[]>(TOPICS.map((t) => t.key));
  const [optIn, setOptIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'busy' | 'done'>('idle');
  const [error, setError] = useState('');
  const hp = useRef<HTMLInputElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open]);

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!EMAIL_RE.test(email.trim())) return setError('Enter a valid email.');
    if (states.length === 0) return setError('Pick at least one state.');
    if (topics.length === 0) return setError('Pick at least one topic.');
    if (!optIn) return setError('Tick the box to join the list.');
    setStatus('busy');
    try {
      const res = await fetch('/api/payer-updates', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), states, topics, optIn: true, page: window.location.pathname, website: hp.current?.value ?? '' }),
      });
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus('idle');
        return setError(d.error === 'invalid email' ? 'Enter a valid email.' : 'Something went wrong. Try again.');
      }
      setStatus('done');
    } catch {
      setStatus('idle');
      setError('Something went wrong. Try again.');
    }
  }

  const names = STATES.filter((s) => states.includes(s.code)).map((s) => s.name);
  const stateLabel = names.length === 0 ? 'Choose your states' : names.length <= 3 ? names.join(', ') : `${names.length} states selected`;

  return (
    <section id="payer-updates" style={{ scrollMarginTop: 110 }}>
      <div style={{ background: '#fff', borderRadius: 18, padding: 'clamp(20px, 3vw, 32px)', boxShadow: '0 4px 20px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(21px, 2.4vw, 28px)', fontWeight: 400, color: INK, letterSpacing: '-0.012em', margin: '0 0 6px' }}>
          Get payer updates for your states
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(43,42,38,0.65)', lineHeight: 1.6, margin: '0 0 18px' }}>
          Every two weeks, one email with what changed in the payer rules for the states you pick. No change in your states, no email.
        </p>

        {status === 'done' ? (
          <p style={{ fontSize: 15, color: '#2e5a26', fontWeight: 600, margin: 0 }}>
            You're on the list for {names.join(', ')}. Your first update comes the next time a payer in your states changes.
          </p>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input ref={hp} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
            <div className="pu-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} style={field} aria-label="Email" />
              <div ref={box} style={{ position: 'relative' }}>
                <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} style={{ ...field, textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: names.length ? INK : 'rgba(43,42,38,0.5)' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{stateLabel}</span>
                  <span aria-hidden="true" style={{ marginLeft: 8 }}>▾</span>
                </button>
                {open && (
                  <div role="listbox" aria-multiselectable="true" style={{ position: 'absolute', zIndex: 20, top: 'calc(100% + 6px)', left: 0, right: 0, maxHeight: 280, overflowY: 'auto', background: '#fff', borderRadius: 12, border: '1px solid rgba(43,42,38,0.14)', boxShadow: '0 12px 32px rgba(0,0,0,0.12)', padding: 6 }}>
                    {STATES.map((s) => (
                      <label key={s.code} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, fontSize: 14, cursor: 'pointer', color: INK, background: states.includes(s.code) ? 'rgba(63,122,52,0.08)' : 'transparent' }}>
                        <input type="checkbox" checked={states.includes(s.code)} onChange={() => toggle(states, setStates, s.code)} style={{ accentColor: GREEN }} />
                        {s.name}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
              <legend style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(43,42,38,0.5)', marginBottom: 8 }}>Topics</legend>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
                {TOPICS.map((t) => (
                  <label key={t.key} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: INK, cursor: 'pointer' }}>
                    <input type="checkbox" checked={topics.includes(t.key)} onChange={() => toggle(topics, setTopics, t.key)} style={{ accentColor: GREEN, marginTop: 3 }} />
                    <span><strong style={{ fontWeight: 600 }}>{t.label}</strong> <span style={{ color: 'rgba(43,42,38,0.55)', fontSize: 12.5 }}>{t.hint}</span></span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, color: 'rgba(43,42,38,0.8)', lineHeight: 1.5, cursor: 'pointer' }}>
              <input type="checkbox" checked={optIn} onChange={(e) => setOptIn(e.target.checked)} style={{ accentColor: GREEN, marginTop: 3 }} />
              {OPT_IN}
            </label>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <button type="submit" disabled={status === 'busy'} style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#fff', background: INK, border: 0, borderRadius: 100, padding: '12px 24px', cursor: 'pointer', opacity: status === 'busy' ? 0.6 : 1 }}>
                {status === 'busy' ? 'Joining…' : 'Join the list'}
              </button>
              {error && <span role="alert" style={{ fontSize: 13, color: '#b3261e' }}>{error}</span>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
