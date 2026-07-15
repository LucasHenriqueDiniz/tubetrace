import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedEs: YoutubeWrappedContent = {
  meta: {
    title:
      "Alternativa a YouTube Wrapped — Analiza tu Historial como Spotify Wrapped",
    description:
      "YouTube no tiene un Wrapped oficial. TubeTrace es la alternativa gratuita: analiza tu historial completo con estadísticas detalladas, sin iniciar sesión y 100% privado.",
  },
  eyebrow: "Guía",
  h1: "Alternativa a YouTube Wrapped — Analiza tu Historial como Spotify Wrapped",
  intro:
    "Cada año, Spotify Wrapped genera un resumen personalizado de lo que más escuchaste. YouTube no ofrece algo equivalente — pero TubeTrace llena ese vacío. Sube tu historial de Google Takeout y obtén un informe completo de tus hábitos en YouTube: canales favoritos, horarios, maratones y mucho más.",
  doesYtHaveH2: "¿YouTube tiene su propio Wrapped?",
  doesYtHavePara1:
    "YouTube lanzó \"YouTube Recap\" como una función experimental limitada, disponible solo para algunos usuarios en ciertas regiones durante fin de año. No es un producto permanente ni está disponible para todos.",
  doesYtHavePara2:
    "A diferencia de Spotify Wrapped, YouTube Recap no cubre todo tu historial: solo muestra datos del año en curso y requiere que el historial de visualización esté activo. TubeTrace no tiene esas limitaciones — analiza todos los años disponibles en tu exportación de Google Takeout.",
  comparisonH2: "TubeTrace vs YouTube Recap",
  comparisonRows: [
    ["Historial completo (todos los años)", true, false],
    ["Sin inicio de sesión", true, false],
    ["100% privado", true, false],
    ["Funciona sin historial activo", true, false],
    ["Tipo de personalidad", true, false],
    ["Detección de maratón", true, false],
    ["Mapa de calor de actividad", true, "limited"],
    ["Integrado en la app de YouTube", false, true],
    ["Tarjetas para compartir", false, true],
  ],
  featuresH2: "Qué incluye tu informe de TubeTrace",
  features: [
    {
      title: "Canales más vistos",
      desc: "Descubre qué canales ocuparon más tiempo en tu historial y cómo han cambiado tus preferencias con el tiempo.",
    },
    {
      title: "Mapa de calor de actividad",
      desc: "Visualiza en qué horas del día y días de la semana ves más YouTube.",
    },
    {
      title: "Detector de maratones",
      desc: "¿Cuántos videos viste seguidos en tu sesión más larga? TubeTrace lo calcula por ti.",
    },
    {
      title: "Tiempo total estimado",
      desc: "Una estimación de las horas invertidas en YouTube a lo largo de todos tus años de historial.",
    },
    {
      title: "Tipo de personalidad",
      desc: "Basado en tus patrones de visualización, TubeTrace te asigna un perfil de espectador único.",
    },
    {
      title: "Evolución por año",
      desc: "Compara tu actividad año por año y observa cómo han evolucionado tus intereses.",
    },
  ],
  howToH2: "Cómo crear tu YouTube Wrapped con TubeTrace",
  howToSteps: [
    {
      title: "Exporta tu historial",
      desc: "Ve a takeout.google.com, selecciona YouTube y descarga tu historial en formato JSON. El proceso tarda entre 5 y 10 minutos.",
    },
    {
      title: "Sube el archivo",
      desc: "Arrastra el ZIP descargado (o el archivo watch-history.json extraído) directamente a TubeTrace.",
    },
    {
      title: "Obtén tu informe",
      desc: "En segundos, TubeTrace analiza tu historial y genera un informe completo con todas tus estadísticas.",
    },
    {
      title: "Explora y comparte",
      desc: "Navega por tus datos, descubre estadísticas sorprendentes y comparte los resultados con quien quieras.",
    },
  ],
  faqH2: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Puedo ver un YouTube Wrapped de un año específico, no de todo mi historial?",
      a: "TubeTrace muestra tu historial completo por defecto, pero el mapa de calor de actividad y los desgloses mensuales te permiten enfocarte visualmente en cualquier año o mes concreto dentro de tus datos.",
    },
    {
      q: "¿TubeTrace funciona si el Recap de YouTube nunca apareció en mi cuenta?",
      a: "Sí — TubeTrace no depende en absoluto de la elegibilidad del Recap de YouTube. Mientras puedas exportar un archivo de Google Takeout con historial de visualización, TubeTrace generará tu informe completo, aparezca o no el Recap para ti.",
    },
    {
      q: "¿El tipo de personalidad se basa en un algoritmo real o es aleatorio?",
      a: "Se calcula a partir de patrones reales en tus datos — horarios de visualización, duración de las sesiones, fidelidad a canales y consistencia entre días — no es aleatorio. Dos personas con hábitos distintos obtendrán resultados de personalidad distintos.",
    },
  ],
  cta: {
    h2: "Crea tu YouTube Wrapped ahora",
    desc: "Gratis, privado y sin necesidad de iniciar sesión. Solo sube tu historial y listo.",
    upload: "Analizar mi historial",
    sample: "Ver informe de ejemplo",
  },
};
