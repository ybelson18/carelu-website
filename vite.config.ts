import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // index.html is the Carelu entry; leadtrap.html is the same SPA behind
        // LeadTrap head tags plus a static prerender of the homepage, served at
        // / for the leadtrap.com host only (see vercel.json).
        index: 'index.html',
        leadtrap: 'leadtrap.html',
      },
    },
  },
})
