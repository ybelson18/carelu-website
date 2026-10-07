import type { PayerRuleFact } from '../data/payers';

/* The scannable first clause of a prior-auth fact ("Required", "Not required
   for 97151 and 97152"), for the /payers table and the Markdown index. Only a
   VERIFIED fact yields an answer; anything else returns null so callers point
   to the guide instead of guessing. The full sourced answer lives on the guide. */
export function paShort(f?: PayerRuleFact): string | null {
  if (!f || f.status !== 'verified') return null;
  const first = f.value.split(/ — |; |\. /)[0].trim().replace(/\.$/, '');
  // The split can strand an opening "(per the plan's guide" — drop the dangling aside.
  const balanced = (first.match(/\(/g) ?? []).length > (first.match(/\)/g) ?? []).length
    ? first.slice(0, first.lastIndexOf('(')).trim() : first;
  const s = balanced === 'Yes' ? 'Required' : balanced;
  return s.length > 110 ? s.slice(0, 110).replace(/\s+\S*$/, '') + '…' : s;
}
