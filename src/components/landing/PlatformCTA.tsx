import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

type Platform = "Windows" | "Mac" | "Linux" | "Unknown";

function detectPlatform(): Platform {
  if (typeof window === "undefined") return "Unknown";
  
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes("win")) return "Windows";
  if (userAgent.includes("mac")) return "Mac";
  if (userAgent.includes("linux")) return "Linux";
  
  return "Unknown";
}

const platformConfig = {
  Windows: { icon: Monitor, text: "Get Instant Access for Windows" },
  Mac: { icon: Apple, text: "Get Instant Access for Mac" },
  Linux: { icon: Terminal, text: "Get Instant Access for Linux" },
  Unknown: { icon: Monitor, text: "Get PLR Organizer Pro" },
};

interface PlatformCTAProps {
  variant?: "cta" | "warning";
  size?: "default" | "lg" | "xl";
  className?: string;
}

export function PlatformCTA({ variant = "cta", size = "xl", className = "" }: PlatformCTAProps) {
  const [platform, setPlatform] = useState<Platform>("Unknown");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const config = platformConfig[platform];
  const Icon = config.icon;

  return (
    <Link to="/funnel/offer">
      <Button variant={variant} size={size} className={className}>
        <Icon className="h-5 w-5" />
        {config.text}
        <ArrowRight className="h-5 w-5" />
      </Button>
    </Link>
  );
}

export function PlatformBadges() {
  return (
    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <Monitor className="h-4 w-4" />
        <span>Windows</span>
      </div>
      <span className="text-border">•</span>
      <div className="flex items-center gap-1.5">
        <Apple className="h-4 w-4" />
        <span>Mac</span>
      </div>
      <span className="text-border">•</span>
      <div className="flex items-center gap-1.5">
        <Terminal className="h-4 w-4" />
        <span>Linux</span>
      </div>
    </div>
  );
}
