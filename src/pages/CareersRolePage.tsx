import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';

/* ================================================================
   CARELU — CAREERS / SOLUTIONS ENGINEER (role detail; /careers lists it)
   Same template as the Solutions pages: bone surfaces, ink text,
   lime accent, white cards, shared Nav + SiteFooter.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const LIME = '#D4F25C';

const W: React.CSSProperties = { maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };
const MEASURE: React.CSSProperties = { maxWidth: 760, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

const APPLY_HREF = 'mailto:careers@carelu.com?subject=Solutions%20Engineer%20at%20Carelu';

const CARD: React.CSSProperties = {
  background: '#fff', borderRadius: 22,
  padding: 'clamp(28px, 3.2vw, 40px)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
};

const FACTS = [
  { k: 'Location', v: 'New York City, in office' },
  { k: 'Salary', v: '$120K – $160K' },
  { k: 'Equity', v: '0.1% – 0.3%' },
  { k: 'Team', v: 'Solutions' },
];

const DAY_TO_DAY = [
  { title: 'Meet customers all day', desc: 'You run kickoffs and working sessions with the people who run ABA and behavioral health front offices: CEOs, intake directors, coordinators. You sit with them until you understand exactly how a family gets from first call to first session.' },
  { title: 'Turn workflows into software', desc: 'You take a clinic’s intake packet, payer rules, state requirements and routing, and build them into Carelu: forms, flows, phone agents, follow-ups and handoffs that do the work their team does by hand today.' },
  { title: 'Wire into their stack', desc: 'Salesforce, HubSpot, Zoho, monday.com, GoHighLevel, RingCentral, fax lines, EHRs. You connect Carelu to what they already run so every lead and document lands in the right place.' },
  { title: 'Get them live, then make them faster', desc: 'You own the path from signed contract to go-live, test every flow with the customer, and keep tuning once it is running, so families get into care faster and the clinic grows without adding headcount.' },
];

const YOU = [
  'You want to hit the ground running. You would rather ship something for a customer this week than plan it for next quarter.',
  'You are comfortable in front of customers and you earn their confidence by understanding their business better than they expect.',
  'You are technical enough to build. You can read an API doc, map data between systems, write a prompt that holds up on a live call, and debug what breaks.',
  'You like autonomy. You will own accounts end to end, with a small, very talented team behind you.',
  'Bonus: you have worked in go-to-market, solutions, implementation or forward-deployed roles, or around healthcare operations.',
];

export default function CareersRolePage() {
  useReveal();
  useSeo({
    title: 'Solutions Engineer — Careers at Carelu, New York',
    description: 'Join Carelu in New York City. We are bringing AI to the behavioral healthcare front office. Hiring a Solutions Engineer: $120K–$160K, 0.1%–0.3% equity, in office.',
    canonical: '/careers/solutions-engineer',
    image: '/og-careers.jpg',
    imageAlt: 'The Carelu team. We are hiring in New York.',
  });

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(150px, 18vw, 220px)', paddingBottom: 'clamp(40px, 6vw, 72px)', textAlign: 'center' }}>
        <div style={W}>
          <div className="rv">
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: INK, background: '#fff',
              padding: '10px 20px', borderRadius: 100,
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
            }}>Solutions · New York City</span>
          </div>
          <h1 className="rv-scale d1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 5.6vw, 76px)',
            fontWeight: 400, color: INK, lineHeight: 1.06,
            letterSpacing: '-0.025em', margin: '26px auto 0', maxWidth: 860,
          }}>
            Solutions Engineer
          </h1>
          <p className="rv d2" style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)', color: 'rgba(43,42,38,0.68)',
            lineHeight: 1.65, maxWidth: 620, margin: '24px auto 0',
          }}>
            Bring AI to the front office of behavioral healthcare. Forward-deployed, customer-facing and technical, with tons of autonomy.
          </p>
          <div className="rv d3" style={{ marginTop: 36 }}>
            <a href={APPLY_HREF} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
              padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.3s',
              boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Apply
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Role */}
      <section id="solutions-engineer" style={{ paddingTop: 'clamp(24px, 3vw, 40px)', paddingBottom: 'clamp(48px, 6vw, 80px)', scrollMarginTop: 80 }}>
        <div style={W}>
          <div className="rv" style={{ ...CARD, padding: 'clamp(32px, 4vw, 56px)' }}>
            <a href="/careers#openings" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(43,42,38,0.55)', textDecoration: 'none' }}>← All openings</a>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.6vw, 48px)',
              fontWeight: 400, color: INK, lineHeight: 1.1,
              letterSpacing: '-0.02em', margin: '12px 0 0',
            }}>The role</h2>
            <p style={{ fontSize: 'clamp(15px, 1.4vw, 17px)', color: 'rgba(43,42,38,0.68)', lineHeight: 1.65, margin: '14px 0 0', maxWidth: 680 }}>
              Forward-deployed. You will join our Solutions team, bringing world-class go-to-market workflows and expertise to providers so they can deliver care faster. High impact, tons of autonomy.
            </p>
            <div className="careers-facts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 28 }}>
              {FACTS.map(f => (
                <div key={f.k} style={{ background: BONE, borderRadius: 14, padding: '16px 18px' }}>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(43,42,38,0.5)' }}>{f.k}</span>
                  <span style={{ display: 'block', fontSize: 16, fontWeight: 500, color: INK, marginTop: 6 }}>{f.v}</span>
                </div>
              ))}
            </div>
            <a href={APPLY_HREF} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28,
              fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
              padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(0,0,0,0.18)', transition: 'transform 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Apply
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* What you'll do */}
      <section style={{ paddingBottom: 'clamp(48px, 6vw, 80px)' }}>
        <div style={W}>
          <h2 className="rv" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.2vw, 40px)',
            fontWeight: 400, color: INK, letterSpacing: '-0.02em', margin: '0 0 24px', textAlign: 'center',
          }}>What you’ll do</h2>
          <div className="sol-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {DAY_TO_DAY.map((f, i) => (
              <div key={f.title} className={`rv d${Math.min(i + 1, 5)}`} style={CARD}>
                <span style={{
                  display: 'inline-flex', width: 10, height: 10, borderRadius: '50%',
                  background: LIME, border: `1.5px solid ${INK}`, marginBottom: 18,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.1vw, 27px)',
                  fontWeight: 400, color: INK, lineHeight: 1.2,
                  letterSpacing: '-0.5px', margin: '0 0 10px',
                }}>{f.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(43,42,38,0.62)', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who you are */}
      <section style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div style={MEASURE}>
          <h2 className="rv" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.2vw, 40px)',
            fontWeight: 400, color: INK, letterSpacing: '-0.02em', margin: '0 0 24px', textAlign: 'center',
          }}>Who you are</h2>
          <ul className="rv d1" style={{ ...CARD, listStyle: 'none', margin: 0 }}>
            {YOU.map((y, i) => (
              <li key={i} style={{
                display: 'flex', gap: 14, alignItems: 'flex-start',
                fontSize: 15, color: 'rgba(43,42,38,0.72)', lineHeight: 1.65,
                padding: '12px 0', borderTop: i ? '1px solid rgba(43,42,38,0.06)' : 'none',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 5 }}><path d="M4 12l5 5L20 6" /></svg>
                {y}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ paddingBottom: 'clamp(80px, 10vw, 140px)', textAlign: 'center' }}>
        <div style={W}>
          <p className="rv" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.6vw, 44px)',
            fontWeight: 400, color: INK, lineHeight: 1.15,
            letterSpacing: '-0.02em', margin: '0 0 12px',
          }}>
            Interested? Come say hi.
          </p>
          <p className="rv d1" style={{ fontSize: 15, color: 'rgba(43,42,38,0.62)', margin: '0 0 28px' }}>
            Send a note with your LinkedIn or resume and something you have built.
          </p>
          <a href={APPLY_HREF} className="rv d2" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
            padding: '16px 32px', borderRadius: 100, textDecoration: 'none',
            boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Apply
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @media (max-width: 768px) {
          .sol-grid { grid-template-columns: 1fr !important; }
          .careers-facts { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
