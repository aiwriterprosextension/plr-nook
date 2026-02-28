/**
 * Central route configuration for sitemap generation.
 * 
 * ADD/REMOVE entries here whenever pages change — the sitemap
 * will be regenerated automatically at build time.
 */

export interface SitemapRoute {
  path: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  /** Set false to exclude from sitemap (e.g. redirects, noindex pages) */
  includeInSitemap?: boolean;
}

export const sitemapRoutes: SitemapRoute[] = [
  // Main pages
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/plr-organizer", changefreq: "weekly", priority: 0.9 },
  { path: "/tools", changefreq: "weekly", priority: 0.9 },
  { path: "/download", changefreq: "monthly", priority: 0.8 },
  { path: "/about", changefreq: "monthly", priority: 0.7 },
  { path: "/install", changefreq: "monthly", priority: 0.6 },

  // Tool pages
  { path: "/tools/license-decoder", changefreq: "monthly", priority: 0.8 },
  { path: "/tools/html-editor", changefreq: "monthly", priority: 0.8 },
  { path: "/tools/duplicate-detector", changefreq: "monthly", priority: 0.8 },
  { path: "/tools/content-spinner", changefreq: "monthly", priority: 0.8 },

  // Funnel pages
  { path: "/funnel/offer", changefreq: "monthly", priority: 0.7 },

  // Legal pages
  { path: "/privacy", changefreq: "yearly", priority: 0.3 },
  { path: "/terms", changefreq: "yearly", priority: 0.3 },
  { path: "/cookies", changefreq: "yearly", priority: 0.3 },
  { path: "/refund", changefreq: "yearly", priority: 0.3 },
];

export const SITE_URL = "https://organizer.aiwriterpros.com";
