import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderSearch, Check, ArrowRight, Play, Search, Star, Copy, BarChart3,
  FolderTree, Layers, Brain, FileText, Shield, Monitor, Apple, Terminal,
  Eye, Grid3X3, Filter, Tag, PenLine, RefreshCw, Download, Keyboard,
  ChevronDown, ChevronUp, Wand2, FileKey, Code, ScanSearch } from
"lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";

/* ── DATA ── */

const features = {
  scanning: [
  { title: "Dual-Pane File Explorer", description: "Left pane: hierarchical file system tree with drives and folders. Right pane: details grid with name, size, type, date. Multi-select with Ctrl+Click and Shift+Click. Drag files from your OS file manager directly into the scan queue." },
  { title: "Configurable Scan Settings", description: "Set maximum scan depth (1–10 levels or unlimited). Choose file types to scan: ZIP, RAR, 7Z, folders, or all files. Include subfolders toggle. Scan archive contents without extracting." },
  { title: "Intelligent Scan Cache", description: "SQLite-powered cache remembers every scanned package. Re-scans skip unchanged files using file hash + date matching. Manual cache clear available in Settings." }],

  organisation: [
  { title: "Physical Niche Organisation", description: "The only physical operation the app performs. Moves or copies complete packages as atomic units into your chosen Niche → Sub-Niche folder hierarchy. Auto-creates folders. Never extracts. Never splits." },
  { title: "Organisation Preview", description: "See the complete before/after folder tree preview before a single file moves. Full tree showing exactly where every package will land. Confirm or go back." },
  { title: "Copy or Move Mode", description: "Choose to copy packages to the new location (keeping originals) or move them. Set your default in Settings." },
  { title: "Undo Organisation", description: "Every file operation is logged. Undo Last Organisation restores all files to their original paths and removes any newly empty folders." }],

  library: [
  { title: "Spreadsheet-Style Package Grid", description: "Sortable, filterable columns: Filename, Size, Type, PLR Score, Niche, Sub-Niche, Target Folder, License, Tags, Notes, Status. Show/hide any column." },
  { title: "Inline Editing", description: "Click any editable cell (niche, sub-niche, license, tags, notes) to edit inline. Bulk edit: select multiple rows and set niche, tags, or license for all at once." },
  { title: "Smart Search", description: "Global search across all metadata. Supports niche:health, \"exact phrase\", size:>100MB, wildcard syntax. Search history dropdown." },
  { title: "Smart Collections", description: "Save any filter combination as a named collection. Smart Collections update automatically as new packages are added that match the criteria." },
  { title: "Favourites", description: "Star any package to add it to your Favourites virtual view. One-click access to your most-used content." }],

  intelligence: [
  { title: "Package Preview", description: "Click any package to see full metadata, internal file tree (from cached archive inspection, no extraction), first 2KB of any text file inside the archive. Open in file manager, view license, edit metadata — all from the preview panel." },
  { title: "Quick Preview Tooltip", description: "Hover over any package for an instant popup showing file count, license type, niche, confidence score, and top tags." },
  { title: "Tags & Notes", description: "Add multi-tag chips and rich text notes to any package. Fully searchable." }],

  utilities: [
  { title: "Batch Rename", description: "Find & Replace in filenames, add prefix/suffix, number sequences, custom patterns using variables: {niche}, {sub_niche}, {date}, {filename}, {index}. Live preview before applying." },
  { title: "Export Inventory", description: "Export your full library or any selection as CSV, JSON, PDF Report, or HTML Catalog. Group by niche, include statistics summary, add export timestamp." },
  { title: "Keyboard Shortcuts", description: "Ctrl/Cmd+S: Start scan. Ctrl/Cmd+F: Search. Ctrl/Cmd+Z: Undo organisation. Space: Quick preview. Ctrl/Cmd+E: Export. Ctrl/Cmd+,: Settings. Delete: Exclude selected." }],

  statistics: [
  { title: "Statistics Dashboard", description: "Total packages, total library size, high quality count, needs review count, duplicate count. Charts: packages by niche (pie), packages added over time (bar), top 10 niches (horizontal bar), license type breakdown (donut), quality distribution (donut)." },
  { title: "Niche Coverage Table", description: "See every niche and sub-niche with package count, total size, and average confidence. Instantly spot gaps in your library." }]

};

