import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://felix-hoffmann.dev",
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    remarkPlugins: [remarkMath],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    react(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
});
