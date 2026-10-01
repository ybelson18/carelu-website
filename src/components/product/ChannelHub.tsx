import { useState } from 'react';

/* "It all starts with the first touch."
   Every channel a family can use converges on Carelu, which carries them to a
   complete intake and into the clinic's CRM. Click (or hover) a channel to
   light its path and read what happens. */

const INK = '#1A1A1A';
const LEAF = '#3F7A34';
const FOREST = '#2C3E2D';
const LIME = '#D4F25C';
const BONE = '#FAF8F3';

type Channel = { id: string; label: string; sub: string; detail: string };

const CHANNELS: Channel[] = [
  { id: 'form', label: 'Website form', sub: 'SEO, Google Ads', detail: 'A short form that looks like yours. The family gets their answer and lands in your intake in the same visit, with their details already filled in.' },
  { id: 'chat', label: 'Chat', sub: 'On your website', detail: 'The AI chat answers questions about ABA and your services, qualifies the family, and hands them into the same intake. Everything they said carries over.' },
  { id: 'phone', label: 'Phone', sub: 'Calls and voicemail', detail: 'Our phone agent answers after hours and when your team is busy. What’s said on the call fills in the intake, and follow-ups chase the rest.' },
  { id: 'meta', label: 'Facebook & Instagram', sub: 'Lead ads', detail: 'Lead forms arrive the moment a parent submits, are qualified automatically, and get their intake link while they’re still on their phone.' },
  { id: 'referral', label: 'Referrals', sub: 'Doctors, schools, fax', detail: 'Add a referral in seconds and send the family a pre-filled intake link. Coming soon: faxed referrals filed automatically, and referring doctors kept posted.' },
];

const OUT = [
  { label: 'Intake complete', sub: 'Signed, documented, verified' },
  { label: 'Your CRM', sub: 'Kept in sync at every step' },
];

