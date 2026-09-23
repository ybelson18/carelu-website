import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

// Pages under /resources, /payers etc. arrive prerendered (scripts/prerender.mjs)
// so crawlers get full HTML. createRoot replaces that markup with the live app;
// it is the same markup, so there is no visible swap.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
