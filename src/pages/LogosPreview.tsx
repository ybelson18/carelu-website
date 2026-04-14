/* ============================================================
   CARELU — Round 4: Designer's Final Cut
   12 bolder, more conceptual directions
   ============================================================ */

const animStyle = `
  @keyframes logoPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  @keyframes ekgPulse {
    0% { stroke-dashoffset: 100; }
    60% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -100; }
  }
`;

function Dot({ size = 10 }: { size?: number }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%', background: '#4A7A4E',
      display: 'inline-block', animation: 'logoPulse 2.5s ease infinite',
    }} />
  );
}

const base = (size: number): React.CSSProperties => ({
  fontFamily: 'EB Garamond, serif',
  fontSize: size, fontWeight: 600, color: '#1B2E1E',
  letterSpacing: '-0.8px', lineHeight: 1,
});

// P1: Drop cap — huge C, smaller rest
const P1 = ({ size = 56 }: { size?: number }) => (
  <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
    <span style={{ ...base(size * 1.8), lineHeight: 0.85, color: '#2C3E2D' }}>C</span>
    <span style={{ ...base(size), marginLeft: -size / 10 }}>arelu</span>
  </span>
);

// P2: EKG pulse line replaces the dot
const P2 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 4 }}>
    <svg width={size * 0.9} height={size / 2.5} viewBox="0 0 36 14" fill="none">
      <path d="M0 7 L8 7 L11 2 L15 12 L19 5 L23 7 L36 7"
        stroke="#4A7A4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
        strokeDasharray="100" style={{ animation: 'ekgPulse 2.8s ease infinite' }} />
    </svg>
    <span style={base(size)}>carelu</span>
  </div>
);

// P3: Hand-signed / handwritten feel (using a script style via italic + tight)
const P3 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 4 }}>
    <Dot size={size / 5} />
    <em style={{
      fontFamily: 'EB Garamond, serif', fontSize: size * 1.1, fontWeight: 500,
      fontStyle: 'italic', color: '#1B2E1E', letterSpacing: '-1.5px',
    }}>carelu</em>
  </div>
);

// P4: Monogram — 'cu' as an interlocked mark
const P4 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* 'c' */}
      <path d="M24 12 C 22 10, 19 9, 16 9 C 11 9, 7 13, 7 19 C 7 25, 11 29, 16 29 C 19 29, 22 28, 24 26"
        stroke="#2C3E2D" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* 'u' intertwined */}
      <path d="M18 15 L18 26 C 18 29, 20 31, 24 31 C 28 31, 30 29, 30 26 L 30 15"
        stroke="#2C3E2D" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
    <span style={base(size)}>carelu</span>
  </div>
);

// P5: Sun-rising arc — protective arc above wordmark
const P5 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: size / 12 }}>
    <svg width={size * 2.3} height={size / 3} viewBox="0 0 100 15" fill="none">
      <path d="M5 14 Q 50 -5, 95 14" stroke="#4A7A4E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
    <div style={{ display: 'flex', alignItems: 'center', gap: size / 4 }}>
      <Dot size={size / 5} />
      <span style={base(size)}>carelu</span>
    </div>
  </div>
);

// P6: Line-art geometric mark + wordmark
const P6 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="15" stroke="#2C3E2D" strokeWidth="1.8" fill="none" />
      <path d="M12 20 Q 20 12, 28 20 Q 20 28, 12 20" stroke="#2C3E2D" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2.5" fill="#4A7A4E" />
    </svg>
    <span style={base(size)}>carelu</span>
  </div>
);

// P7: Em-dash break — "care—lu"
const P7 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 4 }}>
    <Dot size={size / 5} />
    <span style={base(size)}>
      care
      <span style={{ color: '#4A7A4E', margin: '0 0.1em' }}>—</span>
      lu
    </span>
  </div>
);

// P8: Tall ascenders — exaggerated 'l' height
const P8 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 4 }}>
    <Dot size={size / 5} />
    <span style={{ ...base(size), display: 'inline-flex', alignItems: 'baseline' }}>
      care
      <span style={{
        fontFamily: 'EB Garamond, serif', fontWeight: 400, fontSize: size * 1.35,
        color: '#2C3E2D', lineHeight: 0.75, letterSpacing: '-2px',
        marginLeft: size * 0.01,
      }}>l</span>
      u
    </span>
  </div>
);

