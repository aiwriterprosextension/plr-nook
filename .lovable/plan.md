

## Internal Linking Strategy for SEO

### Current State

The site has 12+ indexable pages but weak cross-linking between them. Most pages only link to `/funnel/offer` (the sales funnel) and lack contextual links to sibling pages. This limits how search engines discover and rank deeper pages.

### Strategy Overview

Add contextual internal links across all major pages so every page links to at least 3 other relevant pages using descriptive anchor text. No new pages are created -- this only adds `<Link>` elements to existing content.

```text
                    Homepage (/)
                   /    |     \
        PLR Organizer  Tools Hub  Download
           /    \       /  |  \  \
     License  HTML   Spinner  Duplicate  About
      Decoder  Editor         Detector
```

### Changes by Page

**1. Homepage (`src/pages/Index.tsx`)**
- In the "How It Works" Step 1, link "Download & Install" text to `/download`
- In the tools section, make each tool card link to its dedicated page (some already do -- verify and fill gaps)
- Add a "Learn more about PLR Organizer Pro" link in the features section pointing to `/plr-organizer`
- In the FAQ answers, link relevant mentions: "desktop app" to `/download`, "License Decoder" to `/tools/license-decoder`, "HTML Editor" to `/tools/html-editor`, "Content Spinner" to `/tools/content-spinner`

**2. PLR Organizer (`src/pages/PLROrganizer.tsx`)**
- In the "Included Tools" section, ensure all 4 tool cards link to their individual pages (already partially done)
- Add a "Download for Windows, Mac & Linux" link in the hero or CTA pointing to `/download`
- Change the placeholder `#` on "Download PLR Organizer" button (~line 577) to `/download`
- Add contextual mention linking to `/about` in the trust/credibility section

**3. Tools Hub (`src/pages/ToolsPage.tsx`)**
- Add a brief intro paragraph linking back to `/plr-organizer` ("All tools are included with PLR Organizer Pro")
- Add a "Download the desktop app" link to `/download`

**4. Each Tool Page (License Decoder, HTML Editor, Duplicate Detector, Content Spinner)**
- Add a "Related Tools" section at the bottom of each page listing the other 3 tools with links
- Add a contextual link back to `/plr-organizer` ("Part of PLR Organizer Pro")
- Add a link to `/download` in each page's CTA area

**5. Download Page (`src/pages/DownloadPage.tsx`)**
- Add links to `/plr-organizer` ("Learn what PLR Organizer Pro can do")
- Add links to `/tools` ("Explore the included tools")

**6. About Page (`src/pages/About.tsx`)**
- Add links to `/plr-organizer`, `/tools`, and `/download` in the body content or CTA

**7. Footer (`src/components/layout/Footer.tsx`)**
- Already well-linked with 4 columns -- no changes needed

### Implementation Rules

- Use descriptive anchor text (e.g., "License Rights Decoder" not "click here")
- Use React Router `<Link>` for all internal links
- Add `aria-label` where anchor text alone may be ambiguous
- Keep links contextual -- placed within relevant content, not forced
- Target 3-5 internal links per page minimum (excluding nav/footer)

### Technical Details

Files to edit:
- `src/pages/Index.tsx` -- add 4-6 contextual links in features, how-it-works, and FAQ sections
- `src/pages/PLROrganizer.tsx` -- fix placeholder `#` link, add download and about links
- `src/pages/ToolsPage.tsx` -- add intro links to PLR Organizer and Download
- `src/pages/tools/ContentSpinnerPage.tsx` -- add "Related Tools" section
- `src/pages/tools/LicenseDecoderPage.tsx` -- add "Related Tools" section
- `src/pages/tools/HTMLEditorPage.tsx` -- add "Related Tools" section
- `src/pages/tools/DuplicateDetectorPage.tsx` -- add "Related Tools" section
- `src/pages/DownloadPage.tsx` -- add contextual links to PLR Organizer and Tools
- `src/pages/About.tsx` -- add links to product and download pages

Each tool page gets a shared "Related Tools" component pattern: a simple 3-card row at the bottom (above the final CTA) showing the other 3 tools with icon, name, one-line description, and a link. This can be extracted into a reusable `RelatedTools` component that accepts the current tool's name to exclude it.

