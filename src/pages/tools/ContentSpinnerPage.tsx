import { useState } from "react";
import { Link } from "react-router-dom";
import { Wand2, Check, ArrowRight, Play, CircleAlert, FileText, Layers, Users, BookOpen, PenTool, Package } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/SEOHead";

const features = [
  { title: "Content Extractor & File Loader", description: "Opens any text-based file from inside PLR archives without fully extracting. Supports TXT, DOCX, HTML, and PDF input formats." },
  { title: "Uniqueness Heatmap", description: "Color-coded overlay shows which parts of your content are common PLR phrases vs. unique text. See exactly what needs rewriting at a glance." },
  { title: "PLR Cliché Detector", description: "Built-in library of 300+ overused PLR phrases automatically flagged with suggested replacements. Add your own custom phrases to the flagged list." },
  { title: "Manual & Assisted Rewriting", description: "Manual mode: distraction-free editor with live heatmap updates. Assisted mode: right-click any sentence for 2-3 AI-generated rewrite suggestions." },
  { title: "Before / After Diff View", description: "Side-by-side comparison with red strikethrough for removed text and green highlights for new text. Click any change to revert just that edit." },
  { title: "Readability Score", description: "Flesch-Kincaid Reading Ease score shown before and after rewriting. Know if your content became easier or harder to read." },
];

const techSpecs = [
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
];

