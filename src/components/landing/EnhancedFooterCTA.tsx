import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Rocket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformBadges } from "./PlatformCTA";

export function EnhancedFooterCTA() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your PLR Library Is Waiting to Be Unlocked
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Right now, you have thousands of dollars in PLR content collecting digital dust. 
            In 10 minutes, you could have it all organized, categorized, and ready to profit from.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto text-left">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="font-bold text-lg mb-2">Option 1:</p>
              <p className="opacity-90">Keep wasting 5+ hours per week searching through folders</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm border-2 border-white/30">
              <p className="font-bold text-lg mb-2">Option 2:</p>
              <p className="opacity-90">Invest $27 once and save 260+ hours this year</p>
            </div>
          </div>

          <Link to="/funnel/offer">
            <Button variant="warning" size="xl" className="text-warning-foreground mb-6">
              <Rocket className="h-5 w-5" />
              Get PLR Organizer Pro — $27
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              <span>Instant download</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              <span>Works on Windows, Mac & Linux</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-4 w-4" />
              <span>7-day guarantee</span>
            </div>
          </div>

          <PlatformBadges />

          <div className="mt-8 inline-flex items-center gap-2 text-sm opacity-80">
            <Clock className="h-4 w-4" />
            <span>Launch price ends in: </span>
            <span className="font-mono font-bold">
              {String(timeLeft.hours).padStart(2, "0")}:
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
