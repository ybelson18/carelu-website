import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { ssrHead, resetSsrHead } from './lib/ssrHead'

export { payerGuideSlugs, payerGuideMarkdown, payerDirectoryMarkdown, resourceSlugs, resourceMarkdown } from './lib/markdown'

/* Prerender entry, built with `vite build --ssr` and driven by
   scripts/prerender.mjs: renders one route to HTML and returns the head tags
   the page's useSeo / useJsonLd calls recorded while rendering. */
export function render(url: string) {
  resetSsrHead()
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html, head: { ...ssrHead, jsonLd: [...ssrHead.jsonLd] } }
}
