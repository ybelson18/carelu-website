import { useEffect, useRef, useState } from 'react';
import { PAYER_UPDATE_STATES, hasJoined, joinPayerUpdates } from './payerUpdates';

/* After an answer, the assistant offers the payer updates list in the chat
   itself (never to someone who already joined, and not again for 30 days
   after "No thanks"). */
const OFFER_DISMISS_KEY = 'carelu_pu_chat_offer_dismissed';
function offerDismissed(): boolean {
  try {
    const t = localStorage.getItem(OFFER_DISMISS_KEY);
    return !!t && Date.now() - Date.parse(t) < 30 * 86_400_000;
  } catch { return false; }
}
/* States named in the conversation, to pre-pick in the offer. */
function statesIn(text: string): string[] {
  const found = new Set<string>();
  for (const st of PAYER_UPDATE_STATES) {
    if (new RegExp(`\\b${st.name}\\b`, 'i').test(text) || new RegExp(`\\b${st.code}\\b`).test(text)) found.add(st.code);
  }
  return [...found];
}
type Offer = 'none' | 'typing' | 'ask' | 'pick' | 'saving' | 'done' | 'declined';

/* ================================================================
   Ask-the-directory chat (/payers hero). Streams grounded answers
   from /api/ask, which retrieves from the payer-guide corpus and
   cites primary sources. Replaces the old keyword search bar.
   ================================================================ */

const INK = '#1A1A1A';
const GREEN = '#3f7a34';
const GREEN_DKC = '#2e5a26';

type Msg = { role: 'user' | 'assistant'; content: string };

const EMAIL_RE = /^[A-Za-z0-9._%+'-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
// Shared with the referral-list gate: an email given anywhere on the site
// unlocks the chat too, so nobody is asked twice.
const GIVEN_KEY = 'carelu_leads_email';

// Stable per-browser id: links later questions to the email given once,
// even when a request arrives without it.
const VISITOR_KEY = 'carelu_visitor';
function visitorId(): string | undefined {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) { id = crypto.randomUUID(); localStorage.setItem(VISITOR_KEY, id); }
    return id;
  } catch { return undefined; }
}
function newId(): string {
  try { return crypto.randomUUID(); } catch { return `c${Date.now()}${Math.random().toString(36).slice(2, 10)}`; }
}

function savedEmail(): string {
  try { return localStorage.getItem(GIVEN_KEY) ?? ''; } catch { return ''; }
}

/* The server refused the question (email gate, daily limit, or closed for
   the day). Not a transient failure, so it is never retried. */
const GATE_PROMPT = 'Enter your work email below to get your answer. It’s free, and you only do it once. We save your questions with your email so we can follow up and improve the directory.';

class Refused extends Error {
  readonly reason: string;
  constructor(reason: string, message: string) { super(message); this.reason = reason; }
}

const SUGGESTIONS = [
  'Does Cigna require prior auth for the assessment?',
  'What does NC Medicaid pay for 97153?',
  'Is an autism diagnosis required in Colorado?',
  'How often does Optum reauthorize ABA?',
];

