import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Apple, Download, CheckCircle } from "lucide-react";

export default function DownloadPage() {
  return (
    <>
      <SEOHead
        title="Download PLR Organizer Pro | Windows, Mac & Linux"
        description="Download PLR Organizer Pro for Windows, Mac, or Linux. Organize thousands of PLR files in minutes with the ultimate desktop PLR management tool."
        keywords="download PLR Organizer Pro, PLR software download, PLR organizer Windows, PLR organizer Mac, PLR organizer Linux"
      />

      <div className="py-16 bg-background">
        <div className="container max-w-4xl">
          {/* Hero */}
          <section aria-label="Download hero" className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Get Started
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Download PLR Organizer Pro
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available for Windows, Mac, and Linux. Get up and running in under 2 minutes.
            </p>
          </section>

          {/* Download Cards */}
          <section aria-label="Download options" className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Monitor, platform: "Windows", version: "Windows 10+", file: "PLROrganizerPro-Setup.exe" },
              { icon: Apple, platform: "macOS", version: "macOS 11+", file: "PLROrganizerPro.dmg" },
              { icon: Monitor, platform: "Linux", version: "Ubuntu 20.04+", file: "PLROrganizerPro.AppImage" },
            ].map((item) => (
              <div key={item.platform} className="border border-border rounded-xl p-8 text-center bg-card hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.platform}</h3>
                <p className="text-sm text-muted-foreground mb-6">{item.version}</p>
                <Button className="w-full" asChild>
                  <a href="#" className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            ))}
          </section>

          {/* Requirements */}
          <section aria-label="System requirements" className="mb-16">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "2 GB RAM minimum (4 GB recommended)",
                "500 MB free disk space",
                "Internet connection for activation",
                "64-bit operating system",
              ].map((req) => (
                <div key={req} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section aria-label="Call to action" className="text-center bg-primary/5 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-secondary mb-4">Not sure yet?</h2>
            <p className="text-muted-foreground mb-6">
              Learn more about what PLR Organizer Pro can do for your content library.
            </p>
            <Button variant="default" asChild>
              <Link to="/plr-organizer">Learn More →</Link>
            </Button>
          </section>
        </div>
      </div>
    </>
  );
}
