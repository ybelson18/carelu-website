/* Head tags collected while a page renders on the server (scripts/prerender.mjs).
   On the client these hooks write to document.head in effects; during SSR the
   effects never run, so useSeo / useJsonLd record here synchronously instead and
   the prerender script writes them into the static HTML. */

export interface SsrHead {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  jsonLd: { id: string; json: string }[];
}

export const ssrHead: SsrHead = { jsonLd: [] };

export function resetSsrHead() {
  ssrHead.title = undefined;
  ssrHead.description = undefined;
  ssrHead.canonical = undefined;
  ssrHead.robots = undefined;
  ssrHead.jsonLd = [];
}
