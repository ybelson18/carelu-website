import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { careluRevealed, demoLive } from '../lib/careluReveal';

const accent = '#3a8ab0';

/* Company facts carriers and app reviewers check against the registered brand.
   The legal entity here must stay identical to the one on the Twilio A2P brand
   registration and in the footers of /privacy and /terms. */
const LEGAL_NAME = 'LeadTrap, Inc.';
const CONTACT = {
  email: 'support@leadtrap.com',
  phone: '(323) 990-8727',
  phoneHref: 'tel:+13239908727',
  address: '169 Madison Ave, STE 62431, New York, NY 10016',
};

/* The SMS disclosure next to the consent checkbox. Kept byte-identical to
   SMS_CONSENT_TEXT in api/leads.ts, which stores it with the lead as consent
   evidence, and consistent with the summary in the Text messaging section and
   section 6 of /privacy. Change all four together. */
const SMS_CONSENT_TEXT =
  'By checking this box you agree to receive text messages from LeadTrap, Inc. ' +
  'at the number provided, about your inquiry and our services. Consent is not ' +
  'a condition of purchase. Message frequency varies. Message and data rates ' +
  'may apply. Reply STOP to opt out or HELP for help.';

/* Outlined "Explore →" pill that inverts on hover. `external` renders a plain
   <a> (used for the Carelu card, which points at the product site carelu.com). */
function Pill({ to, label, light, external }: { to: string; label: string; light: boolean; external?: boolean }) {
  const [h, setH] = useState(false);
  const base = light ? '#fff' : accent;
  const style = {
    flexShrink: 0, textDecoration: 'none', whiteSpace: 'nowrap',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: 14, fontWeight: 600,
    padding: '11px 20px', borderRadius: 100,
    border: `1px solid ${h ? base : (light ? 'rgba(255,255,255,0.55)' : 'rgba(58,138,176,0.55)')}`,
    background: h ? base : 'transparent',
    color: h ? (light ? '#1A2E1F' : '#0a0a0c') : (light ? '#fff' : '#cfe6f2'),
    transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
  } as const;
  const inner = (
    <>
      {label}
      <span style={{ display: 'inline-block', transform: h ? 'translateX(4px)' : 'none', transition: 'transform 0.25s' }}>→</span>
    </>
  );
  const handlers = { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) };
  return external
    ? <a href={to} {...handlers} style={style}>{inner}</a>
    : <Link to={to} {...handlers} style={style}>{inner}</Link>;
}

