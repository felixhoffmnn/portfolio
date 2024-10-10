import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://felix-hoffmann.dev",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    remarkPlugins: [remarkMath],
  },
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
