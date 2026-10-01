import { useEffect, useRef, useState } from 'react';

/* Abstract product visuals for the /product journey, drawn in the same hand
   as the homepage's HandoffVisual and ChecklistVisual: a quiet white card,
   hairline rules, lime only where something lands. */

const CARD: React.CSSProperties = {
  position: 'relative', width: '100%', maxWidth: 420, margin: '0 auto',
  background: '#fff', borderRadius: 22,
  padding: 'clamp(20px, 4vw, 30px)',
  border: '1px solid rgba(0,0,0,0.05)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
  textAlign: 'left',
};
const INK = 'var(--green-900, #1A2E1F)';
const MUTED = 'var(--gray-500, #8C8674)';

/* Plays once each time the card scrolls into view. */
function useInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StatusPill({ on, label, offLabel }: { on: boolean; label: string; offLabel: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 100,
      background: on ? 'rgba(212,242,92,0.22)' : 'rgba(0,0,0,0.04)', transition: 'background 0.4s',
    }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: on ? 'var(--lime, #D4F25C)' : 'rgba(0,0,0,0.25)', transition: 'background 0.4s' }} />
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: INK }}>{on ? label : offLabel}</span>
    </div>
  );
}

function Tick({ on }: { on: boolean }) {
  return (
    <span style={{
      width: 22, height: 22, borderRadius: '50%', flex: 'none',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      background: on ? 'var(--lime, #D4F25C)' : 'transparent',
      border: on ? '1px solid transparent' : '1.5px dashed rgba(0,0,0,0.18)',
      transform: on ? 'scale(1)' : 'scale(0.9)',
      transition: 'background 0.3s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
    }}>
      {on && (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#1A2E1F" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
      )}
    </span>
  );
}

/* Step 2 — the instant answer: each rule checks off, then the verdict lands. */
export function VerdictVisual() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const rows = [
    { k: 'Location', v: 'Cherry Hill, NJ' },
    { k: 'Age', v: '4 years old' },
    { k: 'Diagnosis', v: 'Autism, on file' },
    { k: 'Insurance', v: 'Aetna, in network' },
  ];
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { const r = setTimeout(() => setN(0), 0); return () => clearTimeout(r); }
    let i = 0;
    const iv = setInterval(() => { i++; setN(i); if (i > rows.length) clearInterval(iv); }, 420);
    return () => clearInterval(iv);
  }, [inView, rows.length]);
  const done = n > rows.length;
  return (
    <div ref={ref} style={CARD}>
      <StatusPill on={done} label="Pre-approved" offLabel="Checking your rules" />
      <div style={{ marginTop: 22 }}>
        {rows.map((r, i) => (
          <div key={r.k} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < rows.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
            <div>
              <div style={{ fontSize: 12, color: MUTED }}>{r.k}</div>
              <div style={{ fontSize: 14.5, fontWeight: 500, color: INK, marginTop: 2 }}>{r.v}</div>
            </div>
            <Tick on={n > i} />
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 20, padding: '14px 16px', borderRadius: 14,
        background: done ? 'rgba(212,242,92,0.18)' : 'rgba(0,0,0,0.03)',
        opacity: done ? 1 : 0.5, transform: done ? 'none' : 'translateY(4px)',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: INK, lineHeight: 1.2 }}>Leo qualifies for care.</div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>Continue to intake, about 10 minutes</div>
      </div>
    </div>
  );
}

/* Step 3 — the clinic's own paperwork, agreed one by one, signed once. */
export function ConsentVisual() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const docs = ['Consent for ABA services', 'HIPAA authorization', 'Release of information', 'Financial agreement'];
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) { const r = setTimeout(() => setN(0), 0); return () => clearTimeout(r); }
    let i = 0;
    const iv = setInterval(() => { i++; setN(i); if (i > docs.length) clearInterval(iv); }, 450);
    return () => clearInterval(iv);
  }, [inView, docs.length]);
  const signed = n > docs.length;
  return (
    <div ref={ref} style={CARD}>
      <StatusPill on={signed} label="Signed" offLabel={`${Math.min(n, docs.length)} of ${docs.length} agreed`} />
      <div style={{ marginTop: 20, display: 'grid', gap: 10 }}>
        {docs.map((d, i) => (
          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px', borderRadius: 12, border: '1px solid rgba(0,0,0,0.06)', background: n > i ? 'rgba(212,242,92,0.10)' : '#fff', transition: 'background 0.4s' }}>
            <Tick on={n > i} />
            <span style={{ fontSize: 14, color: INK }}>{d}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, borderBottom: '1px solid rgba(26,46,31,0.25)', paddingBottom: 6, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 27, color: INK, opacity: signed ? 1 : 0, transition: 'opacity 0.6s ease 0.1s' }}>Maya Thompson</span>
        <span style={{ fontSize: 11, color: MUTED }}>One signature, every form</span>
      </div>
    </div>
  );
}

/* Step 5 — a follow-up that knows exactly what's missing. */
export function FollowUpVisual() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (!inView) { const r = setTimeout(() => setStage(0), 0); return () => clearTimeout(r); }
    const t = [setTimeout(() => setStage(1), 500), setTimeout(() => setStage(2), 1500), setTimeout(() => setStage(3), 2500)];
    return () => t.forEach(clearTimeout);
  }, [inView]);
  const steps = ['Sent', 'Opened', 'Uploaded'];
  return (
    <div ref={ref} style={CARD}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(26,46,31,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600, color: INK }}>DR</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: INK }}>Dana, Brightway ABA</div>
          <div style={{ fontSize: 11.5, color: MUTED }}>to Maya · text and email</div>
        </div>
      </div>
      <div style={{
        background: 'rgba(43,42,38,0.04)', borderRadius: '16px 16px 16px 4px', padding: '14px 16px',
        fontSize: 14.5, lineHeight: 1.55, color: INK,
        opacity: stage >= 1 ? 1 : 0, transform: stage >= 1 ? 'none' : 'translateY(6px)',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}>
        Hi Maya, everything looks great for Leo. We just need his diagnosis report to get started. You can snap a photo here:
        <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 100, padding: '7px 14px', fontSize: 13, fontWeight: 500 }}>
          Continue Leo’s intake
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 18, marginTop: 18 }}>
        {steps.map((s, i) => (
          <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 12, color: stage > i ? INK : MUTED, transition: 'color 0.3s' }}>
            <Tick on={stage > i} />{s}
          </span>
        ))}
      </div>
    </div>
  );
}
