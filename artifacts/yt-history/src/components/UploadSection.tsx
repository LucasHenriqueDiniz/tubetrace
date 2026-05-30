import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, ExternalLink, HelpCircle, Lock,
  MonitorSmartphone, Play, UploadCloud, Zap, Clock, Github,
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
    badge: "Google Takeout • 100% no seu navegador",
    headline: ["Entenda seu", "histórico do YouTube."],
    accent: "Privado. Local. Seu.",
    sub: "Faça upload do export do Google Takeout e descubra canais favoritos, maratonas, padrões de consumo e muito mais.",
    features: [
      { icon: Lock,              label: "100% privado",     desc: "Nada sai do seu dispositivo" },
      { icon: Zap,               label: "Instantâneo",      desc: "Resultado em segundos" },
      { icon: MonitorSmartphone, label: "Sem instalação",   desc: "Funciona em qualquer browser" },
    ],
    uploadLabel: "Arraste seu Takeout aqui",
    uploadSub: "ou clique para escolher",
    formats: ".zip · .tgz · .json · .html",
    demo: "Ver demo sem arquivo",
    guideBtn: "Como exportar meu histórico?",
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
    drag: "Solte aqui!",
    language: "PT",
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
    badge: "Google Takeout • 100% in your browser",
    headline: ["Understand your", "YouTube history."],
    accent: "Private. Local. Yours.",
    sub: "Upload your Google Takeout export and discover top channels, binge sessions, viewing patterns and much more.",
    features: [
      { icon: Lock,              label: "100% private",    desc: "Nothing leaves your device" },
      { icon: Zap,               label: "Instant",         desc: "Results in seconds" },
      { icon: MonitorSmartphone, label: "No install",      desc: "Works in any browser" },
    ],
    uploadLabel: "Drop your Takeout here",
    uploadSub: "or click to choose a file",
    formats: ".zip · .tgz · .json · .html",
    demo: "Try demo without a file",
    guideBtn: "How to export my history?",
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
    drag: "Drop it!",
    language: "EN",
  },
} as const;

type Locale = keyof typeof copy;

