import { Download, Smartphone, Wifi, WifiOff, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { usePWAInstall } from "@/hooks/use-pwa-install";
import { SEOHead } from "@/components/SEOHead";

const benefits = [
  { icon: Zap, title: "Instant Access", desc: "Launch from your home screen like a native app." },
  { icon: WifiOff, title: "Works Offline", desc: "Access your content even without internet." },
  { icon: Smartphone, title: "Full Screen", desc: "No browser bars—immersive experience." },
];

export default function InstallPage() {
  const { isInstallable, isInstalled, install } = usePWAInstall();

  return (
    <>
      <SEOHead
        title="Install PLR Organizer Pro | Get the App"
        description="Install PLR Organizer Pro on your device for instant access, offline support, and a native app experience."
      />
      <div className="py-20">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6">
            <Download className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
            Install PLR Organizer Pro
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Add to your home screen for the best experience—fast loading, offline access, and no browser clutter.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {benefits.map((b, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <b.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Install Action */}
          {isInstalled ? (
            <div className="flex items-center justify-center gap-2 text-success font-semibold text-lg">
              <Check className="h-6 w-6" />
              App is already installed!
            </div>
          ) : isInstallable ? (
            <Button variant="cta" size="xl" onClick={install} className="px-12">
              <Download className="h-5 w-5 mr-2" />
              Install Now
            </Button>
          ) : (
            <div className="bg-muted rounded-xl p-8">
              <h3 className="font-bold text-secondary mb-3">How to Install</h3>
              <div className="text-sm text-muted-foreground space-y-2 text-left max-w-sm mx-auto">
                <p><strong>iPhone/iPad:</strong> Tap the Share button, then "Add to Home Screen."</p>
                <p><strong>Android:</strong> Tap the menu (⋮), then "Add to Home Screen" or "Install App."</p>
                <p><strong>Desktop Chrome:</strong> Click the install icon in the address bar.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
