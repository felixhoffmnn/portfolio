import alpinejs from "@astrojs/alpinejs";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://felix-hoffmann.dev",
  output: "static",
  adapter: cloudflare({ imageService: "compile" }),
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
    icon({
      iconDir: "src/assets/icons",
    }),
    alpinejs(),
  ],
});
