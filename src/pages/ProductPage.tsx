import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav, ChannelsHub, ChecklistVisual, HandoffVisual, ProductPeek } from './Landing';
import SiteFooter from '../components/SiteFooter';
import ChannelHub from '../components/product/ChannelHub';
import SpeedTimeline from '../components/product/SpeedTimeline';
import JourneyStepper, { type JourneyStep } from '../components/product/JourneyStepper';
import { VerdictVisual, ConsentVisual, FollowUpVisual } from '../components/product/JourneyVisuals';

/* ================================================================
   CARELU — PRODUCT
   One page that explains exactly what Carelu does and how it works.
   Same brand system as the landing and solutions pages: bone
   surfaces, ink text, lime accent, EB Garamond display serif.
   ================================================================ */

const INK = '#1A1A1A';
const TEXT = '#2B2A26';
const MUTED = 'rgba(43,42,38,0.62)';
const BONE = '#FAF8F3';
const LIME = '#D4F25C';
const FOREST = '#2C3E2D';
const LEAF = '#3F7A34';

const W: React.CSSProperties = { maxWidth: 1100, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };
const CARD: React.CSSProperties = {
  background: '#fff', borderRadius: 22,
  padding: 'clamp(24px, 3vw, 36px)',
  boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
};
const H2: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 54px)',
  fontWeight: 400, color: INK, lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0,
};
const H3: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 'clamp(21px, 2vw, 26px)',
  fontWeight: 400, color: INK, lineHeight: 1.2, letterSpacing: '-0.4px', margin: '0 0 8px',
};
const BODY: React.CSSProperties = { fontSize: 15, color: MUTED, lineHeight: 1.65, margin: 0 };
const SECTION: React.CSSProperties = { paddingTop: 'clamp(64px, 9vw, 120px)' };

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <span style={{
      display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
      textTransform: 'uppercase', color: onDark ? LIME : LEAF, marginBottom: 16,
    }}>{children}</span>
  );
}


const BREAKS = [
  { t: 'Forms lose families before intake starts', d: 'Ask too much and fewer families fill it out. Ask too little and you’re sorting spam and families you can’t serve.' },
  { t: 'You’re always playing defense', d: 'A parent reaches out ready to start, then waits for a callback. Your team has to catch them, then catch them again for the packet, the diagnosis and the insurance card.' },
  { t: 'Intake takes weeks, or leaks', d: 'Every handoff is a chance to lose a family to whichever provider got them through intake first.' },
  { t: 'Nobody can see where anyone is', d: 'Who asked for an evaluation? Who’s missing a diagnosis? Who stopped on page four? It’s spread across a CRM, an inbox and someone’s notes.' },
];


const JOURNEY: JourneyStep[] = [
  { who: 'Family', title: 'It starts with the first touch', body: 'A parent reaches out at 9pm on a Friday. By phone, text, chat, your website form, a Facebook ad or a doctor’s fax. It doesn’t matter which. Carelu is there in seconds.', points: ['Every channel, one front door', 'English and Spanish, any hour'], visual: <ChannelsHub /> },
  { who: 'Carelu', title: 'An answer on the spot', body: 'Carelu checks the family against your rules for their state: location, age, diagnosis and insurance. Families you can serve hear yes right away and keep going.', points: ['Pre-approved, case by case, or outside your area', 'Families you can’t serve are sorted out, with a reason'], visual: <VerdictVisual /> },
  { who: 'Family', title: 'Your intake, on their phone', body: 'Your own consents and releases, personalized for their child. They agree to each one and sign once. Then your clinical questions, tap by tap.', points: ['Built from your packet, state by state', 'Save and pick up at the same step'], visual: <ConsentVisual /> },
  { who: 'Carelu', title: 'Documents and benefits, checked', body: 'Insurance cards and diagnosis reports are read as they arrive, and benefits are verified in the background, often before anyone asks for a card.', points: ['A referral isn’t mistaken for a diagnosis', 'Coverage and costs, reviewed by a specialist'], visual: <ChecklistVisual /> },
  { who: 'Carelu', title: 'Nobody falls through', body: 'If a family stops halfway, Carelu follows up from your coordinator’s own email and number, asks for exactly what’s missing, and links them back to the step they left.', points: ['You approve before anything is sent', 'Phone tasks for your team when a call matters'], visual: <FollowUpVisual /> },
  { who: 'Your team', title: 'A ready case, handed off', body: 'Signed, documented and verified. The complete intake packet lands with your team and in your CRM, ready to schedule the assessment.', visual: <HandoffVisual /> },
  { who: 'Your team', title: 'Watch it do the work', body: 'Every family in your pipeline in real time. Ask anything about your intake in plain English, and see what each channel delivers.', visual: <ProductPeek /> },
];

