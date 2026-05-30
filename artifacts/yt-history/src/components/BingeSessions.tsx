import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { format } from "date-fns";
import { Flame } from "lucide-react";

function formatDuration(ms: number) {
  const mins = Math.floor(ms / 60000);
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function BingeSessions() {
  const data = useHistoryStore((s) => s.data);
  if (!data || data.bingeSessions.length === 0) return null;

  return (
    <section>
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
        className="flex items-center gap-2 mb-4"
      >
        <Flame className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold">Binge Sessions</h2>
        <span className="text-xs text-muted-foreground ml-1">
          ({data.bingeSessions.length} detected)
        </span>
      </motion.div>

      <div className="grid gap-4">
        {data.bingeSessions.map((session, i) => {
          const channels = Array.from(session.channels).slice(0, 3);
          const more = session.channels.size - channels.length;
          return (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
              className={`bg-card border rounded-2xl p-5 flex flex-col md:flex-row md:items-center gap-4 ${i === 0 ? "border-primary/40" : "border-border"}`}
              data-testid={`binge-session-${i}`}
            >
              {i === 0 && (
                <div className="shrink-0 bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit">
                  Biggest Binge
                </div>
              )}
              <div className="flex items-center gap-6 flex-wrap">
                <div>
                  <p className="text-2xl font-bold">{formatDuration(session.durationMs)}</p>
                  <p className="text-xs text-muted-foreground">Duration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{session.videoCount}</p>
                  <p className="text-xs text-muted-foreground">Videos</p>
                </div>
                <div>
                  <p className="text-sm font-medium">{format(session.startDate, "MMM d, yyyy")}</p>
                  <p className="text-xs text-muted-foreground">
                    {format(session.startDate, "h:mm a")} – {format(session.endDate, "h:mm a")}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:ml-auto">
                {channels.map((ch) => (
                  <span key={ch} className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground">
                    {ch}
                  </span>
                ))}
                {more > 0 && (
                  <span className="text-xs bg-secondary px-2.5 py-1 rounded-full text-muted-foreground">
                    +{more} more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