const virtualViews = [
{ name: "By Niche", desc: "Browse Niche → Sub-Niche, mirrors your physical folder structure" },
{ name: "By Content Type", desc: "Articles / eBooks / Graphics / Video / Audio / Software / Mixed" },
{ name: "By License", desc: "PLR / MRR / Resell Rights / Commercial / Unknown" },
{ name: "By Quality Score", desc: "High (90%+) / Medium (60–89%) / Needs Review (<60%)" },
{ name: "By Date Added", desc: "Year → Month timeline view" },
{ name: "Recent", desc: "Everything added in the last 30 days, flat list" },
{ name: "Favourites", desc: "Your starred packages, always one click away" },
{ name: "Duplicates", desc: "All detected duplicate groups for review and cleanup" },
{ name: "All Packages", desc: "Flat sortable and filterable grid of your entire library" },
{ name: "Smart Collections", desc: "Your own saved filter sets that auto-update as you add content" }];


const niches = [
{ name: "Health & Fitness", subs: "Weight Loss, Nutrition, Exercise & Fitness, Mental Health, Natural Remedies, Anti-Aging, Women's Health, Men's Health" },
{ name: "Make Money Online", subs: "Affiliate Marketing, Email Marketing, SEO, Social Media Marketing, Freelancing, Dropshipping, Amazon FBA, Digital Products" },
{ name: "Self-Help", subs: "Productivity, Motivation & Mindset, Goal Setting, Relationships, Time Management, Confidence & Self-Esteem, Habits" },
{ name: "Business", subs: "Entrepreneurship, Leadership, Sales & Persuasion, Customer Service, Marketing, Copywriting, Branding, Startups" },
{ name: "Technology", subs: "WordPress, Software Tools, Web Development, AI & Automation, Cybersecurity, Coding & Programming" },
{ name: "Lifestyle", subs: "Parenting, Home & Garden, Travel, Food & Recipes, Pets, DIY & Crafts, Beauty & Fashion" },
{ name: "Finance", subs: "Investing, Budgeting, Cryptocurrency, Real Estate, Retirement Planning, Credit & Debt, Passive Income" },
{ name: "Education", subs: "Homeschooling, Test Preparation, Language Learning, Online Courses, Study Skills" },
{ name: "Spirituality", subs: "Mindfulness & Meditation, Law of Attraction, Yoga, Life Purpose, Gratitude" },
{ name: "Hobbies", subs: "Photography, Writing, Music, Gaming, Art & Design, Gardening" }];


const techSpecs = [
"Four-layer AI detection: filename, archive inspection, license parsing, niche classification",
"SHA-256 file hashing for exact duplicate detection",
"SQLite local database — all data stays on your machine",
"Supports ZIP, RAR, 7Z archives and folder packages",
"Archive inspection without extraction using stream reading",
"Niche taxonomy: 10 primary niches, 60+ sub-niches built in",
"Custom niche and sub-niche creation with immediate folder creation",
"Ten virtual library views powered by local metadata database",
"Copy or Move mode for physical organisation",
"Full undo with organisation history log",
"Smart Collections — user-defined saved filter sets",
"Export formats: CSV, JSON, PDF Report, HTML Catalog",
"Batch rename with custom variable pattern support",
"Statistics dashboard with five chart types",
"100% offline — no internet required, no accounts, no analytics",
"Runs on Windows 10+, macOS 11+, Ubuntu 20.04+"];