const MODULES = [
  { k: 'Intake', t: 'Intake forms and website form', d: 'A short form on your site that looks like yours, leading straight into your full intake. Instant verdict, e-signatures, document upload, save and resume, on your own web address.' },
  { k: 'Documents', t: 'Diagnosis and records', d: 'Uploaded documents are read and checked: a referral isn’t mistaken for a diagnosis, and an out-of-date report is flagged. No report? The family looks up their doctor and a release is generated.' },
  { k: 'Benefits', t: 'Verification of benefits', d: 'Coverage, carve-outs and out-of-pocket costs, checked automatically and reviewed by a specialist. Medicaid usually in minutes, commercial plans the same day.' },
  { k: 'Follow-up', t: 'Follow-ups that know each family', d: 'Emails and texts that ask for exactly what’s missing, from your coordinator’s own address and number, with a link back to the exact step. You approve before anything is sent.' },
  { k: 'Phone', t: 'Phone agent and Power Dialer', d: 'An AI phone agent answers after hours and when your team is busy. When a new family comes in, the Power Dialer connects your coordinator to them right away.' },
  { k: 'Website', t: 'AI chat', d: 'Answers families’ questions about ABA and your services, qualifies them, and hands them into the same intake. Plus a careers bot for BCBA and RBT applicants.' },
  { k: 'Team', t: 'Pipeline, tasks and inbox', d: 'Every family’s stage, owner and next step. Routing by state, language or lead source. Email and text in one inbox, with every conversation on the family’s record.' },
  { k: 'Growth', t: 'Playbooks and Reporting', d: '“We now take Cigna in Georgia”: reach every family you turned away for it, in one step. Ask Reporting anything in plain English, down to cost per completed intake by channel.' },
];

const CHANNELS = [
  { c: 'SEO and Google Ads', without: 'Families land on your website at night or on the weekend, fill out a form, and wait days for a callback.', with: 'They get their answer and start intake in the same visit. Nobody to catch.' },
  { c: 'Facebook and Instagram', without: 'A parent fills out a lead form while scrolling and moves on before anyone calls.', with: 'Our Meta integration brings them in the moment they submit, and we reach them right away.' },
  { c: 'Phone', without: 'After-hours calls go to voicemail. Details from calls live in someone’s notes.', with: 'Our phone agent answers after hours. Calls fill in the family’s intake, and follow-ups chase the rest.' },
  { c: 'Referrals', without: 'Doctors send families by fax and rarely hear what happened.', with: 'Coming soon: referrals land automatically, and referring doctors hear back when a family qualifies and finishes intake.' },
];

const INTEGRATIONS = ['Salesforce', 'HubSpot', 'Zoho', 'GoHighLevel', 'Monday', 'ClickUp', 'Chorus', 'CallRail', 'CTM', 'Meta lead ads', 'Google Ads', 'Gmail', 'Outlook', 'Webhooks'];

const CUSTOM = [
  'Rules per state: ZIPs, ages, insurers, diagnosis',
  'In home, in clinic, or both',
  'Your questions, your releases, your order',
  'Your branding, on your own web address',
  'Routing by state, language or lead source',
  'Follow-up wording, timing and sender',
  'Stage names that match your CRM',
  'English and Spanish',
];

const ROLLOUT = [
  { w: 'Week 1', d: 'We build your intake from your packet, your rules and your CRM.' },
  { w: 'Kickoff', d: 'We walk your intake team through it, state by state.' },
  { w: 'Go live', d: 'Our form goes on your site and families start flowing in.' },
  { w: 'Weeks 2–3', d: 'Follow-ups, texting, the phone agent and Reporting switched on.' },
];

