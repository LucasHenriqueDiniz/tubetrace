import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, ExternalLink, HelpCircle, Lock,
  MonitorSmartphone, Play, UploadCloud, Zap, Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { useHistoryStore } from "@/lib/store";
import {
  generateDemoData, HistoryParseError,
  type HistoryParseErrorCode, parseHistoryFile,
} from "@/lib/parser";

/* ── copy ────────────────────────────────────────────────────────── */
const copy = {
  "pt-BR": {
    loading: "Analisando seu histórico…",
    parseError: "Não consegui ler o arquivo. Envie um ZIP/TGZ do Google Takeout ou um histórico válido do YouTube.",
    errors: {
      UNSUPPORTED_FORMAT: "Formato não suportado. Envie .zip, .tgz, .tar.gz, .json ou .html.",
      ARCHIVE_TOO_LARGE: "Arquivo grande demais. Gere outro Takeout selecionando só YouTube e YouTube Music.",
      NO_HISTORY_FILE: "Histórico do YouTube não encontrado. Selecione só YouTube e YouTube Music no Takeout.",
      NO_ENTRIES: "Arquivo encontrado, mas sem vídeos assistidos. Verifique se o histórico estava ativo.",
    },
    headline1: "Entenda seu histórico.",
    headline2: "Privado. Local. Seu.",
    sub: "Faça upload do seu Google Takeout e descubra canais favoritos, maratonas, padrões de consumo e muito mais — tudo processado no seu navegador.",
    features: [
      { icon: Lock,             label: "100% privado",      desc: "Seus dados nunca saem do seu dispositivo" },
      { icon: Zap,              label: "Instantâneo",       desc: "Resultado em segundos, sem espera" },
      { icon: MonitorSmartphone, label: "Funciona em tudo", desc: "Qualquer browser moderno, sem instalar nada" },
    ],
    uploadIdle: "Arraste o ZIP do Takeout ou clique para escolher",
    uploadActive: "Solte o arquivo aqui",
    formats: ".zip · .tgz · .json · .html",
    tryIt: "ou experimente com dados demo",
    demo: "Carregar demo",
    guideBtn: "Como exportar meu histórico",
    guideTitle: "Exportar histórico do YouTube",
    guideDesc: "O Google pode demorar alguns minutos (ou horas) para gerar o arquivo, dependendo do tamanho da sua conta.",
    steps: [
      "Abra takeout.google.com com a conta do YouTube.",
      'Clique em "Desmarcar tudo" para evitar exportar tudo.',
      "Role até YouTube e YouTube Music e marque somente esse produto.",
      'Nas opções, prefira o formato JSON quando disponível.',
      "Clique em Próxima etapa → Criar exportação e aguarde o e-mail do Google.",
      "Baixe o .zip e arraste direto aqui. Não precisa extrair.",
    ],
    openTakeout: "Abrir Google Takeout",
    waitNote: "Exports grandes podem demorar para ficar prontos no Google.",
    language: "Idioma",
  },
  en: {
    loading: "Analyzing your history…",
    parseError: "Could not read the file. Upload a Google Takeout ZIP/TGZ or a valid YouTube history file.",
    errors: {
      UNSUPPORTED_FORMAT: "Unsupported format. Upload .zip, .tgz, .tar.gz, .json, or .html.",
      ARCHIVE_TOO_LARGE: "File too large. Create a new Takeout with only YouTube and YouTube Music selected.",
      NO_HISTORY_FILE: "YouTube history not found inside this file. Select only YouTube in Takeout.",
      NO_ENTRIES: "File found but no watched videos detected. Check if watch history was enabled.",
    },
    headline1: "Understand your history.",
    headline2: "Private. Local. Yours.",
    sub: "Upload your Google Takeout and discover top channels, binge sessions, viewing patterns and more — all processed right in your browser.",
    features: [
      { icon: Lock,              label: "100% private",    desc: "Your data never leaves your device" },
      { icon: Zap,               label: "Instant",         desc: "Results in seconds, no waiting" },
      { icon: MonitorSmartphone, label: "Works everywhere", desc: "Any modern browser, nothing to install" },
    ],
    uploadIdle: "Drop your Takeout ZIP here or click to choose",
    uploadActive: "Drop it!",
    formats: ".zip · .tgz · .json · .html",
    tryIt: "or try with demo data",
    demo: "Load demo",
    guideBtn: "How to export my history",
    guideTitle: "Export YouTube history",
    guideDesc: "Google can take minutes or hours to prepare the file depending on your account size.",
    steps: [
      "Open takeout.google.com with your YouTube account.",
      'Click "Deselect all" to avoid exporting everything.',
      "Scroll to YouTube and YouTube Music and select only that.",
      "Choose JSON format when available.",
      "Click Next step → Create export and wait for Google's email.",
      "Download the .zip and drag it here. No extraction needed.",
    ],
    openTakeout: "Open Google Takeout",
    waitNote: "Large exports can take time before Google makes them available.",
    language: "Language",
  },
} as const;