const faqs = [
{ question: "Does it move my files automatically or do I confirm first?", answer: "You always confirm before any file moves. After the scan and your review of the results grid, PLR Organizer generates a full organisation preview — a tree showing exactly where every package will land — before a single file is touched. You confirm the preview to proceed, or go back to the results grid to make changes. Nothing moves without your explicit approval." },
{ question: "Will it break apart my PLR packages?", answer: "Never. PLR Organizer treats every package as one indivisible unit. A ZIP file is moved as one ZIP to the correct Niche → Sub-Niche folder. A folder package is moved as one complete folder. The app never extracts archives, never splits packages, and never reorganises the contents inside a package. Your content stays exactly as you received it — just in the right place." },
{ question: "What if the AI assigns the wrong niche to a package?", answer: "You review every assignment in the results grid before organising. Any cell showing niche or sub-niche is editable — click it and choose from the dropdown. Bulk edit lets you fix multiple packages at once. Your manual decisions are saved permanently in the database and always override the AI detection on future scans." },
{ question: "Does it work with content already organised in my own folder structure?", answer: "Yes. You can point PLR Organizer at any folder structure, including your existing one. The scanner finds PLR packages regardless of how they're currently stored or named. You choose a Base Output Folder for the organised library — this can be a new location or your existing one. In Copy mode, your originals are untouched while a new organised copy is built." },
{ question: "What happens if I add new PLR purchases later?", answer: "Drop new purchases into any folder and run a new scan. The smart cache means only new or changed files are re-analysed — existing packages are skipped instantly. Your new packages are reviewed and organised using the exact same workflow. The process takes seconds for a handful of new packages." },
{ question: "Does it work if I have PLR spread across multiple drives and folders?", answer: "Yes. You can add as many source folders and drives to a single scan as you like. The scanner works across all of them in one pass. All discovered packages end up in the same results grid for unified review and organisation regardless of where they were found." },
{ question: "Is my library data stored in the cloud?", answer: "No. PLR Organizer stores all data in a local SQLite database on your machine. No data ever leaves your computer. No internet connection is required at any time. There are no accounts, no login, no analytics, and no telemetry of any kind." },
{ question: "Can I use this on more than one computer?", answer: "Yes. One purchase covers all your machines. Export a database backup from Settings on one machine and import it on another to transfer your library metadata. Physical files need to be available on the second machine via your normal file transfer method." }];


const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PLR Organizer",
  description: "Stop drowning in unsorted PLR folders. PLR Organizer automatically scans your hard drive, detects every PLR package, identifies its niche using AI, and physically organises your entire library into a clean Niche → Sub-Niche folder structure — in minutes, not days. Works 100% offline. No subscription.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows, macOS, Linux",
  offers: { "@type": "Offer", price: "27", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "214" }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer }
  }))
};

const combinedJsonLd = [softwareJsonLd, faqJsonLd];

/* ── COMPONENT ── */

