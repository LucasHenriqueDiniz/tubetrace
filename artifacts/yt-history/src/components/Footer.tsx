import { Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-bold text-foreground/80">
              Tube<span className="text-primary">Trace</span>
            </span>
            <p className="mt-2 text-xs text-muted-foreground max-w-xs leading-relaxed">
              Private YouTube watch history analyzer. Your data never leaves your browser.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">Tools</p>
              <nav className="space-y-1.5">
                <div><Link href="/" className="hover:text-foreground transition-colors">Analyze History</Link></div>
                <div><Link href="/sample" className="hover:text-foreground transition-colors">Sample Report</Link></div>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">Guides</p>
              <nav className="space-y-1.5">
                <div><Link href="/guide/how-to-export-youtube-watch-history" className="hover:text-foreground transition-colors">Export YouTube History</Link></div>
                <div><Link href="/guide/google-takeout-youtube-history" className="hover:text-foreground transition-colors">Google Takeout Guide</Link></div>
                <div><Link href="/guide/youtube-wrapped-alternative" className="hover:text-foreground transition-colors">YouTube Wrapped Alt</Link></div>
                <div><Link href="/guide/youtube-recap-not-showing" className="hover:text-foreground transition-colors">Recap Not Showing</Link></div>
                <div><Link href="/guide/is-youtube-watch-history-private" className="hover:text-foreground transition-colors">Is History Private?</Link></div>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-foreground/70 mb-2 uppercase tracking-wider text-[10px]">Company</p>
              <nav className="space-y-1.5">
                <div><Link href="/about" className="hover:text-foreground transition-colors">About</Link></div>
                <div><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></div>
                <div><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></div>
                <div><a href="/privacy.html" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">Privacy Policy</a></div>
                <div><a href="/terms.html" target="_blank" rel="noopener" className="hover:text-foreground transition-colors">Terms</a></div>
                <div>
                  <a
                    href="https://github.com/LucasHenriqueDiniz/tubetrace"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground/60">
          <span>© {new Date().getFullYear()} TubeTrace. Not affiliated with YouTube or Google.</span>
          <span>Processed entirely in your browser — no data uploaded.</span>
        </div>
      </div>
    </footer>
  );
}
