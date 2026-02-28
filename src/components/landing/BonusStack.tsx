import { Gift, BookOpen, Target, FileText, Headphones, RefreshCw, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const bonuses = [
  { icon: BookOpen, name: "PLR Profit Playbook", value: "$47", desc: "Step-by-step guide to monetizing your PLR library" },
  { icon: Target, name: "500 Hot Niches List", value: "$27", desc: "Proven niches hungry for PLR content" },
  { icon: FileText, name: "License Rights Cheat Sheet", value: "$17", desc: "Never misunderstand PLR licenses again" },
  { icon: Headphones, name: "Priority Email Support (90 Days)", value: "$97", desc: "Get answers from real humans within 24 hours" },
  { icon: RefreshCw, name: "Free Updates Forever", value: "Priceless", desc: "Every new feature, every improvement, forever" },
];

export function BonusStack() {
  const totalValue = 47 + 27 + 17 + 97;

  return (
    <section className="py-20 bg-background" aria-label="Bonus items included">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/10 text-warning rounded-full mb-4">
            <Gift className="h-5 w-5" />
            <span className="font-bold">Included Bonuses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Get These FREE Bonuses
          </h2>
          <p className="text-lg text-muted-foreground">
            Total Value: <span className="font-bold text-primary">${totalValue}+</span> — Yours FREE
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            {bonuses.map((bonus, i) => (
              <Card key={i} className="border-2 border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <bonus.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          BONUS #{i + 1}
                        </span>
                        <h3 className="font-bold text-secondary">{bonus.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          ({bonus.value} value)
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{bonus.desc}</p>
                    </div>
                    <Check className="h-6 w-6 text-success flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground">
            All bonuses included with every purchase at no additional cost.
          </p>
        </div>
      </div>
    </section>
  );
}