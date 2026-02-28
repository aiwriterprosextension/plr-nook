import { Download, FolderOpen, FileKey, Wrench, Rocket, Check } from "lucide-react";

const milestones = [
  {
    icon: Download,
    time: "Day 1",
    title: "Install and Scan",
    desc: "Install the app and scan your first drive",
    duration: "30 minutes",
    result: "Discover $500-$2,000 in forgotten PLR",
  },
  {
    icon: FolderOpen,
    time: "Week 1",
    title: "Organize by Niche",
    desc: "Let auto-organization categorize everything",
    duration: "Set it and forget it",
    result: "Create your first product from existing PLR",
  },
  {
    icon: FileKey,
    time: "Week 2",
    title: "License Tracking",
    desc: "Set up your license tracking system",
    duration: "15 minutes",
    result: "Avoid duplicate purchase (saves $47+)",
  },
  {
    icon: Wrench,
    time: "Week 4",
    title: "Master All Tools",
    desc: "Learn and use all built-in power tools",
    duration: "At your pace",
    result: "Launch your PLR-based business",
  },
  {
    icon: Rocket,
    time: "Month 2+",
    title: "Peak Efficiency",
    desc: "Operating at maximum productivity",
    duration: "Ongoing",
    results: ["5+ hours saved weekly = $1,000/month value", "Your PLR library pays for itself every single month"],
  },
];

export function TransformationTimeline() {
  return (
    <section className="py-20 bg-background" aria-label="Your first 30 days">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Your First 30 Days With PLR Organizer Pro
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's exactly what happens when you get started today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:hidden" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => {
                const results = 'results' in milestone ? milestone.results : [milestone.result];
                return (
                  <div key={i} className="relative">
                    {/* Desktop layout */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                      {i % 2 === 0 ? (
                        <>
                          <div className="text-right pr-12">
                            <span className="text-sm font-bold text-primary uppercase tracking-wide">
                              <time>{milestone.time}</time>
                            </span>
                            <h3 className="text-xl font-bold text-secondary mt-1">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground mt-2">{milestone.desc}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              ⏱️ {milestone.duration}
                            </p>
                          </div>
                          <div className="pl-12">
                            <div className="bg-accent border-2 border-primary/20 rounded-lg p-4 space-y-2">
                              {results.map((r, j) => (
                                <div key={j} className="flex items-center gap-2 text-primary font-semibold">
                                  <Check className="h-5 w-5 shrink-0" />
                                  <span>{r}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-right pr-12">
                            <div className="bg-accent border-2 border-primary/20 rounded-lg p-4 inline-block space-y-2">
                              {results.map((r, j) => (
                                <div key={j} className="flex items-center gap-2 text-primary font-semibold">
                                  <Check className="h-5 w-5 shrink-0" />
                                  <span>{r}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="pl-12">
                            <span className="text-sm font-bold text-primary uppercase tracking-wide">
                              <time>{milestone.time}</time>
                            </span>
                            <h3 className="text-xl font-bold text-secondary mt-1">
                              {milestone.title}
                            </h3>
                            <p className="text-muted-foreground mt-2">{milestone.desc}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              ⏱️ {milestone.duration}
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-red z-10">
                      <milestone.icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    {/* Mobile layout */}
                    <div className="md:hidden pl-20">
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">
                        <time>{milestone.time}</time>
                      </span>
                      <h3 className="text-lg font-bold text-secondary mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.desc}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        ⏱️ {milestone.duration}
                      </p>
                      <div className="mt-3 bg-accent border-2 border-primary/20 rounded-lg p-3 space-y-2">
                        {results.map((r, j) => (
                          <div key={j} className="flex items-center gap-2 text-primary font-semibold text-sm">
                            <Check className="h-4 w-4 shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}