import { Scan } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function PLRScannerPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="PLR Scanner - Find All PLR Content on Your Computer"
      seoDescription="Automatically scan your entire computer to find, catalog, and organize all PLR content. AI-powered detection finds hidden PLR packages in minutes."
      seoKeywords="PLR scanner, find PLR content, PLR detection software, organize PLR files, PLR content finder"
      canonicalPath="/tools/plr-scanner"
      
      // Hero
      icon={Scan}
      toolName="PLR Scanner"
      tagline="AI-Powered PLR Detection"
      headline="Find Every PLR Package Hidden on Your Computer"
      subheadline="Stop losing money on duplicate purchases. Our AI-powered scanner finds and catalogs every PLR file across all your drives in minutes."
      
      // Problem/Solution
      problemTitle="The Hidden Cost of Lost PLR"
      problemDescription="You've spent thousands on PLR content over the years, but most of it sits forgotten in random folders. Without knowing what you own, you keep buying duplicates and miss opportunities to use content you've already paid for."
      solutionTitle="Complete PLR Visibility in Minutes"
      solutionDescription="PLR Scanner uses advanced AI to analyze file names, folder structures, readme files, and license documents to identify every PLR package on your system. No more hunting through folders—see everything you own in one organized view."
      
      // Features
      features={[
        { title: "Deep Drive Scanning", description: "Scans local drives, external HDDs, SSDs, USB drives, and network locations." },
        { title: "Nested Archive Detection", description: "Finds PLR inside ZIP files within ZIP files—no stone left unturned." },
        { title: "AI Content Recognition", description: "Smart algorithms identify PLR by analyzing multiple file characteristics." },
        { title: "Duplicate Detection", description: "Instantly identifies content you own multiple copies of to prevent re-purchases." },
        { title: "Metadata Extraction", description: "Automatically reads license files and readme documents for product details." },
        { title: "Progress Tracking", description: "Real-time scan progress with pause and resume capabilities." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Select Drives", description: "Choose which drives, folders, or locations you want to scan for PLR content." },
        { step: 2, title: "Start Scan", description: "Click scan and let our AI analyze your files. Takes minutes, not hours." },
        { step: 3, title: "Review Results", description: "See a complete inventory of all PLR found, organized and ready to use." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "Scans 10,000+ files per minute",
        "Supports 50+ file formats",
        "Reads ZIP, RAR, 7Z archives",
        "Network drive compatible",
        "Incremental scanning support",
        "Export results to CSV/JSON",
        "Scheduled scan automation",
        "Low system resource usage",
      ]}
      
      // FAQs
      faqs={[
        { question: "How long does a full computer scan take?", answer: "Scan time depends on your drive size and file count. A typical 500GB drive with 100,000 files scans in 15-30 minutes. You can scan specific folders for faster results." },
        { question: "Will the scanner slow down my computer?", answer: "No. PLR Scanner uses optimized background processing that prioritizes your other work. You can continue using your computer normally during scans." },
        { question: "Can it scan external and network drives?", answer: "Yes! PLR Scanner can scan any drive connected to your computer, including external USB drives, network-attached storage (NAS), and mapped network drives." },
        { question: "How does it identify PLR content?", answer: "Our AI analyzes file names, folder structures, readme files, license documents, and content patterns to accurately identify PLR packages with over 95% accuracy." },
        { question: "Does it detect duplicate purchases?", answer: "Absolutely. The scanner identifies when you have multiple copies of the same PLR package, helping you avoid buying content you already own." },
      ]}
    />
  );
}
