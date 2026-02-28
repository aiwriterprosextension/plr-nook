import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Shield, Users, FolderOpen, DollarSign, Clock, Check, Rocket, Lightbulb, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import founderPhoto from "@/assets/founder-photo.jpg";

const values = [
  { icon: Wrench, title: "Solving Real Problems", description: "Every feature we build comes from real frustrations we've experienced as PLR users ourselves." },
  { icon: Heart, title: "User-First Design", description: "We believe powerful software should be simple to use. No technical knowledge required." },
  { icon: Shield, title: "Privacy & Security", description: "Your files never leave your computer. We have zero access to your content or data." },
  { icon: Users, title: "Community Driven", description: "Our roadmap is shaped by user feedback. Your voice directly influences what we build next." },
];

const journey = [
  { year: "2025", title: "The Problem", desc: "John spends countless hours trying to organise a library of over 5,000 PLR products accumulated over 8 years. The frustration reaches a breaking point: there has to be a better way." },
  { year: "2025", title: "The Build", desc: "PLR Organizer Pro starts as a personal project — a simple file scanner. Early beta testers, fellow PLR enthusiasts who shared the same frustrations, help shape the product into a comprehensive PLR management system." },
  { year: "Today", title: "The Community", desc: "PLR Organizer Pro helps thousands of content creators, marketers, and entrepreneurs take control of their digital assets. Over 2.3 million files organised. Hundreds of thousands of dollars worth of forgotten PLR content rediscovered." },
  { year: "What's Next", title: "The Mission", desc: "Our mission is to make PLR content organisation effortless for everyone — so you can spend less time searching and more time creating. We're just getting started." },
];

const stats = [
  { icon: FolderOpen, value: "2.3M+", label: "Files Organised" },
  { icon: DollarSign, value: "$847K+", label: "PLR Rediscovered" },
  { icon: Clock, value: "156K+", label: "Hours Saved" },
  { icon: Users, value: "10,000+", label: "Happy Users" },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Lawrence",
  jobTitle: "Creator, PLR Organizer Pro",
  worksFor: { "@type": "Organization", name: "PLR Organizer Pro" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PLR Organizer Pro",
  foundingDate: "2025",
  founder: { "@type": "Person", name: "John Lawrence" },
  description: "PLR Organizer Pro was built by John Lawrence after years of personal frustration managing thousands of PLR files. Learn the story behind the app, our founding principles, and the mission driving everything we build.",
};

const combinedJsonLd = [personJsonLd, orgJsonLd];

export default function About() {
  return (
    <>
      <SEOHead
        title="About PLR Organizer Pro | Built by PLR Users, For PLR Users"
        description="PLR Organizer Pro was built by John Lawrence after years of personal frustration managing thousands of PLR files. Learn the story behind the app, our founding principles, and the mission driving everything we build."
        keywords="PLR Organizer Pro, about us, PLR tools, digital content organization, John Lawrence"
        canonicalUrl="https://plrorganizerpro.com/about"
        jsonLd={combinedJsonLd}
        robots="index, follow"
        author="John Lawrence"
        ogType="website"
      />

      <main className="flex flex-col scroll-smooth" role="main">

        {/* ══════════ HERO ══════════ */}
        <header className="py-20 bg-gradient-hero" aria-label="Hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                Built by PLR Users, <span className="text-gradient-primary">For PLR Users</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                PLR Organizer Pro was born from personal frustration and a desire to solve a problem 
                that every serious PLR buyer faces: chaos. We know the struggle because we lived it — and we built the tool we wished had existed.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
                  <FolderOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-secondary">2.3M+ Files Organised</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-secondary">10,000+ Happy Users</span>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ══════════ FOUNDER ══════════ */}
        <section className="py-20 bg-muted" aria-label="Founder story">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <article itemScope itemType="https://schema.org/Person">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo column — fixed width */}
                  <div className="flex flex-col items-center md:items-start shrink-0" style={{ width: "180px" }}>
                    <img
                      src={founderPhoto}
                      alt="John Lawrence — Creator of PLR Organizer Pro"
                      className="w-40 h-40 rounded-full object-cover shadow-lg"
                      loading="lazy"
                      itemProp="image"
                    />
                    <p className="font-bold text-secondary mt-4 text-center md:text-left" itemProp="name">John Lawrence</p>
                    <p className="text-sm text-muted-foreground text-center md:text-left" itemProp="jobTitle">Creator, PLR Organizer Pro</p>
                  </div>

                  {/* Story column */}
                  <div className="flex-1 space-y-5">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                      Here's Why I Built This
                    </h2>
                    
                    <p className="text-lg font-medium text-foreground">
                      I know the struggle because I lived it.
                    </p>
                    
                    <p className="text-muted-foreground">
                      After years of buying PLR products, my computer was a mess. Thousands of files 
                      scattered across dozens of folders. Duplicates and triplicates I didn't even 
                      know I had. Every time I needed content, I'd spend hours searching—or worse, 
                      buy something I already owned.
                    </p>
                    
                    <p className="text-foreground italic text-lg">
                      Sound familiar?
                    </p>
                    
                    <p className="text-muted-foreground">
                      I built PLR Organizer Pro to solve my own problem. One app that scans everything, 
                      finds every PLR package, and organizes them by niche and subniche. No more chaos. 
                      No more wasted money. No more forgotten content collecting digital dust.
                    </p>
                    
                    <p className="text-muted-foreground">
                      Now I spend minutes finding exactly what I need instead of hours searching. 
                      And I haven't accidentally repurchased a single PLR package since.
                    </p>
                    
                    <p className="text-lg font-medium text-foreground">
                      This tool changed how I work—and I know it can do the same for you.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ══════════ VALUES ══════════ */}
        <section className="py-20 bg-background" aria-label="Our values">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What We Stand For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at PLR Organizer Pro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, i) => (
                <Card key={i} className="border-border" aria-label={value.title}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ JOURNEY TIMELINE ══════════ */}
        <section className="py-20 bg-secondary text-white" aria-label="Our journey">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Our Journey</h2>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20" />

              <div className="space-y-10">
                {journey.map((node, i) => (
                  <div key={i} className="relative pl-20">
                    {/* Node dot */}
                    <div className="absolute left-8 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                      <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <span className="text-sm font-bold text-primary uppercase tracking-wide">
                      <time>{node.year}</time> — {node.title}
                    </span>
                    <p className="text-gray-300 mt-2 leading-relaxed">{node.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ STATS BAR ══════════ */}
        <section className="bg-secondary/90 py-6 border-t border-white/10" aria-label="Impact statistics">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <stat.icon className="h-6 w-6 text-primary" />
                  <span className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">{stat.value}</span>
                  <span className="text-sm text-secondary-foreground/70">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="py-20 bg-primary text-primary-foreground" aria-label="Call to action">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your PLR Library?</h2>
              <p className="text-lg opacity-90 mb-8">
                Join thousands of users who've taken control of their digital assets.
              </p>
              <Link to="/plr-organizer">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-10 py-6 gap-2">
                  Get PLR Organizer Pro <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mt-8">
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> 7-Day Money-Back Guarantee</span>
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> Works on Windows, Mac & Linux</span>
                <span className="flex items-center gap-1.5"><Check className="h-4 w-4" /> One-Time Payment</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}