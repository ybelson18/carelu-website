import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

/* ============================================================
   CARELU — v2 COPY REWRITE ($10M version)
   ============================================================
   Same design system. Upgraded copy: scenario-based,
   emotional, specific. Every word earns its place.
   ============================================================ */

const W: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 36px' };

function Pill({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <span style={{
      display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: dark ? 'var(--sage-300)' : 'var(--green-800)',
      backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'var(--sage-100)',
      padding: '6px 16px', borderRadius: 'var(--radius-pill)', marginBottom: 24,
    }}>{children}</span>
  );
}

function Counter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const dur = 2000, t0 = performance.now();
        (function tick(now: number) {
          const p = Math.min((now - t0) / dur, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 4)) * target));
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function TypingDots() {
  return <div className="typing-indicator"><span /><span /><span /></div>;
}

// ── NAV ──────────────────────────────────────────
function Nav() {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--gray-200)' }}>
      <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--green-900)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="dot-pulse" style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--green-600)', display: 'inline-block' }} />
          carelu
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Platform', 'How It Works', 'FAQ'].map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/\s+/g, '-')}`} className="hide-mobile nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--gray-500)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--green-900)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-500)'; }}
            >{t}</a>
          ))}
          <a href="#cta" className="btn-primary" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#fff', backgroundColor: 'var(--green-800)', padding: '10px 24px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-700)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-800)'; }}
          >
            Request a Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingTop: 100, paddingBottom: 40, position: 'relative', overflow: 'hidden',
    }}>
      {/* Gradient mesh */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', width: 700, height: 700, top: -200, right: -150, borderRadius: '50%', background: 'radial-gradient(circle, var(--sage-100) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.7 }} />
        <div style={{ position: 'absolute', width: 500, height: 500, bottom: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,228,207,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, top: '40%', left: '40%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,205,178,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div style={{ ...W, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div>
          <Pill>AI-Powered Intake for Behavioral Health</Pill>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--green-900)', marginBottom: 28 }}>
            <span className="hero-line">Right now, a family</span>
            <span className="hero-line">is looking for <em style={{ fontStyle: 'italic' }}>help.</em></span>
          </h1>
          <p className="hero-sub" style={{ fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.75, maxWidth: 480, marginBottom: 20 }}>
            They're texting your intake number at 11pm. Filling out a form on their lunch break. Calling between school pickups. The question isn't whether families need you — it's whether your front door is open when they arrive.
          </p>
          <p className="hero-sub" style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: 440, marginBottom: 44 }}>
            Carelu makes sure it is. Every channel. Every hour. Every family.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#cta" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-body)', fontWeight: 600, color: '#fff', backgroundColor: 'var(--green-800)', padding: '18px 36px', borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-700)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-800)'; }}
            >
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>Free · Setup in days, not months</span>
          </div>
        </div>

        {/* Hero visual — conversation + verification */}
        <div className="hero-visual" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div className="card-lift glass" style={{ borderRadius: 'var(--radius)', padding: 22, gridRow: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--green-800)' }}>Live Intake</span>
              <span style={{ fontSize: 10, color: 'var(--gray-400)' }}>Now</span>
            </div>
            <div className="hero-chat-msg" style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 'var(--radius-sm)', padding: 14, marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-700)', marginBottom: 4 }}>Maria D.</div>
              <div style={{ fontSize: 12, color: 'var(--gray-600)', lineHeight: 1.45 }}>Hi, I'm looking for ABA therapy for my son. He was recently diagnosed.</div>
            </div>
            <div className="hero-chat-msg" style={{ background: 'rgba(255,255,255,0.8)', borderRadius: 'var(--radius-sm)', padding: 14, marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--green-700)', marginBottom: 4 }}>Carelu</div>
              <div style={{ fontSize: 12, color: 'var(--gray-600)', lineHeight: 1.45 }}>I'd love to help! What insurance do you have?</div>
            </div>
            <div className="hero-chat-msg" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green-600)', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--green-700)', fontWeight: 500 }}>Verifying insurance...</span>
            </div>
          </div>
          <div className="card-lift glass" style={{ borderRadius: 'var(--radius)', padding: 22 }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>This Month</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--green-900)' }}>214</div>
            <div style={{ fontSize: 11, color: 'var(--gray-500)' }}>families connected to care</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 10 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2.5"><path d="M7 17l5-5 4 4 6-8"/></svg>
              <span style={{ fontSize: 11, color: 'var(--green-600)', fontWeight: 600 }}>+34% vs last month</span>
            </div>
          </div>
          <div className="card-lift glass" style={{ borderRadius: 'var(--radius)', padding: 22 }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--green-800)', marginBottom: 8 }}>Verification Status</div>
            {['Aetna — ABA covered', 'In-network · No referral'].map((t) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                <span style={{ fontSize: 12, color: 'var(--gray-600)' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer logos */}
      <div style={{ ...W, marginTop: 80, paddingBottom: 20, position: 'relative', zIndex: 1 }} className="rv d5">
        <p style={{ fontSize: 'var(--text-label)', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '2.5px', textAlign: 'center', marginBottom: 32 }}>
          Trusted by behavioral health providers nationwide
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 44, flexWrap: 'wrap' }}>
          {[
            { src: '/logos/golden-care.svg', alt: 'Golden Care Therapy', w: 155 },
            { src: '/logos/total-care.svg', alt: 'Total Care Therapy', w: 120 },
            { src: '/logos/supportive-care.svg', alt: 'Supportive Care ABA', w: 175 },
            { src: '/logos/bridgecare.svg', alt: 'BridgeCare ABA Therapy', w: 175 },
            { src: '/logos/key-autism.svg', alt: 'Key Autism Services', w: 125 },
            { src: '/logos/grateful-care.svg', alt: 'Grateful Care ABA', w: 145 },
          ].map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt}
              style={{ width: logo.w, height: 44, objectFit: 'contain', opacity: 0.5, filter: 'grayscale(100%)', transition: 'opacity 0.3s, filter 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.filter = 'grayscale(0%)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; e.currentTarget.style.filter = 'grayscale(100%)'; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MARQUEE ──────────────────────────────────────
function Marquee() {
  const items = ['AI-Powered Intake', 'HIPAA Compliant', 'Insurance Verification', 'ABA Therapy', 'Behavioral Health', '24/7 Availability', 'Document Collection', 'Zero Drop-Off', 'Home Care', 'Addiction Treatment'];
  const text = items.map((i) => `${i}  ·  `).join('');
  return (
    <div style={{ borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)', padding: '18px 0', overflow: 'hidden', userSelect: 'none' }}>
      <div className="marquee-track">
        {[0, 1].map((i) => <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--gray-400)', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{text}</span>)}
      </div>
    </div>
  );
}

// ── PROBLEM ─────────────────────────────────────
function Problem() {
  return (
    <section style={{ backgroundColor: 'var(--green-900)', color: '#fff', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill dark>The problem</Pill>

        <div className="rv" style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, lineHeight: 1.12, color: '#fff', maxWidth: 720 }}>
            Families don't know where to start. Intake teams can't keep up. The front door is broken.
          </h2>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { val: 70, suf: '%', label: '', desc: 'of families abandon the intake process before completing it.' },
            { val: 5, suf: '+', label: '', desc: 'disconnected tools used by the average intake team — none of them integrated.' },
            { val: 0, suf: '', label: 'Days', desc: 'of manual follow-up required per patient case on average.' },
          ].map((s, i) => (
            <div key={s.desc} className={`rv d${i + 1}`} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', padding: '44px 32px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 60, color: 'var(--sage-200)', lineHeight: 1, marginBottom: 8 }}>
                {s.label || <Counter target={s.val} suffix={s.suf} />}
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SOLUTION BRIDGE ─────────────────────────────
function Promise() {
  return (
    <section style={{ background: 'linear-gradient(to bottom, var(--sage-200), var(--white))', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>The solution</Pill>
        <h2 className="rv-scale" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, lineHeight: 1.12, color: 'var(--green-900)', maxWidth: 720 }}>
          Carelu replaces your entire intake workflow with one AI-powered platform — from first contact to admitted patient.
        </h2>
      </div>
    </section>
  );
}

// ── STICKY PRODUCT TOUR — feature-based ─────────
const tourSteps = [
  {
    tag: 'Conversational AI',
    title: 'Intake that feels like a conversation.',
    desc: 'Carelu engages families in real time across chat, phone, SMS, web forms, and fax — responding in under 3 seconds with warm, intelligent dialogue in English or Spanish. No hold music. No voicemail. No forms that feel like paperwork.',
    pills: ['Chat', 'Phone', 'SMS', 'Forms', 'Fax'],
    mockup: 'chat',
  },
  {
    tag: 'Insurance Verification',
    title: 'Eligibility confirmed in seconds.',
    desc: 'While the conversation is happening, Carelu checks eligibility, confirms coverage, verifies in-network status, and flags any issues — in real time across 600+ payers. Families never have to call their insurance company. Neither does your team.',
    pills: ['Real-time', '600+ payers', 'Auto-flag issues'],
    mockup: 'eligibility',
  },
  {
    tag: 'Automated Follow-Up',
    title: 'No family falls through the cracks.',
    desc: 'Insurance cards, diagnosis reports, consent forms — Carelu collects them conversationally. If something is missing, it sends a friendly nudge via text or email. Then another. Until the case is 100% complete and ready for your clinical team.',
    pills: ['Auto-collect docs', 'SMS nudges', 'Zero manual chase'],
    mockup: 'followup',
  },
];

function StickyTour() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActiveIdx(idx);
        }
      });
    }, { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' });
    stepRefs.current.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const mockups: Record<string, React.ReactNode> = {
    chat: (
      <div style={{ background: '#fff', borderRadius: 'var(--radius-sm)', padding: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {[
          { from: 'user', text: "Hi, I'm looking for ABA therapy for my son." },
          { from: 'bot', text: "I'd love to help! What insurance do you have?" },
          { from: 'user', text: "We have Aetna through my employer." },
          { from: 'bot', text: "Great — let me check your coverage right now. What's your member ID?" },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start', marginBottom: 10 }}>
            <div style={{ padding: '10px 16px', borderRadius: 14, fontSize: 13, lineHeight: 1.5, maxWidth: '82%', background: m.from === 'user' ? 'var(--green-800)' : 'var(--sage-50)', color: m.from === 'user' ? '#fff' : 'var(--gray-600)' }}>{m.text}</div>
          </div>
        ))}
        <TypingDots />
      </div>
    ),
    eligibility: (
      <div style={{ background: '#fff', borderRadius: 'var(--radius-sm)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {[
          { text: 'Aetna — Active', check: true },
          { text: 'ABA therapy (CPT 97153) — Covered', check: true },
          { text: 'In-network provider available', check: true },
          { text: 'No referral required', check: true },
        ].map((r) => (
          <div key={r.text} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, padding: '10px 14px', background: 'var(--sage-50)', borderRadius: 'var(--radius-sm)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span style={{ fontSize: 13, color: 'var(--gray-600)' }}>{r.text}</span>
          </div>
        ))}
      </div>
    ),
    followup: (
      <div style={{ background: '#fff', borderRadius: 'var(--radius-sm)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {[
          { text: 'Family started intake via chat', icon: '💬', done: true },
          { text: 'Insurance verified · Aetna · Covered', icon: '✓', done: true },
          { text: 'Insurance card uploaded', icon: '📄', done: true },
          { text: 'Friendly SMS reminder sent for diagnosis report', icon: '📩', highlight: true },
          { text: 'Diagnosis report received', icon: '📄', done: true },
          { text: 'Case complete — handed to clinical team', icon: '🟢', done: true },
        ].map((e, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12, opacity: e.highlight ? 1 : 0.8 }}>
            <div style={{ fontSize: 14, width: 24, textAlign: 'center', flexShrink: 0 }}>{e.icon}</div>
            <div style={{ flex: 1, background: e.highlight ? '#FFF8E1' : 'transparent', borderRadius: 'var(--radius-sm)', padding: e.highlight ? '8px 12px' : '0 0' }}>
              <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.4 }}>{e.text}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <section id="platform" style={{ paddingTop: 'var(--section-py)', paddingBottom: 40 }}>
      <div style={W}>
        <Pill>The platform</Pill>
        <h2 className="rv" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, maxWidth: 600, marginBottom: 80 }}>
          One system that never drops the ball.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div style={{ position: 'sticky', top: 120, alignSelf: 'start' }}>
            <div style={{ background: 'var(--sage-50)', borderRadius: 'var(--radius)', padding: 28, transition: 'all 0.5s var(--ease-dramatic)' }}>
              {mockups[tourSteps[activeIdx].mockup]}
            </div>
          </div>
          <div>
            {tourSteps.map((step, i) => (
              <div key={step.title} ref={(el) => { stepRefs.current[i] = el; }}
                className={`tour-step ${activeIdx !== i ? 'dimmed' : ''}`}
                style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingBottom: i < tourSteps.length - 1 ? 80 : 0 }}
              >
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--green-600)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 12 }}>{step.tag}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--green-900)', lineHeight: 1.2, marginBottom: 16 }}>{step.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 24, maxWidth: 420 }}>{step.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {step.pills.map((p) => (
                    <span key={p} style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--green-800)', background: 'var(--sage-100)', padding: '5px 14px', borderRadius: 'var(--radius-pill)' }}>{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────
