/* ================================================================
   MARKDOWN TWINS — clean Markdown renderings of the payer guides and
   the /resources articles, for AI crawlers (GPTBot, ClaudeBot,
   PerplexityBot) and llms-full.txt. Pure functions over the same data
   the React pages render; no DOM, no React, no file I/O. A build step
   calls these and writes dist/payers/<slug>.md etc.

   Payer guides carry everything PayerPage.tsx shows (in page order),
   plus the VOB enrichment layer (EDI routing, code grid, Medicaid rates,
   contacts). Values that are merely 'unverified' are omitted rather than
   printed as noise; the PA panels and concurrent billing keep a short
   "Not published / unverified" note, as the page does.
   ================================================================ */

import { payers, PAYER_REVIEWED, STATE_META } from '../data/payers/index.js';
import type { PayerConfig, PayerRuleFact, PayerSource } from '../data/payers/index.js';
import { vob } from '../data/payers/vob/index.js';
import type { VobExtension, SourceRef } from '../data/payers/vob/index.js';
import { allResources } from '../data/allResources';
import type { ResourceConfig, ResourceTable } from '../data/resources';

const SITE = 'https://carelu.com';

/* ---------------------------------------------------------------
   Text helpers
   --------------------------------------------------------------- */

/** Collapse all whitespace (incl. newlines) to single spaces. */
function clean(s: string | undefined | null): string {
  return (s ?? '').replace(/\s+/g, ' ').trim();
}

/** A table cell: collapsed, pipes escaped, never empty. */
function cell(s: string | undefined | null): string {
  const v = clean(s).replace(/\|/g, '\\|');
  return v === '' ? '—' : v;
}

function table(cols: string[], rows: string[][]): string {
  const head = `| ${cols.map(cell).join(' | ')} |`;
  const sep = `| ${cols.map(() => '---').join(' | ')} |`;
  const body = rows.map((r) => `| ${cols.map((_, i) => cell(r[i])).join(' | ')} |`);
  return [head, sep, ...body].join('\n');
}

/** Front-matter scalar: quote when it carries YAML-significant characters. */
function fm(key: string, value: string | undefined): string | null {
  const v = clean(value);
  if (!v) return null;
  const safe = /^[A-Za-z0-9 _.,/()@+-]+$/.test(v) && !/^[-?]/.test(v) && !/: /.test(v);
  return `${key}: ${safe ? v : JSON.stringify(v)}`;
}

function frontMatter(pairs: [string, string | undefined][]): string {
  return ['---', ...pairs.map(([k, v]) => fm(k, v)).filter((x): x is string => x !== null), '---'].join('\n');
}

/** True when a value is empty or just an 'unverified' placeholder. */
function isBlank(v: unknown): boolean {
  if (v === undefined || v === null) return true;
  if (typeof v === 'boolean') return false;
  if (Array.isArray(v)) return v.every(isBlank);
  const s = clean(String(v));
  return s === '' || /^unverified\b/i.test(s);
}

/** Join blocks; backslash-escape anything that could parse as an HTML tag
 *  (e.g. "<PLAN NAME>" in EDI notes) in the body, leaving front matter alone. */
function finish(blocks: string[]): string {
  const [head, ...body] = blocks;
  return [head, ...body.map((b) => b.replace(/<(?=\/?[A-Za-z])/g, '\\<'))].join('\n\n') + '\n';
}

function absUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

/* ---------------------------------------------------------------
   Payer guides
   --------------------------------------------------------------- */

const KIND_LABEL: Record<string, string> = {
  'state-medicaid': 'State Medicaid program',
  'medicaid-mco': 'Medicaid managed care plan (MCO)',
  commercial: 'Commercial insurance',
};

function stateName(code: string | undefined): string {
  if (!code) return '';
  if (code === 'US') return 'National (all states)';
  return STATE_META.find((s) => s.code === code)?.name ?? code;
}

export function payerGuideSlugs(): string[] {
  return Object.keys(payers).sort();
}

