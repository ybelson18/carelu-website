import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { GUIDES } from '../data/partnerGuides';
import type { GuideBlock } from '../data/partnerGuides';

/* ================================================================
   CARELU — PARTNER GUIDE (/guides/:slug)
   A how-to for one clinic: where to click in Carelu for the things
   we set up with them. Content lives in data/partnerGuides.ts.

   Unlisted page — NO marketing nav, noindex, not in the sitemap.
   Visual language matches /sources (sage green, bone, soft cards).
   ================================================================ */

const INK = '#1A1A1A';
const BONE = '#FAF8F3';
const GREEN = '#3f7a34';
const HAIR = 'rgba(43,42,38,0.10)';
const MUTE = 'rgba(43,42,38,0.62)';

const CSS = `
.pg { background: ${BONE}; color: ${INK}; min-height: 100vh; font-family: var(--font-body); }
.pg-wrap { max-width: 1120px; margin: 0 auto; padding: 48px 24px 96px; display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 56px; }
.pg-toc { position: sticky; top: 32px; align-self: start; font-size: 14px; }
.pg-toc a { display: block; padding: 6px 10px; border-radius: 8px; color: ${MUTE}; text-decoration: none; line-height: 1.35; }
.pg-toc a:hover { color: ${INK}; background: rgba(63,122,52,0.06); }
.pg-toc a.on { color: ${GREEN}; background: rgba(63,122,52,0.10); font-weight: 600; }
.pg-toc-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: ${MUTE}; padding: 0 10px 8px; }
.pg-head h1 { font-family: var(--font-display); font-weight: 500; font-size: 44px; line-height: 1.1; margin: 8px 0 12px; }
.pg-eyebrow { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: ${GREEN}; font-weight: 600; }
.pg-lede { font-size: 17px; line-height: 1.6; color: ${MUTE}; max-width: 62ch; margin: 0; }
.pg-sec { padding-top: 56px; scroll-margin-top: 24px; }
.pg-sec h2 { font-family: var(--font-display); font-weight: 500; font-size: 30px; margin: 0 0 8px; }
.pg-sec > p { font-size: 16px; line-height: 1.6; color: ${MUTE}; margin: 0 0 20px; max-width: 64ch; }
.pg-card { background: #fff; border: 1px solid ${HAIR}; border-radius: 16px; padding: 22px 24px; margin-bottom: 14px; }
.pg-card h3 { font-size: 17px; font-weight: 600; margin: 0 0 10px; }
.pg-card p, .pg-card li { font-size: 15px; line-height: 1.6; }
.pg-card p { margin: 0 0 10px; }
.pg-card p:last-child { margin-bottom: 0; }
.pg-path { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; margin: 0 0 12px; }
.pg-chip { font-size: 13px; font-weight: 600; background: rgba(63,122,52,0.09); color: ${GREEN}; border-radius: 999px; padding: 3px 11px; }
.pg-arrow { color: ${MUTE}; font-size: 13px; }
.pg-steps { margin: 0; padding-left: 22px; }
.pg-steps li { margin: 0 0 6px; }
.pg-steps b, .pg-card p b { font-weight: 600; }
.pg-note { border-left: 3px solid ${GREEN}; background: rgba(63,122,52,0.05); border-radius: 0 12px 12px 0; padding: 14px 18px; margin-top: 12px; font-size: 14.5px; line-height: 1.55; }
.pg-note-label { display: block; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: ${GREEN}; font-weight: 700; margin-bottom: 4px; }
.pg-ask { border-left-color: #b7791f; background: rgba(183,121,31,0.07); }
.pg-ask .pg-note-label { color: #9a6416; }
.pg-table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
.pg-table th { text-align: left; font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: ${MUTE}; font-weight: 600; padding: 0 12px 8px 0; border-bottom: 1px solid ${HAIR}; }
.pg-table td { padding: 10px 12px 10px 0; border-bottom: 1px solid ${HAIR}; vertical-align: top; line-height: 1.5; }
.pg-table tr:last-child td { border-bottom: 0; }
.pg-table td:first-child { font-weight: 600; white-space: nowrap; }
.pg-foot { margin-top: 64px; font-size: 14px; color: ${MUTE}; }
.pg-foot a { color: ${GREEN}; }
@media (max-width: 860px) {
  .pg-wrap { grid-template-columns: minmax(0, 1fr); padding: 28px 16px 72px; gap: 0; }
  .pg-toc { display: none; }
  .pg-head h1 { font-size: 34px; }
  .pg-card { padding: 18px 16px; }
  .pg-table td:first-child { white-space: normal; }
  .pg-table-scroll { overflow-x: auto; }
}
`;

function Block({ b }: { b: GuideBlock }) {
  return (
    <div className="pg-card">
      {b.title && <h3>{b.title}</h3>}
      {b.path && (
        <div className="pg-path" aria-label="Where to click">
          {b.path.map((p, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {i > 0 && <span className="pg-arrow">→</span>}
              <span className="pg-chip">{p}</span>
            </span>
          ))}
        </div>
      )}
      {b.body?.map((t, i) => <p key={i} dangerouslySetInnerHTML={{ __html: t }} />)}
      {b.steps && (
        <ol className="pg-steps">
          {b.steps.map((s, i) => <li key={i} dangerouslySetInnerHTML={{ __html: s }} />)}
        </ol>
      )}
      {b.table && (
        <div className="pg-table-scroll">
          <table className="pg-table">
            <thead><tr>{b.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {b.table.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} dangerouslySetInnerHTML={{ __html: c }} />)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {b.example && (
        <div className="pg-note"><span className="pg-note-label">How we set it up for you</span><span dangerouslySetInnerHTML={{ __html: b.example }} /></div>
      )}
      {b.ask && (
        <div className="pg-note pg-ask"><span className="pg-note-label">Ask Carelu</span><span dangerouslySetInnerHTML={{ __html: b.ask }} /></div>
      )}
    </div>
  );
}

export default function PartnerGuide() {
  const { slug = '' } = useParams();
  const guide = GUIDES[slug];
  const [active, setActive] = useState('');

  useSeo({
    title: guide ? `${guide.clinic} Guide · Carelu` : 'Guide · Carelu',
    description: 'How to use Carelu.',
    noindex: true,
  });

  useEffect(() => {
    if (!guide) return;
    const els = guide.sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '0px 0px -70% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [guide]);

  if (!guide) {
    return (
      <div className="pg"><style>{CSS}</style>
        <div style={{ padding: '96px 16px', textAlign: 'center', color: MUTE }}>This guide doesn't exist.</div>
      </div>
    );
  }

  return (
    <div className="pg">
      <style>{CSS}</style>
      <div className="pg-wrap">
        <nav className="pg-toc" aria-label="Contents">
          <div className="pg-toc-label">Contents</div>
          {guide.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'on' : ''}>{s.title}</a>
          ))}
        </nav>
        <main>
          <header className="pg-head">
            <div className="pg-eyebrow">Carelu guide · {guide.clinic}</div>
            <h1>{guide.title}</h1>
            <p className="pg-lede">{guide.lede}</p>
          </header>
          {guide.sections.map((s) => (
            <section key={s.id} id={s.id} className="pg-sec">
              <h2>{s.title}</h2>
              {s.intro && <p>{s.intro}</p>}
              {s.blocks.map((b, i) => <Block key={i} b={b} />)}
            </section>
          ))}
          <p className="pg-foot">
            Something not where this guide says, or something you want changed? Email{' '}
            <a href="mailto:support@carelu.com">support@carelu.com</a>. Last updated {guide.updated}.
          </p>
        </main>
      </div>
    </div>
  );
}
