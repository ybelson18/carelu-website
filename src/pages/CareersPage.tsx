import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';

/* ================================================================
   CARELU — CAREERS
   Hero with highlighted headline + team photo → "do your best work"
   split → values rows on ink → open positions by team → where we
   work → learn-more card. Each opening links to its own role page.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const LIME = '#D4F25C';

const W: React.CSSProperties = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };
const NARROW: React.CSSProperties = { maxWidth: 880, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

const DISPLAY: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontWeight: 400, color: INK,
  letterSpacing: '-0.025em', margin: 0,
};

const VALUES = [
  { h: 'Go deep, not wide.', p: 'We focus on behavioral health so we understand intake well enough to replace the work that wastes people’s time, not paper over it.' },
  { h: 'No family slips away.', p: 'We chase every diagnosis, document and signature, and follow up until the intake is complete.' },
  { h: 'Hit the ground running.', p: 'We ship for customers this week, not next quarter. Everyone owns real accounts and real outcomes from day one.' },
  { h: 'Earn their confidence.', p: 'We sit with the people who run front offices until we know their business better than they expect. Trust is the product.' },
];

const OPENINGS = [
  {
    team: 'Solutions',
    roles: [
      { title: 'Solutions Engineer', where: 'New York City · In office', href: '/careers/solutions-engineer' },
    ],
  },
];

// Lime highlighter behind a phrase, with the two corner dots.
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ position: 'relative', display: 'inline-block', background: LIME, padding: '0 0.14em', margin: '0 0.04em', lineHeight: 1.08 }}>
      {children}
      <span aria-hidden style={{ position: 'absolute', right: -5, top: -5, width: 9, height: 9, borderRadius: '50%', background: LIME }} />
      <span aria-hidden style={{ position: 'absolute', left: -5, bottom: -5, width: 9, height: 9, borderRadius: '50%', background: LIME }} />
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: 20,
      background: LIME, color: INK, padding: '1px 10px', borderRadius: 4,
    }}>{children}</span>
  );
}

function DarkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
      padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
      boxShadow: '0 8px 28px rgba(0,0,0,0.18)', transition: 'transform 0.2s',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >{children}</a>
  );
}

// Line drawing of the Empire State Building for the New York card.
function EmpireState() {
  return (
    <svg width="64" height="120" viewBox="0 0 64 120" fill="none" stroke={INK} strokeWidth="1.3" aria-hidden>
      <path d="M32 2v14" />
      <path d="M29 16h6v8h-6z" />
      <path d="M26 24h12v10H26z" />
      <path d="M22 34h20v14H22z" />
      <path d="M18 48h28v18H18z" />
      <path d="M12 66h40v52H12z" />
      <path d="M4 82h8v36H4zM52 82h8v36h-8z" />
      {[38, 42].map(y => <path key={y} d={`M26 ${y}h12`} />)}
      {[54, 60].map(y => <path key={y} d={`M22 ${y}h20`} />)}
      {[74, 82, 90, 98, 106].map(y => <path key={y} d={`M16 ${y}h32`} />)}
      {[22, 32, 42].map(x => <path key={x} d={`M${x} 66v52`} />)}
    </svg>
  );
}

export default function CareersPage() {
  useReveal();
  useSeo({
    title: 'Careers at Carelu — Build the front office of healthcare',
    description: 'Join Carelu in New York City. We are bringing AI to the front office of behavioral healthcare. See open roles, including Solutions Engineer.',
    canonical: '/careers',
  });

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(140px, 16vw, 200px)', paddingBottom: 'clamp(48px, 6vw, 80px)', textAlign: 'center' }}>
        <div style={W}>
          <p className="rv" style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'rgba(43,42,38,0.7)', margin: 0 }}>Careers</p>
          <h1 className="rv-scale d1" style={{ ...DISPLAY, fontSize: 'clamp(40px, 6.2vw, 84px)', lineHeight: 1.1, margin: '22px auto 0', maxWidth: 1000 }}>
            Build <Mark>the front office</Mark> of healthcare.
          </h1>
          <div className="rv d2" style={{ marginTop: 36 }}>
            <DarkButton href="#openings">Check openings</DarkButton>
          </div>
          <div className="rv d3" style={{
            marginTop: 'clamp(48px, 6vw, 72px)', borderRadius: 22, overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(0,0,0,0.10)',
          }}>
            <img src="/team-photo.jpg" alt="The Carelu team" style={{
              display: 'block', width: '100%', height: 'clamp(280px, 42vw, 560px)', objectFit: 'cover', objectPosition: '50% 30%',
            }} />
          </div>
        </div>
      </section>

      {/* Do your best work */}
      <section style={{ paddingTop: 'clamp(40px, 6vw, 80px)', paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <div style={W}>
          <div className="careers-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 6vw, 96px)', alignItems: 'start' }}>
            <h2 className="rv" style={{ ...DISPLAY, fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: 1.12 }}>
              Do your<br /><Mark>best work.</Mark>
            </h2>
            <div className="rv d1">
              <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(43,42,38,0.72)', lineHeight: 1.7, margin: 0 }}>
                Carelu runs intake for some of the largest ABA and behavioral health providers in the country. When a family reaches out, we answer, qualify, collect the paperwork and get them to a first session, so they get into care faster and clinics grow without adding headcount.
              </p>
              <p style={{ fontSize: 'clamp(16px, 1.4vw, 18px)', color: 'rgba(43,42,38,0.72)', lineHeight: 1.7, margin: '20px 0 0' }}>
                We have signed more new business in the last 60 days than in the previous eight months combined, and our New York team is growing fast. We are looking for people who want real ownership, ship quickly and care about the families on the other end.
              </p>
              <div style={{ marginTop: 32 }}>
                <DarkButton href="#openings">Check openings</DarkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '0 clamp(12px, 2vw, 24px)' }}>
        <div style={{ background: INK, borderRadius: 24, padding: 'clamp(56px, 7vw, 100px) 0' }}>
          <div style={W}>
            <div className="rv"><Tag>Values</Tag></div>
            <h2 className="rv d1" style={{ ...DISPLAY, color: BONE, fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.1, margin: '18px 0 clamp(36px, 5vw, 56px)' }}>
              Families first, always.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {VALUES.map((v, i) => (
                <div key={v.h} className={`rv d${Math.min(i + 1, 5)} careers-value`} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center',
                  background: '#F1EFE8', borderRadius: 14, padding: 'clamp(24px, 3vw, 40px)',
                  marginTop: i ? 2 : 0,
                }}>
                  <h3 style={{ ...DISPLAY, fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.2 }}>{v.h}</h3>
                  <p style={{ fontSize: 16, color: 'rgba(43,42,38,0.78)', lineHeight: 1.6, margin: 0 }}>{v.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="openings" style={{ paddingTop: 'clamp(80px, 10vw, 140px)', paddingBottom: 'clamp(80px, 10vw, 140px)', scrollMarginTop: 60 }}>
        <div style={NARROW}>
          <div style={{ textAlign: 'center' }}>
            <div className="rv"><Tag>Open positions</Tag></div>
            <h2 className="rv d1" style={{ ...DISPLAY, fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.1, margin: '18px 0 clamp(40px, 5vw, 64px)' }}>
              Land your dream job.
            </h2>
          </div>
          {OPENINGS.map(g => (
            <div key={g.team} className="rv d2" style={{ marginBottom: 40 }}>
              <h3 style={{ ...DISPLAY, fontSize: 'clamp(26px, 2.6vw, 34px)', margin: '0 0 18px' }}>{g.team}</h3>
              {g.roles.map((r, i) => (
                <a key={r.title} href={r.href} className="careers-role" style={{
                  display: 'grid', gridTemplateColumns: '1fr 220px 24px', alignItems: 'center', gap: 16,
                  background: '#fff', border: '1px solid rgba(43,42,38,0.10)', borderRadius: 10,
                  padding: '24px 28px', marginTop: i ? -1 : 0, textDecoration: 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = INK; e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(43,42,38,0.10)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <span style={{ fontSize: 18, fontWeight: 500, color: INK }}>{r.title}</span>
                  <span style={{ fontSize: 15, color: 'rgba(43,42,38,0.6)' }}>{r.where}</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
                </a>
              ))}
            </div>
          ))}
          <p className="rv" style={{ fontSize: 15, color: 'rgba(43,42,38,0.6)', textAlign: 'center', margin: '8px 0 0' }}>
            Don’t see your role? Write to <a href="mailto:careers@carelu.com" style={{ color: INK }}>careers@carelu.com</a>.
          </p>
        </div>
      </section>

      {/* Where we work */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <div style={W}>
          <h2 className="rv" style={{ ...DISPLAY, fontSize: 'clamp(36px, 4.6vw, 60px)', lineHeight: 1.1, textAlign: 'center', margin: '0 0 clamp(40px, 5vw, 64px)' }}>
            Behind the scenes<br />
            <span style={{ paddingLeft: '2.2em' }}>— where we work.</span>
          </h2>
          <div className="rv d1 careers-city" style={{
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(28px, 4vw, 56px)', alignItems: 'end',
            background: '#E9F5B8', borderRadius: 18, padding: 'clamp(32px, 4vw, 56px)', maxWidth: 880, margin: '0 auto',
          }}>
            <EmpireState />
            <div>
              <h3 style={{ ...DISPLAY, fontSize: 'clamp(26px, 2.6vw, 34px)', margin: '0 0 12px' }}>New York</h3>
              <p style={{ fontSize: 17, color: 'rgba(43,42,38,0.8)', lineHeight: 1.65, margin: 0 }}>
                Our team works together in person in New York City. Most of what we build starts as a conversation with a customer, so we keep the people who talk to providers and the people who build for them in the same room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn more */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 140px)' }}>
        <div style={W}>
          <div className="rv careers-more" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
            background: '#fff', borderRadius: 22, padding: 'clamp(36px, 5vw, 64px) clamp(28px, 5vw, 80px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
          }}>
            <h2 style={{ ...DISPLAY, fontSize: 'clamp(30px, 3.8vw, 50px)', lineHeight: 1.1 }}>Curious? Learn more about Carelu.</h2>
            <DarkButton href="/carelu/company">Our company</DarkButton>
          </div>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @media (max-width: 768px) {
          .careers-split, .careers-value { grid-template-columns: 1fr !important; }
          .careers-value { gap: 10px !important; }
          .careers-role { grid-template-columns: 1fr 24px !important; }
          .careers-role > span:nth-child(2) { grid-column: 1; grid-row: 2; font-size: 14px !important; }
          .careers-role > svg { grid-column: 2; grid-row: 1 / span 2; }
          .careers-city { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
