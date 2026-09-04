import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
  ],
  site: 'https://mika-ramirez-33.github.io',
  base: '/mika-portfolio',
  

  i18n: {
    defaultLocale: 'es',

    locales: [
      'es',
      'en',
    ],

    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },
});