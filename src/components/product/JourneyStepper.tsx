import { useEffect, useRef, useState } from 'react';

/* The product journey, step by step: the step list on one side, an abstract
   product visual for that step on the other. Advances on its own while it's
   on screen until the visitor picks a step; then it's theirs to drive. */

const INK = '#1A1A1A';
const LEAF = '#3F7A34';
const FOREST = '#2C3E2D';
const LIME = '#D4F25C';
const BONE = '#FAF8F3';
const DWELL = 7000;

export type JourneyStep = {
  who: 'Family' | 'Carelu' | 'Your team';
  title: string;
  body: string;
  points?: string[];
  visual: React.ReactNode;
};

const WHO_COLOR: Record<JourneyStep['who'], string> = {
  'Family': '#B08A1E',
  'Carelu': LEAF,
  'Your team': FOREST,
};

export default function JourneyStepper({ steps }: { steps: JourneyStep[] }) {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t = window.setTimeout(() => setI(n => (n + 1) % steps.length), DWELL);
    return () => window.clearTimeout(t);
  }, [i, auto, inView, steps.length]);

  const pick = (n: number) => { setAuto(false); setI(n); };
  const s = steps[i];

  return (
    <div ref={rootRef} className="js-wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'start' }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 4 }}>
        {steps.map((st, n) => {
          const on = n === i;
          return (
            <li key={st.title}>
              <button onClick={() => pick(n)} aria-current={on ? 'step' : undefined} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                display: 'grid', gridTemplateColumns: '34px 1fr', gap: 14, alignItems: 'start',
                padding: on ? '18px 20px' : '12px 20px', borderRadius: 18,
                border: `1px solid ${on ? 'rgba(43,42,38,0.08)' : 'transparent'}`,
                background: on ? '#fff' : 'transparent',
                boxShadow: on ? '0 8px 40px rgba(0,0,0,0.04)' : 'none',
                transition: 'background 0.25s, box-shadow 0.25s, padding 0.25s',
              }}>
                <span style={{
                  width: 30, height: 30, borderRadius: '50%', fontSize: 12.5, fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: on ? FOREST : 'transparent', color: on ? BONE : 'rgba(43,42,38,0.55)',
                  border: `1px solid ${on ? FOREST : 'rgba(43,42,38,0.18)'}`,
                }}>{String(n + 1).padStart(2, '0')}</span>
                <span>
                  <span style={{ display: 'block', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: WHO_COLOR[st.who] }}>{st.who}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: on ? 24 : 19, color: INK, lineHeight: 1.2, marginTop: 3, transition: 'font-size 0.25s' }}>{st.title}</span>
                  {on && (
                    <span style={{ display: 'block', marginTop: 8 }}>
                      <span style={{ display: 'block', fontSize: 15, color: 'rgba(43,42,38,0.66)', lineHeight: 1.6 }}>{st.body}</span>
                      {st.points && (
                        <span style={{ display: 'grid', gap: 6, marginTop: 10 }}>
                          {st.points.map(p => (
                            <span key={p} style={{ display: 'flex', gap: 9, fontSize: 14, color: INK, lineHeight: 1.5 }}>
                              <span style={{ width: 6, height: 6, borderRadius: '50%', background: LIME, border: `1px solid ${INK}`, marginTop: 8, flex: 'none' }} />
                              {p}
                            </span>
                          ))}
                        </span>
                      )}
                      {auto && inView && (
                        <span style={{ display: 'block', height: 2, background: '#EDE8DC', borderRadius: 2, marginTop: 16, overflow: 'hidden' }}>
                          <span key={i} className="js-bar" style={{ display: 'block', height: '100%', background: FOREST }} />
                        </span>
                      )}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="js-stage" style={{ position: 'sticky', top: 90, minWidth: 0 }}>
        <div style={{
          borderRadius: 28, padding: 'clamp(24px, 4vw, 48px) clamp(16px, 3vw, 40px)', minHeight: 'clamp(380px, 46vw, 520px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'radial-gradient(120% 90% at 50% 0%, rgba(212,242,92,0.14) 0%, rgba(212,242,92,0) 55%), linear-gradient(180deg, #F3F0E8 0%, #EEF2EA 100%)',
          border: '1px solid rgba(43,42,38,0.05)',
        }}>
          <div key={i} className="js-fade" style={{ width: '100%', minWidth: 0, overflow: 'hidden' }}>{s.visual}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 18 }}>
          <button onClick={() => pick((i - 1 + steps.length) % steps.length)} aria-label="Previous step" style={navBtn}>←</button>
          <span style={{ fontSize: 13, color: 'rgba(43,42,38,0.55)', alignSelf: 'center', minWidth: 56, textAlign: 'center' }}>{i + 1} of {steps.length}</span>
          <button onClick={() => pick((i + 1) % steps.length)} aria-label="Next step" style={navBtn}>→</button>
        </div>
      </div>

      <style>{`
        .js-fade { animation: jsFade 0.5s cubic-bezier(.16,1,.3,1); }
        @keyframes jsFade { from { opacity: 0; transform: translateY(10px) scale(0.99); } to { opacity: 1; transform: none; } }
        .js-bar { width: 0; animation: jsBar ${DWELL}ms linear forwards; }
        @keyframes jsBar { to { width: 100%; } }
        @media (prefers-reduced-motion: reduce) { .js-fade, .js-bar { animation: none; } }
        @media (max-width: 900px) {
          .js-wrap { grid-template-columns: 1fr !important; }
          .js-stage { position: static !important; order: -1; }
        }
      `}</style>
    </div>
  );
}

const navBtn: React.CSSProperties = {
  width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(43,42,38,0.18)',
  background: '#fff', cursor: 'pointer', fontSize: 16, color: INK, fontFamily: 'inherit',
};
