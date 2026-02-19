import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const valueItems = [
  { item: "Software License", value: "$197" },
  { item: "Lifetime Updates", value: "$97/year" },
  { item: "Priority Support", value: "$47/year" },
  { item: "6 Built-in Power Tools", value: "$197" },
];

export function ValueStack() {
  return (
    <Card className="border-2 border-primary/20 max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-secondary text-center mb-4">
          What You're Really Getting
        </h3>
        
        <div className="space-y-3 mb-4">
          {valueItems.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">{item.item}</span>
              </div>
              <span className="text-sm font-semibold text-secondary">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-dashed border-border pt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-secondary">TOTAL VALUE:</span>
            <span className="font-bold text-secondary">$538+</span>
          </div>
          <div className="flex justify-between items-center text-primary">
            <span className="font-extrabold text-lg">TODAY'S PRICE:</span>
            <span className="font-extrabold text-2xl">$27</span>
          </div>
          <div className="flex justify-between items-center text-success">
            <span className="font-bold">YOU SAVE:</span>
            <span className="font-bold">$511 (95% OFF!)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
