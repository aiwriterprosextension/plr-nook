import { Link } from "react-router-dom";
import { 
  Scan, FolderOpen, FileKey, Eye, Wand2, Code, Copy,
  Clock, DollarSign, AlertTriangle, Archive, Check, ArrowRight,
  Users, ShoppingCart, Megaphone, GraduationCap, Play, Star, Video,
  ChevronDown, Monitor, Apple, Terminal, FolderSearch, ScanSearch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SEOHead } from "@/components/SEOHead";

// Landing page components
import { StatsBar } from "@/components/landing/StatsBar";
import { TrustBadges } from "@/components/landing/TrustBadges";
import { CommonMistakes } from "@/components/landing/CommonMistakes";
import { TransformationTimeline } from "@/components/landing/TransformationTimeline";
import { CaseStudy } from "@/components/landing/CaseStudy";
import { BonusStack } from "@/components/landing/BonusStack";
import { PlatformBadges } from "@/components/landing/PlatformCTA";
import { EnhancedFooterCTA } from "@/components/landing/EnhancedFooterCTA";
import { PWAInstallBanner } from "@/components/landing/PWAInstallBanner";

const painPoints = [
  { icon: Clock, title: "Wasted Time Searching", desc: "Hours lost digging through folders to find that one PLR package you know you bought. A disorganised library makes your most valuable assets invisible." },
  { icon: DollarSign, title: "Duplicate Purchases", desc: "Buying the same PLR content twice because you forgot you already owned it. Different filenames from different sellers make this nearly impossible to catch manually." },
  { icon: AlertTriangle, title: "License Confusion", desc: "Unsure which PLR has resell rights, personal use only, or can be modified. One mistake means using content in a way that violates your license terms." },
  { icon: Archive, title: "Unused Content", desc: "Thousands of dollars worth of PLR sitting untouched on your hard drive. You can't profit from content you can't find." },
];

const features = [
  { icon: Scan, title: "Smart PLR Detection", desc: "AI-powered four-layer scanning identifies every PLR package across your entire computer automatically — analysing filenames, archive contents, license files, and content signals." },
  { icon: FolderOpen, title: "Auto-Organisation", desc: "Automatically moves packages into a clean Niche → Sub-Niche folder structure. The only physical file operation the app performs — everything else is virtual. No manual work required." },
  { icon: FileKey, title: "License Tracking", desc: "Never violate license terms again. Automatically reads license files and tracks exactly what rights each PLR package includes — resell, rebrand, KDP, email, and more." },
  { icon: Eye, title: "Virtual Views", desc: "Browse your library ten different ways — by niche, content type, license, quality score, date, favourites, and more — without moving a single file. Preview any package instantly without extracting." },
];

const tools = [
  { icon: FileKey, name: "License Rights Decoder", desc: "Auto-parse license files and see your Can / Can't / Maybe rights instantly.", href: "/tools/license-decoder" },
  { icon: Code, name: "HTML Sales Page Editor", desc: "Edit and rebrand PLR sales pages visually — no coding required.", href: "/tools/html-editor" },
  { icon: Copy, name: "Duplicate Detector", desc: "Find exact duplicates and content overlap across your entire library.", href: "/tools/duplicate-detector" },
  { icon: Wand2, name: "AI Content Spinner", desc: "Transform generic PLR into unique, SEO-friendly content.", href: "/tools/content-spinner" },
];

const targetAudience = [
  { icon: ShoppingCart, title: "Product Creators", desc: "Turn PLR into premium products that sell. Quickly find the right PLR for any product idea and use the Content Spinner to make it uniquely yours." },
  { icon: Megaphone, title: "Digital Marketers", desc: "Create lead magnets and content at scale. Browse by niche and content type to build your content calendar from your existing library." },
  { icon: Users, title: "Resellers", desc: "Manage resell rights and maximise ROI. The License Rights Decoder ensures you always know what you're licensed to sell before you list anything." },
  { icon: GraduationCap, title: "Coaches & Consultants", desc: "Build course content from PLR foundations. Find high-quality, relevant PLR fast and use the HTML Editor to rebrand sales materials for your programmes." },
];

