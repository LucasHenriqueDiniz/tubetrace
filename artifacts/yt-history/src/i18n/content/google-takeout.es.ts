import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutEs: GoogleTakeoutContent = {
  meta: {
    title: "Google Takeout Historial de YouTube: Descarga y Analiza tus Datos",
    description:
      "Todo lo que necesitas saber sobre google takeout historial youtube: qué contiene, cómo descargarlo y cómo analizarlo con TubeTrace sin compartir tus datos.",
  },
  eyebrow: "Guía",
  h1: "Google Takeout Historial de YouTube: Descarga y Analiza tus Datos",
  intro:
    "Google Takeout es la herramienta oficial de Google para exportar una copia de tus datos personales. En el caso de YouTube, te permite descargar tu historial de visualización completo en formato JSON o HTML, con fechas, títulos y canales de cada video que hayas visto.",
  whatIsH2: "¿Qué es Google Takeout?",
  whatIsPara1:
    "Google Takeout es un servicio gratuito de Google que te permite descargar una copia de todos los datos que Google ha recopilado sobre ti: correos, fotos, contactos, ubicaciones, actividad en YouTube y mucho más. Es parte del programa de portabilidad de datos de Google.",
  whatIsPara2:
    "Para YouTube en particular, Google Takeout genera archivos con tu historial de visualización, historial de búsqueda, likes, comentarios, suscripciones y más. TubeTrace utiliza el historial de visualización para crear un análisis detallado de tus hábitos en la plataforma.",
  filesH2: "Archivos que obtienes de Google Takeout",
  files: [
    {
      filename: "watch-history.json",
      desc: "El historial de visualización en formato JSON. Es el formato recomendado: estructurado, preciso y fácil de procesar automáticamente.",
    },
    {
      filename: "watch-history.html",
      desc: "El historial de visualización en formato HTML, legible en cualquier navegador. TubeTrace también lo acepta, aunque el JSON es más completo.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Tu historial de búsqueda en YouTube. No es necesario para TubeTrace, pero viene incluido en el export de YouTube.",
    },
  ],
  dataContainsH2: "¿Qué información contiene el historial?",
  dataContainsPre:
    "Cada entrada en el historial de visualización incluye los siguientes datos:",
  dataContainsItems: [
    "Título del video",
    "Nombre del canal",
    "URL del video",
    "Fecha y hora exacta en que lo viste",
  ],
  dataContainsPost:
    "Con esa información, TubeTrace puede calcular estadísticas detalladas: cuánto tiempo llevas usando YouTube, qué canales ves más, en qué horarios eres más activo, racha de maratones de videos y mucho más.",
  howToH2: "Cómo descargar tu historial con Google Takeout",
  howToSteps: [
    "Ve a takeout.google.com e inicia sesión con tu cuenta de Google.",
    'Haz clic en "Anular la selección de todo" para desmarcar todos los servicios.',
    "Desplázate hacia abajo hasta YouTube y YouTube Music y marca la casilla.",
    'Haz clic en "Varios formatos" y selecciona JSON como formato del historial de visualización.',
    'Haz clic en "Siguiente paso", elige ZIP como formato y "Enviar enlace por correo electrónico".',
    "Espera el correo de Google y descarga el archivo ZIP cuando esté listo.",
  ],
  whatCanH2: "¿Qué puedes descubrir con TubeTrace?",
  whatCanPre:
    "Una vez que subes tu exportación de Google Takeout, TubeTrace genera un informe con estadísticas como:",
  whatCanItems: [
    "Total de videos vistos y años de actividad",
    "Canales favoritos y más vistos",
    "Distribución de visualizaciones por hora del día y día de la semana",
    "Mapa de calor de actividad",
    "Días de maratón de videos",
    "Racha de días consecutivos viendo YouTube",
    "Estimación del tiempo total invertido",
    "Evolución de tus intereses a lo largo del tiempo",
  ],
  cta: {
    h2: "Analiza tus datos de Google Takeout ahora",
    desc: "Sube tu exportación y descubre en segundos todo lo que tu historial de YouTube dice sobre ti.",
    upload: "Subir mi Takeout",
    sample: "Ver ejemplo de informe",
    uploadLabel: "Subir mi Takeout",
  },
};
