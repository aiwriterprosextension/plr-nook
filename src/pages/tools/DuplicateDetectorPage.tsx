import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Check, ArrowRight, Play, CircleAlert, Search, Shield, Layers, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/SEOHead";

const features = [
  { title: "Exact Duplicate Detection", description: "SHA-256 file hashing finds byte-for-byte identical packages even when filenames are completely different. Zero extra scan time required." },
  { title: "Near-Duplicate Detection", description: "Detects packages with similar internal file structure using file count, type distribution, and folder name comparison. Adjustable similarity threshold from 50% to exact." },
  { title: "Content Overlap Scanner", description: "Compares article titles, chapter names, and document filenames across packages to find shared content even in differently packaged products." },
  { title: "Smart Keep Recommendations", description: "Recommends which copy to keep based on quality score, file count, license type, and date added. Full override control before any action." },
  { title: "Safe Delete with Undo", description: "Deleted duplicates move to a holding folder, not the trash. Undo from Organization History at any time. Permanent deletion only when you explicitly empty the holding folder." },
  { title: "Space Savings Report", description: "Before any deletion, see exactly how many duplicate groups were found, total redundant files, and disk space that will be recovered." },
  { title: "Cross-Niche Overlap Detection", description: "Detects when the same content appears in packages assigned to different niches — common with broad-topic PLR bundles." },
  { title: "Duplicate Scan Settings", description: "Choose what to compare: exact hash, structure, content overlap, or all three. Exclude specific folders or set minimum file size thresholds." },
];

const techSpecs = [
  "SHA-256 hashing for exact duplicate detection",
  "Similarity scoring from 0-100% for near-duplicates",
  "Content title and chapter name cross-comparison",
  "Weighted keep/remove recommendations",
  "Holding folder with full undo support",
  "Dedicated Duplicates view in library sidebar",
  "Filter by: Exact / Near / Content Overlap / All",
  "Sort by: similarity score, file size, niche, date added",
];

