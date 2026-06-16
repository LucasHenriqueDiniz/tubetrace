import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { UploadCloud, Info } from "lucide-react";
import { useHistoryStore } from "@/lib/store";
import { generateDemoData } from "@/lib/parser";
import { usePageMeta } from "@/hooks/usePageMeta";
import { PageLayout } from "@/components/PageLayout";
import { PersonalityCard } from "@/components/PersonalityCard";
import { StatsCards } from "@/components/StatsCards";
import { DataTimeline } from "@/components/DataTimeline";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { TopChannels } from "@/components/TopChannels";
import { WatchPatterns } from "@/components/WatchPatterns";
import { BingeSessions } from "@/components/BingeSessions";
import { FunInsights } from "@/components/FunInsights";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export function SampleReportPage() {
  usePageMeta(
    "Sample YouTube Watch History Report — TubeTrace",
    "See what a TubeTrace report looks like. Explore a full example report with viewing personality, top channels, binge sessions, activity heatmap, and watch patterns.",
    "https://tubetrace.pages.dev/sample",
  );

  const { data, setData } = useHistoryStore();

  useEffect(() => {
    if (!data) {
      setData(generateDemoData());
    }
  }, [data, setData]);

  if (!data) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* sample banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Info className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">
              This is a <strong className="text-foreground">sample report</strong> with synthetic data.
              Upload your own Google Takeout export to see your real stats.
            </span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shrink-0 hover:bg-primary/90 transition-colors"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            Analyze My History
          </Link>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16"
      >
        <div className="text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Example Report</p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            What your YouTube history analysis looks like
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Below is a full example report generated from synthetic YouTube watch history data.
            Your actual report will reflect your own channels, habits, and viewing personality.
          </p>
        </div>

        <PersonalityCard />
        <StatsCards />
        <DataTimeline />
        <ActivityHeatmap />
        <TopChannels />
        <WatchPatterns />
        <BingeSessions />
        <FunInsights />

        {/* bottom CTA */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Ready to see your own report?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Export your YouTube history from Google Takeout, drop the file on TubeTrace,
            and get your personalized report in seconds — 100% private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <UploadCloud className="w-4 h-4" />
              Analyze My History
            </Link>
            <Link
              href="/guide/how-to-export-youtube-watch-history"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              How to Export My Data
            </Link>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
