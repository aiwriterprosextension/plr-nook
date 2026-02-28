import { Code } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function HTMLEditorPage() {
  return (
    <ToolPageTemplate
      seoTitle="Visual HTML Sales Page Editor - PLR Organizer Pro"
      seoDescription="Edit and customize PLR sales pages visually with a dual-pane editor, token replacement wizard, and one-click rebranding. No coding required."
      seoKeywords="HTML sales page editor, PLR page editor, visual HTML editor, sales page customizer, PLR rebranding tool"
      canonicalPath="/tools/html-editor"

      icon={Code}
      toolName="Visual HTML Sales Page Editor"
      tagline="Customize Sales Pages Without Code"
      headline="Edit Any PLR Sales Page Visually — No Coding Required"
      subheadline="Dual-pane editor with live preview, token replacement wizard, and rebranding profiles. Go from generic PLR sales page to branded, ready-to-publish funnel in minutes."

      problemTitle="PLR Sales Pages Need Heavy Customization"
      problemDescription="PLR sales pages ship with placeholder text, generic branding, and someone else's payment links. Without HTML skills, you're stuck paying developers for simple text changes or publishing pages that scream 'template' to every visitor."
      solutionTitle="Professional Rebranding Made Simple"
      solutionDescription="The Visual HTML Sales Page Editor opens any HTML file from inside your PLR archives and gives you a split-pane code + preview editor. The Token Replacement Wizard finds and replaces all placeholders in one step. Save your branding details once and apply them to every page."

      features={[
        { title: "Archive File Browser", description: "Opens HTML files directly from ZIP, RAR, or 7Z packages. Left-side file tree shows all HTML files — pick sales page, opt-in page, or thank-you page to edit." },
        { title: "Dual-Pane Editor", description: "Split-pane layout with source code on the left and live visual preview on the right. Toggle between Split View, Code Only, and Preview Only. WYSIWYG mode for non-coders." },
        { title: "Token Replacement Wizard", description: "Auto-detects placeholder tokens like [YOUR NAME], [PRICE], [PAYMENT LINK] and presents a simple form. Fill in once, replace everywhere instantly." },
        { title: "Visual Style Controls", description: "Change brand colors, fonts, button text, and images without touching code. Click any heading to edit text. Show or hide entire page sections." },
        { title: "Find & Replace", description: "Global find-and-replace across the entire HTML file with case-sensitive and regex options for advanced users." },
        { title: "Save & Export Options", description: "Save as new file or overwrite with auto-backup. Export standalone HTML, copy to clipboard for WordPress/ClickFunnels, export as Markdown, or push to Ready to Publish folder." },
        { title: "Keyboard Shortcuts", description: "Ctrl+S to save, Ctrl+Z/Y for undo/redo, Ctrl+F for find & replace, Ctrl+Shift+P to toggle preview. Professional editing efficiency." },
        { title: "Rebranding Profile", description: "Save your name, website, email, payment links, and brand colors once. Apply your profile to any PLR page with one click — instant rebranding." },
      ]}

      steps={[
        { step: 1, title: "Open a Sales Page", description: "Browse your PLR archive and pick any HTML file — sales page, opt-in page, download page, or thank-you page." },
        { step: 2, title: "Customize & Rebrand", description: "Use the token wizard to replace all placeholders. Adjust colors, fonts, images, and section visibility with visual controls." },
        { step: 3, title: "Export & Publish", description: "Export as standalone HTML, copy to clipboard for your funnel builder, or push to your Ready to Publish folder." },
      ]}

      techSpecs={[
        "Opens HTML from ZIP, RAR, and 7Z archives without extracting",
        "Real-time live preview synced with code editor",
        "WYSIWYG click-to-edit mode for non-coders",
        "Auto-detection of 12+ common PLR placeholder tokens",
        "Custom token pattern support",
        "Google Fonts-compatible font selector",
        "Standalone HTML export with inlined CSS and embedded images",
        "Auto-backup before every save operation",
      ]}

      faqs={[
        { question: "Do I need to know HTML to use this?", answer: "Not at all. The WYSIWYG mode lets you click directly on text in the preview to edit it. Visual controls handle colors, fonts, images, and section visibility. The code pane is there for advanced users who want it." },
        { question: "What is the Token Replacement Wizard?", answer: "PLR sales pages use placeholders like [YOUR NAME] and [PAYMENT LINK]. The wizard automatically finds all of them and presents a simple form. Fill in your details once and every instance is replaced throughout the entire file." },
        { question: "What's a Rebranding Profile?", answer: "You save your name, website, email, payment links, and brand colors once in a profile. When you open a new PLR sales page, apply your profile with one click and all tokens are filled in automatically." },
        { question: "Where can I publish the finished pages?", answer: "Export as standalone HTML to upload to any web host. Copy to clipboard to paste into WordPress, ClickFunnels, Kajabi, or any page builder. Or push directly to a Ready to Publish folder you define in settings." },
        { question: "Does it modify my original PLR files?", answer: "Never without your permission. By default, edits are saved as a new file alongside the original. If you choose to overwrite, the editor creates an automatic timestamped backup first." },
      ]}
    />
  );
}
