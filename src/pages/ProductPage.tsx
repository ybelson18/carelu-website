import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';

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

function Dot() {
  return <span style={{ display: 'inline-flex', width: 10, height: 10, borderRadius: '50%', background: LIME, border: `1.5px solid ${INK}`, flex: 'none' }} />;
}

const BREAKS = [
  { t: 'Forms lose families before intake starts', d: 'Ask too much and fewer families fill it out. Ask too little and you’re sorting spam and families you can’t serve.' },
  { t: 'You’re always playing defense', d: 'A parent reaches out ready to start, then waits for a callback. Your team has to catch them, then catch them again for the packet, the diagnosis and the insurance card.' },
  { t: 'Intake takes weeks, or leaks', d: 'Every handoff is a chance to lose a family to whichever provider got them through intake first.' },
  { t: 'Nobody can see where anyone is', d: 'Who asked for an evaluation? Who’s missing a diagnosis? Who stopped on page four? It’s spread across a CRM, an inbox and someone’s notes.' },
];

const STEPS = [
  { t: 'They reach out', d: 'Through your website form, chat, phone, or a Facebook or Instagram ad. Any hour, any day.' },
  { t: 'They get an answer', d: 'ZIP, age, insurance and diagnosis are checked against your rules for their state, instantly.' },
  { t: 'They start intake', d: 'Your releases, documents and behavioral questions, one tap at a time on a phone. English or Spanish.' },
  { t: 'Benefits are verified', d: 'In the background, often before you’d ever ask for an insurance card.' },
  { t: 'Nothing is left hanging', d: 'If they stop halfway, a follow-up brings them back to the exact step they left.' },
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

/* A small phone mock of the moment that matters: the instant verdict. */
function VerdictPhone() {
  const row: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid #EDE8DC', fontSize: 13 };
  return (
    <div style={{ width: 'min(300px, 100%)', borderRadius: 38, background: FOREST, padding: 12, boxShadow: '0 24px 60px rgba(26,46,31,0.22)' }}>
      <div style={{ background: '#fff', borderRadius: 28, padding: '20px 18px 22px', color: TEXT }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#8C8674', marginBottom: 10 }}>
          <span>intake.yourclinic.com</span><span>Step 2 of 6</span>
        </div>
        <div style={{ height: 5, background: '#EDE8DC', borderRadius: 3, marginBottom: 16 }}>
          <div style={{ width: '38%', height: '100%', background: LEAF, borderRadius: 3 }} />
        </div>
        <div style={{ background: '#F0F5EE', border: '1px solid #D4E4CF', borderRadius: 18, padding: 16, textAlign: 'center' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: LEAF, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6" /></svg>
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: INK, lineHeight: 1.15 }}>You’re pre-approved for care</div>
          <div style={{ fontSize: 12.5, color: '#8C8674', marginTop: 6 }}>Take two minutes now and save two weeks.</div>
        </div>
        <div style={{ marginTop: 10 }}>
          <div style={row}><span>Service area</span><span style={{ color: LEAF, fontWeight: 600 }}>Covered</span></div>
          <div style={row}><span>Insurance</span><span style={{ color: LEAF, fontWeight: 600 }}>In network</span></div>
          <div style={row}><span>Benefits check</span><span style={{ color: LEAF, fontWeight: 600 }}>Running</span></div>
        </div>
        <div style={{ marginTop: 16, background: FOREST, color: BONE, textAlign: 'center', borderRadius: 100, padding: 11, fontSize: 14, fontWeight: 600 }}>Continue my intake</div>
      </div>
    </div>
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
      <section style={{ paddingTop: 'clamp(140px, 16vw, 200px)' }}>
        <div style={W}>
          <div className="pp-hero" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center' }}>
            <div>
              <div className="rv"><Eyebrow>The Carelu platform</Eyebrow></div>
              <h1 className="rv-scale d1" style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5.8vw, 78px)',
                fontWeight: 400, color: INK, lineHeight: 1.04, letterSpacing: '-0.025em', margin: 0,
              }}>
                Every family answered. <em style={{ color: LEAF }}>Every intake finished.</em>
              </h1>
              <p className="rv d2" style={{ fontSize: 'clamp(16px, 1.5vw, 19px)', color: MUTED, lineHeight: 1.65, maxWidth: 560, margin: '24px 0 0' }}>
                Carelu runs your intake from the first message to a complete, benefits-verified intake packet. Families get an answer the moment they reach out. Your team spends its time with families who are ready to start.
              </p>
              <div className="rv d3" style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}>
                <DemoButton />
                <a href="#how-it-works" style={{
                  display: 'inline-flex', alignItems: 'center', fontSize: 15, fontWeight: 600, color: INK,
                  padding: '14px 26px', borderRadius: 100, textDecoration: 'none',
                  border: '1.5px solid rgba(43,42,38,0.25)',
                }}>See how it works</a>
              </div>
            </div>
            <div className="rv d2 pp-phone" style={{ display: 'flex', justifyContent: 'center' }}><VerdictPhone /></div>
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

      {/* How it works */}
      <section id="how-it-works" style={{ ...SECTION, scrollMarginTop: 80 }}>
        <div style={W}>
          <div className="rv" style={{ maxWidth: 720 }}>
            <Eyebrow>How it works</Eyebrow>
            <h2 style={H2}>From first message to intake complete</h2>
            <p style={{ ...BODY, fontSize: 17, marginTop: 18 }}>Carelu answers both of the family’s questions on the spot, then walks them through your intake while they’re still ready.</p>
          </div>
          <ol className="pp-steps" style={{ listStyle: 'none', padding: 0, margin: '44px 0 0', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18 }}>
            {STEPS.map((s, i) => (
              <li key={s.t} className={`rv d${Math.min(i + 1, 5)}`} style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: FOREST, color: BONE, fontSize: 13, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{i + 1}</span>
                  <span style={{ height: 1.5, background: '#D4E4CF', flex: 1, opacity: i === STEPS.length - 1 ? 0 : 1 }} />
                </div>
                <h3 style={{ ...H3, fontSize: 21 }}>{s.t}</h3>
                <p style={{ ...BODY, fontSize: 14.5 }}>{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="pp-grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginTop: 44 }}>
            <div className="rv" style={CARD}>
              <h3 style={H3}>The verdict, in seconds</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '6px 0 14px' }}>
                {[['Pre-approved', LEAF], ['Case by case', '#C9A227'], ['Outside your area', '#B5533C']].map(([l, c]) => (
                  <span key={l} style={{ fontSize: 13, border: '1px solid #EDE8DC', borderRadius: 100, padding: '4px 12px', display: 'inline-flex', alignItems: 'center', gap: 7, background: BONE }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />{l}
                  </span>
                ))}
              </div>
              <p style={BODY}>Families you can serve go straight into intake. Families you can’t are sorted out with a reason, so your team never spends a call on them.</p>
              <h3 style={{ ...H3, marginTop: 22 }}>Built from your paperwork</h3>
              <p style={BODY}>Your consents, releases and clinical questionnaire, state by state. Signed once, filed separately, and assembled into one intake packet.</p>
            </div>
            <div className="rv d2" style={{ ...CARD, background: '#F0F5EE', boxShadow: 'none', border: '1px solid #D4E4CF' }}>
              <h3 style={H3}>What your team sees</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0', display: 'grid', gap: 12 }}>
                {[
                  'Every family in one list, with their stage, owner and exactly what’s still missing',
                  'An AI summary, every answer, documents and benefits on one page',
                  'Edit answers while you’re on the phone, then send a pre-filled link for the rest',
                  'Faxes and phone referrals added in seconds',
                  'A complete intake packet the moment the family finishes, in your CRM too',
                ].map(t => (
                  <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.55, color: TEXT }}>
                    <span style={{ marginTop: 7 }}><Dot /></span>{t}
                  </li>
                ))}
              </ul>
            </div>
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