/* ─── dashboard mockup ──────────────────────────────────────────── */
function DashboardPreview() {
  const bars = [82, 64, 51, 38, 26];
  const channels = ["Kurzgesagt", "Linus Tech", "Fireship", "Theo - t3", "The Primeagen"];
  return (
    <motion.div
      initial={{ opacity: 0, x: 32, y: 8 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md xl:max-w-lg"
    >
      {/* outer glow */}
      <div className="absolute -inset-4 rounded-3xl bg-primary/8 blur-2xl" />

      {/* browser chrome */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl overflow-hidden">
        {/* titlebar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <div className="ml-3 flex-1 h-5 rounded bg-white/5 flex items-center px-2">
            <span className="text-[9px] text-white/25 font-mono">tubetrace.pages.dev</span>
          </div>
        </div>

        {/* dashboard content */}
        <div className="p-4 space-y-3">

          {/* personality banner */}
          <div className="rounded-xl bg-gradient-to-br from-indigo-900/70 to-purple-900/70 border border-white/8 p-4">
            <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Sua personalidade</p>
            <p className="text-lg font-extrabold text-white leading-none">🦉 Coruja Noturna</p>
            <p className="text-[11px] text-white/50 mt-1">Madrugada é o seu horário nobre.</p>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Vídeos", value: "12.4k" },
              { label: "Canais", value: "847" },
              { label: "Horas", value: "1.030h" },
              { label: "Dias ativos", value: "1.204" },
            ].map(s => (
              <div key={s.label} className="rounded-lg bg-white/4 border border-white/6 p-2.5 text-center">
                <p className="text-sm font-extrabold text-white">{s.value}</p>
                <p className="text-[9px] text-white/35 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* top channels */}
          <div className="rounded-xl bg-white/3 border border-white/6 p-3">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5">Top Canais</p>
            <div className="space-y-2">
              {channels.map((ch, i) => (
                <div key={ch} className="flex items-center gap-2">
                  <span className="text-[9px] text-white/25 w-3 shrink-0">{i + 1}</span>
                  <span className="text-[10px] text-white/60 w-20 truncate shrink-0">{ch}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${bars[i]}%` }}
                      transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: ["#e84545","#a855f7","#06b6d4","#f59e0b","#22c55e"][i] }}
                    />
                  </div>
                  <span className="text-[9px] text-white/30 w-6 text-right shrink-0">{bars[i]}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* heatmap preview */}
          <div className="rounded-xl bg-white/3 border border-white/6 p-3">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Atividade</p>
            <div className="flex gap-0.5">
              {Array.from({ length: 52 }, (_, w) => (
                <div key={w} className="flex flex-col gap-0.5">
                  {Array.from({ length: 7 }, (_, d) => {
                    const v = Math.random();
                    return (
                      <div
                        key={d}
                        className="w-1.5 h-1.5 rounded-[2px]"
                        style={{ backgroundColor: v > 0.8 ? "#e84545" : v > 0.6 ? "#e8454580" : v > 0.35 ? "#e8454530" : "#ffffff08" }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0d1117]/90 backdrop-blur px-4 py-2.5 shadow-xl"
      >
        <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-sm">🔒</div>
        <div>
          <p className="text-xs font-bold text-white leading-none">100% privado</p>
          <p className="text-[10px] text-white/40 mt-0.5">Sem uploads para servidores</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute -top-3 -right-3 flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-3 py-1.5 shadow-lg"
      >
        <Zap className="w-3 h-3 text-primary" />
        <p className="text-[11px] font-bold text-primary">Resultado em segundos</p>
      </motion.div>
    </motion.div>
  );
}

/* ─── main component ─────────────────────────────────────────────── */
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

  /* loading */
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[#080c14]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 rounded-full border-[3px] border-primary/20 border-t-primary"
        />
        <p className="text-sm text-white/40 animate-pulse">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080c14] overflow-hidden">

      {/* ── ambient glows ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[110px]" />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/6 blur-[100px]" />
      </div>

      {/* ── navbar ── */}
      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-5 max-w-7xl mx-auto w-full">
        <span className="text-xl font-extrabold tracking-tight text-white">
          Tube<span className="text-primary">Trace</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/LucasHenriqueDiniz/tubetrace"
            target="_blank" rel="noopener"
            className="text-white/30 hover:text-white/70 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-1 text-xs">
            {(["pt-BR", "en"] as Locale[]).map(opt => (
              <button
                key={opt}
                onClick={() => setLocale(opt)}
                className={`rounded-full px-3 py-1.5 font-bold transition-all ${
                  locale === opt
                    ? "bg-primary text-white shadow-sm"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {opt === "pt-BR" ? "PT" : "EN"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── hero + split ── */}
      <main className="relative z-10 flex-1 flex items-center px-6 sm:px-10 py-8 max-w-7xl mx-auto w-full">
        <div className="w-full grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: content ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t.badge}
            </div>

            {/* headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.07] text-white">
                {t.headline[0]}
                <br />
                {t.headline[1]}
              </h1>
              <p className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-primary mt-1">
                {t.accent}
              </p>
            </div>

            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-md">
              {t.sub}
            </p>

            {/* features */}
            <div className="flex flex-col gap-2.5">
              {t.features.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white">{label}</span>
                    <span className="text-sm text-white/35 ml-2">{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* error */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* upload zone */}
            <div
              {...getRootProps()}
              className={`
                relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 select-none
                flex flex-col items-center gap-3 py-8 px-6 text-center group
                ${isDragActive
                  ? "border-primary bg-primary/10 scale-[1.01]"
                  : "border-white/12 hover:border-primary/50 hover:bg-white/3"
                }
              `}
            >
              <input {...getInputProps()} />
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isDragActive ? "bg-primary text-white" : "bg-white/6 text-white/40 group-hover:bg-primary/20 group-hover:text-primary"
              }`}>
                <UploadCloud className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-white text-base">
                  {isDragActive ? t.drag : t.uploadLabel}
                </p>
                <p className="text-white/35 text-sm mt-0.5">{t.uploadSub}</p>
              </div>
              <p className="text-white/20 text-xs font-mono">{t.formats}</p>
            </div>

            {/* actions row */}
            <div className="flex items-center gap-5 flex-wrap">
              <button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setData(generateDemoData()); setLoading(false); }, 400);
                }}
                className="flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-primary" />
                {t.demo}
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-1.5 text-xs text-white/25 hover:text-white/50 transition-colors">
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
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-3 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground">{t.waitNote}</p>
                  </div>
                  <a
                    href="https://takeout.google.com/"
                    target="_blank" rel="noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white w-full"
                  >
                    {t.openTakeout}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          {/* ── RIGHT: mockup ── */}
          <div className="hidden lg:flex justify-center items-center relative">
            <DashboardPreview />
          </div>

        </div>
      </main>
    </div>
  );
}
