/* Two tracks, same family. The top one is how intake usually goes; the
   bottom one is the same family on Carelu. Illustrative, not a benchmark. */

const INK = '#1A1A1A';
const LEAF = '#3F7A34';
const FOREST = '#2C3E2D';
const LIME = '#D4F25C';

type Mark = { at: number; label: string; sub: string };

const BEFORE: Mark[] = [
  { at: 0, label: 'Form filled', sub: 'Friday, 9pm' },
  { at: 22, label: 'First callback', sub: 'Monday, if they pick up' },
  { at: 42, label: 'Packet emailed', sub: 'Opened? Nobody knows' },
  { at: 66, label: 'Chasing documents', sub: 'Calls, texts, voicemail' },
  { at: 100, label: 'Intake complete', sub: 'Weeks later, if at all' },
];
const AFTER: Mark[] = [
  { at: 0, label: 'Form filled', sub: 'Friday, 9pm' },
  { at: 10, label: 'Pre-approved', sub: 'Seconds later' },
  { at: 24, label: 'Releases signed', sub: 'Same visit, on a phone' },
  { at: 38, label: 'Benefits verified', sub: 'In the background' },
  { at: 52, label: 'Intake complete', sub: 'Before Monday' },
];

function Track({ title, marks, tone }: { title: string; marks: Mark[]; tone: 'before' | 'after' }) {
  const color = tone === 'after' ? LEAF : '#B9B2A2';
  const end = marks[marks.length - 1].at;
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: tone === 'after' ? LEAF : 'rgba(43,42,38,0.5)', marginBottom: 16 }}>{title}</div>
      <div className="st-track" style={{ position: 'relative', height: 120 }}>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 14, height: 2, background: '#EDE8DC' }} />
        <div className={tone === 'after' ? 'st-fill st-fast' : 'st-fill st-slow'} style={{ position: 'absolute', left: 0, top: 13, height: 4, borderRadius: 4, background: color, width: `${end}%` }} />
        {marks.map((m, i) => (
          <div key={m.label} style={{ position: 'absolute', left: `${m.at}%`, top: 0, transform: i === 0 ? 'none' : m.at === 100 ? 'translateX(-100%)' : 'translateX(-50%)', textAlign: i === 0 ? 'left' : m.at === 100 ? 'right' : 'center', width: 130 }}>
            <span style={{ display: 'block', width: 14, height: 14, borderRadius: '50%', margin: i === 0 ? '7px 0 0' : m.at === 100 ? '7px 0 0 auto' : '7px auto 0', background: tone === 'after' && i === marks.length - 1 ? LIME : '#fff', border: `2.5px solid ${tone === 'after' ? FOREST : '#B9B2A2'}` }} />
            <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: INK, marginTop: 10, lineHeight: 1.3 }}>{m.label}</span>
            <span style={{ display: 'block', fontSize: 12, color: 'rgba(43,42,38,0.55)', marginTop: 2, lineHeight: 1.35 }}>{m.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpeedTimeline() {
  return (
    <div style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)', padding: 'clamp(24px, 3.4vw, 44px)', overflowX: 'auto' }}>
      <div style={{ minWidth: 640 }}>
        <Track title="The usual way" marks={BEFORE} tone="before" />
        <div style={{ height: 1, background: '#EDE8DC', margin: '18px 0 22px' }} />
        <Track title="With Carelu" marks={AFTER} tone="after" />
      </div>
      <p style={{ fontSize: 12.5, color: 'rgba(43,42,38,0.5)', margin: '18px 0 0' }}>Illustrative. The same family, the same Friday night.</p>
      <style>{`
        .st-fill { transform-origin: left; }
        .rv.visible .st-fast { animation: stGrow 1.2s cubic-bezier(.16,1,.3,1) both; }
        .rv.visible .st-slow { animation: stGrow 3.2s ease-in-out both; }
        @keyframes stGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .st-fill { animation: none !important; } }
      `}</style>
    </div>
  );
}
