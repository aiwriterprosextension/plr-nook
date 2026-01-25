import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import founderPhoto from "@/assets/founder-photo.jpg";

const values = [
  {
    icon: Target,
    title: "Solving Real Problems",
    description: "Every feature we build comes from real frustrations we've experienced as PLR users ourselves."
  },
  {
    icon: Heart,
    title: "User-First Design",
    description: "We believe powerful software should be simple to use. No technical knowledge required."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your files never leave your computer. We have zero access to your content or data."
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our roadmap is shaped by user feedback. Your voice directly influences what we build next."
  }
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About PLR Organizer Pro | Our Mission & Story"
        description="Learn about PLR Organizer Pro and the mission behind creating the ultimate PLR organization tool. Meet the creator and discover why we built this solution."
        keywords="PLR Organizer Pro, about us, PLR tools, digital content organization, John Lawrence"
      />

      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-accent text-primary text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6">
                Built by PLR Users, <span className="text-gradient-primary">For PLR Users</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                PLR Organizer Pro was born from personal frustration and a desire to solve a problem 
                that every serious PLR buyer faces: chaos.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                  Our Mission
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Photo Column */}
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={founderPhoto}
                      alt="John Lawrence - Creator of PLR Organizer Pro"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6 rounded-b-2xl">
                    <p className="text-primary-foreground font-bold text-xl">John Lawrence</p>
                    <p className="text-primary-foreground/80 text-sm">Creator, PLR Organizer Pro</p>
                  </div>
                </div>

                {/* Story Column */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                    Here's Why I Built This
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg font-medium text-foreground">
                      I know the struggle because I lived it.
                    </p>
                    
                    <p>
                      After years of buying PLR products, my computer was a mess. Thousands of files 
                      scattered across dozens of folders. Duplicates and triplicates I didn't even 
                      know I had. Every time I needed content, I'd spend hours searching—or worse, 
                      buy something I already owned.
                    </p>
                    
                    <p className="font-semibold text-foreground">
                      Sound familiar?
                    </p>
                    
                    <p>
                      I built PLR Organizer Pro to solve my own problem. One app that scans everything, 
                      finds every PLR package, and organizes them by niche and subniche. No more chaos. 
                      No more wasted money. No more forgotten content collecting digital dust.
                    </p>
                    
                    <p>
                      Now I spend minutes finding exactly what I need instead of hours searching. 
                      And I haven't accidentally repurchased a single PLR package since.
                    </p>
                    
                    <p className="text-lg font-medium text-foreground">
                      This tool changed how I work—and I know it can do the same for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at PLR Organizer Pro
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <Card key={i} className="text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-red">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
                Our Journey
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <p>
                  PLR Organizer Pro started as a personal project in 2022. After spending countless 
                  hours trying to organize a library of over 5,000 PLR products accumulated over 8 years, 
                  John realized there had to be a better way.
                </p>
                
                <p>
                  What began as a simple file scanner evolved into a comprehensive PLR management system. 
                  Early beta testers—fellow PLR enthusiasts who shared the same frustrations—helped shape 
                  the product into what it is today.
                </p>
                
                <p>
                  Today, PLR Organizer Pro helps thousands of content creators, marketers, and 
                  entrepreneurs take control of their digital assets. We've helped users organize 
                  over 2.3 million files and rediscover hundreds of thousands of dollars worth of 
                  forgotten PLR content.
                </p>
                
                <p className="font-medium text-foreground">
                  But we're just getting started. Our mission is to make PLR content organization 
                  effortless for everyone—so you can spend less time searching and more time creating.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your PLR Library?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Join thousands of users who've taken control of their digital assets.
              </p>
              <Link to="/funnel/offer">
                <Button variant="warning" size="xl" className="text-warning-foreground">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
