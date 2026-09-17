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
      out.push({
        file: f, slug,
        state: g.match(/state: '([^']+)'/)?.[1] ?? '',
        kind: g.match(/kind: '([^']+)'/)?.[1] ?? '',
        top: Object.fromEntries(TOP.map((k) => [k, new RegExp(`(^|[\\s,])${k}:`, 'm').test(g)])),
        rules: Object.fromEntries(RULES.map((k) => [k, dr.includes(`${k}: {`)])),
        gates: Object.fromEntries(GATES.map((k) => [k, ig.includes(`${k}: {`)])),
        statuses,
      });
    }
  }
  return out;
}

const guides = loadGuides();
const args = process.argv.slice(2);
if (args.includes('--json')) { console.log(JSON.stringify(guides, null, 2)); process.exit(0); }

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
