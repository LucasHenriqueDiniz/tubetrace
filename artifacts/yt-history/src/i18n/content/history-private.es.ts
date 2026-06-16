import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyEs: YoutubePrivacyContent = {
  meta: {
    title: "¿El historial de YouTube es privado? Quién puede ver lo que ves",
    description:
      "¿Tu historial de YouTube es público o privado? Te explicamos quién puede verlo, qué sabe Google sobre lo que ves y cómo mantener tu actividad en YouTube bajo control.",
  },
  eyebrow: "Guía",
  h1: "¿El historial de YouTube es privado? Quién puede ver lo que ves",
  intro:
    "Por defecto, tu historial de visualización en YouTube es privado: ningún otro usuario puede ver qué videos has visto. Sin embargo, Google sí tiene acceso a esa información y la usa para personalizar anuncios y recomendaciones. A continuación te explicamos exactamente quién puede ver qué.",
  whoCanSeeH2: "¿Quién puede ver tu historial de YouTube?",
  whoCanSee: [
    {
      title: "Otros usuarios de YouTube",
      answer: "No pueden verlo",
      positive: true,
      desc: "Tu historial de visualización es completamente privado para otros usuarios. Nadie puede ver tu lista de videos vistos, ni siquiera tus suscriptores o personas que sigues.",
    },
    {
      title: "Google / YouTube",
      answer: "Puede verlo",
      positive: false,
      desc: "Google tiene acceso completo a tu historial de visualización y lo utiliza para personalizar recomendaciones, anuncios y resultados de búsqueda. Puedes consultar y eliminar esta información en myactivity.google.com.",
    },
    {
      title: "Anunciantes",
      answer: "No pueden verlo directamente",
      positive: true,
      desc: "Los anunciantes no tienen acceso directo a tu historial. Sin embargo, Google les permite mostrar anuncios segmentados basados en tus intereses, inferidos a partir de tu actividad.",
    },
    {
      title: "Cuentas compartidas",
      answer: "Pueden verlo si están conectados",
      positive: false,
      desc: "Si compartes tu cuenta de Google con otras personas (familia, compañeros de trabajo), ellas pueden ver tu historial de YouTube mientras estén conectadas con tu cuenta.",
    },
    {
      title: "TubeTrace",
      answer: "No puede verlo",
      positive: true,
      desc: "TubeTrace no tiene acceso a tu cuenta de YouTube ni a tus datos en línea. Solo analiza el archivo que tú le proporcionas manualmente desde Google Takeout, y lo procesa localmente en tu navegador.",
    },
  ],
  howToPrivacyH2: "Cómo controlar la privacidad de tu historial",
  privacyOptions: [
    {
      title: "Pausar el historial de visualización",
      desc: "En myactivity.google.com puedes pausar el historial de YouTube. Mientras está pausado, YouTube no guarda los videos que ves ni los usa para personalizar recomendaciones.",
    },
    {
      title: "Eliminar el historial",
      desc: "Puedes borrar tu historial de visualización de forma selectiva o completa desde myactivity.google.com o directamente desde la app de YouTube en Biblioteca > Historial.",
    },
    {
      title: "Activar la eliminación automática",
      desc: "Google permite programar la eliminación automática del historial cada 3, 18 o 36 meses. Es una buena opción si quieres mantener la privacidad a largo plazo sin tener que hacerlo manualmente.",
    },
    {
      title: "Usar el modo incógnito de YouTube",
      desc: "YouTube tiene un modo incógnito (disponible en la app móvil) que no guarda el historial de visualización durante la sesión. Es útil cuando no quieres que algo quede registrado.",
    },
  ],
  isSafeH2: "¿Es seguro analizar el historial con TubeTrace?",
  isSafeTitle: "Sí, TubeTrace es completamente seguro",
  isSafeDesc:
    "TubeTrace está diseñado desde cero con la privacidad como prioridad. Así funciona:",
  isSafeItems: [
    "Todo el procesamiento ocurre en tu navegador — ningún dato sale de tu dispositivo",
    "TubeTrace no tiene servidor que reciba tus archivos",
    "No requiere que inicies sesión ni que vincules tu cuenta de Google",
    "El código fuente es abierto y puede ser auditado por cualquier persona",
    "El archivo que subes nunca se almacena ni se comparte",
  ],
  cta: {
    h2: "Explora tu historial de forma privada",
    desc: "Analiza lo que has visto en YouTube sin compartir tus datos con nadie.",
    upload: "Analizar mi historial",
    sample: "Ver informe de ejemplo",
    exportGuide: "Cómo exportar mis datos",
  },
};