// Minimal, safe markdown: escape everything, then re-introduce links + bold.
function renderAnswer(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/payers\/[a-z0-9-]+)\)/g, (_m, label, url) => {
      const external = url.startsWith('http');
      return `<a href="${url}"${external ? ' target="_blank" rel="noreferrer"' : ''} style="color:${GREEN_DKC};font-weight:600;">${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>');
}

export default function AskPayers() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  // One id per chat on this page load, so follow-ups group into a conversation.
  const conversationRef = useRef<string>(newId());
  // Set when the server asks for an email: the question waiting to be re-sent.
  const [gatedQuestion, setGatedQuestion] = useState<string | null>(null);
  const [gateEmail, setGateEmail] = useState('');
  const [gateError, setGateError] = useState('');
  // The in-chat payer updates offer.
  const [answers, setAnswers] = useState(0);
  const [offer, setOffer] = useState<Offer>('none');
  const [offerStates, setOfferStates] = useState<string[]>([]);
  const [offerError, setOfferError] = useState('');
  const offeredRef = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (answers === 0 || offeredRef.current || hasJoined() || offerDismissed() || !savedEmail()) return;
    offeredRef.current = true;
    const t1 = window.setTimeout(() => setOffer('typing'), 600);
    const t2 = window.setTimeout(() => setOffer('ask'), 1500);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [answers]);

  useEffect(() => {
    const el = listRef.current;
    if (el && offer !== 'none') el.scrollTop = el.scrollHeight;
  }, [offer]);

  function acceptOffer() {
    setOfferStates(statesIn(messages.filter((m) => m.role === 'user').map((m) => m.content).join(' ')));
    setOffer('pick');
  }
  function declineOffer() {
    try { localStorage.setItem(OFFER_DISMISS_KEY, new Date().toISOString()); } catch { /* private mode */ }
    setOffer('declined');
  }
  async function saveOffer() {
    if (offerStates.length === 0) { setOfferError('Pick at least one state.'); return; }
    setOffer('saving');
    const r = await joinPayerUpdates({ email: savedEmail(), states: offerStates, mode: 'add' });
    if (r.ok) setOffer('done');
    else { setOffer('pick'); setOfferError('That didn’t go through. Try again?'); }
  }
  const hpRef = useRef<HTMLInputElement>(null);

  function submitGate(e: React.FormEvent) {
    e.preventDefault();
    const clean = gateEmail.trim();
    if (!EMAIL_RE.test(clean)) { setGateError('That doesn’t look like an email.'); return; }
    try { localStorage.setItem(GIVEN_KEY, clean); } catch { /* private mode */ }
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: clean,
        form: 'payer-chat',
        page: window.location.pathname,
        website: hpRef.current?.value ?? '',
      }),
      keepalive: true,
    }).catch(() => {});
    const q = gatedQuestion;
    setGatedQuestion(null);
    // The refused question is still on screen; drop it so ask() re-adds it.
    setMessages((cur) => cur.slice(0, -2));
    if (q) void ask(q, clean, messages.slice(0, -2));
  }

  async function ask(question: string, emailOverride?: string, base: Msg[] = messages) {
    const q = question.trim();
    if (!q || busy) return;
    setInput('');
    const email = emailOverride ?? savedEmail();
    // No email in this browser: still ask the server, which may recognise the
    // browser from an earlier visit; otherwise it answers 401 and the email
    // gate opens (the model is never called for an unknown visitor).
    setBusy(true);
    const next: Msg[] = [...base, { role: 'user', content: q }, { role: 'assistant', content: '' }];
    setMessages(next);

    const ctrl = new AbortController();
    abortRef.current = ctrl;
    let gotText = false;
    const attempt = async () => {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          messages: next.slice(0, -1),
          ...(email ? { email } : {}),
          visitorId: visitorId(),
          conversationId: conversationRef.current,
          page: window.location.pathname,
        }),
        signal: ctrl.signal,
      });
      if (res.status === 401 || res.status === 429) {
        const data = await res.json().catch(() => ({})) as { error?: string; message?: string };
        throw new Refused(data.error ?? 'limit', data.message ?? 'The assistant is unavailable right now.');
      }
      // The server recognised this browser from an earlier visit: remember the email.
      const known = res.headers.get('x-carelu-email');
      if (known && !email) { try { localStorage.setItem(GIVEN_KEY, known); } catch { /* private mode */ } }
      if (!res.ok || !res.body) {
        throw new Error(`status ${res.status}`);
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        gotText = true;
        const snapshot = acc;
        setMessages((cur) => {
          const copy = [...cur];
          copy[copy.length - 1] = { role: 'assistant', content: snapshot };
          return copy;
        });
      }
    };
    try {
      try {
        await attempt();
      } catch (e) {
        // One silent retry for transient failures (cold starts, 5xx blips) —
        // but not if text already streamed or the user aborted.
        if (e instanceof Refused || gotText || ctrl.signal.aborted) throw e;
        await new Promise((r) => setTimeout(r, 1200));
        await attempt();
      }
      if (gotText) setAnswers((n) => n + 1);
    } catch (e) {
      if (e instanceof Refused && e.reason === 'email') {
        setGatedQuestion(q);
        setMessages((cur) => {
          const copy = [...cur];
          copy[copy.length - 1] = { role: 'assistant', content: GATE_PROMPT };
          return copy;
        });
        return;
      }
      if (e instanceof Refused) {
        const msg = e.message;
        setMessages((cur) => {
          const copy = [...cur];
          copy[copy.length - 1] = { role: 'assistant', content: msg };
          return copy;
        });
        return;
      }
      setMessages((cur) => {
        const copy = [...cur];
        copy[copy.length - 1] = {
          role: 'assistant',
          content: copy[copy.length - 1]?.content ||
            'Sorry — the assistant is unavailable right now. Browse the guides below, or try again in a minute.',
        };
        return copy;
      });
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  return (
    <div className="rv" style={{
      background: '#fff', borderRadius: 20, border: '1px solid rgba(63,122,52,0.25)',
      boxShadow: '0 8px 32px rgba(46,90,38,0.1)', padding: 'clamp(16px, 2.4vw, 24px)',
      textAlign: 'left',
    }}>
      {messages.length === 0 && (
        <p style={{ fontSize: 13.5, color: 'rgba(43,42,38,0.62)', lineHeight: 1.6, margin: '0 0 12px' }}>
          Ask anything about the payers in our directory — prior auth, diagnosis requirements, rates,
          reauthorization. Answers come only from our verified guides, with sources cited.
        </p>
      )}

      {messages.length > 0 && (
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 14, maxHeight: 420, overflowY: 'auto', paddingRight: 4 }}>
          {messages.map((m, i) => (
            m.role === 'user' ? (
              <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'rgba(63,122,52,0.09)', color: INK, borderRadius: '14px 14px 4px 14px', padding: '10px 15px', fontSize: 14, lineHeight: 1.55 }}>
                {m.content}
              </div>
            ) : (
              <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '95%', fontSize: 14, lineHeight: 1.68, color: 'rgba(43,42,38,0.82)' }}>
                {m.content
                  ? <span dangerouslySetInnerHTML={{ __html: renderAnswer(m.content) }} />
                  : <span style={{ color: 'rgba(43,42,38,0.45)' }}>Checking the guides…</span>}
              </div>
            )
          ))}
          {offer !== 'none' && !busy && <UpdatesOffer
            offer={offer} states={offerStates} error={offerError} email={savedEmail()}
            onYes={acceptOffer} onNo={declineOffer} onSave={saveOffer}
            onStates={(v) => { setOfferStates(v); setOfferError(''); }}
          />}
        </div>
      )}

      {gatedQuestion !== null ? (
        <form onSubmit={submitGate} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {/* Honeypot: hidden from humans, bots fill it. */}
          <input ref={hpRef} type="text" name="website" tabIndex={-1} autoComplete="off"
            style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
          <input
            type="email"
            value={gateEmail}
            onChange={(e) => { setGateEmail(e.target.value); setGateError(''); }}
            placeholder="you@yourpractice.com"
            aria-label="Work email"
            autoFocus
            style={{
              flex: '1 1 220px', minWidth: 0, boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15,
              color: INK, background: '#FAF8F3', border: `1px solid ${gateError ? '#c0392b' : 'rgba(43,42,38,0.14)'}`,
              borderRadius: 100, padding: '13px 20px', outline: 'none',
            }}
          />
          <button type="submit" style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, cursor: 'pointer',
            color: '#fff', background: GREEN, border: 'none', borderRadius: 100, padding: '13px 22px', flexShrink: 0,
          }}>
            Continue
          </button>
          {gateError && <p style={{ flexBasis: '100%', fontSize: 12.5, color: '#c0392b', margin: '2px 0 0 12px' }}>{gateError}</p>}
        </form>
      ) : (
      <form
        onSubmit={(e) => { e.preventDefault(); ask(input); }}
        style={{ display: 'flex', gap: 8 }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={messages.length === 0 ? 'e.g. Does Aetna require prior auth for an ABA assessment?' : 'Ask a follow-up…'}
          aria-label="Ask about a payer"
          maxLength={1000}
          style={{
            flex: 1, boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15,
            color: INK, background: '#FAF8F3', border: '1px solid rgba(43,42,38,0.14)', borderRadius: 100,
            padding: '13px 20px', outline: 'none',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = GREEN; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(43,42,38,0.14)'; }}
        />
        <button type="submit" disabled={busy || input.trim().length === 0} style={{
          fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, cursor: busy ? 'default' : 'pointer',
          color: '#fff', background: busy ? 'rgba(63,122,52,0.5)' : GREEN, border: 'none',
          borderRadius: 100, padding: '0 22px', flexShrink: 0,
        }}>
          {busy ? '…' : 'Ask'}
        </button>
      </form>
      )}

      {messages.length === 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {SUGGESTIONS.map((s) => (
            <button key={s} onClick={() => ask(s)} disabled={busy} style={{
              fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, cursor: 'pointer',
              color: 'rgba(43,42,38,0.65)', background: 'rgba(43,42,38,0.05)',
              border: '1px solid rgba(43,42,38,0.08)', borderRadius: 100, padding: '6px 13px',
            }}>{s}</button>
          ))}
        </div>
      )}

      <p style={{ fontSize: 11, color: 'rgba(43,42,38,0.45)', lineHeight: 1.5, margin: '10px 0 0' }}>
        AI-generated from Carelu's payer guides — verify against the payer's live policy for any specific member. Not billing, legal, or clinical advice.
      </p>
    </div>
  );
}

/* The assistant's follow-up offer, styled as chat turns. */
function UpdatesOffer({ offer, states, error, email, onYes, onNo, onSave, onStates }: {
  offer: Offer; states: string[]; error: string; email: string;
  onYes: () => void; onNo: () => void; onSave: () => void; onStates: (v: string[]) => void;
}) {
  const bot: React.CSSProperties = { alignSelf: 'flex-start', maxWidth: '95%', fontSize: 14, lineHeight: 1.68, color: 'rgba(43,42,38,0.82)' };
  const me: React.CSSProperties = { alignSelf: 'flex-end', maxWidth: '85%', background: 'rgba(63,122,52,0.09)', color: INK, borderRadius: '14px 14px 4px 14px', padding: '10px 15px', fontSize: 14, lineHeight: 1.55 };
  const pill = (primary: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', borderRadius: 100, padding: '9px 16px',
    border: primary ? 'none' : '1px solid rgba(43,42,38,0.16)', background: primary ? GREEN : '#fff', color: primary ? '#fff' : INK,
  });
  const names = (codes: string[]) => {
    const n = PAYER_UPDATE_STATES.filter((s) => codes.includes(s.code)).map((s) => s.name);
    return n.length > 1 ? `${n.slice(0, -1).join(', ')} and ${n[n.length - 1]}` : n[0] ?? '';
  };

  if (offer === 'typing') return <div style={{ ...bot, color: 'rgba(43,42,38,0.45)' }}>…</div>;
  return (
    <>
      <div style={bot}>
        Want me to keep you posted? When payer rules change in your state, I'll send you one email every two weeks with what changed, and nothing when nothing does. Unsubscribe any time.
        {offer === 'ask' && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
            <button type="button" onClick={onYes} style={pill(true)}>Yes, send me updates</button>
            <button type="button" onClick={onNo} style={pill(false)}>No thanks</button>
          </div>
        )}
      </div>

      {offer === 'declined' && <>
        <div style={me}>No thanks</div>
        <div style={bot}>No problem. Ask me anything else about a payer.</div>
      </>}

      {(offer === 'pick' || offer === 'saving' || offer === 'done') && <>
        <div style={me}>Yes, send me updates</div>
        <div style={bot}>
          Which states should I watch for you?{states.length > 0 && offer !== 'done' ? ' I picked the one from your question; add any others.' : ''}
          {offer !== 'done' && (
            <div style={{ marginTop: 10 }}>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                {states.map((c) => (
                  <button key={c} type="button" onClick={() => onStates(states.filter((x) => x !== c))} aria-label={`Remove ${names([c])}`} style={{
                    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: GREEN_DKC, background: 'rgba(63,122,52,0.1)',
                    border: 'none', borderRadius: 100, padding: '6px 12px', cursor: 'pointer',
                  }}>{names([c])} ×</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <select value="" onChange={(e) => { if (e.target.value && !states.includes(e.target.value)) onStates([...states, e.target.value]); }} aria-label="Add a state" style={{
                  fontFamily: 'var(--font-body)', fontSize: 13.5, color: INK, background: '#FAF8F3', border: '1px solid rgba(43,42,38,0.14)',
                  borderRadius: 100, padding: '8px 12px', cursor: 'pointer',
                }}>
                  <option value="">{states.length ? 'Add another state' : 'Choose a state'}</option>
                  {PAYER_UPDATE_STATES.filter((s) => !states.includes(s.code)).map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
                </select>
                <button type="button" onClick={onSave} disabled={offer === 'saving'} style={{ ...pill(true), opacity: offer === 'saving' ? 0.6 : 1 }}>
                  {offer === 'saving' ? 'Saving…' : 'Start my updates'}
                </button>
              </div>
              {error && <p style={{ fontSize: 12.5, color: '#c0392b', margin: '6px 0 0' }}>{error}</p>}
            </div>
          )}
        </div>
      </>}

      {offer === 'done' && <>
        <div style={me}>{names(states)}</div>
        <div style={bot}>Done. I'll email you at <strong style={{ color: INK }}>{email}</strong> when payer rules change in {names(states)}. Anything else I can look up?</div>
      </>}
    </>
  );
}