type Locale = keyof typeof copy;

/* ── component ───────────────────────────────────────────────────── */
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
    } finally {
      setLoading(false);
    }
  }, [setData, setLoading, setError, t.errors, t.parseError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
      "text/html": [".html"],
      "application/zip": [".zip"],
      "application/x-zip-compressed": [".zip"],
      "application/gzip": [".tgz", ".tar.gz"],
      "application/x-gzip": [".tgz", ".tar.gz"],
      "application/octet-stream": [".tgz", ".tar.gz"],
    },
    multiple: false,
  });

  /* loading screen */
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-background">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          className="w-14 h-14 rounded-full border-[3px] border-primary/20 border-t-primary"
        />
        <p className="text-muted-foreground font-medium animate-pulse">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">

      {/* ── ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[90px]" />
      </div>

      {/* ── subtle grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-5xl mx-auto w-full">
        <span className="text-lg font-extrabold tracking-tight">
          Tube<span className="text-primary">Trace</span>
        </span>
        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm p-1 text-xs">
          {(["pt-BR", "en"] as Locale[]).map(opt => (
            <button
              key={opt}
              onClick={() => setLocale(opt)}
              className={`rounded-full px-3 py-1 font-semibold transition-all ${
                locale === opt
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt === "pt-BR" ? "PT" : "EN"}
            </button>
          ))}
        </div>
      </nav>

      {/* ── hero ── */}
      <main className="relative z-10 flex flex-col items-center flex-1 px-4 pt-10 pb-16 max-w-5xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-4">
            <span className="text-foreground">{t.headline1}</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-rose-400 to-accent bg-clip-text text-transparent">
              {t.headline2}
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-5">
            {t.sub}
          </p>

          {/* feature pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {t.features.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                title={desc}
                className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground/80"
              >
                <Icon className="w-4 h-4 text-primary shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        {/* error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-xl mb-4 flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 px-5 py-4 text-sm text-destructive"
            >
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── upload zone ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="w-full max-w-xl"
        >
          <div
            {...getRootProps()}
            className={`
              relative group cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300
              flex flex-col items-center justify-center gap-5 py-14 px-8 text-center
              ${isDragActive
                ? "border-primary bg-primary/8 scale-[1.02]"
                : "border-border/50 hover:border-primary/50 hover:bg-card/40 bg-card/20 backdrop-blur-sm"
              }
            `}
          >
            {/* animated ring on drag */}
            {isDragActive && (
              <div className="absolute inset-0 rounded-3xl ring-2 ring-primary/40 animate-pulse" />
            )}

            <input {...getInputProps()} />

            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isDragActive ? "bg-primary text-primary-foreground scale-110" : "bg-secondary text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary"
            }`}>
              <UploadCloud className="w-8 h-8" />
            </div>

            <div>
              <p className="text-base font-semibold text-foreground mb-1">
                {isDragActive ? t.uploadActive : t.uploadIdle}
              </p>
              <p className="text-xs text-muted-foreground font-mono tracking-wide">{t.formats}</p>
            </div>
          </div>

          {/* demo + guide */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              onClick={() => { setLoading(true); setTimeout(() => { setData(generateDemoData()); setLoading(false); }, 400); }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors">—</span>
              {t.tryIt}
              <Play className="w-3.5 h-3.5 text-primary" />
            </button>

            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
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
                    <li key={i} className="flex gap-3 rounded-xl bg-secondary/50 px-4 py-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <span className="text-sm text-foreground/85 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-3 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">{t.waitNote}</p>
                </div>
                <a
                  href="https://takeout.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground w-full"
                >
                  {t.openTakeout}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
