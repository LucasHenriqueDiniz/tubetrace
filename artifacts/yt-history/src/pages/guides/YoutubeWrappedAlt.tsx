import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { CheckCircle2, X } from "lucide-react";

export function YoutubeWrappedAlt() {
  usePageMeta(
    "YouTube Wrapped Alternative — Analyze Your Watch History Like Spotify Wrapped",
    "YouTube doesn't have a Wrapped feature like Spotify. TubeTrace is the best free alternative: get your viewing personality, top channels, and binge stats from Google Takeout.",
    "https://tubetrace.pages.dev/guide/youtube-wrapped-alternative",
  );

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            YouTube Wrapped Alternative: Analyze Your Watch History Like Spotify Wrapped
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Spotify Wrapped gives you a beautiful year-in-review every December. YouTube doesn't have
            an equivalent feature — but you can create your own with TubeTrace and your Google Takeout data.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">Does YouTube have a Wrapped feature?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            YouTube does not have a direct equivalent to Spotify Wrapped. YouTube has an official
            "Recap" feature that appears for some users at the end of the year, but it has strict
            requirements: you need a minimum amount of watch history, your history must be enabled,
            and it's not available to all users or in all regions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you don't see a YouTube Recap, or if you want a more detailed and persistent analysis,
            TubeTrace is the best free alternative — and it works with your complete history,
            not just the last year.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">TubeTrace vs YouTube Recap</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/60">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">TubeTrace</th>
                  <th className="text-center p-4 font-semibold">YouTube Recap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  ["Full history (all years)", true, false],
                  ["No login required", true, false],
                  ["100% private", true, false],
                  ["Works without watch history enabled", true, false],
                  ["Viewing personality type", true, false],
                  ["Binge session detection", true, false],
                  ["Activity heatmap", true, false],
                  ["Integrated in YouTube app", false, true],
                  ["Shareable highlight cards", true, "limited"],
                ].map(([feat, tt, yt]) => (
                  <tr key={String(feat)} className="text-muted-foreground">
                    <td className="p-4">{feat}</td>
                    <td className="p-4 text-center">
                      {tt === true ? <CheckCircle2 className="w-4 h-4 text-primary mx-auto" /> : typeof tt === "string" ? tt : <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </td>
                    <td className="p-4 text-center">
                      {yt === true ? <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" /> : typeof yt === "string" ? yt : <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">What TubeTrace shows you (like Spotify Wrapped)</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Your Viewing Personality",
                desc: 'Like Spotify\'s "music personality", TubeTrace identifies your YouTube archetype: Night Owl, Binge Watcher, Loyal Fan, Variety Seeker, Early Bird, Weekend Warrior, or Balanced Viewer.',
              },
              {
                title: "Top Channels",
                desc: "See which channels you've watched the most, how many videos you've seen from each, and what percentage of your total history they make up.",
              },
              {
                title: "Total Watch Time",
                desc: "Get an estimate of how many hours you've spent on YouTube across your entire history. Prepare yourself — the number is often surprising.",
              },
              {
                title: "Binge Sessions",
                desc: "TubeTrace detects your biggest binge sessions: the periods when you watched the most videos in a short window, including which channels you watched.",
              },
              {
                title: "Viewing Heatmap",
                desc: "A GitHub-style activity calendar showing every day you watched YouTube — with intensity indicating how much you watched each day.",
              },
              {
                title: "Peak Habits",
                desc: "When do you watch the most? TubeTrace breaks down your activity by hour, day of week, and month to reveal your YouTube habits.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">How to get your YouTube Wrapped equivalent</h2>
          <ol className="space-y-4">
            {[
              { title: "Export your history", desc: <>Go to <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">takeout.google.com</a>, select only YouTube and YouTube Music, and create an export. See the <Link href="/guide/how-to-export-youtube-watch-history" className="text-primary hover:underline">full guide</Link> for step-by-step instructions.</> },
              { title: "Upload to TubeTrace", desc: "Drop the downloaded ZIP or TGZ file on the TubeTrace home page. No extraction needed. Your file is processed entirely in your browser." },
              { title: "Explore your report", desc: "Your full YouTube wrapped equivalent appears instantly — personality, top channels, binge sessions, heatmap, and all your habits over the years." },
              { title: "Share your results", desc: "Use the Share button to generate a 1080×1080 image card with your key stats, perfect for sharing on social media." },
            ].map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mt-0.5">{i + 1}</span>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Create your YouTube Wrapped now</h2>
          <p className="text-muted-foreground mb-6">
            Free, private, and works with your complete YouTube history — not just the last year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Analyze My History
            </Link>
            <Link href="/sample" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              View Sample Report
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
