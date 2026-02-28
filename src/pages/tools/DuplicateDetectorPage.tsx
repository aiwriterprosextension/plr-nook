import { Copy } from "lucide-react";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";

export default function DuplicateDetectorPage() {
  return (
    <ToolPageTemplate
      seoTitle="Duplicate & Overlap Detector - PLR Organizer Pro"
      seoDescription="Find exact duplicates, near-duplicates, and content overlap across your entire PLR library. Recover disk space and avoid publishing the same content twice."
      seoKeywords="PLR duplicate detector, duplicate file finder, content overlap scanner, PLR deduplication, duplicate PLR packages"
      canonicalPath="/tools/duplicate-detector"

      icon={Copy}
      toolName="Duplicate & Overlap Detector"
      tagline="Clean Up Your PLR Library"
      headline="Find Every Duplicate and Overlapping PLR Package Instantly"
      subheadline="Uses SHA-256 hashing and content analysis to find exact duplicates, near-duplicates, and overlapping content — even when filenames and sellers are completely different."

      problemTitle="Duplicates Waste Space and Money"
      problemDescription="Years of buying PLR bundles means you've almost certainly purchased the same content multiple times from different sellers. Different filenames hide the overlap, wasting disk space and risking publishing duplicate content."
      solutionTitle="Smart Detection, Safe Cleanup"
      solutionDescription="The Duplicate & Overlap Detector uses SHA-256 hashing for exact matches and content analysis for near-duplicates. It recommends which copy to keep, shows space savings before you act, and never permanently deletes anything without your explicit approval."

      features={[
        { title: "Exact Duplicate Detection", description: "SHA-256 file hashing finds byte-for-byte identical packages even when filenames are completely different. Zero extra scan time required." },
        { title: "Near-Duplicate Detection", description: "Detects packages with similar internal file structure using file count, type distribution, and folder name comparison. Adjustable similarity threshold from 50% to exact." },
        { title: "Content Overlap Scanner", description: "Compares article titles, chapter names, and document filenames across packages to find shared content even in differently packaged products." },
        { title: "Smart Keep Recommendations", description: "Recommends which copy to keep based on quality score, file count, license type, and date added. Full override control before any action." },
        { title: "Safe Delete with Undo", description: "Deleted duplicates move to a holding folder, not the trash. Undo from Organization History at any time. Permanent deletion only when you explicitly empty the holding folder." },
        { title: "Space Savings Report", description: "Before any deletion, see exactly how many duplicate groups were found, total redundant files, and disk space that will be recovered." },
        { title: "Cross-Niche Overlap Detection", description: "Detects when the same content appears in packages assigned to different niches — common with broad-topic PLR bundles." },
        { title: "Duplicate Scan Settings", description: "Choose what to compare: exact hash, structure, content overlap, or all three. Exclude specific folders or set minimum file size thresholds." },
      ]}

      steps={[
        { step: 1, title: "Scan Your Library", description: "The detector runs automatically during your library scan — no extra steps needed. Duplicates are flagged instantly." },
        { step: 2, title: "Review Duplicate Groups", description: "Browse grouped duplicates with similarity scores, side-by-side comparisons, and smart keep recommendations." },
        { step: 3, title: "Clean Up Safely", description: "Remove duplicates with one click. Everything goes to a holding folder first — undo anytime before permanent deletion." },
      ]}

      techSpecs={[
        "SHA-256 hashing for exact duplicate detection",
        "Similarity scoring from 0-100% for near-duplicates",
        "Content title and chapter name cross-comparison",
        "Weighted keep/remove recommendations",
        "Holding folder with full undo support",
        "Dedicated Duplicates view in library sidebar",
        "Filter by: Exact / Near / Content Overlap / All",
        "Sort by: similarity score, file size, niche, date added",
      ]}

      faqs={[
        { question: "Will it permanently delete my files?", answer: "Never without your explicit approval. Deleted duplicates are moved to a holding folder inside the app. You can undo any removal from the Organization History. Permanent deletion only happens when you manually empty the holding folder." },
        { question: "How does near-duplicate detection work?", answer: "It compares the internal file structure of packages — file count, file types, folder names, and niche assignment — then assigns a similarity score from 0-100%. You can set the threshold to only show matches above 50%, 75%, 90%, or exact only." },
        { question: "Does it detect overlap across different niches?", answer: "Yes. The Cross-Niche Overlap Detection specifically looks for the same content appearing in packages assigned to different niches, which is common with broad-topic PLR bundles." },
        { question: "How much disk space can I expect to recover?", answer: "It depends on your library size, but users with 500+ packages typically find 15-30% of their library is duplicated. The Space Savings Report shows you the exact number before you take any action." },
        { question: "Does the duplicate scan slow down my initial library scan?", answer: "No. Exact duplicate detection runs on file hashes already computed during the scanning phase, so it adds zero extra time. Near-duplicate and content overlap analysis runs as a lightweight background process." },
      ]}
    />
  );
}
