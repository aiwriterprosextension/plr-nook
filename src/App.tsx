import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { MainLayout } from "@/components/layout/MainLayout";

// Main Pages
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Auth from "@/pages/Auth";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Website with Header/Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
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
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
