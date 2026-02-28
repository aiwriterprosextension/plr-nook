import { Link } from "react-router-dom";
import { FileKey, Code, Copy, Wand2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const allTools = [
  {
    name: "License Rights Decoder",
    desc: "Auto-parse license files and see your Can / Can't / Maybe rights instantly.",
    icon: FileKey,
    href: "/tools/license-decoder",
  },
  {
    name: "Visual HTML Sales Page Editor",
    desc: "Edit and rebrand PLR sales pages visually — no coding required.",
    icon: Code,
    href: "/tools/html-editor",
  },
  {
    name: "Duplicate & Overlap Detector",
    desc: "Find exact duplicates and content overlap across your entire library.",
    icon: Copy,
    href: "/tools/duplicate-detector",
  },
  {
    name: "AI Content Spinner",
    desc: "Transform generic PLR into unique, SEO-friendly content.",
    icon: Wand2,
    href: "/tools/content-spinner",
  },
];

interface RelatedToolsProps {
  currentTool: string;
}

export function RelatedTools({ currentTool }: RelatedToolsProps) {
  const related = allTools.filter((t) => t.name !== currentTool);

  return (
    <section className="py-16 bg-muted/50" aria-label="Related Tools">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Explore the Other Built-In Tools
          </h2>
          <p className="text-muted-foreground">
            All tools are included with{" "}
            <Link to="/plr-organizer" className="text-primary hover:underline font-medium">
              PLR Organizer Pro
            </Link>{" "}
            — no extra cost.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((tool) => (
            <Link key={tool.name} to={tool.href} className="group">
              <Card className="h-full border-border hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <CardContent className="p-6 text-center">
                  <tool.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-secondary mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:underline">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/tools" className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1">
            View All Tools <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
