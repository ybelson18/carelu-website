/* ============================================================
   CARELU WORDMARK — "lu" treatments
   Refining Variant C (pulsing dot + EB Garamond bold wordmark)
   ============================================================ */

const animStyle = `
  @keyframes logoPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
`;

function PulseDot({ size = 12 }: { size?: number }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%', background: '#4A7A4E',
      display: 'inline-block', animation: 'logoPulse 2.5s ease infinite',
    }} />
  );
}

const baseWord: React.CSSProperties = {
  fontFamily: 'EB Garamond, serif',
  fontWeight: 600,
  color: '#1B2E1E',
  letterSpacing: '-1px',
  lineHeight: 1,
};

// ── Treatment 1: Baseline (current Variant C) ──
function T1({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size }}>carelu</span>
    </div>
  );
}

// ── Treatment 2: Italic "lu" — subtle flair on the ending ──
function T2({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size }}>
        care<em style={{ fontStyle: 'italic', fontWeight: 500 }}>lu</em>
      </span>
    </div>
  );
}

// ── Treatment 3: Capital "L" — careLu as a proper noun ──
function T3({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size }}>careLu</span>
    </div>
  );
}

// ── Treatment 4: Lighter "lu" — gives it air, elegant fade ──
function T4({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size }}>
        care<span style={{ fontWeight: 400, color: '#2C3E2D' }}>lu</span>
      </span>
    </div>
  );
}

// ── Treatment 5: "lu" as a small-caps sub-mark ──
function T5({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size, display: 'inline-flex', alignItems: 'baseline' }}>
        care
        <span style={{
          fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: size * 0.55,
          letterSpacing: '2px', textTransform: 'uppercase', marginLeft: size / 14,
          position: 'relative', top: -size / 32,
        }}>LU</span>
      </span>
    </div>
  );
}

// ── Treatment 6: Dot over the "l" — echoes the brand dot ──
function T6({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size, position: 'relative', display: 'inline-block' }}>
        care<span style={{ position: 'relative', display: 'inline-block' }}>
          l
          <span style={{
            position: 'absolute',
            top: -size * 0.08,
            left: '50%',
            transform: 'translateX(-50%)',
            width: size / 9,
            height: size / 9,
            borderRadius: '50%',
            background: '#4A7A4E',
          }} />
        </span>u
      </span>
    </div>
  );
}

// ── Treatment 7: Mirrored "c" and "u" — the word cups itself ──
function T7({ size = 48 }: { size?: number }) {
  // "u" is italic to echo the round open "c"
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{ ...baseWord, fontSize: size }}>
        care<span style={{ fontWeight: 500 }}>l</span>
        <em style={{ fontStyle: 'italic', fontWeight: 500 }}>u</em>
      </span>
    </div>
  );
}

// ── Treatment 8: Extended "u" with a little terminal flourish ──
function T8({ size = 48 }: { size?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size / 3 }}>
      <PulseDot size={size / 4} />
      <span style={{
        ...baseWord, fontSize: size,
        fontFeatureSettings: '"dlig" 1, "swsh" 1, "salt" 1',
      }}>carelu</span>
    </div>
  );
}

function Card({ num, title, desc, children, recommendation }: {
  num: string; title: string; desc: string; children: React.ReactNode; recommendation?: boolean;
}) {
  return (
    <div style={{
      border: recommendation ? '2px solid #2C3E2D' : '1px solid #E2E0DC',
      borderRadius: 20, overflow: 'hidden', background: '#fff',
      boxShadow: recommendation ? '0 8px 32px rgba(27,46,30,0.08)' : 'none',
    }}>
      <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E0DC' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 4, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#2C3E2D', letterSpacing: 2, textTransform: 'uppercase' }}>{num}</span>
          <h3 style={{ fontFamily: 'EB Garamond, serif', fontSize: 24, fontWeight: 500, color: '#1B2E1E' }}>{title}</h3>
          {recommendation && <span style={{ fontSize: 10, fontWeight: 700, background: '#2C3E2D', color: '#fff', padding: '3px 10px', borderRadius: 20, letterSpacing: 1, textTransform: 'uppercase' }}>My pick</span>}
        </div>
        <p style={{ fontSize: 13, color: '#55524E', lineHeight: 1.55 }}>{desc}</p>
      </div>
      <div style={{ padding: '48px 32px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
      <div style={{ padding: '36px 32px', background: '#1B2E1E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          Treating the "lu"
        </h1>
        <p style={{ fontSize: 17, color: '#55524E', marginBottom: 48, maxWidth: 620, lineHeight: 1.6 }}>
          Variant C is the direction. Now refining how the "lu" ending is treated — since "lu" is the distinctive, unusual part of the name, it should feel intentional.
        </p>

        <div style={{ display: 'grid', gap: 24 }}>
          <Card num="T1" title="Baseline — no special treatment" desc="Plain 'carelu' in EB Garamond bold. Feels slightly anticlimactic — 'care' has weight, 'lu' trails off.">
            <T1 size={56} />
          </Card>

          <Card num="T2" title="Italic 'lu'" desc="The 'lu' goes italic and lighter weight. Reads like a signature — intentional, distinctive, adds a human touch." recommendation>
            <T2 size={56} />
          </Card>

          <Card num="T3" title="careLu (capital L)" desc="Treats 'Lu' as a proper noun — like a name. Bold move; makes the word feel like two concepts: care + Lu (a person/character). Risky but memorable.">
            <T3 size={56} />
          </Card>

          <Card num="T4" title="Lighter 'lu'" desc="Same weight structure as italic, but upright. The 'lu' breathes. Elegant fade into the ending.">
            <T4 size={56} />
          </Card>

          <Card num="T5" title="'LU' as small sans caps" desc="Most dramatic contrast. The 'LU' becomes almost a sub-logo — like careLU™. Feels modern but might fight the serif too much.">
            <T5 size={56} />
          </Card>

          <Card num="T6" title="Dot over the 'l'" desc="A tiny green dot sits atop the 'l' — echoing the brand pulse dot. The active signal embedded in the letterform itself.">
            <T6 size={56} />
          </Card>

          <Card num="T7" title="Italic 'u' only (mirror the 'c')" desc="Just the 'u' leans into italic — its curve echoes the opening curve of the 'c'. Subtle bookending.">
            <T7 size={56} />
          </Card>

          <Card num="T8" title="Stylistic alternates enabled" desc="Lets EB Garamond's OpenType features do the work — swashes, ligatures, alternates. Most traditional/classical approach.">
            <T8 size={56} />
          </Card>
        </div>

        <div style={{ marginTop: 48, padding: '32px', background: '#F0F5EE', borderRadius: 16, border: '1px solid #D4E4CF' }}>
          <p style={{ fontSize: 15, color: '#1B2E1E', lineHeight: 1.7 }}>
            <strong>My pick: T2 (Italic "lu")</strong>
          </p>
          <p style={{ fontSize: 15, color: '#55524E', lineHeight: 1.7, marginTop: 12 }}>
            It makes the "lu" feel <em>intentional</em> — like you MEANT for it to be distinctive. The italic connects visually because EB Garamond's italic is elegant and restrained (not flashy). It also echoes the tone of your brand: warm, considered, a little different. And it's simple — no custom letterforms needed, works with standard EB Garamond.
          </p>
          <p style={{ fontSize: 15, color: '#55524E', lineHeight: 1.7, marginTop: 12 }}>
            <strong>Runner-up: T6 (Dot over the 'l').</strong> Embeds the brand's active-dot motif into the wordmark itself. More distinctive as a mark, but slightly busier.
          </p>
        </div>
      </div>
    </div>
  );
}
