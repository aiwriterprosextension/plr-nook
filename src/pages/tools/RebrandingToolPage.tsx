import { Palette } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function RebrandingToolPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="Rebranding Tool - Customize PLR Assets in Bulk"
      seoDescription="Rebrand PLR ebooks, graphics, and templates in bulk. Change names, colors, logos, and branding across entire product packages instantly."
      seoKeywords="PLR rebranding tool, bulk rebrand PLR, customize PLR products, ebook rebrander, PLR customization software"
      canonicalPath="/tools/rebranding-tool"
      
      // Hero
      icon={Palette}
      toolName="Rebranding Tool"
      tagline="Bulk Asset Customization"
      headline="Rebrand Entire PLR Packages in Minutes, Not Hours"
      subheadline="Change names, swap logos, update colors, and customize branding across all files in a PLR package with just a few clicks."
      
      // Problem/Solution
      problemTitle="Manual Rebranding Takes Forever"
      problemDescription="A typical PLR package contains dozens of files—ebooks, graphics, emails, and more. Manually updating branding in each file is tedious, time-consuming, and error-prone. Most marketers give up and publish generic content."
      solutionTitle="Automated Bulk Rebranding"
      solutionDescription="Rebranding Tool lets you define your brand elements once, then automatically applies them across every file in your PLR package. Update product names, swap logos, change color schemes, and create a cohesive branded product in minutes."
      
      // Features
      features={[
        { title: "Find & Replace Everywhere", description: "Change product names, author names, and URLs across all files at once." },
        { title: "Logo Swapping", description: "Replace placeholder logos with your brand logo in images and PDFs." },
        { title: "Color Scheme Updates", description: "Apply your brand colors to graphics and document themes." },
        { title: "Image Resizing", description: "Batch resize graphics to your required dimensions." },
        { title: "PDF Editing", description: "Modify ebook covers, headers, footers, and internal branding." },
        { title: "Brand Presets", description: "Save your brand settings and apply to any future PLR packages." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Select Package", description: "Choose a PLR package from your organized library." },
        { step: 2, title: "Set Brand Elements", description: "Enter your product name, logo, colors, and replacement text." },
        { step: 3, title: "Apply & Export", description: "One click applies changes across all files. Export your branded package." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "Edits PDF, DOC, TXT files",
        "Modifies PNG, JPG, PSD images",
        "Batch file processing",
        "Brand preset templates",
        "Color palette extraction",
        "Maintains file quality",
        "Supports 50+ file formats",
        "Export as package or individual",
      ]}
      
      // FAQs
      faqs={[
        { question: "What file types can it rebrand?", answer: "The Rebranding Tool works with PDF, DOC/DOCX, TXT, HTML files for text replacement, and PNG, JPG, PSD, and other image formats for visual rebranding." },
        { question: "Can it change logos in images?", answer: "Yes. The tool can identify and replace placeholder logos in image files with your brand logo, maintaining size and position." },
        { question: "Will it maintain file quality?", answer: "Absolutely. We use lossless processing where possible and high-quality compression for images to ensure your rebranded files look professional." },
        { question: "Can I save my brand settings for reuse?", answer: "Yes. Create brand presets with your logo, colors, name, and URLs, then apply them to any future PLR packages with a single click." },
        { question: "How long does rebranding take?", answer: "Most PLR packages are fully rebranded in under 2 minutes. Large packages with hundreds of files may take 5-10 minutes." },
      ]}
    />
  );
}
