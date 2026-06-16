import type { FaqContent } from "../types";

export const faqEs: FaqContent = {
  meta: {
    title: "Preguntas Frecuentes — TubeTrace",
    description:
      "Respuestas a las preguntas más comunes sobre TubeTrace: privacidad, compatibilidad, exportación de datos y cómo funciona el análisis del historial de YouTube.",
  },
  eyebrow: "FAQ",
  h1: "Preguntas Frecuentes",
  intro:
    "Todo lo que necesitas saber sobre TubeTrace: cómo funciona, qué datos usa y cómo mantener tu privacidad.",
  faqs: [
    {
      q: "¿Es seguro usar TubeTrace?",
      a: "Sí, completamente. TubeTrace procesa todo en tu navegador — ningún dato sale de tu dispositivo. No hay servidores que reciban tus archivos, no hay registro de usuarios y el código fuente es abierto para que cualquiera pueda auditarlo.",
    },
    {
      q: "¿Mis datos salen del navegador?",
      a: "No. TubeTrace es 100% client-side: el archivo que subes se procesa directamente en tu navegador usando JavaScript. Nunca se envía a ningún servidor externo ni se almacena en ningún lugar fuera de tu dispositivo.",
    },
    {
      q: "¿Cómo exporto mi historial de YouTube?",
      a: "Ve a takeout.google.com, desmarca todos los servicios, selecciona YouTube y elige JSON como formato del historial de visualización. Google te enviará un correo con el enlace de descarga en minutos u horas. Consulta nuestra guía completa para más detalles.",
    },
    {
      q: "¿Qué archivo debo subir?",
      a: "Puedes subir directamente el archivo ZIP que te envía Google Takeout, o extraerlo y subir solo el archivo watch-history.json (recomendado) o watch-history.html. TubeTrace detecta automáticamente el contenido correcto dentro del ZIP.",
    },
    {
      q: "¿Por qué TubeTrace no encuentra mi historial en el ZIP?",
      a: "Asegúrate de que el ZIP provenga de una exportación de YouTube desde Google Takeout. TubeTrace busca los archivos watch-history.json o watch-history.html dentro de la carpeta YouTube/history/. Si el ZIP es de otro servicio de Google, no contendrá esos archivos.",
    },
    {
      q: "¿Funciona TubeTrace sin conexión?",
      a: "Una vez que la página está cargada en tu navegador, el análisis funciona sin conexión a internet. Sin embargo, necesitas conexión para cargar la aplicación por primera vez.",
    },
    {
      q: "¿TubeTrace está afiliado a YouTube o Google?",
      a: "No. TubeTrace es un proyecto independiente y de código abierto, sin ninguna afiliación oficial con YouTube, Google ni ninguna otra empresa. Utiliza los datos exportados mediante Google Takeout, que es un servicio oficial de Google para la portabilidad de datos.",
    },
    {
      q: "¿Qué formatos son compatibles?",
      a: "TubeTrace acepta archivos ZIP de Google Takeout, archivos TGZ, el archivo JSON (watch-history.json) y el archivo HTML (watch-history.html) extraídos directamente. El formato JSON es el recomendado por ofrecer datos más completos y precisos.",
    },
    {
      q: "Mi historial solo va algunos años atrás, ¿por qué?",
      a: "Google Takeout solo exporta el historial que tienes guardado en tu cuenta. Si en algún momento pausaste o eliminaste tu historial de visualización, esos períodos no aparecerán en el export. También es posible que YouTube no haya guardado datos de períodos muy antiguos.",
    },
    {
      q: "¿Puedo usar TubeTrace sin subir un archivo?",
      a: "Sí. TubeTrace incluye un modo de demostración con datos sintéticos de ejemplo. Haz clic en \"Ver informe de ejemplo\" para explorar todas las funciones sin necesidad de subir ningún archivo.",
    },
    {
      q: "¿TubeTrace es gratis?",
      a: "Sí, TubeTrace es completamente gratuito y de código abierto. No tiene planes de pago, límites de uso ni funciones premium. Puedes usarlo tantas veces como quieras.",
    },
    {
      q: "¿Qué tan precisa es la estimación del tiempo visto?",
      a: "La estimación es aproximada. Google Takeout registra cuándo empezaste a ver cada video, pero no cuánto tiempo lo viste. TubeTrace usa la duración promedio típica de los videos de YouTube para calcular el tiempo total. Es una estimación razonable, pero no exacta.",
    },
  ],
  stillHaveH2: "¿Tienes más preguntas?",
  stillHaveDesc:
    "Consulta nuestras guías detalladas sobre cómo exportar tu historial o cómo funciona TubeTrace. Si tienes algún problema específico, puedes abrir un issue en GitHub.",
  cta: {
    analyze: "Analizar mi historial",
    sample: "Ver informe de ejemplo",
  },
};