/** Numbered sources exactly as PayerPage builds them, so [n] matches the live page. */
function collectSources(c: PayerConfig): PayerSource[] {
  const all: PayerSource[] = [...c.sources];
  const add = (cites?: PayerSource[]) => {
    for (const s of cites ?? []) if (!all.some((x) => x.url === s.url)) all.push(s);
  };
  for (const s of c.sections) add(s.cites);
  for (const r of [
    ...Object.values(c.deliveryRules ?? {}),
    ...Object.values(c.intakeGates ?? {}),
    c.assessmentPA, c.treatmentPA, c.dxRequired,
  ]) add(r?.cites);
  return all;
}

function statusLabel(f: PayerRuleFact): string | null {
  if (f.status === 'verified') return null;
  if (f.status === 'plan-dependent') return 'plan-dependent';
  if (f.blocker === 'per-case') return 'ask the plan';
  if (f.blocker === 'licensed') return 'licensed criteria';
  return 'unverified';
}

function verifyPrefix(f: PayerRuleFact): string {
  return f.blocker === 'document' ? 'Blocked on' : f.blocker === 'licensed' ? 'In licensed criteria' : 'Ask the plan';
}

/**
 * One rule fact as a bullet (plus an indented verify note). Returns null when
 * the fact is a bare 'unverified' with nothing a reader can use — unless
 * `keepUnverified`, which renders a short "Not published / unverified" line.
 */
function ruleFact(
  label: string,
  f: PayerRuleFact | undefined,
  cite: (cites?: PayerSource[]) => string,
  keepUnverified = false,
): string | null {
  if (!f) return null;
  const answerable = f.blocker === 'per-case' || f.blocker === 'licensed';
  const hollow = f.status === 'unverified' && (!answerable || isBlank(f.value));
  if (hollow) {
    if (!keepUnverified) return null;
    const via = clean(f.verifyVia);
    return `- **${label}:** Not published / unverified.${via ? ` Verify via: ${via}` : ''}${cite(f.cites)}`;
  }
  const tag = statusLabel(f);
  const lines = [`- **${label}**${tag ? ` _(${tag})_` : ''}: ${clean(f.value)}${cite(f.cites)}`];
  const via = clean(f.verifyVia);
  if (via) lines.push(`  - ${verifyPrefix(f)}: ${via}`);
  return lines.join('\n');
}

function ruleBlock(
  rows: readonly (readonly [string, PayerRuleFact | undefined])[],
  cite: (cites?: PayerSource[]) => string,
  keep: (label: string) => boolean = () => false,
): string[] {
  const rank = (st?: string) => (st === 'verified' ? 0 : st === 'plan-dependent' ? 1 : 2);
  return rows
    .filter(([, r]) => r)
    .slice()
    .sort(([, a], [, b]) => rank(a!.status) - rank(b!.status))
    .map(([label, r]) => ruleFact(label, r, cite, keep(label)))
    .filter((x): x is string => x !== null);
}

/* ---- VOB rendering ---- */

function yesNo(v: boolean | string | undefined): string {
  if (v === true) return 'Yes';
  if (v === false) return 'No';
  return clean(v as string | undefined);
}

function vobNote(verifyVia: Record<string, string> | undefined, key: string): string {
  const v = clean(verifyVia?.[key]);
  return v ? ` — ${v}` : '';
}

