import { useState } from 'react';
import { useSeo } from '../hooks/useSeo';

/* ================================================================
   CARELU — /sources (RETIRED as an upload board, 2026-10-01)
   Payer-source document requests and uploads moved to LeadTrap's
   Source documents board (VOB Review -> Source documents), where the
   VOB team already works. This page now only points there, and keeps
   the team login that /sources/questions (the payer-chat questions
   page) still uses.

   Standalone page — NO marketing nav, noindex, not in the sitemap.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const MUTE = 'rgba(43,42,38,0.6)';

const LEADTRAP_BOARD_URL = 'https://app.leadtrap.ai/admin/vob-sources';

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  padding: '13px 16px',
  borderRadius: 12,
  border: `1px solid ${hasError ? '#d97a6a' : 'rgba(43,42,38,0.18)'}`,
  outline: 'none',
  marginBottom: 12,
});

/* ---- team login (for /sources/questions only) --------------------- */

function QuestionsLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!username || !password || busy) return;
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/sources/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        window.location.href = '/sources/questions';
        return;
      }
      if (res.status === 503) setError('Team login is not configured on this deployment.');
      else setError(res.status === 401 ? 'Incorrect username or password.' : 'Something went wrong. Try again.');
    } catch {
      setError('Network error. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 26, paddingTop: 22, borderTop: '1px solid rgba(43,42,38,0.08)' }}>
      <p style={{ fontSize: 13, color: MUTE, margin: '0 0 12px', lineHeight: 1.5 }}>
        Team login for <a href="/sources/questions" style={{ color: GREEN, fontWeight: 600 }}>payer chat questions</a>
      </p>
      <input
        type="text"
        value={username}
        autoComplete="username"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={inputStyle(false)}
      />
      <input
        type="password"
        value={password}
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ ...inputStyle(!!error), marginBottom: error ? 8 : 16 }}
      />
      {error && <p style={{ fontSize: 12.5, color: '#b8341a', margin: '0 0 16px' }}>{error}</p>}
      <button
        type="submit"
        disabled={busy || !password}
        style={{
          width: '100%',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          fontWeight: 600,
          color: GREEN,
          background: 'transparent',
          border: `1px solid ${GREEN}`,
          borderRadius: 100,
          padding: '11px 0',
          cursor: busy || !password ? 'default' : 'pointer',
          opacity: busy || !password ? 0.5 : 1,
        }}
      >
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}

/* ================================================================== */

export default function SourcesApp() {
  useSeo({ title: 'Source Documents · Carelu', description: 'Carelu payer-source documents moved to LeadTrap.', noindex: true });

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 440, background: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 40px)', boxShadow: '0 12px 48px rgba(0,0,0,0.08)' }}>
        <img src="/carelu-logo.svg" alt="Carelu" style={{ height: 26, width: 'auto', display: 'block', margin: '0 auto 22px', opacity: 0.9 }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, color: INK, textAlign: 'center', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
          Source documents moved
        </h1>
        <p style={{ fontSize: 14, color: MUTE, textAlign: 'center', margin: '0 0 22px', lineHeight: 1.55 }}>
          Document requests and uploads now live in LeadTrap, under <strong style={{ color: INK }}>VOB Review &rarr; Source documents</strong>. Upload there.
        </p>
        <a
          href={LEADTRAP_BOARD_URL}
          style={{
            display: 'block',
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            fontWeight: 600,
            color: '#fff',
            background: GREEN,
            borderRadius: 100,
            padding: '13px 0',
            textDecoration: 'none',
          }}
        >
          Open the Source documents board
        </a>
        <QuestionsLogin />
      </div>
    </div>
  );
}
