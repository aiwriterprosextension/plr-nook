import { Copy, Check, FileKey, Calendar, CreditCard, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function DashboardLicense() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const licenseKey = "PLR-PRO-XXXX-XXXX-XXXX-XXXX";
  const purchaseDate = "January 13, 2026";
  const planType = "Lifetime Access";
  const status = "Active";

  const copyLicenseKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    toast({
      title: "License Key Copied",
      description: "Your license key has been copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary">License Status</h1>
        <p className="text-muted-foreground">View your license information and product details.</p>
      </div>

      <div className="space-y-6">
        {/* License Status Card */}
        <Card className="border-2 border-success/30 bg-success/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center">
                <Check className="h-7 w-7 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">License Status</p>
                <p className="text-2xl font-bold text-success">{status}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* License Key */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileKey className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>License Key</CardTitle>
                <CardDescription>Your product activation key</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <code className="flex-1 px-4 py-3 bg-muted rounded-lg font-mono text-sm">
                {licenseKey}
              </code>
              <Button variant="outline" size="icon" onClick={copyLicenseKey}>
                {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Use this key to activate PLR Organizer Pro on your desktop application.
            </p>
          </CardContent>
        </Card>

        {/* Purchase Details */}
        <Card>
          <CardHeader>
            <CardTitle>Purchase Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Purchase Date</span>
                </div>
                <span className="font-medium">{purchaseDate}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Plan Type</span>
                </div>
                <span className="font-medium">{planType}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Updates</span>
                </div>
                <span className="font-medium text-success">Lifetime Free Updates</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activations */}
        <Card>
          <CardHeader>
            <CardTitle>Device Activations</CardTitle>
            <CardDescription>Manage where PLR Organizer Pro is installed</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Windows PC</p>
                  <p className="text-sm text-muted-foreground">Activated on Jan 13, 2026</p>
                </div>
                <Button variant="outline" size="sm">Deactivate</Button>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                <p>2 of 3 activations used</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upgrade CTA */}
        <Card className="bg-gradient-dark text-secondary-foreground">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">Need More Activations?</h3>
                <p className="text-muted-foreground">
                  Upgrade to PLR Organizer Pro Business for unlimited activations.
                </p>
              </div>
              <Button variant="cta">Upgrade Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