function renderVob(v: VobExtension, payerName: string): string[] {
  const out: string[] = [];
  const srcs: SourceRef[] = [];
  const addSrc = (list?: SourceRef[]) => {
    for (const s of list ?? []) if (!srcs.some((x) => x.url === s.url)) srcs.push(s);
  };

  out.push('## Verification of benefits (VOB) data');
  out.push(`How ${clean(payerName)} ABA benefits route and read on an eligibility check. Data last updated ${v.lastUpdated}.`);

  /* Layer 1 — EDI routing */
  if (v.edi) {
    const e = v.edi;
    const vv = e.verifyVia;
    const items: string[] = [];
    const ids: [string, string | undefined, string][] = [
      ['pVerify', e.payerId.pverify, 'payerId.pverify'],
      ['Availity', e.payerId.availity, 'payerId.availity'],
      ['Change Healthcare / Optum', e.payerId.changeHealthcare, 'payerId.changeHealthcare'],
    ];
    for (const [name, val, key] of ids) {
      if (!isBlank(val)) items.push(`- **Payer ID (${name}):** ${clean(val)}${vobNote(vv, key)}`);
    }
    if (!isBlank(e.supports270271)) items.push(`- **Supports 270/271 eligibility:** ${yesNo(e.supports270271)}${vobNote(vv, 'supports270271')}`);
    if (!isBlank(e.supportsRealtime)) items.push(`- **Real-time eligibility:** ${yesNo(e.supportsRealtime)}${vobNote(vv, 'supportsRealtime')}`);
    const bh = e.bhCarveOut;
    if (bh) {
      if (!isBlank(bh.administrator)) items.push(`- **Behavioral health administrator:** ${clean(bh.administrator)}${vobNote(vv, 'bhCarveOut.administrator')}`);
      if (!isBlank(bh.administratorPayerId)) items.push(`- **BH administrator payer ID:** ${clean(bh.administratorPayerId)}${vobNote(vv, 'bhCarveOut.administratorPayerId')}`);
      if (!isBlank(bh.abaRidesOn)) items.push(`- **ABA rides on:** ${bh.abaRidesOn === 'bh' ? 'behavioral health benefit' : bh.abaRidesOn === 'medical' ? 'medical benefit' : clean(bh.abaRidesOn)}${vobNote(vv, 'bhCarveOut.abaRidesOn')}`);
      if (!isBlank(bh.twoHopRequired)) items.push(`- **Two-hop verification required:** ${yesNo(bh.twoHopRequired)}${vobNote(vv, 'bhCarveOut.twoHopRequired')}`);
    }
    const m = e.medicaid271Notes;
    if (m) {
      if (!isBlank(m.mcoSegmentLocation)) items.push(`- **Where the 271 carries MCO enrollment:** ${clean(m.mcoSegmentLocation)}`);
      if (!isBlank(m.eligibilitySpanGranularity)) items.push(`- **Eligibility span granularity:** ${clean(m.eligibilitySpanGranularity)}`);
    }
    if (items.length || (m && Object.keys(m.mcoCarrierCodes ?? {}).length)) {
      out.push('### EDI routing');
      if (items.length) out.push(items.join('\n'));
      const codes = Object.entries(m?.mcoCarrierCodes ?? {}).filter(([, n]) => !isBlank(n));
      if (codes.length) out.push('Managed-care codes returned in the 271:\n\n' + table(['Code', 'Meaning'], codes.map(([k, n]) => [k, n])));
    }
    addSrc(e.sources);
  }

  /* Layer 2 — STC interpretation */
  if (v.stcMap) {
    const s = v.stcMap;
    const vv = s.verifyVia;
    const items: string[] = [];
    const push = (label: string, val: unknown, key: string) => {
      if (!isBlank(val)) items.push(`- **${label}:** ${yesNo(val as string | boolean)}${vobNote(vv, key)}`);
    };
    push('ABA benefit bucket (service type code)', s.abaBenefitBucket, 'abaBenefitBucket');
    push('Deductible applies to ABA', s.deductibleAppliesToAba, 'deductibleAppliesToAba');
    push('Cost-share type', s.costShareType, 'costShareType');
    push('Copay unit', s.copayUnit, 'copayUnit');
    push('Out-of-pocket max applies', s.oopMaxApplies, 'oopMaxApplies');
    push('271 response quality for ABA', s.quality271Score, 'quality271Score');
    if (items.length) {
      out.push('### How the 271 reports ABA benefits');
      out.push(items.join('\n'));
    }
    addSrc(s.sources);
  }

  /* Layer 3 — code grid */
  const grid = Object.entries(v.codeGrid ?? {});
  if (grid.length) {
    out.push('### Code-level coverage');
    const rows = grid.map(([code, g]) => {
      const pos = g.posAllowed.filter((p) => !isBlank(p)).join(', ');
      const mods = g.modifiers.filter((p) => !isBlank(p)).join(', ');
      const cap = [g.unitCap, g.capPeriod].filter((x) => !isBlank(x)).map(clean).join(' per ');
      return [
        code,
        isBlank(g.covered) ? (isBlank(g.notes) ? '' : 'Not confirmed (see code notes)') : g.covered,
        isBlank(g.paRequired) ? '' : g.paRequired,
        cap,
        pos,
        isBlank(g.telehealth) ? '' : g.telehealth,
        mods,
      ];
    });
    out.push(table(['Code', 'Covered', 'Prior auth', 'Unit cap', 'Place of service', 'Telehealth', 'Modifiers'], rows));
    // Many grids repeat one note on every code: group identical notes.
    const byNote = new Map<string, string[]>();
    for (const [code, g] of grid) {
      if (isBlank(g.notes)) continue;
      const n = clean(g.notes);
      byNote.set(n, [...(byNote.get(n) ?? []), code]);
    }
    const notes = [...byNote].map(([n, codes]) => `- **${codes.join(', ')}:** ${n}`);
    if (notes.length) out.push('Code notes:\n\n' + notes.join('\n'));
    for (const [, g] of grid) addSrc(g.sources);
  }

  /* Layer 4 — Medicaid rates */
  const rateRows = Object.entries(v.rates?.byCode ?? {}).filter(([, r]) => !isBlank(r.rate));
  if (v.rates && rateRows.length) {
    out.push('### Medicaid rates');
    const meta = [
      !isBlank(v.rates.source) ? `Source: ${clean(v.rates.source)}` : '',
      !isBlank(v.rates.effectiveDate) ? `Effective ${clean(v.rates.effectiveDate)}.` : '',
    ].filter(Boolean).join(' ');
    if (meta) out.push(meta);
    out.push(table(
      ['Code', 'Rate', 'Unit', 'Modifier tiers'],
      rateRows.map(([code, r]) => [
        code,
        r.rate,
        isBlank(r.unit) ? '' : r.unit,
        Object.entries(r.modifierTiers ?? {}).filter(([, x]) => !isBlank(x)).map(([k, x]) => `${k}: ${clean(x)}`).join('; '),
      ]),
    ));
    addSrc(v.rates.sources);
  }

  /* Layer 7 — contacts */
  if (v.vobContact) {
    const c = v.vobContact;
    const items: string[] = [];
    if (!isBlank(c.providerServicesPhone)) items.push(`- **Provider services phone:** ${clean(c.providerServicesPhone)}`);
    if (!isBlank(c.ivrPath)) items.push(`- **Phone menu path:** ${clean(c.ivrPath)}`);
    if (!isBlank(c.hours)) items.push(`- **Hours:** ${clean(c.hours)}`);
    if (c.portal && !isBlank(c.portal.url)) items.push(`- **Portal:** [${clean(c.portal.name) || c.portal.url}](${c.portal.url})`);
    if (!isBlank(c.fax)) items.push(`- **Fax:** ${clean(c.fax)}`);
    const qs = c.scriptedQuestions.filter((q) => !isBlank(q));
    if (items.length || qs.length) {
      out.push('### Contacts');
      if (items.length) out.push(items.join('\n'));
      if (qs.length) out.push('Questions to ask on a verification call:\n\n' + qs.map((q) => `- ${clean(q)}`).join('\n'));
    }
    addSrc(c.sources);
  }

  if (srcs.length) {
    out.push('### VOB data sources');
    out.push(srcs.map((s) => `- ${s.url} (accessed ${s.accessDate}${s.staleRisk ? '; source document older than 18 months' : ''})`).join('\n'));
  }
  return out.length > 2 ? out : [];
}

