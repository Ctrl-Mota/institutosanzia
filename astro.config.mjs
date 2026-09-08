import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Export estático puro -> Cloudflare Pages (cache de borda em todo o HTML/asset)
export default defineConfig({
  site: 'https://institutosanzia.com.br',
  output: 'static',
  trailingSlash: 'never',
  server: {
    allowedHosts: ['joselyn-earthlier-ambagiously.ngrok-free.app'],
  },
  build: {
    format: 'file', // /cuidado-psicologico.html -> servido como /cuidado-psicologico
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({ i18n: undefined })],
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
});
