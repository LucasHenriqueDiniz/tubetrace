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
import type { Locale } from "@/i18n/types";
import { SUPPORTED_LOCALES } from "@/i18n/types";

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

function LocaleRoutes({ locale }: { locale: Locale }) {
  return (
    <Switch>
      <Route path={`/${locale}`} component={HomePage} />
      <Route path={`/${locale}/about`}>
        {() => <AboutPage locale={locale} />}
      </Route>
      <Route path={`/${locale}/faq`}>
        {() => <FaqPage locale={locale} />}
      </Route>
      <Route path={`/${locale}/contact`}>
        {() => <ContactPage locale={locale} />}
      </Route>
      <Route path={`/${locale}/sample`}>
        {() => <SampleReportPage locale={locale} />}
      </Route>
      <Route path={`/${locale}/guide/how-to-export-youtube-watch-history`}>
        {() => <HowToExportGuide locale={locale} />}
      </Route>
      <Route path={`/${locale}/guide/google-takeout-youtube-history`}>
        {() => <GoogleTakeoutGuide locale={locale} />}
      </Route>
      <Route path={`/${locale}/guide/youtube-wrapped-alternative`}>
        {() => <YoutubeWrappedAlt locale={locale} />}
      </Route>
      <Route path={`/${locale}/guide/youtube-recap-not-showing`}>
        {() => <YoutubeRecapNotShowing locale={locale} />}
      </Route>
      <Route path={`/${locale}/guide/is-youtube-watch-history-private`}>
        {() => <IsYoutubeHistoryPrivate locale={locale} />}
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <Switch>
            {/* Default English routes (no prefix) */}
            <Route path="/" component={HomePage} />
            <Route path="/about"><AboutPage /></Route>
            <Route path="/faq"><FaqPage /></Route>
            <Route path="/contact"><ContactPage /></Route>
            <Route path="/sample"><SampleReportPage /></Route>
            <Route path="/guide/how-to-export-youtube-watch-history"><HowToExportGuide /></Route>
            <Route path="/guide/google-takeout-youtube-history"><GoogleTakeoutGuide /></Route>
            <Route path="/guide/youtube-wrapped-alternative"><YoutubeWrappedAlt /></Route>
            <Route path="/guide/youtube-recap-not-showing"><YoutubeRecapNotShowing /></Route>
            <Route path="/guide/is-youtube-watch-history-private"><IsYoutubeHistoryPrivate /></Route>

            {/* Locale-prefixed routes */}
            {SUPPORTED_LOCALES.filter((l) => l !== "en").map((locale) => (
              <Route key={locale} path={`/${locale}/*`}>
                {() => <LocaleRoutes locale={locale} />}
              </Route>
            ))}

            {/* Fallback */}
            <Route component={HomePage} />
          </Switch>
        </Router>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
