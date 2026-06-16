import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { StatsCards } from "./StatsCards";
import { PersonalityCard } from "./PersonalityCard";
import { TopChannels } from "./TopChannels";
import { WatchPatterns } from "./WatchPatterns";
import { BingeSessions } from "./BingeSessions";
import { FunInsights } from "./FunInsights";
import { ActivityHeatmap } from "./ActivityHeatmap";
import { DataTimeline } from "./DataTimeline";
import { Button } from "@/components/ui/button";
import { UploadCloud, Share2 } from "lucide-react";
import { useState } from "react";
import { shareCard } from "@/lib/shareCard";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

export function Dashboard() {
  const { data, reset } = useHistoryStore();
  const [sharing, setSharing] = useState(false);
  if (!data) return null;

  const handleShare = async () => {
    setSharing(true);
    try {
      await shareCard(data);
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ── sticky header ── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <button
            onClick={reset}
            className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Back to upload"
          >
            <img src="/favicon.svg" alt="TubeTrace" className="h-7 w-7 rounded-lg" />
            <span className="text-base font-extrabold tracking-tight">
              Tube<span className="text-primary">Trace</span>
            </span>
          </button>

          {/* data summary pill */}
          <span className="hidden sm:block text-xs text-muted-foreground bg-secondary/60 px-3 py-1 rounded-full font-medium truncate max-w-xs">
            {data.totalVideos.toLocaleString()} videos · {data.uniqueChannels.toLocaleString()} channels
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              onClick={handleShare}
              disabled={sharing}
              className="gap-2 text-xs rounded-full"
            >
              <Share2 className="w-3.5 h-3.5" />
              {sharing ? "Sharing…" : "Share"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              className="gap-2 text-xs rounded-full"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New file</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ── content ── */}
      <motion.main
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-16"
      >
        <PersonalityCard />
        <StatsCards />
        <DataTimeline />
        <ActivityHeatmap />
        <TopChannels />
        <WatchPatterns />
        <BingeSessions />
        <FunInsights />
      </motion.main>
    </div>
  );
}