export default function PLROrganizer() {
  const [activeTab, setActiveTab] = useState("first-scan");
  const [expandedNiches, setExpandedNiches] = useState<string[]>([]);

  const toggleNiche = (name: string) => {
    setExpandedNiches((prev) =>
    prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const featureGroups = [
  { label: "Scanning & Detection", items: features.scanning },
  { label: "Organisation & Filing", items: features.organisation },
  { label: "Library Management", items: features.library },
  { label: "Package Intelligence", items: features.intelligence },
  { label: "Utilities", items: features.utilities },
  { label: "Statistics & Insights", items: features.statistics }];


  return (
    <>
      <SEOHead
        title="PLR Organizer | Auto-Scan, Auto-Sort & Manage Your Entire PLR Library"
        description="Stop drowning in unsorted PLR folders. PLR Organizer automatically scans your hard drive, detects every PLR package, identifies its niche using AI, and physically organises your entire library into a clean Niche → Sub-Niche folder structure — in minutes, not days. Works 100% offline. No subscription."
        keywords="PLR organizer, PLR library manager, PLR file organizer, PLR niche sorter, PLR content management"
        canonicalUrl="https://organizer.aiwriterpros.com/plr-organizer"
        jsonLd={combinedJsonLd}
        robots="index, follow"
        author="PLR Organizer Pro"
        ogType="product" />


      <main className="flex flex-col scroll-smooth" role="main">

        {/* ══════════ HERO ══════════ */}
        <header className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24" aria-label="Hero">
          <div className="container max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6">
              <FolderSearch className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">The Core PLR Management App</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              PLR Organizer: Automatically Scan, Sort &amp; Manage Your Entire PLR Library — No Manual Filing Ever Again
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              You've spent thousands on PLR content buried across hundreds of folders, ZIP files, and hard drives. Finding anything takes longer than creating it from scratch. PLR Organizer automatically scans your entire computer for PLR packages, identifies the niche and sub-niche of every package using four layers of AI detection, and physically organises your whole library into a clean, logical folder structure — while giving you powerful virtual views to browse everything your way. Works 100% offline. One-time payment. No cloud. No login. No subscription.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/funnel/offer">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6 gap-2">
                  Get PLR Organizer Now <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 border-secondary text-secondary hover:bg-secondary/5">
                <Play className="h-5 w-5" /> Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-600" /> Works on Windows, macOS &amp; Linux</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-600" /> 100% Offline — Your Files Never Leave Your Machine</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-600" /> 7-Day Money-Back Guarantee</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-600" /> One-Time Payment — No Subscription</span>
            </div>
          </div>
        </header>

        {/* ══════════ PROBLEM / SOLUTION ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="Problem and Solution">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
              The PLR Library Problem Every Serious Buyer Faces
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6">A Growing PLR Library Becomes Unmanageable Fast</h2>
                  <ul className="space-y-4">
                    {[
                    "Hundreds of ZIP files scattered across Downloads, Desktop, and external drives with no organisation",
                    "You've bought the same content multiple times from different sellers without realising it",
                    "Finding the right PLR for a project means opening folder after folder wasting hours every week",
                    "You have no idea what niches you're actually covered in or what gaps you have in your library"].
                    map((t, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-red-500 text-lg mt-0.5">🔴</span>
                        <span className="text-red-800 dark:text-red-300">{t}</span>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
              {/* Solution */}
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6">Your Entire Library Organised in Minutes</h2>
                  <ul className="space-y-4">
                    {[
                    "Auto-scans your entire hard drive and finds every PLR package automatically",
                    "Four-layer AI detection identifies niche, sub-niche, license type, and content type",
                    "Physically moves packages into a clean Niche → Sub-Niche folder structure",
                    "Virtual views let you browse by content type, license, quality, and date without moving any files",
                    "Statistics dashboard shows exactly what niches you have covered and where your gaps are"].
                    map((t, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-green-800 dark:text-green-300">{t}</span>
                      </li>
                    )}
                  </ul>
                  <Link to="/funnel/offer" className="block mt-8">
                    <Button variant="cta" className="w-full gap-2">Start Organising Your Library <ArrowRight className="h-4 w-4" /></Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ══════════ HOW THE CORE FEATURE WORKS — DARK NAVY ══════════ */}
        <section className="py-16 lg:py-24 bg-secondary text-white" aria-label="How the core feature works">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
              The Only App That Physically Organises Your PLR Library — Not Just Tags It
            </h2>
            <p className="text-center text-gray-300 mb-14 max-w-3xl mx-auto">
              Most tools just add metadata. PLR Organizer actually moves your files into a logical structure you can use outside the app too.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* BEFORE */}
              <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-6">
                <Badge className="bg-red-600 text-white mb-4 text-xs">Your Library Now</Badge>
                <pre className="text-sm text-red-200 font-mono leading-relaxed whitespace-pre-wrap">
                  {`Downloads\\
  plr-bundle-2019.zip
  health-pack-final-v2.zip
  MMO-collection.rar
Desktop\\
  misc-plr\\
    stuff\\
      more stuff\\
External Drive\\
  old downloads\\
    [hundreds more files...]`}
                </pre>
                <p className="text-red-300 text-sm mt-4 italic">No niche structure. No idea what you have. Hours wasted searching.</p>
              </div>

              {/* PROCESS */}
              <div className="rounded-xl border-2 border-yellow-500/50 bg-yellow-950/20 p-6 ring-2 ring-yellow-500/20">
                <Badge className="bg-yellow-500 text-black mb-4 text-xs font-bold">PLR Organizer Runs</Badge>
                <div className="space-y-5 mt-2">
                  {[
                  { icon: Search, label: "Scans your selected folders and drives" },
                  { icon: Brain, label: "AI analyses each package across 4 detection layers" },
                  { icon: FolderTree, label: "Auto-creates Niche → Sub-Niche folder structure" },
                  { icon: Layers, label: "Moves each package as one unit to the correct folder" }].
                  map((step, i) =>
                  <div key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <step.icon className="h-4 w-4 text-yellow-400 shrink-0" />
                        <span className="text-yellow-100 text-sm">{step.label}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* AFTER */}
              <div className="rounded-xl border border-green-500/30 bg-green-950/30 p-6">
                <Badge className="bg-green-600 text-white mb-4 text-xs">Your Library After</Badge>
                <pre className="text-sm text-green-200 font-mono leading-relaxed whitespace-pre-wrap">
                  {`My PLR Library\\
  Health & Fitness\\
    Weight Loss\\
      10-day-diet-plr.zip
      keto-secrets-plr.zip
    Mental Health\\
      anxiety-relief-plr.zip
  Make Money Online\\
    Affiliate Marketing\\
      affiliate-mastery-plr.zip
    Email Marketing\\
      list-building-plr.zip
  Self-Help\\
    Productivity\\
      [packages...]`}
                </pre>
                <p className="text-green-300 text-sm mt-4 italic">Clean. Logical. Usable — inside the app and in Windows Explorer or Finder.</p>
              </div>
            </div>

            {/* Callout */}
            <div className="mt-12 rounded-xl border border-yellow-500/30 bg-yellow-950/20 p-6 flex items-start gap-4">
              <span className="text-2xl">⚡</span>
              <p className="text-yellow-100">
                <strong className="text-yellow-400">Critical Design Principle:</strong> PLR packages are ALWAYS kept together as one unit. A ZIP file is moved as one ZIP. A folder is moved as one folder. The app never extracts, splits, or breaks apart a package during organisation. Your content stays exactly as you received it — just in the right place.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ FOUR-LAYER AI DETECTION ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Four-layer AI detection">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">
              Four Layers of Intelligence — Every Package Gets Correctly Identified
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              PLR Organizer doesn't just look at filenames. It analyses every signal available to assign the right niche with confidence.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
              { num: 1, icon: FileText, title: "Instant Recognition From the Filename", body: "The first pass uses pattern matching against known PLR naming conventions — detecting keywords like PLR, MRR, Pack, Bundle, Collection, Kit, and Resell Rights in filenames and folder names. Fast, runs first, catches the obvious cases immediately with confidence scoring: exact match 100pts, partial 50pts, related keywords 25pts." },
              { num: 2, icon: Search, title: "Looks Inside Every ZIP Without Extracting It", body: "Without unpacking a single file, PLR Organizer streams the internal structure of every ZIP, RAR, and 7Z archive and analyses the folder names and file types found inside. Detecting internal folders named Articles, eBooks, Graphics, Sales Page, or Source Files is a strong signal that tells the scanner exactly what type of PLR package it's dealing with." },
              { num: 3, icon: Shield, title: "Reads the License File to Confirm Rights Type", body: "PLR packages almost always include a license.txt, rights.txt, or readme.txt. PLR Organizer streams just that file without extracting the whole archive, then searches for key phrases like \"private label\", \"put your name\", \"master resell\", \"modify and rebrand\", and \"pass on rights\" to accurately assign the license type: PLR, MRR, Resell Rights, Commercial, or Unknown." },
              { num: 4, icon: Brain, title: "AI Assigns the Right Niche and Sub-Niche With a Confidence Score", body: "All signals from the previous three layers are combined into a weighted confidence formula: Filename Match (30%) + Internal Structure Match (25%) + License Detection (25%) + Content Signals (20%) = Final Confidence Score. Each package receives a primary niche, sub-niche, and a confidence score from 0–100%. High confidence (90–100%) = green. Medium (60–89%) = yellow. Low (0–59%) = red for your review." }].
              map((layer) =>
              <Card key={layer.num} className="border-border" aria-label={`Layer ${layer.num}: ${layer.title}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-lg">{layer.num}</div>
                      <layer.icon className="h-5 w-5 text-primary" />
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Layer {layer.num}</span>
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{layer.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{layer.body}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-muted/50 p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-secondary">You always have the final say.</strong> Every niche assignment can be overridden by clicking the niche cell in the results grid. Your manual decisions are saved permanently and take priority over AI detection on every future scan.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ VIRTUAL VIEWS ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="Virtual views">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">
              Ten Ways to Browse Your Library — Without Moving a Single File
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              After your library is organised, virtual views let you see your content from any angle. All views are powered by the local database — no file system changes ever happen.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {virtualViews.map((v) =>
              <Card key={v.name} className="border-border text-center" aria-label={v.name}>
                  <CardContent className="p-4">
                    <Eye className="h-5 w-5 text-primary mx-auto mb-2" />
                    <h3 className="font-bold text-secondary text-sm mb-1">{v.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <p className="text-center text-muted-foreground text-sm mt-8 italic">
              Every virtual view shows the same sortable data grid — just grouped differently. Switching views never touches your files.
            </p>
          </div>
        </section>

        {/* ══════════ FEATURES ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Features">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">
              Everything Built Into PLR Organizer
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              One app. Your complete PLR management workflow from first scan to ready-to-use library.
            </p>

            {featureGroups.map((group) =>
            <div key={group.label} className="mb-10">
                <h3 className="text-lg font-bold text-secondary mb-4 border-b border-border pb-2">{group.label}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((f) =>
                <Card key={f.title} className="border-border" aria-label={f.title}>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-secondary mb-2">{f.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                      </CardContent>
                    </Card>
                )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══════════ NICHE TAXONOMY ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="Built-in niche taxonomy">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">
              Pre-Built Taxonomy Covers Every Major PLR Niche
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Ten primary niches, 60+ sub-niches built in. Add your own custom niches and sub-niches at any time.
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {niches.map((n) =>
              <button
                key={n.name}
                onClick={() => toggleNiche(n.name)}
                className="text-left w-full rounded-lg border border-border bg-background p-4 hover:bg-muted/50 transition-colors">

                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-secondary">{n.name}</h3>
                    {expandedNiches.includes(n.name) ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                  </div>
                  {expandedNiches.includes(n.name) &&
                <p className="text-sm text-muted-foreground mt-2">{n.subs}</p>
                }
                </button>
              )}
            </div>

            <p className="text-center text-muted-foreground text-sm mt-8">
              Don't see your niche? Add any custom niche or sub-niche from the Settings screen. The folder is created on your file system immediately. Built-in niches can be hidden if you don't use them.
            </p>
          </div>
        </section>

        {/* ══════════ TABBED WORKFLOWS ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Key workflows">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">
              From Chaotic Library to Fully Organised System
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Four complete workflows PLR Organizer handles for you
            </p>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full h-auto gap-2 bg-transparent p-0 mb-8">
                {[
                { value: "first-scan", label: "First Scan & Organise" },
                { value: "new-content", label: "Adding New Content" },
                { value: "finding", label: "Finding What You Need" },
                { value: "maintenance", label: "Library Maintenance" }].
                map((tab) =>
                <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-primary data-[state=active]:text-white border border-border rounded-lg py-3 text-sm font-medium">
                    {tab.label}
                  </TabsTrigger>
                )}
              </TabsList>

              <TabsContent value="first-scan">
                <Card className="border-border"><CardContent className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">Set Up Your Entire Library Once — Takes Minutes, Not Days</h3>
                  <p className="text-muted-foreground leading-relaxed">Point PLR Organizer at all the folders and drives where your PLR lives. Set your Base Output Folder where your organised library will live. Choose Copy (safe) or Move mode. Hit Start Scan. Watch the four-layer AI engine work through every file. Review the results grid — override any niche assignments you disagree with. Check the organisation preview to see exactly where everything will go. Hit Confirm &amp; Organise. Done. Your entire PLR library is now in a clean, logical, usable structure.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="new-content">
                <Card className="border-border"><CardContent className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">New Purchases Are Organised in Seconds</h3>
                  <p className="text-muted-foreground leading-relaxed">Drop new PLR purchases into your designated incoming folder. Open PLR Organizer and run a scan — the cache means only new files are analysed, so it's fast. Review the new packages in the results grid. Confirm the niche assignments. Organise. Your new purchases are filed into exactly the right place in your library structure and visible in every virtual view immediately.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="finding">
                <Card className="border-border"><CardContent className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">Find the Right PLR for Any Project in Seconds</h3>
                  <p className="text-muted-foreground leading-relaxed">Use the By Niche view to browse straight to the niche you need. Use Smart Search with niche: and license: operators to filter precisely. Filter by license type to find everything you can sell right now. Sort by quality score to surface your best content first. Use Smart Collections to save your most-used filter combinations for one-click access. Preview any package without opening a file manager.</p>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="maintenance">
                <Card className="border-border"><CardContent className="p-8">
                  <h3 className="text-xl font-bold text-secondary mb-4">Keep Your Library Clean and Audit-Ready</h3>
                  <p className="text-muted-foreground leading-relaxed">The Statistics Dashboard shows your full library health at a glance — coverage gaps, quality distribution, duplicate count, and total value. The Duplicates virtual view groups all detected duplicate packages for review. Export a full inventory as CSV or PDF for reference or to share with a VA. Use Batch Rename to clean up inconsistent filenames. Use the Undo Organisation feature to reverse any filing decisions you want to revisit.</p>
                </CardContent></Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS — 3 STEPS ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="How it works">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">How PLR Organizer Works</h2>
            <p className="text-center text-muted-foreground mb-12">From scattered files to organised library in three steps</p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
              { num: "1", title: "Scan Your Library", desc: "Select the folders and drives where your PLR lives. PLR Organizer scans everything and analyses each package across four detection layers.", bullets: ["Scans ZIP, RAR, 7Z archives and folders", "Configurable scan depth and file type filters", "Smart cache skips unchanged files on re-scans", "Real-time progress with pause and cancel"] },
              { num: "2", title: "Review & Confirm", desc: "Check the AI's niche assignments in the results grid. Override anything you disagree with. See the full organisation preview before any file moves.", bullets: ["Override any niche or license assignment inline", "Bulk edit multiple packages at once", "Full organisation preview tree before committing", "Space savings report if duplicates detected"] },
              { num: "3", title: "Organise & Browse", desc: "Confirm the organisation. Files move to their correct Niche → Sub-Niche folders. Browse your library using any of ten virtual views.", bullets: ["Packages moved as complete atomic units — never split", "All ten virtual views available immediately", "Full undo available at any time", "Statistics dashboard updates in real time"] }].
              map((step) =>
              <Card key={step.num} className="border-border" aria-label={`Step ${step.num}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl mb-4">{step.num}</div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.bullets.map((b, i) =>
                    <li key={i} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /><span className="text-muted-foreground">{b}</span></li>
                    )}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* ══════════ CROSS-PLATFORM DOWNLOAD ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Cross-platform download">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">Available on Windows, macOS &amp; Linux</h2>
            <p className="text-center text-muted-foreground mb-12">One purchase. Install on all your machines. No per-device licensing.</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
              { icon: Monitor, name: "Windows", formats: ".exe NSIS Installer (x64 / x86) | Portable .exe (x64)", req: "Windows 10 or later, 200MB disk space" },
              { icon: Apple, name: "macOS", formats: ".dmg for Intel Mac | .dmg for Apple Silicon (M1/M2/M3)", req: "macOS 11 Big Sur or later, 200MB disk space" },
              { icon: Terminal, name: "Linux", formats: ".AppImage (recommended) | .deb (Ubuntu/Debian) | .rpm (Fedora/RHEL)", req: "Ubuntu 20.04+ or equivalent, 200MB disk space" }].
              map((p) =>
              <Card key={p.name} className="border-border text-center" aria-label={`${p.name} download`}>
                  <CardContent className="p-6">
                    <p.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-secondary mb-3">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{p.formats}</p>
                    <p className="text-xs text-muted-foreground">{p.req}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="text-center mt-8">
              <Link to="/download">
                <Button variant="cta" size="lg" className="gap-2">Download PLR Organizer <ArrowRight className="h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════ WHAT'S INCLUDED ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="What's included">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">Everything Included for One Price</h2>
            <p className="text-center text-muted-foreground mb-12">PLR Organizer Pro includes the core organiser plus four specialist tools — all for a single one-time payment.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
              { name: "PLR Organizer", desc: "Auto-scan, AI niche detection, physical library organisation, virtual views, statistics dashboard. The core app everything else runs inside.", href: "/plr-organizer", highlight: true, icon: FolderSearch },
              { name: "AI Content Spinner", desc: "Transform generic PLR into unique, SEO-friendly content with uniqueness heatmap and AI-assisted rewriting.", href: "/tools/content-spinner", highlight: false, icon: Wand2 },
              { name: "License Rights Decoder", desc: "Auto-parse license files and get a colour-coded Can / Can't / Maybe checklist for every package.", href: "/tools/license-decoder", highlight: false, icon: FileKey },
              { name: "Visual HTML Sales Page Editor", desc: "Edit any PLR sales page visually without touching code. Token replacement wizard and rebranding profiles.", href: "/tools/html-editor", highlight: false, icon: Code },
              { name: "Duplicate & Overlap Detector", desc: "SHA-256 hashing and content analysis finds every duplicate and overlapping package across your library.", href: "/tools/duplicate-detector", highlight: false, icon: ScanSearch }].
              map((tool) =>
              <Link to={tool.href} key={tool.name}>
                  <Card className={`border-border h-full transition-shadow hover:shadow-md ${tool.highlight ? "ring-2 ring-primary border-primary" : ""}`} aria-label={tool.name}>
                    <CardContent className="p-5 text-center">
                      <tool.icon className={`h-8 w-8 mx-auto mb-3 ${tool.highlight ? "text-primary" : "text-muted-foreground"}`} />
                      <h3 className={`font-bold mb-2 ${tool.highlight ? "text-primary" : "text-secondary"}`}>{tool.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                      {tool.highlight && <Badge className="bg-primary text-primary-foreground mt-3 text-xs">Flagship</Badge>}
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>

            <p className="text-center text-muted-foreground text-sm mt-8 font-medium">
              All five tools are included in a single one-time payment of $27. No monthly fees. No per-tool pricing. No upsells.
            </p>
          </div>
        </section>

        {/* ══════════ USE CASE EXAMPLES ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Real-world use case examples">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-3">Real-World Examples</h2>
            <p className="text-center text-muted-foreground mb-12">See how PLR buyers use PLR Organizer to take back control of their library</p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
              { title: "Organising 500+ packages bought over three years from 40 different sellers", body: "Point PLR Organizer at every folder and drive where PLR has accumulated over the years. The four-layer AI engine processes every package and assigns niches with confidence scoring. Review the results grid, override any misassignments, and run the organisation. 500 packages, correctly sorted into a clean Niche → Sub-Niche structure, in a single afternoon — a task that would take weeks manually." },
              { title: "Building a content calendar from your existing PLR library", body: "Use the By Niche virtual view to see exactly which niches you have covered and how many packages per sub-niche. Filter by license type to find only PLR (fully modifiable) content. Sort by quality score to surface the best material first. Export as a CSV inventory to plan your content calendar for the next 12 months — using content you already own." },
              { title: "Running a PLR content business with a virtual assistant", body: "Use Export Inventory to generate a full HTML Catalog or CSV of your entire library with niche, license type, quality score, and file location. Share it with your VA so they can find and use the right content without needing access to the app or your file system. Smart Collections let you pre-filter exactly which packages your VA should work with." }].
              map((uc) =>
              <Card key={uc.title} className="border-border" aria-label={uc.title}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-secondary mb-3 leading-snug">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.body}</p>
                    
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* ══════════ TECHNICAL SPECIFICATIONS ══════════ */}
        <section className="py-16 lg:py-20 bg-muted/50" aria-label="Technical Specifications">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {techSpecs.map((spec, i) =>
              <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{spec}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="py-16 lg:py-20" aria-label="Frequently Asked Questions">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) =>
              <details key={i} className="group rounded-lg border border-border bg-background" open>
                  <summary className="cursor-pointer p-5 font-semibold text-secondary list-none flex items-center justify-between" role="button" aria-expanded="true">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.answer}</div>
                </details>
              )}
            </div>
          </div>
        </section>

        {/* ══════════ CTA BANNER ══════════ */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground" aria-label="Call to action">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take Control of Your PLR Library?</h2>
            <p className="text-lg opacity-90 mb-8">
              Get instant access to PLR Organizer and all 4 specialist tools — AI Content Spinner, License Rights Decoder, Visual HTML Editor, and Duplicate Detector — for a single one-time payment. <Link to="/download" className="underline font-semibold">Download for Windows, Mac &amp; Linux</Link>. <Link to="/about" className="underline font-semibold">Learn more about us</Link>.
            </p>
            <Link to="/funnel/offer">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-10 py-6 gap-2">
                Get All 5 Tools for Just $27 <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

      </main>
    </>);

}