export function payerGuideMarkdown(slug: string): string | null {
  const c = payers[slug];
  if (!c) return null;
  const url = `${SITE}/payers/${c.slug}`;
  const allSources = collectSources(c);
  const num = (u: string) => allSources.findIndex((x) => x.url === u) + 1;
  const cite = (cites?: PayerSource[]) =>
    cites && cites.length ? ' ' + cites.map((s) => `[${num(s.url)}]`).join('') : '';

  const out: string[] = [];
  out.push(frontMatter([
    ['title', c.h1],
    ['url', url],
    ['markdown_url', `${url}.md`],
    ['state', c.state ? (c.state === 'US' ? 'US (national)' : `${c.state} (${stateName(c.state)})`) : undefined],
    ['payer', c.payer],
    ['kind', c.kind ? KIND_LABEL[c.kind] : undefined],
    ['parent_program', c.kind === 'medicaid-mco' ? c.parent : undefined],
    ['description', c.metaDescription],
    ['last_reviewed', PAYER_REVIEWED],
    ['vob_data_updated', vob[slug]?.lastUpdated],
  ]));

  out.push(`# ${clean(c.h1)}`);
  out.push(`_${clean(c.pill)} · Last updated ${PAYER_REVIEWED} · ${c.sources.length} primary sources_`);
  if (c.cardDesc) out.push(`> ${clean(c.cardDesc)}`);
  for (const p of c.intro) out.push(clean(p));

  if (c.kind === 'medicaid-mco' && c.parent) {
    const parentGuide = Object.values(payers).find((p) => p.kind === 'state-medicaid' && p.state === c.state);
    out.push(
      `This plan administers the **${clean(c.parent)}** ABA benefit: the state rules are the floor, and this page covers what the plan layers on top.` +
      (parentGuide ? ` Read it together with the [${clean(parentGuide.payer)} guide](${SITE}/payers/${parentGuide.slug}).` : ''),
    );
  }

  /* Prior auth + diagnosis panel */
  const pa = [
    ruleFact('Prior auth for the assessment', c.assessmentPA, cite, true),
    ruleFact('Prior auth for treatment', c.treatmentPA, cite, true),
    ruleFact('Autism diagnosis required?', c.dxRequired, cite),
  ].filter((x): x is string => x !== null);
  if (pa.length) {
    out.push('## Prior authorization and diagnosis at a glance');
    out.push(pa.join('\n'));
  }

  /* At a glance */
  const glance = c.atGlance.filter((f) => !isBlank(f.value));
  if (glance.length) {
    out.push('## At a glance');
    out.push(glance.map((f) => `- **${clean(f.label)}:** ${clean(f.value)}`).join('\n'));
  }

  /* Sections */
  for (const s of c.sections) {
    out.push(`## ${clean(s.h2)}`);
    for (const p of s.body ?? []) out.push(clean(p) + cite(s.cites));
    if (s.list?.length) {
      out.push(s.list.map((i) => `- **${clean(i.title)}:** ${clean(i.desc)}${cite(s.cites)}`).join('\n'));
    }
  }

  /* National commercial: state-by-state */
  if (c.kind === 'commercial' && c.state === 'US') {
    out.push(`## How ${clean(c.payer)} works state by state`);
    out.push(
      'The clinical policy above is national, but three state-level layers change what a family\'s card actually buys: ' +
      'the state autism mandate (what fully-insured plans must cover), the carrier\'s state Medicaid plans (which follow ' +
      'the state Medicaid rules, not this commercial policy), and plan funding type (self-funded ERISA plans can carve ' +
      'benefits differently).',
    );
    const lines = STATE_META.map((st) => {
      const familyPlans = Object.values(payers).filter(
        (p) => p.kind === 'medicaid-mco' && p.state === st.code && p.family && p.family === c.family,
      );
      const plans = familyPlans.length
        ? ` For Medicaid members, ${clean(c.payer)} operates ${familyPlans.map((p) => `[${clean(p.payer)}](${SITE}/payers/${p.slug})`).join(', ')} (each covered by its own guide).`
        : '';
      const base = payers[st.medicaidSlug];
      return `- **${st.name}** (mandate: ${clean(st.mandate)}): fully-insured ${clean(c.payer)} plans issued in ${st.name} sit under the state mandate.${plans} State Medicaid baseline: [${clean(base?.payer ?? st.name)} guide](${SITE}/payers/${st.medicaidSlug}).`;
    });
    out.push(lines.join('\n'));
  }

  /* Intake gates */
  if (c.intakeGates) {
    const g = c.intakeGates;
    const rows = ruleBlock([
      ['Age limit', g.ageLimit],
      ['Diagnosis recency', g.dxRecency],
      ['Who may diagnose', g.diagnosingProviders],
      ['Diagnostic tools required', g.diagnosticTools],
      ['Referral required?', g.referral],
      ['Telehealth', g.telehealth],
      ['Prior-auth decision time', g.authTurnaround],
      ['Other insurance (who pays first)', g.coordinationOfBenefits],
    ], cite);
    if (rows.length) {
      out.push('## Intake gates');
      out.push(`The questions that decide whether a family can start with ${clean(c.payer)}, and what they have to bring.`);
      out.push(rows.join('\n'));
    }
  }

  /* Delivery & billing rules (staffing, supervision, credentialing) */
  if (c.deliveryRules) {
    const d = c.deliveryRules;
    const concurrent = 'Concurrent billing (97153 + 97155)';
    const rows = ruleBlock([
      ['Supervision', d.supervision],
      [concurrent, d.concurrentBilling],
      ['Daily limits / MUEs', d.dailyLimits],
      ['Session-note signature', d.noteSignature],
      ['Place of service', d.placeOfService],
      ['Bill as provider', d.billAsProvider],
    ], cite, (label) => label === concurrent);
    if (rows.length) {
      out.push('## Delivery and billing rules');
      out.push(`Coverage decides whether ${clean(c.payer)} pays. These decide whether the claim survives: staffing and supervision, concurrent billing, per-day ceilings, who signs the note, where the service is payable, and whose NPI the claim goes out under.`);
      out.push(rows.join('\n'));
    }
  }

  /* What intake should collect */
  if (c.collect.length) {
    out.push(`## What intake should collect for ${clean(c.payer)}`);
    out.push(c.collect.map((i) => `- **${clean(i.title)}:** ${clean(i.desc)}`).join('\n'));
    out.push(`Free verification-call checklist (PDF): ${SITE}/downloads/aba-verification-call-checklist.pdf`);
  }

  /* VOB enrichment */
  const v = vob[slug];
  if (v) out.push(...renderVob(v, c.payer));

  /* FAQ */
  if (c.faq.length) {
    out.push('## Common questions');
    for (const f of c.faq) out.push(`### ${clean(f.q)}\n\n${clean(f.a)}`);
  }

  /* Sources + disclaimer */
  out.push('## Primary sources');
  out.push(allSources.map((s, i) => `${i + 1}. [${clean(s.title).replace(/[[\]]/g, '')}](${s.url})`).join('\n'));
  out.push(
    `Payer policies change frequently and vary by plan, state, and funding type. This guide was compiled from the sources above and last reviewed ${PAYER_REVIEWED}; it is general information, not billing, legal, or clinical advice. Always verify current requirements against the payer's live policy and a benefits check for the specific member.`,
  );
  out.push('Source: Carelu ABA Payer Directory — https://carelu.com/payers. Free to cite with attribution.');

  return finish(out);
}

