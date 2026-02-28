import { useState } from "react";
import { Link } from "react-router-dom";
import { FileKey, Check, ArrowRight, Play, CircleAlert, Search, BookOpen, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";

const features = [
  { title: "Auto-Parse License Files", description: "Streams license.txt, rights.txt, and readme files from inside archives without extracting. Supports TXT, RTF, HTML, and PDF formats." },
  { title: "Can / Can't / Maybe Checklist", description: "Color-coded checklist covering 12+ common PLR use cases: rebrand, sell, give away, use on KDP, pass on rights, and more." },
  { title: "License Type Badge", description: "Every package displays a colored badge — PLR, MRR, RR, Commercial, or Unknown — visible across all library views." },
  { title: "Ambiguity Alerts", description: "When a right can't be determined with confidence, it's flagged as MAYBE with the raw license text so you can decide." },
  { title: "Manual Override & Annotation", description: "Override any auto-detected right and add your own notes. Your manual decisions are saved and always take priority." },
  { title: "Filter by Rights", description: "Filter your entire library by specific rights — show everything you can sell, rebrand, or use in email campaigns." },
  { title: "Rights Summary Export", description: "Export a plain-text or CSV summary of rights for all packages. Perfect for reference or sharing with a VA." },
  { title: "PLR License Phrase Library", description: "Built-in database of common license phrases with plain-English explanations. Helps the parser correctly interpret ambiguous legal language." },
];

const techSpecs = [
  "Reads from ZIP, RAR, and 7Z archives without extracting",
  "Supports TXT, RTF, HTML, and PDF license files",
  "Pattern matching against 100+ known PLR license templates",
  "Confidence scoring for each detected right",
  "Runs 100% offline — no data leaves your machine",
  "12+ common PLR use cases checked per package",
  "CSV and plain-text export of rights summaries",
  "Smart Collection integration for rights-based filtering",
];

const faqs = [
  { question: "Does the decoder work with all PLR packages?", answer: "The decoder uses pattern matching against 100+ known PLR license templates and handles TXT, RTF, HTML, and PDF license files. It reads directly from ZIP, RAR, and 7Z archives without extracting. Some heavily customised or unusual license formats may be flagged as Unknown — in these cases the raw license text is displayed so you can make a manual decision." },
  { question: "What if the decoder gets a right wrong?", answer: "You can override any auto-detected right at any time using Manual Override & Annotation. Add your own notes, change Can to Can't or Maybe, and your manual decision is saved permanently and always takes priority over the auto-detection. Your overrides are never lost." },
  { question: "Does it work offline?", answer: "Yes. License Rights Decoder runs 100% offline. No data ever leaves your machine. No internet connection is required at any point. Your PLR library and all rights data stay completely private on your own computer." },
  { question: "Can I filter my entire library by specific rights?", answer: "Yes. You can filter your entire library to show only content matching any specific right — resell, rebrand, KDP, give away, email campaigns, and more. Smart Collection integration means these filtered views update automatically as you add new content to your library." },
  { question: "What does the MAYBE status mean?", answer: "MAYBE means the auto-parser found language related to that right but couldn't determine with confidence whether it's permitted or prohibited. The raw license text from the file is shown alongside the MAYBE flag so you can read the original language and make your own call. You can then override it to Can or Can't and add a note explaining your decision." },
  { question: "Can I export my rights data?", answer: "Yes. Rights Summary Export lets you export a plain-text or CSV summary of rights for all packages in your library. This is useful for sharing with a virtual assistant, keeping records, or building a content plan based on what you're actually licensed to do." },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "License Rights Decoder",
  description: "Stop guessing your PLR rights. License Rights Decoder auto-reads license files from any PLR package and gives you a plain-English Can / Can't / Maybe checklist in seconds. No legal degree required.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS",
  offers: {
    "@type": "Offer",
    price: "27",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "98",
  },
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

export default function LicenseDecoderPage() {
  const [activeTab, setActiveTab] = useState("checklist");

  return (
    <>
      <SEOHead
        title="PLR License Rights Decoder | Instantly Know What You Can Do With Any PLR Content"
        description="Stop guessing your PLR rights. License Rights Decoder auto-reads license files from any PLR package and gives you a plain-English Can / Can't / Maybe checklist in seconds. No legal degree required."
        keywords="PLR license decoder, license rights checker, PLR rights parser, license tracker, PLR license analyzer"
        canonicalUrl="https://plrorganizerpro.com/tools/license-decoder"
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
              <FileKey className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Know Your Rights Instantly</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              PLR License Rights Decoder: Stop Guessing What You Can Do With Your PLR Content
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every PLR package comes with different license terms buried in text files. Misreading them means accidentally violating terms, losing resell rights, or leaving money on the table. License Rights Decoder automatically reads every license file and gives you a plain-English summary of exactly what you can and cannot do — in seconds, no legal degree required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/funnel/offer">
                <Button variant="cta" size="xl">
                  Get License Rights Decoder Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outlineGhost" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo ▷
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Runs 100% Offline — Your Data Never Leaves Your Machine</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 7-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> One-Time Payment — No Subscription</span>
            </div>
          </div>
        </header>

        {/* ── PROBLEM / SOLUTION ── */}
        <section className="py-16 bg-muted" aria-label="Problem and Solution">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Why PLR License Confusion is Costing You Money</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Problem */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-destructive mb-4">License Confusion Costs You Money</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Accidentally violate license terms — risk losing resell rights permanently</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Miss monetisation opportunities — not realising you can sell or use content on KDP</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Waste hours reading dense legal text — buried in ZIP archives and readme files</li>
                </ul>
              </div>
              {/* Solution */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-success mb-4">Crystal-Clear Rights in Seconds</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Auto-parses license files from inside ZIP, RAR, and 7Z archives</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Colour-coded Can / Can't / Maybe checklist for every package</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Covers 12+ common PLR use cases instantly</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Override any auto-detected right and add your own notes</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Filter your entire library by specific rights</li>
                </ul>
                <Link to="/funnel/offer" className="inline-block mt-6">
                  <Button variant="cta" size="sm">Decode Your First License Now <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 bg-background" aria-label="Features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Powerful License Rights Decoder Features</h2>
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

        {/* ── TABBED: HOW THE RIGHTS SYSTEM WORKS ── */}
        <section className="py-16 bg-muted" aria-label="How the Rights System Works">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-3">Understanding Your PLR Rights at a Glance</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">Four powerful ways License Rights Decoder helps you act on your content confidently</p>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="checklist">Can / Can't / Maybe</TabsTrigger>
                <TabsTrigger value="badges">License Type Badges</TabsTrigger>
                <TabsTrigger value="ambiguity">Ambiguity Alerts</TabsTrigger>
                <TabsTrigger value="filtering">Rights-Based Filtering</TabsTrigger>
              </TabsList>
              <TabsContent value="checklist" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Colour-Coded Rights Checklist for Every Package</h3>
                  <p className="text-muted-foreground mb-4">Every PLR package gets an instant checklist covering 12+ common use cases. <Badge className="bg-success text-success-foreground">Green</Badge> means you're clear to proceed. <Badge variant="destructive">Red</Badge> means it's prohibited under your license. <Badge className="bg-warning text-warning-foreground">Yellow</Badge> means the license is ambiguous — and the raw license text is shown so you can decide for yourself.</p>
                  <p className="text-muted-foreground">Use cases covered include: resell, rebrand, use on KDP, give away, use in email campaigns, add to membership site, sell as your own, and more.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="badges" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Instantly Identify PLR, MRR, RR, Commercial, and Unknown Licenses</h3>
                  <p className="text-muted-foreground">Every package in your library displays a coloured badge identifying the license type — PLR (Private Label Rights), MRR (Master Resell Rights), RR (Resell Rights), Commercial, or Unknown. Badges are visible across all library views so you never have to open a file to know what you're working with.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="ambiguity" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Never Miss an Unclear License Term</h3>
                  <p className="text-muted-foreground">When the auto-parser can't determine a right with confidence, it flags it as MAYBE and shows the exact raw license text from the file alongside it. This means you always have full context to make an informed decision — and you can override it with your own manual decision that is saved permanently and always takes priority over the auto-detection.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="filtering" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Find Exactly the Content You Need, Instantly</h3>
                  <p className="text-muted-foreground">Filter your entire PLR library to show only content matching specific rights criteria. Want to see everything you can resell right now? One click. Want to find everything approved for KDP? One click. Smart Collection integration lets you build automatic collections that update as you add new content to your library.</p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-background" aria-label="How It Works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How License Rights Decoder Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in minutes with our simple 3-step process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1, title: "Import Your Library",
                  desc: "Point PLR Organizer Pro at your PLR folders. The decoder automatically finds and reads all license files.",
                  bullets: [
                    "Reads from ZIP, RAR, and 7Z archives without extracting",
                    "Supports TXT, RTF, HTML, and PDF license file formats",
                    "Pattern matching against 100+ known PLR license templates",
                  ],
                },
                {
                  step: 2, title: "Review Your Rights",
                  desc: "See a colour-coded Can / Can't / Maybe checklist for every package. Override anything the auto-parser got wrong.",
                  bullets: [
                    "12+ common PLR use cases checked per package",
                    "Confidence scoring for each detected right",
                    "Raw license text shown for every ambiguous result",
                  ],
                },
                {
                  step: 3, title: "Filter & Take Action",
                  desc: "Filter your library by rights to find content you can sell, rebrand, or repurpose immediately.",
                  bullets: [
                    "Filter by any specific right across your entire library",
                    "Export a plain-text or CSV rights summary for all packages",
                    "Smart Collection integration for rights-based filtering",
                  ],
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-red">{s.step}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{s.title}</h3>
                  <p className="text-muted-foreground mb-3">{s.desc}</p>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left inline-block">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" /> {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── REAL-WORLD USE CASES ── */}
        <section className="py-16 bg-muted" aria-label="Real-World Use Cases">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">PLR Rights Examples in the Real World</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how content marketers and affiliate site owners use License Rights Decoder to monetise faster</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: BookOpen,
                  title: "Finding everything in your library you can sell on KDP",
                  description: "Upload your entire PLR library and filter by KDP rights in one click. Instantly see every package you're licensed to publish on Amazon Kindle Direct Publishing — no more reading through individual license files.",
                },
                {
                  icon: ShoppingCart,
                  title: "Verifying resell rights before listing on a marketplace",
                  description: "Before listing any PLR product for resale, run it through the decoder to confirm your MRR or RR license covers marketplace reselling. The Can / Can't checklist gives you clear confirmation in seconds.",
                },
                {
                  icon: Search,
                  title: "Sharing a rights summary with your virtual assistant",
                  description: "Export a plain-text or CSV rights summary for your entire library and share it with your VA or team. They'll know exactly what they're allowed to do with each piece of content without needing access to the app.",
                },
              ].map((card, i) => (
                <Card key={i} className="bg-card border-0 shadow-md hover:shadow-lg transition-shadow" aria-label={card.title}>
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-secondary mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{card.description}</p>
                    <Link to="/funnel/offer" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
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
            <h2 className="text-3xl font-bold text-secondary text-center mb-8">Technical Specifications</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="grid md:grid-cols-2 gap-4">
                  {techSpecs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-muted" aria-label="Frequently Asked Questions">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-card rounded-lg border px-6 py-4 group" open={i === 0}>
                  <summary className="font-semibold text-secondary cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-muted-foreground mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="py-16 bg-gradient-primary text-primary-foreground" aria-label="Call to Action">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Use License Rights Decoder?</h2>
            <p className="text-lg opacity-90 mb-8">Get instant access to License Rights Decoder and all 3 other powerful tools included with PLR Organizer Pro.</p>
            <Link to="/funnel/offer">
              <Button variant="warning" size="xl" className="text-warning-foreground">
                Get All 4 Tools for Just $27
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
