

# PLR Organizer Pro -- Complete Project Audit

## Project Overview

- **Project Name:** PLR Organizer Pro
- **Audit Date:** February 10, 2026
- **Total Pages Discovered:** 22
- **Published URL:** https://plr-nook.lovable.app
- **Tech Stack:** React, TypeScript, Tailwind CSS, shadcn/ui, React Router, PWA (VitePWA)

### Quick Stats

- Complete: 20 pages
- In Progress: 0
- Placeholder/Partial: 2 (Index hero mockup, funnel VSL placeholder)
- Broken/Error: 0

---

## 1. Complete Page Inventory

| # | Page | URL | Type | Status | SEO Head | Notes |
|---|------|-----|------|--------|----------|-------|
| 1 | Homepage | `/` | Landing | Complete | Missing (uses raw JSX, no SEOHead) | Long-form sales page |
| 2 | About | `/about` | Content | Complete | Yes | Founder story + values |
| 3 | Tools Hub | `/tools` | Listing | Complete | Yes (via Helmet) | Lists 4 tools |
| 4 | PLR Scanner | `/tools/plr-scanner` | Tool | Complete | Yes (SEOHead + JSON-LD) | Via ToolPageTemplate |
| 5 | Content Transformer | `/tools/content-transformer` | Tool | Complete | Yes (SEOHead + JSON-LD) | Via ToolPageTemplate |
| 6 | HTML Editor | `/tools/html-editor` | Tool | Complete | Yes (SEOHead + JSON-LD) | Via ToolPageTemplate |
| 7 | License Tracker | `/tools/license-tracker` | Tool | Complete | Yes (SEOHead + JSON-LD) | Via ToolPageTemplate |
| 8 | Install (PWA) | `/install` | Utility | Complete | Yes | PWA install instructions |
| 9 | Privacy Policy | `/privacy` | Legal | Complete | Yes | |
| 10 | Terms of Service | `/terms` | Legal | Complete | Yes | |
| 11 | Cookie Policy | `/cookies` | Legal | Complete | Yes | |
| 12 | Refund Policy | `/refund` | Legal | Complete | Yes | |
| 13 | Funnel Offer (FE) | `/funnel/offer` | Sales | Complete | No SEOHead | Main sales page |
| 14 | OTO 1 (PRO Upgrade) | `/funnel/oto1` | Upsell | Complete | No SEOHead | $37 PRO upgrade |
| 15 | OTO 1 Downsell | `/funnel/oto1-ds` | Downsell | Complete | No SEOHead | $27 or 2x$22 |
| 16 | OTO 2 (Templates) | `/funnel/oto2` | Upsell | Complete | No SEOHead | $47 templates |
| 17 | OTO 2 Downsell | `/funnel/oto2-ds` | Downsell | Complete | No SEOHead | $17 lite pack |
| 18 | Thank You | `/funnel/thank-you` | Confirmation | Complete | No SEOHead | Order confirmation |
| 19 | 404 Not Found | `*` | Error | Complete | No SEOHead | Basic 404 |
| 20-21 | Redirect: content-spinner, uniqueness-meter | `/tools/content-spinner`, `/tools/uniqueness-meter` | Redirect | Complete | N/A | 301 to content-transformer |

---

## 2. Critical Issues Found (Fix Immediately)

### Issue 1: ToolPageTemplate still says "6 tools" (HIGH)
- **File:** `src/components/ToolPageTemplate.tsx`, line 291-296
- **Problem:** CTA section says "Get instant access to {toolName} and all 5 other powerful tools" and the button says "Get All 6 Tools for Just $27"
- **Impact:** Contradicts the 4-tool architecture across every tool page
- **Fix:** Change to "and all 3 other powerful tools" and "Get All 4 Tools for Just $27"

### Issue 2: Homepage "Built-in Power Tools" tab still says "6" (HIGH)
- **File:** `src/pages/Index.tsx`, line 305
- **Problem:** `<h3>` says "6 Built-in Power Tools" but only 4 tools are listed in the array
- **Impact:** Visible inconsistency on the homepage
- **Fix:** Change to "4 Built-in Power Tools"

