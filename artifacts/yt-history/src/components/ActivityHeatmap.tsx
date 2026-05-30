import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { format, startOfWeek, addDays, getDay } from "date-fns";

const CELL_SIZE = 11;
const CELL_GAP = 2;
const WEEKS_TO_SHOW = 53;

function getIntensity(count: number, max: number): number {
  if (count === 0) return 0;
  const pct = count / max;
  if (pct < 0.15) return 1;
  if (pct < 0.35) return 2;
  if (pct < 0.65) return 3;
  return 4;
}

const intensityClasses = [
  "bg-white/5",
  "bg-primary/20",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["D", "S", "T", "Q", "Q", "S", "S"];

export function ActivityHeatmap() {
  const data = useHistoryStore((s) => s.data);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; date: string; count: number } | null>(null);

  const { grid, monthPositions, maxCount } = useMemo(() => {
    if (!data || data.dailyActivity.length === 0) return { grid: [], monthPositions: [], maxCount: 0 };

    const activityMap = new Map(data.dailyActivity.map(d => [d.date, d.count]));
    const max = Math.max(...data.dailyActivity.map(d => d.count), 1);

    // Build a 53-week grid ending at the last date in data
    const endDate = new Date(data.dateRange.end);
    endDate.setHours(23, 59, 59);
    const startDate = addDays(startOfWeek(endDate, { weekStartsOn: 0 }), -(WEEKS_TO_SHOW - 1) * 7);

    const weeks: { date: Date; count: number; key: string }[][] = [];
    let currentWeek: { date: Date; count: number; key: string }[] = [];
    let cursor = new Date(startDate);
    const monthPos: { label: string; col: number }[] = [];
    let lastMonth = -1;

    for (let col = 0; col < WEEKS_TO_SHOW; col++) {
      currentWeek = [];
      for (let row = 0; row < 7; row++) {
        const key = format(cursor, "yyyy-MM-dd");
        const count = activityMap.get(key) || 0;
        const month = cursor.getMonth();
        if (month !== lastMonth && row === 0) {
          monthPos.push({ label: MONTH_LABELS[month], col });
          lastMonth = month;
        }
        currentWeek.push({ date: new Date(cursor), count, key });
        cursor = addDays(cursor, 1);
      }
      weeks.push(currentWeek);
    }

    return { grid: weeks, monthPositions: monthPos, maxCount: max };
  }, [data]);

  if (!data || grid.length === 0) return null;

  return (
    <section>
      <motion.h2
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="text-xl font-bold mb-4"
      >
        Activity Calendar
      </motion.h2>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        className="bg-card border border-border rounded-2xl p-6"
      >
        <div className="overflow-x-auto">
          <div className="relative min-w-max">
            {/* Month labels */}
            <div className="flex mb-1 ml-7">
              {monthPositions.map((mp, i) => (
                <div
                  key={i}
                  className="text-[10px] text-muted-foreground absolute"
                  style={{ left: 28 + mp.col * (CELL_SIZE + CELL_GAP) }}
                >
                  {mp.label}
                </div>
              ))}
            </div>
            <div className="flex mt-4">
              {/* Day labels */}
              <div className="flex flex-col mr-1.5" style={{ gap: CELL_GAP }}>
                {DAY_LABELS.map((d, i) => (
                  <div
                    key={i}
                    className="text-[10px] text-muted-foreground flex items-center justify-end"
                    style={{ height: CELL_SIZE, width: 18 }}
                  >
                    {i % 2 === 1 ? d : ""}
                  </div>
                ))}
              </div>
              {/* Grid */}
              <div className="flex" style={{ gap: CELL_GAP }}>
                {grid.map((week, col) => (
                  <div key={col} className="flex flex-col" style={{ gap: CELL_GAP }}>
                    {week.map((cell, row) => {
                      const intensity = getIntensity(cell.count, maxCount);
                      return (
                        <div
                          key={row}
                          className={`rounded-sm cursor-pointer transition-opacity hover:opacity-80 ${intensityClasses[intensity]}`}
                          style={{ width: CELL_SIZE, height: CELL_SIZE }}
                          data-testid={`heatmap-cell-${cell.key}`}
                          onMouseEnter={(e) => {
                            const rect = (e.target as HTMLElement).getBoundingClientRect();
                            setTooltip({ x: rect.left, y: rect.top, date: cell.key, count: cell.count });
                          }}
                          onMouseLeave={() => setTooltip(null)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-1.5 mt-3 justify-end">
              <span className="text-[10px] text-muted-foreground">Menos</span>
              {intensityClasses.map((cls, i) => (
                <div key={i} className={`rounded-sm ${cls}`} style={{ width: CELL_SIZE, height: CELL_SIZE }} />
              ))}
              <span className="text-[10px] text-muted-foreground">Mais</span>
            </div>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="fixed z-50 pointer-events-none bg-popover border border-border text-popover-foreground text-xs rounded-lg px-3 py-2 shadow-xl"
            style={{ left: tooltip.x + 14, top: tooltip.y - 40 }}
          >
            <span className="font-semibold">{tooltip.count} vídeo{tooltip.count !== 1 ? "s" : ""}</span>
            <span className="text-muted-foreground ml-1">em {tooltip.date}</span>
          </div>
        )}
      </motion.div>
    </section>
  );
}
