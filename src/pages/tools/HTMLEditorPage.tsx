import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Check, ArrowRight, Play, CircleAlert, Layers, FileText, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";

const features = [
  { title: "Archive File Browser", description: "Opens HTML files directly from ZIP, RAR, or 7Z packages. Left-side file tree shows all HTML files — pick sales page, opt-in page, or thank-you page to edit." },
  { title: "Dual-Pane Editor", description: "Split-pane layout with source code on the left and live visual preview on the right. Toggle between Split View, Code Only, and Preview Only. WYSIWYG mode for non-coders." },
  { title: "Token Replacement Wizard", description: "Auto-detects placeholder tokens like [YOUR NAME], [PRICE], [PAYMENT LINK] and presents a simple form. Fill in once, replace everywhere instantly." },
  { title: "Visual Style Controls", description: "Change brand colors, fonts, button text, and images without touching code. Click any heading to edit text. Show or hide entire page sections." },
  { title: "Find & Replace", description: "Global find-and-replace across the entire HTML file with case-sensitive and regex options for advanced users." },
  { title: "Save & Export Options", description: "Save as new file or overwrite with auto-backup. Export standalone HTML, copy to clipboard for WordPress/ClickFunnels, export as Markdown, or push to Ready to Publish folder." },
  { title: "Keyboard Shortcuts", description: "Ctrl+S to save, Ctrl+Z/Y for undo/redo, Ctrl+F for find & replace, Ctrl+Shift+P to toggle preview. Professional editing efficiency." },
  { title: "Rebranding Profile", description: "Save your name, website, email, payment links, and brand colors once. Apply your profile to any PLR page with one click — instant rebranding." },
];

const techSpecs = [
  "Opens HTML from ZIP, RAR, and 7Z archives without extracting",
  "Real-time live preview synced with code editor",
  "WYSIWYG click-to-edit mode for non-coders",
  "Auto-detection of 12+ common PLR placeholder tokens",
  "Custom token pattern support",
  "Google Fonts-compatible font selector",
  "Standalone HTML export with inlined CSS and embedded images",
  "Auto-backup before every save operation",
];

