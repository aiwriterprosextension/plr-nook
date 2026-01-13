import { Shield, Lock, CheckCircle, Monitor } from "lucide-react";

const badges = [
  { icon: Shield, label: "7-Day Money-Back Guarantee" },
  { icon: Lock, label: "Secure Checkout" },
  { icon: CheckCircle, label: "Virus-Free Certified" },
  { icon: Monitor, label: "Windows • Mac • Linux" },
];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-8">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg shadow-sm"
        >
          <badge.icon className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-secondary">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
