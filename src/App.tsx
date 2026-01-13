import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import { MainLayout } from "@/components/layout/MainLayout";

// Main Pages
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";

// Tool Pages
import PLRScannerPage from "@/pages/tools/PLRScannerPage";
import ContentSpinnerPage from "@/pages/tools/ContentSpinnerPage";
import UniquenessMeterPage from "@/pages/tools/UniquenessMeterPage";
import SEOAnalyzerPage from "@/pages/tools/SEOAnalyzerPage";
import HTMLEditorPage from "@/pages/tools/HTMLEditorPage";
import LicenseTrackerPage from "@/pages/tools/LicenseTrackerPage";
import RebrandingToolPage from "@/pages/tools/RebrandingToolPage";

// Funnel Pages
import FunnelOffer from "@/pages/funnel/FunnelOffer";
import FunnelOTO1 from "@/pages/funnel/FunnelOTO1";
import FunnelOTO1DS from "@/pages/funnel/FunnelOTO1DS";
import FunnelOTO2 from "@/pages/funnel/FunnelOTO2";
import FunnelOTO2DS from "@/pages/funnel/FunnelOTO2DS";
import FunnelThankYou from "@/pages/funnel/FunnelThankYou";

// Dashboard Pages
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardOverview from "@/pages/dashboard/DashboardOverview";
import DashboardDownload from "@/pages/dashboard/DashboardDownload";
import DashboardSettings from "@/pages/dashboard/DashboardSettings";
import DashboardLicense from "@/pages/dashboard/DashboardLicense";
import DashboardHelp from "@/pages/dashboard/DashboardHelp";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Website with Header/Footer */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              
              {/* Tool Pages */}
              <Route path="/tools/plr-scanner" element={<PLRScannerPage />} />
              <Route path="/tools/content-spinner" element={<ContentSpinnerPage />} />
              <Route path="/tools/uniqueness-meter" element={<UniquenessMeterPage />} />
              <Route path="/tools/seo-analyzer" element={<SEOAnalyzerPage />} />
              <Route path="/tools/html-editor" element={<HTMLEditorPage />} />
              <Route path="/tools/license-tracker" element={<LicenseTrackerPage />} />
              <Route path="/tools/rebranding-tool" element={<RebrandingToolPage />} />
            </Route>

            {/* Auth Pages (No Header/Footer) */}
            <Route path="/auth" element={<Auth />} />

            {/* Funnel Pages (Direct Response - No Header) */}
            <Route path="/funnel/offer" element={<FunnelOffer />} />
            <Route path="/funnel/oto1" element={<FunnelOTO1 />} />
            <Route path="/funnel/oto1-ds" element={<FunnelOTO1DS />} />
            <Route path="/funnel/oto2" element={<FunnelOTO2 />} />
            <Route path="/funnel/oto2-ds" element={<FunnelOTO2DS />} />
            <Route path="/funnel/thank-you" element={<FunnelThankYou />} />

            {/* Dashboard (Sidebar Layout) */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardOverview />} />
              <Route path="download" element={<DashboardDownload />} />
              <Route path="settings" element={<DashboardSettings />} />
              <Route path="license" element={<DashboardLicense />} />
              <Route path="help" element={<DashboardHelp />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
