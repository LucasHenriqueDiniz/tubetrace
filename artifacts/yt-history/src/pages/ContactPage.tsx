import { PageLayout } from "@/components/PageLayout";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Github, Mail } from "lucide-react";
import { Link } from "wouter";

export function ContactPage() {
  usePageMeta(
    "Contact — TubeTrace",
    "Get in touch with the TubeTrace team. Report bugs, suggest features, or ask questions about your YouTube watch history analysis.",
    "https://tubetrace.pages.dev/contact",
  );

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-12 md:py-20">

        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Found a bug? Have a suggestion? Want to contribute? We'd love to hear from you.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <a
            href="mailto:lucas.diniz.hdo@gmail.com"
            className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">lucas.diniz.hdo@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/LucasHenriqueDiniz/tubetrace/issues"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 hover:border-primary/40 hover:bg-card transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Github className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold">GitHub Issues</p>
              <p className="text-sm text-muted-foreground">
                Report bugs or request features on GitHub
              </p>
            </div>
          </a>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card/60 p-6 mb-8">
          <h2 className="font-bold mb-3">Before you write</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              Check the <Link href="/faq" className="text-primary hover:underline">FAQ</Link> — your question may already be answered.
            </li>
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              Read the <Link href="/guide/how-to-export-youtube-watch-history" className="text-primary hover:underline">export guide</Link> if you're having trouble with your Google Takeout file.
            </li>
            <li className="flex gap-2">
              <span className="text-primary shrink-0">→</span>
              TubeTrace is open-source — pull requests are welcome on GitHub.
            </li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground">
          TubeTrace is a side project maintained by a solo developer. Response times
          may vary, but all messages are read.
        </p>
      </div>
    </PageLayout>
  );
}
