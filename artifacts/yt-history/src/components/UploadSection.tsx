import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, ExternalLink, HelpCircle,
  Lock, MonitorSmartphone, Play, UploadCloud, Zap, Clock,
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

const copy = {
  "pt-BR": {
    loading: "Analisando seu histórico…",
    parseError: "Não consegui ler o arquivo. Envie um ZIP/TGZ do Google Takeout ou um histórico válido.",
    errors: {
      UNSUPPORTED_FORMAT: "Formato não suportado. Envie .zip, .tgz, .tar.gz, .json ou .html.",
      ARCHIVE_TOO_LARGE: "Arquivo grande demais. Gere outro Takeout selecionando só YouTube.",
      NO_HISTORY_FILE: "Histórico não encontrado. Selecione só YouTube e YouTube Music no Takeout.",
      NO_ENTRIES: "Arquivo sem vídeos assistidos. Verifique se o histórico estava ativo.",
    },
    headline1: "Entenda seu histórico.",
    headline2: "Privado. Local. Seu.",
    sub: "Faça upload do seu Google Takeout e descubra canais favoritos, maratonas e padrões de consumo — tudo processado no seu navegador, sem enviar nada a servidores.",
    features: [
      { icon: Lock,              label: "100% privado" },
      { icon: Zap,               label: "Instantâneo" },
      { icon: MonitorSmartphone, label: "Sem instalação" },
    ],
    uploadIdle: "Arraste o ZIP ou clique para escolher",
    uploadActive: "Solte aqui!",
    formats: "Aceita .zip · .tgz · .json · .html",
    demo: "Experimente com dados demo",
    guideBtn: "Como exportar meu histórico do YouTube?",
    guideTitle: "Exportar histórico do YouTube",
    guideDesc: "O Google pode demorar alguns minutos (ou horas) para gerar o arquivo.",
    steps: [
      "Abra takeout.google.com com sua conta do YouTube.",
      'Clique em "Desmarcar tudo" para não exportar tudo.',
      "Role até YouTube e YouTube Music e marque só esse produto.",
      "Prefira o formato JSON quando disponível.",
      "Clique em Próxima etapa → Criar exportação e aguarde o e-mail.",
      "Baixe o .zip e arraste aqui. Não precisa extrair.",
    ],
    openTakeout: "Abrir Google Takeout",
    waitNote: "Exports grandes podem demorar para ficar prontos no Google.",
    language: "Idioma",
  },
  en: {
    loading: "Analyzing your history…",
    parseError: "Could not read the file. Upload a Google Takeout ZIP or a valid YouTube history file.",
    errors: {
      UNSUPPORTED_FORMAT: "Unsupported format. Upload .zip, .tgz, .tar.gz, .json, or .html.",
      ARCHIVE_TOO_LARGE: "File too large. Create a Takeout with only YouTube selected.",
      NO_HISTORY_FILE: "YouTube history not found. Select only YouTube in Takeout.",
      NO_ENTRIES: "No watched videos detected. Check if watch history was enabled.",
    },
    headline1: "Understand your history.",
    headline2: "Private. Local. Yours.",
    sub: "Upload your Google Takeout and discover top channels, binge sessions and viewing patterns — all processed in your browser, nothing sent to servers.",
    features: [
      { icon: Lock,              label: "100% private" },
      { icon: Zap,               label: "Instant" },
      { icon: MonitorSmartphone, label: "No install" },
    ],
    uploadIdle: "Drop your Takeout ZIP or click to choose",
    uploadActive: "Drop it!",
    formats: "Supports .zip · .tgz · .json · .html",
    demo: "Try with demo data",
    guideBtn: "How to export my YouTube history?",
    guideTitle: "Export YouTube history",
    guideDesc: "Google can take minutes or hours to prepare the file.",
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-background">
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
    <div className="relative min-h-screen flex flex-col bg-background overflow-hidden">

      {/* ── glows – posicionados atrás de tudo ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/12 blur-[140px]" />
        <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px]" />
      </div>

      {/* ── navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
        <span className="text-xl font-extrabold tracking-tight">
          Tube<span className="text-primary">Trace</span>
        </span>
        <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-card/40 backdrop-blur p-1 text-xs">
          {(["pt-BR", "en"] as Locale[]).map(opt => (
            <button
              key={opt}
              onClick={() => setLocale(opt)}
              className={`rounded-full px-3 py-1.5 font-bold transition-all ${
                locale === opt
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt === "pt-BR" ? "PT" : "EN"}
            </button>
          ))}
        </div>
      </nav>

      {/* ── main – centralizado verticalmente ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl flex flex-col items-center gap-8">

          {/* hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              <span className="text-foreground">{t.headline1}</span>
              <br />
              <span className="text-primary">{t.headline2}</span>
            </h1>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              {t.sub}
            </p>
            {/* feature pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {t.features.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-secondary/80 text-foreground/70 border border-border/40"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex items-start gap-3 rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* upload card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="w-full"
          >
            <div
              {...getRootProps()}
              className={`
                relative cursor-pointer rounded-2xl border-2 transition-all duration-200
                flex flex-col items-center gap-4 py-12 px-6 text-center select-none
                ${isDragActive
                  ? "border-primary bg-primary/8 scale-[1.01]"
                  : "border-border hover:border-primary/60 bg-card/60 hover:bg-card/80 backdrop-blur-sm"
                }
              `}
            >
              <input {...getInputProps()} />

              {/* icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-200 ${
                isDragActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
              }`}>
                <UploadCloud className="w-7 h-7" />
              </div>

              {/* text */}
              <div>
                <p className="font-semibold text-foreground text-base">
                  {isDragActive ? t.uploadActive : t.uploadIdle}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1.5 font-mono">{t.formats}</p>
              </div>
            </div>

            {/* secondary actions */}
            <div className="flex flex-col items-center gap-3 mt-5">
              <button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setData(generateDemoData()); setLoading(false); }, 400);
                }}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-primary" />
                {t.demo}
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">
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
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground w-full"
                  >
                    {t.openTakeout}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