function HowItWorks() {
  return (
    <section id="how-it-works" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>How it works</Pill>
        <h2 className="rv-left" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, marginBottom: 72, maxWidth: 500 }}>
          From conversation to care readiness.
        </h2>
        <div style={{ maxWidth: 860 }}>
          {[
            { n: '01', t: 'Engage', d: 'Families reach out via chat, phone, text, form, or fax. Carelu responds instantly.' },
            { n: '02', t: 'Qualify', d: 'Insurance is verified in real time. Eligibility and coverage are confirmed automatically.' },
            { n: '03', t: 'Collect', d: 'Documents like insurance cards, diagnosis reports, and consent forms are gathered conversationally.' },
            { n: '04', t: 'Follow up', d: 'Missing items trigger automatic, friendly text and email reminders until the case is complete.' },
            { n: '05', t: 'Hand off', d: 'Your clinical team receives a fully prepared, intake-ready case with all documentation organized.' },
          ].map((s, i) => (
            <div key={s.n} className={`rv d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 180px 1fr', gap: 24, alignItems: 'baseline', padding: '30px 0', borderBottom: i < 4 ? '1px solid var(--gray-200)' : 'none' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)', fontWeight: 600 }}>{s.n}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--green-900)' }}>{s.t}</span>
              <span style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.65 }}>{s.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── IMPACT ───────────────────────────────────────
function Impact() {
  return (
    <section style={{ background: 'var(--sage-50)', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>Results</Pill>
        <h2 className="rv-scale" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', marginBottom: 64 }}>
          Our product speaks for itself.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { v: 3, s: '×', t: 'More families admitted', d: 'Same team size, triple the throughput.' },
            { v: 10, s: ' min', t: 'First contact to intake-ready', p: '<', d: 'What used to take 3–5 business days.' },
            { v: 85, s: '%', t: 'Family completion rate', d: 'Industry average is under 30%.' },
            { v: 0, s: '', t: 'Manual follow-ups needed', d: 'Everything is automated end to end.' },
          ].map((s, i) => (
            <div key={s.t} className={`rv d${i + 1} card-lift`} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '44px 28px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 52, color: 'var(--green-800)', lineHeight: 1, marginBottom: 12 }}>
                <Counter target={s.v} suffix={s.s} prefix={s.p || ''} />
              </div>
              <div style={{ fontWeight: 600, color: 'var(--black)', fontSize: 'var(--text-sm)', marginBottom: 6 }}>{s.t}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)', lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIAL ─────────────────────────────────
function Testimonial() {
  return (
    <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>What providers say</Pill>

        <blockquote className="rv" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontStyle: 'italic',
          color: 'var(--green-900)',
          lineHeight: 1.2,
          maxWidth: 800,
          marginBottom: 40,
        }}>
          "We were losing 60% of families before they ever completed intake. Carelu brought that number under 15% in the first month."
        </blockquote>
        <div className="rv d2" style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 80 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--sage-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: 'var(--green-800)' }}>MC</div>
          <div>
            <div style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--green-900)' }}>Maria C., Clinical Director</div>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)' }}>Bright Horizons ABA</div>
          </div>
        </div>

        {/* Supporting proof */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { stat: '5 min', desc: 'Average time to onboard a new provider location' },
            { stat: '50%', desc: 'Reduction in intake drop-off within the first month' },
            { stat: '"Finally."', desc: '"I can actually focus on my child instead of filling out forms." — Parent' },
          ].map((s, i) => (
            <div key={s.stat} className={`rv d${i + 3} card-lift`} style={{ background: 'var(--sage-50)', borderRadius: 'var(--radius)', padding: '36px 28px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--green-800)', marginBottom: 8 }}>{s.stat}</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── COMPLIANCE ───────────────────────────────────
function Compliance() {
  return (
    <section style={{ background: 'var(--gray-50)', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          <div className="rv">
            <Pill>Built for healthcare</Pill>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12 }}>
              Your compliance team will love us.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {[
              'HIPAA-compliant with end-to-end encryption',
              'BAAs signed before you go live',
              'SOC 2 Type II audited annually',
              'US-based data centers — no offshore processing',
              'Payer-compliant communication — fewer denials',
              'Role-based access controls for all PHI',
            ].map((item, i) => (
              <div key={item} className={`rv d${i + 1}`} style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--green-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-600)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────
function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: 'How does Carelu keep patient data safe?', a: 'We use end-to-end encryption, sign BAAs with every provider, undergo annual SOC 2 Type II audits, and store all data in HIPAA-eligible US data centers.' },
    { q: 'Will this replace our intake team?', a: 'No. Carelu handles the repetitive parts — eligibility checks, document collection, follow-up reminders — so your team can focus on clinical work and complex cases.' },
    { q: 'How long until we\'re live?', a: 'Most providers go live within 1–2 weeks. We handle setup, configure your insurance rules and conversation flows, and train your team.' },
    { q: 'What if a family needs a real person?', a: 'Carelu hands off to your team with full context — everything collected so far, the family\'s preferences, and a summary of the conversation.' },
    { q: 'What does this actually cost?', a: 'We price based on volume and channels. Most providers see positive ROI within the first month. Book a demo and we\'ll walk through pricing for your setup.' },
  ];

  return (
    <section id="faq" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
          <div className="rv">
            <Pill>Questions</Pill>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, marginBottom: 16 }}>
              Let's clear things up.
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.6 }}>
              Still have questions? <a href="mailto:hello@carelu.ai" style={{ color: 'var(--green-700)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>We're real humans — just ask.</a>
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className={`rv d${Math.min(i + 1, 5)}`} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '26px 0', border: 'none', background: 'none', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontSize: 'var(--text-body)', fontWeight: 500, color: 'var(--black)' }}>{f.q}</span>
                  <span style={{ fontSize: 20, color: 'var(--gray-400)', transition: 'transform 0.3s var(--ease-dramatic)', display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.5s var(--ease-dramatic)' }}>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.7, paddingBottom: 26 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA + FOOTER ─────────────────────────────────
function CtaFooter() {
  return (
    <>
      <section id="cta" style={{ padding: '0 36px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16, maxWidth: 1200, margin: '0 auto' }}>
          <div className="rv" style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius)', padding: 'clamp(48px, 6vw, 72px)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, marginBottom: 20 }}>
              Join the practices spending less time on admin and more time with patients.
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: 460 }}>
              Built by people who've run behavioral health practices. Real humans on the other end — always.
            </p>
          </div>
          <div className="rv d1" style={{ background: 'var(--green-800)', borderRadius: 'var(--radius)', padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-700)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-800)'; }}
          >
            <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)' }}>Free demo · Live in 2 weeks · No engineering needed</span>
            <a href="mailto:hello@carelu.ai" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 'var(--text-h3)', fontWeight: 500, color: '#fff', textDecoration: 'none' }}>
              Request a Demo
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>
      <footer style={{ ...W, padding: '48px 36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green-600)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--gray-400)' }}>carelu</span>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>HIPAA Compliant</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>SOC 2 Type II</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>© 2026 Carelu, Inc.</span>
        </div>
      </footer>
    </>
  );
}

// ── PAGE ─────────────────────────────────────────
export default function Landing() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Promise />
      <StickyTour />
      <HowItWorks />
      <Impact />
      <Testimonial />
      <Compliance />
      <Faq />
      <CtaFooter />
    </>
  );
}
