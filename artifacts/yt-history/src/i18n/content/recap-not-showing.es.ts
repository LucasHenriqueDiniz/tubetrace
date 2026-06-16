import type { YoutubeRecapContent } from "../types";

export const youtubeRecapEs: YoutubeRecapContent = {
  meta: {
    title: "¿YouTube Recap no aparece? Aquí está el motivo y qué hacer",
    description:
      "¿No ves YouTube Recap en tu cuenta? Te explicamos por qué no aparece y cómo obtener un resumen completo de tu historial con TubeTrace, gratis y sin limitaciones.",
  },
  eyebrow: "Guía",
  h1: "¿YouTube Recap no aparece? Aquí está el motivo",
  intro:
    "YouTube Recap es una función experimental que YouTube lanza esporádicamente para una selección limitada de usuarios. Si no te aparece, no es un error — simplemente no está disponible para todos. Aquí te explicamos por qué y qué puedes hacer como alternativa.",
  requirementsH2: "Requisitos para ver YouTube Recap",
  requirements: [
    {
      title: "Disponibilidad geográfica",
      desc: "YouTube Recap solo está disponible en determinados países y regiones. Si tu cuenta está registrada fuera de esas zonas, no verás la función aunque cumplas el resto de requisitos.",
    },
    {
      title: "Historial de visualización activo",
      desc: "YouTube Recap requiere que tu historial de visualización esté activado. Si lo has pausado o eliminado en algún momento, es posible que no tengas datos suficientes para generar un resumen.",
    },
    {
      title: "Actividad mínima en el año",
      desc: "Necesitas haber visto una cantidad significativa de videos durante el año para que YouTube genere un Recap. Las cuentas con poca actividad no reciben la función.",
    },
    {
      title: "Selección aleatoria de YouTube",
      desc: "Incluso cumpliendo todos los requisitos anteriores, YouTube Recap se distribuye por invitación o selección interna. No hay forma de solicitarlo manualmente.",
    },
  ],
  howToCheckH2: "Cómo saber si tienes YouTube Recap disponible",
  howToCheckSteps: [
    "Abre la app de YouTube en tu móvil o accede a youtube.com en el navegador.",
    "Toca tu foto de perfil en la esquina superior derecha.",
    'Busca la opción "Tu Recap" o "YouTube Recap" en el menú desplegable.',
    "Si no aparece esa opción, YouTube Recap no está disponible para tu cuenta en este momento.",
  ],
  howToCheckNote:
    "YouTube Recap suele aparecer a finales de año, generalmente en diciembre. Fuera de esa época es normal que no esté visible aunque hayas tenido acceso antes.",
  alternativeH2: "La alternativa: TubeTrace analiza todo tu historial",
  alternativePara1:
    "TubeTrace es una herramienta gratuita que genera un informe completo de tu historial de YouTube sin depender de YouTube Recap. Solo necesitas exportar tus datos con Google Takeout y subirlos a TubeTrace.",
  alternativePara2:
    "A diferencia de YouTube Recap, TubeTrace analiza todos los años de tu historial (no solo el último), funciona aunque hayas pausado el historial en algún momento, y no requiere que inicies sesión en ningún sitio — todo se procesa directamente en tu navegador.",
  alternativeItems: [
    "Historial completo de todos los años disponibles",
    "Canales y videos más vistos",
    "Mapa de calor de actividad por hora y día",
    "Días de maratón de videos",
    "Racha de días consecutivos viendo YouTube",
    "Estimación del tiempo total invertido",
    "Tipo de personalidad como espectador",
    "100% privado — tus datos nunca salen de tu navegador",
  ],
  cta: {
    h2: "No esperes al YouTube Recap",
    desc: "Analiza tu historial completo ahora mismo con TubeTrace, gratis y sin necesidad de cuenta.",
    upload: "Analizar mi historial",
    sample: "Ver informe de ejemplo",
    exportGuide: "Cómo exportar mis datos",
  },
};
