import { Github } from "lucide-react";

type Locale = "pt-BR" | "en";

interface HeaderProps {
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25">
            {/* play triangle */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {/* pulse dot */}
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-white ring-2 ring-primary" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Tube<span className="text-primary">Trace</span>
          </span>
        </a>

        {/* right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/LucasHenriqueDiniz/tubetrace"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Github className="w-[18px] h-[18px]" />
          </a>

          {/* language toggle */}
          <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-card/50 p-1 text-xs">
            {(["pt-BR", "en"] as Locale[]).map((opt) => (
              <button
                key={opt}
                onClick={() => onLocaleChange(opt)}
                className={`rounded-full px-2.5 py-1 font-bold transition-all ${
                  locale === opt
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt === "pt-BR" ? "PT" : "EN"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
