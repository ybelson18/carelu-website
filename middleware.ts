import { rewrite } from '@vercel/edge';

/* ============================================================================
   Serve leadtrap.com's own prerendered homepage at /.

   vercel.json rewrites the other leadtrap.com paths (/privacy, /terms) to their
   static files, but the same trick cannot work for "/": Vercel checks the
   filesystem BEFORE applying rewrites, and dist/index.html — the Carelu entry —
   exists at that path, so a `"source": "/"` rewrite is never consulted. The
   symptom is invisible in a browser, because both HTML shells boot the same
   React app; it only shows in the raw response, which is exactly what the
   carrier/TCR compliance scanner reads.

   Middleware runs ahead of the filesystem check, so it is the one place this
   swap can happen. Scoped to "/" alone — every other path, and every request
   to carelu.com, falls through untouched.
   ============================================================================ */

export const config = { matcher: '/' };

export default function middleware(request: Request): Response | undefined {
  try {
    const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();
    if (/(^|\.)leadtrap\.com$/.test(host)) {
      return rewrite(new URL('/leadtrap.html', request.url));
    }
  } catch {
    // Never let this take the homepage down: falling through serves the SPA
    // shell, which is what / did before this file existed.
  }
  return undefined;
}
