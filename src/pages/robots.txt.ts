import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site || "https://flystj.com";

  // Get current environment
  const isDev = import.meta.env.DEV;
  const isProd = import.meta.env.PROD;

  // Production robots.txt - allows all crawling
  const productionRobots = `# robots.txt for FlyTech Pilot Academy
# https://flystj.com/

User-agent: *
Allow: /

# Allow major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: / # Yahoo Slurp

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block unwanted crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: BLEXBot
Disallow: /

User-agent: SiteAuditBot
Disallow: /

# Disallow access to specific directories/files
Disallow: /admin/
Disallow: /_astro/
Disallow: /api/
Disallow: *.json$
Disallow: /sw.js

# Crawl-delay for aggressive bots
User-agent: *
Crawl-delay: 1

# Sitemap location
Sitemap: ${siteUrl}/sitemap-index.xml

# Additional sitemaps if you have them
# Sitemap: ${siteUrl}/blog-sitemap.xml
`;

  // Development robots.txt - blocks all crawling
  const developmentRobots = `# Development robots.txt - Block all crawlers
User-agent: *
Disallow: /

# Sitemap still available for testing
Sitemap: ${siteUrl}/sitemap-index.xml
`;

  // Return appropriate robots.txt based on environment
  const robotsContent = isProd ? productionRobots : developmentRobots;

  return new Response(robotsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
};