export default function ChannelHub() {
  const [active, setActive] = useState<string>('form');
  const activeCh = CHANNELS.find(c => c.id === active) ?? CHANNELS[0];

  // Geometry (viewBox 1000 x 460)
  const leftX = 200, hubX = 560, hubY = 230, outX = 830;
  const ys = CHANNELS.map((_, i) => 50 + i * 90);
  const outYs = [165, 295];

  return (
    <div className="ch-wrap" style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 'clamp(20px, 3vw, 40px)', alignItems: 'center' }}>
      <div className="ch-svg" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)', padding: 'clamp(12px, 2vw, 24px)', overflowX: 'auto' }}>
        <svg viewBox="0 0 1000 460" role="img" aria-label="Every channel flows into Carelu, then to a complete intake and your CRM" style={{ width: '100%', minWidth: 560, height: 'auto', display: 'block' }}>
          {/* paths from channels to hub */}
          {CHANNELS.map((c, i) => {
            const on = c.id === active;
            const d = `M ${leftX} ${ys[i]} C ${leftX + 170} ${ys[i]}, ${hubX - 190} ${hubY}, ${hubX - 70} ${hubY}`;
            return (
              <g key={c.id}>
                <path d={d} fill="none" stroke={on ? LEAF : '#E3DED2'} strokeWidth={on ? 3 : 2} style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }} />
                {on && <path d={d} fill="none" stroke={LIME} strokeWidth={3} strokeDasharray="6 14" className="ch-flow" />}
              </g>
            );
          })}
          {/* paths from hub to outputs */}
          {outYs.map((y, i) => {
            const d = `M ${hubX + 70} ${hubY} C ${hubX + 150} ${hubY}, ${outX - 120} ${y}, ${outX - 10} ${y}`;
            return (
              <g key={i}>
                <path d={d} fill="none" stroke={LEAF} strokeWidth={3} />
                <path d={d} fill="none" stroke={LIME} strokeWidth={3} strokeDasharray="6 14" className="ch-flow" />
              </g>
            );
          })}

          {/* channel nodes */}
          {CHANNELS.map((c, i) => {
            const on = c.id === active;
            return (
              <g key={c.id} transform={`translate(10 ${ys[i] - 30})`} style={{ cursor: 'pointer' }}
                onClick={() => setActive(c.id)} onMouseEnter={() => setActive(c.id)}
                role="button" tabIndex={0} aria-pressed={on} aria-label={c.label}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(c.id); } }}
              >
                <rect width={190} height={60} rx={30} fill={on ? FOREST : BONE} stroke={on ? FOREST : '#E3DED2'} strokeWidth={1.5} style={{ transition: 'fill 0.3s' }} />
                <text x={22} y={27} fontSize={16} fontWeight={600} fill={on ? BONE : INK} style={{ fontFamily: 'var(--font-body, DM Sans, sans-serif)' }}>{c.label}</text>
                <text x={22} y={45} fontSize={12} fill={on ? '#D4E4CF' : 'rgba(43,42,38,0.55)'} style={{ fontFamily: 'var(--font-body, DM Sans, sans-serif)' }}>{c.sub}</text>
              </g>
            );
          })}

          {/* hub */}
          <g transform={`translate(${hubX} ${hubY})`}>
            <circle r={92} fill={LIME} opacity={0.25} className="ch-pulse" />
            <circle r={70} fill={FOREST} />
            <text y={-4} textAnchor="middle" fontSize={30} fill={BONE} style={{ fontFamily: 'var(--font-display, EB Garamond, serif)' }}>Carelu</text>
            <text y={20} textAnchor="middle" fontSize={11.5} fill="#D4E4CF" letterSpacing={1.2} style={{ fontFamily: 'var(--font-body, DM Sans, sans-serif)' }}>INSTANT ANSWER</text>
          </g>

          {/* outputs */}
          {OUT.map((o, i) => (
            <g key={o.label} transform={`translate(${outX - 10} ${outYs[i] - 32})`}>
              <rect width={170} height={64} rx={16} fill="#F0F5EE" stroke="#D4E4CF" strokeWidth={1.5} />
              <text x={16} y={28} fontSize={16} fontWeight={600} fill={INK} style={{ fontFamily: 'var(--font-body, DM Sans, sans-serif)' }}>{o.label}</text>
              <text x={16} y={47} fontSize={11.5} fill="rgba(43,42,38,0.6)" style={{ fontFamily: 'var(--font-body, DM Sans, sans-serif)' }}>{o.sub}</text>
            </g>
          ))}
        </svg>
      </div>

      {/* Phone layout: the same idea as a short vertical flow */}
      <div className="ch-flow-m" style={{ background: '#fff', borderRadius: 22, boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)', padding: 22 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {CHANNELS.map(c => (
            <span key={c.id} style={{ fontSize: 13, fontWeight: 600, padding: '6px 12px', borderRadius: 100, background: c.id === active ? FOREST : BONE, color: c.id === active ? BONE : INK, border: '1px solid rgba(43,42,38,0.12)' }}>{c.label}</span>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginTop: 14 }}>
          <span style={{ width: 2, height: 22, background: LEAF }} />
          <span style={{ background: FOREST, color: BONE, borderRadius: 100, padding: '10px 22px', fontFamily: 'var(--font-display)', fontSize: 22, boxShadow: `0 0 0 6px rgba(212,242,92,0.35)` }}>Carelu</span>
          <span style={{ fontSize: 11, letterSpacing: '0.12em', color: LEAF, fontWeight: 700 }}>INSTANT ANSWER</span>
          <span style={{ width: 2, height: 22, background: LEAF }} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {OUT.map(o => (
              <span key={o.label} style={{ background: '#F0F5EE', border: '1px solid #D4E4CF', borderRadius: 14, padding: '9px 14px', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: INK }}>{o.label}</span>
                <span style={{ display: 'block', fontSize: 12, color: 'rgba(43,42,38,0.6)' }}>{o.sub}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div aria-live="polite">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          {CHANNELS.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)} aria-pressed={c.id === active} style={{
              fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              padding: '7px 14px', borderRadius: 100,
              border: `1px solid ${c.id === active ? FOREST : 'rgba(43,42,38,0.15)'}`,
              background: c.id === active ? FOREST : '#fff', color: c.id === active ? BONE : INK,
              transition: 'background 0.2s, color 0.2s',
            }}>{c.label}</button>
          ))}
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.4vw, 32px)', fontWeight: 400, color: INK, margin: '0 0 10px', lineHeight: 1.15 }}>{activeCh.label}</h3>
        <p style={{ fontSize: 16, color: 'rgba(43,42,38,0.7)', lineHeight: 1.65, margin: 0 }}>{activeCh.detail}</p>
        <p style={{ fontSize: 14, color: LEAF, fontWeight: 600, marginTop: 16 }}>Whichever way they come in, the next step is the same: an instant answer.</p>
      </div>

      <style>{`
        .ch-flow { animation: chFlow 1.1s linear infinite; }
        @keyframes chFlow { to { stroke-dashoffset: -20; } }
        .ch-pulse { transform-origin: center; animation: chPulse 2.6s ease-in-out infinite; }
        @keyframes chPulse { 0%,100% { transform: scale(0.92); opacity: .18; } 50% { transform: scale(1.06); opacity: .35; } }
        @media (prefers-reduced-motion: reduce) { .ch-flow, .ch-pulse { animation: none; } }
        @media (max-width: 900px) { .ch-wrap { grid-template-columns: 1fr !important; } }
        .ch-flow-m { display: none; }
        @media (max-width: 760px) { .ch-svg { display: none; } .ch-flow-m { display: block; } }
      `}</style>
    </div>
  );
}