### Issue 3: ValueStack component says "7 Bonus Tools Included" (HIGH)
- **File:** `src/components/landing/ValueStack.tsx`, line 8
- **Problem:** Lists "7 Bonus Tools Included" at $147 value -- this is stale from the 6-tool era and was never updated
- **Impact:** Misleading value proposition on homepage
- **Fix:** Update to "4 Built-in Power Tools" and adjust dollar value

### Issue 4: Refund Policy says "30-day" but funnel/FAQ says "7-day" (HIGH)
- **File:** `src/pages/legal/RefundPolicy.tsx` says 30-day guarantee throughout
- **File:** `src/pages/funnel/FunnelOffer.tsx` FAQ says "7-day money-back guarantee"
- **File:** `src/pages/Index.tsx` FAQ says "7-day no-questions-asked refund policy"
- **File:** `src/components/landing/EnhancedFooterCTA.tsx` says "7-day guarantee"
- **Impact:** Legal inconsistency -- could cause disputes
- **Fix:** Align all references to one consistent guarantee period (decide 7 or 30 days)

### Issue 5: Duplicate og:description in index.html (MEDIUM)
- **File:** `index.html`, lines 14-15
- **Problem:** Two `og:description` meta tags -- one correct ("The ultimate app...") and one Lovable default ("Lovable Generated Project")
- **Fix:** Remove the Lovable default on line 15

### Issue 6: Duplicate meta author in index.html (LOW)
- **File:** `index.html`, lines 8 and 11
- **Problem:** Two `<meta name="author">` tags -- "PLR Organizer Pro" and "Lovable"
- **Fix:** Remove the Lovable one on line 11

### Issue 7: OG image points to Lovable default (MEDIUM)
- **File:** `index.html`, line 17
- **Problem:** `og:image` and `twitter:image` point to `https://lovable.dev/opengraph-image-p98pqg.png` instead of a branded PLR Organizer Pro image
- **Fix:** Create a custom OG image and update the references

---

## 3. Navigation & Link Audit

### Header Navigation -- Dead Links Found
The header links to pages that do not exist:
- `/pricing` -- No route, renders 404
- `/support` -- No route, renders 404
- `/resources/guides` -- No route, renders 404
- `/resources/tutorials` -- No route, renders 404
- `/resources/knowledge-base` -- No route, renders 404
- `/resources/community` -- No route, renders 404

### Footer Links -- Dead Links Found
- `/contact` -- No route, renders 404
- `/docs` -- No route, renders 404
- `/resources/tutorials` -- No route, renders 404
- `/resources/knowledge-base` -- No route, renders 404
- `/blog` -- No route, renders 404

### Total Dead Links: 11 unique broken internal URLs

---

## 4. Funnel Flow Audit

The sales funnel chain is:

```text
/funnel/offer (FE - $27)
  Buy -> /funnel/oto1 (internal link, correct)
  
/funnel/oto1 (PRO - $37)
  Buy -> WarriorPlus placeholder (external)
  Skip -> /funnel/oto1-ds (correct)

/funnel/oto1-ds (PRO Downsell - $27 or 2x$22)
  Buy -> WarriorPlus placeholder (external)
  Skip -> /funnel/oto2 (correct)

/funnel/oto2 (Templates - $47)
  Buy -> WarriorPlus placeholder (external)
  Skip -> /funnel/oto2-ds (correct)

/funnel/oto2-ds (Templates Lite - $17)
  Buy -> WarriorPlus placeholder (external)
  Skip -> /funnel/thank-you (correct)

/funnel/thank-you
  No navigation out (dead end -- no link back to homepage)
```

**Funnel Issues:**
1. All WarriorPlus links are placeholder URLs (`warriorplus.com/plr-organizer-pro-placeholder`) -- must be replaced before launch
2. FE Offer buy buttons link internally to `/funnel/oto1` instead of external payment -- this is intentional per project memory but means no actual payment happens on FE
3. Thank You page is a dead end -- no link to homepage or download
4. Thank You page order summary is hardcoded to show only "$27.00" regardless of upsells purchased

---

## 5. SEO Audit Summary

