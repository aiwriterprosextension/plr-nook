import { X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mistakes = [
  {
    mistake: "Storing PLR with generic names like \"PLR_Package_1\"",
    solution: "Our auto-organizer uses smart naming conventions based on niche and content type",
  },
  {
    mistake: "Not tracking license rights for each package",
    solution: "Built-in license tracker prevents violations and keeps you legal",
  },
  {
    mistake: "Forgetting what you already own and buying duplicates",
    solution: "Duplicate detection alerts you before you waste money",
  },
  {
    mistake: "Never using purchased content because you can't find it",
    solution: "Visual preview system lets you see and use everything instantly",
  },
  {
    mistake: "Scattered files across multiple devices and folders",
    solution: "Centralized organization brings everything into one searchable library",
  },
];

export function CommonMistakes() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            5 Costly Mistakes PLR Buyers Make
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            (And How PLR Organizer Pro Fixes Each One)
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {mistakes.map((item, i) => (
            <Card key={i} className="border-2 border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 bg-destructive/5 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                          Mistake #{i + 1}
                        </span>
                        <p className="text-secondary font-medium mt-1">{item.mistake}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-success/5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-success uppercase tracking-wide">
                          Solution
                        </span>
                        <p className="text-secondary font-medium mt-1">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
