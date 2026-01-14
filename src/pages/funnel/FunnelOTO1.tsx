import { Link } from "react-router-dom";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WARRIORPLUS_LINK = "https://warriorplus.com/plr-organizer-pro-placeholder";

const proFeatures = [
  "Advanced Content Transformer with AI rewriting & plagiarism detection",
  "Pro HTML Editor with drag-and-drop",
  "Bulk Rebranding Tool for images & PDFs",
  "Priority Customer Support",
  "Commercial Developer License",
  "Early Access to New Features",
];

export default function FunnelOTO1() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-lg mb-2">WAIT! Your Order Is Not Complete...</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
              Upgrade to PLR Organizer <span className="text-primary">PRO</span> and Unlock Power Features
            </h1>
            <p className="text-lg text-muted-foreground">
              Get the advanced tools that serious marketers need to maximize their PLR investment.
            </p>
          </div>

          {/* Features */}
          <Card className="border-2 border-primary shadow-red mb-10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">PRO Features Include:</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {proFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price */}
          <div className="text-center mb-10">
            <p className="text-muted-foreground mb-2">One-Time Upgrade Fee</p>
            <p className="text-5xl font-extrabold text-primary mb-4">$37</p>
            <p className="text-sm text-muted-foreground">No recurring fees. Lifetime access.</p>
          </div>

          {/* CTAs */}
          <div className="space-y-4 text-center">
            <a href={WARRIORPLUS_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="funnelBuy" size="xl" className="w-full max-w-md px-8 py-6">
                UPGRADE TO PRO NOW - $37
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/funnel/oto1-ds">
              <Button variant="funnelSkip" className="text-sm">
                No thanks, I'll stick with the basic version
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 bg-muted">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PLR Organizer Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
