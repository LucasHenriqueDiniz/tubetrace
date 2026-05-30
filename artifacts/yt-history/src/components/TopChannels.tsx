import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const CHART_COLORS = [
  "hsl(346,87%,55%)",
  "hsl(262,83%,58%)",
  "hsl(199,89%,48%)",
  "hsl(47,95%,57%)",
  "hsl(142,71%,45%)",
];

export function TopChannels() {
  const data = useHistoryStore((s) => s.data);
  if (!data) return null;

  const top10 = data.topChannels.slice(0, 10);
  const top5 = data.topChannels.slice(0, 5);

  return (
    <section>
      <motion.h2
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="text-xl font-bold mb-4"
      >
        Top Channels
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Top 10 by Watch Count</h3>
          <div className="space-y-3">
            {top10.map((ch, i) => (
              <div key={ch.channel} className="flex items-center gap-3" data-testid={`channel-row-${i}`}>
                <span className="text-xs font-bold text-muted-foreground w-5 text-right shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium truncate pr-2">{ch.channel}</span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {ch.count.toLocaleString()} ({ch.percentage.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${ch.percentage}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
          className="bg-card border border-border rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Top 5 Channels</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={top5} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="channel"
                width={120}
                tick={{ fill: "hsl(240,5%,65%)", fontSize: 12 }}
                tickFormatter={(v: string) => v.length > 16 ? v.slice(0, 14) + "…" : v}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.04)" }}
                contentStyle={{
                  background: "hsl(240,10%,6%)",
                  border: "1px solid hsl(240,10%,16%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(v: number) => [v.toLocaleString(), "Videos"]}
              />
              <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                {top5.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
