import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WARRIORPLUS_LINK = "https://warriorplus.com/plr-organizer-pro-placeholder";

const liteFeatures = [
  "20 Sales Page Templates",
  "10 Thank You Page Templates",
  "30 Email Swipe Files",
  "Basic Graphics Pack",
];

export default function FunnelOTO2DS() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 flex items-center">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
            How About Just the Essentials?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Get our Lite Templates Pack with the most popular templates at a fraction of the price.
          </p>

          <div className="bg-muted rounded-xl p-8 mb-10">
            <p className="text-sm text-muted-foreground mb-4">Lite Pack Includes:</p>
            <div className="space-y-3 mb-6">
              {liteFeatures.map((feature, i) => (
                <div key={i} className="flex items-center justify-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-lg p-6 border-2 border-primary">
              <p className="text-3xl font-extrabold text-primary mb-2">Only $17</p>
              <p className="text-sm text-muted-foreground">Save $30 compared to full pack</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <a href={WARRIORPLUS_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="funnelBuy" size="xl" className="w-full max-w-md px-8 py-6">
                Get Lite Pack - $17
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/funnel/thank-you">
              <Button variant="funnelSkip" className="text-sm">
                No thanks, complete my order
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
