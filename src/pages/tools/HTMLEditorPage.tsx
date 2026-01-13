import { Code } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function HTMLEditorPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="HTML Editor - Edit PLR Sales Pages Easily"
      seoDescription="Edit and customize PLR sales pages, squeeze pages, and HTML templates without coding. Visual drag-and-drop editor makes customization simple."
      seoKeywords="HTML editor, PLR page editor, sales page editor, squeeze page customizer, visual HTML editor, no-code page builder"
      canonicalPath="/tools/html-editor"
      
      // Hero
      icon={Code}
      toolName="HTML Editor"
      tagline="Visual Page Customization"
      headline="Edit PLR Sales Pages Without Writing a Single Line of Code"
      subheadline="Customize sales pages, squeeze pages, and HTML templates visually. Change text, colors, images, and layout with simple drag-and-drop."
      
      // Problem/Solution
      problemTitle="PLR Pages Need Customization"
      problemDescription="PLR sales pages come with generic branding and placeholder content. Without HTML skills, you're stuck with pages that look like everyone else's—or paying expensive developers for simple changes."
      solutionTitle="Professional Editing Made Simple"
      solutionDescription="HTML Editor gives you visual, point-and-click control over any HTML page. Change headlines, swap images, update colors, and modify layouts without touching code. Make your PLR pages uniquely yours in minutes."
      
      // Features
      features={[
        { title: "Visual Drag-and-Drop", description: "Move, resize, and rearrange page elements without coding." },
        { title: "Live Preview", description: "See changes in real-time as you make them." },
        { title: "Image Swapping", description: "Replace images by simply dropping in new files." },
        { title: "Color Customization", description: "Change colors throughout the page with a visual picker." },
        { title: "Font Management", description: "Access Google Fonts and change typography easily." },
        { title: "Responsive Testing", description: "Preview how pages look on desktop, tablet, and mobile." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Import Page", description: "Open any HTML file from your PLR collection." },
        { step: 2, title: "Edit Visually", description: "Click elements to edit text, drag to rearrange, use panels for styling." },
        { step: 3, title: "Export & Deploy", description: "Save your customized page and upload to any web host." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "Opens any HTML/CSS file",
        "Visual element selection",
        "Code view for advanced users",
        "Google Fonts integration",
        "Image optimization built-in",
        "Responsive breakpoint preview",
        "Undo/redo with history",
        "Export as HTML/CSS package",
      ]}
      
      // FAQs
      faqs={[
        { question: "Do I need to know HTML to use this?", answer: "Not at all. The visual editor lets you click on any element to edit it. You can change text, colors, images, and layouts without writing any code." },
        { question: "Can I still access the raw HTML code?", answer: "Yes. Advanced users can switch to code view at any time to make direct HTML/CSS edits. The visual and code views sync automatically." },
        { question: "What file formats does it support?", answer: "The editor opens standard HTML files along with their associated CSS and JavaScript. It supports files from virtually any PLR sales page package." },
        { question: "Can I preview mobile layouts?", answer: "Absolutely. Use the responsive preview feature to see how your page looks on desktop, tablet, and mobile screen sizes before publishing." },
        { question: "Where can I host the finished pages?", answer: "Export your pages and upload them to any web hosting service. The editor creates standard HTML files compatible with all major hosting platforms." },
      ]}
    />
  );
}
