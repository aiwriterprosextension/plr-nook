import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search, Brain, FolderTree, PackageCheck, Monitor, Apple, Terminal,
  FileSearch, Settings, Database, LayoutGrid, Edit3, SearchIcon,
  Bookmark, Star, Copy, List, Layers, FileText, Keyboard, BarChart3,
  Table, Eye, Shield, HardDrive, ChevronRight, Zap, ArrowRight
} from "lucide-react";

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PLR Organizer",
  "description": "Stop drowning in unsorted PLR folders. PLR Organizer automatically scans your hard drive, detects every PLR package, identifies its niche using AI, and physically organises your entire library into a clean Niche → Sub-Niche folder structure — in minutes, not days. Works 100% offline. No subscription.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "offers": { "@type": "Offer", "price": "27", "priceCurrency": "USD" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "214" }
};

const faqItems = [
  { q: "Does it move my files automatically or do I confirm first?", a: "You always confirm before any file moves. After the scan and your review of the results grid, PLR Organizer generates a full organisation preview — a tree showing exactly where every package will land — before a single file is touched. You confirm the preview to proceed, or go back to the results grid to make changes. Nothing moves without your explicit approval." },
  { q: "Will it break apart my PLR packages?", a: "Never. PLR Organizer treats every package as one indivisible unit. A ZIP file is moved as one ZIP to the correct Niche → Sub-Niche folder. A folder package is moved as one complete folder. The app never extracts archives, never splits packages, and never reorganises the contents inside a package. Your content stays exactly as you received it — just in the right place." },
  { q: "What if the AI assigns the wrong niche to a package?", a: "You review every assignment in the results grid before organising. Any cell showing niche or sub-niche is editable — click it and choose from the dropdown. Bulk edit lets you fix multiple packages at once. Your manual decisions are saved permanently in the database and always override the AI detection on future scans." },
  { q: "Does it work with content already organised in my own folder structure?", a: "Yes. You can point PLR Organizer at any folder structure, including your existing one. The scanner finds PLR packages regardless of how they're currently stored or named. You choose a Base Output Folder for the organised library — this can be a new location or your existing one. In Copy mode, your originals are untouched while a new organised copy is built." },
  { q: "What happens if I add new PLR purchases later?", a: "Drop new purchases into any folder and run a new scan. The smart cache means only new or changed files are re-analysed — existing packages are skipped instantly. Your new packages are reviewed and organised using the exact same workflow. The process takes seconds for a handful of new packages." },
  { q: "Does it work if I have PLR spread across multiple drives and folders?", a: "Yes. You can add as many source folders and drives to a single scan as you like. The scanner works across all of them in one pass. All discovered packages end up in the same results grid for unified review and organisation regardless of where they were found." },
  { q: "Is my library data stored in the cloud?", a: "No. PLR Organizer stores all data in a local SQLite database on your machine. No data ever leaves your computer. No internet connection is required at any time. There are no accounts, no login, no analytics, and no telemetry of any kind." },
  { q: "Can I use this on more than one computer?", a: "Yes. One purchase covers all your machines. Export a database backup from Settings on one machine and import it on another to transfer your library metadata. Physical files need to be available on the second machine via your normal file transfer method." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

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
  { name: "Hobbies", subs: "Photography, Writing, Music, Gaming, Art & Design, Gardening" },
];

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
  { name: "Smart Collections", desc: "Your own saved filter sets that auto-update as you add content" },
];

