import { useEffect, useRef, useState } from 'react';

/* ================================================================
   Email gate for /product. Everything after the hero stays blurred
   and locked until the visitor gives a work email. The email POSTs
   to /api/leads (form: 'product-page'), the same pipeline as every
   other carelu.com form. Anyone who already gave an email anywhere
   on the site (same localStorage key as the other gates) walks
   straight in.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const GIVEN_KEY = 'carelu_leads_email';

export default function ProductGate({ children }: { children: React.ReactNode }) {
  // Locked on first paint (and in the prerendered HTML); unlocked after
  // mount if this browser has already handed over an email.
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const hpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let known = false;
    try { known = !!localStorage.getItem(GIVEN_KEY); } catch { /* private mode */ }
    if (!known) return;
    const t = setTimeout(() => setUnlocked(true), 0);
    return () => clearTimeout(t);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = email.trim();
    if (!EMAIL_RE.test(clean)) { setError('Please enter a valid email address.'); return; }
    try { localStorage.setItem(GIVEN_KEY, clean); } catch { /* private mode */ }
    // Fire-and-forget: the visitor never waits on storage or Slack.
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: clean,
        form: 'product-page',
        page: window.location.pathname,
        website: hpRef.current?.value ?? '',
      }),
      keepalive: true,
    }).catch(() => {});
    setUnlocked(true);
  };

  if (unlocked) return <>{children}</>;

  return (
    <div style={{ position: 'relative' }}>
      <div aria-hidden="true" style={{
        maxHeight: 'clamp(820px, 120vh, 1100px)', overflow: 'hidden',
        filter: 'blur(7px)', opacity: 0.7, pointerEvents: 'none', userSelect: 'none',
      }}>
        {children}
      </div>

      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, rgba(250,248,243,0) 0%, rgba(250,248,243,0.75) 22%, ${BONE} 48%)`,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: 'clamp(120px, 16vw, 200px) 20px 40px',
      }}>
        <div role="region" aria-label="Unlock the product tour" style={{
          position: 'relative', background: '#fff', borderRadius: 24,
          maxWidth: 480, width: '100%', padding: 'clamp(28px, 4vw, 40px)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid rgba(43,42,38,0.06)', textAlign: 'center',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 100,
            background: 'rgba(212,242,92,0.25)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: INK,
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            The full tour
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 400,
            color: INK, letterSpacing: '-0.015em', lineHeight: 1.15, margin: '16px 0 10px',
          }}>
            See exactly how Carelu works
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(43,42,38,0.65)', lineHeight: 1.6, margin: '0 0 22px' }}>
            The step-by-step product walkthrough, every feature, integrations and how rollout works. Enter your work email to continue.
          </p>
          <form onSubmit={submit} noValidate>
            {/* Honeypot: hidden from people, filled by bots. */}
            <input ref={hpRef} type="text" name="website" tabIndex={-1} autoComplete="off"
              style={{ position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, opacity: 0 }} />
            <label htmlFor="product-gate-email" style={{ position: 'absolute', left: -9999 }}>Work email</label>
            <input
              id="product-gate-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="you@yourpractice.com"
              style={{
                width: '100%', boxSizing: 'border-box', padding: '14px 18px', borderRadius: 14,
                border: `1.5px solid ${error ? '#c0392b' : 'rgba(43,42,38,0.16)'}`,
                fontSize: 16, color: INK, background: BONE, outline: 'none', fontFamily: 'var(--font-body)',
              }}
            />
            {error && <p role="alert" style={{ fontSize: 13, color: '#c0392b', margin: '8px 0 0', textAlign: 'left' }}>{error}</p>}
            <button type="submit" style={{
              width: '100%', marginTop: 12, padding: '14px 24px', borderRadius: 100, border: 'none',
              fontSize: 15, fontWeight: 600, color: '#fff', backgroundColor: GREEN, cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(46,90,38,0.24)', fontFamily: 'var(--font-body)',
            }}>
              Show me the product
            </button>
          </form>
          <p style={{ fontSize: 12.5, color: 'rgba(43,42,38,0.5)', margin: '14px 0 0' }}>
            No spam. Or <a href="/demo" style={{ color: GREEN, fontWeight: 600 }}>book a live demo</a> instead.
          </p>
        </div>
      </div>
    </div>
  );
}
