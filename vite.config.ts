import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { writeFileSync } from "fs";

// Inline sitemap generation to avoid TS import issues in config
function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle() {
      // Dynamic import workaround — we inline the logic to avoid ESM/CJS issues
      const { sitemapRoutes, SITE_URL } = require("./src/config/routes");
      const today = new Date().toISOString().split("T")[0];
      const urls = sitemapRoutes
        .filter((r: any) => r.includeInSitemap !== false)
        .map(
          (r: any) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
      writeFileSync("dist/sitemap.xml", xml, "utf-8");
      console.log("✅ Sitemap generated in dist/sitemap.xml");
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "PLR Organizer Pro",
        short_name: "PLR Organizer",
        description: "The ultimate app for organizing, managing, and maximizing your PLR content library.",
        theme_color: "#DC2626",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