export function payerDirectoryMarkdown(): string {
  const all = Object.values(payers);
  const kindRank = (k?: string) => (k === 'state-medicaid' ? 0 : k === 'medicaid-mco' ? 1 : k === 'commercial' ? 2 : 3);
  const line = (p: PayerConfig) => {
    const u = `${SITE}/payers/${p.slug}`;
    const kind = p.kind ? KIND_LABEL[p.kind] : '';
    const desc = clean(p.cardDesc);
    return `- [${clean(p.payer)}](${u}) ([Markdown](${u}.md))${kind ? ` — ${kind}` : ''}${desc ? `. ${desc}` : ''}`;
  };
  const group = (code: string) =>
    all
      .filter((p) => (p.state ?? 'US') === code)
      .sort((a, b) => kindRank(a.kind) - kindRank(b.kind) || a.payer.localeCompare(b.payer));

  const out: string[] = [];
  out.push(frontMatter([
    ['title', 'ABA Payer Directory'],
    ['url', `${SITE}/payers`],
    ['description', 'ABA therapy coverage and prior-authorization guides per payer: state Medicaid programs, Medicaid managed care plans, and commercial insurers, sourced from primary documents.'],
    ['last_reviewed', PAYER_REVIEWED],
    ['guides', String(all.length)],
  ]));
  out.push('# ABA Payer Directory');
  out.push(`ABA coverage and prior-authorization guides for ${all.length} payers, grouped by state. Each guide has an HTML page and a clean Markdown twin (append \`.md\` to the URL). Last reviewed ${PAYER_REVIEWED}.`);

  const codes = ['US', ...STATE_META.map((s) => s.code).sort((a, b) => stateName(a).localeCompare(stateName(b)))];
  const extra = [...new Set(all.map((p) => p.state ?? 'US'))].filter((c) => !codes.includes(c)).sort();
  for (const code of [...codes, ...extra]) {
    const list = group(code);
    if (!list.length) continue;
    const meta = STATE_META.find((s) => s.code === code);
    out.push(`## ${code === 'US' ? 'National' : `${stateName(code)} (${code})`}`);
    if (meta) out.push(`State autism mandate: ${clean(meta.mandate)}`);
    out.push(list.map(line).join('\n'));
  }
  out.push('Source: Carelu ABA Payer Directory — https://carelu.com/payers. Free to cite with attribution.');
  return finish(out);
}