const faqs = [
  { question: "Do I need an API key to use the spinner?", answer: "No. AI Content Spinner works fully offline in manual rewriting mode — no API key or internet connection required. If you want AI-assisted suggestions, you can optionally connect your own OpenAI, Anthropic, or local Ollama API key in Settings." },
  { question: "Will the rewritten content pass AI detectors?", answer: "Manual rewrites you write yourself will not be flagged. AI-assisted rewrites use your chosen model to suggest changes — results vary depending on the model and how aggressively you rewrite. We recommend reviewing all AI suggestions before publishing." },
  { question: "What's the difference between Manual and Assisted mode?", answer: "Manual mode gives you a distraction-free editor where you rewrite content yourself, with the uniqueness heatmap updating live as you type. Assisted mode lets you right-click any sentence to receive 2–3 AI-generated rewrite suggestions that you can accept, reject, or edit." },
  { question: "Can I protect certain words from being changed?", answer: "Yes. Add any brand names, product names, keywords, or phrases to the Protected Terms list in Settings. The spinner will never alter these terms in any rewrite mode." },
  { question: "What output formats are supported?", answer: "You can export as TXT, HTML, DOCX, or Markdown. You can also copy directly to clipboard for instant pasting into WordPress, Ghost, or any CMS." },
  { question: "Can I resell PLR content after using the spinner?", answer: "Yes. Content Spinner transforms your PLR into unique content that complies with most PLR licensing agreements requiring modification before reselling. Always check your specific PLR licence terms." },
  { question: "How unique does spun PLR need to be for SEO?", answer: "For effective SEO, your content should be at least 70–80% unique compared to the original PLR. Our spinner lets you adjust uniqueness from Light (50–60%) to Aggressive (90%+) depending on your needs." },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Content Spinner — PLR Organizer Pro",
  description: "Turn generic PLR into 100% unique, rank-ready content in minutes. Uniqueness heatmaps, AI-assisted rewriting, before/after diff view. Works offline. No monthly fees.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS",
  offers: {
    "@type": "Offer",
    price: "27",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "124",
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

const originalText = "In today's fast-paced digital world, making money online has never been easier. With the right tools and strategies, anyone can build a thriving online business from the comfort of their own home. This comprehensive guide will show you everything you need to know to get started on your journey to financial freedom.";

const spunVersions = [
  {
    label: "Light",
    score: 55,
    text: (
      <>
        In today's <mark className="bg-success/20 text-foreground underline decoration-success/50">rapidly evolving</mark> digital world, <mark className="bg-success/20 text-foreground underline decoration-success/50">earning an income</mark> online has never been easier. With the <mark className="bg-success/20 text-foreground underline decoration-success/50">proper</mark> tools and strategies, anyone can build a <mark className="bg-success/20 text-foreground underline decoration-success/50">successful</mark> online business from the comfort of their own home. This <mark className="bg-success/20 text-foreground underline decoration-success/50">in-depth</mark> guide will show you everything you need to know to get started on your <mark className="bg-success/20 text-foreground underline decoration-success/50">path</mark> to financial freedom.
      </>
    ),
  },
  {
    label: "Medium",
    score: 75,
    text: (
      <>
        <mark className="bg-success/20 text-foreground underline decoration-success/50">The internet has opened up unprecedented opportunities for generating revenue from anywhere.</mark> <mark className="bg-success/20 text-foreground underline decoration-success/50">Armed with proven methods and the right software, building a profitable web-based business from home is within anyone's reach.</mark> <mark className="bg-success/20 text-foreground underline decoration-success/50">This resource walks you through each step required to launch your online income journey.</mark>
      </>
    ),
  },
  {
    label: "Aggressive",
    score: 92,
    text: (
      <>
        <mark className="bg-success/20 text-foreground underline decoration-success/50">What if you could replace your 9-to-5 salary with revenue generated entirely from your laptop? Thousands of entrepreneurs have already made this shift — and the barrier to entry is lower than ever. Inside this step-by-step blueprint, you'll discover the exact frameworks, platforms, and tactics that turn a simple internet connection into a reliable income stream.</mark>
      </>
    ),
  },
];

const levelLabels = ["Light", "Medium", "Aggressive"];

function UniquenessSliderDemo() {
  const [level, setLevel] = useState(1);
  const current = spunVersions[level];

  return (
    <section className="py-16 bg-muted" aria-label="Interactive Uniqueness Demo">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Try It: See How Uniqueness Levels Transform PLR</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Drag the slider to see the same PLR paragraph at different spinning levels.</p>
        </div>

        {/* Slider */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex justify-between text-sm font-medium text-muted-foreground mb-3">
            {levelLabels.map((l, i) => (
              <span key={l} className={i === level ? "text-primary font-bold" : ""}>{l}</span>
            ))}
          </div>
          <Slider
            value={[level]}
            onValueChange={(v) => setLevel(v[0])}
            min={0}
            max={2}
            step={1}
            aria-label="Uniqueness level"
            className="cursor-pointer"
          />
        </div>

        {/* Side-by-side panels */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="destructive" className="text-xs">Original PLR</Badge>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">{originalText}</p>
            </CardContent>
          </Card>

          <Card className="border-success/30 bg-success/5">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-success text-success-foreground text-xs">{current.label} Spin</Badge>
              </div>
              <div aria-live="polite" className="transition-opacity duration-300">
                <p className="text-sm leading-relaxed text-foreground/80">{current.text}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Uniqueness score bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">Uniqueness Score</span>
            <Badge variant="outline" className="text-primary font-bold">{current.score}%</Badge>
          </div>
          <Progress value={current.score} className="h-3" />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/funnel/offer">
            <Button variant="cta" size="lg">Get AI Content Spinner Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ContentSpinnerPage() {
  return (
    <>
      <SEOHead
        title="AI Content Spinner | Transform PLR Into Unique, SEO-Friendly Content"
        description="Turn generic PLR into 100% unique, rank-ready content in minutes. Uniqueness heatmaps, AI-assisted rewriting, before/after diff view. Works offline. No monthly fees."
        keywords="AI content spinner, PLR content rewriter, PLR uniqueness checker, content transformer, PLR article spinner"
        canonicalUrl="https://plrorganizerpro.com/tools/content-spinner"
        jsonLd={softwareJsonLd}
      />

      <main className="flex flex-col scroll-smooth" role="main">
        {/* ── HERO ── */}
        <header className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24" aria-label="Hero">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              AI Content Spinner: Transform Generic PLR Into 100% Unique, SEO-Friendly Content
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Struggling with duplicate PLR content hurting your Google rankings? PLR Organizer Pro's AI Content Spinner transforms your generic PLR into unique, valuable content that ranks in search engines and converts readers — in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/funnel/offer">
                <Button variant="cta" size="xl">
                  Get AI Content Spinner Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outlineGhost" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo ▷
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Works Offline — No API Key Required</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 7-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> One-Time Payment — No Subscription</span>
            </div>
          </div>
        </header>

        {/* ── PROBLEM / SOLUTION ── */}
        <section className="py-16 bg-muted" aria-label="Problem and Solution">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Why Generic PLR Will Hurt Your Business</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Problem */}
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-destructive mb-4">Generic PLR Won't Rank or Convert</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Google penalises duplicate content — thousands bought the same PLR you did</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Readers recognise recycled content — destroys trust and engagement</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Lower conversions — generic copy doesn't speak to your audience</li>
                </ul>
              </div>
              {/* Solution */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-success mb-4">Unique Content in Minutes, Not Hours</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Transform PLR to 100% unique content in seconds</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Maintain the core message while changing the words</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Improve readability and SEO-friendliness</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Process entire PLR collections in bulk</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Adjust uniqueness level to match your requirements</li>
                </ul>
                <Link to="/funnel/offer" className="inline-block mt-6">
                  <Button variant="cta" size="sm">Start Spinning Your Content <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 bg-background" aria-label="Features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Powerful AI Content Spinner Features</h2>
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
        {/* ── USER PERSONAS ── */}
        <section className="py-16 bg-muted" aria-label="User Personas">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-3">How Different Users Use AI Content Spinner</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">From affiliate marketers to course creators, see how professionals transform PLR into profit.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Users, title: "The Affiliate Marketer", description: "Uses Content Spinner to transform PLR product reviews into unique affiliate content that ranks for buyer-intent keywords. Spins at Medium level to keep product details intact while creating original reviews." },
                { icon: BookOpen, title: "The Course Creator", description: "Converts PLR ebook chapters into unique course modules, lesson scripts, and student worksheets. Uses Aggressive mode with protected terms to maintain technical accuracy." },
                { icon: PenTool, title: "The Niche Blogger", description: "Turns a single PLR article into 5 unique blog posts by spinning at different levels and restructuring paragraphs. Builds an entire content calendar from one PLR pack." },
                { icon: Package, title: "The PLR Reseller", description: "Transforms PLR bundles into \"uniquified\" packages with higher perceived value. Uses bulk processing to spin entire product libraries before relisting on marketplaces." },
              ].map((persona, i) => (
                <Card key={i} className="bg-card border-0 shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <persona.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-2">{persona.title}</h3>
                        <p className="text-sm text-muted-foreground">{persona.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── TABBED BRAND VOICE ── */}
        <section className="py-16 bg-muted" aria-label="Brand Voice and Content Control">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-10">Maintaining Brand Voice While Creating Unique Content</h2>
            <Tabs defaultValue="uniqueness" className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="uniqueness">Uniqueness Levels</TabsTrigger>
                <TabsTrigger value="terminology">Terminology Control</TabsTrigger>
                <TabsTrigger value="restructuring">Smart Restructuring</TabsTrigger>
                <TabsTrigger value="bulk">Bulk Processing</TabsTrigger>
              </TabsList>
              <TabsContent value="uniqueness" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Adjust Uniqueness Levels (Light vs. Aggressive Spinning)</h3>
                  <p className="text-muted-foreground mb-4">Control exactly how different your spun content will be from the original PLR. Choose from:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <strong>Light (50–60%):</strong> Changes synonyms while maintaining structure</li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <strong>Medium (70–80%):</strong> Rewrites sentences while preserving meaning</li>
                    <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /> <strong>Aggressive (90%+):</strong> Complete restructuring for maximum uniqueness</li>
                  </ul>
                  <Link to="/funnel/offer" className="inline-block mt-4"><Button variant="cta" size="sm">Try Different Spinning Levels</Button></Link>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="terminology" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Protect Your Brand Terms & Keywords</h3>
                  <p className="text-muted-foreground">Add any words, phrases, brand names, or keywords to the Protected Terms list. The spinner will never alter these — ensuring your SEO keywords, product names, and brand voice stay intact throughout every rewrite.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="restructuring" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Paragraph-Level Restructuring</h3>
                  <p className="text-muted-foreground">Beyond synonym swapping, the AI restructures entire paragraphs to change sentence order, combine ideas differently, and alter the narrative flow — creating content that feels genuinely original rather than mechanically substituted.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="bulk" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Spin Entire PLR Product Libraries at Once</h3>
                  <p className="text-muted-foreground">Upload up to 100 articles or an entire PLR package in one batch. Set your spinning parameters once and process everything in a single run. Export all results to your Ready to Publish folder with one click.</p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-background" aria-label="How It Works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How AI Content Spinner Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in minutes with our simple 3-step process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1, title: "Load Your Content",
                  desc: "Open any text file from your PLR library. The content extractor handles TXT, DOCX, HTML, and PDF formats.",
                  bullets: ["Supports all major text formats", "Process up to 100 articles in one batch"],
                },
                {
                  step: 2, title: "Review & Rewrite",
                  desc: "Use the uniqueness heatmap to identify what needs changing. Rewrite manually or use AI-assisted suggestions.",
                  bullets: ["Adjust uniqueness levels from light to aggressive", "Set protected terms for industry-specific language", "Enable paragraph restructuring for deeper changes"],
                },
                {
                  step: 3, title: "Export Unique Content",
                  desc: "Save as TXT, HTML, DOCX, or Markdown. Copy to clipboard for direct pasting into WordPress or any CMS.",
                  bullets: ["Side-by-side comparison with original PLR", "Uniqueness score verification", "Export to DOCX, HTML, WordPress"],
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

        {/* ── INTERACTIVE UNIQUENESS SLIDER DEMO ── */}
        <UniquenessSliderDemo />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Use AI Content Spinner?</h2>
            <p className="text-lg opacity-90 mb-8">Get instant access to AI Content Spinner and all 3 other powerful tools included with PLR Organizer Pro.</p>
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