const features = {
  scanning: [
    { title: "Dual-Pane File Explorer", desc: "Left pane: hierarchical file system tree with drives and folders. Right pane: details grid with name, size, type, date. Multi-select with Ctrl+Click and Shift+Click. Drag files from your OS file manager directly into the scan queue.", icon: LayoutGrid },
    { title: "Configurable Scan Settings", desc: "Set maximum scan depth (1–10 levels or unlimited). Choose file types to scan: ZIP, RAR, 7Z, folders, or all files. Include subfolders toggle. Scan archive contents without extracting.", icon: Settings },
    { title: "Intelligent Scan Cache", desc: "SQLite-powered cache remembers every scanned package. Re-scans skip unchanged files using file hash + date matching. Manual cache clear available in Settings.", icon: Database },
  ],
  organisation: [
    { title: "Physical Niche Organisation", desc: "The only physical operation the app performs. Moves or copies complete packages as atomic units into your chosen Niche → Sub-Niche folder hierarchy. Auto-creates folders. Never extracts. Never splits.", icon: FolderTree },
    { title: "Organisation Preview", desc: "See the complete before/after folder tree preview before a single file moves. Full tree showing exactly where every package will land. Confirm or go back.", icon: Eye },
    { title: "Copy or Move Mode", desc: "Choose to copy packages to the new location (keeping originals) or move them. Set your default in Settings.", icon: Copy },
    { title: "Undo Organisation", desc: "Every file operation is logged. Undo Last Organisation restores all files to their original paths and removes any newly empty folders.", icon: ArrowRight },
  ],
  library: [
    { title: "Spreadsheet-Style Package Grid", desc: "Sortable, filterable columns: Filename, Size, Type, PLR Score, Niche, Sub-Niche, Target Folder, License, Tags, Notes, Status. Show/hide any column.", icon: Table },
    { title: "Inline Editing", desc: "Click any editable cell (niche, sub-niche, license, tags, notes) to edit inline. Bulk edit: select multiple rows and set niche, tags, or license for all at once.", icon: Edit3 },
    { title: "Smart Search", desc: "Global search across all metadata. Supports niche:health, \"exact phrase\", size:>100MB, wildcard syntax. Search history dropdown.", icon: SearchIcon },
    { title: "Smart Collections", desc: "Save any filter combination as a named collection. Smart Collections update automatically as new packages are added that match the criteria.", icon: Layers },
    { title: "Favourites", desc: "Star any package to add it to your Favourites virtual view. One-click access to your most-used content.", icon: Star },
  ],
  intelligence: [
    { title: "Package Preview", desc: "Click any package to see full metadata, internal file tree (from cached archive inspection, no extraction), first 2KB of any text file inside the archive. Open in file manager, view license, edit metadata — all from the preview panel.", icon: FileSearch },
    { title: "Quick Preview Tooltip", desc: "Hover over any package for an instant popup showing file count, license type, niche, confidence score, and top tags.", icon: Eye },
    { title: "Tags & Notes", desc: "Add multi-tag chips and rich text notes to any package. Fully searchable.", icon: Bookmark },
  ],
  utilities: [
    { title: "Batch Rename", desc: "Find & Replace in filenames, add prefix/suffix, number sequences, custom patterns using variables: {niche}, {sub_niche}, {date}, {filename}, {index}. Live preview before applying.", icon: Edit3 },
    { title: "Export Inventory", desc: "Export your full library or any selection as CSV, JSON, PDF Report, or HTML Catalog. Group by niche, include statistics summary, add export timestamp.", icon: FileText },
    { title: "Keyboard Shortcuts", desc: "Ctrl/Cmd+S: Start scan. Ctrl/Cmd+F: Search. Ctrl/Cmd+Z: Undo organisation. Space: Quick preview. Ctrl/Cmd+E: Export. Ctrl/Cmd+comma: Settings. Delete: Exclude selected.", icon: Keyboard },
  ],
  statistics: [
    { title: "Statistics Dashboard", desc: "Total packages, total library size, high quality count, needs review count, duplicate count. Charts: packages by niche (pie), packages added over time (bar), top 10 niches (horizontal bar), license type breakdown (donut), quality distribution (donut).", icon: BarChart3 },
    { title: "Niche Coverage Table", desc: "See every niche and sub-niche with package count, total size, and average confidence. Instantly spot gaps in your library.", icon: Table },
  ],
};

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
  "Runs on Windows 10+, macOS 11+, Ubuntu 20.04+",
];

