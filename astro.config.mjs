import { defineConfig } from 'astro/config';


import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isProduction ? 'https://reecegarratt.github.io' : 'http://localhost:3000',
  base: isProduction ? '/cass-christmas/' : '/',
  // site: 'https://cassandragarratt.com'

  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/edit-guide'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});