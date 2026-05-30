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
    show: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold tracking-tight">
            <span className="text-primary">YouTube</span> Unwrapped
          </h1>
          <Button variant="outline" size="sm" className="gap-2 text-xs" onClick={reset} data-testid="button-reset">
            <UploadCloud className="w-3.5 h-3.5" />
            Novo arquivo
          </Button>
        </div>
      </header>

      <motion.main
        className="max-w-6xl mx-auto px-4 py-8 space-y-10"
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

      <footer className="mt-16 border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        Todos os dados são processados localmente no seu navegador. Nada é enviado a nenhum servidor.
      </footer>
    </div>
  );
}
