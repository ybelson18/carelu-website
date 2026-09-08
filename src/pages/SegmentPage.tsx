import { useParams, Link } from 'react-router-dom';
import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import { segments } from '../data/segments';
import type { SegmentConfig } from '../data/segments';
import SiteFooter from '../components/SiteFooter';

/* ================================================================
   SEGMENT LANDING PAGE TEMPLATE  (/for/:slug)
   One component renders every vertical; content comes from
   src/data/segments.ts. Built on the current brand system used by
   the homepage, Company and Solutions pages: bone surfaces, ink
   text, lime accent, EB Garamond display serif, the shared floating
   pill nav from Landing.tsx, and the shared SiteFooter.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const LIME = '#D4F25C';
const MUTED = '#8C8674';
const HAIR = 'rgba(43,42,38,0.08)';

const W: React.CSSProperties = { maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

// The site footer's default headline is pediatric. Each vertical gets its own
// so the closing line matches who that page is actually for. Falls back to the
// default (undefined) for ABA.
const FOOTER_HEADLINES: Record<string, string | undefined> = {
  'aba-therapy': undefined,
  'mental-health': 'Somewhere right now, someone is looking for a therapist with room to see them.',
  'home-care': 'Somewhere right now, a family is trying to get someone home safely.',
  'addiction-treatment': 'Somewhere right now, someone has decided today is the day.',
  'hospice': 'Somewhere right now, a family is trying to make someone comfortable.',
};

const CARD: React.CSSProperties = {
  background: '#fff', borderRadius: 22,
  padding: 'clamp(28px, 3.2vw, 40px)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
};

function Pill({ children }: { children: string }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 11, fontWeight: 600,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: INK, background: '#fff',
      padding: '10px 20px', borderRadius: 100,
      border: '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
    }}>{children}</span>
  );
}

function DemoButton({ large }: { large?: boolean }) {
  return (
    <a href="/demo" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
      padding: large ? '16px 32px' : '14px 28px', borderRadius: 100, textDecoration: 'none',
      transition: 'transform 0.2s, box-shadow 0.3s',
      boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      Get a Demo
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  );
}

function SectionHead({ pill, title, italic }: { pill: string; title: string; italic?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 4vw, 48px)' }}>
      <div className="rv"><Pill>{pill}</Pill></div>
      <h2 className="rv-scale d1" style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 48px)',
        fontWeight: 400, color: INK, lineHeight: 1.12, letterSpacing: '-0.02em',
        margin: '22px auto 0', maxWidth: 760,
      }}>
        {title}{italic && <> <span style={{ fontStyle: 'italic', whiteSpace: 'nowrap' }}>{italic}</span></>}
      </h2>
    </div>
  );
}

/* ── LOGOS — static trusted-by band, same as the Company page ── */
function LogoBand({ aba }: { aba: boolean }) {
  const logos = [
    { src: '/logos/strive-aba.png', alt: 'Strive ABA' },
    { src: '/logos/golden-care-full.png', alt: 'Golden Care' },
    { src: '/logos/grateful-care.avif', alt: 'Grateful Care' },
    { src: '/logos/supportive-care.png', alt: 'Supportive Care' },
    { src: '/logos/cross-river.png', alt: 'Cross River' },
    { src: '/logos/totalcare.webp', alt: 'Total Care' },
    { src: '/logos/blossom-aba.webp', alt: 'Blossom ABA' },
  ];
  return (
    <section style={{ background: BONE, paddingBottom: 'clamp(56px, 8vw, 100px)' }}>
      <div style={{ ...W, textAlign: 'center' }}>
        <p className="rv" style={{
          fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(43,42,38,0.42)', marginBottom: 36,
        }}>
          {aba ? 'Trusted by the fastest growing ABA providers' : 'Trusted by the fastest growing providers'}
        </p>
        <div className="rv d1" style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(28px, 4vw, 56px)', rowGap: 28, maxWidth: 980, margin: '0 auto',
        }}>
          {logos.map((l) => (
            <img key={l.alt} src={l.src} alt={l.alt} loading="lazy" style={{
              height: 'clamp(26px, 3vw, 36px)', width: 'auto', objectFit: 'contain',
              opacity: 0.65, filter: 'grayscale(100%) brightness(0.55) contrast(1.05)',
              transition: 'opacity 0.3s ease, filter 0.4s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0%) brightness(1) contrast(1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.65'; e.currentTarget.style.filter = 'grayscale(100%) brightness(0.55) contrast(1.05)'; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentContent({ config }: { config: SegmentConfig }) {
  useReveal();
  useSeo({
    title: `Carelu for ${config.label} — AI Intake & Lead Response`,
    description: config.sub,
    canonical: `/for/${config.slug}`,
  });

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(150px, 18vw, 220px)', paddingBottom: 'clamp(48px, 7vw, 88px)', textAlign: 'center' }}>
        <div style={W}>
          <div className="rv"><Pill>{config.pill}</Pill></div>
          <h1 className="rv-scale d1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.6vw, 76px)',
            fontWeight: 400, color: INK, lineHeight: 1.06,
            letterSpacing: '-0.025em', margin: '26px auto 0', maxWidth: 860,
          }}>
            {config.headline} <span style={{ fontStyle: 'italic' }}>{config.headlineAccent}</span>
          </h1>
          <p className="rv d2" style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(43,42,38,0.68)',
            lineHeight: 1.65, maxWidth: 600, margin: '24px auto 0',
          }}>
            {config.sub}
          </p>
          <div className="rv d3" style={{ display: 'inline-flex', gap: 12, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <DemoButton />
            <a href="/carelu#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 15, fontWeight: 600, color: INK,
              padding: '14px 26px', borderRadius: 100, textDecoration: 'none',
              border: '1.5px solid rgba(43,42,38,0.25)', background: 'transparent',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = INK; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(43,42,38,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >See How It Works</a>
          </div>
        </div>
      </section>

      <LogoBand aba={config.slug === 'aba-therapy'} />

      {/* Pain points */}
      <section style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div style={W}>
          <SectionHead pill={config.painLabel} title={config.painHeadline} />
          <div className="seg-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {config.pains.map((p, i) => (
              <div key={p.title} className={`rv d${Math.min(i + 1, 5)}`} style={CARD}>
                <span style={{ display: 'inline-flex', width: 10, height: 10, borderRadius: '50%', background: LIME, border: `1.5px solid ${INK}`, marginBottom: 18 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.1vw, 27px)', fontWeight: 400, color: INK, lineHeight: 1.2, letterSpacing: '-0.5px', margin: '0 0 10px' }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(43,42,38,0.62)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div style={W}>
          <SectionHead pill={config.solutionLabel} title={config.solutionHeadline} />
          <div className="seg-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {config.solutions.map((s, i) => (
              <div key={s.title} className={`rv d${Math.min(i + 1, 5)}`} style={CARD}>
                <span style={{ display: 'inline-flex', width: 10, height: 10, borderRadius: '50%', background: LIME, border: `1.5px solid ${INK}`, marginBottom: 18 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.1vw, 27px)', fontWeight: 400, color: INK, lineHeight: 1.2, letterSpacing: '-0.5px', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(43,42,38,0.62)', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results — the same certificate-plaque stat row as the homepage/Company page */}
      <section id="results" style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div style={W}>
          <SectionHead pill="Proven results" title="The results speak louder" italic="than we can." />
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto', borderTop: `1px solid ${HAIR}` }}>
            <span style={{ position: 'absolute', top: 0.5, left: 0, width: 5, height: 5, borderRadius: '50%', background: INK, transform: 'translate(-50%, -50%)' }} />
            <span className="dot-pulse" style={{ position: 'absolute', top: 0.5, right: 0, width: 7, height: 7, borderRadius: '50%', background: LIME, border: '1px solid rgba(43,42,38,0.35)', boxShadow: '0 0 0 3px rgba(212, 242, 92, 0.3)', transform: 'translate(50%, -50%)' }} />
            <div className="seg-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', paddingTop: 8, textAlign: 'center' }}>
              {config.stats.map((s, i) => (
                <div key={s.label} className={`rv d${i + 1}`} style={{ padding: 'clamp(24px, 3vw, 36px) 24px', borderLeft: i === 0 ? 'none' : `1px solid ${HAIR}` }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3vw, 40px)', color: INK, lineHeight: 1, fontWeight: 400, fontVariantNumeric: 'lining-nums tabular-nums' }}>{s.value}</div>
                  <div style={{ fontSize: 10.5, fontWeight: 500, color: INK, marginTop: 13, letterSpacing: '0.13em', textTransform: 'uppercase', opacity: 0.55, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 140px)', textAlign: 'center' }}>
        <div style={W}>
          <p className="rv" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 44px)',
            fontWeight: 400, color: INK, lineHeight: 1.15,
            letterSpacing: '-0.02em', margin: '0 auto 16px', maxWidth: 720,
          }}>
            {config.ctaHeadline}
          </p>
          <p className="rv d1" style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: MUTED, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 28px' }}>
            {config.ctaSub}
          </p>
          <div className="rv d2"><DemoButton large /></div>
        </div>
      </section>

      <SiteFooter headline={FOOTER_HEADLINES[config.slug]} />

      <style>{`
        @media (max-width: 768px) {
          .seg-grid-2, .seg-grid-3 { grid-template-columns: 1fr !important; }
          .seg-stats { grid-template-columns: 1fr !important; }
          .seg-stats > div { border-left: none !important; border-top: 1px solid ${HAIR}; }
          .seg-stats > div:first-child { border-top: none; }
        }
      `}</style>
    </div>
  );
}

export default function SegmentPage() {
  const { slug } = useParams<{ slug: string }>();
  const config = segments[slug || ''];

  if (!config) {
    return (
      <div className="session-light" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BONE }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 400, color: INK, marginBottom: 16 }}>Page not found</h1>
          <Link to="/carelu" style={{ color: INK, fontWeight: 600 }}>Go back to home</Link>
        </div>
      </div>
    );
  }

  return <SegmentContent config={config} />;
}
