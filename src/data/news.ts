/* ================================================================
   NEWS / PRESS (/news)
   Coverage of Carelu — articles, podcasts, interviews, awards.

   To add an item, drop an object at the TOP of the array below.
   Order in the file doesn't matter (the page sorts by date, newest
   first), but keeping it chronological makes diffs easy to read.

     {
       title: 'How one ABA provider tripled admissions',
       outlet: 'Behavioral Health Business',
       url: 'https://bhbusiness.com/...',
       date: '2026-08-14',
       type: 'article',
       excerpt: 'One sentence on why it matters. Optional.',
     },

   `url` must be the live public link — every item renders as an
   outbound link, so an item with a dead URL is worse than no item.
   ================================================================ */

export type NewsType = 'article' | 'podcast' | 'video' | 'award' | 'release';

export interface NewsItem {
  title: string;
  outlet: string;
  /** Absolute URL to the published piece. */
  url: string;
  /** ISO date, YYYY-MM-DD. Used for sorting and display. */
  date: string;
  type?: NewsType;
  /** Optional one-liner shown under the title. */
  excerpt?: string;
}

export const NEWS_TYPE_LABEL: Record<NewsType, string> = {
  article: 'Article',
  podcast: 'Podcast',
  video: 'Video',
  award: 'Award',
  release: 'Press release',
};

export const news: NewsItem[] = [
  // Add coverage here — newest first.
  {
    title: 'NEW DATA: Stunning Stats From 70,000 Family Intakes and 100+ ABA Organizations',
    outlet: 'Behavioral Health Business',
    url: 'https://bhbusiness.com/2026/09/16/new-data-stunning-stats-from-70000-family-intakes-and-100-aba-organizations/',
    date: '2026-09-16',
    type: 'article',
    excerpt:
      'Across 70,000 intakes, 75.3% of family calls to ABA providers go unanswered. Answer within three minutes and families pick up 60% of the time.',
  },
  {
    title: 'ABA Intake Automation Found Its Market by Accident',
    outlet: 'Acuity',
    url: 'https://acuity.news/technology/aba-intake-automation-carelu-ai-conversion-eligibility-2026/',
    date: '2026-09-09',
    type: 'article',
    excerpt:
      'How a tool built to qualify leads for contractors, and one cold LinkedIn message, led Carelu to autism care. Now 115 ABA companies are on the platform.',
  },
];

/** Newest first. */
export function sortedNews(): NewsItem[] {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}
