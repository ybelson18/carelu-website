import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';
import { sortedNews, NEWS_TYPE_LABEL, type NewsItem } from '../data/news';

/* ================================================================
   CARELU — NEWS (/news)
   Coverage of Carelu, laid out like a newspaper front page: a
   masthead, the newest piece as the lead story (with its headline
   number beside it), and everything older as ruled briefs below.
   Content lives in src/data/news.ts; adding an article is a
   one-object edit there. Renders a press note while the list is
   empty so the footer link is never a dead end.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const MUTED = 'rgba(43,42,38,0.62)';
const FAINT = 'rgba(43,42,38,0.42)';
const RULE = 'rgba(26,26,26,0.14)';
const PRESS_EMAIL = 'press@carelu.com';

const W: React.CSSProperties = { maxWidth: 1120, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };
const SERIF = 'var(--font-display)';

const KICKER: React.CSSProperties = {
  fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: GREEN,
};

function formatDate(iso: string) {
  // Parse as UTC — `new Date('2026-08-14')` is UTC midnight, which renders as
  // the previous day west of Greenwich if formatted in local time.
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function Byline({ n }: { n: NewsItem }) {
  return (
    <div style={{ fontSize: 13, color: FAINT, lineHeight: 1.6 }}>
      {n.author && <span style={{ color: MUTED, fontWeight: 600 }}>By {n.author}</span>}
      {n.author && <span aria-hidden> · </span>}
      <span style={{ fontStyle: 'italic', fontFamily: SERIF, fontSize: 15 }}>{n.outlet}</span>
      <span aria-hidden> · </span>
      <time dateTime={n.date}>{formatDate(n.date)}</time>
    </div>
  );
}

function ReadLink({ n }: { n: NewsItem }) {
  const verb = n.type === 'podcast' ? 'Listen' : n.type === 'video' ? 'Watch' : 'Read';
  return (
    <span className="news-read" style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontSize: 13, fontWeight: 600, color: INK, letterSpacing: '0.02em',
    }}>
      {verb} in {n.outlet}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </span>
  );
}

function Kicker({ n }: { n: NewsItem }) {
  return (
    <div style={{ ...KICKER, marginBottom: 14 }}>
      {n.outlet}
      {n.type && n.type !== 'article' && (
        <span style={{ color: FAINT }}> · {NEWS_TYPE_LABEL[n.type]}</span>
      )}
    </div>
  );
}

function LeadStory({ n }: { n: NewsItem }) {
  return (
    <a href={n.url} target="_blank" rel="noreferrer" className="news-story news-lead rv" style={{ display: 'grid', textDecoration: 'none', color: 'inherit' }}>
      <div>
        <Kicker n={n} />
        <h2 className="news-hed" style={{
          fontFamily: SERIF, fontWeight: 500, color: INK,
          fontSize: 'clamp(32px, 4.4vw, 54px)', lineHeight: 1.06, letterSpacing: '-0.018em', margin: 0,
        }}>
          {n.title}
        </h2>
        {n.excerpt && (
          <p style={{
            fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(19px, 1.9vw, 23px)',
            color: 'rgba(43,42,38,0.78)', lineHeight: 1.45, margin: '20px 0 0', maxWidth: 640,
          }}>
            {n.excerpt}
          </p>
        )}
        <div style={{ marginTop: 22 }}><Byline n={n} /></div>
        <div style={{ marginTop: 22 }}><ReadLink n={n} /></div>
      </div>

      {n.stat && (
        <aside className="news-lead-stat" aria-label="From the article">
          <div style={{ ...KICKER, color: FAINT, marginBottom: 14 }}>From the article</div>
          <div style={{
            fontFamily: SERIF, fontWeight: 400, color: INK,
            fontSize: 'clamp(64px, 7.5vw, 104px)', lineHeight: 0.95, letterSpacing: '-0.03em',
          }}>
            {n.stat.value}
          </div>
          <p style={{ fontFamily: SERIF, fontSize: 20, color: MUTED, lineHeight: 1.35, margin: '14px 0 0' }}>
            {n.stat.label}
          </p>
        </aside>
      )}
    </a>
  );
}

function Brief({ n }: { n: NewsItem }) {
  return (
    <a href={n.url} target="_blank" rel="noreferrer" className="news-story news-brief rv" style={{ display: 'grid', textDecoration: 'none', color: 'inherit' }}>
      <div>
        <Kicker n={n} />
        <time dateTime={n.date} style={{ fontSize: 13, color: FAINT }}>{formatDate(n.date)}</time>
        {n.stat && (
          <div style={{ marginTop: 22 }}>
            <div style={{ fontFamily: SERIF, fontSize: 44, lineHeight: 1, color: INK, letterSpacing: '-0.02em' }}>{n.stat.value}</div>
            <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5, marginTop: 8, maxWidth: 220 }}>{n.stat.label}</div>
          </div>
        )}
      </div>
      <div>
        <h3 className="news-hed" style={{
          fontFamily: SERIF, fontWeight: 500, color: INK,
          fontSize: 'clamp(24px, 2.6vw, 32px)', lineHeight: 1.14, letterSpacing: '-0.012em', margin: 0,
        }}>
          {n.title}
        </h3>
        {n.excerpt && (
          <p style={{ fontFamily: SERIF, fontSize: 19, color: 'rgba(43,42,38,0.74)', lineHeight: 1.5, margin: '14px 0 0' }}>
            {n.excerpt}
          </p>
        )}
        <div style={{ marginTop: 16 }}><Byline n={n} /></div>
        <div style={{ marginTop: 16 }}><ReadLink n={n} /></div>
      </div>
    </a>
  );
}

function PressNote() {
  return (
    <div className="news-press rv" style={{ display: 'grid', borderTop: `3px double ${INK}`, paddingTop: 28 }}>
      <div style={{ ...KICKER, color: INK }}>For the press</div>
      <p style={{ fontFamily: SERIF, fontSize: 20, color: 'rgba(43,42,38,0.78)', lineHeight: 1.5, margin: 0 }}>
        Writing about intake, access to care, or AI in behavioral health? We&apos;re happy to share
        what the data from tens of thousands of family intakes shows. Reach us at{' '}
        <a href={`mailto:${PRESS_EMAIL}`} style={{ color: INK, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>{PRESS_EMAIL}</a>.
      </p>
    </div>
  );
}

export default function News() {
  useReveal();
  useSeo({
    title: 'News — Carelu in the Press',
    description:
      'Coverage of Carelu: articles, interviews, and announcements about the AI front office for behavioral health and home care intake.',
    canonical: '/news',
  });

  const items = sortedNews();
  const [lead, ...rest] = items;
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <style>{`
        .news-lead { grid-template-columns: minmax(0, 2.1fr) minmax(0, 1fr); gap: 56px; align-items: start; }
        .news-lead-stat { border-left: 1px solid ${RULE}; padding-left: 40px; }
        .news-brief { grid-template-columns: minmax(0, 1fr) minmax(0, 2.4fr); gap: 48px; }
        .news-press { grid-template-columns: minmax(0, 1fr) minmax(0, 2.4fr); gap: 48px; }
        .news-story .news-hed { transition: color 0.2s; }
        .news-story:hover .news-hed { color: ${GREEN}; }
        .news-story .news-read { border-bottom: 1px solid transparent; transition: border-color 0.2s; }
        .news-story:hover .news-read { border-color: currentColor; }
        @media (max-width: 800px) {
          .news-lead, .news-brief, .news-press { grid-template-columns: 1fr; gap: 24px; }
          .news-lead-stat { border-left: 0; padding-left: 0; border-top: 1px solid ${RULE}; padding-top: 24px; }
          .news-masthead-meta { justify-content: center !important; }
          .news-masthead-meta > :last-child { display: none; }
        }
      `}</style>
      <DemoModalHost />
      <Nav base="/carelu" />

      {/* Masthead */}
      <header style={{ paddingTop: 'clamp(120px, 14vw, 170px)' }}>
        <div style={W}>
          <div className="news-masthead-meta rv" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16,
            fontSize: 12, color: MUTED, paddingBottom: 12, borderBottom: `1px solid ${INK}`,
          }}>
            <span style={{ fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Carelu Press</span>
            <span>{today}</span>
          </div>
          <h1 className="rv-scale d1" style={{
            fontFamily: SERIF, fontWeight: 500, color: INK, textAlign: 'center',
            fontSize: 'clamp(52px, 9vw, 112px)', lineHeight: 1, letterSpacing: '-0.025em',
            margin: 0, padding: 'clamp(22px, 3vw, 34px) 0',
          }}>
            In the News
          </h1>
          <div className="rv d2" style={{
            borderTop: `3px double ${INK}`, borderBottom: `1px solid ${INK}`,
            padding: '11px 0', textAlign: 'center',
            fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(15px, 1.5vw, 18px)', color: MUTED,
          }}>
            What&apos;s been written about Carelu, and about the families still waiting for care.
          </div>
        </div>
      </header>

      <main style={{ paddingTop: 'clamp(40px, 5vw, 64px)', paddingBottom: 'clamp(56px, 7vw, 96px)' }}>
        <div style={W}>
          {lead ? (
            <>
              <LeadStory n={lead} />
              {rest.map((n) => (
                <div key={n.url} style={{ borderTop: `1px solid ${RULE}`, marginTop: 'clamp(40px, 5vw, 60px)', paddingTop: 'clamp(32px, 4vw, 44px)' }}>
                  <Brief n={n} />
                </div>
              ))}
            </>
          ) : (
            <p className="rv" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 22, color: MUTED, textAlign: 'center', margin: 0 }}>
              Coverage will appear here.
            </p>
          )}

          <div style={{ marginTop: 'clamp(56px, 7vw, 88px)' }}>
            <PressNote />
          </div>
        </div>
      </main>

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
    </div>
  );
}
