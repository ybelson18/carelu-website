import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    // The SSR build (scripts/prerender.mjs input) needs only the JS bundle.
    copyPublicDir: !isSsrBuild,
    rollupOptions: isSsrBuild ? undefined : {
      input: {
        // index.html is the Carelu entry; leadtrap.html is the same SPA behind
        // LeadTrap head tags plus a static prerender of the homepage, served at
        // / for the leadtrap.com host only (see vercel.json).
        index: 'index.html',
        leadtrap: 'leadtrap.html',
      },
    },
  },
}))
