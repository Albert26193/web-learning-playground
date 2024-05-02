import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue()],
  server: {
    port: 14444,
  }
  // output: 'server',
  // adapter: node(
  //   { mode: 'standalone' }
  // )
});
