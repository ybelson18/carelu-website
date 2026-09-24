import { useEffect, useState } from 'react';

/* ================================================================
   /sources/questions — who asked the payer chat what, and why.
   Team-only (same login as /sources). Reads /api/sources/questions.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const HAIR = 'rgba(43,42,38,0.08)';
const MUTE = 'rgba(43,42,38,0.6)';

interface Tags { intent: string; topics: string[]; payers: string[]; states: string[]; summary: string }
interface Q { ts: string; q: string; answer?: string; email?: string; emailSource?: string; page?: string; cost: number; tags?: Tags }
interface Conversation { id: string; page?: string; started: string; questions: Q[] }
interface Person {
  key: string; email?: string; known: boolean; name?: string; company?: string; emailSources: string[];
  firstSeen: string; lastSeen: string; costUsd: number; questions: number;
  intents: [string, number][]; conversations: Conversation[];
}
interface Payload {
  days: number;
  totals: { questions: number; people: number; unknown: number; costUsd: number; tagged: number };
  intents: [string, number][]; topics: [string, number][]; states: [string, number][]; payers: [string, number][];
  people: Person[];
}

const INTENT_LABEL: Record<string, string> = {
  'family-coverage-check': 'Checking a family’s coverage',
  'intake-process': 'Intake process',
  'billing-and-rates': 'Billing & rates',
  'authorization': 'Prior auth',
  'credentialing-network': 'Credentialing / network',
  'market-research': 'Market research',
  'vendor-evaluation': 'Evaluating Carelu',
  'other': 'Other',
};
const SOURCE_LABEL: Record<string, string> = {
  given: 'typed their email',
  browser: 'recognised by browser',
  ip: 'matched by IP (weaker)',
};

function when(iso: string): string {
  return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

function Pill({ children, tone = 'plain' }: { children: React.ReactNode; tone?: 'plain' | 'green' }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 11.5, fontWeight: 600, padding: '3px 9px', borderRadius: 100,
      color: tone === 'green' ? GREEN : 'rgba(43,42,38,0.72)',
      background: tone === 'green' ? 'rgba(63,122,52,0.1)' : 'rgba(43,42,38,0.06)', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

function Tally({ title, rows, label }: { title: string; rows: [string, number][]; label?: (k: string) => string }) {
  const max = rows[0]?.[1] ?? 1;
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: 18, border: `1px solid ${HAIR}`, minWidth: 0 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTE, marginBottom: 10 }}>{title}</div>
      {rows.length === 0 && <div style={{ fontSize: 13, color: MUTE }}>Nothing yet</div>}
      {rows.slice(0, 8).map(([k, n]) => (
        <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, margin: '6px 0' }}>
          <span style={{ flex: '0 1 55%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: INK }}>{label ? label(k) : k}</span>
          <span style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(63,122,52,0.12)' }}>
            <span style={{ display: 'block', height: 6, borderRadius: 3, width: `${(n / max) * 100}%`, background: GREEN }} />
          </span>
          <span style={{ fontVariantNumeric: 'tabular-nums', color: MUTE, minWidth: 22, textAlign: 'right' }}>{n}</span>
        </div>
      ))}
    </div>
  );
}

function PersonRow({ p }: { p: Person }) {
  const [open, setOpen] = useState(false);
  const top = p.intents[0]?.[0];
  return (
    <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${HAIR}`, overflow: 'hidden' }}>
      <button onClick={() => setOpen(!open)} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 18px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 12px', fontFamily: 'inherit', color: INK,
      }}>
        <span style={{ flex: '1 1 260px', minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 15, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {p.name || p.email || p.key}{p.company ? <span style={{ fontWeight: 400, color: MUTE }}> · {p.company}</span> : null}
          </span>
          <span style={{ display: 'block', fontSize: 12.5, color: MUTE }}>
            {p.email && p.name ? `${p.email} · ` : ''}{p.known ? p.emailSources.map((s) => SOURCE_LABEL[s] ?? s).join(', ') : 'no email linked yet'}
          </span>
        </span>
        {top && <Pill tone="green">{INTENT_LABEL[top] ?? top}</Pill>}
        <Pill>{p.questions} question{p.questions === 1 ? '' : 's'}</Pill>
        <span style={{ fontSize: 12.5, color: MUTE, whiteSpace: 'nowrap' }}>last {when(p.lastSeen)}</span>
        <span style={{ fontSize: 13, color: MUTE }}>{open ? '▾' : '▸'}</span>
      </button>
      {open && (
        <div style={{ borderTop: `1px solid ${HAIR}`, padding: '8px 18px 16px' }}>
          {p.conversations.map((c) => (
            <div key={c.id} style={{ marginTop: 12 }}>
              <div style={{ fontSize: 11.5, color: MUTE, marginBottom: 6 }}>
                Conversation · {when(c.started)}{c.page ? ` · on ${c.page}` : ''}
              </div>
              {c.questions.map((q, i) => (
                <div key={i} style={{ padding: '10px 12px', borderRadius: 10, background: BONE, marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: INK, flex: '1 1 300px' }}>{q.q}</span>
                    <span style={{ fontSize: 12, color: MUTE, whiteSpace: 'nowrap' }}>{when(q.ts)} · ${q.cost.toFixed(2)}</span>
                  </div>
                  {q.tags && (
                    <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
                      <Pill tone="green">{INTENT_LABEL[q.tags.intent] ?? q.tags.intent}</Pill>
                      {[...q.tags.states, ...q.tags.payers, ...q.tags.topics].map((t) => <Pill key={t}>{t}</Pill>)}
                      <span style={{ fontSize: 12.5, color: MUTE, fontStyle: 'italic' }}>{q.tags.summary}</span>
                    </div>
                  )}
                  {q.answer && (
                    <details style={{ marginTop: 6 }}>
                      <summary style={{ fontSize: 12.5, color: MUTE, cursor: 'pointer' }}>Answer given</summary>
                      <div style={{ fontSize: 13, color: 'rgba(43,42,38,0.78)', whiteSpace: 'pre-wrap', marginTop: 6, lineHeight: 1.55 }}>{q.answer}{q.answer.length >= 1500 ? '…' : ''}</div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function QuestionsApp() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState<Payload | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'login' | 'error'>('loading');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    document.title = 'Chat questions | Carelu team';
    let alive = true;
    fetch(`/api/sources/questions?days=${days}`, { headers: { accept: 'application/json' } })
      .then(async (res) => {
        if (!alive) return;
        if (res.status === 401) { setState('login'); return; }
        if (!res.ok) { setState('error'); return; }
        setData(await res.json() as Payload);
        setState('ready');
      })
      .catch(() => alive && setState('error'));
    return () => { alive = false; };
  }, [days]);

  const f = filter.trim().toLowerCase();
  const people = (data?.people ?? []).filter((p) => !f || JSON.stringify(p).toLowerCase().includes(f));

  return (
    <div style={{ background: BONE, minHeight: '100vh', padding: 'clamp(20px, 4vw, 44px) 16px 60px', color: INK, fontFamily: 'var(--font-body)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(26px, 3vw, 34px)', margin: 0 }}>Payer chat: who asked what</h1>
          <a href="/sources" style={{ fontSize: 13.5, color: GREEN, fontWeight: 600 }}>← Sources</a>
        </div>
        <p style={{ fontSize: 14, color: MUTE, margin: '6px 0 20px', lineHeight: 1.6 }}>
          Every question asked on carelu.com/payers, grouped by person and conversation, with what each question was about.
        </p>

        {state === 'login' && (
          <p style={{ fontSize: 15 }}>Log in at <a href="/sources" style={{ color: GREEN, fontWeight: 600 }}>carelu.com/sources</a>, then come back.</p>
        )}
        {state === 'error' && <p style={{ fontSize: 15 }}>Couldn’t read the question log. Try again in a minute.</p>}
        {state === 'loading' && <p style={{ fontSize: 15, color: MUTE }}>Loading…</p>}

        {state === 'ready' && data && (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 16 }}>
              {[7, 30, 90].map((d) => (
                <button key={d} onClick={() => { if (d !== days) { setState('loading'); setDays(d); } }} style={{
                  fontFamily: 'inherit', fontSize: 13, fontWeight: 600, padding: '6px 14px', borderRadius: 100, cursor: 'pointer',
                  border: `1px solid ${d === days ? GREEN : HAIR}`, background: d === days ? 'rgba(63,122,52,0.1)' : '#fff',
                  color: d === days ? GREEN : INK,
                }}>Last {d} days</button>
              ))}
              <input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by person, company, payer, state…"
                style={{ flex: '1 1 220px', minWidth: 0, fontFamily: 'inherit', fontSize: 14, padding: '8px 14px', borderRadius: 100, border: `1px solid ${HAIR}`, background: '#fff', color: INK }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, marginBottom: 12 }}>
              {[
                ['Questions', String(data.totals.questions)],
                ['People (email known)', String(data.totals.people)],
                ['Unknown visitors', String(data.totals.unknown)],
                ['Model cost', `$${data.totals.costUsd.toFixed(2)}`],
              ].map(([k, v]) => (
                <div key={k} style={{ background: '#fff', borderRadius: 14, padding: '14px 18px', border: `1px solid ${HAIR}` }}>
                  <div style={{ fontSize: 26, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{v}</div>
                  <div style={{ fontSize: 12.5, color: MUTE }}>{k}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 10, marginBottom: 24 }}>
              <Tally title="What they’re trying to do" rows={data.intents} label={(k) => INTENT_LABEL[k] ?? k} />
              <Tally title="Topics" rows={data.topics} />
              <Tally title="States" rows={data.states} />
              <Tally title="Payers" rows={data.payers} />
            </div>
            {data.totals.tagged < data.totals.questions && (
              <p style={{ fontSize: 12.5, color: MUTE, margin: '-12px 0 18px' }}>
                {data.totals.questions - data.totals.tagged} older questions predate intent tagging and show without labels.
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {people.length === 0 && <p style={{ fontSize: 14, color: MUTE }}>No questions in this window.</p>}
              {people.map((p) => <PersonRow key={p.key} p={p} />)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
