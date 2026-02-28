import { Wand2 } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function ContentSpinnerPage() {
  return (
    <ToolPageTemplate
      seoTitle="AI Content Spinner - PLR Organizer Pro"
      seoDescription="Transform generic PLR content into unique, SEO-friendly articles that pass AI detectors. Manual and AI-assisted rewriting with uniqueness heatmaps."
      seoKeywords="AI content spinner, PLR content rewriter, PLR uniqueness checker, content transformer, PLR article spinner"
      canonicalPath="/tools/content-spinner"

      icon={Wand2}
      toolName="AI Content Spinner"
      tagline="Make PLR Content Uniquely Yours"
      headline="Transform Generic PLR Into Unique Content That Ranks and Converts"
      subheadline="Uniqueness heatmaps show exactly what needs changing. Manual or AI-assisted rewriting modes let you work your way. Before/after diff view ensures nothing is lost."

      problemTitle="Generic PLR Won't Rank or Convert"
      problemDescription="Thousands of people bought the same PLR content you did. Publishing it as-is means duplicate content penalties from Google, zero differentiation from competitors, and readers who've seen it all before."
      solutionTitle="Unique Content in Minutes, Not Hours"
      solutionDescription="AI Content Spinner shows a uniqueness heatmap highlighting exactly which parts need rewriting. Choose manual mode for full control or AI-assisted mode for suggested rewrites. A before/after diff view lets you review every change before saving."

      features={[
        { title: "Content Extractor & File Loader", description: "Opens any text-based file from inside PLR archives without fully extracting. Supports TXT, DOCX, HTML, and PDF input formats." },
        { title: "Uniqueness Heatmap", description: "Color-coded overlay shows which parts of your content are common PLR phrases vs. unique text. See exactly what needs rewriting at a glance." },
        { title: "PLR Cliché Detector", description: "Built-in library of 300+ overused PLR phrases automatically flagged with suggested replacements. Add your own custom phrases to the flagged list." },
        { title: "Manual & Assisted Rewriting", description: "Manual mode: distraction-free editor with live heatmap updates. Assisted mode: right-click any sentence for 2-3 AI-generated rewrite suggestions." },
        { title: "Before / After Diff View", description: "Side-by-side comparison with red strikethrough for removed text and green highlights for new text. Click any change to revert just that edit." },
        { title: "Readability Score", description: "Flesch-Kincaid Reading Ease score shown before and after rewriting. Know if your content became easier or harder to read." },
      ]}

      steps={[
        { step: 1, title: "Load Your Content", description: "Open any text file from your PLR library. The content extractor handles TXT, DOCX, HTML, and PDF formats." },
        { step: 2, title: "Review & Rewrite", description: "Use the uniqueness heatmap to identify what needs changing. Rewrite manually or use AI-assisted suggestions." },
        { step: 3, title: "Export Unique Content", description: "Save as TXT, HTML, DOCX, or Markdown. Copy to clipboard for direct pasting into WordPress or any CMS." },
      ]}

      techSpecs={[
        "Uniqueness scoring with target recommendations by content type",
        "Adjustable uniqueness level slider: Light, Medium, Aggressive",
        "Tone selector: Conversational, Professional, Casual, Authoritative",
        "Protected terms list — brand names and keywords never changed",
        "Content type awareness adjusts behavior for articles, emails, and sales copy",
        "Export as TXT, HTML, DOCX, Markdown, or copy to clipboard",
        "Rewrite history with version comparison and restore",
        "API key management for OpenAI/Anthropic or local Ollama model support",
        "Works fully offline in manual mode — no API key required",
        "Push to Ready to Publish folder with one click",
      ]}

      faqs={[
        { question: "Do I need an API key to use the spinner?", answer: "No. Manual mode works 100% offline with no API key. For AI-assisted rewriting suggestions, you can use your own OpenAI or Anthropic API key, or run a free local model through Ollama." },
        { question: "Will the rewritten content pass AI detectors?", answer: "The spinner is designed to produce natural, human-sounding content. The uniqueness heatmap and cliché detector help you identify and remove the patterns that AI detectors flag. Results depend on how aggressively you rewrite." },
        { question: "What's the difference between Manual and Assisted mode?", answer: "Manual mode gives you a clean editor with the heatmap visible — you rewrite everything yourself. Assisted mode adds AI-powered suggestions: right-click any sentence to get 2-3 alternative versions you can accept, reject, or edit." },
        { question: "Can I protect certain words from being changed?", answer: "Yes. The Protected Terms feature lets you define brand names, product names, keywords, and industry terms that the spinner will never modify. They're highlighted in the editor and skipped during rewriting." },
        { question: "What output formats are supported?", answer: "You can export as plain text (TXT), formatted HTML ready for WordPress, Word document (DOCX), Markdown for static sites or Notion, or copy directly to your clipboard." },
      ]}
    />
  );
}
