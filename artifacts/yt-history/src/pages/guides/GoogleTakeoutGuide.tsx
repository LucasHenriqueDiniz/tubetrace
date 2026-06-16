import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ExternalLink, FileJson, Archive } from "lucide-react";

export function GoogleTakeoutGuide() {
  usePageMeta(
    "Google Takeout YouTube History: How to Download and Analyze Your Data",
    "Learn how Google Takeout works for YouTube history, what files you get, how to analyze your watch history data, and what insights TubeTrace can show you.",
    "https://tubetrace.pages.dev/guide/google-takeout-youtube-history",
  );

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Google Takeout YouTube History: Download and Analyze Your Data
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Google Takeout lets you download a copy of everything YouTube has recorded about your
            activity — including your complete watch history. This guide explains what you get,
            what the files contain, and how to turn that data into meaningful insights with TubeTrace.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">What is Google Takeout?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Google Takeout (officially "Download your data") is a service that lets you export
            a copy of your Google account data — including Gmail, Drive, Photos, Maps, and YouTube.
            For YouTube specifically, you can download your watch history, search history, comments,
            likes, subscriptions, and playlists.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The export is a ZIP or TGZ archive that you download to your computer. The data
            belongs to you and is never processed by Google in any special way during the export.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">What files does Google Takeout include for YouTube?</h2>
          <div className="space-y-4">
            {[
              {
                icon: FileJson,
                file: "watch-history.json",
                desc: "The most important file for TubeTrace. Contains a list of every video you watched, including title, channel, and exact timestamp. This is the JSON format — structured, machine-readable, and the preferred input for TubeTrace.",
              },
              {
                icon: Archive,
                file: "watch-history.html",
                desc: "The same data in HTML format, readable in any browser. TubeTrace supports this format too, though JSON is preferred because it parses more reliably.",
              },
              {
                icon: Archive,
                file: "search-history.json / search-history.html",
                desc: "Your YouTube search queries with timestamps. TubeTrace does not analyze search history — only watch history.",
              },
            ].map(({ icon: Icon, file, desc }) => (
              <div key={file} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <code className="text-sm font-mono bg-muted px-2 py-0.5 rounded">{file}</code>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">What data does watch-history.json contain?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Each entry in your watch history JSON contains:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground mb-4">
            {[
              "Video title (as it was at the time of watching)",
              "Channel name and channel URL",
              "Exact timestamp of when you watched it (ISO 8601 format)",
              "Activity type (always 'YouTube watch history' for watched videos)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-primary shrink-0 mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Notably, the file does <strong className="text-foreground">not</strong> include video duration,
            view count, likes, or whether you watched the video completely. TubeTrace estimates
            5 minutes per video for total watch time calculations.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">How to download your YouTube history from Google Takeout</h2>
          <ol className="space-y-4">
            {[
              <>Go to <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">takeout.google.com <ExternalLink className="w-3 h-3" /></a> and sign in.</>,
              <>Click <strong>"Deselect all"</strong> — this prevents downloading gigabytes of data from every Google service.</>,
              <>Scroll down and check <strong>"YouTube and YouTube Music"</strong>.</>,
              <>Click the <strong>"All YouTube data included"</strong> button to see export options. Make sure "history" is enabled. Choose JSON format when offered.</>,
              <>Scroll to the bottom, click <strong>"Next step"</strong>, choose delivery by email, select ZIP format, and click <strong>"Create export"</strong>.</>,
              <>Wait for Google's email (usually minutes to a few hours), then download the ZIP file.</>,
            ].map((step, i) => (
              <li key={i} className="flex gap-4 list-none">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground mt-0.5">{i + 1}</span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">What can TubeTrace do with your Google Takeout data?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            TubeTrace reads your <code className="text-xs bg-muted px-1.5 py-0.5 rounded">watch-history.json</code> (or HTML) from the Takeout archive
            and computes a full set of analytics — entirely in your browser, without uploading anything:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Your YouTube viewing personality (7 types)",
              "Top channels ranked by video count",
              "Binge session detection (4+ videos in 45 min)",
              "Activity heatmap across all years",
              "Viewing patterns by hour, day, and month",
              "Longest consecutive viewing streak",
              "Total estimated watch time in hours",
              "Most active day ever and peak month",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground rounded-xl bg-card/60 border border-border/60 p-3">
                <span className="text-primary mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Analyze your Google Takeout data now</h2>
          <p className="text-muted-foreground mb-6">
            Drop your YouTube Takeout ZIP on TubeTrace and get your full analysis in seconds.
            100% private — your file never leaves your browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
              Upload My Takeout
            </Link>
            <Link href="/sample" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
              See Example Report
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
