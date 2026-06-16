import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { AlertCircle, CheckCircle2, ExternalLink } from "lucide-react";

export function YoutubeRecapNotShowing() {
  usePageMeta(
    "YouTube Recap Not Showing? Here's Why and What to Do",
    "YouTube Recap not appearing? Learn the exact requirements for YouTube Recap eligibility and how to see your own YouTube year in review with TubeTrace.",
    "https://tubetrace.pages.dev/guide/youtube-recap-not-showing",
  );

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            YouTube Recap Not Showing? Here's Why
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            YouTube Recap is an optional year-in-review feature that not everyone gets.
            If yours isn't showing up, it's likely because your account doesn't meet
            one or more of YouTube's eligibility requirements — which YouTube has not publicly
            disclosed in full detail.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Known requirements for YouTube Recap</h2>
          <div className="space-y-4">
            {[
              {
                title: "Watch history must be enabled",
                desc: 'YouTube Recap requires an active watch history. If you have paused your YouTube history at any point, go to myaccount.google.com/activitycontrols and re-enable "YouTube History". Future watches will be recorded, but past paused periods remain missing.',
                icon: CheckCircle2,
              },
              {
                title: "Sufficient viewing activity",
                desc: "YouTube has not published the minimum threshold, but Recap appears to require a meaningful amount of viewing. Accounts with very little watch history (few videos or only recent activity) may not qualify.",
                icon: CheckCircle2,
              },
              {
                title: "Account age and region",
                desc: "YouTube Recap has been rolled out gradually and may not be available in all countries or for newer accounts. Even eligible accounts may see it at different times.",
                icon: CheckCircle2,
              },
              {
                title: "Auto-delete settings",
                desc: "If you have set YouTube to auto-delete watch history after 3 or 18 months, there may not be enough data for Recap to generate a meaningful summary.",
                icon: AlertCircle,
              },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">How to check if your YouTube history is enabled</h2>
          <ol className="space-y-4">
            {[
              <>Go to <a href="https://myaccount.google.com/activitycontrols" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">myaccount.google.com/activitycontrols <ExternalLink className="w-3 h-3" /></a></>,
              <>Find "YouTube History" in the list.</>,
              <>If the toggle is off or says "Paused", click it to turn it back on.</>,
              <>Optionally, check the auto-delete settings — set it to "Keep until I delete" to retain all future history.</>,
            ].map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Note: enabling history now won't recover previously deleted entries, but it will
            ensure future watches are counted for next year's Recap.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">YouTube Recap not available? Use TubeTrace instead</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you don't see YouTube Recap, or if you want a more detailed and always-available
            analysis, TubeTrace gives you the same kind of insights — with more depth,
            for your full history, right now.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TubeTrace works by analyzing your Google Takeout export: the raw data file that
            YouTube stores on your behalf. This means you can see your complete watch history —
            not just the last year — including your viewing personality, binge patterns,
            top channels, and daily habits.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Works even if YouTube Recap is not available",
              "Shows your complete history, not just one year",
              "Viewing personality type (7 archetypes)",
              "Top channels with percentage breakdown",
              "Binge session detection",
              "GitHub-style activity heatmap",
              "100% private — processed in your browser",
              "No login or account required",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Don't wait for YouTube Recap</h2>
          <p className="text-muted-foreground mb-6">
            Get your full YouTube year-in-review right now — for every year you have history.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Analyze My History
            </Link>
            <Link href="/guide/how-to-export-youtube-watch-history" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              How to Export My Data
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
