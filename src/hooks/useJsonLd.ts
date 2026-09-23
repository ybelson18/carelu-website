import { useEffect } from 'react';
import { ssrHead } from '../lib/ssrHead';

/* Injects one JSON-LD <script id={id}> into <head> for the life of the page.
   During prerender (SSR) it records the data instead, so crawlers that never
   run JS still get the structured data in the static HTML; the prerendered tag
   carries the same id, so the client replaces it rather than duplicating it.
   Pass null to render nothing (e.g. while data is loading). */
export function useJsonLd(id: string, data: object | null) {
  const json = data ? JSON.stringify(data) : null;
  if (import.meta.env.SSR && json) ssrHead.jsonLd.push({ id, json });
  useEffect(() => {
    if (!json) return;
    document.getElementById(id)?.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = json;
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, [id, json]);
}
