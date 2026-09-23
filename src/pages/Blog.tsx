import DemoModalHost from '../components/DemoModal';
import { useReveal } from '../hooks/useReveal';
import { useSeo } from '../hooks/useSeo';
import { Nav } from './Landing';
import SiteFooter from '../components/SiteFooter';
import { allResources } from '../data/allResources';

/* ================================================================
   CARELU — BLOG (/blog)
   The hub for every /resources/<slug> article, grouped by topic.
   Articles keep their /resources URLs (already indexed); this page
   only lists them. Built from allResources, so a new article shows
   up here on its own — in its topic if its slug is in TOPICS below,
   otherwise under "More guides".
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const MUTED = 'rgba(43,42,38,0.62)';
const RULE = 'rgba(26,26,26,0.14)';
const SERIF = 'var(--font-display)';
const W: React.CSSProperties = { maxWidth: 1120, margin: '0 auto', padding: '0 clamp(20px, 4.5vw, 40px)' };

interface Topic { title: string; blurb: string; slugs: string[]; extras?: { href: string; title: string; desc: string; pill: string }[] }

const TOPICS: Topic[] = [
  {
    title: 'Growing your practice',
    blurb: 'Where ABA families come from, and how to win more of them.',
    slugs: ['how-to-grow-an-aba-practice', 'google-ads-for-aba', 'meta-ads-for-aba', 'seo-for-aba-practices', 'aba-pediatrician-referrals', 'ai-for-aba-practices'],
  },
  {
    title: 'Intake and operations',
    blurb: 'Getting a family from first contact to first session.',
    slugs: ['aba-client-intake-process', 'aba-intake-drop-off', 'aba-intake-forms', 'aba-follow-up-sequences', 'after-hours-intake-coverage', 'aba-waitlist-management', 'aba-intake-metrics', 'best-aba-intake-software'],
  },
  {
    title: 'Payers, billing and records',
    blurb: 'Coverage rules, codes and the documents an authorization needs.',
    slugs: ['aba-cpt-codes', 'aba-records-request', 'aba-evaluation-referrals'],
    extras: [
      { href: '/payers', pill: 'Directory · Payers', title: 'The ABA payer directory', desc: 'Coverage, prior-auth and diagnosis rules for 160+ Medicaid and commercial plans across 19 states, with sources.' },
    ],
  },
  {
    title: 'Research and free tools',
    blurb: 'Our own data, and tools you can use today.',
    slugs: [],
    extras: [
      { href: '/research/the-intake-gap', pill: 'Research', title: 'The Intake Gap', desc: '185,054 family conversations across 120 ABA providers: when families reach out, what they ask, and where they are lost.' },
      { href: '/tools/intake-leak-calculator', pill: 'Tool', title: 'Intake leak calculator', desc: 'What the families you lose between inquiry and first session are worth per year.' },
      { href: '/resources/pediatrician-referral-contacts', pill: 'Dataset', title: 'Pediatric referral contacts', desc: '150,325 pediatricians and child-development professionals across all 50 states, free to download.' },
    ],
  },
];

interface Card { href: string; pill: string; title: string; desc: string }

function toCard(slug: string): Card | null {
  const r = allResources[slug];
  return r ? { href: `/resources/${slug}`, pill: r.pill, title: r.h1, desc: r.metaDescription } : null;
}

function ArticleCard({ c }: { c: Card }) {
  return (
    <a href={c.href} className="blog-card rv" style={{
      display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit',
      background: '#fff', borderRadius: 18, padding: 'clamp(20px, 2.6vw, 28px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03)',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GREEN, marginBottom: 12 }}>{c.pill}</div>
      <h3 className="blog-hed" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: 'clamp(20px, 1.9vw, 24px)', lineHeight: 1.22, letterSpacing: '-0.01em', color: INK, margin: '0 0 12px' }}>{c.title}</h3>
      <p style={{ fontSize: 14.5, color: MUTED, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
    </a>
  );
}

export default function Blog() {
  useReveal();
  useSeo({
    title: 'The Carelu Blog — Growing an ABA Practice, Intake, Payers and AI',
    description:
      'Practical guides for ABA practice owners: marketing and referrals, intake and follow-up, payer rules and CPT codes, and how to use AI in the front office.',
    canonical: '/blog',
  });

  const listed = new Set(TOPICS.flatMap((t) => t.slugs));
  // Reference pages with their own hub (state referral directories) stay out of "More".
  const more = Object.keys(allResources).filter((s) => !listed.has(s) && !s.startsWith('pediatrician-referral-contacts'));
  const topics: Topic[] = more.length
    ? [...TOPICS, { title: 'More guides', blurb: 'Everything else we have written.', slugs: more }]
    : TOPICS;

  return (
    <div className="session-light" style={{ background: BONE, color: '#2B2A26', minHeight: '100vh' }}>
      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr)); gap: 16px; }
        .blog-card { transition: transform 0.2s, box-shadow 0.2s; }
        .blog-card:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.03); }
        .blog-card .blog-hed { transition: color 0.2s; }
        .blog-card:hover .blog-hed { color: ${GREEN}; }
      `}</style>
      <DemoModalHost />
      <Nav base="/carelu" />

      <header style={{ paddingTop: 'clamp(120px, 14vw, 170px)' }}>
        <div style={W}>
          <h1 className="rv-scale d1" style={{
            fontFamily: SERIF, fontWeight: 400, color: INK,
            fontSize: 'clamp(44px, 7vw, 88px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0,
          }}>The Carelu Blog</h1>
          <p className="rv d2" style={{ fontSize: 'clamp(17px, 1.7vw, 20px)', color: MUTED, lineHeight: 1.6, maxWidth: 640, margin: '18px 0 0' }}>
            Practical guides for ABA practice owners: how to grow, how to run intake, how payers work, and where AI helps.
          </p>
        </div>
      </header>

      <main style={{ paddingTop: 'clamp(24px, 4vw, 48px)', paddingBottom: 'clamp(56px, 7vw, 96px)' }}>
        <div style={W}>
          {topics.map((t) => {
            const cards = [...t.slugs.map(toCard).filter((c): c is Card => c !== null), ...(t.extras ?? [])];
            if (!cards.length) return null;
            return (
              <section key={t.title} style={{ borderTop: `1px solid ${RULE}`, marginTop: 'clamp(36px, 5vw, 56px)', paddingTop: 'clamp(28px, 4vw, 40px)' }}>
                <h2 className="rv" style={{ fontFamily: SERIF, fontWeight: 400, color: INK, fontSize: 'clamp(26px, 3vw, 36px)', letterSpacing: '-0.015em', margin: '0 0 6px' }}>{t.title}</h2>
                <p className="rv" style={{ fontSize: 15.5, color: MUTED, margin: '0 0 22px' }}>{t.blurb}</p>
                <div className="blog-grid">
                  {cards.map((c) => <ArticleCard key={c.href} c={c} />)}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
