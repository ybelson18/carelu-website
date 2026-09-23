/* ================================================================
   PRERENDER — static HTML for every indexable route
   AI crawlers (GPTBot, ClaudeBot, PerplexityBot, ...) do not run JS, so
   the SPA shell alone gives them an empty <div id="root">. After
   `vite build` (client) and `vite build --ssr src/entry-server.tsx`,
   this script renders each route in public/sitemap.xml to HTML with its
   own <title>, meta, canonical and JSON-LD, and writes it to
   dist/<route>/index.html. Vercel serves those files before the SPA
   rewrite in vercel.json, and the browser app takes over on load.

   It also writes Markdown twins for AI readers:
     dist/payers/<slug>.md, dist/payers.md, dist/resources/<slug>.md,
     dist/llms-full.txt (llms.txt + every article + the payer index).

   `/` is left as the SPA shell: it is host-dependent (Carelu landing on
   carelu.com, the LeadTrap gateway elsewhere) and one static file can't
   serve both.
   ================================================================ */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const BASE = 'https://carelu.com';

// Routes the sitemap lists that must NOT be prerendered: `/` (host-dependent)
// and the policy pages vercel.json already serves as static files per host.
const SKIP = new Set(['/', '/privacy', '/terms']);

const ssr = await import(pathToFileURL(SSR_ENTRY).href);
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// JSON inside <script>: only "</" can break out.
const safeJson = (s) => s.replace(/<\//g, '<\\/');

function setMeta(html, attr, key, content) {
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${key}" content="${esc(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function withHead(html, head, route, markdownHref) {
  const url = head.canonical || BASE + route;
  if (head.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`);
    html = setMeta(html, 'property', 'og:title', head.title);
    html = setMeta(html, 'name', 'twitter:title', head.title);
  }
  if (head.description) {
    html = setMeta(html, 'name', 'description', head.description);
    html = setMeta(html, 'property', 'og:description', head.description);
    html = setMeta(html, 'name', 'twitter:description', head.description);
  }
  if (head.robots) html = setMeta(html, 'name', 'robots', head.robots);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${esc(url)}" />`);
  html = setMeta(html, 'property', 'og:url', url);
  const extra = [];
  if (markdownHref) extra.push(`<link rel="alternate" type="text/markdown" href="${markdownHref}" />`);
  for (const { id, json } of head.jsonLd) {
    extra.push(`<script type="application/ld+json" id="${esc(id)}">${safeJson(json)}</script>`);
  }
  if (extra.length) html = html.replace('</head>', `    ${extra.join('\n    ')}\n  </head>`);
  return html;
}

function write(rel, content) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

/* ---------- Markdown twins ---------- */
const payerSlugs = new Set(ssr.payerGuideSlugs());
const resourceSlugs = new Set(ssr.resourceSlugs());
let mdCount = 0;
for (const slug of payerSlugs) {
  const md = ssr.payerGuideMarkdown(slug);
  if (md) { write(`payers/${slug}.md`, md); mdCount++; }
}
write('payers.md', ssr.payerDirectoryMarkdown());
const articles = [];
for (const slug of resourceSlugs) {
  const md = ssr.resourceMarkdown(slug);
  if (md) { write(`resources/${slug}.md`, md); articles.push(md); mdCount++; }
}
const llms = fs.readFileSync(path.join(DIST, 'llms.txt'), 'utf8');
write('llms-full.txt', [llms.trim(), '# Articles', ...articles, '# ABA payer directory', ssr.payerDirectoryMarkdown()].join('\n\n---\n\n') + '\n');

/* ---------- HTML ---------- */
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/carelu\.com([^<]*)<\/loc>/g)]
  .map((m) => m[1] || '/')
  .filter((r) => !SKIP.has(r));

let ok = 0;
const failures = [];
for (const route of routes) {
  try {
    const { html, head } = ssr.render(route);
    if (!html || html.length < 200) throw new Error(`rendered only ${html.length} chars`);
    if (!head.title) throw new Error('page set no <title> (missing useSeo?)');
    const m = route.match(/^\/(payers|resources)\/([^/]+)$/);
    const mdHref = m && (m[1] === 'payers' ? payerSlugs : resourceSlugs).has(m[2]) ? `${route}.md` : null;
    const page = withHead(template, head, route, mdHref).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    write(path.join(route.slice(1), 'index.html'), page);
    ok++;
  } catch (e) {
    failures.push(`${route}: ${e.message}`);
  }
}

console.log(`prerender: ${ok}/${routes.length} routes, ${mdCount} markdown files, llms-full.txt`);
if (failures.length) {
  console.error(`prerender: ${failures.length} failed:\n  ${failures.join('\n  ')}`);
  // A page that fails to prerender still works as a SPA route; fail the build
  // only if something systemic broke.
  if (failures.length > routes.length * 0.1) process.exit(1);
}
