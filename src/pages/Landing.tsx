import { useState, useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

// ── LIVE FAMILY COUNTER — grows ~200/day from a fixed baseline ──
// ── LIVE FAMILY COUNT ──
const BASELINE_DATE = new Date('2026-04-16T00:00:00Z').getTime();
const BASELINE_COUNT = 35000;
const GROWTH_PER_MS = 500 / (24 * 60 * 60 * 1000);

function getLiveCount() {
  return Math.floor(BASELINE_COUNT + Math.max(0, Date.now() - BASELINE_DATE) * GROWTH_PER_MS);
}

// ── LIVE COUNTER — ticks up in real time ──
function LiveCounter() {
  const [count, setCount] = useState(getLiveCount);

  useEffect(() => {
    const interval = setInterval(() => setCount(getLiveCount()), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rv-scale" style={{ textAlign: 'center', marginBottom: 56 }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(64px, 10vw, 120px)',
        color: 'var(--green-800)',
        lineHeight: 1,
        letterSpacing: '-3px',
      }}>
        {count.toLocaleString()}+
      </div>
      <div style={{ fontSize: 'var(--text-h3)', color: 'var(--gray-500)', marginTop: 8, marginBottom: 12 }}>
        families connected to care
      </div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green-600)', display: 'inline-block' }} />
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--green-700)', fontWeight: 600 }}>Live</span>
      </div>
    </div>
  );
}

// ── SCROLL PROGRESS BAR ──
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let rafId = 0;
    function update() {
      if (!ref.current) return;
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? scrolled / max : 0;
      ref.current.style.transform = `scaleX(${pct})`;
    }
    function onScroll() { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); }
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('scroll', onScroll); };
  }, []);
  return <div ref={ref} className="scroll-progress" style={{ width: '100%' }} />;
}




