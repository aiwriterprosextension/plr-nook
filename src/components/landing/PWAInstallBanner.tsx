import { X, Download } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { useIsMobile } from "@/hooks/use-mobile";

const DISMISS_KEY = "pwa-banner-dismissed";

export function PWAInstallBanner() {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const isMobile = useIsMobile();
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem(DISMISS_KEY) === "true";
  });

  if (!isMobile || isInstalled || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(DISMISS_KEY, "true");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 animate-fade-in">
      <div className="container max-w-lg mx-auto bg-secondary text-secondary-foreground rounded-xl shadow-xl p-4 flex items-center gap-3 relative">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <Download className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">Install PLR Organizer Pro</p>
          <p className="text-xs text-muted-foreground">Add to home screen for offline access</p>
        </div>
        {isInstallable ? (
          <Button variant="cta" size="sm" onClick={install}>
            Install
          </Button>
        ) : (
          <Link to="/install">
            <Button variant="cta" size="sm">
              How to Install
            </Button>
          </Link>
        )}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
