import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, ExternalLink, HelpCircle, Lock, Zap, MonitorSmartphone,
  Play, UploadCloud, Clock, User, BarChart3, Flame, CalendarDays,
  Download, MousePointerClick, Sparkles, ShieldCheck,
} from "lucide-react";
import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { useHistoryStore } from "@/lib/store";
import {
  generateDemoData, HistoryParseError,
  type HistoryParseErrorCode, parseHistoryFile,
} from "@/lib/parser";

/* ─── copy ──────────────────────────────────────────────────────── */
const copy = {
  "pt-BR": {
    loading: "Analisando seu histórico…",
    parseError: "Não consegui ler o arquivo. Envie um ZIP/TGZ do Google Takeout.",
    errors: {
      UNSUPPORTED_FORMAT: "Formato não suportado. Use .zip, .tgz, .json ou .html.",
      ARCHIVE_TOO_LARGE: "Arquivo muito grande. Gere um Takeout só com YouTube.",
      NO_HISTORY_FILE: "Histórico não encontrado. Selecione só YouTube no Takeout.",
      NO_ENTRIES: "Arquivo sem vídeos assistidos. Verifique se o histórico estava ativo.",
    },
    badge: "100% no seu navegador • código aberto",
    title1: "Entenda seu histórico",
    title2: "do YouTube.",
    sub: "Faça upload do export do Google Takeout e transforme anos de vídeos assistidos em insights visuais — canais favoritos, maratonas, padrões de consumo e muito mais.",
    uploadLabel: "Arraste seu Takeout aqui",
    uploadSub: "ou clique para escolher um arquivo",
    formats: ".zip · .tgz · .json · .html",
    drag: "Solte aqui!",
    demo: "Ver demo sem arquivo",
    guideBtn: "Como exportar?",
    trust: [
      { icon: Lock,              label: "100% privado" },
      { icon: Zap,               label: "Instantâneo" },
      { icon: MonitorSmartphone, label: "Sem instalação" },
    ],
    discoverTitle: "O que você vai descobrir",
    discoverSub: "Cada export vira um painel completo sobre seus hábitos de consumo.",
    discover: [
      { icon: User,        title: "Sua personalidade", desc: "Coruja noturna? Maratonador? Descubra seu perfil de consumo." },
      { icon: BarChart3,   title: "Canais favoritos",  desc: "Ranking dos criadores que mais dominaram o seu tempo." },
      { icon: Flame,       title: "Sessões de binge",  desc: "As maiores maratonas que você fez sem nem perceber." },
      { icon: CalendarDays,title: "Padrões de tempo",  desc: "Calendário de atividade, horários e dias mais ativos." },
    ],
    howTitle: "Como funciona",
    how: [
      { icon: Download,           title: "Exporte do Takeout", desc: "Baixe seu histórico do YouTube pelo Google Takeout." },
      { icon: UploadCloud,        title: "Faça o upload",      desc: "Arraste o arquivo aqui. Ele nunca sai do seu navegador." },
      { icon: Sparkles,           title: "Veja os insights",   desc: "Em segundos, seu painel completo está pronto." },
    ],
    privacyTitle: "Seus dados nunca saem do seu dispositivo",
    privacySub: "Todo o processamento acontece localmente no seu navegador. Nada é enviado, armazenado ou compartilhado com servidores.",
    guideTitle: "Exportar histórico do YouTube",
    guideDesc: "O Google pode demorar alguns minutos (ou horas) para gerar o arquivo.",
    steps: [
      "Abra takeout.google.com com sua conta do YouTube.",
      'Clique em "Desmarcar tudo".',
      "Role até YouTube e YouTube Music e marque só esse produto.",
      "Prefira o formato JSON quando disponível.",
      "Clique em Próxima etapa → Criar exportação e aguarde o e-mail.",
      "Baixe o .zip e arraste aqui. Não precisa extrair.",
    ],
    openTakeout: "Abrir Google Takeout",
    waitNote: "Exports grandes podem demorar para ficar prontos.",
  },
  en: {
    loading: "Analyzing your history…",
    parseError: "Could not read the file. Upload a Google Takeout ZIP.",
    errors: {
      UNSUPPORTED_FORMAT: "Unsupported format. Use .zip, .tgz, .json, or .html.",
      ARCHIVE_TOO_LARGE: "File too large. Create a Takeout with only YouTube selected.",
      NO_HISTORY_FILE: "YouTube history not found. Select only YouTube in Takeout.",
      NO_ENTRIES: "No watched videos detected. Check if watch history was enabled.",
    },
    badge: "100% in your browser • open source",
    title1: "Understand your",
    title2: "YouTube history.",
    sub: "Upload your Google Takeout export and turn years of watched videos into visual insights — top channels, binge sessions, viewing patterns and much more.",
    uploadLabel: "Drop your Takeout here",
    uploadSub: "or click to choose a file",
    formats: ".zip · .tgz · .json · .html",
    drag: "Drop it!",
    demo: "View demo without a file",
    guideBtn: "How to export?",
    trust: [
      { icon: Lock,              label: "100% private" },
      { icon: Zap,               label: "Instant" },
      { icon: MonitorSmartphone, label: "No install" },
    ],
    discoverTitle: "What you'll discover",
    discoverSub: "Every export becomes a complete dashboard about your viewing habits.",
    discover: [
      { icon: User,        title: "Your personality", desc: "Night owl? Binge watcher? Find out your viewing profile." },
      { icon: BarChart3,   title: "Top channels",     desc: "Ranking of the creators that dominated your time." },
      { icon: Flame,       title: "Binge sessions",   desc: "The biggest marathons you did without even noticing." },
      { icon: CalendarDays,title: "Time patterns",    desc: "Activity calendar, peak hours and most active days." },
    ],
    howTitle: "How it works",
    how: [
      { icon: Download,    title: "Export from Takeout", desc: "Download your YouTube history via Google Takeout." },
      { icon: UploadCloud, title: "Upload it",           desc: "Drag the file here. It never leaves your browser." },
      { icon: Sparkles,    title: "See the insights",    desc: "In seconds, your complete dashboard is ready." },
    ],
    privacyTitle: "Your data never leaves your device",
    privacySub: "All processing happens locally in your browser. Nothing is sent, stored or shared with servers.",
    guideTitle: "Export YouTube history",
    guideDesc: "Google can take minutes or hours to prepare the file.",
    steps: [
      "Open takeout.google.com with your YouTube account.",
      'Click "Deselect all".',
      "Scroll to YouTube and YouTube Music and select only that.",
      "Choose JSON format when available.",
      "Click Next step → Create export and wait for Google's email.",
      "Download the .zip and drag it here. No extraction needed.",
    ],
    openTakeout: "Open Google Takeout",
    waitNote: "Large exports can take time before Google makes them available.",
  },
} as const;

