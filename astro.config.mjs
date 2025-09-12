import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://flystj.com",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      // Customize priorities for different page types
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
      // Filter out any unwanted pages
      filter: (page) => {
        // Exclude any admin or draft pages if they exist
        return (
          !page.includes("/admin/") &&
          !page.includes("/draft/") &&
          !page.includes("/_") &&
          !page.includes(".draft")
        );
      },
      // Generate additional sitemaps for blog posts if needed
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
    react(),
  ],
  vite: {
    css: {
      // combine all CSS into a single file per page
      codeSplit: false,
    },
  },
});
