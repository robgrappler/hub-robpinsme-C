import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hub.robpins.me',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    ssr: {
      noExternal: ["robpins-match-db"]
    }
  }
});
