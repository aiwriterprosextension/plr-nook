/**
 * Generates public/sitemap.xml from the central route config.
 * Called automatically by the Vite plugin at build time,
 * or run manually: npx tsx scripts/generate-sitemap.ts
 */

import { sitemapRoutes, SITE_URL } from "../src/config/routes";
import { writeFileSync } from "fs";
import { resolve } from "path";

export function generateSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0];

  const urls = sitemapRoutes
    .filter((r) => r.includeInSitemap !== false)
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

// When run directly
const xml = generateSitemapXml();
const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`✅ Sitemap generated with ${sitemapRoutes.filter((r) => r.includeInSitemap !== false).length} URLs → public/sitemap.xml`);
