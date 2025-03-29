import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useLocation, 
  useNavigationType,
  useRouteError,
  createRoutesFromChildren,
  matchRoutes
} from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Cities from "./pages/Cities";
import Widgets from "./pages/Widgets";
import Contact from "./pages/Contact";
import Methodology from "./pages/Methodology";
import ApiDocs from "./pages/ApiDocs";
import ResearchPapers from "./pages/ResearchPapers";
import Partners from "./pages/Partners";
import EmbedWidget from "./pages/EmbedWidget";
import * as Sentry from "@sentry/react";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        // Report query failures to Sentry
        if (failureCount >= 2) {
          Sentry.captureException(error);
        }
        return failureCount < 3;
      },
    },
  },
});

// Create a Sentry routing instrumentation
const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

// Create a Sentry router integration component
const SentryRouterIntegration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Initialize Sentry with minimal configuration to avoid TypeScript errors
    Sentry.init({
      integrations: [
        new Sentry.BrowserTracing({
          // Using the correct method signature for reactRouterV6Instrumentation
          routingInstrumentation: Sentry.reactRouterV6Instrumentation(
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes
          ),
        }),
      ],
    });
  }, [location, navigationType]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <SentryRouterIntegration />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SentryRoutes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/api-documentation" element={<ApiDocs />} />
            <Route path="/research-papers" element={<ResearchPapers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/embed" element={<EmbedWidget />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </SentryRoutes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Sentry.withProfiler(App);
