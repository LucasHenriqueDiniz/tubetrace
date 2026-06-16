import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { Github, ShieldCheck, Zap, Lock, Globe } from "lucide-react";

export function AboutPage() {
  usePageMeta(
    "About TubeTrace — Private YouTube Watch History Analyzer",
    "TubeTrace is a free, privacy-first YouTube watch history analyzer. Your data never leaves your browser. Learn about the project and why it was built.",
    "https://tubetrace.pages.dev/about",
  );

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            What is TubeTrace?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TubeTrace is a free, open-source tool that analyzes your YouTube watch history
            from a Google Takeout export — entirely inside your browser, with no server,
            no login, and no data collection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {[
            {
              icon: Lock,
              title: "100% Private",
              desc: "Your watch history file is processed entirely in your browser. It never leaves your device.",
            },
            {
              icon: Zap,
              title: "Instant Analysis",
              desc: "Get your viewing personality, top channels, binge sessions, and activity patterns in seconds.",
            },
            {
              icon: Globe,
              title: "No Account Required",
              desc: "No login, no sign-up, no tracking. Just upload your Google Takeout export and see your stats.",
            },
            {
              icon: ShieldCheck,
              title: "Open Source",
              desc: "The entire codebase is public. You can audit exactly what happens to your data.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <Icon className="w-5 h-5 text-primary mb-3" />
              <h2 className="font-bold mb-1">{title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-14 space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-bold text-foreground">Why TubeTrace?</h2>
          <p>
            YouTube's official history page shows you what you watched, but gives you no
            insight into <em>how</em> you watch. TubeTrace fills that gap: it turns your
            raw export into meaningful stats — your personality as a viewer, which channels
            dominate your time, when you binge the most, and what your daily habits look like
            across months and years.
          </p>
          <p>
            Unlike other tools, TubeTrace never sends your data anywhere. Your Google Takeout
            ZIP is decompressed and processed entirely in your browser using JavaScript.
            The moment you close the tab, the data is gone.
          </p>
          <p>
            TubeTrace supports both the JSON and HTML formats that Google Takeout exports,
            as well as the compressed <code className="text-xs bg-muted px-1.5 py-0.5 rounded">.zip</code>,{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">.tgz</code>, and{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">.tar.gz</code> archives
            you download directly from Google. No extraction needed.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-6">What TubeTrace analyzes</h2>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {[
              "Your YouTube viewing personality (Night Owl, Binge Watcher, Loyal Fan, and more)",
              "Top channels by total videos watched",
              "Binge sessions — consecutive videos in short windows",
              "Activity heatmap across every day of your history",
              "Viewing patterns by hour of day, day of week, and month",
              "Longest viewing streak (consecutive days)",
              "Total estimated watch time",
              "Most active day ever",
              "Peak viewing hours and time slot breakdown",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14 rounded-2xl border border-border/60 bg-card/60 p-6">
          <h2 className="text-xl font-bold mb-4">How to use TubeTrace</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
              Export your YouTube history from{" "}
              <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Takeout
              </a>
              . Select only YouTube and YouTube Music to keep the file small.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
              Download the <code className="text-xs bg-muted px-1 py-0.5 rounded">.zip</code> or{" "}
              <code className="text-xs bg-muted px-1 py-0.5 rounded">.tgz</code> file Google sends you.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
              Drop the file on the{" "}
              <Link href="/" className="text-primary hover:underline">TubeTrace upload page</Link>
              {" "}— no extraction needed.
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">4</span>
              Your report appears instantly, processed entirely in your browser.
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Analyze My History
          </Link>
          <Link
            href="/sample"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            View Sample Report
          </Link>
          <a
            href="https://github.com/LucasHenriqueDiniz/tubetrace"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
