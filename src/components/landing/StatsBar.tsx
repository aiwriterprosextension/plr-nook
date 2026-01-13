import { FolderOpen, DollarSign, Clock, Users } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: "2.3M+", label: "Files Organized" },
  { icon: DollarSign, value: "$847K+", label: "PLR Rediscovered" },
  { icon: Clock, value: "156K+", label: "Hours Saved" },
  { icon: Users, value: "10,000+", label: "Happy Users" },
];

export function StatsBar() {
  return (
    <section className="bg-secondary py-6">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <stat.icon className="h-6 w-6 text-primary" />
              <span className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-secondary-foreground/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
