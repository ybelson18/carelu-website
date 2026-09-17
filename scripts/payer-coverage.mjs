/* Field-coverage audit for the payer directory.
   Answers one question: which guides are missing which structured fields?
   Run: node scripts/payer-coverage.mjs [--json] [--missing <field>] */
import fs from 'node:fs';
import path from 'node:path';

const DIR = 'src/data/payers';
const SKIP = new Set(['types.ts', 'index.ts', 'changelog.ts']);

// Structured fields every guide should carry a value for, where the payer publishes one.
const TOP = ['cardDesc', 'assessmentPA', 'treatmentPA', 'dxRequired', 'family', 'state', 'kind'];
const RULES = ['supervision', 'concurrentBilling', 'dailyLimits', 'noteSignature', 'placeOfService', 'billAsProvider'];
const GATES = ['ageLimit', 'dxRecency', 'diagnosingProviders', 'diagnosticTools', 'referral', 'telehealth'];

export function loadGuides() {
  const out = [];
  for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && !SKIP.has(f))) {
    const s = fs.readFileSync(path.join(DIR, f), 'utf8');
    const starts = [...s.matchAll(/\n    slug: '/g)].map((m) => m.index);
    starts.push(s.length);
    for (let i = 0; i < starts.length - 1; i++) {
      const g = s.slice(starts[i], starts[i + 1]);
      const slug = g.match(/slug: '([^']+)'/)?.[1];
      if (!slug) continue;
      const block = (name) => {
        const i2 = g.indexOf(`${name}: {`);
        return i2 === -1 ? '' : g.slice(i2, i2 + 9000);
      };
      const dr = block('deliveryRules');
      const ig = block('intakeGates');
      const statuses = [...g.matchAll(/status: '([a-z-]+)'/g)].map((m) => m[1]);
      const blockers = [...g.matchAll(/blocker: '([a-z-]+)'/g)].map((m) => m[1]);
      out.push({
        file: f, slug,
        state: g.match(/state: '([^']+)'/)?.[1] ?? '',
        kind: g.match(/kind: '([^']+)'/)?.[1] ?? '',
        top: Object.fromEntries(TOP.map((k) => [k, new RegExp(`(^|[\\s,])${k}:`, 'm').test(g)])),
        rules: Object.fromEntries(RULES.map((k) => [k, dr.includes(`${k}: {`)])),
        gates: Object.fromEntries(GATES.map((k) => [k, ig.includes(`${k}: {`)])),
        statuses, blockers,
      });
    }
  }
  return out;
}

const guides = loadGuides();
const args = process.argv.slice(2);
if (args.includes('--json')) { console.log(JSON.stringify(guides, null, 2)); process.exit(0); }

/* --check: the invariants that keep this dataset honest. Exits non-zero on any
   violation, so the refresh (and CI) can gate on it instead of trusting a report
   nobody reads. These are exactly the failure modes that produced wrong live data:
   a fact with no recorded status is how the Virginia claim survived unaudited, and
   an unverified fact with no route to settle it is a dead end for the intake team. */
if (args.includes('--check')) {
  const fs2 = fs, path2 = path;
  const problems = [];
  const FACT_FIELDS = [...RULES, ...GATES, 'assessmentPA', 'treatmentPA', 'dxRequired'];
  for (const f of fs2.readdirSync(DIR).filter((f) => f.endsWith('.ts') && !SKIP.has(f))) {
    const src = fs2.readFileSync(path2.join(DIR, f), 'utf8');
    for (const field of FACT_FIELDS) {
      const re = new RegExp(`\\n(\\s+)${field}: \\{`, 'g');
      for (const m of src.matchAll(re)) {
        // brace-match the object so long cites arrays don't confuse us
        let i = m.index + m[0].length - 1, depth = 0, end = i;
        for (let j = i; j < Math.min(src.length, i + 20000); j++) {
          if (src[j] === '{') depth++;
          else if (src[j] === '}') { depth--; if (depth === 0) { end = j; break; } }
        }
        const obj = src.slice(i, end + 1);
        const line = src.slice(0, m.index).split('\n').length + 1;
        const status = obj.match(/status: '([a-z-]+)'/)?.[1];
        if (!status) { problems.push(`${f}:${line} ${field} — no status`); continue; }
        if (status === 'verified' && !obj.includes('cites')) {
          problems.push(`${f}:${line} ${field} — status 'verified' with no cites`);
        }
        if (status !== 'verified') {
          if (!obj.includes('verifyVia')) problems.push(`${f}:${line} ${field} — ${status} with no verifyVia`);
          if (!obj.includes('blocker')) problems.push(`${f}:${line} ${field} — ${status} with no blocker ('document' or 'per-case')`);
        }
      }
    }
  }
  if (problems.length) {
    console.error(`payer-coverage --check FAILED: ${problems.length} problem(s)\n`);
    for (const p of problems.slice(0, 40)) console.error('  ' + p);
    if (problems.length > 40) console.error(`  … and ${problems.length - 40} more`);
    process.exit(1);
  }
  console.log('payer-coverage --check passed: every fact has a status; every verified fact cites a source; every unverified fact has a verifyVia and a blocker.');
  process.exit(0);
}

