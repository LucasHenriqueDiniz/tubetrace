import { Github } from "lucide-react";
import { Link } from "wouter";
import { Footer } from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/favicon.svg" alt="TubeTrace" className="h-9 w-9 rounded-xl" />
            <span className="text-lg font-extrabold tracking-tight">
              Tube<span className="text-primary">Trace</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="/sample" className="hover:text-foreground transition-colors">
              Sample Report
            </Link>
            <Link href="/guide/how-to-export-youtube-watch-history" className="hover:text-foreground transition-colors">
              Guide
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/LucasHenriqueDiniz/tubetrace"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Analyze My History
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
