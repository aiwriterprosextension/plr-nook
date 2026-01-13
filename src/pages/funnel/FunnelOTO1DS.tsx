import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WARRIORPLUS_LINK = "https://warriorplus.com/plr-organizer-pro-placeholder";

export default function FunnelOTO1DS() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 flex items-center">
        <div className="container max-w-2xl text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">
            Wait! How About a Payment Plan?
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We understand. Here's a more affordable option to get the PRO features:
          </p>

          <div className="bg-muted rounded-xl p-8 mb-10">
            <p className="text-sm text-muted-foreground mb-2">Choose Your Option:</p>
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border-2 border-primary">
                <p className="text-2xl font-bold text-secondary mb-2">2 Easy Payments of $22</p>
                <p className="text-sm text-muted-foreground">Split your payment and still get full PRO access</p>
              </div>
              <p className="text-muted-foreground font-semibold">OR</p>
              <div className="bg-card rounded-lg p-6 border-2 border-border">
                <p className="text-2xl font-bold text-secondary mb-2">One-Time Discounted: $27</p>
                <p className="text-sm text-muted-foreground">Save $10 off the regular PRO price</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <a href={WARRIORPLUS_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="funnelBuy" size="xl" className="w-full max-w-md px-8 py-6">
                Yes, I'll Take the Discount - $27
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link to="/funnel/oto2">
              <Button variant="funnelSkip" className="text-sm">
                No thanks, continue without PRO
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
