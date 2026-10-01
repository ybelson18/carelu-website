import { useEffect, useState } from 'react';

/* A grid of real product screens. Click one to see it full size. */

const INK = '#1A1A1A';

export type Shot = { src: string; title: string; caption: string; alt: string };

export default function ProductGallery({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen(n => (n === null ? n : (n + 1) % shots.length));
      if (e.key === 'ArrowLeft') setOpen(n => (n === null ? n : (n - 1 + shots.length) % shots.length));
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, shots.length]);

  return (
    <>
      <div className="pg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
        {shots.map((s, i) => (
          <button key={s.src} onClick={() => setOpen(i)} className={`rv d${(i % 4) + 1}`} style={{
            textAlign: 'left', cursor: 'zoom-in', fontFamily: 'inherit', padding: 0, border: 'none',
            background: '#fff', borderRadius: 22, overflow: 'hidden',
            boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
          }}>
            <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', background: '#F3F0E8', borderBottom: '1px solid rgba(43,42,38,0.06)' }}>
              <img src={s.src} alt={s.alt} loading="lazy" className="pg-img" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block', transition: 'transform 0.5s cubic-bezier(.16,1,.3,1)' }} />
            </div>
            <div style={{ padding: '18px 22px 22px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: INK, lineHeight: 1.2 }}>{s.title}</div>
              <div style={{ fontSize: 14.5, color: 'rgba(43,42,38,0.62)', lineHeight: 1.6, marginTop: 6 }}>{s.caption}</div>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label={shots[open].title} onClick={() => setOpen(null)} style={{
          position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(20,24,20,0.82)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px, 4vw, 48px)',
        }}>
          <img src={shots[open].src} alt={shots[open].alt} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '100%', maxHeight: '82vh', borderRadius: 12, boxShadow: '0 30px 80px rgba(0,0,0,0.4)', background: '#fff' }} />
          <div onClick={(e) => e.stopPropagation()} style={{ color: '#FAF8F3', marginTop: 16, textAlign: 'center', maxWidth: 720 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22 }}>{shots[open].title}</div>
            <div style={{ fontSize: 14, opacity: 0.8, marginTop: 4 }}>{shots[open].caption}</div>
          </div>
          <button onClick={() => setOpen(null)} aria-label="Close" style={{ position: 'absolute', top: 18, right: 22, background: 'none', border: 'none', color: '#FAF8F3', fontSize: 30, cursor: 'pointer', lineHeight: 1 }}>×</button>
        </div>
      )}

      <style>{`
        button:hover .pg-img { transform: scale(1.03); }
        @media (max-width: 768px) { .pg-grid { grid-template-columns: 1fr !important; } }
        @media (prefers-reduced-motion: reduce) { .pg-img { transition: none !important; } }
      `}</style>
    </>
  );
}
