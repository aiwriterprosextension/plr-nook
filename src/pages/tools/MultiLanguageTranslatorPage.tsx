import { Languages } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function MultiLanguageTranslatorPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="Multi-Language Translator - Translate PLR Into 27 Languages"
      seoDescription="Expand your reach by translating PLR content into 27 languages. Context-aware translations with formatting preservation for global audiences."
      seoKeywords="PLR translator, multi-language content, translate PLR, content translation tool, global PLR content, multilingual content"
      canonicalPath="/tools/multi-language-translator"
      
      // Hero
      icon={Languages}
      toolName="Multi-Language Translator"
      tagline="Global Content Reach"
      headline="Convert PLR Content Into 27 Different Languages"
      subheadline="Expand your reach by translating your PLR content into multiple languages for global audiences."
      
      // Problem/Solution
      problemTitle="You're Missing 75% of the Internet"
      problemDescription="English-only content limits you to just 25% of internet users. Your competitors are already reaching Spanish, Portuguese, French, and German-speaking markets with translated content—and capturing revenue you're leaving on the table."
      solutionTitle="Instant Global Reach"
      solutionDescription="Multi-Language Translator converts your PLR content into 27 languages with context-aware AI that preserves meaning, tone, and formatting. Reach new markets without hiring expensive translators."
      
      // Features
      features={[
        { title: "27 Language Support", description: "Translate into 27 major languages covering 95% of global internet users." },
        { title: "Context-Aware Translations", description: "AI understands context and idioms for natural-sounding translations." },
        { title: "Formatting Preservation", description: "HTML, markdown, and document formatting stay intact after translation." },
        { title: "Bulk Translation", description: "Translate entire content libraries in one batch operation." },
        { title: "Translation Memory", description: "Consistent terminology across all your translated content." },
        { title: "Side-by-Side Preview", description: "Compare original and translated content in a split-screen view." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Import Content", description: "Upload your PLR content in any supported format." },
        { step: 2, title: "Select Languages", description: "Choose one or multiple target languages for translation." },
        { step: 3, title: "Export Translations", description: "Download translated content ready for publishing." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "27 supported languages",
        "Context-aware AI translation engine",
        "HTML/Markdown formatting preservation",
        "Batch translation processing",
        "Translation memory database",
        "Glossary/terminology management",
        "Side-by-side comparison view",
        "Export to DOC, TXT, HTML, PDF",
      ]}
      
      // FAQs
      faqs={[
        { question: "Which languages are supported?", answer: "We support 27 languages including Spanish, French, German, Portuguese, Italian, Dutch, Chinese, Japanese, Korean, Arabic, Hindi, Russian, and many more." },
        { question: "How accurate are the translations?", answer: "Our AI uses context-aware translation that understands idioms and industry terminology, producing translations that read naturally to native speakers." },
        { question: "Does it preserve my formatting?", answer: "Yes. HTML tags, markdown formatting, headings, lists, and document structure are all preserved during translation." },
        { question: "Can I translate into multiple languages at once?", answer: "Absolutely. Select multiple target languages and translate your entire content library in one batch operation." },
        { question: "Can I customize terminology?", answer: "Yes. Use the glossary feature to define preferred translations for brand names, technical terms, and industry jargon." },
      ]}
    />
  );
}
