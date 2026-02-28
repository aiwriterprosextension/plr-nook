

# Updated Plan: New Tools Hub + Tool Sales Pages

## Summary

Replace the old 4-tool suite with the new 4-tool suite. Rebuild the `/tools` hub page to match the attached screenshot layout. Create 4 new tool sales pages using the **existing `ToolPageTemplate` component** (no template redesign needed -- just populate with new content from the spec).

---

## New Tool Suite

| # | Tool Name | Route |
|---|-----------|-------|
| 1 | License Rights Decoder | `/tools/license-decoder` |
| 2 | Visual HTML Sales Page Editor | `/tools/html-editor` (overwrite existing) |
| 3 | Duplicate and Overlap Detector | `/tools/duplicate-detector` |
| 4 | AI Content Spinner | `/tools/content-spinner` |

---

## Files to Create

### 1. `src/pages/tools/LicenseDecoderPage.tsx`
Uses `ToolPageTemplate` with content from spec:
- Features: Auto-Parse License Files, Can/Can't/Maybe Checklist, License Type Badge, Ambiguity Alerts, Manual Override, Filter by Rights, Rights Summary Export, PLR License Phrase Library
- 3-step "How It Works", tech specs, 5 FAQs
- Full SEO: title, meta, JSON-LD (SoftwareApplication + FAQPage)

### 2. `src/pages/tools/DuplicateDetectorPage.tsx`
Uses `ToolPageTemplate` with content from spec:
- Features: Exact Duplicate Detection (SHA-256), Near-Duplicate Detection, Content Overlap Scanner, Smart Keep Recommendations, Safe Delete with Undo, Space Savings Report, Duplicate Scan Settings, Cross-Niche Overlap Detection
- Full SEO

### 3. `src/pages/tools/ContentSpinnerPage.tsx`
Uses `ToolPageTemplate` with content from spec:
- Features: Content Extractor, Uniqueness Heatmap, PLR Cliche Detector, Rewriting Modes, Before/After Diff View, Readability Score (top 6 as feature cards), remaining features in Tech Specs
- Full SEO

---

## Files to Overwrite

### 4. `src/pages/tools/HTMLEditorPage.tsx`
Replace current content with new "Visual HTML Sales Page Editor" spec:
- Features: Archive File Browser, Dual-Pane Editor, Token Replacement Wizard, Visual Style Controls, Find and Replace, Save/Export Options, Keyboard Shortcuts, Rebranding Profile
- Full SEO

### 5. `src/pages/ToolsPage.tsx`
Redesign to match the attached tools hub screenshot:
- Hero section with title and subtitle
- 2x2 card grid, each card showing: icon, tool name, short description, 3 key feature bullets, "Learn More" link
- Bottom CTA section linking to `/funnel/offer`
- SEOHead with JSON-LD, proper heading hierarchy

---

## Files to Delete

- `src/pages/tools/PLRScannerPage.tsx`
- `src/pages/tools/ContentTransformerPage.tsx`
- `src/pages/tools/LicenseTrackerPage.tsx`

---

## Files to Edit

### 6. `src/App.tsx`
- Remove old route imports (PLRScannerPage, ContentTransformerPage, LicenseTrackerPage)
- Add new route imports (LicenseDecoderPage, DuplicateDetectorPage, ContentSpinnerPage)
- Replace old routes with new routes
- Keep redirect: `/tools/content-transformer` -> `/tools/content-spinner`
- Remove redirect for `/tools/uniqueness-meter`
- Add redirect: `/tools/plr-scanner` -> `/tools` (catch old links)
- Add redirect: `/tools/license-tracker` -> `/tools/license-decoder`

### 7. `src/components/layout/Header.tsx`
- Update `tools` array (lines 15-20) with 4 new tool names, descriptions, icons, and routes
- Remove dead links: `/pricing` (line 118) and `/support` (line 124) from desktop nav
- Remove `/pricing` and `/support` from mobile menu (lines 196-199)

### 8. `src/components/layout/Footer.tsx`
- Remove dead links from `footerLinks`: `/contact`, `/docs`, `/resources/tutorials`, `/resources/knowledge-base`, `/blog`
- Keep: About Us, all legal pages

### 9. `src/pages/Index.tsx`
- Update `tools` array (lines 38-43) with new 4 tool names/descriptions
- Change "6 Built-in Power Tools" (line 305) to "4 Built-in Power Tools"

### 10. `src/components/landing/ValueStack.tsx`
- Update "7 Bonus Tools Included" (line 8) to "4 Built-in Power Tools"
- Adjust value amounts and totals to be consistent

### 11. `src/components/ToolPageTemplate.tsx`
- Line ~291: Change "all 5 other powerful tools" to "all 3 other powerful tools"
- Line ~296: Change "Get All 6 Tools" to "Get All 4 Tools"
- Update canonical URL domain from `plrorganizerpro.com` to `plr-nook.lovable.app`

---

## SEO Standards (Applied to All New Pages)

- Unique title tags under 60 characters
- Meta descriptions under 160 characters with target keywords
- Single H1 per page with primary keyword
- Proper heading hierarchy (H1 > H2 > H3)
- JSON-LD: SoftwareApplication + FAQPage schemas
- Canonical URLs pointing to `plr-nook.lovable.app`
- Semantic HTML with `aria-labelledby` attributes
- Internal links between tool pages and to funnel offer

---

## File Change Summary

| Action | File |
|--------|------|
| Create | `src/pages/tools/LicenseDecoderPage.tsx` |
| Create | `src/pages/tools/DuplicateDetectorPage.tsx` |
| Create | `src/pages/tools/ContentSpinnerPage.tsx` |
| Overwrite | `src/pages/tools/HTMLEditorPage.tsx` |
| Overwrite | `src/pages/ToolsPage.tsx` |
| Delete | `src/pages/tools/PLRScannerPage.tsx` |
| Delete | `src/pages/tools/ContentTransformerPage.tsx` |
| Delete | `src/pages/tools/LicenseTrackerPage.tsx` |
| Edit | `src/App.tsx` |
| Edit | `src/components/layout/Header.tsx` |
| Edit | `src/components/layout/Footer.tsx` |
| Edit | `src/pages/Index.tsx` |
| Edit | `src/components/landing/ValueStack.tsx` |
| Edit | `src/components/ToolPageTemplate.tsx` |