// ── SPLIT WORDS — wraps words in staggered spans ──
function SplitWords({ text, baseDelay = 0 }: { text: string; baseDelay?: number }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${baseDelay + i * 0.12}s`, marginRight: '0.25em' }}
        >
          {word}
        </span>
      ))}
    </>
  );
}



/* ============================================================
   CARELU — ORIGINAL VERSION
   ============================================================
   Feature-based copy with the full design system:
   glassmorphism cards, gradient mesh hero, sticky product tour,
   customer logos, marquee, animated counters, typing indicator.
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
      <div style={{ ...W, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 96 }}>
        <a href="/" style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 500, color: 'var(--green-900)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14, letterSpacing: '-1.2px', lineHeight: 1 }}>
          <span className="dot-pulse" style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: 'var(--green-700)', display: 'inline-block', marginTop: 7 }} />
          carelu
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Platform', 'How It Works', 'FAQ'].map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/\s+/g, '-')}`} className="hide-mobile nav-link" style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--gray-500)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--green-900)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--gray-500)'; }}
            >{t}</a>
          ))}
          <a href="/demo" className="btn-primary" style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#fff', backgroundColor: 'var(--green-800)', padding: '10px 24px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
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
    <section className="hero-mobile" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingTop: 132, paddingBottom: 40, position: 'relative', overflow: 'hidden',
    }}>
      {/* Gradient mesh — drifting orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb-drift-1" style={{ position: 'absolute', width: 700, height: 700, top: -200, right: -150, borderRadius: '50%', background: 'radial-gradient(circle, var(--sage-100) 0%, transparent 70%)', filter: 'blur(80px)', opacity: 0.7 }} />
        <div className="orb-drift-2" style={{ position: 'absolute', width: 500, height: 500, bottom: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,228,207,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="orb-drift-3" style={{ position: 'absolute', width: 300, height: 300, top: '40%', left: '40%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,205,178,0.2) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div className="mobile-stack" style={{ ...W, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className="hero-content-mobile">
          <Pill>The World's First Care Enablement Platform</Pill>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-hero)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--green-900)', marginBottom: 28, perspective: 1000 }}>
            <div style={{ display: 'block' }}>
              <SplitWords text="Fewer families lost." baseDelay={0.1} />
            </div>
            <div style={{ display: 'block' }}>
              <SplitWords text="More care" baseDelay={0.5} />
              {' '}
              <span
                className="hero-word"
                style={{ animationDelay: '0.9s', fontStyle: 'italic', display: 'inline-block' }}
              >delivered.</span>
            </div>
          </h1>
          <p className="hero-sub" style={{ fontSize: 18, color: 'var(--gray-600)', lineHeight: 1.75, maxWidth: 480, marginBottom: 44 }}>
            Behind every inquiry is a family in crisis. Carelu makes sure none of them slip through the cracks — and turns every family you can help into a scheduled intake.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="/demo" className="btn-primary hero-cta-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 'var(--text-body)', fontWeight: 600, color: '#fff', backgroundColor: 'var(--green-800)', padding: '18px 36px', borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-700)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-800)'; }}
            >
              Request a Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <span className="hide-mobile" style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)' }}>Setup in days, not months</span>
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

    </section>
  );
}

// ── MARQUEE ──────────────────────────────────────
function Marquee() {
  const items = ['AI-Powered Intake', 'HIPAA Compliant', 'Insurance Verification', 'ABA Therapy', 'Behavioral Health', '24/7 Availability', 'Document Collection', 'Zero Drop-Off', 'Home Care', 'Addiction Treatment'];
  const text = items.map((i) => `${i}  ·  `).join('');
  // Render 4 copies so even on very wide screens there's never a visible gap.
  // The CSS keyframe animates from 0 to -50% which equals exactly 2 copies shifting off-screen,
  // while the other 2 copies are always visible → seamless infinite loop.
  return (
    <div style={{ borderTop: '1px solid var(--gray-200)', borderBottom: '1px solid var(--gray-200)', padding: '18px 0', overflow: 'hidden', userSelect: 'none' }}>
      <div className="marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--gray-400)', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── LOGO BAR — cycling logos ────────────────────
const allLogos = [
  { src: '/logos/strive-aba.png', alt: 'Strive ABA Therapy' },
  { src: '/logos/golden-care.png', alt: 'Golden Care Therapy' },
  { src: '/logos/grateful-care.avif', alt: 'Grateful Care ABA' },
  { src: '/logos/supportive-care.png', alt: 'Supportive Care ABA' },
  { src: '/logos/cross-river.png', alt: 'Cross River Therapy' },
  { src: '/logos/totalcare.webp', alt: 'Total Care Therapy' },
  { src: '/logos/above-beyond.webp', alt: 'Above and Beyond Therapy' },
  { src: '/logos/blossom-aba.webp', alt: 'Blossom ABA Therapy' },
  { src: '/logos/logo-p500.png', alt: 'ABA Provider' },
  { src: '/logos/mastermind.avif', alt: 'Mastermind' },
  { src: '/logos/link-margin.svg', alt: 'Link ABA' },
  { src: '/logos/cropped-logo.png', alt: 'ABA Therapy Provider' },
];

const SLOTS = 6;

function LogoBar() {
  const [slots, setSlots] = useState(() => Array.from({ length: SLOTS }, (_, i) => i));
  const [fadingSlot, setFadingSlot] = useState(-1);
  // Pool of logos not currently visible
  const poolRef = useRef(Array.from({ length: allLogos.length - SLOTS }, (_, i) => i + SLOTS));

  useEffect(() => {
    let currentSlot = 0;

    const timer = setInterval(() => {
      const slotToSwap = currentSlot % SLOTS;
      setFadingSlot(slotToSwap);

      // Swap logo while it's invisible, then fade back in
      setTimeout(() => {
        setSlots((prev) => {
          const next = [...prev];
          const pool = poolRef.current;
          if (pool.length === 0) return next;
          const newLogoIdx = pool.shift()!;
          pool.push(prev[slotToSwap]);
          next[slotToSwap] = newLogoIdx;
          return next;
        });
        // Small delay before fading in so new image loads
        setTimeout(() => setFadingSlot(-1), 50);
      }, 500);

      currentSlot++;
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: '40px 36px', borderBottom: '1px solid var(--gray-200)' }}>
      <p className="rv-left" style={{ fontSize: 'var(--text-label)', fontWeight: 600, color: 'var(--gray-400)', textTransform: 'uppercase', letterSpacing: '2.5px', textAlign: 'center', marginBottom: 28 }}>
        Helping providers connect thousands of families to care — every day
      </p>
      <div className="logo-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 44, flexWrap: 'wrap' }}>
        {slots.map((logoIdx, i) => {
          const logo = allLogos[logoIdx];
          return (
            <div key={i} className={i >= 5 ? 'hide-mobile-logo' : ''}
              style={{ height: 40, width: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxHeight: 40, maxWidth: 140, objectFit: 'contain',
                  opacity: fadingSlot === i ? 0 : 0.7,
                  transform: fadingSlot === i ? 'translateY(4px)' : 'translateY(0)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── PROBLEM ─────────────────────────────────────
function Problem() {
  return (
    <section style={{ backgroundColor: 'var(--green-900)', color: '#fff', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div className="rv-left"><Pill dark>What's actually happening</Pill></div>

        <div className="rv-left d1" style={{ marginBottom: 80 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, lineHeight: 1.12, color: '#fff', maxWidth: 720 }}>
            A parent calls your office at 6pm. No one picks up. They try a web form — it's four pages long. They text your intake number — no response until Monday.
          </h2>
          <p style={{ fontSize: 'var(--text-body)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 520, marginTop: 24 }}>
            By then, they've already called someone else. Your team never even knew they existed.
          </p>
        </div>

        {/* Stats with subheads — staggered scale-pop */}
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { val: 70, suf: '%', label: '', head: 'Gone before you start.', desc: 'of families abandon intake before completion. They wanted help. The process lost them.' },
            { val: 5, suf: '+', label: '', head: 'Duct tape and prayer.', desc: 'fragmented tools — forms, phone, email, CRM, fax — none of them talking to each other.' },
            { val: 0, suf: '', label: 'Days', head: 'By then it\'s too late.', desc: 'of manual follow-up per case. Your team is chasing paperwork instead of helping families.' },
          ].map((s, i) => (
            <div key={s.desc} className={`rv-scale d${i + 1}`} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius)', padding: '44px 32px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 60, color: 'var(--sage-200)', lineHeight: 1, marginBottom: 8 }}>
                {s.label || <Counter target={s.val} suffix={s.suf} />}
              </div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: '#fff', marginBottom: 8 }}>{s.head}</div>
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
    time: '11:14 PM',
    scenario: 'A parent texts your intake number.',
    title: 'Carelu answers. Instantly.',
    desc: "No hold music. No voicemail. No \"we'll get back to you.\" Whether it's chat, phone, SMS, a web form, or even a fax — Carelu responds in under 3 seconds with a warm, intelligent conversation in English or Spanish.",
    pills: ['Chat', 'Phone', 'SMS', 'Forms', 'Fax'],
    mockup: 'chat',
  },
  {
    time: '11:16 PM',
    scenario: '"We have Blue Cross."',
    title: 'Lead qualified. In 14 seconds.',
    desc: "Carelu checks insurance, age, diagnosis status, location, and more — all during the conversation. Qualified leads move forward instantly. Unqualified ones get flagged before your team spends a minute on them.",
    pills: ['Insurance', 'Age', 'Diagnosis', 'Location'],
    mockup: 'eligibility',
  },
  {
    time: 'Day 0 – Day 2',
    scenario: 'Every document, collected automatically.',
    title: 'Documentation handled for you.',
    desc: "Insurance cards, diagnosis reports, consent forms, HIPAA authorization — collected via text. Progress tracked automatically. Case marked intake-ready when complete.",
    pills: ['Auto-collect', 'Text uploads', 'Progress tracking'],
    mockup: 'documentation',
  },
  {
    time: 'Day 1, 9 AM',
    scenario: 'One document is still missing.',
    title: "Carelu follows up. Your team doesn't have to.",
    desc: "Friendly text nudges, reminders, and follow-ups — all automatic. Your team only sees fully prepared, ready-for-assessment cases.",
    pills: ['SMS nudges', 'Full timeline', 'Ready for assessment'],
    mockup: 'followup',
  },
];