/* ---------------------------------------------------------------
   Resources (/resources/:slug)
   --------------------------------------------------------------- */

export function resourceSlugs(): string[] {
  return Object.keys(allResources).sort();
}

function resourceTable(t: ResourceTable): string {
  const rows = t.rows.map((r) => {
    const cells = [...r.cells];
    if (r.href && cells.length) cells[0] = `[${clean(cells[0]).replace(/[[\]]/g, '')}](${absUrl(r.href)})`;
    return cells;
  });
  return table(t.cols, rows) + (t.note ? `\n\n${clean(t.note)}` : '');
}

function relatedUrl(slug: string): string {
  if (/^https?:\/\//i.test(slug)) return slug;
  return slug.startsWith('/') ? `${SITE}${slug}` : `${SITE}/resources/${slug}`;
}

export function resourceMarkdown(slug: string): string | null {
  const r: ResourceConfig | undefined = allResources[slug];
  if (!r) return null;
  const url = `${SITE}/resources/${r.slug}`;
  const out: string[] = [];
  out.push(frontMatter([
    ['title', r.h1],
    ['url', url],
    ['description', r.metaDescription],
    ['updated', r.updated],
  ]));
  out.push(`# ${clean(r.h1)}`);
  if (r.answer) out.push(`**Short answer:** ${clean(r.answer)}`);
  for (const p of r.intro) out.push(clean(p));

  for (const s of r.sections) {
    out.push(`## ${clean(s.h2)}`);
    for (const p of s.body ?? []) out.push(clean(p));
    if (s.list?.length) out.push(s.list.map((i) => `- **${clean(i.title)}:** ${clean(i.desc)}`).join('\n'));
    if (s.table) out.push(resourceTable(s.table));
    if (s.rules?.length) out.push(s.rules.map((x) => `- **When** ${clean(x.when)} **then** ${clean(x.then)}`).join('\n'));
    if (s.downloads?.length) out.push(s.downloads.map((d) => `- [${clean(d.label)}](${absUrl(d.file)}): ${clean(d.blurb)}`).join('\n'));
  }

  if (r.download) out.push(`[${clean(r.download.label)}](${absUrl(r.download.file)}): ${clean(r.download.blurb)}`);

  if (r.faq.length) {
    out.push('## Frequently asked questions');
    for (const f of r.faq) out.push(`### ${clean(f.q)}\n\n${clean(f.a)}`);
  }

  if (r.carelu) {
    out.push(`## ${clean(r.carelu.h2)}`);
    for (const p of r.carelu.body) out.push(clean(p));
    if (r.carelu.list?.length) out.push(r.carelu.list.map((i) => `- **${clean(i.title)}:** ${clean(i.desc)}`).join('\n'));
  }

  if (r.compare?.length) {
    out.push(`## ${clean(r.compareTitle || 'How Carelu compares')}`);
    if (r.compareIntro) out.push(clean(r.compareIntro));
    out.push(table(['Step', 'Doing it manually', 'With Carelu'], r.compare.map((x) => [x.step, x.manual, x.carelu])));
  }

  if (r.related?.length) {
    out.push('## Keep reading');
    out.push(r.related.map((x) => `- [${clean(x.label)}](${relatedUrl(x.slug)}): ${clean(x.blurb)}`).join('\n'));
  }

  out.push(`Source: Carelu — ${url}. Free to cite with attribution.`);
  return finish(out);
}
