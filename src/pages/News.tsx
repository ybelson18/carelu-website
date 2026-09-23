import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';
import { sortedNews, NEWS_TYPE_LABEL, type NewsItem } from '../data/news';

/* ================================================================
   CARELU — NEWS (/news)
   Coverage of Carelu, laid out as a newsroom: the newest piece as a
   large featured tile, the next two stacked beside it, anything
   older in a grid below. Each tile is a brand image with the
   article's headline number set over it. Content lives in
   src/data/news.ts; adding an article is a one-object edit there.
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const MUTED = 'rgba(43,42,38,0.55)';
const PRESS_EMAIL = 'press@carelu.com';
const SERIF = 'var(--font-display)';

// Tiles without their own cover rotate through the site's imagery.
const DEFAULT_COVERS = ['/news/cover-sky.jpg', '/news/cover-hills.jpg', '/news/cover-neighborhood.jpg'];

const W: React.CSSProperties = { maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

function formatDate(iso: string) {
  // Parse as UTC — `new Date('2026-08-14')` is UTC midnight, which renders as
  // the previous day west of Greenwich if formatted in local time.
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function Tile({ n, index, size }: { n: NewsItem; index: number; size: 'lg' | 'sm' }) {
  const lg = size === 'lg';
  const cover = n.cover ?? DEFAULT_COVERS[index % DEFAULT_COVERS.length];
  return (
    <div className="news-tile" style={{
      position: 'relative', overflow: 'hidden', borderRadius: 16,
      aspectRatio: lg ? '16 / 10.5' : '16 / 9.5', background: '#8FB2BF',
    }}>
      <div className="news-tile-img" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,20,18,0.22) 0%, rgba(20,20,18,0.38) 100%)' }} />
      <div style={{
        position: 'relative', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff',
        padding: lg ? 'clamp(24px, 4vw, 48px)' : '20px 24px',
        textShadow: '0 1px 18px rgba(0,0,0,0.18)',
      }}>
        <div style={{ fontFamily: SERIF, fontSize: lg ? 'clamp(17px, 1.6vw, 21px)' : 15, opacity: 0.92, marginBottom: lg ? 'clamp(14px, 2vw, 24px)' : 10 }}>
          {n.outlet}
        </div>
        {n.stat ? (
          <>
            <div style={{
              fontFamily: SERIF, fontWeight: 400, lineHeight: 0.95, letterSpacing: '-0.025em',
              fontSize: lg ? 'clamp(72px, 10vw, 148px)' : 'clamp(48px, 5vw, 64px)',
            }}>
              {n.stat.value}
            </div>
            <div style={{
              fontSize: lg ? 'clamp(11px, 1vw, 13px)' : 10, fontWeight: 600, letterSpacing: '0.16em',
              textTransform: 'uppercase', marginTop: lg ? 18 : 10, maxWidth: lg ? 420 : 260, lineHeight: 1.6,
            }}>
              {n.stat.label}
            </div>
          </>
        ) : (
          <div style={{ fontFamily: SERIF, fontSize: lg ? 'clamp(30px, 3.4vw, 44px)' : 24, lineHeight: 1.15, maxWidth: '85%' }}>
            {n.type ? NEWS_TYPE_LABEL[n.type] : 'Article'}
          </div>
        )}
      </div>
    </div>
  );
}

function Story({ n, index, size }: { n: NewsItem; index: number; size: 'lg' | 'sm' }) {
  const lg = size === 'lg';
  return (
    <a href={n.url} target="_blank" rel="noreferrer" className={`news-story rv d${Math.min(index + 1, 5)}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <Tile n={n} index={index} size={size} />
      <h2 className="news-hed" style={{
        fontWeight: 500, color: INK, letterSpacing: '-0.01em',
        fontSize: lg ? 'clamp(24px, 2.5vw, 34px)' : 19, lineHeight: lg ? 1.2 : 1.35,
        margin: lg ? '22px 0 0' : '14px 0 0',
      }}>
        {n.title}
      </h2>
      <div style={{ fontSize: lg ? 15 : 14, color: MUTED, marginTop: lg ? 12 : 8 }}>
        {n.outlet} · <time dateTime={n.date}>{formatDate(n.date)}</time>
      </div>
    </a>
  );
}

export default function News() {
  useReveal();
  useSeo({
    title: 'Newsroom — Carelu in the Press',
    description:
      'Coverage of Carelu: articles, interviews, and announcements about the AI front office for behavioral health and home care intake.',
    canonical: '/news',
  });

  const items = sortedNews();
  const [featured, ...others] = items;
  const side = others.slice(0, 2);
  const more = others.slice(2);

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <style>{`
        .news-top { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: clamp(20px, 2.4vw, 32px); align-items: start; }
        .news-side { display: flex; flex-direction: column; gap: clamp(28px, 3vw, 40px); }
        .news-more { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(20px, 2.4vw, 32px); row-gap: 48px; }
        .news-tile-img { transition: transform 0.7s var(--ease-dramatic); }
        .news-story:hover .news-tile-img { transform: scale(1.035); }
        .news-story .news-hed { transition: opacity 0.2s; }
        .news-story:hover .news-hed { opacity: 0.72; }
        @media (max-width: 860px) {
          .news-top { grid-template-columns: 1fr; }
          .news-more { grid-template-columns: 1fr; }
        }
      `}</style>
      <DemoModalHost />
      <Nav base="/carelu" />

      <section style={{ paddingTop: 'clamp(130px, 15vw, 180px)', paddingBottom: 'clamp(28px, 3.5vw, 44px)' }}>
        <div style={W}>
          <h1 className="rv-scale" style={{
            fontFamily: SERIF, fontWeight: 400, color: INK,
            fontSize: 'clamp(48px, 6.6vw, 92px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0,
          }}>
            Newsroom
          </h1>
        </div>
      </section>

      <main style={{ paddingBottom: 'clamp(64px, 8vw, 110px)' }}>
        <div style={W}>
          {featured ? (
            <>
              <div className="news-top">
                <Story n={featured} index={0} size="lg" />
                {side.length > 0 && (
                  <div className="news-side">
                    {side.map((n, i) => <Story key={n.url} n={n} index={i + 1} size="sm" />)}
                  </div>
                )}
              </div>

              {more.length > 0 && (
                <div style={{ marginTop: 'clamp(64px, 8vw, 100px)' }}>
                  <h2 className="rv" style={{ fontFamily: SERIF, fontWeight: 400, color: INK, fontSize: 'clamp(28px, 3vw, 38px)', letterSpacing: '-0.015em', margin: '0 0 28px' }}>
                    More coverage
                  </h2>
                  <div className="news-more">
                    {more.map((n, i) => <Story key={n.url} n={n} index={i + 3} size="sm" />)}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="rv" style={{ fontSize: 17, color: MUTED, margin: 0 }}>Coverage will appear here.</p>
          )}

          <div className="rv" style={{
            marginTop: 'clamp(64px, 8vw, 100px)', paddingTop: 28, borderTop: '1px solid rgba(0,0,0,0.1)',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px 32px',
          }}>
            <div style={{ fontFamily: SERIF, fontSize: 'clamp(22px, 2.2vw, 28px)', color: INK }}>Press inquiries</div>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, margin: 0 }}>
              Writing about intake or access to care? Reach us at{' '}
              <a href={`mailto:${PRESS_EMAIL}`} style={{ color: INK, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>{PRESS_EMAIL}</a>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
