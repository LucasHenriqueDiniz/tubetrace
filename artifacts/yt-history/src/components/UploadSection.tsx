import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle, ExternalLink, HelpCircle,
  Lock, Zap, MonitorSmartphone, Play, UploadCloud, Clock,
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
    parseError: "Não consegui ler o arquivo. Envie um ZIP/TGZ do Google Takeout.",
    errors: {
      UNSUPPORTED_FORMAT: "Formato não suportado. Use .zip, .tgz, .json ou .html.",
      ARCHIVE_TOO_LARGE: "Arquivo muito grande. Gere um Takeout só com YouTube.",
      NO_HISTORY_FILE: "Histórico não encontrado. Selecione só YouTube no Takeout.",
      NO_ENTRIES: "Arquivo sem vídeos assistidos. Verifique se o histórico estava ativo.",
    },
    title1: "Entenda seu histórico",
    title2: "do YouTube.",
    sub: "Faça upload do export do Google Takeout e descubra seus canais favoritos, maratonas e padrões de consumo. Tudo processado no seu navegador.",
    uploadLabel: "Arraste seu Takeout aqui",
    uploadSub: "ou clique para escolher um arquivo",
    formats: ".zip · .tgz · .json · .html",
    drag: "Solte aqui!",
    demo: "Ver demo",
    guideBtn: "Como exportar?",
    features: [
      { icon: Lock,              label: "100% privado" },
      { icon: Zap,               label: "Instantâneo" },
      { icon: MonitorSmartphone, label: "Sem instalação" },
    ],
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
    title1: "Understand your",
    title2: "YouTube history.",
    sub: "Upload your Google Takeout export and discover your top channels, binge sessions and viewing patterns. All processed in your browser.",
    uploadLabel: "Drop your Takeout here",
    uploadSub: "or click to choose a file",
    formats: ".zip · .tgz · .json · .html",
    drag: "Drop it!",
    demo: "View demo",
    guideBtn: "How to export?",
    features: [
      { icon: Lock,              label: "100% private" },
      { icon: Zap,               label: "Instant" },
      { icon: MonitorSmartphone, label: "No install" },
    ],
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
    <div className="relative flex-1 flex flex-col">

      {/* single subtle glow behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-primary/8 blur-[120px]"
      />

      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-3xl mx-auto w-full">
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

      {/* hero */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md flex flex-col items-center text-center"
        >
          {/* logo mark */}
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
            <Play className="w-7 h-7 text-white fill-white" />
          </div>

          {/* headline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            {t.title1}<br />{t.title2}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-4 max-w-sm">
            {t.sub}
          </p>

          {/* error */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full mt-6 flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive text-left"
              >
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* upload card */}
          <div
            {...getRootProps()}
            className={`
              relative w-full mt-8 cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200 select-none group
              flex flex-col items-center gap-3 py-10 px-6
              ${isDragActive
                ? "border-primary bg-primary/8 scale-[1.01]"
                : "border-border hover:border-primary/50 bg-card/50 hover:bg-card"
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
          <div className="flex items-center gap-4 mt-5">
            <button
              onClick={() => { setLoading(true); setTimeout(() => { setData(generateDemoData()); setLoading(false); }, 400); }}
              className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
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

          {/* trust badges */}
          <div className="flex items-center gap-5 mt-10">
            {t.features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="w-3.5 h-3.5 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
