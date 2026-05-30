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
import { UploadCloud } from "lucide-react";

export function Dashboard() {
  const { data, reset } = useHistoryStore();
  if (!data) return null;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-base font-extrabold tracking-tight">
            Tube<span className="text-primary">Trace</span>
          </span>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-xs rounded-full"
            onClick={reset}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            Novo arquivo
          </Button>
        </div>
      </header>

      {/* ── Main content ── */}
      <motion.main
        className="max-w-6xl mx-auto px-4 py-10 space-y-14"
        variants={container}
        initial="hidden"
        animate="show"
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
