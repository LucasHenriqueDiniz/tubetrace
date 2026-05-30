import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ExternalLink,
  FileCode,
  FileJson,
  Play,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { useHistoryStore } from "@/lib/store";
import { parseHistoryFile, generateDemoData } from "@/lib/parser";
import { Button } from "@/components/ui/button";

const copy = {
  "pt-BR": {
    loading: "Analisando seu histórico...",
    parseError:
      "Não consegui ler o arquivo. Envie um histórico válido do YouTube exportado pelo Google Takeout.",
    title: "YouTube Unwrapped.",
    intro:
      "Envie seu histórico do Google Takeout para descobrir sua personalidade de consumo, maiores maratonas e canais mais vistos.",
    privacy: "100% privado. Tudo é processado no seu navegador.",
    uploadIdle: "Toque para escolher o arquivo",
    uploadActive: "Solte o arquivo aqui",
    formats: "Aceita .json ou .html",
    tryIt: "Ou teste sem arquivo",
    demo: "Carregar dados demo",
    howTitle: "Como pegar seu histórico",
    howSubtitle:
      "No celular, o caminho mais fácil é criar o export pelo Google Takeout e baixar o ZIP quando o Google avisar.",
    steps: [
      "Abra o Google Takeout com a conta usada no YouTube.",
      "Desmarque tudo e selecione apenas YouTube e YouTube Music.",
      "Em formatos, prefira JSON para o histórico.",
      "Crie a exportação, baixe o ZIP e extraia o arquivo watch-history.json ou watch-history.html.",
    ],
    openTakeout: "Abrir Google Takeout",
    safeNote:
      "Depois de escolher o arquivo, ele não é enviado para servidor nenhum.",
    language: "Idioma",
  },
  en: {
    loading: "Crunching the numbers...",
    parseError:
      "Failed to parse file. Make sure it is a valid YouTube watch history from Google Takeout.",
    title: "YouTube Unwrapped.",
    intro:
      "Drop your Google Takeout history file to see your viewing personality, top binges, and most watched channels.",
    privacy: "100% private. Processed entirely in your browser.",
    uploadIdle: "Tap to choose your file",
    uploadActive: "Drop it here",
    formats: "Supports .json or .html",
    tryIt: "Or try it without a file",
    demo: "Load Demo Data",
    howTitle: "How to get your history",
    howSubtitle:
      "On mobile, the easiest path is to create a Google Takeout export and download the ZIP once Google emails you.",
    steps: [
      "Open Google Takeout with the account you use for YouTube.",
      "Deselect everything and select only YouTube and YouTube Music.",
      "In formats, choose JSON for history when available.",
      "Create the export, download the ZIP, then upload watch-history.json or watch-history.html.",
    ],
    openTakeout: "Open Google Takeout",
    safeNote: "After you pick a file, it is not uploaded to any server.",
    language: "Language",
  },
} as const;

type Locale = keyof typeof copy;

export function UploadSection() {
  const { setLoading, setData, setError, error, isLoading } = useHistoryStore();
  const [locale, setLocale] = useState<Locale>(() =>
    navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en",
  );
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      setLoading(true);
      setError(null);
      // Small timeout to allow UI to update to loading state
      await new Promise(r => setTimeout(r, 100));
      
      const data = await parseHistoryFile(file);
      setData(data);
    } catch (err) {
      console.error(err);
      setError(t.parseError);
    } finally {
      setLoading(false);
    }
  }, [setData, setLoading, setError, t.parseError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json'],
      'text/html': ['.html']
    },
    multiple: false
  });

  const handleDemo = () => {
    setLoading(true);
    setTimeout(() => {
      setData(generateDemoData());
      setLoading(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />
        <h2 className="text-xl font-medium tracking-tight animate-pulse text-muted-foreground">
          {t.loading}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-6 md:p-6 max-w-4xl mx-auto w-full">
      <div className="w-full flex justify-end mb-6">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 text-xs">
          <span className="px-2 text-muted-foreground">{t.language}</span>
          {(["pt-BR", "en"] as Locale[]).map((option) => (
            <button
              key={option}
              onClick={() => setLocale(option)}
              className={`rounded-full px-3 py-1 font-semibold transition-colors ${
                locale === option
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {option === "pt-BR" ? "PT" : "EN"}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 md:mb-12 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          {t.title}
        </h1>
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t.intro}
          <span className="block mt-2 font-medium text-foreground">{t.privacy}</span>
        </p>
      </motion.div>

      {error && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 bg-destructive/10 text-destructive px-6 py-4 rounded-xl flex items-center gap-3 w-full"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full"
      >
        <div
          {...getRootProps()}
          className={`
            border-3 border-dashed rounded-3xl p-6 md:p-12 text-center cursor-pointer transition-all duration-300
            flex flex-col items-center justify-center gap-4 md:gap-6 min-h-[220px] md:min-h-[300px]
            ${isDragActive 
              ? "border-primary bg-primary/5 scale-[1.02]" 
              : "border-muted-foreground/20 hover:border-primary/50 hover:bg-card/50"
            }
          `}
          >
          <input {...getInputProps()} />
          <div className="p-5 md:p-6 bg-background rounded-full shadow-xl">
            <UploadCloud className={`w-10 h-10 md:w-12 md:h-12 ${isDragActive ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {isDragActive ? t.uploadActive : t.uploadIdle}
            </h3>
            <p className="text-muted-foreground flex items-center justify-center gap-4 text-sm md:text-base">
              <span className="flex items-center gap-1"><FileJson className="w-4 h-4"/> .json</span>
              <span className="flex items-center gap-1"><FileCode className="w-4 h-4"/> .html</span>
            </p>
            <p className="mt-2 text-xs text-muted-foreground/70">{t.formats}</p>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 w-full rounded-2xl border border-border/60 bg-card/60 p-5 md:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-bold">{t.howTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {t.howSubtitle}
            </p>
          </div>
          <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
        </div>
        <ol className="mt-5 grid gap-3 md:grid-cols-2">
          {t.steps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-xl bg-background/70 p-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <span className="text-sm leading-relaxed text-foreground/90">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://takeout.google.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
          >
            {t.openTakeout}
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-muted-foreground">{t.safeNote}</p>
        </div>
      </motion.section>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 md:mt-12 flex flex-col items-center gap-4"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">{t.tryIt}</p>
        <Button onClick={handleDemo} variant="secondary" size="lg" className="rounded-full px-8 gap-2 font-semibold">
          <Play className="w-4 h-4" />
          {t.demo}
        </Button>
      </motion.div>
    </div>
  );
}
