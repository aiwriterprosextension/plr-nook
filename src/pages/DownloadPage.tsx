import { useState, useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Monitor,
  Laptop,
  Terminal,
  Download,
  CheckCircle,
  HardDrive,
  Zap,
  Eye,
  WifiOff,
  RefreshCw,
  Bell,
  ChevronDown,
  Shield,
} from "lucide-react";

type DetectedOS = "windows" | "macos" | "linux";

function detectOS(): DetectedOS {
  const ua = navigator.userAgent;
  const platform = navigator.platform;
  if (/Mac/.test(platform) || /Macintosh/.test(ua)) return "macos";
  if (/Linux/.test(platform) || /Linux/.test(ua)) return "linux";
  return "windows";
}

const osLabels: Record<DetectedOS, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PLR Organizer Pro",
  operatingSystem: "Windows, macOS, Linux",
  applicationCategory: "UtilitiesApplication",
  downloadUrl: "https://organizer.aiwriterpros.com/download",
  offers: {
    "@type": "Offer",
    price: "27",
    priceCurrency: "USD",
  },
};

const faqItems = [
  {
    q: "Is the desktop app free?",
    a: "Yes. The desktop app is included free for all PLR Organizer Pro users. One purchase gives you installers for Windows, macOS, and Linux — install on as many of your own machines as you like.",
  },
  {
    q: "Do I need internet to use it?",
    a: "No. PLR Organizer Pro works 100% offline. Your library data is stored in a local SQLite database on your machine. Internet is only needed to download the installer and to receive optional automatic updates.",
  },
  {
    q: "How do updates work?",
    a: "The app checks for updates automatically when online and notifies you when a new version is ready. Updates install in the background. You choose when to apply them and are never forced to update.",
  },
  {
    q: "Will it work on an external hard drive?",
    a: "Yes. Point PLR Organizer Pro at any folder or drive — internal, external USB, or network-attached storage. Your organised library output folder can also live on an external drive.",
  },
  {
    q: "What if my antivirus flags the installer?",
    a: "Some antivirus software flags new applications as a precaution. PLR Organizer Pro is virus-free — verify this using the SHA-256 checksums on this page. If flagged, add an exception or temporarily disable real-time scanning during installation.",
  },
  {
    q: "Can I install it on more than one computer?",
    a: "Yes. One purchase covers all your personal machines. No per-device licensing or activation codes required.",
  },
  {
    q: "How do I move my library to a new computer?",
    a: "Export a database backup from Settings → Cache & Data → Export Database Backup on your old machine. Install PLR Organizer Pro on the new machine and import the backup. Your metadata, tags, notes, and history transfer automatically. Physical PLR files need to be copied separately.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const features = [
  {
    icon: HardDrive,
    title: "Direct File System Access",
    desc: "Scan your entire computer for PLR content without uploading files to the cloud. Access any folder, drive, or archive directly — including external drives and network-attached storage.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    desc: "Native app performance with instant file operations and indexing. No browser limitations — processes thousands of files in seconds using your full system resources.",
  },
  {
    icon: Eye,
    title: "Real-time File Watching",
    desc: "Automatically detect new PLR files added to watched folders. Drop new purchases into your incoming folder and the app flags them for organisation immediately.",
  },
  {
    icon: WifiOff,
    title: "Offline Capability",
    desc: "Access your entire library even without an internet connection. Your data lives in a local SQLite database on your machine — no connection required at any time.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    desc: "Get new features and improvements automatically in the background. The app checks for updates silently and notifies you when a new version is ready — no manual downloads needed.",
  },
  {
    icon: Bell,
    title: "Native Notifications",
    desc: "Get OS-level system notifications for scan completions and important events. Know when a long scan or organisation job finishes even if the app is minimised.",
  },
];

const checksums = `Windows 64-bit (.exe):    [checksum added after build]
Windows 32-bit (.exe):    [checksum added after build]
Windows Portable (.exe):  [checksum added after build]
macOS Apple Silicon:      [checksum added after build]
macOS Intel:              [checksum added after build]
Linux .AppImage:          [checksum added after build]
Linux .deb:               [checksum added after build]
Linux .rpm:               [checksum added after build]`;

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<DetectedOS>("windows");
  const [checksumsOpen, setChecksumsOpen] = useState(false);

  useEffect(() => {
    setDetectedOS(detectOS());
  }, []);

  const otherPlatforms = (["windows", "macos", "linux"] as DetectedOS[]).filter(
    (os) => os !== detectedOS
  );

  const platformDescriptions: Record<DetectedOS, string> = {
    windows: "Windows Installer (.exe)",
    macos: "macOS (Intel & Apple Silicon)",
    linux: "Linux (.AppImage, .deb, .rpm)",
  };

  const platformIcons: Record<DetectedOS, typeof Monitor> = {
    windows: Monitor,
    macos: Laptop,
    linux: Terminal,
  };

  return (
    <>
      <SEOHead
        title="Download PLR Organizer Pro | Windows, Mac & Linux Desktop App"
        description="Download PLR Organizer Pro for Windows, macOS, or Linux. Native desktop app with direct file system access, offline capability, and automatic updates. Free for all PLR Organizer Pro users."
        keywords="download PLR Organizer Pro, PLR software download, PLR organizer Windows, PLR organizer Mac, PLR organizer Linux, desktop PLR tool"
        canonicalUrl="https://organizer.aiwriterpros.com/download"
        ogImage="https://organizer.aiwriterpros.com/og-download.png"
        robots="index, follow"
        author="PLR Organizer Pro"
        ogType="website"
        jsonLd={softwareAppJsonLd}
      />

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-background">
        {/* ===== HERO ===== */}
        <section aria-label="Download hero" className="py-16 md:py-24 bg-gradient-hero">
          <div className="container max-w-4xl text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Desktop Application
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Download PLR Organizer Pro
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Get the full power of PLR organisation with native desktop features. Direct file
              system access, lightning-fast performance, and full offline capability — available
              for Windows, Mac, and Linux.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-8">
              New to PLR Organizer Pro? <Link to="/plr-organizer" className="text-primary hover:underline font-medium">Learn what it can do</Link> or{" "}
              <Link to="/tools" className="text-primary hover:underline font-medium">explore the included tools</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium text-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> Free for all PLR Organizer Pro users
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> Works Offline
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" /> No Sign-In Required
              </span>
            </div>
          </div>
        </section>

        {/* ===== OS AUTO-DETECTION DOWNLOAD CARD ===== */}
        <section aria-label="Download for your platform" className="py-12 md:py-16">
          <div className="container max-w-xl">
            <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
              <div className="h-1 bg-primary w-full" />
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  Download for {osLabels[detectedOS]}
                </h2>
                <p className="text-muted-foreground mb-6">Free for all PLR Organizer Pro users</p>

                {/* Primary download button */}
                {detectedOS === "windows" && (
                  <>
                    <Button asChild className="w-full mb-3" size="lg">
                      <a href="#" className="flex items-center justify-center gap-2">
                        <Download className="h-5 w-5" /> Download for Windows (64-bit)
                      </a>
                    </Button>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Download 32-bit version
                    </a>
                  </>
                )}
                {detectedOS === "macos" && (
                  <>
                    <Button asChild className="w-full mb-3" size="lg">
                      <a href="#" className="flex items-center justify-center gap-2">
                        <Download className="h-5 w-5" /> Download for macOS (Apple Silicon)
                      </a>
                    </Button>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Download Intel version
                    </a>
                  </>
                )}
                {detectedOS === "linux" && (
                  <>
                    <Button asChild className="w-full mb-3" size="lg">
                      <a href="#" className="flex items-center justify-center gap-2">
                        <Download className="h-5 w-5" /> Download for Linux (.AppImage)
                      </a>
                    </Button>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Download .deb
                      </a>
                      <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Download .rpm
                      </a>
                    </div>
                  </>
                )}

                {/* Other platforms */}
                <div className="mt-8 pt-6 border-t border-border space-y-3">
                  {otherPlatforms.map((os) => {
                    const Icon = platformIcons[os];
                    return (
                      <div key={os} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-foreground">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          {platformDescriptions[os]}
                        </span>
                        <a href="#" className="text-primary hover:underline font-medium">
                          Download →
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              We detected you're on <strong>{osLabels[detectedOS]}</strong>. Not right? Choose
              your platform above.
            </p>
          </div>
        </section>

        {/* ===== THREE PLATFORM CARDS ===== */}
        <section aria-label="Platform download options" className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Available on All Major Platforms
              </h2>
              <p className="text-muted-foreground text-lg">
                One purchase. Install on Windows, Mac, and Linux. No per-device licensing.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {([
                {
                  os: "windows" as DetectedOS,
                  icon: Monitor,
                  title: "Windows",
                  versions: ["Windows Installer (.exe) 64-bit", "Portable .exe 64-bit", "32-bit Installer"],
                  req: "Windows 10 or later",
                  link: "Download for Windows →",
                },
                {
                  os: "macos" as DetectedOS,
                  icon: Laptop,
                  title: "macOS",
                  versions: ["Apple Silicon .dmg (M1/M2/M3)", "Intel .dmg"],
                  req: "macOS 11 Big Sur or later",
                  link: "Download for macOS →",
                },
                {
                  os: "linux" as DetectedOS,
                  icon: Terminal,
                  title: "Linux",
                  versions: [".AppImage (recommended)", ".deb (Ubuntu/Debian)", ".rpm (Fedora/RHEL)"],
                  req: "Ubuntu 20.04+ or equivalent",
                  link: "Download for Linux →",
                },
              ]).map((p) => (
                <div
                  key={p.os}
                  className={`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow ${
                    detectedOS === p.os ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {detectedOS === p.os && <div className="h-1 bg-primary w-full" />}
                  <div className="p-8">
                    <p.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-secondary mb-3">{p.title}</h3>
                    <ul className="space-y-1.5 mb-4">
                      {p.versions.map((v) => (
                        <li key={v} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mb-5">Requires: {p.req}</p>
                    <a href="#" className="text-primary font-medium hover:underline text-sm">
                      {p.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DESKTOP-EXCLUSIVE FEATURES ===== */}
        <section aria-label="Desktop-exclusive features" className="py-12 md:py-16">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Desktop-Exclusive Features
              </h2>
              <p className="text-muted-foreground text-lg">
                Powerful capabilities that are only possible in a native desktop application
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <f.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-secondary mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SYSTEM REQUIREMENTS ===== */}
        <section aria-label="System requirements" className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              System Requirements
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {([
                {
                  os: "windows" as DetectedOS,
                  icon: Monitor,
                  title: "Windows",
                  specs: [
                    { label: "OS", value: "Windows 10 (64-bit) or later" },
                    { label: "Processor", value: "1.6 GHz or faster" },
                    { label: "Memory", value: "4 GB RAM (8 GB recommended)" },
                    { label: "Storage", value: "500 MB available space" },
                  ],
                  note: "Fully self-contained — no additional dependencies required",
                },
                {
                  os: "macos" as DetectedOS,
                  icon: Laptop,
                  title: "macOS",
                  specs: [
                    { label: "OS", value: "macOS 11 Big Sur or later" },
                    { label: "Processor", value: "Intel Core i5 or Apple Silicon (M1/M2/M3)" },
                    { label: "Memory", value: "4 GB RAM (8 GB recommended)" },
                    { label: "Storage", value: "500 MB available space" },
                  ],
                  note: "No admin rights required for installation",
                },
                {
                  os: "linux" as DetectedOS,
                  icon: Terminal,
                  title: "Linux",
                  specs: [
                    { label: "OS", value: "Ubuntu 20.04, Fedora 32, or equivalent" },
                    { label: "Processor", value: "1.6 GHz or faster" },
                    { label: "Memory", value: "4 GB RAM" },
                    { label: "Storage", value: "500 MB available space" },
                  ],
                  note: "AppImage requires no installation — download and run",
                },
              ]).map((p) => (
                <div
                  key={p.os}
                  className={`bg-card border border-border rounded-xl overflow-hidden ${
                    detectedOS === p.os ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {detectedOS === p.os && <div className="h-1 bg-primary w-full" />}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <p.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold text-secondary">{p.title}</h3>
                    </div>
                    <dl className="space-y-2 mb-4">
                      {p.specs.map((s) => (
                        <div key={s.label} className="flex gap-2 text-sm">
                          <dt className="font-medium text-foreground shrink-0 w-20">{s.label}:</dt>
                          <dd className="text-muted-foreground">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="text-xs text-primary/80 bg-primary/5 rounded-lg p-3">{p.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INSTALLATION INSTRUCTIONS ===== */}
        <section aria-label="Installation instructions" className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Installation Instructions
              </h2>
              <p className="text-muted-foreground text-lg">Up and running in under 60 seconds</p>
            </div>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Download",
                  desc: "Click the download button above for your operating system. Your installer will begin downloading immediately — approximately 150–200 MB depending on platform.",
                },
                {
                  step: 2,
                  title: "Install",
                  desc: "Run the installer and follow the setup wizard. Windows: run the .exe and follow the NSIS installer. macOS: open the .dmg and drag to Applications. Linux: make the .AppImage executable (chmod +x) and run it, or install the .deb/.rpm with your package manager.",
                },
                {
                  step: 3,
                  title: "Launch",
                  desc: "Open PLR Organizer Pro and start organising. No sign-in required — works fully offline from first launch. Point it at your PLR folders and hit Scan.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-1">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                ⏱ Under 60 seconds total
              </span>
            </div>
          </div>
        </section>

        {/* ===== SHA-256 CHECKSUMS ===== */}
        <section aria-label="Download checksums" className="py-12 md:py-16 bg-muted/50">
          <div className="container max-w-3xl">
            <button
              onClick={() => setChecksumsOpen(!checksumsOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border text-left hover:shadow-sm transition-shadow"
            >
              <span className="flex items-center gap-2 font-bold text-secondary">
                <Shield className="h-5 w-5 text-primary" />
                Verify Your Download (SHA-256 Checksums)
              </span>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform ${
                  checksumsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {checksumsOpen && (
              <div className="mt-4 bg-card border border-border rounded-xl p-6 animate-fade-in">
                <p className="text-sm text-muted-foreground mb-4">
                  For security, verify your download using the SHA-256 checksums below. These
                  confirm your installer has not been tampered with or corrupted.
                </p>
                <pre className="bg-secondary text-secondary-foreground p-4 rounded-lg text-xs overflow-x-auto font-mono leading-relaxed">
                  {checksums}
                </pre>
                <p className="text-xs text-muted-foreground mt-4">
                  Checksums updated with each release. Current version: <strong>v1.0.0</strong>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section aria-label="Frequently asked questions" className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} open className="group bg-card border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-secondary hover:bg-muted/50 transition-colors list-none">
                    <span>{item.q}</span>
                    <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section aria-label="Download call to action" className="py-16 md:py-20 bg-gradient-primary text-primary-foreground">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Download PLR Organizer Pro and start organising your content like a pro.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-warning text-warning-foreground hover:bg-warning/90 border-2 border-warning font-bold text-lg px-8"
            >
              <a href="#" className="flex items-center gap-2">
                <Download className="h-5 w-5" /> Download Now →
              </a>
            </Button>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 text-sm text-white/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" /> Free for all PLR Organizer Pro users
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" /> Windows, Mac & Linux
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4" /> 7-Day Money-Back Guarantee
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
