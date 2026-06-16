import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "wouter";
import { ExternalLink, Clock, CheckCircle2, AlertCircle } from "lucide-react";

export function HowToExportGuide() {
  usePageMeta(
    "How to Export Your YouTube Watch History with Google Takeout",
    "Step-by-step guide to exporting your YouTube watch history using Google Takeout. Download your data as a ZIP file and analyze it with TubeTrace.",
    "https://tubetrace.pages.dev/guide/how-to-export-youtube-watch-history",
  );

  return (
    <PageLayout>
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-4">
          <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← FAQ
          </Link>
        </div>

        <header className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Guide</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            How to Export Your YouTube Watch History with Google Takeout
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            <strong>Quick answer:</strong> Go to{" "}
            <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              takeout.google.com
            </a>
            , deselect everything, select YouTube and YouTube Music, create the export,
            download the ZIP, and upload it to TubeTrace. The whole process takes about
            5–10 minutes plus the time Google needs to prepare the file.
          </p>
        </header>

        <div className="flex items-center gap-3 rounded-2xl bg-card/60 border border-border/60 p-4 mb-10">
          <Clock className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Time to complete:</strong> 5–10 minutes setup.
            Google usually delivers the file within a few minutes to a few hours depending on your history size.
          </p>
        </div>

        {/* Steps */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Step-by-step instructions</h2>

          <ol className="space-y-6">
            {[
              {
                title: "Open Google Takeout",
                body: (
                  <>
                    Go to{" "}
                    <a href="https://takeout.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                      takeout.google.com <ExternalLink className="w-3 h-3" />
                    </a>{" "}
                    and sign in with the Google account you use for YouTube. Make sure you're signed into the correct account — if you have multiple Google accounts, check the profile icon in the top-right corner.
                  </>
                ),
              },
              {
                title: 'Click "Deselect all"',
                body: "At the top of the product list, click the 'Deselect all' button. This prevents Google from including every Google product you use, which would result in a massive export that takes much longer to prepare.",
              },
              {
                title: "Select YouTube and YouTube Music",
                body: "Scroll down the product list until you find 'YouTube and YouTube Music'. Check the box next to it. This is the only product you need to select for TubeTrace.",
              },
              {
                title: "Configure the export options",
                body: (
                  <>
                    Click the 'All YouTube data included' button next to YouTube and YouTube Music to see the options. Make sure 'history' is checked. When given the choice between JSON and HTML format, <strong>choose JSON</strong> — it's more structured and TubeTrace can extract more data from it.
                  </>
                ),
              },
              {
                title: "Create the export",
                body: "Scroll to the bottom and click 'Next step'. Choose your preferred delivery method (email link is simplest), select the file type (.zip is recommended), choose a maximum file size (2 GB is fine), and click 'Create export'.",
              },
              {
                title: "Wait for Google's email",
                body: "Google will email you when the export is ready. For YouTube history, this usually takes a few minutes. If your account has years of history, it may take up to a few hours. You'll receive a download link in your inbox.",
              },
              {
                title: "Download the file",
                body: "Click the download link in the email. Save the .zip or .tgz file to your computer. You do not need to open or extract it.",
              },
              {
                title: "Upload to TubeTrace",
                body: (
                  <>
                    Go to the{" "}
                    <Link href="/" className="text-primary hover:underline">TubeTrace home page</Link>
                    {" "}and drop the downloaded file into the upload area. Your report will appear in a few seconds, processed entirely in your browser.
                  </>
                ),
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* JSON vs HTML */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4">JSON vs HTML: which file should I choose?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <h3 className="font-bold mb-2 text-primary">JSON (Recommended)</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Structured data with timestamps</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Easier to parse reliably</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Available on most Google accounts</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" /> File: watch-history.json</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card/60 p-5">
              <h3 className="font-bold mb-2">HTML</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /> Also supported by TubeTrace</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /> Human-readable in a browser</li>
                <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /> Dates may be in Portuguese (BRT)</li>
                <li className="flex gap-2"><AlertCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" /> File: watch-history.html</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common problems */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">Common problems and solutions</h2>
          <div className="space-y-4">
            {[
              {
                problem: "TubeTrace says 'No history file found'",
                solution: "Make sure you selected 'history' in the YouTube export options (Step 4). If you only exported subscriptions or playlists, the watch history file won't be present.",
              },
              {
                problem: "The export says 'No entries'",
                solution: "YouTube watch history may be paused on your account. Check myaccount.google.com/activitycontrols to see if 'YouTube History' is enabled. If auto-delete is set to 3 months, older entries will be gone.",
              },
              {
                problem: "The ZIP is too large to upload",
                solution: "If you selected multiple Google products, your archive may be very large. Create a new export selecting only 'YouTube and YouTube Music'. The resulting file will be much smaller.",
              },
              {
                problem: "Google's export email never arrived",
                solution: "Check your spam folder. If nothing after 24 hours, go back to takeout.google.com and check 'Manage exports' to see the status. Sometimes creating the export again helps.",
              },
            ].map(({ problem, solution }) => (
              <div key={problem} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-muted-foreground shrink-0" />
                  {problem}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Does exporting my data delete anything from my YouTube account?",
                a: "No. Google Takeout creates a copy of your data. Your YouTube history, subscriptions, and account remain completely unchanged.",
              },
              {
                q: "Can I request my data more than once?",
                a: "Yes. You can create as many exports as you want from takeout.google.com. Each export reflects your data at the time the export was created.",
              },
              {
                q: "Is it safe to upload my watch history to TubeTrace?",
                a: "Yes. TubeTrace processes the file locally in your browser and never sends it to any server. See our privacy policy for full details.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-border/60 bg-card/60 p-5">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Ready to analyze your history?</h2>
          <p className="text-muted-foreground mb-6">
            Once you have your Google Takeout file, drop it on TubeTrace and see your full report in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Upload My Export
            </Link>
            <Link
              href="/sample"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary transition-colors"
            >
              View Sample Report First
            </Link>
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