export default function PLROrganizerPage() {
  return (
    <>
      <SEOHead
        title="PLR Organizer | Auto-Scan, Auto-Sort & Manage Your Entire PLR Library"
        description="Stop drowning in unsorted PLR folders. PLR Organizer automatically scans your hard drive, detects every PLR package, identifies its niche using AI, and physically organises your entire library into a clean Niche → Sub-Niche folder structure — in minutes, not days. Works 100% offline. No subscription."
        canonicalUrl="https://plrorganizerpro.com/plr-organizer"
        robots="index, follow"
        author="PLR Organizer Pro"
        ogType="product"
        jsonLd={softwareAppJsonLd}
      />
      {/* FAQPage JSON-LD */}
      <SEOHead
        title="PLR Organizer FAQ"
        description=""
        jsonLd={faqJsonLd}
      />

      <main className="min-h-screen" style={{ scrollBehavior: "smooth" }}>
        {/* HERO */}
        <section aria-label="Hero" className="relative bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
          <div className="container max-w-5xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              The Core PLR Management App
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              PLR Organizer: Automatically Scan, Sort &amp; Manage Your Entire PLR Library — No Manual Filing Ever Again
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              You've spent thousands on PLR content buried across hundreds of folders, ZIP files, and hard drives. Finding anything takes longer than creating it from scratch. PLR Organizer automatically scans your entire computer for PLR packages, identifies the niche and sub-niche of every package using four layers of AI detection, and physically organises your whole library into a clean, logical folder structure — while giving you powerful virtual views to browse everything your way. Works 100% offline. One-time payment. No cloud. No login. No subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/funnel/offer">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Get PLR Organizer Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo ▷
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>✓ Works on Windows, macOS &amp; Linux</span>
              <span>✓ 100% Offline — Your Files Never Leave Your Machine</span>
              <span>✓ 7-Day Money-Back Guarantee</span>
              <span>✓ One-Time Payment — No Subscription</span>
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section aria-label="Problem and Solution" className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
              The PLR Library Problem Every Serious Buyer Faces
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8">
                <h2 className="text-xl font-bold text-destructive mb-4">A Growing PLR Library Becomes Unmanageable Fast</h2>
                <ul className="space-y-4 text-foreground">
                  <li className="flex gap-3"><span className="text-destructive text-xl">🔴</span><span>Hundreds of ZIP files scattered across Downloads, Desktop, and external drives with no organisation</span></li>
                  <li className="flex gap-3"><span className="text-destructive text-xl">🔴</span><span>You've bought the same content multiple times from different sellers without realising it</span></li>
                  <li className="flex gap-3"><span className="text-destructive text-xl">🔴</span><span>Finding the right PLR for a project means opening folder after folder wasting hours every week</span></li>
                  <li className="flex gap-3"><span className="text-destructive text-xl">🔴</span><span>You have no idea what niches you're actually covered in or what gaps you have in your library</span></li>
                </ul>
              </div>
              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-8">
                <h2 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4">Your Entire Library Organised in Minutes</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-3"><span className="text-green-600">✓</span><span>Auto-scans your entire hard drive and finds every PLR package automatically</span></li>
                  <li className="flex gap-3"><span className="text-green-600">✓</span><span>Four-layer AI detection identifies niche, sub-niche, license type, and content type</span></li>
                  <li className="flex gap-3"><span className="text-green-600">✓</span><span>Physically moves packages into a clean Niche → Sub-Niche folder structure</span></li>
                  <li className="flex gap-3"><span className="text-green-600">✓</span><span>Virtual views let you browse by content type, license, quality, and date without moving any files</span></li>
                  <li className="flex gap-3"><span className="text-green-600">✓</span><span>Statistics dashboard shows exactly what niches you have covered and where your gaps are</span></li>
                </ul>
                <Link to="/funnel/offer" className="block mt-6">
                  <Button variant="cta" className="w-full">Start Organising Your Library <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW THE CORE FEATURE WORKS — DARK NAVY */}
        <section aria-label="Core Feature Explanation" className="py-16 md:py-24 bg-[hsl(233,22%,15%)] text-white">
          <div className="container max-w-6xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3">
              The Only App That Physically Organises Your PLR Library — Not Just Tags It
            </h2>
            <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
              Most tools just add metadata. PLR Organizer actually moves your files into a logical structure you can use outside the app too.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Before */}
              <div className="rounded-xl border border-destructive/30 bg-white/5 p-6">
                <span className="inline-block rounded-full bg-destructive/20 text-destructive px-3 py-1 text-xs font-bold mb-4">Your Library Now</span>
                <pre className="text-xs text-white/80 font-mono whitespace-pre-wrap leading-relaxed">{`Downloads\\
  plr-bundle-2019.zip
  health-pack-final-v2.zip
  MMO-collection.rar
Desktop\\
  misc-plr\\
    stuff\\
      more stuff\\
External Drive\\
  old downloads\\
    [hundreds more files...]`}</pre>
                <p className="text-xs text-white/50 mt-4">No niche structure. No idea what you have. Hours wasted searching.</p>
              </div>
              {/* Process */}
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                <span className="inline-block rounded-full bg-yellow-500/20 text-yellow-400 px-3 py-1 text-xs font-bold mb-4">PLR Organizer Runs</span>
                <div className="space-y-5 mt-2">
                  {[
                    { icon: "🔍", text: "Scans your selected folders and drives" },
                    { icon: "🧠", text: "AI analyses each package across 4 detection layers" },
                    { icon: "📁", text: "Auto-creates Niche → Sub-Niche folder structure" },
                    { icon: "📦", text: "Moves each package as one unit to the correct folder" },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="bg-yellow-500/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                      <div className="flex gap-2 items-center text-sm">
                        <span>{step.icon}</span><span>{step.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* After */}
              <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                <span className="inline-block rounded-full bg-green-500/20 text-green-400 px-3 py-1 text-xs font-bold mb-4">Your Library After</span>
                <pre className="text-xs text-white/80 font-mono whitespace-pre-wrap leading-relaxed">{`My PLR Library\\
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
      [packages...]`}</pre>
                <p className="text-xs text-white/50 mt-4">Clean. Logical. Usable — inside the app and in Windows Explorer or Finder.</p>
              </div>
            </div>
            <div className="mt-10 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6 flex gap-4 items-start">
              <Zap className="h-6 w-6 text-yellow-400 shrink-0 mt-0.5" />
              <p className="text-sm text-white/90">
                <strong className="text-yellow-400">Critical Design Principle:</strong> PLR packages are ALWAYS kept together as one unit. A ZIP file is moved as one ZIP. A folder is moved as one folder. The app never extracts, splits, or breaks apart a package during organisation. Your content stays exactly as you received it — just in the right place.
              </p>
            </div>
          </div>
        </section>

        {/* FOUR-LAYER AI DETECTION */}
        <section aria-label="Four Layer AI Detection" className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Four Layers of Intelligence — Every Package Gets Correctly Identified
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              PLR Organizer doesn't just look at filenames. It analyses every signal available to assign the right niche with confidence.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { n: 1, title: "Instant Recognition From the Filename", body: "The first pass uses pattern matching against known PLR naming conventions — detecting keywords like PLR, MRR, Pack, Bundle, Collection, Kit, and Resell Rights in filenames and folder names. Fast, runs first, catches the obvious cases immediately with confidence scoring: exact match 100pts, partial 50pts, related keywords 25pts.", icon: Search },
                { n: 2, title: "Looks Inside Every ZIP Without Extracting It", body: "Without unpacking a single file, PLR Organizer streams the internal structure of every ZIP, RAR, and 7Z archive and analyses the folder names and file types found inside. Detecting internal folders named Articles, eBooks, Graphics, Sales Page, or Source Files is a strong signal that tells the scanner exactly what type of PLR package it's dealing with.", icon: PackageCheck },
                { n: 3, title: "Reads the License File to Confirm Rights Type", body: "PLR packages almost always include a license.txt, rights.txt, or readme.txt. PLR Organizer streams just that file without extracting the whole archive, then searches for key phrases like \"private label\", \"put your name\", \"master resell\", \"modify and rebrand\", and \"pass on rights\" to accurately assign the license type: PLR, MRR, Resell Rights, Commercial, or Unknown.", icon: Shield },
                { n: 4, title: "AI Assigns the Right Niche and Sub-Niche With a Confidence Score", body: "All signals from the previous three layers are combined into a weighted confidence formula: Filename Match (30%) + Internal Structure Match (25%) + License Detection (25%) + Content Signals (20%) = Final Confidence Score. Each package receives a primary niche, sub-niche, and a confidence score from 0–100%. High confidence (90–100%) = green. Medium (60–89%) = yellow. Low (0–59%) = red for your review.", icon: Brain },
              ].map((layer) => (
                <div key={layer.n} className="rounded-xl border border-border bg-card p-6" aria-label={`Layer ${layer.n}: ${layer.title}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">{layer.n}</span>
                    <layer.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground">{layer.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-border bg-muted/50 p-6 text-center text-sm text-muted-foreground">
              <strong className="text-foreground">You always have the final say.</strong> Every niche assignment can be overridden by clicking the niche cell in the results grid. Your manual decisions are saved permanently and take priority over AI detection on every future scan.
            </div>
          </div>
        </section>

        {/* VIRTUAL VIEWS */}
        <section aria-label="Virtual Library Views" className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Ten Ways to Browse Your Library — Without Moving a Single File
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              After your library is organised, virtual views let you see your content from any angle. All views are powered by the local database — no file system changes ever happen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {virtualViews.map((v) => (
                <div key={v.name} className="rounded-lg border border-border bg-card p-4" aria-label={v.name}>
                  <h3 className="font-bold text-foreground text-sm mb-1">{v.name}</h3>
                  <p className="text-xs text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Every virtual view shows the same sortable data grid — just grouped differently. Switching views never touches your files.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section aria-label="Features" className="py-16 bg-background">
          <div className="container max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Everything Built Into PLR Organizer
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              One app. Your complete PLR management workflow from first scan to ready-to-use library.
            </p>
            {Object.entries(features).map(([category, items]) => (
              <div key={category} className="mb-10">
                <h3 className="text-lg font-semibold text-foreground mb-4 capitalize border-b border-border pb-2">
                  {category === "scanning" ? "Scanning & Detection" : category === "organisation" ? "Organisation & Filing" : category === "library" ? "Library Management" : category === "intelligence" ? "Package Intelligence" : category === "utilities" ? "Utilities" : "Statistics & Insights"}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((f) => (
                    <div key={f.title} className="rounded-xl border border-border bg-card p-5" aria-label={f.title}>
                      <div className="flex items-center gap-2 mb-2">
                        <f.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-foreground text-sm">{f.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NICHE TAXONOMY */}
        <section aria-label="Built-in Niche Taxonomy" className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              Pre-Built Taxonomy Covers Every Major PLR Niche
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Ten primary niches, 60+ sub-niches built in. Add your own custom niches and sub-niches at any time.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {niches.map((n) => (
                <div key={n.name} className="rounded-lg border border-border bg-card p-4">
                  <h3 className="font-bold text-foreground mb-1">{n.name}</h3>
                  <p className="text-xs text-muted-foreground">{n.subs}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Don't see your niche? Add any custom niche or sub-niche from the Settings screen. The folder is created on your file system immediately. Built-in niches can be hidden if you don't use them.
            </p>
          </div>
        </section>

        {/* TABBED WORKFLOWS */}
        <section aria-label="Key Workflows" className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              From Chaotic Library to Fully Organised System
            </h2>
            <p className="text-center text-muted-foreground mb-10">Four complete workflows PLR Organizer handles for you</p>
            <Tabs defaultValue="scan" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 h-auto">
                <TabsTrigger value="scan" className="text-xs md:text-sm py-2">First Scan & Organise</TabsTrigger>
                <TabsTrigger value="new" className="text-xs md:text-sm py-2">Adding New Content</TabsTrigger>
                <TabsTrigger value="find" className="text-xs md:text-sm py-2">Finding What You Need</TabsTrigger>
                <TabsTrigger value="maintain" className="text-xs md:text-sm py-2">Library Maintenance</TabsTrigger>
              </TabsList>
              <TabsContent value="scan" className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Set Up Your Entire Library Once — Takes Minutes, Not Days</h3>
                <p className="text-muted-foreground text-sm">Point PLR Organizer at all the folders and drives where your PLR lives. Set your Base Output Folder where your organised library will live. Choose Copy (safe) or Move mode. Hit Start Scan. Watch the four-layer AI engine work through every file. Review the results grid — override any niche assignments you disagree with. Check the organisation preview to see exactly where everything will go. Hit Confirm &amp; Organise. Done. Your entire PLR library is now in a clean, logical, usable structure.</p>
              </TabsContent>
              <TabsContent value="new" className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">New Purchases Are Organised in Seconds</h3>
                <p className="text-muted-foreground text-sm">Drop new PLR purchases into your designated incoming folder. Open PLR Organizer and run a scan — the cache means only new files are analysed, so it's fast. Review the new packages in the results grid. Confirm the niche assignments. Organise. Your new purchases are filed into exactly the right place in your library structure and visible in every virtual view immediately.</p>
              </TabsContent>
              <TabsContent value="find" className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Find the Right PLR for Any Project in Seconds</h3>
                <p className="text-muted-foreground text-sm">Use the By Niche view to browse straight to the niche you need. Use Smart Search with niche: and license: operators to filter precisely. Filter by license type to find everything you can sell right now. Sort by quality score to surface your best content first. Use Smart Collections to save your most-used filter combinations for one-click access. Preview any package without opening a file manager.</p>
              </TabsContent>
              <TabsContent value="maintain" className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Keep Your Library Clean and Audit-Ready</h3>
                <p className="text-muted-foreground text-sm">The Statistics Dashboard shows your full library health at a glance — coverage gaps, quality distribution, duplicate count, and total value. The Duplicates virtual view groups all detected duplicate packages for review. Export a full inventory as CSV or PDF for reference or to share with a VA. Use Batch Rename to clean up inconsistent filenames. Use the Undo Organisation feature to reverse any filing decisions you want to revisit.</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section aria-label="How It Works" className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">How PLR Organizer Works</h2>
            <p className="text-center text-muted-foreground mb-10">From scattered files to organised library in three steps</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: 1, title: "Scan Your Library", desc: "Select the folders and drives where your PLR lives. PLR Organizer scans everything and analyses each package across four detection layers.", bullets: ["Scans ZIP, RAR, 7Z archives and folders", "Configurable scan depth and file type filters", "Smart cache skips unchanged files on re-scans", "Real-time progress with pause and cancel"] },
                { n: 2, title: "Review & Confirm", desc: "Check the AI's niche assignments in the results grid. Override anything you disagree with. See the full organisation preview before any file moves.", bullets: ["Override any niche or license assignment inline", "Bulk edit multiple packages at once", "Full organisation preview tree before committing", "Space savings report if duplicates detected"] },
                { n: 3, title: "Organise & Browse", desc: "Confirm the organisation. Files move to their correct Niche → Sub-Niche folders. Browse your library using any of ten virtual views.", bullets: ["Packages moved as complete atomic units — never split", "All ten virtual views available immediately", "Full undo available at any time", "Statistics dashboard updates in real time"] },
              ].map((step) => (
                <div key={step.n} className="rounded-xl border border-border bg-card p-6" aria-label={`Step ${step.n}: ${step.title}`}>
                  <span className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mb-4">{step.n}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-foreground"><span className="text-green-600">✓</span>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-PLATFORM */}
        <section aria-label="Cross-Platform Downloads" className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">Available on Windows, macOS &amp; Linux</h2>
            <p className="text-center text-muted-foreground mb-10">One purchase. Install on all your machines. No per-device licensing.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Windows", icon: Monitor, formats: ".exe NSIS Installer (x64 / x86) | Portable .exe (x64)", req: "Windows 10 or later, 200MB disk space" },
                { name: "macOS", icon: Apple, formats: ".dmg for Intel Mac | .dmg for Apple Silicon (M1/M2/M3)", req: "macOS 11 Big Sur or later, 200MB disk space" },
                { name: "Linux", icon: Terminal, formats: ".AppImage (recommended) | .deb (Ubuntu/Debian) | .rpm (Fedora/RHEL)", req: "Ubuntu 20.04+ or equivalent, 200MB disk space" },
              ].map((p) => (
                <div key={p.name} className="rounded-xl border border-border bg-card p-6 text-center" aria-label={`${p.name} download`}>
                  <p.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{p.formats}</p>
                  <p className="text-xs text-muted-foreground">{p.req}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="#">
                <Button variant="cta" size="lg">Download PLR Organizer <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section aria-label="What's Included" className="py-16 bg-muted/30">
          <div className="container max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">Everything Included for One Price</h2>
            <p className="text-center text-muted-foreground mb-10">PLR Organizer Pro includes the core organiser plus four specialist tools — all for a single one-time payment.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "PLR Organizer", desc: "Auto-scan, AI niche detection, physical library organisation, virtual views, statistics dashboard. The core app everything else runs inside.", highlight: true, href: "/plr-organizer" },
                { title: "AI Content Spinner", desc: "Transform generic PLR into unique, SEO-friendly content with uniqueness heatmap and AI-assisted rewriting.", highlight: false, href: "/tools/content-spinner" },
                { title: "License Rights Decoder", desc: "Auto-parse license files and get a colour-coded Can / Can't / Maybe checklist for every package.", highlight: false, href: "/tools/license-decoder" },
                { title: "Visual HTML Sales Page Editor", desc: "Edit any PLR sales page visually without touching code. Token replacement wizard and rebranding profiles.", highlight: false, href: "/tools/html-editor" },
                { title: "Duplicate & Overlap Detector", desc: "SHA-256 hashing and content analysis finds every duplicate and overlapping package across your library.", highlight: false, href: "/tools/duplicate-detector" },
              ].map((t) => (
                <Link key={t.title} to={t.href} className={`rounded-xl border p-5 block transition-colors hover:border-primary ${t.highlight ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                  <h3 className="font-bold text-foreground text-sm mb-2">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">All five tools are included in a single one-time payment of $27. No monthly fees. No per-tool pricing. No upsells.</p>
          </div>
        </section>

        {/* USE CASE EXAMPLES */}
        <section aria-label="Use Case Examples" className="py-16 bg-background">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">Real-World Examples</h2>
            <p className="text-center text-muted-foreground mb-10">See how PLR buyers use PLR Organizer to take back control of their library</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Organising 500+ packages bought over three years from 40 different sellers", body: "Point PLR Organizer at every folder and drive where PLR has accumulated over the years. The four-layer AI engine processes every package and assigns niches with confidence scoring. Review the results grid, override any misassignments, and run the organisation. 500 packages, correctly sorted into a clean Niche → Sub-Niche structure, in a single afternoon — a task that would take weeks manually." },
                { title: "Building a content calendar from your existing PLR library", body: "Use the By Niche virtual view to see exactly which niches you have covered and how many packages per sub-niche. Filter by license type to find only PLR (fully modifiable) content. Sort by quality score to surface the best material first. Export as a CSV inventory to plan your content calendar for the next 12 months — using content you already own." },
                { title: "Running a PLR content business with a virtual assistant", body: "Use Export Inventory to generate a full HTML Catalog or CSV of your entire library with niche, license type, quality score, and file location. Share it with your VA so they can find and use the right content without needing access to the app or your file system. Smart Collections let you pre-filter exactly which packages your VA should work with." },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-card p-6" aria-label={c.title}>
                  <h3 className="font-bold text-foreground mb-3 text-sm">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{c.body}</p>
                  <span className="text-primary text-xs font-medium">See How It Works →</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section aria-label="Technical Specifications" className="py-16 bg-muted/30">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {techSpecs.map((spec) => (
                <div key={spec} className="flex gap-2 text-sm text-foreground">
                  <span className="text-green-600">✓</span><span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="py-16 bg-background">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-border bg-card p-5 group" open aria-label={faq.q}>
                  <summary className="font-bold text-foreground cursor-pointer list-none flex items-center justify-between text-sm">
                    {faq.q}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-sm text-muted-foreground mt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section aria-label="Call to Action" className="py-16 bg-primary text-primary-foreground">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take Control of Your PLR Library?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get instant access to PLR Organizer and all 4 specialist tools — AI Content Spinner, License Rights Decoder, Visual HTML Editor, and Duplicate Detector — for a single one-time payment.
            </p>
            <Link to="/funnel/offer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Get All 5 Tools for Just $27 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
