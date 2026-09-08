/* The one live "families" counter. Every page that shows the number
   (homepage Results section, Company page) reads from here so they can
   never drift apart. Baseline is the sum of the real per-state family
   counts (STATE_FAMILIES in Landing.tsx) on the baseline date, growing
   500 a day since. */
const BASELINE_DATE = new Date('2026-09-06T00:00:00Z').getTime();
const BASELINE_COUNT = 105121;
const GROWTH_PER_MS = 500 / (24 * 60 * 60 * 1000);

export function getLiveCount() {
  return Math.floor(BASELINE_COUNT + Math.max(0, Date.now() - BASELINE_DATE) * GROWTH_PER_MS);
}
