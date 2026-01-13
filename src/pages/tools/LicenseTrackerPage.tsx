import { FileKey } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function LicenseTrackerPage() {
  return (
    <ToolPageTemplate
      // SEO
      seoTitle="License Tracker - Manage PLR Usage Rights"
      seoDescription="Track PLR license terms and usage rights in one place. Never violate license agreements or miss resell opportunities again."
      seoKeywords="PLR license tracker, license management, PLR rights management, usage rights tracker, resell rights organizer"
      canonicalPath="/tools/license-tracker"
      
      // Hero
      icon={FileKey}
      toolName="License Tracker"
      tagline="Complete License Management"
      headline="Never Violate a PLR License Agreement Again"
      subheadline="Keep track of what you can and cannot do with every PLR package. Personal use, resell rights, modification rights—all organized in one place."
      
      // Problem/Solution
      problemTitle="License Confusion Costs Money"
      problemDescription="PLR packages come with different license terms, and it's impossible to remember them all. Accidentally violating terms can result in legal issues, while forgetting you have resell rights means missed revenue."
      solutionTitle="Every License at Your Fingertips"
      solutionDescription="License Tracker automatically extracts and catalogs license terms from your PLR packages. Instantly see what rights you have, filter by license type, and confidently use your content knowing you're compliant."
      
      // Features
      features={[
        { title: "Automatic License Detection", description: "AI reads and extracts license terms from readme and license files." },
        { title: "Rights Classification", description: "Clear labels for personal use, resell, modification, and giveaway rights." },
        { title: "Expiration Tracking", description: "Get alerts before time-limited licenses expire." },
        { title: "Search by Rights", description: "Find all PLR you can resell, modify, or rebrand instantly." },
        { title: "License Document Storage", description: "Original license files stored and linked for reference." },
        { title: "Compliance Reports", description: "Generate reports proving your license rights for any product." },
      ]}
      
      // Steps
      steps={[
        { step: 1, title: "Scan Library", description: "License Tracker analyzes your PLR collection automatically." },
        { step: 2, title: "Review Rights", description: "See clear, categorized license terms for every package." },
        { step: 3, title: "Use Confidently", description: "Filter by rights type and use your PLR compliantly." },
      ]}
      
      // Tech Specs
      techSpecs={[
        "AI license term extraction",
        "8 rights categories tracked",
        "Expiration date alerts",
        "Original file linking",
        "Export to spreadsheet",
        "Bulk rights editing",
        "Search and filter tools",
        "Compliance documentation",
      ]}
      
      // FAQs
      faqs={[
        { question: "How does it detect license terms?", answer: "Our AI scans license files, readme documents, and sales page content to extract and classify the specific rights granted for each PLR package." },
        { question: "What license types does it track?", answer: "We track personal use, resell rights, master resell rights, private label rights, modification rights, giveaway rights, and more—8 categories total." },
        { question: "Can I manually edit license information?", answer: "Yes. While the AI handles most detection automatically, you can always manually adjust or add license terms for any package in your library." },
        { question: "Does it track license expiration dates?", answer: "Absolutely. For time-limited licenses, the tracker stores expiration dates and sends you alerts before rights expire." },
        { question: "Can I export license information?", answer: "Yes. Export your entire license database to CSV or PDF for record-keeping, legal compliance, or team sharing." },
      ]}
    />
  );
}