/* ----- product mock: Carelu intake chat (light) ----- */
function CareluMock() {
  return (
    <div style={{
      width: 'min(380px, 86%)', margin: '0 auto', background: '#fff',
      borderRadius: '18px 18px 0 0', boxShadow: '0 -8px 60px rgba(26,46,31,0.28)',
      border: '1px solid rgba(26,46,31,0.08)', borderBottom: 'none', overflow: 'hidden',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', borderBottom: '1px solid #EEF1EC' }}>
        <img src="/carelu-logo.svg" alt="Carelu" style={{ height: 18, width: 'auto', display: 'block' }} />
      </div>
      <div style={{ padding: '16px 16px 20px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <Bubble who="bot" text="Hi! Welcome to Bright Horizons ABA — what's your child's name?" />
        <Bubble who="me" text="Lucas. He has an autism diagnosis." />
        <Bubble who="bot" text="Wonderful. I can check your insurance coverage right now." />
      </div>
    </div>
  );
}
function Bubble({ who, text }: { who: 'bot' | 'me'; text: string }) {
  const me = who === 'me';
  return (
    <div style={{
      alignSelf: me ? 'flex-end' : 'flex-start', maxWidth: '82%',
      padding: '9px 13px', borderRadius: 13, fontSize: 12.5, lineHeight: 1.5,
      background: me ? '#2C3E2D' : '#EEF3EA', color: me ? '#fff' : '#2C3E2D',
    }}>{text}</div>
  );
}

/* ----- product mock: LeadTrap pipeline (dark) ----- */
function SuiteMock() {
  const rows: [string, string, string, string][] = [
    ['Thompson family', 'Phone', 'New', accent],
    ['Garcia family', 'Web', 'Qualified', '#5E9462'],
    ['Lee family', 'Text', 'Completed', '#5E9462'],
    ['Okafor family', 'Fax', 'Qualified', '#5E9462'],
  ];
  return (
    <div style={{
      width: 'min(440px, 92%)', margin: '0 auto', background: '#121319',
      borderRadius: '16px 16px 0 0', boxShadow: '0 -8px 60px rgba(0,0,0,0.5)',
      border: '1px solid rgba(255,255,255,0.08)', borderBottom: 'none', overflow: 'hidden',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Intake pipeline</span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Today</span>
      </div>
      <div>
        {rows.map(([name, ch, status, col], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', fontSize: 10, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{name[0]}</span>
              <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.9)' }}>{name}</span>
              <span style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.4)' }}>· {ch}</span>
            </div>
            <span style={{ fontSize: 10.5, fontWeight: 600, color: col, background: `${col}22`, padding: '3px 9px', borderRadius: 100 }}>{status}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 18, padding: '12px 16px', fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
        <span><b style={{ color: '#fff' }}>128</b> captured</span>
        <span><b style={{ color: '#fff' }}>96</b> qualified</span>
        <span><b style={{ color: '#fff' }}>84</b> completed</span>
      </div>
    </div>
  );
}

/* ----- stealth placeholder shown in the product card until reveal day.
   Generic, text-free frosted panel — reveals nothing about the product. The
   badge deliberately avoids "coming soon" wording: the product is in
   production with paying providers, only its brand is unannounced. ----- */
function StealthMock() {
  const bar = (w: string, bg: string, align: 'flex-start' | 'flex-end') => (
    <div style={{ height: 34, width: w, borderRadius: 12, background: bg, alignSelf: align }} />
  );
  return (
    <div style={{
      width: 'min(380px, 86%)', margin: '0 auto', background: 'rgba(255,255,255,0.92)',
      borderRadius: '18px 18px 0 0', boxShadow: '0 -8px 60px rgba(26,46,31,0.28)',
      border: '1px solid rgba(26,46,31,0.08)', borderBottom: 'none', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ filter: 'blur(7px)', opacity: 0.5, padding: '18px 16px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ height: 14, width: '52%', borderRadius: 8, background: '#dfe4dc' }} />
        {bar('80%', '#EEF3EA', 'flex-start')}
        {bar('56%', '#2C3E2D', 'flex-end')}
        {bar('74%', '#EEF3EA', 'flex-start')}
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: '#1A2E1F', background: 'rgba(255,255,255,0.82)',
          padding: '9px 15px', borderRadius: 100, border: '1px solid rgba(26,46,31,0.12)',
        }}>In production</span>
      </div>
    </div>
  );
}

/* ============================================================================
   Below-the-fold company sections.

   These exist for two audiences at once: a family or provider reading the site,
   and the automated carrier/TCR review of our A2P 10DLC registration, which
   requires the registered legal name, a plain description of the business, who
   it serves, reachable contact details, and an SMS disclosure naming the opt-in,
   frequency, rates, STOP/HELP, and the no-third-party-sharing commitment. Keep
   them in sync with the prerendered copy in leadtrap.html at the repo root.
   ============================================================================ */

const sectionCard = {
  background: '#0c0c11', border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: 20, padding: 'clamp(24px, 3.2vw, 36px)',
} as const;

const sectionKicker = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
  textTransform: 'uppercase', color: accent,
} as const;

const sectionH2 = {
  fontFamily: 'var(--font-body)', fontSize: 'clamp(21px, 2.1vw, 26px)', fontWeight: 700,
  color: '#fff', margin: '13px 0 0', lineHeight: 1.15, letterSpacing: '-0.02em',
} as const;

const bodyText = {
  fontSize: 14, color: 'rgba(255,255,255,0.62)', lineHeight: 1.7, margin: '12px 0 0',
} as const;

function WhatWeDo() {
  const capabilities: [string, string][] = [
    ['Website chat', "An AI agent on the provider's website that answers every family day and night, asks the qualifying questions, and books the next step."],
    ['Intake forms', 'Hosted and embedded intake forms that collect demographics, insurance, and documents, and check eligibility before anyone picks up the phone.'],
    ['SMS and email follow-up', 'Automatic follow-up to the families and referral sources who asked to be contacted, so an inquiry is never dropped.'],
    ['AI phone agent', "Answers the practice's line, takes the referral, and calls families back."],
    ['CRM delivery', "Every inquiry lands in the provider's CRM or EHR as a complete record, with reporting on where it came from."],
  ];
  return (
    <section style={sectionCard}>
      <span style={sectionKicker}>What we do</span>
      <h2 style={sectionH2}>AI intake and front-office software for behavioral health</h2>
      <p style={{ ...bodyText, maxWidth: 760 }}>
        {LEGAL_NAME} builds and operates the software that healthcare providers use to capture and
        complete new patient intake. When a family reaches out to one of our provider customers, our
        platform answers immediately, collects everything the practice needs to open a case, and hands
        the finished record to the provider's team. It runs every day for practices across the United
        States.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginTop: 26 }}>
        {capabilities.map(([title, desc]) => (
          <div key={title}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{title}</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '7px 0 0' }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeServe() {
  return (
    <section style={sectionCard}>
      <span style={sectionKicker}>Who we serve</span>
      <h2 style={sectionH2}>Providers are our customers. Families are who we reach.</h2>
      <p style={bodyText}>
        Our customers are provider organizations in the United States — ABA therapy and autism
        services, and behavioral-health practices — from single clinics to multi-state groups. They pay
        for the platform and control how it speaks to their community.
      </p>
      <p style={bodyText}>
        The people who receive messages through the platform are the families and referral sources who
        contacted one of those providers, and the practice owners and administrators who contact
        LeadTrap through this website. We do not buy contact lists and we do not message anyone who did
        not reach out first.
      </p>
    </section>
  );
}

function Texting() {
  return (
    <section id="texting" style={sectionCard}>
      <span style={sectionKicker}>Text messaging</span>
      <h2 style={sectionH2}>How and when we text you</h2>
      <p style={bodyText}>
        You will receive text messages from {LEGAL_NAME} only if you submit an inquiry, demo request,
        or intake form and check the SMS consent box on that form. <strong style={{ color: 'rgba(255,255,255,0.85)' }}>The box
        is unchecked by default</strong>, and consent to receive text messages is not a condition of
        purchase or of receiving any service from us. Texts relate to the request you submitted — a
        reply to your question, scheduling, or an update on your intake.
      </p>
      <ul style={{ ...bodyText, paddingLeft: 20, marginTop: 14 }}>
        <li style={{ marginBottom: 7 }}>Message frequency varies.</li>
        <li style={{ marginBottom: 7 }}>Message and data rates may apply.</li>
        <li style={{ marginBottom: 7 }}>Reply <strong style={{ color: 'rgba(255,255,255,0.85)' }}>STOP</strong> to any message to opt out at any time. Reply <strong style={{ color: 'rgba(255,255,255,0.85)' }}>HELP</strong> for help, or contact us at <a href={CONTACT.phoneHref} style={{ color: accent, textDecoration: 'none' }}>{CONTACT.phone}</a> or <a href={`mailto:${CONTACT.email}`} style={{ color: accent, textDecoration: 'none' }}>{CONTACT.email}</a>.</li>
        <li style={{ marginBottom: 7 }}>Mobile opt-in data and consent are never sold, and are never shared with third parties or affiliates for their own marketing or promotional purposes.</li>
      </ul>
      <p style={{ ...bodyText, marginTop: 14 }}>
        Full details are in our <a href="/privacy#sms" style={{ color: accent, textDecoration: 'none' }}>Privacy Policy</a> and <a href="/terms" style={{ color: accent, textDecoration: 'none' }}>Terms of Service</a>.
      </p>
    </section>
  );
}

/* Contact form. This is the opt-in point we register with the carriers: name,
   email, an optional phone number, and an unchecked consent checkbox carrying
   the full disclosure. It posts to /api/leads, which stores the consent text
   alongside the lead as evidence. */
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  // The prerendered no-JS form posts to /api/leads and comes back to
  // /?sent=1#contact — show the same confirmation React would have shown.
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>(
    () => (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('sent') === '1' ? 'done' : 'idle')
  );

  const field = {
    width: '100%', boxSizing: 'border-box' as const, marginTop: 6,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: 10, padding: '11px 13px', fontSize: 14, color: '#fff',
    fontFamily: 'var(--font-body)', outline: 'none',
  };
  const label = { fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.7)' } as const;

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          form: 'contact', name, email, phone, smsConsent, website,
          page: window.location.pathname,
        }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <p style={{ ...bodyText, marginTop: 0 }}>
        Thank you — your message reached our team and someone will be in touch. You can also call us at{' '}
        <a href={CONTACT.phoneHref} style={{ color: accent, textDecoration: 'none' }}>{CONTACT.phone}</a>.
      </p>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <label style={label} htmlFor="contact-name">Full name</label>
        <input id="contact-name" style={field} type="text" autoComplete="name" required
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label style={label} htmlFor="contact-email">Email</label>
        <input id="contact-email" style={field} type="email" autoComplete="email" required
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label style={label} htmlFor="contact-phone">Mobile phone <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.4)' }}>(optional)</span></label>
        <input id="contact-phone" style={field} type="tel" autoComplete="tel"
          value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      {/* Honeypot: never shown to a person, dropped server-side when filled. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={website} onChange={(e) => setWebsite(e.target.value)}
        style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12.5, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, cursor: 'pointer' }}>
        <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)}
          style={{ marginTop: 3, accentColor: accent, width: 15, height: 15, flexShrink: 0 }} />
        <span>{SMS_CONSENT_TEXT} See our <a href="/privacy#sms" style={{ color: accent, textDecoration: 'none' }}>Privacy Policy</a> and <a href="/terms" style={{ color: accent, textDecoration: 'none' }}>Terms of Service</a>.</span>
      </label>
      <button type="submit" disabled={state === 'sending'} style={{
        alignSelf: 'flex-start', border: 'none', cursor: 'pointer',
        fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-body)',
        color: '#0a0a0c', background: '#fff', padding: '11px 22px', borderRadius: 100,
        opacity: state === 'sending' ? 0.6 : 1,
      }}>{state === 'sending' ? 'Sending…' : 'Send message'}</button>
      {state === 'error' && (
        <p style={{ fontSize: 12.5, color: '#e0806f', margin: 0 }}>
          Something went wrong. Email <a href={`mailto:${CONTACT.email}`} style={{ color: accent, textDecoration: 'none' }}>{CONTACT.email}</a> and we'll pick it up there.
        </p>
      )}
    </form>
  );
}

function ContactBlock() {
  return (
    <section id="contact" style={sectionCard}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 3vw, 48px)' }}>
        <div>
          <span style={sectionKicker}>Contact</span>
          <h2 style={sectionH2}>Talk to us</h2>
          <p style={bodyText}>
            Whether you run a practice and want to see the platform, or you have a question about a
            message you received, reach us any of these ways.
          </p>
          <dl style={{ margin: '24px 0 0', display: 'grid', gap: 16 }}>
            <div>
              <dt style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Email</dt>
              <dd style={{ margin: '5px 0 0', fontSize: 14.5 }}>
                <a href={`mailto:${CONTACT.email}`} style={{ color: '#fff', textDecoration: 'none' }}>{CONTACT.email}</a>
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Phone</dt>
              <dd style={{ margin: '5px 0 0', fontSize: 14.5 }}>
                <a href={CONTACT.phoneHref} style={{ color: '#fff', textDecoration: 'none' }}>{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Address</dt>
              <dd style={{ margin: '5px 0 0', fontSize: 14.5, color: '#fff' }}>{LEGAL_NAME}<br />{CONTACT.address}</dd>
            </div>
          </dl>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default function Gateway() {
  const revealed = careluRevealed();
  useSeo({
    title: 'LeadTrap — Agentic infrastructure for growth',
    description: revealed
      ? 'LeadTrap, Inc. builds AI intake and front-office software for ABA and behavioral-health providers — website chat, intake forms, SMS and email follow-up, an AI phone agent, and delivery into the CRM. Maker of Carelu.'
      : 'LeadTrap, Inc. builds AI intake and front-office software for ABA and behavioral-health providers — website chat, intake forms, SMS and email follow-up, an AI phone agent, and delivery into the CRM.',
    canonical: 'https://leadtrap.com/',
  });
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0c', color: '#fff', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 55% 40% at 50% 16%, rgba(58,138,176,0.10), transparent 70%)' }} />

      {/* Nav */}
      <nav style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1320, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.jpeg" alt="" style={{ height: 28, width: 28, borderRadius: 7 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-0.02em' }}>LeadTrap</span>
        </Link>
        {/* Before the demo page goes live the CTA points at the contact
            section rather than reading "Coming soon" — a dead pre-launch pill
            is exactly what makes a carrier reviewer call us a non-operating
            business, and the contact form is a real destination either way. */}
        <a
          href={demoLive() ? '/demo' : '#contact'}
          style={{ fontSize: 14, fontWeight: 600, color: '#0a0a0c', background: '#fff', padding: '10px 20px', borderRadius: 100, textDecoration: 'none' }}
        >{demoLive() ? 'Request demo' : 'Contact us'}</a>
      </nav>

      {/* Headline */}
      <header style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '34px 24px 30px' }}>
        <h1 style={{ opacity: 0, animation: 'heroIn 1s var(--ease-dramatic) forwards', fontFamily: 'var(--font-body)', fontSize: 'clamp(13px, 2.9vw, 42px)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0, whiteSpace: 'nowrap' }}>
          LeadTrap is the agentic infrastructure company for growth.
        </h1>
        <p style={{ opacity: 0, animation: 'heroIn 0.9s var(--ease-dramatic) 0.15s forwards', marginTop: 16, fontSize: 'clamp(14px, 1.2vw, 16px)', color: 'rgba(255,255,255,0.5)', maxWidth: 560, marginInline: 'auto', lineHeight: 1.6 }}>
          Vertical AI that captures, qualifies, and completes every inquiry — for the industries that run on intake.
        </p>
      </header>

      {/* Two panels */}
      <main style={{ position: 'relative', zIndex: 2, flex: 1, width: '100%', maxWidth: 1320, margin: '0 auto', padding: '0 20px 24px', opacity: 0, animation: 'heroIn 0.9s var(--ease-dramatic) 0.3s forwards' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 16, alignItems: 'stretch' }}>

          {/* The product (sky). Carelu is revealed on/after CARELU_REVEAL;
              until then this card is a stealth "Coming soon" — no product
              name, no link, obscured preview. */}
          <section style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20, minHeight: 524,
            display: 'flex', flexDirection: 'column',
            backgroundImage: 'linear-gradient(180deg, rgba(26,46,31,0.52) 0%, rgba(26,46,31,0.12) 30%, rgba(255,255,255,0) 58%), url(/sky.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, padding: '32px 34px 0', position: 'relative', zIndex: 2 }}>
              <div style={{ maxWidth: 380 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>The product</span>
                {revealed ? (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: '#fff', margin: '12px 0 0', lineHeight: 1 }}>Carelu</h2>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: '#fff', marginTop: 11 }}>AI intake for ABA &amp; behavioral health</div>
                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginTop: 9 }}>
                      Captures, qualifies, and completes every family's intake across every channel — built to never miss a lead.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 34, fontWeight: 600, color: '#fff', margin: '12px 0 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>Behavioral health</h2>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: '#fff', marginTop: 11 }}>An AI front office for ABA &amp; behavioral health</div>
                    <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginTop: 9 }}>
                      Our first vertical, in production today with ABA providers across the country: the system that meets every family the moment they reach out, completes the intake, and makes sure not one slips through. Its brand is announced this month.
                    </p>
                  </>
                )}
              </div>
              {revealed && <Pill to="https://carelu.com" label="Explore Carelu" light external />}
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 28 }}>
              {revealed ? <CareluMock /> : <StealthMock />}
            </div>
          </section>

          {/* LeadTrap Suite — the company (dark + teal) */}
          <section style={{
            position: 'relative', overflow: 'hidden', borderRadius: 20, minHeight: 524,
            display: 'flex', flexDirection: 'column', background: '#0c0c11',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 28% 14%, rgba(58,138,176,0.22), transparent 68%)', pointerEvents: 'none' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, padding: '32px 34px 0', position: 'relative', zIndex: 2 }}>
              <div style={{ maxWidth: 380 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: accent }}>The company</span>
                <h2 style={{ fontFamily: 'var(--font-body)', fontSize: 29, fontWeight: 700, color: '#fff', margin: '13px 0 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>LeadTrap Suite</h2>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: '#fff', marginTop: 11 }}>Vertical AI front offices</div>
                <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginTop: 9 }}>
                  {revealed
                    ? 'The company behind Carelu — building vertical AI for every industry that lives or dies on intake.'
                    : 'Building vertical AI for every industry that lives or dies on intake.'}
                </p>
              </div>
              <Pill to="/company" label="Explore LeadTrap Suite" light={false} />
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 28, position: 'relative', zIndex: 2 }}>
              <SuiteMock />
            </div>
          </section>

        </div>

        {/* Company detail: what we do, who we serve, texting, contact. */}
        <div style={{ display: 'grid', gap: 16, marginTop: 16 }}>
          <WhatWeDo />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 16, alignItems: 'stretch' }}>
            <WhoWeServe />
            <Texting />
          </div>
          <ContactBlock />
        </div>
      </main>

      <footer style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 8, padding: '26px 24px 34px', fontSize: 12.5, color: 'rgba(255,255,255,0.35)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 14 }}>
          <span>© {new Date().getFullYear()} {LEGAL_NAME} All rights reserved. {CONTACT.address}.</span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
            <a href="/privacy" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#texting" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Text messaging</a>
            <a href={`mailto:${CONTACT.email}`} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{CONTACT.phone}</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
