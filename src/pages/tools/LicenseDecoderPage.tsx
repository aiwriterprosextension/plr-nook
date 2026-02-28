import { FileKey } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function LicenseDecoderPage() {
  return (
    <ToolPageTemplate
      seoTitle="License Rights Decoder - PLR Organizer Pro"
      seoDescription="Automatically parse PLR license files and get a clear Can, Can't, Maybe checklist of your rights. Eliminate license confusion instantly."
      seoKeywords="PLR license decoder, license rights checker, PLR rights parser, license tracker, PLR license analyzer"
      canonicalPath="/tools/license-decoder"

      icon={FileKey}
      toolName="License Rights Decoder"
      tagline="Know Your Rights Instantly"
      headline="Stop Guessing What You Can Do With Your PLR Content"
      subheadline="Automatically reads license files from any PLR package and displays a plain-English summary of exactly what you can and cannot do — no legal degree required."

      problemTitle="License Confusion Costs You Money"
      problemDescription="Every PLR package comes with different license terms buried in text files. Misreading them means accidentally violating terms, losing resell rights, or leaving money on the table because you didn't realize you could sell the content."
      solutionTitle="Crystal-Clear Rights in Seconds"
      solutionDescription="License Rights Decoder auto-parses license files from inside ZIP, RAR, and 7Z archives and presents a color-coded Can / Can't / Maybe checklist. You'll know exactly what's allowed before you invest a single minute customizing the content."

      features={[
        { title: "Auto-Parse License Files", description: "Streams license.txt, rights.txt, and readme files from inside archives without extracting. Supports TXT, RTF, HTML, and PDF formats." },
        { title: "Can / Can't / Maybe Checklist", description: "Color-coded checklist covering 12+ common PLR use cases: rebrand, sell, give away, use on KDP, pass on rights, and more." },
        { title: "License Type Badge", description: "Every package displays a colored badge — PLR, MRR, RR, Commercial, or Unknown — visible across all library views." },
        { title: "Ambiguity Alerts", description: "When a right can't be determined with confidence, it's flagged as MAYBE with the raw license text so you can decide." },
        { title: "Manual Override & Annotation", description: "Override any auto-detected right and add your own notes. Your manual decisions are saved and always take priority." },
        { title: "Filter by Rights", description: "Filter your entire library by specific rights — show everything you can sell, rebrand, or use in email campaigns." },
        { title: "Rights Summary Export", description: "Export a plain-text or CSV summary of rights for all packages. Perfect for reference or sharing with a VA." },
        { title: "PLR License Phrase Library", description: "Built-in database of common license phrases with plain-English explanations. Helps the parser correctly interpret ambiguous legal language." },
      ]}

      steps={[
        { step: 1, title: "Import Your Library", description: "Point PLR Organizer Pro at your PLR folders. The decoder automatically finds and reads all license files." },
        { step: 2, title: "Review Your Rights", description: "See a color-coded Can / Can't / Maybe checklist for every package. Override anything the auto-parser got wrong." },
        { step: 3, title: "Filter & Take Action", description: "Filter your library by rights to find content you can sell, rebrand, or repurpose immediately." },
      ]}

      techSpecs={[
        "Reads from ZIP, RAR, and 7Z archives without extracting",
        "Supports TXT, RTF, HTML, and PDF license files",
        "Pattern matching against 100+ known PLR license templates",
        "Confidence scoring for each detected right",
        "Runs 100% offline — no data leaves your machine",
        "12+ common PLR use cases checked per package",
        "CSV and plain-text export of rights summaries",
        "Smart Collection integration for rights-based filtering",
      ]}

      faqs={[
        { question: "Does the decoder work with all PLR packages?", answer: "It works with any package that includes a license, rights, terms, or readme file in TXT, RTF, HTML, or PDF format. It also matches against a library of known license templates from popular PLR stores." },
        { question: "What if the decoder gets a right wrong?", answer: "You can manually override any auto-detected right with a single click. Your manual decisions are saved permanently and always take priority over auto-detection." },
        { question: "Does it work offline?", answer: "Yes, 100%. The License Rights Decoder runs entirely on your local machine using keyword matching and pattern recognition. No data is ever sent to external servers." },
        { question: "Can I filter my entire library by specific rights?", answer: "Absolutely. Use the Filter by Rights feature to show only packages where you can sell, rebrand, give away, use on KDP, or any other specific right. You can save these filters as Smart Collections." },
        { question: "What does the MAYBE status mean?", answer: "MAYBE means the decoder found relevant license language but couldn't determine the right with high confidence. It shows you the exact text excerpt so you can make an informed decision yourself." },
      ]}
    />
  );
}
