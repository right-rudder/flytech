import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import critters from "astro-critters";

export default defineConfig({
  site: "https://flystj.com",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://flystj.com/",
        "https://flystj.com/discovery-flight",
        "https://flystj.com/flight-training",
        "https://flystj.com/flight-training/private-pilot",
        "https://flystj.com/contact",
      ].map((url) => ({
        url,
        changefreq: "weekly",
        priority: url === "https://flystj.com/" ? 1.0 : 0.8,
        lastmod: new Date(),
      })),
      filter: (page) =>
        !page.includes("/admin/") &&
        !page.includes("/draft/") &&
        !page.includes("/_") &&
        !page.includes(".draft"),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
    react(),
    critters({
      preload: "swap",
      compress: true,
      pruneSource: true,
    }),
  ],
});
