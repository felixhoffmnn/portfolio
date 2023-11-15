import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMermaid from "astro-diagram/remark-mermaid";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://felix-hoffmann.dev",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    remarkPlugins: [remarkMermaid],
  },
  integrations: [tailwind(), sitemap(), react()],
});
