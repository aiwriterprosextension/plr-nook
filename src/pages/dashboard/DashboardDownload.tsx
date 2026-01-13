import { useEffect, useState } from "react";
import { Download, Monitor, Apple, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type OS = "windows" | "mac" | "linux";

const downloads = {
  windows: { name: "Windows", icon: Monitor, file: "PLROrganizer-Setup.exe", size: "85 MB" },
  mac: { name: "macOS", icon: Apple, file: "PLROrganizer.dmg", size: "92 MB" },
  linux: { name: "Linux", icon: Terminal, file: "PLROrganizer.AppImage", size: "78 MB" },
};

const requirements = {
  windows: ["Windows 10 or later", "4GB RAM minimum", "500MB disk space", "64-bit processor"],
  mac: ["macOS 10.14 (Mojave) or later", "4GB RAM minimum", "500MB disk space", "Intel or Apple Silicon"],
  linux: ["Ubuntu 18.04+ / Debian 10+ / Fedora 30+", "4GB RAM minimum", "500MB disk space", "64-bit processor"],
};

export default function DashboardDownload() {
  const [detectedOS, setDetectedOS] = useState<OS>("windows");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setDetectedOS("mac");
    } else if (userAgent.includes("linux")) {
      setDetectedOS("linux");
    } else {
      setDetectedOS("windows");
    }
  }, []);

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary">Download App</h1>
        <p className="text-muted-foreground">Download PLR Organizer Pro for your operating system.</p>
      </div>

      {/* OS Detection */}
      <div className="mb-8 p-4 bg-accent/50 rounded-lg inline-flex items-center gap-2">
        <Check className="h-5 w-5 text-primary" />
        <span>We detected you're using <strong>{downloads[detectedOS].name}</strong></span>
      </div>

      {/* Download Buttons */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {(Object.keys(downloads) as OS[]).map((os) => {
          const download = downloads[os];
          const isDetected = os === detectedOS;
          return (
            <Card key={os} className={`${isDetected ? "border-2 border-primary shadow-red" : ""}`}>
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${
                  isDetected ? "bg-gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <download.icon className="h-8 w-8" />
                </div>
                <CardTitle>{download.name}</CardTitle>
                <CardDescription>
                  {download.file} • {download.size}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={isDetected ? "cta" : "outline"} 
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Installation Instructions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Installation Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Click the download button above for your operating system</li>
            <li>Open the downloaded file to start the installer</li>
            <li>Follow the on-screen instructions to complete installation</li>
            <li>Launch PLR Organizer Pro and enter your license key when prompted</li>
            <li>Click "Scan" to start organizing your PLR library!</li>
          </ol>
        </CardContent>
      </Card>

      {/* System Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>System Requirements for {downloads[detectedOS].name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {requirements[detectedOS].map((req, i) => (
              <li key={i} className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-success" />
                {req}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
