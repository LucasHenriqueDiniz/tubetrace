import { motion } from "framer-motion";
import { useHistoryStore } from "@/lib/store";
import { format } from "date-fns";

const personalityDescriptions: Record<string, string> = {
  "The Night Owl": "Most of your watching happens when the rest of the world is asleep.",
  "The Early Bird": "You prefer your YouTube with a morning coffee.",
  "The Binge Watcher": "Once you start, stopping is not an option.",
  "The Loyal Fan": "You found your people and you stick with them.",
  "The Variety Seeker": "Algorithm? You don't know her. You wander freely.",
  "The Weekend Warrior": "Weekends are sacred screen time.",
  "The Balanced Viewer": "Thoughtful. Consistent. A true creature of habit.",
};

const personalityColors: Record<string, string> = {
  "The Night Owl": "from-indigo-900/60 to-purple-900/60",
  "The Early Bird": "from-amber-900/60 to-orange-900/60",
  "The Binge Watcher": "from-rose-900/60 to-pink-900/60",
  "The Loyal Fan": "from-emerald-900/60 to-teal-900/60",
  "The Variety Seeker": "from-cyan-900/60 to-blue-900/60",
  "The Weekend Warrior": "from-violet-900/60 to-purple-900/60",
  "The Balanced Viewer": "from-slate-900/60 to-gray-900/60",
};

export function PersonalityCard() {
  const data = useHistoryStore((s) => s.data);
  if (!data) return null;

  const primary = data.personalities[0] || "The Balanced Viewer";
  const gradientClass = personalityColors[primary] || "from-primary/20 to-accent/20";

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradientClass} border border-white/10 p-8 md:p-12`}
    >
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-3">Your YouTube Personality</p>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          {primary}
        </h2>
        {data.personalities[1] && (
          <p className="text-sm text-white/60 mb-2">Also: {data.personalities.slice(1).join(" · ")}</p>
        )}
        <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mt-4">
          {personalityDescriptions[primary] || "Your viewing habits are uniquely yours."}
        </p>
        <p className="text-xs text-white/40 mt-6">
          Based on {data.totalVideos.toLocaleString()} videos from{" "}
          {format(data.dateRange.start, "MMM yyyy")} to {format(data.dateRange.end, "MMM yyyy")}
        </p>
      </div>
      <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
    </motion.div>
  );
}
