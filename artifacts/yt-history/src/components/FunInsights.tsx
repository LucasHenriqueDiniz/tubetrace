import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { format } from "date-fns";
import { Lightbulb, Moon, Sun, Trophy, Clock, Zap, CalendarCheck, Tv2 } from "lucide-react";

function InsightCard({ icon: Icon, title, value, sub, color, wide }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  sub?: string;
  color: string;
  wide?: boolean;
}) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
      className={`bg-card border border-border rounded-2xl p-5 flex gap-4 ${wide ? "col-span-2" : ""}`}
    >
      <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium mb-0.5">{title}</p>
        <p className="text-base font-bold leading-snug truncate">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{sub}</p>}
      </div>
    </motion.div>
  );
}

export function FunInsights() {
  const data = useHistoryStore((s) => s.data);
  if (!data) return null;

  const insights: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    value: string;
    sub?: string;
    color: string;
    wide?: boolean;
  }[] = [];

  if (data.mostActiveDayEver) {
    insights.push({
      icon: Trophy,
      title: "Dia mais ativo",
      value: `${data.mostActiveDayEver.count} vídeos`,
      sub: format(data.mostActiveDayEver.date, "EEEE, d 'de' MMMM 'de' yyyy"),
      color: "bg-primary/15 text-primary",
    });
  }

  if (data.longestStreak > 0) {
    insights.push({
      icon: Zap,
      title: "Maior sequência",
      value: `${data.longestStreak} dias seguidos`,
      sub: "assistindo ao YouTube sem parar",
      color: "bg-[hsl(47,95%,57%)]/15 text-[hsl(47,95%,57%)]",
    });
  }

  if (data.earliestMorningWatch) {
    const d = data.earliestMorningWatch.date;
    insights.push({
      icon: Sun,
      title: "Assistido mais cedo",
      value: format(d, "HH:mm"),
      sub: data.earliestMorningWatch.title.slice(0, 44) + (data.earliestMorningWatch.title.length > 44 ? "…" : ""),
      color: "bg-[hsl(47,95%,57%)]/15 text-[hsl(47,95%,57%)]",
    });
  }

  if (data.latestNightWatch) {
    const d = data.latestNightWatch.date;
    insights.push({
      icon: Moon,
      title: "Assistido mais tarde",
      value: format(d, "HH:mm"),
      sub: data.latestNightWatch.title.slice(0, 44) + (data.latestNightWatch.title.length > 44 ? "…" : ""),
      color: "bg-accent/15 text-accent",
    });
  }

  insights.push({
    icon: Clock,
    title: "Tempo total estimado",
    value: `${Math.round(data.estimatedTotalHours).toLocaleString()} horas`,
    sub: `${data.estimatedTotalDays.toFixed(1)} dias assistindo sem dormir`,
    color: "bg-[hsl(199,89%,48%)]/15 text-[hsl(199,89%,48%)]",
  });

  const most = data.timeSlotPercentages.reduce((a, b) => a.percentage > b.percentage ? a : b);
  insights.push({
    icon: CalendarCheck,
    title: "Horário favorito",
    value: most.slot,
    sub: `${most.percentage.toFixed(0)}% de todos os vídeos`,
    color: "bg-[hsl(142,71%,45%)]/15 text-[hsl(142,71%,45%)]",
  });

  if (data.topChannels[0]) {
    const ch = data.topChannels[0];
    insights.push({
      icon: Tv2,
      title: "Canal #1",
      value: ch.channel,
      sub: `${ch.count.toLocaleString()} vídeos · ${ch.percentage.toFixed(1)}% do histórico`,
      color: "bg-primary/15 text-primary",
      wide: false,
    });
  }

  if (data.peakMonth) {
    const monthData = data.activityByMonth.find(m => m.month === data.peakMonth);
    insights.push({
      icon: Lightbulb,
      title: "Mês mais ativo",
      value: data.peakMonth,
      sub: monthData ? `${monthData.count.toLocaleString()} vídeos nesse mês` : undefined,
      color: "bg-accent/15 text-accent",
    });
  }

  return (
    <section>
      <motion.h2
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="text-xl font-bold mb-4"
      >
        Destaques
      </motion.h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {insights.map((insight, i) => (
          <InsightCard key={i} {...insight} />
        ))}
      </div>

      {/* Time slot radial breakdown */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        className="mt-4 bg-card border border-border rounded-2xl p-6"
      >
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
          Distribuição por Período
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.timeSlotPercentages.map((slot, i) => {
            const colors = [
              "hsl(47,95%,57%)", "hsl(346,87%,55%)", "hsl(262,83%,58%)", "hsl(199,89%,48%)"
            ];
            const bgColors = [
              "bg-[hsl(47,95%,57%)]/15", "bg-primary/15", "bg-accent/15", "bg-[hsl(199,89%,48%)]/15"
            ];
            const textColors = [
              "text-[hsl(47,95%,57%)]", "text-primary", "text-accent", "text-[hsl(199,89%,48%)]"
            ];
            const r = 28;
            const circ = 2 * Math.PI * r;
            return (
              <div key={slot.slot} className={`${bgColors[i]} rounded-2xl p-4 flex flex-col items-center gap-2`}>
                <div className="relative w-16 h-16">
                  <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
                    <circle cx="32" cy="32" r={r} fill="none" stroke="hsl(240,10%,16%)" strokeWidth="6" />
                    <motion.circle
                      cx="32" cy="32" r={r}
                      fill="none"
                      stroke={colors[i]}
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={circ}
                      initial={{ strokeDashoffset: circ }}
                      animate={{ strokeDashoffset: circ - (slot.percentage / 100) * circ }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-xs font-bold ${textColors[i]}`}>{slot.percentage.toFixed(0)}%</span>
                  </div>
                </div>
                <p className="text-xs font-semibold text-center">{slot.slot}</p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
