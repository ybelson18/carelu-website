/* ================================================================
   Renders scripts/downloads/templates.data.js to Letter-size PDFs in
   public/downloads/. No dependencies — it writes HTML to a temp dir
   and prints it with the installed Chrome.

     node scripts/downloads/build.mjs

   Chrome path can be overridden with CHROME_BIN.
   ================================================================ */

import { writeFileSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PACKS } from './templates.data.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, '../../public/downloads');
const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const CSS = `
  @page { size: Letter; margin: 0.55in 0.6in 0.5in; }
  * { box-sizing: border-box; }
  body {
    margin: 0; font-family: 'DM Sans', system-ui, sans-serif;
    color: #2B2A26; font-size: 8.9pt; line-height: 1.42;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  .doc { page-break-after: always; }
  .doc:last-child { page-break-after: auto; }
  .head { display: flex; justify-content: space-between; align-items: baseline;
    border-bottom: 1px solid rgba(43,42,38,0.5); padding-bottom: 6px; margin-bottom: 16px; }
  .mark { font-family: 'EB Garamond', Georgia, serif; font-size: 15pt; color: #1A1A1A; letter-spacing: -0.01em; }
  .tag { font-size: 6.4pt; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(43,42,38,0.45); }
  .pack { font-size: 6.6pt; letter-spacing: 0.16em; text-transform: uppercase; color: #3f7a34; font-weight: 700; margin-bottom: 5px; }
  h1 { font-family: 'EB Garamond', Georgia, serif; font-size: 19.5pt; font-weight: 500;
    color: #1A1A1A; margin: 0 0 5px; letter-spacing: -0.012em; line-height: 1.12; }
  .purpose { font-size: 8.3pt; color: rgba(43,42,38,0.62); margin: 0 0 14px; max-width: 5.6in; line-height: 1.5; }
  h2 { font-size: 7.4pt; font-weight: 700; letter-spacing: 0.11em; text-transform: uppercase;
    color: #3f7a34; margin: 11px 0 6px; }
  p { margin: 0 0 6px; }
  ul { margin: 0 0 8px; padding-left: 15px; }
  li { margin-bottom: 4px; }
  .note { font-size: 8pt; color: rgba(43,42,38,0.55); border-left: 2px solid rgba(63,122,52,0.35);
    padding: 2px 0 2px 10px; margin: 12px 0 8px; line-height: 1.5; }
  .fields { display: flex; flex-wrap: wrap; gap: 0 26px; margin-bottom: 4px; }
  .field { flex: 1 1 44%; min-width: 2.2in; margin-bottom: 10px; }
  .field.wide { flex: 1 1 100%; }
  .flabel { font-size: 7.5pt; font-weight: 600; color: #1A1A1A; margin-bottom: 10px; }
  .line { border-bottom: 1px solid rgba(43,42,38,0.28); height: 0; }
  .check { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
  .box { flex: none; width: 10px; height: 10px; border: 1px solid rgba(43,42,38,0.5); border-radius: 2px; margin-top: 2px; }
  .sign { display: flex; gap: 26px; margin-top: 14px; page-break-inside: avoid; }
  .sign .col { flex: 1; }
  .sign .line { margin-bottom: 5px; height: 22px; border-bottom: 1px solid rgba(43,42,38,0.45); }
  .sign .cap { font-size: 7pt; color: rgba(43,42,38,0.55); }
  table.rules { width: 100%; border-collapse: collapse; margin-top: 4px; }
  table.rules th { font-size: 6.8pt; letter-spacing: 0.1em; text-transform: uppercase; text-align: left;
    color: rgba(43,42,38,0.45); font-weight: 700; padding: 0 8px 5px 0; }
  table.rules td { border-bottom: 1px solid rgba(43,42,38,0.28); height: 30px; padding-right: 8px; }
  .foot { display: flex; justify-content: space-between; gap: 20px; align-items: flex-end;
    margin-top: 13px; padding-top: 6px; border-top: 1px solid rgba(43,42,38,0.14);
    font-size: 6.8pt; line-height: 1.45; color: rgba(43,42,38,0.42); page-break-inside: avoid; }
  .foot span:last-child { flex: none; }
`;

const DISCLAIMER =
  'Template language to adapt, not legal advice. Have your compliance reviewer or counsel confirm it against your state’s requirements and your payer contracts before you put it in front of a family.';

function fields(items, cols) {
  const cls = cols === 1 ? 'field wide' : 'field';
  return `<div class="fields">${items
    .map((label) => `<div class="${cls}">${label ? `<div class="flabel">${esc(label)}</div>` : '<div class="flabel">&nbsp;</div>'}<div class="line"></div></div>`)
    .join('')}</div>`;
}

function block(b) {
  switch (b.t) {
    case 'h': return `<h2>${esc(b.text)}</h2>`;
    case 'p': return `<p>${esc(b.text)}</p>`;
    case 'ul': return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    case 'fields': return fields(b.items, b.cols);
    case 'check': return b.items.map((i) => `<div class="check"><span class="box"></span><span>${esc(i)}</span></div>`).join('');
    case 'note': return `<div class="note">${esc(b.text)}</div>`;
    case 'sign': return b.rows.map((r) =>
      `<div class="sign">${r.map((c) => `<div class="col"><div class="line"></div><div class="cap">${esc(c)}</div></div>`).join('')}</div>`).join('');
    case 'rules': return `<table class="rules"><thead><tr><th style="width:42%">When (a fact you already hold)</th><th>Then (what it does to the packet)</th></tr></thead><tbody>${
      Array.from({ length: b.rows }, () => '<tr><td></td><td></td></tr>').join('')}</tbody></table>`;
    default: throw new Error('unknown block: ' + b.t);
  }
}

function html(pack) {
  const docs = pack.docs.map((d) => `
    <section class="doc">
      <div class="head"><span class="mark">Carelu</span><span class="tag">The front office of care</span></div>
      <div class="pack">${esc(pack.pack)}</div>
      <h1>${esc(d.title)}</h1>
      <p class="purpose">${esc(d.purpose)}</p>
      ${d.blocks.map(block).join('\n')}
      <div class="foot"><span>${esc(DISCLAIMER)}</span><span>carelu.com</span></div>
    </section>`).join('\n');
  return `<!doctype html><html><head><meta charset="utf-8">
    <title>${esc(pack.pack)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&family=EB+Garamond:wght@400;500&display=swap" rel="stylesheet">
    <style>${CSS}</style></head>
    <body>${docs}</body></html>`;
}

const tmp = join(tmpdir(), 'carelu-downloads-' + Date.now());
mkdirSync(tmp, { recursive: true });
for (const pack of PACKS) {
  const src = join(tmp, pack.file.replace(/\.pdf$/, '.html'));
  const pdf = join(tmp, pack.file);
  writeFileSync(src, html(pack));
  execFileSync(CHROME, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    '--virtual-time-budget=8000', `--print-to-pdf=${pdf}`, 'file://' + src,
  ], { stdio: 'ignore' });
  copyFileSync(pdf, join(OUT, pack.file));
  console.log('wrote public/downloads/' + pack.file + '  (' + pack.docs.length + ' templates)');
}
rmSync(tmp, { recursive: true, force: true });