const pct = (n) => `${Math.round((n / guides.length) * 100)}%`.padStart(4);
const tally = (group, keys) => keys.map((k) => {
  const n = guides.filter((g) => g[group][k]).length;
  return `  ${k.padEnd(21)} ${String(n).padStart(3)}/${guides.length}  ${pct(n)}`;
}).join('\n');

console.log(`PAYER DIRECTORY FIELD COVERAGE — ${guides.length} guides\n`);
console.log('Top-level fields:'); console.log(tally('top', TOP));
console.log('\nDelivery & billing rules:'); console.log(tally('rules', RULES));
console.log('\nIntake gates:'); console.log(tally('gates', GATES));

const byKind = {};
for (const g of guides) {
  const k = g.kind || 'unknown';
  byKind[k] ??= { n: 0, rules: 0, gates: 0 };
  byKind[k].n++;
  if (RULES.some((r) => g.rules[r])) byKind[k].rules++;
  if (GATES.some((r) => g.gates[r])) byKind[k].gates++;
}
console.log('\nBy kind — guides carrying ANY rule / ANY gate:');
for (const [k, v] of Object.entries(byKind)) {
  console.log(`  ${k.padEnd(16)} ${String(v.n).padStart(3)} guides · rules ${String(v.rules).padStart(3)} · gates ${String(v.gates).padStart(3)}`);
}

/* Coverage counts fields PRESENT. This counts how many are actually VERIFIED —
   the number that matters, since an 'unverified' field is an honest placeholder
   naming who to call, not an answer. */
const st = { verified: 0, 'plan-dependent': 0, unverified: 0 };
for (const g of guides) for (const s2 of g.statuses) if (s2 in st) st[s2]++;
const totalFacts = Object.values(st).reduce((a, b) => a + b, 0);
console.log('\nFact quality — all structured fields:');
for (const [k, v] of Object.entries(st)) {
  console.log(`  ${k.padEnd(16)} ${String(v).padStart(5)}  ${`${Math.round((v / totalFacts) * 100)}%`.padStart(4)}`);
}
console.log(`  ${'TOTAL'.padEnd(16)} ${String(totalFacts).padStart(5)}`);
console.log('\nAn unverified field is not a gap to hide — it names the portal or phone line that');
console.log('would settle it. Watch this ratio: coverage can look complete while quality falls.');

/* Not all unverified fields are debt. 'document' means the answer is written down and
   we could not open the file — a human fetch closes it. 'per-case' means no document
   states it and "ask the plan" is the finished answer. Only the first should shrink. */
const bl = { document: 0, 'per-case': 0, licensed: 0 };
for (const g of guides) for (const b of g.blockers) if (b in bl) bl[b]++;
const nonVerified = st.unverified + st['plan-dependent'];
console.log('\nWhy not verified:');
console.log(`  document (closeable debt)  ${String(bl.document).padStart(5)}`);
console.log(`  per-case (finished answer) ${String(bl['per-case']).padStart(5)}`);
console.log(`  licensed (never closes)    ${String(bl.licensed).padStart(5)}`);
const unclassified = nonVerified - bl.document - bl['per-case'] - bl.licensed;
if (unclassified > 0) console.log(`  UNCLASSIFIED               ${String(unclassified).padStart(5)}  <- needs a blocker set`);