/**
 * Sequential transition: fade out → swap content → fade in.
 * Container always wraps the displayed content exactly — no overlap, no empty space.
 */
function useSequentialSwap(value: number, fadeOutMs: number = 280) {
  const [displayed, setDisplayed] = useState(value);
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  useEffect(() => {
    if (value === displayed) return;
    setPhase('out');
    const t = setTimeout(() => {
      setDisplayed(value);
      setPhase('in');
    }, fadeOutMs);
    return () => clearTimeout(t);
  }, [value, displayed, fadeOutMs]);
  return { displayed, phase };
}

function StickyTour() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { displayed: mockupIdx, phase } = useSequentialSwap(activeIdx, 280);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActiveIdx(idx);
        }
      });
    }, { threshold: 0.15, rootMargin: '-35% 0px -35% 0px' });
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
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--green-800)', marginBottom: 16 }}>Lead qualified — 14 seconds</div>
        {[
          'Blue Cross Blue Shield — Active',
          'ABA therapy — Covered',
          'Age eligible (4 years old)',
          'Diagnosis on file — ASD',
          'Location — Tampa, FL (in service area)',
          'In-network provider available',
        ].map((t) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, padding: '10px 14px', background: 'var(--sage-50)', borderRadius: 'var(--radius-sm)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            <span style={{ fontSize: 13, color: 'var(--gray-600)' }}>{t}</span>
          </div>
        ))}
      </div>
    ),
    documentation: (
      <div style={{ background: '#fff', borderRadius: 'var(--radius-sm)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {/* Progress bar */}
        <div style={{ height: 6, borderRadius: 3, background: 'var(--sage-100)', marginBottom: 24 }}>
          <div style={{ height: 6, borderRadius: 3, background: 'var(--green-600)', width: '100%' }} />
        </div>
        {[
          { name: 'Insurance card — front', icon: '📷' },
          { name: 'Insurance card — back', icon: '📷' },
          { name: 'Autism diagnosis report', icon: '📄' },
          { name: 'Consent for treatment', icon: '📄' },
          { name: 'HIPAA authorization', icon: '📄' },
        ].map((doc) => (
          <div key={doc.name} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 18px', marginBottom: 8,
            background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--gray-200)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{doc.icon}</div>
              <span style={{ fontSize: 14, color: 'var(--gray-600)', fontWeight: 500 }}>{doc.name}</span>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
        ))}
        {/* Final status */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 18px', marginTop: 4,
          background: 'rgba(74, 122, 78, 0.08)', borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(74, 122, 78, 0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--green-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <span style={{ fontSize: 14, color: 'var(--green-700)', fontWeight: 600 }}>Case marked intake-ready</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
      </div>
    ),
    followup: (
      <div style={{ background: '#fff', borderRadius: 'var(--radius-sm)', padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        {/* Browser chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--gray-200)' }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
          <span style={{ fontSize: 11, color: 'var(--gray-400)', marginLeft: 8 }}>carelu.ai / bright-horizons / case-timeline</span>
        </div>
        {/* Timeline — 4 steps, no emojis */}
        {[
          { text: 'Family started intake via chat', time: 'Day 0, 3:12 PM', type: 'default' as const },
          { text: 'SMS sent: "Hi Maria, we just need Lucas\'s diagnosis report to finish up."', time: 'Day 1, 9:00 AM', type: 'nudge' as const },
          { text: 'Maria uploaded diagnosis report via text', time: 'Day 1, 11:42 AM', type: 'default' as const },
          { text: 'Ready for assessment', time: 'Day 2, 10:16 AM', type: 'success' as const },
        ].map((e, i, arr) => {
          const isSuccess = e.type === 'success';
          // Each row gets progressively more saturated green to show progress
          const rowBg = ['var(--sage-50)', 'var(--sage-100)', 'var(--sage-200)', 'var(--sage-300)'][i];
          const rowText = ['var(--gray-600)', 'var(--green-800)', 'var(--green-800)', 'var(--green-900)'][i];
          return (
            <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
              {/* Left rail: only the final row has a checkmark; others are connected by a line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28, flexShrink: 0 }}>
                {isSuccess ? (
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'var(--green-800)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                ) : (
                  <div style={{ width: 28, height: 28 }} />
                )}
                {i < arr.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 16, background: 'var(--sage-200)' }} />}
              </div>
              <div style={{
                flex: 1, borderRadius: 'var(--radius-sm)', padding: '12px 16px',
                background: rowBg,
                border: isSuccess ? '1px solid rgba(27,46,30,0.18)' : 'none',
              }}>
                <div style={{ fontSize: 13, color: rowText, lineHeight: 1.45, fontWeight: isSuccess ? 600 : 400 }}>{e.text}</div>
                <div style={{ fontSize: 11, color: 'var(--gray-400)', marginTop: 3 }}>{e.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    ),
  };

  return (
    <section id="platform" style={{ paddingTop: 'var(--section-py)', paddingBottom: 40 }}>
      <div style={W}>
        <div className="rv-left"><Pill>See it happen</Pill></div>
        <h2 className="rv-left d1" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, maxWidth: 600, marginBottom: 80 }}>
          One family. One night. Start to finish.
        </h2>

        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div className="tour-sticky" style={{ position: 'sticky', top: 120, alignSelf: 'start' }}>
            <div style={{ background: 'var(--sage-50)', borderRadius: 'var(--radius)', padding: 28 }}>
              {/*
                Sequential fade: current mockup fades out (280ms), content swaps,
                new mockup fades in (380ms). The card wraps the one displayed
                mockup at all times, so no empty sage-green ever shows.
              */}
              <div
                style={{
                  opacity: phase === 'out' ? 0 : 1,
                  transform: phase === 'out' ? 'translateY(6px) scale(0.99)' : 'translateY(0) scale(1)',
                  transition: phase === 'out'
                    ? 'opacity 0.28s ease-out, transform 0.28s ease-out'
                    : 'opacity 0.38s cubic-bezier(0.16, 1, 0.3, 1), transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {mockups[tourSteps[mockupIdx].mockup]}
              </div>
            </div>
          </div>
          <div className="tour-steps-col">
            {tourSteps.map((step, i) => (
              <div key={step.title} ref={(el) => { stepRefs.current[i] = el; }}
                style={{
                  minHeight: '80vh',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  paddingBottom: i < tourSteps.length - 1 ? 80 : 0,
                  opacity: activeIdx === i ? 1 : 0.2,
                  transform: activeIdx === i ? 'none' : 'translateY(8px)',
                  transition: 'opacity 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--green-600)', letterSpacing: '1px', marginBottom: 6 }}>{step.time}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--gray-500)', marginBottom: 20 }}>{step.scenario}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--green-900)', lineHeight: 1.2, marginBottom: 16 }}>{step.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.7, marginBottom: 24, maxWidth: 420 }}>{step.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {step.pills.map((p) => (
                    <span key={p} style={{ fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--green-800)', background: 'var(--sage-100)', padding: '5px 14px', borderRadius: 'var(--radius-pill)' }}>{p}</span>
                  ))}
                </div>
                {/* Inline mockup for mobile */}
                <div className="tour-mockup-inline" style={{ display: 'none', background: 'var(--sage-50)', borderRadius: 'var(--radius)', padding: 20 }}>
                  {mockups[step.mockup]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS — clean vertical list with drawing dividers ──
function HowItWorks() {
  const steps = [
    { n: '01', t: 'They reach out', d: 'Chat, phone, text, form, fax — whatever feels right to them. Carelu answers in under 3 seconds.' },
    { n: '02', t: 'We qualify', d: 'Insurance verified in real time. Eligibility confirmed. Red flags caught before they become problems.' },
    { n: '03', t: 'We collect', d: 'Insurance cards, diagnosis reports, consent forms — gathered in the conversation. No portals. No email chains.' },
    { n: '04', t: 'We follow up', d: "Something missing? Carelu texts, emails, and nudges — with the warmth of a person and the persistence of a machine." },
    { n: '05', t: 'You take over', d: 'Your clinical team gets a complete, organized, intake-ready case. They pick up where we left off.' },
  ];

  return (
    <section id="how-it-works" style={{ paddingTop: 'calc(var(--section-py) + 80px)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>The process</Pill>
        <h2 className="rv-left" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, marginBottom: 72, maxWidth: 500 }}>
          From first contact to admitted patient.
        </h2>
        <div style={{ maxWidth: 860 }}>
          {steps.map((s, i) => (
            <div key={s.n}>
              <div className={`rv-left d${i + 1} step-row`} style={{ display: 'grid', gridTemplateColumns: '48px 180px 1fr', gap: 24, alignItems: 'baseline', padding: '30px 0' }}>
                <span className="step-num" style={{ fontSize: 'var(--text-xs)', color: 'var(--gray-400)', fontWeight: 600 }}>{s.n}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--green-900)' }}>{s.t}</span>
                <span style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.65 }}>{s.d}</span>
              </div>
              {i < steps.length - 1 && <div className="step-divider" style={{ animationDelay: `${(i + 1) * 0.08}s` }} />}
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
        <Pill>What changes</Pill>
        <h2 className="rv-scale" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', marginBottom: 64 }}>
          The results speak louder than we can.
        </h2>
        {/* Live counter — compact card, green border */}
        <LiveCounter />

        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { v: 3, s: '×', t: 'More families admitted', d: 'Same team. Same hours. Triple the output.' },
            { v: 10, s: ' min', t: 'First contact to intake-ready', p: '<', d: 'What used to take 3–5 days.' },
            { v: 85, s: '%', t: 'Family completion rate', d: 'Industry average is under 30%.' },
            { v: 0, s: '', t: 'Manual follow-ups', d: 'Your team focuses on care, not chasing.' },
          ].map((s, i) => (
            <div key={s.t} className={`rv-scale d${i + 1} card-lift`} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '44px 28px' }}>
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
  const testimonials = [
    {
      quote: "We were losing 60% of families before they ever completed intake. Carelu brought that number under 15% in the first month.",
      name: 'Maria C.',
      role: 'Clinical Director',
      company: 'Bright Horizons ABA',
      detail: '6 locations, Southeast US',
      initials: 'MC',
      logo: '/logos/golden-care.png',
    },
    {
      quote: "Our coordinators used to spend 80% of their day chasing missing documents. With Carelu, they actually help families get started with care.",
      name: 'James T.',
      role: 'VP of Operations',
      company: 'Cross River Therapy',
      detail: '12 locations, Northeast US',
      initials: 'JT',
      logo: '/logos/cross-river.png',
    },
    {
      quote: "A parent texted us at 11pm on a Saturday. By Monday morning, their child was already scheduled for an assessment. That never happened before Carelu.",
      name: 'Rachel M.',
      role: 'Director of Admissions',
      company: 'Strive ABA Therapy',
      detail: '8 locations, Mid-Atlantic',
      initials: 'RM',
      logo: '/logos/strive-aba.png',
    },
  ];

  return (
    <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <Pill>What providers say</Pill>
        <h2 className="rv-left" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, maxWidth: 600, marginBottom: 64 }}>
          Don't take our word for it.
        </h2>

        {/* Testimonial cards */}
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 64 }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`rv d${i + 1} card-lift`} style={{
              background: i === 0 ? 'var(--green-900)' : 'var(--sage-50)',
              borderRadius: 'var(--radius)', padding: '40px 32px',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              minHeight: 320,
            }}>
              <blockquote style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)',
                fontStyle: 'italic', lineHeight: 1.3,
                color: i === 0 ? '#fff' : 'var(--green-900)',
                margin: 0, marginBottom: 32,
              }}>
                "{t.quote}"
              </blockquote>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: i === 0 ? 'rgba(255,255,255,0.15)' : 'var(--sage-200)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 13,
                    color: i === 0 ? '#fff' : 'var(--green-800)',
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: i === 0 ? '#fff' : 'var(--green-900)' }}>{t.name}, {t.role}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: i === 0 ? 'rgba(255,255,255,0.5)' : 'var(--gray-400)' }}>{t.company} — {t.detail}</div>
                  </div>
                </div>
                <img src={t.logo} alt={t.company} style={{ height: 24, objectFit: 'contain', opacity: i === 0 ? 0.5 : 0.6, filter: i === 0 ? 'invert(1) brightness(2)' : 'none' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Supporting proof stats */}
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {[
            { stat: '60% → 15%', desc: 'Family drop-off rate, first month with Carelu' },
            { stat: '24/7', desc: 'Families get a response — even at 11pm on a Saturday' },
            { stat: '80%', desc: 'Less time spent chasing documents and follow-ups' },
          ].map((s, i) => (
            <div key={s.stat} className={`rv-scale d${i + 3} card-lift`} style={{ background: 'var(--sage-50)', borderRadius: 'var(--radius)', padding: '36px 28px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--green-800)', marginBottom: 8 }}>{s.stat}</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--gray-500)', lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PRODUCT VIDEO ────────────────────────────────
function ProductVideo() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div className="rv-scale" style={{
          borderRadius: 'var(--radius)', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(27, 46, 30, 0.12)',
          border: '1px solid var(--gray-200)',
          position: 'relative',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', display: 'block' }}
          >
            <source src="/product/demo-compressed.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="rv d2" style={{ textAlign: 'center', fontSize: 'var(--text-sm)', color: 'var(--gray-400)', marginTop: 16 }}>
          See Carelu handle a real intake — from first message to admitted patient.
        </p>
      </div>
    </section>
  );
}

// ── COMPLIANCE ───────────────────────────────────
function Compliance() {
  return (
    <section style={{ background: 'var(--gray-50)', paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80 }}>
          <div className="rv-left">
            <Pill>Built for healthcare</Pill>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12 }}>
              Your compliance team will love us.
            </h2>
          </div>
          <div className="compliance-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
            {[
              'HIPAA-compliant with end-to-end encryption',
              'BAAs signed before you go live',
              'SOC 2 Type II audited annually',
              'US-based data centers — no offshore processing',
              'Payer-compliant communication — fewer denials',
              'Role-based access controls for all PHI',
            ].map((item, i) => (
              <div key={item} className={`rv-right d${i + 1}`} style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
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
    { q: 'Will this replace our intake team?', a: "No — and that's the point. Carelu handles the repetitive parts (eligibility checks, document collection, follow-ups) so your team can spend their time on clinical work and complex cases." },
    { q: 'How long until we\'re live?', a: 'Most providers go live within 1–2 weeks. We handle setup, configure your insurance rules and conversation flows, and train your team.' },
    { q: 'What if a family needs a real person?', a: 'Carelu hands off to your team with full context — everything collected so far, the family\'s preferences, and a summary of the conversation.' },
    { q: 'What does this actually cost?', a: 'We price based on volume and channels. Most providers see positive ROI within the first month. Book a demo and we\'ll walk through pricing for your setup.' },
  ];

  return (
    <section id="faq" style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div style={W}>
        <div className="mobile-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
          <div className="rv-left">
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
              <div key={i} className={`rv-right d${Math.min(i + 1, 5)}`} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-label={`${open === i ? 'Collapse' : 'Expand'}: ${f.q}`} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '26px 0', border: 'none', background: 'none', textAlign: 'left', gap: 16 }}>
                  <span style={{ fontSize: 'var(--text-body)', fontWeight: 500, color: 'var(--black)' }}>{f.q}</span>
                  <span aria-hidden="true" style={{ fontSize: 20, color: 'var(--gray-400)', transition: 'transform 0.3s var(--ease-dramatic)', display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
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
        <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16, maxWidth: 1200, margin: '0 auto' }}>
          <div className="rv-left" style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius)', padding: 'clamp(48px, 6vw, 72px)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 400, color: 'var(--green-900)', lineHeight: 1.12, marginBottom: 20 }}>
              Somewhere right now, a parent is searching for care for their child.
            </h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--gray-500)', lineHeight: 1.7, maxWidth: 460 }}>
              Let's make sure they find you — and that when they do, someone's there.
            </p>
          </div>
          <a href="/demo" style={{
            background: 'var(--green-800)', borderRadius: 'var(--radius)', padding: '44px 40px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            textDecoration: 'none', transition: 'background-color 0.3s, transform 0.3s',
            position: 'relative', overflow: 'hidden', minHeight: 220,
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-700)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--green-800)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Subtle gradient overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.04) 100%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.45)', letterSpacing: '1px', textTransform: 'uppercase' }}>Live in 2 weeks · No engineering needed</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 36px)', color: '#fff', marginTop: 16, lineHeight: 1.15 }}>
                See how it works for your practice.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>Request a Demo</span>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </a>
        </div>
      </section>
      <footer style={{ ...W, padding: '48px 36px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="dot-pulse" style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--green-600)', display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--gray-400)', letterSpacing: '-0.6px' }}>carelu</span>
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
      <ScrollProgress />
      <Nav />
      <Hero />
      <LogoBar />
      <Marquee />
      <Problem />
      <Promise />
      <ProductVideo />
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
