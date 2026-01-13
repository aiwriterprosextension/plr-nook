import { Link } from "react-router-dom";
import { Download, FileKey, HelpCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardOverview() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary">Hello, User!</h1>
        <p className="text-muted-foreground">Welcome to your PLR Organizer Pro dashboard.</p>
      </div>

      {/* Status */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success">
          <CheckCircle className="h-5 w-5" />
          <span className="font-semibold">License Active</span>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 shadow-red">
              <Download className="h-6 w-6 text-primary-foreground" />
            </div>
            <CardTitle>Download App</CardTitle>
            <CardDescription>Get the desktop app for your operating system</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/download">
              <Button variant="cta" className="w-full">
                Download Now
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <FileKey className="h-6 w-6 text-secondary-foreground" />
            </div>
            <CardTitle>View License Key</CardTitle>
            <CardDescription>Access your license key and product details</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/license">
              <Button variant="outline" className="w-full">
                View License
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 text-muted-foreground" />
            </div>
            <CardTitle>Get Help</CardTitle>
            <CardDescription>Access tutorials, docs, and support</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/dashboard/help">
              <Button variant="outline" className="w-full">
                View Help
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
