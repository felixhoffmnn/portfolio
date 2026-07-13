import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://felix-hoffmann.dev",
  output: "static",
  adapter: cloudflare({ imageService: "compile", prerenderEnvironment: "node" }),
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],
  security: {
    csp: {
      scriptDirective: {
        resources: ["'self'", "https://static.cloudflareinsights.com"],
      },
      styleDirective: {
        resources: ["'self'"],
      },
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://cloudflareinsights.com",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },
});
