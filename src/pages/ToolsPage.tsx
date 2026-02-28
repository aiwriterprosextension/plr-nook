import { Link } from "react-router-dom";
import { FileKey, Code, Copy, Wand2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";

const tools = [
  {
    name: "License Rights Decoder",
    description: "Automatically reads and interprets license files inside PLR packages. Displays a clear Can / Can't / Maybe checklist so you know exactly what you're allowed to do.",
    icon: FileKey,
    href: "/tools/license-decoder",
    features: [
      "Auto-parses license files from ZIP, RAR, and 7Z archives",
      "Color-coded Can / Can't / Maybe rights checklist",
      "Filter entire library by specific usage rights",
    ],
  },
  {
    name: "Visual HTML Sales Page Editor",
    description: "Open, customize, and export the HTML sales pages bundled inside PLR packages — without writing a single line of code.",
    icon: Code,
    href: "/tools/html-editor",
    features: [
      "Dual-pane editor with live visual preview",
      "Token replacement wizard for instant rebranding",
      "Export standalone HTML or copy to clipboard",
    ],
  },
  {
    name: "Duplicate & Overlap Detector",
    description: "Finds exact duplicates, near-duplicates, and content overlap across your entire PLR library — even when filenames and sellers are different.",
    icon: Copy,
    href: "/tools/duplicate-detector",
    features: [
      "SHA-256 hashing for exact duplicate detection",
      "Near-duplicate scoring with adjustable threshold",
      "Safe delete with undo and space savings report",
    ],
  },
  {
    name: "AI Content Spinner",
    description: "Transforms generic PLR content into unique, SEO-friendly articles that rank in search engines and pass AI detectors.",
    icon: Wand2,
    href: "/tools/content-spinner",
    features: [
      "Uniqueness heatmap highlights what needs rewriting",
      "Manual and AI-assisted rewriting modes",
      "Before/after diff view with per-change revert",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PLR Organizer Pro",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Windows, macOS, Linux",
  "description": "4 powerful built-in tools for managing, customizing, and transforming PLR content.",
  "offers": {
    "@type": "Offer",
    "price": "27.00",
    "priceCurrency": "USD",
  },
};

const ToolsPage = () => {
  return (
    <>
      <SEOHead
        title="PLR Tools - 4 Powerful Built-In Tools"
        description="Discover our suite of 4 specialized PLR tools: License Rights Decoder, Visual HTML Editor, Duplicate Detector, and AI Content Spinner."
        keywords="PLR tools, PLR content management, PLR organizer tools, PLR license decoder, PLR duplicate detector"
        canonicalUrl="https://plr-nook.lovable.app/tools"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              4 Built-In Power Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decode licenses, edit sales pages, eliminate duplicates, and spin content into unique articles — all from one app. Every tool is included with{" "}
              <Link to="/plr-organizer" className="text-primary hover:underline font-medium">PLR Organizer Pro</Link>.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Ready to get started? <Link to="/download" className="text-primary hover:underline font-medium">Download the desktop app</Link> for Windows, Mac &amp; Linux.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16" aria-labelledby="tools-grid">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tools.map((tool) => (
                <Card
                  key={tool.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 flex flex-col"
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl flex items-center justify-center gap-2">
                      <tool.icon className="w-5 h-5 text-primary" />
                      {tool.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <Link to={tool.href} className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                      <Button asChild variant="cta" size="sm">
                        <Link to="/funnel/offer">Use Tool</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your PLR Business?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get access to all 4 tools and start turning PLR content into profitable digital products today.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/funnel/offer">Get Started Now</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;