const testimonials = [
  { name: "Sarah M.", role: "Course Creator", text: "I found over $3,000 worth of PLR I forgot I owned. This app paid for itself 100x over.", rating: 5 },
  { name: "Mike T.", role: "Affiliate Marketer", text: "Organizing 10 years of PLR would have taken months. PLR Organizer did it in 2 hours.", rating: 5 },
  { name: "Jennifer K.", role: "Digital Product Seller", text: "The license tracking feature alone is worth the price. No more accidental violations.", rating: 5 },
  { name: "David R.", role: "Content Creator", text: "Finally, I can actually USE the PLR I've been hoarding. Game changer.", rating: 5 },
  { name: "Tom B.", role: "PLR Reseller", text: "The duplicate detector alone found 43 packages I'd bought twice. That's over $200 in wasted purchases I'll never make again.", rating: 5 },
  { name: "Lisa W.", role: "Virtual Assistant", text: "I manage PLR libraries for 6 clients. This app turned a full day of sorting into a 20-minute task. My clients think I'm magic.", rating: 5 },
];

const faqs = [
  { q: "What operating systems does PLR Organizer Pro support?", a: "PLR Organizer Pro runs natively on Windows 10 and later (x64 and x86), macOS 11 Big Sur and later (Intel and Apple Silicon M1/M2/M3), and Ubuntu 20.04 and later Linux distributions. One purchase covers all your machines. Visit the download page for installers." },
  { q: "Is my data secure?", a: "Completely. PLR Organizer Pro stores all data in a local SQLite database on your own machine. No data ever leaves your computer. No internet connection is required at any time. There are no accounts, no login, no analytics, and no telemetry of any kind. Your PLR library stays entirely private." },
  { q: "How does the PLR detection work?", a: "Detection uses four layers simultaneously: filename pattern analysis (detecting PLR, MRR, Bundle, Pack keywords), archive inspection (reading the internal structure of ZIP/RAR/7Z files without extracting them), license file parsing (streaming and reading license.txt and rights.txt files), and niche classification (combining all signals into a confidence score from 0–100%). You can override any assignment in the results grid before organising." },
  { q: "Can I organise PLR on external drives?", a: "Yes. You can add any folder or drive — internal, external, USB, or network-attached — to a scan. The Base Output Folder where your organised library is built can also be on an external drive. The app handles cross-drive file operations correctly." },
  { q: "Is there a money-back guarantee?", a: "Yes. Every purchase includes a 7-day money-back guarantee. If PLR Organizer Pro doesn't work as described for any reason, contact support within 7 days of purchase for a full refund — no questions asked." },
  { q: "How is this different from just using folders?", a: "Creating folders manually takes days for a large library and requires you to know every package you own. PLR Organizer does it in minutes automatically — and then gives you ten virtual views to browse your content in ways that physical folders can never provide (by license type, quality score, content type, duplicates, Smart Collections, and more). It also reads inside archives without extracting them, which folders cannot do." },
  { q: "What if I'm not tech-savvy?", a: "PLR Organizer is designed for non-technical users. The interface guides you through scanning, reviewing, and organising with clear labels and step-by-step confirmation before anything happens. The Token Replacement Wizard in the Visual HTML Sales Page Editor and the auto-detection in the License Rights Decoder both work without any technical knowledge. If you get stuck, priority email support is included." },
  { q: "Can I try it before buying?", a: "The demo video on this page shows every feature in detail. The product page has comprehensive descriptions of every feature with real-world examples. Every purchase includes a 7-day money-back guarantee so there is no risk in trying it with your actual library." },
  { q: "Will this slow down my computer?", a: "No. PLR Organizer runs scanning in background worker threads and is designed not to impact your other applications. The scan cache means repeat scans only process new or changed files — typically completing in seconds for libraries you've scanned before. The app's minimum window size is 900×600 and it runs comfortably on any machine that can run Windows 10, macOS 11, or Ubuntu 20.04." },
  { q: "What happens to my data if I uninstall?", a: "Your organised files remain in their folder structure exactly as PLR Organizer left them — uninstalling the app does not touch your files. The SQLite database (which stores your metadata, tags, notes, and organisation history) is deleted with the app unless you export a database backup first from Settings." },
  { q: "Do you sell or share my information?", a: "No. PLR Organizer Pro collects no personal data, no usage data, and no file data of any kind. There is no analytics, no telemetry, and no account system. We cannot share what we do not collect." },
  { q: "Can I use this for client work?", a: "Yes. One purchase allows use on all your own machines. Use for organising your own PLR library for your own business purposes is unrestricted. If you want to use it to organise a client's library on their machine as a service, that use case is covered by the standard license." },
  { q: "What if I have PLR on multiple computers?", a: "One purchase covers all your machines. Export a database backup from Settings on one machine and import it on another to transfer your library metadata. Your physical files need to be accessible on the second machine via your normal file transfer method (external drive, NAS, cloud sync folder, etc.)." },
];

