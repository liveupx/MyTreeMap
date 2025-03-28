
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
