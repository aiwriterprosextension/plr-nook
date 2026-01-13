import { Link } from "react-router-dom";
import { Check, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WARRIORPLUS_LINK = "https://warriorplus.com/plr-organizer-pro-placeholder";

const templatePacks = [
  { name: "50+ Sales Page Templates", desc: "High-converting designs for any niche" },
  { name: "30+ Thank You Page Templates", desc: "Professional download and delivery pages" },
  { name: "100+ Email Swipe Files", desc: "Ready-to-use email sequences" },
  { name: "25+ Squeeze Page Templates", desc: "Lead capture pages that convert" },
  { name: "Graphics Pack", desc: "Buttons, headers, and graphics" },
];

export default function FunnelOTO2() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-bold text-lg mb-2">One More Thing...</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
              Want <span className="text-primary">Done-For-You</span> Templates?
            </h1>
            <p className="text-lg text-muted-foreground">
              Skip the design work. Get professional templates ready to customize and use.
            </p>
          </div>

          {/* Template Packs */}
          <Card className="border-2 border-primary shadow-red mb-10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">Templates Pack Includes:</h2>
              </div>
              <div className="space-y-4">
                {templatePacks.map((pack, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">{pack.name}</span>
                      <p className="text-sm text-muted-foreground">{pack.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price */}
          <div className="text-center mb-10">
            <p className="text-muted-foreground mb-2">Complete Templates Pack</p>
            <p className="text-5xl font-extrabold text-primary mb-4">$47</p>
            <p className="text-sm text-muted-foreground">One-time payment. Lifetime access.</p>
          </div>

          {/* CTAs */}
          <div className="space-y-4 text-center">
            <a href={WARRIORPLUS_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="funnelBuy" size="xl" className="w-full max-w-md px-8 py-6">
                ADD TEMPLATES - $47
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/funnel/oto2-ds">
              <Button variant="funnelSkip" className="text-sm">
                No thanks, I don't need templates
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-6 bg-muted">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PLR Organizer Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