const comparisonData = [
  { feature: "Automatic PLR Detection", us: true, manual: false, spreadsheet: false },
  { feature: "Auto-Organization by Niche", us: true, manual: false, spreadsheet: false },
  { feature: "License Tracking", us: true, manual: false, spreadsheet: true },
  { feature: "File Preview", us: true, manual: true, spreadsheet: false },
  { feature: "Duplicate Detection", us: true, manual: false, spreadsheet: false },
  { feature: "Time to Organize 1000 Files", us: "Minutes", manual: "Days", spreadsheet: "Hours" },
  { feature: "Virtual Library Views", us: true, manual: false, spreadsheet: false },
  { feature: "Built-in Specialist Tools", us: "4 tools", manual: false, spreadsheet: false },
];

const howItWorks = [
  { step: 1, title: "Download & Install", desc: "Get the app for Windows, Mac, or Linux. Installation takes under a minute.", time: "60 seconds", expand: "Available as a native installer for all platforms. No admin rights required on most systems. No internet needed after installation.", mockup: "Download Screen", href: "/download" },
  { step: 2, title: "Scan Your Computer", desc: "Click Scan and let our AI find every PLR package on your drives.", time: "5-10 minutes", expand: "Add as many folders and drives as you like. The smart scan cache means repeat scans are much faster — only new or changed files are re-analysed.", mockup: "Scan Progress" },
  { step: 3, title: "Auto-Organise", desc: "Watch as your entire PLR library gets organised automatically by niche and type.", time: "Automatic", expand: "Review the AI's niche assignments, override any you disagree with, check the full organisation preview, then confirm. Your library is sorted.", mockup: "Organised Library" },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PLR Organizer Pro",
  url: "https://organizer.aiwriterpros.com",
  description: "The ultimate desktop app for organizing, managing, and maximizing your PLR content library.",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PLR Organizer Pro",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS, Linux",
  offers: { "@type": "Offer", price: "27", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10000" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const combinedJsonLd = [orgJsonLd, softwareJsonLd, faqJsonLd];

export default function Index() {
  return (
    <>
      <SEOHead
        title="PLR Organizer Pro | Auto-Scan, Organise & Manage Your Entire PLR Library — Desktop App for Windows, Mac & Linux"
        description="PLR Organizer Pro automatically scans your computer, identifies every PLR package by niche using AI, and organises your entire library into a clean folder structure in minutes. Stop losing money to buried, forgotten PLR content. Works 100% offline. One-time payment."
        keywords="PLR organizer, PLR file manager, PLR content organizer, PLR library manager, PLR niche sorter"
        canonicalUrl="https://organizer.aiwriterpros.com/"
        jsonLd={combinedJsonLd}
        robots="index, follow"
        author="PLR Organizer Pro"
        ogType="website"
      />

      <div className="flex flex-col scroll-smooth">
        {/* ══════════ HERO ══════════ */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32" aria-label="Hero">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6 animate-fade-in">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="text-sm font-semibold text-primary">#1 PLR Content Organizer</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6 animate-fade-in">
                Organize 10,000+ PLR Files in Under 10 Minutes.{" "}
                <span className="text-gradient-primary">Then Start Profiting.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in">
                The only desktop app that automatically scans your entire computer, organises your PLR library by niche using four-layer AI detection, tracks license rights, and eliminates duplicate purchases — so you can stop wasting time digging through folders and start using the content you've already paid for.
              </p>

              <p className="text-base text-secondary font-medium mb-8 animate-fade-in">
                Join 10,000+ users who've organised 2.3M+ files and rediscovered $847K+ in forgotten PLR
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
                <Link to="/plr-organizer">
                  <Button variant="cta" size="xl">
                    <Monitor className="h-5 w-5" />
                    Get PLR Organizer Pro
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outlineGhost" size="xl">
                  <Play className="h-5 w-5" />
                  Watch Demo Video
                </Button>
              </div>

              {/* Trust Badges */}
              <TrustBadges />

              {/* Platform Row */}
              <PlatformBadges />
            </div>
          </div>
          
          {/* Dashboard Mockup */}
          <div className="container mt-16">
            <div className="relative mx-auto max-w-5xl animate-float">
              <div className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                  <span className="text-xs text-muted-foreground ml-2 font-medium">PLR Organizer Pro — Dashboard Preview</span>
                </div>
                <div className="flex min-h-[320px]">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-border bg-secondary/5 p-3 hidden md:block">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Niches</p>
                    {["Health & Fitness", "Make Money Online", "Self-Help", "Business", "Technology"].map((n, i) => (
                      <div key={i} className={`text-xs py-1.5 px-2 rounded mb-1 ${i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
                        📁 {n}
                      </div>
                    ))}
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-4 mb-3">Views</p>
                    {["All Packages", "By License", "Duplicates", "Favourites"].map((v, i) => (
                      <div key={i} className="text-xs py-1.5 px-2 text-muted-foreground mb-1">{v}</div>
                    ))}
                  </div>
                  {/* Main Grid */}
                  <div className="flex-1 p-3">
                    <div className="grid grid-cols-5 gap-0 text-xs border border-border rounded overflow-hidden">
                      <div className="bg-muted font-bold p-2 border-b border-r border-border">Filename</div>
                      <div className="bg-muted font-bold p-2 border-b border-r border-border hidden sm:block">Niche</div>
                      <div className="bg-muted font-bold p-2 border-b border-r border-border hidden sm:block">License</div>
                      <div className="bg-muted font-bold p-2 border-b border-r border-border hidden sm:block">Score</div>
                      <div className="bg-muted font-bold p-2 border-b border-border hidden sm:block">Status</div>
                      {[
                        { file: "keto-secrets-plr.zip", niche: "Weight Loss", license: "PLR", score: "96%", status: "✓ Organised" },
                        { file: "affiliate-mastery.zip", niche: "Affiliate Marketing", license: "MRR", score: "89%", status: "✓ Organised" },
                        { file: "anxiety-relief-plr.zip", niche: "Mental Health", license: "PLR", score: "94%", status: "✓ Organised" },
                        { file: "email-list-builder.rar", niche: "Email Marketing", license: "RR", score: "78%", status: "Review" },
                        { file: "productivity-hacks.zip", niche: "Productivity", license: "PLR", score: "91%", status: "✓ Organised" },
                      ].map((row, i) => (
                        <div key={i} className="contents">
                          <div className="p-2 border-b border-r border-border text-foreground truncate">{row.file}</div>
                          <div className="p-2 border-b border-r border-border text-muted-foreground hidden sm:block">{row.niche}</div>
                          <div className="p-2 border-b border-r border-border hidden sm:block">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${row.license === "PLR" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : row.license === "MRR" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"}`}>{row.license}</span>
                          </div>
                          <div className="p-2 border-b border-r border-border text-muted-foreground hidden sm:block">{row.score}</div>
                          <div className="p-2 border-b border-border text-muted-foreground hidden sm:block">{row.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* ══════════ PAIN POINTS ══════════ */}
        <section className="py-20 bg-background" aria-label="Common PLR problems">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Sound Familiar?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Most PLR buyers face these frustrating problems daily</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, i) => (
                <Card key={i} className="border-2 border-border hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{point.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <CommonMistakes />

        {/* ══════════ SOLUTION OVERVIEW ══════════ */}
        <section className="py-20 bg-background" aria-label="Solution overview">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">One App to Organise Your Entire PLR Empire</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Stop wasting time and money. Take control of your digital assets.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <Card key={i} className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-red">
                      <feature.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center mt-8 text-muted-foreground">
              <Link to="/plr-organizer" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
                Learn more about PLR Organizer Pro <ArrowRight className="h-3 w-3" />
              </Link>
            </p>
          </div>
        </section>

        {/* ══════════ FEATURE TABS ══════════ */}
        <section className="py-20 bg-muted" aria-label="Powerful features">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Powerful Features at Your Fingertips</h2>
            </div>
            
            <Tabs defaultValue="scanner" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="scanner">Scanner</TabsTrigger>
                <TabsTrigger value="organize">Auto-Org</TabsTrigger>
                <TabsTrigger value="views">Virtual Views</TabsTrigger>
                <TabsTrigger value="tools">Built-in Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="scanner" className="mt-8">
                <Card><CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Smart PLR Scanner</h3>
                  <p className="text-muted-foreground mb-4">Our AI-powered four-layer scanner analyses your entire computer to find every PLR package you own. It reads filenames, archive structures, license documents, and content signals to accurately identify and catalogue your content with a confidence score.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Scans local and external drives</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Reads inside ZIP, RAR, and 7Z archives without extracting</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Identifies duplicate packages using SHA-256 hashing</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Smart cache skips unchanged files on re-scans — runs fast every time</li>
                  </ul>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="organize" className="mt-8">
                <Card><CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Physical Niche Organisation — Your Files, Perfectly Sorted</h3>
                  <p className="text-muted-foreground mb-4">The only physical file operation PLR Organizer performs. Packages are moved or copied as complete atomic units into a Niche → Sub-Niche folder structure. Folders are auto-created. Preview the full tree before anything moves. Full undo available at any time.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Ten primary niches, 60+ sub-niches built in</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Full organisation preview before any file moves</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Copy or Move mode — your choice</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Packages are NEVER extracted, split, or broken apart</li>
                  </ul>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="views" className="mt-8">
                <Card><CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Ten Ways to Browse Your Library — Without Moving a Single File</h3>
                  <p className="text-muted-foreground mb-4">After organisation, virtual views let you see your library from any angle. By Niche, By Content Type, By License, By Quality, By Date, Recent, Favourites, Duplicates, All Packages, and Smart Collections — all powered by the local database, none touching your files.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Preview any package without opening a file manager</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Smart Collections auto-update as you add content</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Filter, sort, and search across all metadata</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Drag packages between niches to reassign and move physically</li>
                  </ul>
                </CardContent></Card>
              </TabsContent>

              <TabsContent value="tools" className="mt-8">
                <Card><CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Four Specialist Tools Included at No Extra Cost</h3>
                  <p className="text-muted-foreground mb-6">PLR Organizer Pro includes four additional tools inside the same app — each solving a specific PLR workflow problem that the core organiser doesn't cover.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> <Link to="/tools/content-spinner" className="hover:text-primary hover:underline">AI Content Spinner</Link> — transform PLR into unique SEO content</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> <Link to="/tools/license-decoder" className="hover:text-primary hover:underline">License Rights Decoder</Link> — instant Can / Can't / Maybe checklist</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> <Link to="/tools/html-editor" className="hover:text-primary hover:underline">Visual HTML Sales Page Editor</Link> — rebrand PLR sales pages without code</li>
                    <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> <Link to="/tools/duplicate-detector" className="hover:text-primary hover:underline">Duplicate &amp; Overlap Detector</Link> — SHA-256 detection and safe cleanup</li>
                  </ul>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section className="py-20 bg-background" aria-label="How it works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Get Organised in 3 Simple Steps</h2>
              <p className="text-muted-foreground">
                <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
                  <Video className="h-4 w-4" /> See Full Installation Video
                </a>
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {howItWorks.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-red">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {item.href ? <Link to={item.href} className="hover:text-primary transition-colors">{item.title}</Link> : item.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{item.desc}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.expand}</p>
                  <span className="inline-block px-3 py-1 bg-accent text-primary text-sm font-semibold rounded-full">
                    ⏱️ {item.time}
                  </span>
                  {/* Styled mockup */}
                  <div className="mt-4 rounded-lg border border-border overflow-hidden shadow-sm">
                    <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-1.5">
                      <div className="h-2 w-2 rounded-full bg-destructive/60" />
                      <div className="h-2 w-2 rounded-full bg-warning/60" />
                      <div className="h-2 w-2 rounded-full bg-success/60" />
                      <span className="text-[10px] text-muted-foreground ml-1">{item.mockup}</span>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-muted to-background flex items-center justify-center">
                      {item.step === 1 && <Monitor className="h-10 w-10 text-primary/30" />}
                      {item.step === 2 && (
                        <div className="w-3/4">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-primary rounded-full" />
                          </div>
                          <p className="text-[10px] text-muted-foreground mt-2">Scanning... 67%</p>
                        </div>
                      )}
                      {item.step === 3 && <FolderOpen className="h-10 w-10 text-primary/30" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PERFECT FOR ══════════ */}
        <section className="py-20 bg-muted" aria-label="Target audience">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Perfect For</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item, i) => (
                <Card key={i} className="text-center border-2 border-border hover:border-primary transition-colors">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <CaseStudy />

        {/* Transformation Timeline */}
        <TransformationTimeline />

        {/* ══════════ COMPARISON TABLE ══════════ */}
        <section className="py-20 bg-muted" aria-label="Comparison table">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why PLR Organizer Pro?</h2>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-secondary text-secondary-foreground">
                    <th scope="col" className="text-left p-4">Feature</th>
                    <th scope="col" className="text-center p-4">PLR Organizer Pro</th>
                    <th scope="col" className="text-center p-4">Manual Folders</th>
                    <th scope="col" className="text-center p-4">Spreadsheets</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <th scope="row" className="p-4 font-medium text-left">{row.feature}</th>
                      <td className="text-center p-4">
                        {typeof row.us === "boolean" ? (
                          row.us ? <Check className="h-5 w-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="font-semibold text-primary">{row.us}</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.manual === "boolean" ? (
                          row.manual ? <Check className="h-5 w-5 text-muted-foreground mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-muted-foreground">{row.manual}</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {typeof row.spreadsheet === "boolean" ? (
                          row.spreadsheet ? <Check className="h-5 w-5 text-muted-foreground mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-muted-foreground">{row.spreadsheet}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="py-20 bg-background" aria-label="Testimonials">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Users Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <Card key={i} className="bg-card" itemScope itemType="https://schema.org/Review">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-warning fill-warning" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4" itemProp="reviewBody">"{t.text}"</p>
                    <div>
                      <p className="font-semibold text-secondary" itemProp="author">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Stack */}
        <BonusStack />

        {/* ══════════ FAQ ══════════ */}
        <section className="py-20 bg-background" aria-label="Frequently Asked Questions">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-lg border border-border bg-card" open>
                  <summary className="cursor-pointer p-5 font-semibold text-secondary list-none flex items-center justify-between" role="button" aria-expanded="true">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <EnhancedFooterCTA />
        <PWAInstallBanner />
      </div>
    </>
  );
}