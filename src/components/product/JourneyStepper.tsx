import { useEffect, useRef, useState } from 'react';

/* The product journey, step by step. A step list on one side, the real
   product screen for that step on the other. Advances on its own until the
   visitor picks a step; then it's theirs to drive. */

const INK = '#1A1A1A';
const LEAF = '#3F7A34';
const FOREST = '#2C3E2D';
const LIME = '#D4F25C';
const BONE = '#FAF8F3';

export type JourneyStep = {
  who: 'Family' | 'Carelu' | 'Your team';
  title: string;
  body: string;
  points?: string[];
  img: string;           // screenshot path under /public
  device: 'phone' | 'desktop';
  alt: string;
};

const WHO_COLOR: Record<JourneyStep['who'], string> = {
  'Family': '#C9A227',
  'Carelu': LEAF,
  'Your team': FOREST,
};

function Frame({ step }: { step: JourneyStep }) {
  if (step.device === 'phone') {
    return (
      <div style={{ width: 'min(300px, 78%)', margin: '0 auto', borderRadius: 40, background: FOREST, padding: 10, boxShadow: '0 24px 60px rgba(26,46,31,0.25)' }}>
        <div style={{ borderRadius: 31, overflow: 'hidden', background: '#fff', aspectRatio: '390 / 780' }}>
          <img src={step.img} alt={step.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        </div>
      </div>
    );
  }
  return (
    <div style={{ borderRadius: 14, background: '#fff', boxShadow: '0 24px 60px rgba(26,46,31,0.18)', overflow: 'hidden', border: '1px solid rgba(43,42,38,0.08)' }}>
      <div style={{ display: 'flex', gap: 6, padding: '10px 12px', background: '#F3F0E8', borderBottom: '1px solid rgba(43,42,38,0.08)' }}>
        {['#E5A39A', '#E8CF8C', '#A9CF9B'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        <span style={{ marginLeft: 10, fontSize: 11, color: 'rgba(43,42,38,0.5)' }}>app.carelu.com</span>
      </div>
      <img src={step.img} alt={step.alt} loading="lazy" style={{ width: '100%', display: 'block' }} />
    </div>
  );
}

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
    const t = window.setTimeout(() => setI(n => (n + 1) % steps.length), 6500);
    return () => window.clearTimeout(t);
  }, [i, auto, inView, steps.length]);

  const pick = (n: number) => { setAuto(false); setI(n); };
  const s = steps[i];

  return (
    <div ref={rootRef} className="js-wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'start' }}>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
        {steps.map((st, n) => {
          const on = n === i;
          return (
            <li key={st.title}>
              <button onClick={() => pick(n)} aria-current={on ? 'step' : undefined} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                display: 'grid', gridTemplateColumns: '34px 1fr', gap: 14, alignItems: 'start',
                padding: on ? '16px 18px' : '12px 18px', borderRadius: 16,
                border: `1px solid ${on ? 'rgba(43,42,38,0.10)' : 'transparent'}`,
                background: on ? '#fff' : 'transparent',
                boxShadow: on ? '0 4px 24px rgba(0,0,0,0.05)' : 'none',
                transition: 'background 0.25s, box-shadow 0.25s, padding 0.25s',
              }}>
                <span style={{
                  width: 30, height: 30, borderRadius: '50%', fontSize: 13, fontWeight: 700,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: on ? FOREST : BONE, color: on ? BONE : INK, border: `1.5px solid ${on ? FOREST : 'rgba(43,42,38,0.2)'}`,
                }}>{n + 1}</span>
                <span>
                  <span style={{ display: 'block', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: WHO_COLOR[st.who] }}>{st.who}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: on ? 23 : 19, color: INK, lineHeight: 1.2, marginTop: 2, transition: 'font-size 0.25s' }}>{st.title}</span>
                  {on && (
                    <span style={{ display: 'block', marginTop: 8 }}>
                      <span style={{ display: 'block', fontSize: 15, color: 'rgba(43,42,38,0.68)', lineHeight: 1.6 }}>{st.body}</span>
                      {st.points && (
                        <span style={{ display: 'grid', gap: 6, marginTop: 10 }}>
                          {st.points.map(p => (
                            <span key={p} style={{ display: 'flex', gap: 9, fontSize: 14, color: INK, lineHeight: 1.5 }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={LEAF} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 4, flex: 'none' }}><path d="M4 12l5 5L20 6" /></svg>
                              {p}
                            </span>
                          ))}
                        </span>
                      )}
                      {auto && inView && (
                        <span style={{ display: 'block', height: 3, background: '#EDE8DC', borderRadius: 3, marginTop: 14, overflow: 'hidden' }}>
                          <span key={i} className="js-bar" style={{ display: 'block', height: '100%', background: LIME }} />
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

      <div className="js-stage" style={{ position: 'sticky', top: 90 }}>
        <div key={i} className="js-fade">
          <Frame step={s} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
          <button onClick={() => pick((i - 1 + steps.length) % steps.length)} aria-label="Previous step" style={navBtn}>←</button>
          <span style={{ fontSize: 13, color: 'rgba(43,42,38,0.55)', alignSelf: 'center', minWidth: 56, textAlign: 'center' }}>{i + 1} of {steps.length}</span>
          <button onClick={() => pick((i + 1) % steps.length)} aria-label="Next step" style={navBtn}>→</button>
        </div>
      </div>

      <style>{`
        .js-fade { animation: jsFade 0.45s ease; }
        @keyframes jsFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .js-bar { width: 0; animation: jsBar 6.5s linear forwards; }
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
