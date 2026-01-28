import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, Shield, Clock, ArrowRight, Play, Star, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WARRIORPLUS_LINK = "https://warriorplus.com/plr-organizer-pro-placeholder";

const valueStack = [
  { item: "PLR Organizer Pro Desktop App", value: "$197" },
  { item: "Smart PLR Detection Engine", value: "$97" },
  { item: "Auto-Niche Organization System", value: "$67" },
  { item: "Virtual Views Preview System", value: "$47" },
  { item: "4 Built-in Power Tools", value: "$97" },
  { item: "Lifetime Updates", value: "$97" },
];

const features = [
  "Scan your entire computer for PLR in minutes",
  "Automatically organize by niche and subniche",
  "Track licenses for every PLR package",
  "Preview files without extracting",
  "Detect duplicate purchases instantly",
  "4 built-in tools: Scanner, Content Transformer, HTML Editor & License Tracker",
  "Works on Windows, Mac & Linux",
  "No monthly fees – lifetime access",
];

const faqs = [
  { q: "Is this a one-time payment?", a: "Yes! You pay once and get lifetime access to PLR Organizer Pro, including all future updates." },
  { q: "Will this work on my computer?", a: "Yes! PLR Organizer Pro works on Windows 10+, macOS 10.14+, and most Linux distributions." },
  { q: "How long does the discount last?", a: "This launch special pricing is only available during our launch period. After that, the price increases to the regular $97." },
  { q: "What if it doesn't work for me?", a: "No problem! We offer a 7-day money-back guarantee. If you're not satisfied, just email us for a full refund." },
];

export default function FunnelOffer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalValue = valueStack.reduce((sum, item) => sum + parseInt(item.value.replace("$", "")), 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Urgency Bar */}
      <div className="sticky top-0 z-50 bg-gradient-primary text-primary-foreground py-3 animate-countdown">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-bold">LAUNCH SPECIAL: 70% OFF</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Ends in:</span>
            <div className="flex gap-2 font-mono font-bold">
              <span className="bg-secondary px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-secondary px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span>:</span>
              <span className="bg-secondary px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
              Finally! Organize Your Entire PLR Library in <span className="text-primary">Minutes</span>... Not Months.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The Only Desktop App That Scans Your Computer, Finds Every PLR Package, 
              and Automatically Organizes Them by Niche.
            </p>
          </div>

          {/* VSL Placeholder */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center shadow-2xl">
              <Button variant="ghost" size="icon" className="w-20 h-20 rounded-full bg-primary/20 hover:bg-primary/30">
                <Play className="h-10 w-10 text-primary-foreground" />
              </Button>
            </div>
          </div>

          {/* Buy Button */}
          <div className="text-center mb-16">
            <Link to="/funnel/oto1">
              <Button variant="funnelBuy" size="xl" className="px-12 py-8 text-xl">
                YES! Give Me Instant Access - Only $27
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 inline mr-1" />
              Secure checkout powered by WarriorPlus
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-destructive mb-6">The Problem...</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You've invested hundreds—maybe thousands—of dollars in PLR content over the years.</p>
                <p>But right now, most of it sits buried in random folders across your hard drive. Forgotten. Unused. Worthless.</p>
                <p>Every time you need content, you spend hours searching... or worse, you buy ANOTHER PLR package because you forgot you already own it.</p>
                <p className="font-semibold text-foreground">Sound familiar?</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-success mb-6">The Solution...</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>PLR Organizer Pro scans your entire computer and automatically finds every PLR package you own.</p>
                <p>Then it organizes everything by niche and subniche—so you can finally USE what you paid for. Plus, powerful virtual views let you filter by content type, license rights, and more without moving a single file.</p>
                <p>No more searching. No more duplicate purchases. No more wasted money.</p>
                <p className="font-semibold text-foreground">Just click, scan, and organize.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary text-center mb-10">
            Everything You Get Today...
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-secondary text-center mb-10">
            Here's What You're Getting...
          </h2>
          <Card className="border-2 border-primary shadow-red">
            <CardContent className="p-8">
              <div className="space-y-4">
                {valueStack.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                    <span className="font-medium">{item.item}</span>
                    <span className="text-muted-foreground line-through">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t-2 border-primary">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-secondary">Total Value:</span>
                  <span className="text-2xl font-bold text-muted-foreground line-through">${totalValue}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-secondary">Today's Price:</span>
                  <span className="text-4xl font-extrabold text-primary">$27</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Buy Button */}
          <div className="text-center mt-10">
            <Link to="/funnel/oto1">
              <Button variant="funnelBuy" size="xl" className="px-12 py-8 text-xl">
                Get Instant Access Now - $27
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-background">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/10 mb-6">
            <Shield className="h-12 w-12 text-success" />
          </div>
          <h2 className="text-2xl font-bold text-secondary mb-4">
            7-Day Money-Back Guarantee
          </h2>
          <p className="text-muted-foreground">
            Try PLR Organizer Pro risk-free for 7 full days. If you're not completely satisfied 
            with how it organizes your PLR library, just email us and we'll refund every penny. 
            No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-secondary text-center mb-10">
            Frequently Asked Questions
          </h2>
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
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't Let Another Day of Disorganization Cost You Money
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Get PLR Organizer Pro now and finally take control of your digital assets.
          </p>
          <Link to="/funnel/oto1">
            <Button variant="warning" size="xl" className="text-warning-foreground px-12 py-8 text-xl">
              Yes! I Want PLR Organizer Pro - $27
              <ArrowRight className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PLR Organizer Pro. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
            <Link to="/refund" className="hover:text-primary">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