const faqs = [
  { question: "Will it permanently delete my files?", answer: "No. Duplicate & Overlap Detector never permanently deletes anything without your explicit approval. When you remove a duplicate, it moves to a holding folder inside PLR Organizer Pro. You can undo any removal from Organisation History at any time. Permanent deletion only happens when you manually choose to empty the holding folder — that decision is always yours." },
  { question: "How does near-duplicate detection work?", answer: "Near-duplicate detection compares packages using internal file structure, file count, file type distribution, and folder name comparison rather than byte-level hashing. Each near-duplicate pair is given a similarity score from 0–100%. You can adjust the similarity threshold — from 50% (catches loosely similar packages) up to 99% (catches only very close matches) — to match how aggressive you want the detection to be." },
  { question: "Does it detect overlap across different niches?", answer: "Yes. Cross-Niche Overlap Detection identifies when the same content appears in packages assigned to different niches in your library. This is particularly common with broad-topic PLR bundles where the same articles are repackaged and sold under different niche labels by different sellers." },
  { question: "How much disk space can I expect to recover?", answer: "This varies significantly depending on how many PLR bundles you've purchased over the years and from how many different sellers. The Space Savings Report shows you the exact total recoverable disk space — broken down by number of duplicate groups, total redundant files, and gigabytes recoverable — before you take any action, so you always know what you're getting before committing to any cleanup." },
  { question: "Does the duplicate scan slow down my initial library scan?", answer: "No. Exact Duplicate Detection using SHA-256 hashing runs as part of the standard library scan with zero additional scan time — the hashing happens simultaneously with the file indexing. Near-duplicate and content overlap analysis runs as a secondary pass after the initial scan completes, and this is optimised to run in the background without blocking your use of the app." },
  { question: "What does the Smart Keep Recommendation actually recommend?", answer: "Smart Keep Recommendations use a weighted scoring system that considers four factors for each copy in a duplicate group: quality score (based on file completeness and format), file count (more files in a package is generally better), license type (PLR ranks higher than RR or unknown), and date added (more recently added packages score slightly higher). The recommended copy to keep is highlighted in the duplicate group view. You always have full override control — the recommendation is a suggestion, not an automatic action." },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Duplicate & Overlap Detector",
  description: "Stop wasting disk space and accidentally publishing duplicate PLR content. SHA-256 hashing and content analysis finds exact duplicates, near-duplicates, and overlapping content across your entire library — even when filenames and sellers are completely different.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS",
  offers: { "@type": "Offer", price: "27", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.7", reviewCount: "76" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function DuplicateDetectorPage() {
  const [activeTab, setActiveTab] = useState("exact");

  return (
    <>
      <SEOHead
        title="PLR Duplicate & Overlap Detector | Find Every Duplicate PLR Package Instantly"
        description="Stop wasting disk space and accidentally publishing duplicate PLR content. SHA-256 hashing and content analysis finds exact duplicates, near-duplicates, and overlapping content across your entire library — even when filenames and sellers are completely different."
        keywords="PLR duplicate detector, duplicate file finder, content overlap scanner, PLR deduplication, duplicate PLR packages"
        canonicalUrl="https://plrorganizerpro.com/tools/duplicate-detect"
        jsonLd={softwareJsonLd}
        robots="index, follow"
        author="PLR Organizer Pro"
        ogType="product"
      />

      <main className="flex flex-col scroll-smooth" role="main">
        {/* ── HERO ── */}
        <header className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24" aria-label="Hero">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6">
              <Copy className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Clean Up Your PLR Library</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              PLR Duplicate & Overlap Detector: Find Every Duplicate and Overlapping PLR Package Instantly
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Years of buying PLR bundles means you've almost certainly purchased the same content multiple times from different sellers — with completely different filenames hiding the overlap. Duplicate & Overlap Detector uses SHA-256 hashing and deep content analysis to find exact duplicates, near-duplicates, and overlapping content across your entire library, shows you exactly how much space you'll recover, and never permanently deletes anything without your explicit approval.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/funnel/offer">
                <Button variant="cta" size="xl">
                  Get Duplicate & Overlap Detector Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outlineGhost" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo ▷
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Safe Delete — Nothing Permanently Removed Without Your Approval</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 7-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> One-Time Payment — No Subscription</span>
            </div>
          </div>
        </header>

        {/* ── PROBLEM / SOLUTION ── */}
        <section className="py-16 bg-muted" aria-label="Problem and Solution">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Why Duplicate PLR is Silently Hurting Your Business</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-destructive mb-4">Duplicates Waste Space and Money</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> You've paid for the same content multiple times — different sellers, different filenames, identical articles</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Publishing duplicate content across your sites risks Google duplicate content penalties</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> A bloated library wastes disk space and makes finding usable content harder every month</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-success mb-4">Smart Detection, Safe Cleanup</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> SHA-256 hashing finds byte-for-byte identical packages instantly</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Content analysis catches near-duplicates even with different filenames</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Smart Keep Recommendations tell you exactly which copy to keep</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Space Savings Report shows recovered disk space before you act</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Nothing is permanently deleted without your explicit approval</li>
                </ul>
                <Link to="/funnel/offer" className="inline-block mt-6">
                  <Button variant="cta" size="sm">Start Cleaning Your Library Now <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 bg-background" aria-label="Features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Powerful Duplicate & Overlap Detector Features</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to maximise your PLR content productivity</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <Card key={i} className="bg-card border-0 shadow-md hover:shadow-lg transition-shadow" aria-label={feature.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABBED: DETECTION SYSTEM ── */}
        <section className="py-16 bg-muted" aria-label="How the Detection System Works">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-3">Three Layers of Detection to Find Every Duplicate in Your Library</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">From byte-perfect matches to subtle content overlaps — nothing slips through</p>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="exact">Exact Detection</TabsTrigger>
                <TabsTrigger value="near">Near-Duplicate Detection</TabsTrigger>
                <TabsTrigger value="overlap">Content Overlap</TabsTrigger>
                <TabsTrigger value="cleanup">Safe Cleanup</TabsTrigger>
              </TabsList>
              <TabsContent value="exact" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">SHA-256 Hashing Finds Byte-for-Byte Identical Packages Instantly</h3>
                  <p className="text-muted-foreground">Exact Duplicate Detection uses SHA-256 file hashing to identify packages that are completely identical at the byte level — even when the filenames, folder names, and seller names are entirely different. Detection happens automatically during your regular library scan with zero extra scan time. If two packages contain the same files, they will be found regardless of how they are named or where they are stored.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="near" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Catch Similar Packages Even When They've Been Slightly Modified</h3>
                  <p className="text-muted-foreground">Near-Duplicate Detection compares packages using internal file structure, file count, file type distribution, and folder name comparison. An adjustable similarity threshold from 50% to 100% lets you decide how aggressive the detection should be. Similarity scores from 0–100% are shown for every near-duplicate group so you can make an informed decision about which packages to keep and which to remove.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="overlap" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Find Shared Articles and Chapters Across Differently Packaged PLR Products</h3>
                  <p className="text-muted-foreground">Content Overlap Scanner compares article titles, chapter names, and document filenames across all packages in your library. This catches cases where the same content has been repackaged and sold as a different product — extremely common with broad-topic PLR bundles. Cross-Niche Overlap Detection also identifies when the same content appears in packages assigned to different niches in your library.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="cleanup" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Remove Duplicates With Full Undo — Nothing Is Ever Permanently Lost</h3>
                  <p className="text-muted-foreground">When you remove a duplicate, it moves to a holding folder — never straight to the trash. You can undo any removal from Organisation History at any time. Permanent deletion only happens when you explicitly empty the holding folder yourself. Smart Keep Recommendations use a weighted scoring system based on quality score, file count, license type, and date added to tell you exactly which copy of a duplicate group is worth keeping.</p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-background" aria-label="How It Works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How Duplicate & Overlap Detector Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in minutes with our simple 3-step process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1, title: "Scan Your Library",
                  desc: "The detector runs automatically during your library scan — no extra steps needed. Duplicates are flagged instantly.",
                  bullets: [
                    "SHA-256 hashing for exact duplicate detection with zero extra scan time",
                    "Near-duplicate analysis using file structure and content comparison",
                    "Cross-niche overlap detection included automatically",
                  ],
                },
                {
                  step: 2, title: "Review Duplicate Groups",
                  desc: "Browse grouped duplicates with similarity scores, side-by-side comparisons, and Smart Keep Recommendations.",
                  bullets: [
                    "Filter by: Exact / Near / Content Overlap / All",
                    "Sort by: similarity score, file size, niche, date added",
                    "Dedicated Duplicates view in library sidebar",
                    "Space Savings Report shows total recoverable disk space before you act",
                  ],
                },
                {
                  step: 3, title: "Clean Up Safely",
                  desc: "Remove duplicates with one click. Everything goes to a holding folder first — undo anytime before permanent deletion.",
                  bullets: [
                    "Holding folder with full undo support",
                    "Permanent deletion only on your explicit command",
                    "Organisation History log for every action taken",
                  ],
                },
              ].map((s) => (
                <Card key={s.step} className="bg-card border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">{s.step}</div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── REAL-WORLD USE CASES ── */}
        <section className="py-16 bg-muted" aria-label="Real-World Use Case Examples">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Duplicate Detection Examples in the Real World</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how PLR buyers use Duplicate & Overlap Detector to reclaim space and stop publishing the same content twice</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Discovering you paid for the same PLR bundle three times from different sellers",
                  body: "Run a library scan and the Exact Duplicate Detector immediately groups all three packages together with a 100% match score. Smart Keep Recommendations identify which copy has the best license type and file count. Remove the two redundant copies to your holding folder and recover gigabytes of disk space — all in under two minutes.",
                },
                {
                  title: "Finding overlapping articles before publishing to multiple sites",
                  body: "Before assigning PLR articles across your network of niche sites, run the Content Overlap Scanner to identify any articles that appear in multiple packages. Publishing the same article on two different sites creates a duplicate content risk with Google. The scanner catches these overlaps before they cost you rankings.",
                  highlight: true,
                },
                {
                  title: "Cleaning up a 500-package PLR library bought over several years",
                  body: "Point PLR Organizer Pro at your entire PLR folder and let the duplicate scan run. For a library of 500 packages, the scan flags every exact, near, and overlapping duplicate group automatically. Review each group at your own pace using the Duplicates sidebar view, accept the Smart Keep Recommendations, and remove redundant packages safely — with full undo available throughout.",
                },
              ].map((c, i) => (
                <Card key={i} className={`bg-card shadow-md hover:shadow-lg transition-shadow ${c.highlight ? "border-2 border-primary ring-2 ring-primary/20" : "border-0"}`}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-secondary mb-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{c.body}</p>
                    <Link to="#how-it-works" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                      See How It Works <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH SPECS ── */}
        <section className="py-16 bg-background" aria-label="Technical Specifications">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">Technical Specifications</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {techSpecs.map((spec, i) => (
                <div key={i} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-muted" aria-label="Frequently Asked Questions">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-card rounded-lg border shadow-sm" aria-label={faq.question}>
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-secondary list-none flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-16 bg-primary" aria-label="Call to Action">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Use Duplicate & Overlap Detector?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get instant access to Duplicate & Overlap Detector and all 3 other powerful tools included with PLR Organizer Pro.</p>
            <Link to="/funnel/offer">
              <Button variant="warning" size="xl" className="border-2 border-warning-foreground/20">
                Get All 4 Tools for Just $27
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* FAQ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
