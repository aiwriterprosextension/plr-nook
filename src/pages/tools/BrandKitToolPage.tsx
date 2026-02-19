import { Palette } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function BrandKitToolPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="Brand Kit Tool - Consistent Branding for PLR Content"
      seoDescription="Create a consistent brand identity across all your PLR content. Store logos, colors, fonts and apply them with one click to maintain professional branding."
      seoKeywords="brand kit tool, PLR branding, brand consistency, logo management, brand identity tool, PLR content branding"
      canonicalPath="/tools/brand-kit"
      
      // Hero
      icon={Palette}
      toolName="Brand Kit Tool"
      tagline="One-Click Brand Consistency"
      headline="Create a Consistent Brand Identity Across All Your PLR Content"
      subheadline="Store logos, colors, fonts and apply them with one click to maintain consistent branding across all your PLR content."
      
      // Problem/Solution
      problemTitle="PLR Content Looks Generic"
      problemDescription="PLR products ship with default branding that screams 'template.' Without consistent colors, fonts, and logos, your content looks unprofessional and fails to build brand recognition."
      solutionTitle="Professional Branding in One Click"
      solutionDescription="Brand Kit Tool stores your complete brand identity—logos, color palettes, fonts, and style guidelines—and applies them to any PLR content with a single click. Every piece of content looks unmistakably yours."
      
      // Features
      features={[
        { title: "Logo Bank with Placement Suggestions", description: "Store multiple logo variants and get smart placement recommendations." },
        { title: "Color Palette Storage", description: "Save your brand colors and apply them consistently across all content." },
        { title: "Font Pairing Recommendations", description: "Get professional font combinations that match your brand identity." },
        { title: "One-Click Brand Application", description: "Apply your entire brand kit to any PLR content instantly." },
        { title: "Brand Style Guide Generator", description: "Auto-generate a brand style guide from your stored assets." },
        { title: "Multi-Brand Support", description: "Manage multiple brand identities for different projects or clients." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Build Your Kit", description: "Upload logos, set colors, choose fonts to create your brand profile." },
        { step: 2, title: "Select Content", description: "Choose the PLR content you want to rebrand." },
        { step: 3, title: "Apply & Export", description: "One click applies your brand across all selected content." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "Unlimited logo storage",
        "Custom color palette builder",
        "Google Fonts integration",
        "One-click brand application",
        "Multi-brand profiles",
        "Style guide PDF export",
        "Batch branding support",
        "Template preview system",
      ]}
      
      // FAQs
      faqs={[
        { question: "How many brand profiles can I create?", answer: "Unlimited. Create separate brand kits for each business, client, or project. Switch between them instantly when branding different PLR content." },
        { question: "What logo formats are supported?", answer: "We support PNG, SVG, JPG, and WebP formats. For best results, upload SVG logos for crisp rendering at any size." },
        { question: "Can I apply branding to HTML content?", answer: "Yes. The Brand Kit Tool works seamlessly with the HTML Editor to apply your colors, fonts, and logos to sales pages and web content." },
        { question: "Does it suggest font pairings?", answer: "Yes. Based on your brand style, we recommend professional heading and body font combinations from Google Fonts that complement your brand identity." },
        { question: "Can I export a brand style guide?", answer: "Absolutely. Generate a professional PDF brand style guide with all your colors, fonts, logos, and usage guidelines—perfect for team consistency." },
      ]}
    />
  );
}