const TRUST = [
  'HIPAA compliant. We sign a Business Associate Agreement.',
  'Your data is yours. We process it on your behalf and delete it on request.',
  'Valid e-signatures on every release and consent.',
  'Our phone agent always tells callers it’s an AI, on a recorded line. Any caller can ask for a person.',
  'Text consent recorded, and STOP always honored.',
];

const NEXT = [
  { t: 'Virtual fax', d: 'Referrals and records filed on the right family automatically.' },
  { t: 'Prior authorizations', d: 'From verified benefits to an approved start.' },
  { t: 'Hiring', d: 'Recruiting BCBAs and RBTs, from early 2027.' },
];

function DemoButton({ label = 'Get a Demo' }: { label?: string }) {
  return (
    <a href="/demo" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontSize: 15, fontWeight: 600, color: BONE, backgroundColor: INK,
      padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
      transition: 'transform 0.2s', boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {label}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
    </a>
  );
}

export default function ProductPage() {
  useReveal();
  useSeo({
    title: 'The Carelu Platform — AI Intake for ABA Providers',
    description: 'Carelu answers every family instantly, qualifies them against your rules, walks them through your intake on their phone, verifies benefits and chases what’s missing — in sync with your CRM.',
    canonical: '/product',
  });

  return (
    <div className="session-light" style={{ background: BONE, color: TEXT, minHeight: '100vh' }}>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Hero */}
      <section style={{ paddingTop: 'clamp(150px, 18vw, 210px)', textAlign: 'center' }}>
        <div style={W}>
          <div className="rv">
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: INK, background: '#fff', padding: '10px 20px', borderRadius: 100,
              border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
            }}>The Carelu platform</span>
          </div>
          <h1 className="rv-scale d1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5.8vw, 78px)',
            fontWeight: 400, color: INK, lineHeight: 1.04, letterSpacing: '-0.025em', margin: '26px auto 0', maxWidth: 860,
          }}>
            Every family answered.<br /><em>Every intake finished.</em>
          </h1>
          <p className="rv d2" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', color: MUTED, lineHeight: 1.65, maxWidth: 620, margin: '24px auto 0' }}>
            Carelu runs your intake from the first message to a complete, benefits-verified intake packet, so your team spends its time with families who are ready to start.
          </p>
          <div className="rv d3" style={{ display: 'inline-flex', gap: 12, marginTop: 34, flexWrap: 'wrap', justifyContent: 'center' }}>
            <DemoButton />
            <a href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', fontSize: 15, fontWeight: 600, color: INK,
              padding: '14px 26px', borderRadius: 100, textDecoration: 'none', border: '1.5px solid rgba(43,42,38,0.25)',
            }}>See how it works</a>
          </div>
        </div>
        <div style={{ ...W, marginTop: 'clamp(48px, 6vw, 80px)' }}>
          <div className="rv-scale d2" style={{
            position: 'relative', borderRadius: 32, overflow: 'hidden',
            padding: 'clamp(40px, 7vw, 96px) clamp(16px, 4vw, 48px)',
            background: `linear-gradient(180deg, rgba(250,248,243,0) 55%, rgba(250,248,243,0.55) 100%), url(/hero-sky-1920.jpg) center 35% / cover no-repeat`,
          }}>
            <HandoffVisual />
          </div>
        </div>
      </section>

      {/* The problem */}
      <section style={SECTION}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 720 }}>
            <Eyebrow>The problem</Eyebrow>
            <h2 style={H2}>Intake isn’t a paperwork problem. It’s a broken process.</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>A family who reaches out wants to know two things: am I qualified, and when can we start? Today, every step between that question and a finished intake is a chance to lose them.</p>
          </div>
          <div className="pp-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 40 }}>
            {BREAKS.map((b, i) => (
              <div key={b.t} className={`rv d${Math.min(i + 1, 5)}`} style={CARD}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: LEAF, lineHeight: 1, marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={H3}>{b.t}</h3>
                <p style={BODY}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Same family, two paths */}
      <section style={{ paddingTop: 'clamp(40px, 5vw, 64px)' }}>
        <div style={W}>
          <div className="rv"><SpeedTimeline /></div>
        </div>
      </section>

      {/* First touch: every channel */}
      <section style={SECTION}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 760 }}>
            <Eyebrow>It all starts with the first touch</Eyebrow>
            <h2 style={H2}>Wherever a family comes in, Carelu is there first</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>Chat, your website form, a phone call, a Facebook ad or a doctor’s referral. It doesn’t matter. Every first touch gets the same instant answer and the same path to a finished intake.</p>
          </div>
          <div className="rv d2" style={{ marginTop: 40 }}><ChannelHub /></div>
        </div>
      </section>

      {/* How it works: the product journey, on real screens */}
      <section id="how-it-works" style={{ ...SECTION, scrollMarginTop: 80 }}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 760 }}>
            <Eyebrow>How it works</Eyebrow>
            <h2 style={H2}>How Carelu does it, step by step</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>Follow one family from the first message to a finished intake, and see what your team sees on the other side.</p>
          </div>
          <div style={{ marginTop: 48 }}>
            <JourneyStepper steps={JOURNEY} />
          </div>
        </div>
      </section>

      {/* Platform */}
      <section id="features" style={{ ...SECTION, scrollMarginTop: 80 }}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 720 }}>
            <Eyebrow>Everything included</Eyebrow>
            <h2 style={H2}>One system for your whole front office</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>Each piece works on its own. Together they take a family from new to intake complete without your team chasing anyone.</p>
          </div>
          <div className="pp-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 40 }}>
            {MODULES.map((m, i) => (
              <div key={m.t} className={`rv d${(i % 4) + 1}`} style={CARD}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: LEAF }}>{m.k}</span>
                <h3 style={{ ...H3, marginTop: 8 }}>{m.t}</h3>
                <p style={BODY}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every channel */}
      <section style={SECTION}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 720 }}>
            <Eyebrow>Speed to lead, everywhere</Eyebrow>
            <h2 style={H2}>First to every family, on every channel</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>Families reach out to more than one provider. The one that gets to them first, while they’re still ready, usually wins. Carelu gets there first.</p>
          </div>
          <div className="rv" style={{ ...CARD, padding: 0, marginTop: 40, overflow: 'hidden' }}>
            <div className="pp-chan pp-chan-head" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.1fr 1.1fr', gap: 24, padding: '16px clamp(20px, 3vw, 32px)', borderBottom: `1.5px solid ${INK}`, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8C8674' }}>
              <span>Channel</span><span>Without Carelu</span><span>With Carelu</span>
            </div>
            {CHANNELS.map((c, i) => (
              <div key={c.c} className="pp-chan" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.1fr 1.1fr', gap: 24, padding: '22px clamp(20px, 3vw, 32px)', borderBottom: i < CHANNELS.length - 1 ? '1px solid #EDE8DC' : 'none', alignItems: 'start' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: INK, lineHeight: 1.2 }}>{c.c}</span>
                <p style={{ ...BODY, fontSize: 14.5 }}><span className="pp-chan-label">Without Carelu: </span>{c.without}</p>
                <p style={{ ...BODY, fontSize: 14.5, color: TEXT }}><span className="pp-chan-label">With Carelu: </span>{c.with}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations and customization */}
      <section style={SECTION}>
        <div style={W}>
          <div className="pp-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            <div className="rv" style={CARD}>
              <Eyebrow>Works with your CRM</Eyebrow>
              <h3 style={{ ...H3, fontSize: 'clamp(26px, 2.6vw, 34px)' }}>Keep the system your team already uses</h3>
              <p style={BODY}>Carelu keeps it up to date with every family, answer, document and stage, from the first message to intake complete.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
                {INTEGRATIONS.map(n => (
                  <span key={n} style={{ fontSize: 13.5, color: INK, background: BONE, border: '1px solid rgba(43,42,38,0.12)', borderRadius: 100, padding: '6px 14px' }}>{n}</span>
                ))}
              </div>
              <a href="/integrations" style={{ display: 'inline-block', marginTop: 22, fontSize: 14, fontWeight: 600, color: INK }}>See all integrations →</a>
            </div>
            <div className="rv d2" style={CARD}>
              <Eyebrow>Built your way</Eyebrow>
              <h3 style={{ ...H3, fontSize: 'clamp(26px, 2.6vw, 34px)' }}>Your intake, not a template</h3>
              <p style={BODY}>We build Carelu around how your practice already works, and change it whenever you do.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '22px 0 0', display: 'grid', gap: 11 }}>
                {CUSTOM.map(t => (
                  <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: TEXT }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={LEAF} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 3, flex: 'none' }}><path d="M4 12l5 5L20 6" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started, trust, what's next */}
      <section style={{ marginTop: 'clamp(64px, 9vw, 120px)', background: FOREST, color: BONE, padding: 'clamp(64px, 9vw, 110px) 0' }}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 720 }}>
            <Eyebrow onDark>Live in weeks, not months</Eyebrow>
            <h2 style={{ ...H2, color: BONE }}>We build it with you</h2>
          </div>
          <div className="pp-grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 40 }}>
            <div className="rv" style={{ border: '1px solid rgba(212,228,207,0.25)', borderRadius: 22, padding: 'clamp(24px, 3vw, 32px)' }}>
              <h3 style={{ ...H3, color: BONE }}>Your rollout</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                {ROLLOUT.map(r => (
                  <li key={r.w} style={{ display: 'grid', gridTemplateColumns: '82px 1fr', gap: 10, padding: '11px 0', borderBottom: '1px solid rgba(212,228,207,0.18)', fontSize: 14.5, lineHeight: 1.5, color: 'rgba(250,248,243,0.85)' }}>
                    <span style={{ color: LIME, fontWeight: 600 }}>{r.w}</span><span>{r.d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rv d2" style={{ border: '1px solid rgba(212,228,207,0.25)', borderRadius: 22, padding: 'clamp(24px, 3vw, 32px)' }}>
              <h3 style={{ ...H3, color: BONE }}>Security and trust</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'grid', gap: 12 }}>
                {TRUST.map(t => (
                  <li key={t} style={{ display: 'flex', gap: 10, fontSize: 14.5, lineHeight: 1.5, color: 'rgba(250,248,243,0.85)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={LIME} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 4, flex: 'none' }}><path d="M4 12l5 5L20 6" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rv d3" style={{ border: '1px solid rgba(212,228,207,0.25)', borderRadius: 22, padding: 'clamp(24px, 3vw, 32px)' }}>
              <h3 style={{ ...H3, color: BONE }}>What’s next</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(250,248,243,0.85)', margin: '12px 0 16px' }}>We’re building toward running your entire front office.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 14 }}>
                {NEXT.map(n => (
                  <li key={n.t} style={{ fontSize: 14.5, lineHeight: 1.5, color: 'rgba(250,248,243,0.85)' }}>
                    <span style={{ display: 'block', color: BONE, fontWeight: 600 }}>{n.t}</span>{n.d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 140px) 0', textAlign: 'center' }}>
        <div style={W}>
          <p className="rv" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 4vw, 52px)',
            fontWeight: 400, color: INK, lineHeight: 1.12, letterSpacing: '-0.02em', margin: '0 auto 30px', maxWidth: 760,
          }}>
            See your own intake running on Carelu.
          </p>
          <div className="rv d2"><DemoButton /></div>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        @media (max-width: 960px) {
          .pp-steps { grid-template-columns: repeat(2, 1fr) !important; }
          .pp-grid3 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .pp-hero, .pp-grid2 { grid-template-columns: 1fr !important; }
          .pp-steps { grid-template-columns: 1fr !important; }
          .pp-chan { grid-template-columns: 1fr !important; gap: 8px !important; }
          .pp-chan-head { display: none !important; }
        }
        .pp-chan-label { display: none; font-weight: 600; color: ${INK}; }
        @media (max-width: 768px) { .pp-chan-label { display: inline; } }
      `}</style>
    </div>
  );
}
