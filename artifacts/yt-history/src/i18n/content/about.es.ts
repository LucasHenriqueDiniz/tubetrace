import type { AboutContent } from "../types";

export const aboutEs: AboutContent = {
  meta: {
    title: "Acerca de TubeTrace — Analizador de Historial de YouTube",
    description:
      "TubeTrace es una herramienta gratuita y de código abierto que analiza tu historial de YouTube directamente en el navegador. Sin servidores, sin registro, 100% privado.",
  },
  eyebrow: "Acerca de",
  h1: "¿Qué es TubeTrace?",
  intro:
    "TubeTrace es una herramienta gratuita, de código abierto y sin servidor que analiza tu historial de visualización de YouTube directamente en tu navegador. Solo necesitas exportar tus datos con Google Takeout, subir el archivo y obtener un informe detallado en segundos — sin crear cuentas, sin compartir datos.",
  features: [
    {
      title: "100% Privado",
      desc: "Todo el análisis ocurre en tu navegador. Tus datos nunca salen de tu dispositivo ni se envían a ningún servidor.",
    },
    {
      title: "Análisis Instantáneo",
      desc: "Sube tu historial y obtén estadísticas completas en segundos. Sin tiempos de espera ni colas de procesamiento.",
    },
    {
      title: "Sin cuenta requerida",
      desc: "No necesitas registrarte ni vincular tu cuenta de YouTube o Google. Solo sube el archivo y listo.",
    },
    {
      title: "Código abierto",
      desc: "El código fuente de TubeTrace es público y está disponible en GitHub. Puedes auditarlo, mejorarlo o ejecutarlo tú mismo.",
    },
  ],
  whyH2: "¿Por qué TubeTrace?",
  whyParas: [
    "YouTube no ofrece estadísticas detalladas sobre tus hábitos de visualización. Puedes ver tu historial, pero no cuántas horas llevas viendo videos, qué canales dominas, ni en qué horarios eres más activo. TubeTrace llena ese vacío.",
    "La mayoría de las herramientas que analizan tu actividad en YouTube requieren acceso a tu cuenta o suben tus datos a servidores externos. TubeTrace funciona de forma diferente: procesa todo localmente, sin que tus datos salgan nunca de tu navegador.",
    "Creemos que tus datos son tuyos. TubeTrace te permite conocer mejor tus hábitos digitales sin sacrificar la privacidad para lograrlo.",
  ],
  whatH2: "Qué analiza TubeTrace",
  whatItems: [
    "Total de videos vistos y años de actividad",
    "Canales y creadores más vistos",
    "Distribución de visualizaciones por hora del día",
    "Actividad por día de la semana",
    "Mapa de calor de actividad",
    "Días de maratón de videos y sesiones más largas",
    "Racha de días consecutivos viendo YouTube",
    "Estimación del tiempo total invertido",
    "Evolución de tus intereses año por año",
  ],
  howH2: "Cómo usar TubeTrace",
  howSteps: [
    "Ve a takeout.google.com y exporta tu historial de YouTube en formato JSON.",
    "Descarga el archivo ZIP que te envía Google por correo.",
    "Arrastra el ZIP (o el archivo watch-history.json extraído) a TubeTrace.",
    "Explora tu informe personalizado con todas tus estadísticas de YouTube.",
  ],
  cta: {
    analyze: "Analizar mi historial",
    sample: "Ver informe de ejemplo",
    github: "Ver en GitHub",
  },
};