type Locale = keyof typeof copy;

export function UploadSection() {
  const { setLoading, setData, setError, error, isLoading } = useHistoryStore();
  const [locale, setLocale] = useState<Locale>(() =>
    navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en"
  );
  const t = copy[locale];

  useEffect(() => { document.documentElement.lang = locale; }, [locale]);

  const onDrop = useCallback(async (files: File[]) => {
    const file = files[0];
    if (!file) return;
    try {
      setLoading(true);
      setError(null);
      await new Promise(r => setTimeout(r, 80));
      setData(await parseHistoryFile(file));
    } catch (err) {
      if (err instanceof HistoryParseError) setError(t.errors[err.code as HistoryParseErrorCode]);
      else setError(t.parseError);
    } finally { setLoading(false); }
  }, [setData, setLoading, setError, t.errors, t.parseError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"], "text/html": [".html"],
      "application/zip": [".zip"], "application/x-zip-compressed": [".zip"],
      "application/gzip": [".tgz", ".tar.gz"], "application/x-gzip": [".tgz", ".tar.gz"],
      "application/octet-stream": [".tgz", ".tar.gz"],
    },
    multiple: false,
  });

  const handleDemo = () => {
    setLoading(true);
    setTimeout(() => { setData(generateDemoData()); setLoading(false); }, 400);
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 rounded-full border-[3px] border-primary/20 border-t-primary"
        />
        <p className="text-sm text-muted-foreground animate-pulse">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="relative flex-1">

      {/* ── nav ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-8 py-5 max-w-6xl mx-auto w-full">
        <span className="text-lg font-extrabold tracking-tight">
          Tube<span className="text-primary">Trace</span>
        </span>
        <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-card/40 p-1 text-xs">
          {(["pt-BR", "en"] as Locale[]).map(opt => (
            <button
              key={opt}
              onClick={() => setLocale(opt)}
              className={`rounded-full px-3 py-1.5 font-bold transition-all ${
                locale === opt ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt === "pt-BR" ? "PT" : "EN"}
            </button>
          ))}
        </div>
      </nav>

      {/* ════ HERO ════ */}
      <section className="relative overflow-hidden">
        {/* glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[110px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 pt-12 pb-20 flex flex-col items-center text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {t.badge}
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
          >
            <span className="text-foreground">{t.title1}</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">{t.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="text-muted-foreground text-base sm:text-lg leading-relaxed mt-5 max-w-xl"
          >
            {t.sub}
          </motion.p>

          {/* error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="w-full max-w-md mt-7 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive text-left"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* upload card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.15 }}
            className="w-full max-w-md mt-9"
          >
            <div
              {...getRootProps()}
              className={`
                relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 select-none group
                flex flex-col items-center gap-3 py-10 px-6
                ${isDragActive
                  ? "border-primary bg-primary/8 scale-[1.01]"
                  : "border-border hover:border-primary/50 bg-card/50 hover:bg-card backdrop-blur-sm"
                }
              `}
            >
              <input {...getInputProps()} />
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                isDragActive ? "bg-primary text-white" : "bg-secondary text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary"
              }`}>
                <UploadCloud className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{isDragActive ? t.drag : t.uploadLabel}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.uploadSub}</p>
              </div>
              <p className="text-[11px] text-muted-foreground/40 font-mono mt-1">{t.formats}</p>
            </div>

            {/* actions */}
            <div className="flex items-center justify-center gap-4 mt-5">
              <button onClick={handleDemo} className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                <Play className="w-3.5 h-3.5 text-primary" />
                {t.demo}
              </button>
              <span className="text-border">·</span>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <HelpCircle className="w-3.5 h-3.5" />
                    {t.guideBtn}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl max-h-[88vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{t.guideTitle}</DialogTitle>
                    <DialogDescription>{t.guideDesc}</DialogDescription>
                  </DialogHeader>
                  <ol className="grid gap-3 mt-2">
                    {t.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 items-start rounded-xl bg-secondary/50 px-4 py-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{i + 1}</span>
                        <span className="text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-3 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground">{t.waitNote}</p>
                  </div>
                  <a href="https://takeout.google.com/" target="_blank" rel="noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white w-full">
                    {t.openTakeout}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </DialogContent>
              </Dialog>
            </div>

            {/* trust */}
            <div className="flex items-center justify-center gap-5 mt-7">
              {t.trust.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════ DISCOVER ════ */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 py-16 border-t border-border/40">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.discoverTitle}</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">{t.discoverSub}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.discover.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/40 hover:bg-card/70 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 py-16 border-t border-border/40">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.howTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.how.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ PRIVACY BAND ════ */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-8 sm:p-12 text-center">
          <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight max-w-lg">{t.privacyTitle}</h2>
            <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">{t.privacySub}</p>
            <button
              onClick={handleDemo}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors"
            >
              <MousePointerClick className="w-4 h-4" />
              {t.demo}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
