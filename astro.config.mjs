import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

const isProduction = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isProduction ? 'https://reecegarratt.github.io' : 'http://localhost:3000',
  base: isProduction ? '/astro-portfolio/' : '/',
  // site: 'https://cassandragarratt.com'
  base: '/',
  integrations: [
    tailwind(),
    react(),
    mdx(),
  ],
});
