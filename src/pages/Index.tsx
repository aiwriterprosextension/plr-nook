import { Link } from "react-router-dom";
import { 
  Scan, FolderOpen, FileKey, Eye, RotateCw, Search, Code, Palette,
  Clock, DollarSign, AlertTriangle, Archive, Check, ArrowRight,
  Users, ShoppingCart, Megaphone, GraduationCap, Play, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const painPoints = [
  { icon: Clock, title: "Wasted Time Searching", desc: "Hours lost digging through folders to find that one PLR package you know you bought." },
  { icon: DollarSign, title: "Duplicate Purchases", desc: "Buying the same PLR content twice because you forgot you already owned it." },
  { icon: AlertTriangle, title: "License Confusion", desc: "Unsure which PLR has resell rights, personal use only, or can be modified." },
  { icon: Archive, title: "Unused Content", desc: "Thousands of dollars worth of PLR sitting untouched on your hard drive." },
];

const features = [
  { icon: Scan, title: "Smart PLR Detection", desc: "AI-powered scanning identifies PLR content across your entire computer automatically." },
  { icon: FolderOpen, title: "Auto-Organization", desc: "Automatically categorize PLR by niche, type, and license—no manual work required." },
  { icon: FileKey, title: "License Tracking", desc: "Never violate terms again. Track exactly what rights each PLR package includes." },
  { icon: Eye, title: "Virtual Views", desc: "Preview any PLR content without extracting files. See what you have instantly." },
];

const tools = [
  { icon: Scan, name: "PLR Scanner", desc: "Deep scan technology finds every PLR file on your system." },
  { icon: RotateCw, name: "Content Spinner", desc: "Transform PLR into unique content that passes plagiarism checks." },
  { icon: Search, name: "SEO Analyzer", desc: "Optimize PLR content for search engines before publishing." },
  { icon: Code, name: "HTML Editor", desc: "Edit sales pages and squeeze pages directly in the app." },
  { icon: FileKey, name: "License Tracker", desc: "Database of your rights for each PLR package." },
  { icon: Palette, name: "Rebranding Tool", desc: "Bulk rename, resize, and customize PLR assets." },
];

const targetAudience = [
  { icon: ShoppingCart, title: "Product Creators", desc: "Turn PLR into premium products that sell." },
  { icon: Megaphone, title: "Digital Marketers", desc: "Create lead magnets and content at scale." },
  { icon: Users, title: "Resellers", desc: "Manage resell rights and maximize ROI." },
  { icon: GraduationCap, title: "Coaches & Consultants", desc: "Build course content from PLR foundations." },
];

const testimonials = [
  { name: "Sarah M.", role: "Course Creator", text: "I found over $3,000 worth of PLR I forgot I owned. This app paid for itself 100x over.", rating: 5 },
  { name: "Mike T.", role: "Affiliate Marketer", text: "Organizing 10 years of PLR would have taken months. PLR Organizer did it in 2 hours.", rating: 5 },
  { name: "Jennifer K.", role: "Digital Product Seller", text: "The license tracking feature alone is worth the price. No more accidental violations.", rating: 5 },
  { name: "David R.", role: "Content Creator", text: "Finally, I can actually USE the PLR I've been hoarding. Game changer.", rating: 5 },
];

const faqs = [
  { q: "What operating systems does PLR Organizer Pro support?", a: "PLR Organizer Pro works on Windows (10+), macOS (10.14+), and Linux (Ubuntu 18.04+)." },
  { q: "Is my data secure?", a: "Absolutely. PLR Organizer Pro runs entirely on your local machine. Your files never leave your computer." },
  { q: "How does the PLR detection work?", a: "Our AI scans file names, folder structures, readme files, and license documents to identify PLR content accurately." },
  { q: "Can I organize PLR on external drives?", a: "Yes! You can scan any drive connected to your computer, including external HDDs, SSDs, and network drives." },
  { q: "Is there a money-back guarantee?", a: "Yes, we offer a 7-day no-questions-asked refund policy. Try it risk-free." },
];

const comparisonData = [
  { feature: "Automatic PLR Detection", us: true, manual: false, spreadsheet: false },
  { feature: "Auto-Organization by Niche", us: true, manual: false, spreadsheet: false },
  { feature: "License Tracking", us: true, manual: false, spreadsheet: true },
  { feature: "File Preview", us: true, manual: true, spreadsheet: false },
  { feature: "Duplicate Detection", us: true, manual: false, spreadsheet: false },
  { feature: "Time to Organize 1000 Files", us: "Minutes", manual: "Days", spreadsheet: "Hours" },
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6 animate-fade-in">
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-primary">#1 PLR Content Organizer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6 animate-fade-in">
              Stop Drowning in Disorganized PLR Content.{" "}
              <span className="text-gradient-primary">Start Profiting.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              The only desktop app that scans your entire computer, automatically organizes PLR by niche, 
              tracks licenses, and eliminates duplicate purchases forever.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
              <Link to="/funnel/offer">
                <Button variant="cta" size="xl">
                  Get PLR Organizer Pro
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outlineGhost" size="xl">
                <Play className="h-5 w-5" />
                Watch Demo Video
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm animate-fade-in">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">10,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">Save 5+ Hours/Week</span>
              </div>
            </div>
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
              </div>
              <div className="aspect-video bg-gradient-to-br from-muted to-background flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <FolderOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most PLR buyers face these frustrating problems daily
            </p>
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

      {/* Solution Overview */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              One App to Organize Your Entire PLR Empire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop wasting time and money. Take control of your digital assets.
            </p>
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
        </div>
      </section>

      {/* Feature Breakdown Tabs */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Powerful Features at Your Fingertips
            </h2>
          </div>
          
          <Tabs defaultValue="scanner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="scanner">Scanner</TabsTrigger>
              <TabsTrigger value="organize">Auto-Org</TabsTrigger>
              <TabsTrigger value="views">Virtual Views</TabsTrigger>
              <TabsTrigger value="tools">Built-in Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="scanner" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-4">Smart PLR Scanner</h3>
                      <p className="text-muted-foreground mb-4">
                        Our AI-powered scanner analyzes your entire computer to find every PLR package you own. 
                        It reads file names, folder structures, readme files, and license documents to accurately 
                        identify and catalog your content.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Scans local and external drives</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Detects nested ZIP files</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Identifies duplicate purchases</li>
                      </ul>
                    </div>
                    <div className="w-full md:w-80 h-48 bg-muted rounded-lg flex items-center justify-center">
                      <Scan className="h-20 w-20 text-primary/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="organize" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-4">Automatic Organization</h3>
                      <p className="text-muted-foreground mb-4">
                        Let the app do the heavy lifting. PLR content is automatically sorted into logical 
                        categories based on niche, content type, and license restrictions.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> 50+ niche categories</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Smart tagging system</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Custom folder structures</li>
                      </ul>
                    </div>
                    <div className="w-full md:w-80 h-48 bg-muted rounded-lg flex items-center justify-center">
                      <FolderOpen className="h-20 w-20 text-primary/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="views" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-4">Virtual Views System</h3>
                      <p className="text-muted-foreground mb-4">
                        Preview any PLR package without extracting a single file. View PDFs, images, videos, 
                        and documents right within the app.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Instant file previews</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> ZIP file navigation</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Quick content assessment</li>
                      </ul>
                    </div>
                    <div className="w-full md:w-80 h-48 bg-muted rounded-lg flex items-center justify-center">
                      <Eye className="h-20 w-20 text-primary/30" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">7 Built-in Power Tools</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.map((tool, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <tool.icon className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-sm">{tool.name}</h4>
                          <p className="text-xs text-muted-foreground">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Get Organized in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Download & Install", desc: "Get the app for Windows, Mac, or Linux. Installation takes under a minute." },
              { step: 2, title: "Scan Your Computer", desc: "Click 'Scan' and let our AI find every PLR package on your drives." },
              { step: 3, title: "Auto-Organize", desc: "Watch as your entire PLR library gets organized automatically by niche and type." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-red">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Perfect For
            </h2>
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

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Why PLR Organizer Pro?
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-secondary text-secondary-foreground">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">PLR Organizer Pro</th>
                  <th className="text-center p-4">Manual Folders</th>
                  <th className="text-center p-4">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="p-4 font-medium">{row.feature}</td>
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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What Our Users Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-warning fill-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-secondary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Get Lifetime Access
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              One-time payment. No subscriptions. Unlimited updates forever.
            </p>
            <Link to="/funnel/offer">
              <Button variant="cta" size="xl">
                See Launch Pricing
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Organize Your PLR Empire?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of marketers who finally took control of their digital assets.
            </p>
            <Link to="/funnel/offer">
              <Button variant="warning" size="xl" className="text-warning-foreground">
                Get PLR Organizer Pro Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