const faqs = [
  { question: "Do I need to know HTML to use this?", answer: "No. Visual HTML Sales Page Editor is designed specifically for non-coders. In Preview Only mode you can click directly on any element — headings, paragraphs, buttons, images — to edit it, exactly like a word processor. The Token Replacement Wizard handles placeholders automatically. You never need to look at a line of code unless you want to." },
  { question: "What is the Token Replacement Wizard?", answer: "The Token Replacement Wizard scans your entire HTML file for common PLR placeholder tokens like [YOUR NAME], [PRICE], [PAYMENT LINK], [WEBSITE URL], and [PRODUCT NAME]. It presents them in a simple form — you fill in your details once and every instance is replaced throughout the entire file instantly. It also supports custom token patterns for less common placeholder formats." },
  { question: "What's a Rebranding Profile?", answer: "A Rebranding Profile stores your name, website URL, email address, payment links, and brand colours in one saved profile. When you open any new PLR sales page, apply your profile with one click and all your details are inserted everywhere automatically. You create it once and reuse it on every PLR page you ever edit — saving significant time across a large PLR library." },
  { question: "Where can I publish the finished pages?", answer: "You can export as standalone HTML with inlined CSS and embedded images — a single portable file you can upload to any web host. Copy to clipboard for direct pasting into WordPress, Ghost, or ClickFunnels. Export as Markdown. Or push directly to your Ready to Publish folder inside PLR Organizer Pro for immediate deployment." },
  { question: "Does it modify my original PLR files?", answer: "No. Visual HTML Sales Page Editor always works on a copy of your file. Auto-backup creates a versioned backup before every save operation. Your original PLR archive files are never touched or modified." },
  { question: "What file formats does it support?", answer: "The editor opens HTML files directly from ZIP, RAR, and 7Z archives without extracting. It handles standard HTML files with internal, external, or inlined CSS. Images referenced in the file are loaded and displayed in the live preview. Export produces standalone HTML with all CSS inlined and images embedded for maximum portability." },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Visual HTML Sales Page Editor",
  description: "Edit any PLR sales page visually — no HTML skills needed. Dual-pane live preview, token replacement wizard, and one-click rebranding profiles. Go from generic PLR to branded, ready-to-publish funnel in minutes.",
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
    reviewCount: "87",
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

export default function HTMLEditorPage() {
  const [activeTab, setActiveTab] = useState("wysiwyg");

  return (
    <>
      <SEOHead
        title="Visual HTML Sales Page Editor | Edit PLR Sales Pages Without Coding"
        description="Edit any PLR sales page visually — no HTML skills needed. Dual-pane live preview, token replacement wizard, and one-click rebranding profiles. Go from generic PLR to branded, ready-to-publish funnel in minutes."
        keywords="HTML sales page editor, PLR page editor, visual HTML editor, sales page customizer, PLR rebranding tool"
        canonicalUrl="https://plrorganizerpro.com/tools/html-editor"
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
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Customize Sales Pages Without Code</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              Visual HTML Sales Page Editor: Edit Any PLR Sales Page Visually — No Coding Required
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              PLR sales pages ship with placeholder text, generic branding, and someone else's payment links. Without HTML skills, you're stuck paying developers for simple changes or publishing pages that scream "template" to every visitor. Visual HTML Sales Page Editor gives you a split-pane live editor, token replacement wizard, and one-click rebranding profiles — go from generic PLR to branded, ready-to-publish funnel in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/funnel/offer">
                <Button variant="cta" size="xl">
                  Get Visual HTML Sales Page Editor Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outlineGhost" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo ▷
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> No HTML Skills Required — WYSIWYG Editing</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 7-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> One-Time Payment — No Subscription</span>
            </div>
          </div>
        </header>

        {/* ── PROBLEM / SOLUTION ── */}
        <section className="py-16 bg-muted" aria-label="Problem and Solution">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">Why Generic PLR Sales Pages Cost You Sales</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-destructive mb-4">PLR Sales Pages Need Heavy Customisation</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Placeholder text and generic branding — your page looks like every other PLR seller's</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> Someone else's payment links still embedded — a costly mistake waiting to happen</li>
                  <li className="flex items-start gap-2"><CircleAlert className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" /> No HTML skills means paying developers for every small change or living with a broken funnel</li>
                </ul>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-success mb-4">Professional Rebranding Made Simple</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Open any HTML file directly from your PLR archives — no extracting needed</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Split-pane live preview updates as you type</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Token wizard finds and replaces all placeholders in one step</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Save your branding once and apply it to every future PLR page</li>
                  <li className="flex items-start gap-2"><Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" /> Export standalone HTML ready for WordPress, ClickFunnels, or any host</li>
                </ul>
                <Link to="/funnel/offer" className="inline-block mt-6">
                  <Button variant="cta" size="sm">Start Editing Your Sales Pages <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-16 bg-background" aria-label="Features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Powerful Visual HTML Sales Page Editor Features</h2>
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

        {/* ── TABBED: EDITOR MODES & CAPABILITIES ── */}
        <section className="py-16 bg-muted" aria-label="Editor Modes and Capabilities">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-3">Everything You Need to Customise PLR Sales Pages Professionally</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">Four powerful capabilities that take your PLR pages from generic to publish-ready</p>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="wysiwyg">WYSIWYG Editing</TabsTrigger>
                <TabsTrigger value="tokens">Token Replacement</TabsTrigger>
                <TabsTrigger value="profiles">Rebranding Profiles</TabsTrigger>
                <TabsTrigger value="export">Export & Publish</TabsTrigger>
              </TabsList>
              <TabsContent value="wysiwyg" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Click-to-Edit Visual Mode — No Code, No Confusion</h3>
                  <p className="text-muted-foreground">Toggle between Split View (code + preview side by side), Code Only, and Preview Only modes. In Preview Only mode, click any heading, paragraph, button, or image directly on the page to edit it — exactly like editing a Word document. Changes sync instantly to the code panel. Perfect for non-coders who never want to see a line of HTML.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="tokens" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Replace Every Placeholder in Your Sales Page in One Step</h3>
                  <p className="text-muted-foreground">The Token Replacement Wizard automatically detects common PLR placeholder tokens like [YOUR NAME], [PRICE], [PAYMENT LINK], [WEBSITE URL], and [PRODUCT NAME] throughout the entire HTML file. Fill in your details once in a simple form and every instance is replaced everywhere instantly. Custom token pattern support means it works even with unusual placeholder formats.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="profiles" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Save Your Branding Once, Apply It to Every PLR Page Forever</h3>
                  <p className="text-muted-foreground">Create a Rebranding Profile with your name, website URL, email address, payment links, and brand colours. Apply your profile to any new PLR page with a single click — all tokens replaced, brand colours updated, and your details inserted everywhere in seconds. Never manually fill in the same information twice.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="export" className="mt-6">
                <Card><CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">Multiple Export Options for Every Publishing Workflow</h3>
                  <p className="text-muted-foreground">Save as a new file or overwrite with auto-backup. Export standalone HTML with inlined CSS and embedded images for a single portable file. Copy directly to clipboard for pasting into WordPress, Ghost, or ClickFunnels. Export as Markdown. Or push directly to your Ready to Publish folder for immediate deployment. Auto-backup before every save means you never lose a previous version.</p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 bg-background" aria-label="How It Works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">How Visual HTML Sales Page Editor Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get started in minutes with our simple 3-step process</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1, title: "Open a Sales Page",
                  desc: "Browse your PLR archive and pick any HTML file — sales page, opt-in page, download page, or thank-you page.",
                  bullets: [
                    "Opens HTML directly from ZIP, RAR, and 7Z archives without extracting",
                    "Left-side file tree shows all HTML files — pick the exact page to edit",
                    "Auto-detects 12+ common PLR placeholder tokens on load",
                  ],
                },
                {
                  step: 2, title: "Customise & Rebrand",
                  desc: "Use the token wizard to replace all placeholders. Adjust colours, fonts, images, and section visibility with visual controls.",
                  bullets: [
                    "WYSIWYG click-to-edit mode — no HTML required",
                    "Real-time live preview synced with code editor",
                    "Google Fonts-compatible font selector",
                    "Show or hide entire page sections with one click",
                  ],
                },
                {
                  step: 3, title: "Export & Publish",
                  desc: "Export as standalone HTML, copy to clipboard for your funnel builder, or push to your Ready to Publish folder.",
                  bullets: [
                    "Standalone HTML export with inlined CSS and embedded images",
                    "Auto-backup before every save operation",
                    "Export to WordPress, ClickFunnels, Markdown, or clipboard",
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
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">PLR Sales Page Editing Examples</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how content marketers and affiliate site owners use Visual HTML Sales Page Editor to publish faster</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Layers,
                  title: "Rebranding an entire PLR funnel in under 10 minutes",
                  description: "Open each page of a PLR funnel — sales page, opt-in, download, and thank-you — and apply your saved Rebranding Profile to each one. Your name, payment links, and brand colours updated across every page in a single click each. Entire funnel rebranded and ready to upload in minutes.",
                },
                {
                  icon: FileText,
                  title: "Replacing payment links before your first sale",
                  description: "The Token Replacement Wizard scans the entire HTML file for payment link placeholders and highlights every instance. Update them all at once, preview the result in the live pane, and export a clean standalone HTML file ready to host — no risk of a visitor clicking someone else's payment link.",
                },
                {
                  icon: Share2,
                  title: "Customising a PLR sales page for a different niche",
                  description: "Use Find & Replace with regex support to swap out niche-specific terminology across the entire file in seconds. Combined with Visual Style Controls to update colours and fonts, you can take a generic PLR page and make it feel purpose-built for your specific audience without touching a line of code.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Use Visual HTML Sales Page Editor?</h2>
            <p className="text-lg opacity-90 mb-8">Get instant access to Visual HTML Sales Page Editor and all 3 other powerful tools included with PLR Organizer Pro.</p>
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
