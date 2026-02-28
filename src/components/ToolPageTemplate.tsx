import { Link } from "react-router-dom";
import { LucideIcon, Check, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEOHead } from "@/components/SEOHead";

interface ToolFeature {
  title: string;
  description: string;
}

interface ToolStep {
  step: number;
  title: string;
  description: string;
}

interface ToolFAQ {
  question: string;
  answer: string;
}

interface ToolPageTemplateProps {
  // SEO Props
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  canonicalPath: string;
  
  // Page Content
  icon: LucideIcon;
  toolName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  
  // Problem/Solution
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  
  // Features
  features: ToolFeature[];
  
  // How it works
  steps: ToolStep[];
  
  // Technical specs
  techSpecs: string[];
  
  // FAQs
  faqs: ToolFAQ[];
}

export function ToolPageTemplate({
  seoTitle,
  seoDescription,
  seoKeywords,
  canonicalPath,
  icon: Icon,
  toolName,
  tagline,
  headline,
  subheadline,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
  features,
  steps,
  techSpecs,
  faqs,
}: ToolPageTemplateProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows, macOS, Linux",
    "description": seoDescription,
    "offers": {
      "@type": "Offer",
      "price": "27.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={`https://plr-nook.lovable.app${canonicalPath}`}
        jsonLd={jsonLd}
      />
      
      <article className="flex flex-col">
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 mb-6">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">{tagline}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                {headline}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/funnel/offer">
                  <Button variant="cta" size="xl">
                    Get {toolName} Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outlineGhost" size="xl">
                  <Play className="h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Problem / Solution Section */}
        <section className="py-16 bg-background" aria-labelledby="problem-solution">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                <h2 id="problem-section" className="text-2xl font-bold text-destructive mb-4">
                  {problemTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {problemDescription}
                </p>
              </div>
              <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                <h2 id="solution-section" className="text-2xl font-bold text-success mb-4">
                  {solutionTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {solutionDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted" aria-labelledby="features-heading">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Powerful {toolName} Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to maximize your PLR content productivity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <Card key={i} className="bg-card border-0 shadow-md hover:shadow-lg transition-shadow">
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

        {/* How It Works Section */}
        <section className="py-16 bg-background" aria-labelledby="how-it-works">
          <div className="container">
            <div className="text-center mb-12">
              <h2 id="how-it-works" className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                How {toolName} Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our simple 3-step process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-red">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-muted" aria-labelledby="tech-specs">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 id="tech-specs" className="text-3xl font-bold text-secondary text-center mb-8">
                Technical Specifications
              </h2>
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background" aria-labelledby="faq-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 id="faq-heading" className="text-3xl font-bold text-secondary text-center mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg px-6 border">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* FAQ Schema */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-primary-foreground" aria-labelledby="cta-heading">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Use {toolName}?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Get instant access to {toolName} and all 3 other powerful tools included with PLR Organizer Pro.
              </p>
              <Link to="/funnel/offer">
                <Button variant="warning" size="xl" className="text-warning-foreground">
                  Get All 4 Tools for Just $27
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
