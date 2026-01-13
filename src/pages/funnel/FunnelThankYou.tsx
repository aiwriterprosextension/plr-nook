import { Link } from "react-router-dom";
import { CheckCircle, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FunnelThankYou() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 py-16 flex items-center">
        <div className="container max-w-2xl text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Thank You For Your Order!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your purchase of PLR Organizer Pro is complete. You're one step away from 
            organizing your entire PLR library.
          </p>

          {/* Order Summary */}
          <Card className="border-2 border-success/30 mb-10">
            <CardContent className="p-6">
              <h2 className="font-bold text-lg text-secondary mb-4">Order Summary</h2>
              <div className="space-y-3 text-left">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>PLR Organizer Pro</span>
                  <span className="font-semibold">$27.00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">$27.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Step */}
          <div className="bg-muted rounded-xl p-8 mb-10">
            <Download className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold text-secondary mb-2">
              Next Step: Create Your Account
            </h2>
            <p className="text-muted-foreground mb-6">
              Click the button below to create your account and access the download area.
            </p>
            <Link to="/auth?source=warriorplus">
              <Button variant="cta" size="xl">
                ACCESS DOWNLOAD AREA
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to your email address.
            <br />
            If you have any questions, contact support@plrorganizerpro.com
          </p>
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
