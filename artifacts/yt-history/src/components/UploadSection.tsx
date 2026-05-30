import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { UploadCloud, Play, FileJson, FileCode, AlertCircle } from "lucide-react";
import { useHistoryStore } from "@/lib/store";
import { parseHistoryFile, generateDemoData } from "@/lib/parser";
import { Button } from "@/components/ui/button";

export function UploadSection() {
  const { setLoading, setData, setError, error, isLoading } = useHistoryStore();

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
      setError("Failed to parse file. Make sure it's a valid YouTube watch history from Google Takeout.");
    } finally {
      setLoading(false);
    }
  }, [setData, setLoading, setError]);

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
          Crunching the numbers...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 max-w-3xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
          YouTube Unwrapped.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Drop your Google Takeout history file below to see your viewing personality, top binges, and deepest rabbit holes. 
          <span className="block mt-2 font-medium text-foreground">100% private. Processed entirely in your browser.</span>
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
            border-3 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300
            flex flex-col items-center justify-center gap-6 min-h-[300px]
            ${isDragActive 
              ? "border-primary bg-primary/5 scale-[1.02]" 
              : "border-muted-foreground/20 hover:border-primary/50 hover:bg-card/50"
            }
          `}
        >
          <input {...getInputProps()} />
          <div className="p-6 bg-background rounded-full shadow-xl">
            <UploadCloud className={`w-12 h-12 ${isDragActive ? "text-primary" : "text-muted-foreground"}`} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              {isDragActive ? "Drop it here!" : "Click or drag file to upload"}
            </h3>
            <p className="text-muted-foreground flex items-center justify-center gap-4">
              <span className="flex items-center gap-1"><FileJson className="w-4 h-4"/> .json</span>
              <span className="flex items-center gap-1"><FileCode className="w-4 h-4"/> .html</span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex flex-col items-center gap-4"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Or try it out</p>
        <Button onClick={handleDemo} variant="secondary" size="lg" className="rounded-full px-8 gap-2 font-semibold">
          <Play className="w-4 h-4" />
          Load Demo Data
        </Button>
      </motion.div>
    </div>
  );
}