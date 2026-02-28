

## Footer Redesign — 4 Columns + Improved Structure

### Current State
The footer has a logo/description area (spanning 2 cols) plus 3 link columns (Company, Legal, Resources) in a 5-column grid. The Company column only has 2 links (About Us, Tools), making it feel thin. There are no direct links to individual tool pages.

### Proposed New Structure

**Layout**: Logo area (full width on top or spanning left) + 4 even columns below

```text
[Logo + tagline + social icons]
─────────────────────────────────────────────────────
Company        Tools               Legal             Resources
─────────      ──────────────────  ────────────────  ──────────────────
Home           PLR Organizer       Privacy Policy    PLR Organisation Guide
About Us       Content Spinner     Terms of Service  Blog
PLR Organizer  License Decoder     Cookie Policy     Help Documentation
Download       HTML Editor         Refund Policy     PLR Resource Centre
               Duplicate Detector
─────────────────────────────────────────────────────
(c) 2026 ... | Privacy | Terms | Cookies
Secure & Trusted Platform | 7-Day Money-Back Guarantee
```

### Key Improvements

1. **Logo section moves to full-width top row** -- gives the 4 columns equal space below instead of cramming them into 3 cols beside the logo
2. **Company column gets more links** -- Home, About Us, PLR Organizer, Download (mirrors the main nav)
3. **New Tools column** -- Direct links to all 5 tool/product pages: PLR Organizer (flagship), AI Content Spinner, License Rights Decoder, HTML Sales Page Editor, Duplicate Detector. These link to their sales/info pages, not the funnel
4. **Legal and Resources stay as-is** -- already well-structured
5. **Newsletter signup row** (optional) -- a simple email input + "Subscribe" button between the logo row and columns, with text like "Get PLR tips and product updates". Can skip if you prefer to keep it clean
6. **Platform badges** -- Add small "Windows | Mac | Linux" text or icons near the tagline to reinforce cross-platform support

### Technical Details

- Single file edit: `src/components/layout/Footer.tsx`
- Grid changes from `md:grid-cols-5` to a two-row layout: logo row (full width) + `grid-cols-2 md:grid-cols-4` for the link columns
- Tool links use existing routes (`/plr-organizer`, `/tools/content-spinner`, `/tools/license-decoder`, `/tools/html-editor`, `/tools/duplicate-detector`)
- Company links: `/` (Home), `/about` (About Us), `/plr-organizer` (PLR Organizer), `#` (Download placeholder)
- Bottom bar remains unchanged (copyright, quick legal links, trust badges)
- All links use `<Link>` from react-router-dom for internal navigation

