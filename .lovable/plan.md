

# Interactive Uniqueness Slider Demo

Replace the "PLR-Specific Examples" section (lines 255-279) with an interactive slider-driven demo that lets visitors see how Content Spinner transforms text at different uniqueness levels.

## How It Works

A sample PLR paragraph is displayed alongside a 3-position slider (Light / Medium / Aggressive). As the user moves the slider, the displayed text swaps to a progressively more rewritten version with:

- A uniqueness percentage badge that updates (e.g., 55% / 75% / 92%)
- Color-highlighted words/phrases showing what changed from the original
- A smooth fade transition between versions

## Layout

```text
+----------------------------------------------------------+
|   Try It: See How Uniqueness Levels Transform PLR         |
|   Drag the slider to see the same PLR paragraph at        |
|   different spinning levels.                              |
|                                                           |
|   [ Light ----o---- Medium --------- Aggressive ]        |
|                                                           |
|   +------------------------+  +------------------------+ |
|   |  ORIGINAL              |  |  SPUN RESULT           | |
|   |  (sample PLR text,     |  |  (rewritten version    | |
|   |   static, with red     |  |   with green highlights| |
|   |   cliche highlights)   |  |   on changed text)     | |
|   +------------------------+  +------------------------+ |
|                                                           |
|   Uniqueness Score: ████████░░ 75%                        |
|                                                           |
|   [ Get AI Content Spinner Now -> ]                       |
+----------------------------------------------------------+
```

## Sample Content (3 versions)

**Original PLR (always shown on the left):**
> "In today's fast-paced digital world, making money online has never been easier. With the right tools and strategies, anyone can build a thriving online business from the comfort of their own home. This comprehensive guide will show you everything you need to know to get started on your journey to financial freedom."

**Light (55%):** Synonym swaps only -- a few words changed, structure intact.

**Medium (75%):** Sentences reworded, some reordered -- noticeably different but same meaning.

**Aggressive (92%):** Fully restructured paragraph -- reads as original writing.

## Technical Details

### State Management
- `useState` with a `level` value of `0 | 1 | 2` controlled by the Radix `Slider` component (already installed)
- Three pre-written text strings stored in a `versions` array
- Changed words/phrases wrapped in `<mark>` tags with green background styling

### Components Used
- `Slider` from `@/components/ui/slider` (already available)
- `Card` for the two text panels
- `Badge` for the uniqueness percentage
- `Progress` bar for the visual uniqueness meter
- CSS `transition-opacity` for smooth text swaps

### File Changed
- `src/pages/tools/ContentSpinnerPage.tsx` -- replace lines 255-279 (the USE CASE EXAMPLES section) with the new interactive demo section

### Accessibility
- Slider has `aria-label="Uniqueness level"`
- Level labels announced via `aria-live="polite"` region
- Color highlights supplemented with underline styling for color-blind users
