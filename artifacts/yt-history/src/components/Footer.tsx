export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/60 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground/70">
          Tube<span className="text-primary">Trace</span>
        </span>
        <nav className="flex flex-wrap gap-4">
          <a
            href="/privacy.html"
            target="_blank"
            rel="noopener"
            className="hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </a>
          <a
            href="/terms.html"
            target="_blank"
            rel="noopener"
            className="hover:text-foreground transition-colors"
          >
            Termos de Uso
          </a>
          <a
            href="https://github.com/LucasHenriqueDiniz/tubetrace"
            target="_blank"
            rel="noopener"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
        <span className="hidden sm:block">© {new Date().getFullYear()} TubeTrace</span>
      </div>
    </footer>
  );
}
