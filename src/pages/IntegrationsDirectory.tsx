import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import { integrationCatalog } from '../data/integrationCatalog';
import type { CatalogItem } from '../data/integrationCatalog';
import SiteFooter from '../components/SiteFooter';

/* ================================================================
   CARELU — INTEGRATIONS DIRECTORY (/integrations)
   Every system Carelu connects to, grouped by category, driven by
   src/data/integrationCatalog.ts. Carelu is the intake layer that
   connects to the systems providers already run and delivers
   complete records into them — partners, never competitors.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const GREEN_DARK = '#2e5a26';
const MUTED = 'rgba(43,42,38,0.62)';

const W: React.CSSProperties = { maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

const CARD_SHADOW = '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)';
const CARD_SHADOW_HOVER = '0 12px 36px rgba(0,0,0,0.09)';

const PRINCIPLES = [
  {
    t: 'Records, not notifications',
    d: 'Carelu delivers the finished intake — family, child, insurance, documents, consents, source, and stage — mapped to the fields your system already uses.',
  },
  {
    t: 'Direct and HIPAA-appropriate',
    d: 'Protected health information travels straight from Carelu to your system under a BAA. No consumer automation tools carrying PHI in between.',
  },
  {
    t: 'Set up with you, once',
    d: 'Onboarding maps every field and tests the flow with real records. After that, every family arrives the same way, every time.',
  },
];

function Arrow({ color = GREEN }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Card({ item, delay }: { item: CatalogItem; delay: number }) {
  const Tag = item.href ? 'a' : 'div';
  const base: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', gap: 10,
    background: '#fff', borderRadius: 18, textDecoration: 'none', color: 'inherit',
    padding: item.featured ? 'clamp(24px, 3vw, 34px)' : 'clamp(20px, 2.6vw, 28px)',
    boxShadow: CARD_SHADOW,
    border: item.featured ? '1px solid rgba(63,122,52,0.22)' : '1px solid transparent',
    transition: 'transform 0.2s, box-shadow 0.25s',
    gridColumn: item.featured ? '1 / -1' : undefined,
    opacity: item.status ? 0.82 : 1,
  };
  return (
    <Tag
      href={item.href}
      className={`rv d${Math.min(delay, 4)}`}
      style={base}
      onMouseEnter={(e) => { if (!item.href) return; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = CARD_SHADOW_HOVER; }}
      onMouseLeave={(e) => { if (!item.href) return; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = CARD_SHADOW; }}
    >
      {item.logo && (
        <span style={{ display: 'flex', alignItems: 'center', height: 30, marginBottom: 2, opacity: item.status ? 0.5 : 1, filter: item.status ? 'grayscale(1)' : 'none' }}>
          <img src={item.logo} alt="" loading="lazy" style={{ maxHeight: 28, maxWidth: 110, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, color: INK, margin: 0, letterSpacing: '-0.01em',
          fontSize: item.featured ? 'clamp(24px, 2.6vw, 30px)' : 'clamp(19px, 2vw, 23px)',
        }}>{item.name}</h3>
        {item.status ? (
          <span style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: MUTED, background: 'rgba(43,42,38,0.06)', padding: '5px 10px', borderRadius: 100, whiteSpace: 'nowrap',
          }}>{item.status}</span>
        ) : item.featured ? (
          <span style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: GREEN_DARK, background: 'rgba(63,122,52,0.08)', padding: '5px 10px', borderRadius: 100, whiteSpace: 'nowrap',
          }}>Enterprise ready</span>
        ) : item.href ? <Arrow /> : null}
      </div>
      <p style={{
        fontSize: item.featured ? 15 : 13.5, color: MUTED, lineHeight: 1.62, margin: 0,
        maxWidth: item.featured ? 720 : undefined,
      }}>{item.blurb}</p>
      {item.href && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: GREEN_DARK, marginTop: 'auto', paddingTop: 4 }}>
          {item.linkLabel ?? 'Learn more'} <Arrow color={GREEN_DARK} />
        </span>
      )}
    </Tag>
  );
}

export default function IntegrationsDirectory() {
  useReveal();
  useSeo({
    title: 'Integrations — Every System Carelu Connects To',
    description:
      'All of Carelu\'s integrations in one place: Salesforce, HubSpot, Zoho, monday.com, ClickUp, GoHighLevel, CentralReach, Rethink, Aloha ABA, Chorus, pVerify, Google Calendar, Gmail, Meta Ads, Google Ads, webhooks, and more. Complete intake records delivered into your system of record.',
    canonical: '/integrations',
  });

  const total = integrationCatalog.reduce((n, g) => n + g.items.filter((i) => !i.status).length, 0);

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(150px, 18vw, 210px)', paddingBottom: 'clamp(28px, 4vw, 46px)', textAlign: 'center' }}>
        <div style={W}>
          <div className="rv">
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: INK, background: '#fff', padding: '10px 20px', borderRadius: 100,
              border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
            }}>Integrations</span>
          </div>
          <h1 className="rv-scale d1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(34px, 4.8vw, 64px)', fontWeight: 400,
            color: INK, lineHeight: 1.08, letterSpacing: '-0.02em', margin: '26px auto 0', maxWidth: 860,
          }}>
            Carelu plays well with your stack.
          </h1>
          <p className="rv d2" style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(43,42,38,0.68)',
            lineHeight: 1.65, maxWidth: 640, margin: '22px auto 0',
          }}>
            Keep the platforms your practice runs on. Carelu answers, qualifies, and admits families
            in front of them, then delivers every complete, verified record into your system of record.
          </p>

          {/* Jump links */}
          <nav aria-label="Integration categories" className="rv d3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, margin: '30px auto 0', maxWidth: 820 }}>
            {integrationCatalog.map((g) => (
              <a key={g.id} href={`#${g.id}`} style={{
                fontSize: 12.5, fontWeight: 600, color: INK, textDecoration: 'none',
                background: '#fff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 100, padding: '8px 14px',
                transition: 'background 0.15s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(63,122,52,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; }}
              >{g.title}</a>
            ))}
          </nav>
        </div>
      </section>

      {/* Principles */}
      <section style={{ paddingBottom: 'clamp(40px, 5vw, 64px)' }}>
        <div style={W}>
          <div className="dir-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={p.t} className={`rv d${i + 1}`} style={{
                background: 'rgba(63,122,52,0.05)', border: '1px solid rgba(63,122,52,0.16)',
                borderRadius: 18, padding: 'clamp(20px, 2.6vw, 26px)',
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 6 }}>{p.t}</div>
                <p style={{ fontSize: 13.5, color: MUTED, lineHeight: 1.6, margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
          <p className="rv" style={{ fontSize: 13, color: 'rgba(43,42,38,0.5)', margin: '18px 0 0', textAlign: 'center' }}>
            {total} live connections across {integrationCatalog.length} categories.
          </p>
        </div>
      </section>

      {/* Catalog */}
      {integrationCatalog.map((g) => (
        <section key={g.id} id={g.id} style={{ paddingBottom: 'clamp(40px, 5vw, 64px)', scrollMarginTop: 110 }}>
          <div style={W}>
            <div className="rv" style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GREEN, marginBottom: 8 }}>{g.title}</div>
              <p style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'rgba(43,42,38,0.72)', lineHeight: 1.6, margin: 0, maxWidth: 680 }}>{g.lead}</p>
            </div>
            <div className="dir-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {g.items.map((item, i) => <Card key={item.name} item={item} delay={i + 1} />)}
            </div>
          </div>
        </section>
      ))}

      {/* Not listed */}
      <section style={{ paddingBottom: 'clamp(30px, 4vw, 48px)' }}>
        <div style={W}>
          <div className="rv" style={{
            background: 'rgba(63,122,52,0.05)', border: '1px dashed rgba(63,122,52,0.35)',
            borderRadius: 16, padding: 'clamp(18px, 2.4vw, 26px)',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>Don't see your system?</div>
            <p style={{ fontSize: 13.5, color: 'rgba(43,42,38,0.65)', lineHeight: 1.6, margin: 0 }}>
              Anything that accepts a webhook works today, and enterprise plans include custom integrations built
              and maintained by Carelu.{' '}
              <a href="/demo" style={{ color: GREEN_DARK, fontWeight: 600 }}>Ask us about yours</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 130px)', textAlign: 'center' }}>
        <div style={W}>
          <a href="/demo" className="rv" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
            padding: '16px 32px', borderRadius: 100, textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(0,0,0,0.18)', transition: 'transform 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get a Demo
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @media (max-width: 900px) { .dir-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 580px) { .dir-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