// P9: Emblem — wordmark inside a thin oval frame
const P9 = ({ size = 56 }: { size?: number }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: size / 5,
    padding: `${size / 5}px ${size / 2}px`, border: `1.5px solid #2C3E2D`, borderRadius: size * 2,
  }}>
    <Dot size={size / 6} />
    <span style={{ ...base(size * 0.75), letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>CARELU</span>
  </div>
);

// P10: Gradient wordmark — subtle depth
const P10 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 4 }}>
    <Dot size={size / 5} />
    <span style={{
      fontFamily: 'EB Garamond, serif', fontSize: size, fontWeight: 600,
      letterSpacing: '-0.8px', lineHeight: 1,
      background: 'linear-gradient(180deg, #1B2E1E 0%, #4A7A4E 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>carelu</span>
  </div>
);

// P11: Two dots — mirror brackets, no wordmark changes
const P11 = ({ size = 56 }: { size?: number }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    <Dot size={size / 5} />
    <span style={{ ...base(size), margin: `0 ${size / 4}px` }}>carelu</span>
    <span style={{
      width: size / 5, height: size / 5, borderRadius: '50%',
      border: `1.5px solid #4A7A4E`, display: 'inline-block',
    }} />
  </div>
);

// P12: Hidden dot — dot replaces the counter of the 'e' or 'a'
const P12 = ({ size = 56 }: { size?: number }) => (
  <span style={{ ...base(size), position: 'relative', display: 'inline-block' }}>
    car
    <span style={{ position: 'relative', display: 'inline-block' }}>
      e
      <span style={{
        position: 'absolute',
        top: size * 0.32,
        left: size * 0.28,
        width: size / 10,
        height: size / 10,
        borderRadius: '50%',
        background: '#4A7A4E',
        animation: 'logoPulse 2.5s ease infinite',
      }} />
    </span>
    lu
  </span>
);

function Card({ num, title, desc, children, risk }: {
  num: string; title: string; desc: string; children: React.ReactNode; risk?: 'low' | 'medium' | 'high';
}) {
  const riskColor = risk === 'high' ? '#C89B5A' : risk === 'medium' ? '#7A7672' : '#4A7A4E';
  return (
    <div style={{ border: '1px solid #E2E0DC', borderRadius: 20, overflow: 'hidden', background: '#fff' }}>
      <div style={{ padding: '22px 28px', borderBottom: '1px solid #E2E0DC' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#2C3E2D', letterSpacing: 2, textTransform: 'uppercase' }}>{num}</span>
          <h3 style={{ fontFamily: 'EB Garamond, serif', fontSize: 22, fontWeight: 500, color: '#1B2E1E' }}>{title}</h3>
          {risk && (
            <span style={{
              fontSize: 9, fontWeight: 700, color: '#fff', background: riskColor,
              padding: '3px 8px', borderRadius: 20, letterSpacing: 1, textTransform: 'uppercase',
            }}>{risk}</span>
          )}
        </div>
        <p style={{ fontSize: 13, color: '#55524E', lineHeight: 1.55 }}>{desc}</p>
      </div>
      <div style={{ padding: '52px 28px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      <div style={{ padding: '40px 28px', background: '#1B2E1E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.6)' }}>{children}</div>
      </div>
    </div>
  );
}

export default function LogosPreview() {
  return (
    <div style={{ minHeight: '100vh', background: '#F8F8F7', padding: '48px 32px', fontFamily: 'DM Sans, sans-serif' }}>
      <style>{animStyle}</style>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'EB Garamond, serif', fontSize: 48, fontWeight: 500, color: '#1B2E1E', marginBottom: 12, letterSpacing: '-1px' }}>
          Designer's Final Cut
        </h1>
        <p style={{ fontSize: 17, color: '#55524E', marginBottom: 16, maxWidth: 620, lineHeight: 1.6 }}>
          12 more concepts, from conservative to conceptual. Each labeled by risk level.
        </p>
        <p style={{ fontSize: 13, color: '#7A7672', marginBottom: 40, maxWidth: 620, lineHeight: 1.6, fontStyle: 'italic' }}>
          <span style={{ color: '#4A7A4E', fontWeight: 700 }}>Low</span> = safe, scales well, unambiguous ·{' '}
          <span style={{ color: '#7A7672', fontWeight: 700 }}>Medium</span> = distinctive but recognizable ·{' '}
          <span style={{ color: '#C89B5A', fontWeight: 700 }}>High</span> = bold, might polarize
        </p>

        <div style={{ display: 'grid', gap: 20 }}>
          <Card num="P1" title="Drop Cap" desc="Oversized 'C' nestles into 'arelu.' Editorial, like a book chapter opening. Instant gravitas." risk="medium">
            <P1 size={56} />
          </Card>

          <Card num="P2" title="EKG Pulse" desc="The dot becomes a tiny heartbeat waveform. Literal healthcare cue, but subtle. Animates continuously." risk="high">
            <P2 size={56} />
          </Card>

          <Card num="P3" title="Signed Italic" desc="Entire wordmark in a tight italic weight — reads like a personal signature from the team." risk="low">
            <P3 size={56} />
          </Card>

          <Card num="P4" title="cu Monogram" desc="The first and last letters interlocked as a mark. 'Cu' = the bookends of care. A proper symbol you can license as a favicon." risk="medium">
            <P4 size={56} />
          </Card>

          <Card num="P5" title="Sun-Rising Arc" desc="A thin arc crowns the wordmark — the dawn of care, a protective sky. Warm, aspirational." risk="medium">
            <P5 size={56} />
          </Card>

          <Card num="P6" title="Geometric Lens" desc="Concentric shape with a green dot at center. Abstract but meaningful — the focus, the eye, the AI seeing each family." risk="medium">
            <P6 size={56} />
          </Card>

          <Card num="P7" title="Em-dash Break" desc="'care—lu' with a thin green em-dash separating the halves. Editorial, pause-full, intentional." risk="low">
            <P7 size={56} />
          </Card>

          <Card num="P8" title="Tall Ascender" desc="The 'l' becomes exaggeratedly tall — a vertical axis through the wordmark. Distinctive custom letterform." risk="high">
            <P8 size={56} />
          </Card>

          <Card num="P9" title="Oval Emblem" desc="CARELU wide-spaced inside a thin oval — a classic healthcare crest, updated for 2026. Reads 'established.'" risk="medium">
            <P9 size={56} />
          </Card>

          <Card num="P10" title="Gradient Wordmark" desc="The letters bleed from dark green to light green. Subtle depth, modern, polished." risk="low">
            <P10 size={56} />
          </Card>

          <Card num="P11" title="Bracketed by Dots" desc="The pulsing dot + outline dot bookend the wordmark. Handoff story preserved, balanced." risk="low">
            <P11 size={56} />
          </Card>

          <Card num="P12" title="Dot Inside the 'e'" desc="The pulsing dot sits inside the counter (hole) of the 'e.' Fused into the word itself — invisible until you look." risk="high">
            <P12 size={56} />
          </Card>
        </div>

        <div style={{ marginTop: 48, padding: '32px', background: '#F0F5EE', borderRadius: 16, border: '1px solid #D4E4CF' }}>
          <p style={{ fontSize: 15, color: '#1B2E1E', lineHeight: 1.7, marginBottom: 16 }}>
            <strong>A designer's take:</strong>
          </p>
          <p style={{ fontSize: 14, color: '#55524E', lineHeight: 1.75 }}>
            <strong>P3 (Signed Italic)</strong> is the most strategically right answer — warm, confident, unique, easy to license. It would be what a studio like Collins might pitch as the "deceptively simple" option.
            <br /><br />
            <strong>P4 (cu Monogram)</strong> is the right answer if you want a proper standalone mark for favicon/app icon. It has meaning ('cu' = the bookends of care) and it's ownable.
            <br /><br />
            <strong>P9 (Oval Emblem)</strong> is what a healthcare-first studio like Sub Rosa would pitch — reads "established," "trustworthy," "we've been here 50 years" (even though you're new).
            <br /><br />
            <strong>P1 (Drop Cap)</strong> is my wildcard pick — it has the most personality of the safer options.
          </p>
        </div>
      </div>
    </div>
  );
}
