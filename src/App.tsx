import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Layouts
import { MainLayout } from "@/components/layout/MainLayout";

// Main Pages
import Index from "@/pages/Index";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import InstallPage from "@/pages/InstallPage";

// Tool Pages
import ContentSpinnerPage from "@/pages/tools/ContentSpinnerPage";
import SEOAnalyzerPage from "@/pages/tools/SEOAnalyzerPage";
import HTMLEditorPage from "@/pages/tools/HTMLEditorPage";
import LicenseTrackerPage from "@/pages/tools/LicenseTrackerPage";
import MultiLanguageTranslatorPage from "@/pages/tools/MultiLanguageTranslatorPage";
import BrandKitToolPage from "@/pages/tools/BrandKitToolPage";
import ToolsPage from "@/pages/ToolsPage";

// Legal Pages
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import CookiePolicy from "@/pages/legal/CookiePolicy";
import RefundPolicy from "@/pages/legal/RefundPolicy";

// Funnel Pages
import FunnelOffer from "@/pages/funnel/FunnelOffer";
import FunnelOTO1 from "@/pages/funnel/FunnelOTO1";
import FunnelOTO1DS from "@/pages/funnel/FunnelOTO1DS";
import FunnelOTO2 from "@/pages/funnel/FunnelOTO2";
import FunnelOTO2DS from "@/pages/funnel/FunnelOTO2DS";
import FunnelThankYou from "@/pages/funnel/FunnelThankYou";

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
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<ToolsPage />} />
              
              {/* Tool Pages */}
              <Route path="/tools/content-spinner" element={<ContentSpinnerPage />} />
              <Route path="/tools/seo-analyzer" element={<SEOAnalyzerPage />} />
              <Route path="/tools/html-editor" element={<HTMLEditorPage />} />
              <Route path="/tools/license-tracker" element={<LicenseTrackerPage />} />
              <Route path="/tools/multi-language-translator" element={<MultiLanguageTranslatorPage />} />
              <Route path="/tools/brand-kit" element={<BrandKitToolPage />} />
              
              {/* SEO Redirects - Old tool URLs */}
              <Route path="/tools/content-transformer" element={<Navigate to="/tools/content-spinner" replace />} />
              <Route path="/tools/uniqueness-meter" element={<Navigate to="/tools/content-spinner" replace />} />
              <Route path="/tools/plr-scanner" element={<Navigate to="/tools" replace />} />

              {/* Legal Pages */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/refund" element={<RefundPolicy />} />
              <Route path="/install" element={<InstallPage />} />
            </Route>

            {/* Funnel Pages (Direct Response - No Header) */}
            <Route path="/funnel/offer" element={<FunnelOffer />} />
            <Route path="/funnel/oto1" element={<FunnelOTO1 />} />
            <Route path="/funnel/oto1-ds" element={<FunnelOTO1DS />} />
            <Route path="/funnel/oto2" element={<FunnelOTO2 />} />
            <Route path="/funnel/oto2-ds" element={<FunnelOTO2DS />} />
            <Route path="/funnel/thank-you" element={<FunnelThankYou />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
