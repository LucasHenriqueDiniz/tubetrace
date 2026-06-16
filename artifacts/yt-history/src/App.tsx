import { Router, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useHistoryStore } from "@/lib/store";
import { UploadSection } from "@/components/UploadSection";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/pages/AboutPage";
import { FaqPage } from "@/pages/FaqPage";
import { ContactPage } from "@/pages/ContactPage";
import { SampleReportPage } from "@/pages/SampleReportPage";
import { HowToExportGuide } from "@/pages/guides/HowToExportGuide";
import { GoogleTakeoutGuide } from "@/pages/guides/GoogleTakeoutGuide";
import { YoutubeWrappedAlt } from "@/pages/guides/YoutubeWrappedAlt";
import { YoutubeRecapNotShowing } from "@/pages/guides/YoutubeRecapNotShowing";
import { IsYoutubeHistoryPrivate } from "@/pages/guides/IsYoutubeHistoryPrivate";

const queryClient = new QueryClient();

function HomePage() {
  const data = useHistoryStore((s) => s.data);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {data ? <Dashboard /> : <UploadSection />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/sample" component={SampleReportPage} />
            <Route path="/guide/how-to-export-youtube-watch-history" component={HowToExportGuide} />
            <Route path="/guide/google-takeout-youtube-history" component={GoogleTakeoutGuide} />
            <Route path="/guide/youtube-wrapped-alternative" component={YoutubeWrappedAlt} />
            <Route path="/guide/youtube-recap-not-showing" component={YoutubeRecapNotShowing} />
            <Route path="/guide/is-youtube-watch-history-private" component={IsYoutubeHistoryPrivate} />
            <Route component={HomePage} />
          </Switch>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
