import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line,
  CartesianGrid
} from "recharts";

const tooltipStyle = {
  contentStyle: {
    background: "hsl(240,10%,6%)",
    border: "1px solid hsl(240,10%,16%)",
    borderRadius: "8px",
    fontSize: "12px",
  },
  cursor: { fill: "rgba(255,255,255,0.04)" },
};

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      className="bg-card border border-border rounded-2xl p-6"
    >
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

export function WatchPatterns() {
  const data = useHistoryStore((s) => s.data);
  if (!data) return null;

  const hasMultiYear = data.activityByYear.length > 1;

  return (
    <section>
      <motion.h2
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="text-xl font-bold mb-4"
      >
        Watch Patterns
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ChartCard title="Hour of Day">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.activityByHour} margin={{ left: -20, right: 0, top: 0, bottom: 0 }}>
              <XAxis
                dataKey="hour"
                tick={{ fill: "hsl(240,5%,65%)", fontSize: 10 }}
                tickFormatter={(v: string) => v.replace(":00", "")}
                interval={3}
              />
              <YAxis hide />
              <Tooltip {...tooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Videos"]} labelFormatter={(l) => `${l}`} />
              <Bar dataKey="count" fill="hsl(346,87%,55%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Day of Week">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.activityByDay} margin={{ left: -20, right: 0, top: 0, bottom: 0 }}>
              <XAxis dataKey="day" tick={{ fill: "hsl(240,5%,65%)", fontSize: 11 }} />
              <YAxis hide />
              <Tooltip {...tooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Videos"]} />
              <Bar dataKey="count" fill="hsl(262,83%,58%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Activity by Month">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data.activityByMonth} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(240,10%,16%)" />
              <XAxis
                dataKey="month"
                tick={{ fill: "hsl(240,5%,65%)", fontSize: 10 }}
                interval="preserveStartEnd"
                tickFormatter={(v: string) => v.split(" ")[0]}
              />
              <YAxis hide />
              <Tooltip {...tooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Videos"]} />
              <Line
                type="monotone"
                dataKey="count"
                stroke="hsl(199,89%,48%)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {hasMultiYear ? (
          <ChartCard title="Activity by Year">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.activityByYear} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
                <XAxis dataKey="year" tick={{ fill: "hsl(240,5%,65%)", fontSize: 11 }} />
                <YAxis hide />
                <Tooltip {...tooltipStyle} formatter={(v: number) => [v.toLocaleString(), "Videos"]} />
                <Bar dataKey="count" fill="hsl(47,95%,57%)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        ) : (
          <ChartCard title="Time of Day Breakdown">
            <div className="space-y-3 mt-2">
              {data.timeSlotPercentages.map((slot, i) => {
                const colors = ["hsl(346,87%,55%)", "hsl(262,83%,58%)", "hsl(199,89%,48%)", "hsl(47,95%,57%)"];
                return (
                  <div key={slot.slot} className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground w-20 shrink-0">{slot.slot}</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${slot.percentage}%` }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: colors[i] }}
                      />
                    </div>
                    <span className="text-sm font-semibold w-12 text-right">{slot.percentage.toFixed(1)}%</span>
                  </div>
                );
              })}
            </div>
          </ChartCard>
        )}
      </div>
    </section>
  );
}
