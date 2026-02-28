import { Quote, FolderOpen, DollarSign, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: FolderOpen, value: "47GB", label: "Files Across 3 Drives" },
  { icon: DollarSign, value: "$4,200+", label: "Value Recovered" },
  { icon: Clock, value: "60+ hrs", label: "Time Saved" },
  { icon: TrendingUp, value: "127", label: "Forgotten PLR Packages" },
];

export function CaseStudy() {
  return (
    <section className="py-20 bg-muted" aria-label="Success story">
      <div className="container">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Real Success Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            How Maria Recovered $4,200 in Forgotten PLR
          </h2>
          <p className="text-lg text-muted-foreground">In Just One Weekend</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-3">
                {/* Story section */}
                <article className="lg:col-span-2 p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-red">
                      <span className="text-2xl font-bold text-primary-foreground">M</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary">Maria Santos</h3>
                      <p className="text-muted-foreground">Course Creator & Digital Marketer</p>
                      <p className="text-sm text-muted-foreground">8 years buying PLR content</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-secondary">The Problem:</strong> Maria had been buying PLR products for 8 years. 
                      She had 47GB of content scattered across 3 different hard drives, multiple cloud storage accounts, 
                      and countless folders named things like "New PLR" and "PLR to Review."
                    </p>
                    <p>
                      <strong className="text-secondary">The Breaking Point:</strong> "I bought a $67 course creation PLR pack, 
                      only to discover I had purchased the exact same thing 2 years ago. That was my wake-up call."
                    </p>
                    <p>
                      <strong className="text-secondary">The Solution:</strong> Maria downloaded PLR Organizer Pro on a Friday night. 
                      By Sunday afternoon, her entire PLR library was organized, categorized, and she had a complete inventory 
                      of everything she owned.
                    </p>
                  </div>

                  <blockquote className="mt-6 p-4 bg-accent rounded-lg border-l-4 border-primary">
                    <Quote className="h-6 w-6 text-primary mb-2" />
                    <p className="text-secondary font-medium italic">
                      "I found 127 PLR packages I completely forgot I owned. That's over $4,200 worth of content 
                      that was just sitting there collecting digital dust. PLR Organizer Pro paid for itself 
                      150 times over in the first weekend."
                    </p>
                    <footer className="text-sm text-muted-foreground mt-2">— Maria S., Dallas, TX</footer>
                  </blockquote>
                </article>

                {/* Stats sidebar */}
                <aside className="bg-secondary p-8" aria-label="Maria's results">
                  <h4 className="text-lg font-bold text-secondary-foreground mb-6 text-center">
                    Maria's Results
                  </h4>
                  <dl className="space-y-6">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <dd className="text-2xl font-extrabold text-secondary-foreground">
                          {stat.value}
                        </dd>
                        <dt className="text-sm text-secondary-foreground/70">{stat.label}</dt>
                      </div>
                    ))}
                  </dl>
                </aside>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}