### Site-Wide Infrastructure
- **robots.txt:** Present, allows all bots, includes sitemap URL
- **sitemap.xml:** Present, lists 6 URLs (home, tools hub, 4 tool pages, funnel offer)
- **SSL:** Active (lovable.app domain)
- **Favicon:** Present (`/favicon.ico`)
- **PWA Manifest:** Configured correctly
- **Custom 404:** Present but basic (no SEO tags, no helpful links)

### Missing from Sitemap
- `/about`
- `/privacy`, `/terms`, `/cookies`, `/refund`
- `/install`

### Pages Missing SEOHead Component
- Homepage (`/`) -- No `<SEOHead>` or `<Helmet>`, relies only on `index.html` defaults
- All funnel pages (6 pages) -- No SEO meta tags
- 404 page -- No SEO meta tags

### Homepage SEO Issues
- No dedicated title tag (inherits index.html default)
- No H1-specific meta description
- No canonical URL
- No JSON-LD structured data (homepage is the most important page)
- No Open Graph tags beyond index.html defaults

### ToolPageTemplate Canonical URL Issue
- Canonical URLs point to `plrorganizerpro.com` domain (line 114) but the actual site is at `plr-nook.lovable.app`
- This mismatch could confuse search engines

---

## 6. Design & UX Findings

### Positive Patterns
- Consistent red/grey design system across all pages
- Responsive layout using Tailwind grid system
- Dark mode support configured
- Good use of shadcn/ui components
- Proper heading hierarchy on most pages
- Accessible accordion components via Radix UI
- PWA support with install banner

### Issues
- Dark mode toggle in header uses local state only -- resets on page navigation (not persisted)
- Homepage has no `<SEOHead>` component unlike all other pages
- The "Watch Demo Video" button on homepage does nothing (no link/action)
- The "See Full Installation Video" link on homepage is a dead `#` link
- Three separate countdown timers on the homepage (BonusStack, EnhancedFooterCTA, and FunnelOffer) show different start times -- not synced or persistent

---

## 7. Recommended Fixes (Action Plan)

### Phase 1 -- Critical Content Fixes (Do First)

1. **Fix "6 tools" references:**
   - `ToolPageTemplate.tsx` line 291-296: Change to 4 tools
   - `Index.tsx` line 305: Change "6 Built-in Power Tools" to "4 Built-in Power Tools"
   - `ValueStack.tsx` line 8: Update "7 Bonus Tools" to "4 Built-in Power Tools" and adjust value

2. **Resolve refund policy contradiction:**
   - Decide on 7-day or 30-day guarantee
   - Update all references consistently across RefundPolicy.tsx, FunnelOffer.tsx, Index.tsx FAQs, and EnhancedFooterCTA.tsx

3. **Fix index.html meta tag issues:**
   - Remove duplicate `og:description` (Lovable default)
   - Remove duplicate `meta author` (Lovable)
   - Replace OG/Twitter image with branded image

### Phase 2 -- Navigation & Dead Links

4. **Remove or create pages for dead links in Header/Footer:**
   - Option A: Remove links to `/pricing`, `/support`, `/resources/*`, `/contact`, `/docs`, `/blog` from navigation
   - Option B: Create placeholder pages for each

5. **Add navigation link back to homepage on Thank You page**

### Phase 3 -- SEO Improvements

6. **Add SEOHead to homepage** with proper title, description, canonical URL, and JSON-LD (Organization + SoftwareApplication schema)

7. **Fix canonical URL domain** in ToolPageTemplate.tsx -- use actual domain

8. **Update sitemap.xml** to include About page and legal pages

9. **Improve 404 page** with helpful links and SEO tags

### Phase 4 -- Polish

10. **Replace WarriorPlus placeholder links** with actual payment URLs when ready
11. **Persist dark mode** preference in localStorage
12. **Connect "Watch Demo" buttons** to actual video or remove them
13. **Sync countdown timers** across components or use a shared provider

---

## 8. Questions for You

Before implementing, I need to clarify:

1. **Refund period:** Should it be 7 days or 30 days across all pages?
2. **Dead navigation links:** Should I remove the broken links (Pricing, Support, Resources, Blog, Contact, Docs) from header/footer, or create placeholder pages for them?
3. **WarriorPlus links:** Do you have actual payment URLs to replace the placeholders, or should they stay as-is for now?

