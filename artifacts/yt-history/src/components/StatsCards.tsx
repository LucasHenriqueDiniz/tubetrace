import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { format } from "date-fns";
import { Tv, Users, Clock, Hash } from "lucide-react";

function StatCard({ icon: Icon, label, value, sub, color, detail }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  color: string;
  detail?: string;
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4"
      data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-between">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
        {detail && (
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold bg-secondary px-2 py-0.5 rounded-full">
            {detail}
          </span>
        )}
      </div>
      <div>
        <p className="text-3xl font-extrabold tracking-tight leading-none">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
        {sub && <p className="text-xs text-muted-foreground/70 mt-1">{sub}</p>}
      </div>
    </motion.div>
  );
}

export function StatsCards() {
  const data = useHistoryStore((s) => s.data);
  if (!data) return null;

  const { totalVideos, uniqueChannels, estimatedTotalHours, estimatedTotalDays,
    dateRange, avgVideosPerActiveDay, activeDays } = data;

  const yearSpan = (dateRange.end.getFullYear() - dateRange.start.getFullYear()) + 1;

  return (
    <section>
      <motion.h2
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="text-xl font-bold mb-4"
      >
        Visão Geral
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={Tv}
          label="Vídeos assistidos"
          value={totalVideos.toLocaleString()}
          sub={`~${avgVideosPerActiveDay.toFixed(1)} por dia ativo`}
          color="bg-primary/15 text-primary"
          detail={`${activeDays.toLocaleString()} dias`}
        />
        <StatCard
          icon={Users}
          label="Canais únicos"
          value={uniqueChannels.toLocaleString()}
          sub={`de ${format(dateRange.start, "yyyy")} a ${format(dateRange.end, "yyyy")}`}
          color="bg-accent/15 text-accent"
          detail={`${yearSpan} anos`}
        />
        <StatCard
          icon={Clock}
          label="Tempo estimado"
          value={`${Math.round(estimatedTotalHours).toLocaleString()}h`}
          sub={`≈ ${estimatedTotalDays.toFixed(1)} dias corridos`}
          color="bg-[hsl(199,89%,48%)]/15 text-[hsl(199,89%,48%)]"
          detail="5 min/vídeo"
        />
        <StatCard
          icon={Hash}
          label="Média diária"
          value={avgVideosPerActiveDay.toFixed(1)}
          sub={`vídeos nos dias ativos`}
          color="bg-[hsl(47,95%,57%)]/15 text-[hsl(47,95%,57%)]"
          detail="dias ativos"
        />
      </div>
    </section>
  );
}
