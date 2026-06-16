import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ShieldCheck, Eye, EyeOff, ExternalLink } from "lucide-react";

export function IsYoutubeHistoryPrivate() {
  usePageMeta(
    "Is YouTube Watch History Private? Who Can See What You Watch",
    "Learn who can see your YouTube watch history, whether it's private by default, how to pause or delete it, and how TubeTrace keeps your data private.",
    "https://tubetrace.pages.dev/guide/is-youtube-watch-history-private",
  );

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Is YouTube Watch History Private? Who Can See What You Watch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong>Short answer:</strong> Yes, your YouTube watch history is private by default.
            Only you can see it when signed into your account. Google can see it for advertising purposes,
            but other YouTube users cannot.
          </p>
        </header>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Who can see your YouTube watch history?</h2>
          <div className="space-y-4">
            {[
              {
                icon: EyeOff,
                title: "Other YouTube users",
                answer: "Cannot see it",
                color: "text-green-500",
                desc: "Your watch history is not public. No other YouTube user — including channel creators — can see which videos you have watched.",
              },
              {
                icon: Eye,
                title: "Google / YouTube",
                answer: "Can see it",
                color: "text-yellow-500",
                desc: "Google uses your watch history to personalize recommendations, targeted advertising, and its own analytics. This is described in Google's privacy policy. You can review and delete this data at myaccount.google.com/data-and-privacy.",
              },
              {
                icon: EyeOff,
                title: "Advertisers",
                answer: "Cannot see your history directly",
                color: "text-green-500",
                desc: "Advertisers do not receive your watch history. Google uses it internally to show you relevant ads, but the raw data is not sold or provided directly to advertisers.",
              },
              {
                icon: Eye,
                title: "Shared accounts / family",
                answer: "Can see it if they use your account",
                color: "text-yellow-500",
                desc: "If multiple people share a Google account or a device where your account is logged in, they can see your watch history in the YouTube History page. Consider using separate accounts or YouTube's Incognito mode.",
              },
              {
                icon: EyeOff,
                title: "TubeTrace",
                answer: "Cannot see it",
                color: "text-green-500",
                desc: "TubeTrace processes your exported file entirely in your browser. The data never leaves your device and is not sent to any server. TubeTrace has no access to your YouTube account.",
              },
            ].map(({ icon: Icon, title, answer, color, desc }) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={`w-5 h-5 ${color} shrink-0`} />
                  <div>
                    <span className="font-semibold">{title}</span>
                    <span className={`ml-2 text-xs font-semibold ${color}`}>— {answer}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">How to make your YouTube watch history more private</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">Pause watch history</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                You can pause YouTube from recording new watches. Go to{" "}
                <a href="https://myaccount.google.com/activitycontrols" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  myaccount.google.com/activitycontrols <ExternalLink className="w-3 h-3" />
                </a>
                {" "}and toggle "YouTube History" off. Note: this also stops recommendations from improving.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">Enable auto-delete</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Set YouTube to automatically delete your history after 3 or 18 months. In the same
                Activity Controls page, look for "Auto-delete" under YouTube History.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">Use Incognito mode on YouTube</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                In the YouTube mobile app, tap your profile picture and select "Turn on Incognito".
                Videos watched in Incognito mode are not added to your history. On desktop, use your
                browser's private browsing mode while logged out of YouTube.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">Delete specific videos or clear all history</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Go to{" "}
                <a href="https://www.youtube.com/feed/history" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  youtube.com/feed/history <ExternalLink className="w-3 h-3" />
                </a>
                {" "}to browse and delete individual videos, or clear your entire watch history.
                Note: deleted history cannot be recovered.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">Is it safe to analyze my YouTube history with TubeTrace?</h2>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold mb-2">Yes — TubeTrace is 100% client-side</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  TubeTrace processes your Google Takeout export entirely in your browser using
                  JavaScript. Your file is never uploaded to any server, stored in any database,
                  or transmitted over the network. Once you close the tab, the data is gone.
                </p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground pl-9">
              {[
                "No account or login required",
                "No cookies that store your history",
                "No server receives your data",
                "Open source — you can verify the code on GitHub",
                "Works offline once the page is loaded",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Explore your history privately</h2>
          <p className="text-muted-foreground mb-6">
            TubeTrace gives you full visibility into your viewing habits without sharing any
            data with anyone. Export your history from Google Takeout and analyze it safely.
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
