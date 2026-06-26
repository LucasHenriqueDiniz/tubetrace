import type { PrivacyContent } from "../types";

export const privacyEs: PrivacyContent = {
  meta: {
    title: "Política de privacidad — TubeTrace",
    description:
      "Política de privacidad de TubeTrace — cómo tratamos tus datos, cookies y publicidad.",
  },
  eyebrow: "Privacidad",
  h1: "Política de Privacidad",
  updated: "Última actualización: 26 de junio de 2026",
  summary:
    "🔒 TubeTrace procesa todo tu historial de YouTube localmente en tu navegador. Ningún dato de tu historial se envía a nuestros servidores o a terceros.",
  sections: [
    {
      h2: "1. Quiénes somos",
      paragraphs: [
        "TubeTrace (tubetrace.pages.dev) es una herramienta gratuita de análisis de historial de YouTube que procesa datos de Google Takeout directamente en tu navegador.",
      ],
    },
    {
      h2: "2. Datos que recopilamos",
      paragraphs: [
        "TubeTrace NO recopila, almacena ni transmite tu historial de YouTube. Todo el procesamiento ocurre localmente en tu dispositivo.",
        "Los únicos datos que pueden recopilarse son:",
      ],
      items: [
        "Datos de uso anónimos a través de Google Analytics (si aplica): páginas visitadas, tiempo de sesión, país de origen. Esto no te identifica personalmente.",
        "Cookies de publicidad de Google AdSense, descritas en la sección 5.",
      ],
    },
    {
      h2: "3. Datos que proporcionas",
      paragraphs: [
        "Cuando subes tu archivo de Google Takeout (ZIP, JSON o HTML), ese archivo se lee directamente en tu navegador mediante JavaScript. El archivo NO se envía a ningún servidor. Después de cerrar o recargar la página, los datos se descartan automáticamente.",
      ],
    },
    {
      h2: "4. Cookies",
      paragraphs: ["Utilizamos los siguientes tipos de cookies:"],
      items: [
        "Cookies esenciales: necesarias para el funcionamiento básico del sitio.",
        "Cookies de publicidad: Google AdSense utiliza cookies para mostrar anuncios relevantes. Ver sección 5.",
      ],
    },
    {
      h2: "5. Google AdSense y publicidad",
      paragraphs: [
        "Este sitio utiliza Google AdSense para mostrar anuncios. Google, como proveedor tercero, utiliza cookies para publicar anuncios basados en visitas anteriores a este y otros sitios.",
      ],
      subsections: [
        {
          h3: "5.1 Cookies de publicidad de Google",
          paragraphs: [
            "Google AdSense utiliza los siguientes tipos de cookies y tecnologías:",
          ],
          items: [
            "Cookies de publicidad de Google: Se utilizan para personalización de anuncios y limitación de frecuencia.",
            "Cookies DoubleClick: Rastrean el desempeño de anuncios, previenen fraude y miden conversiones.",
            "Google Analytics (si está habilitado): Cookies para medir el uso del sitio, páginas visitadas y tiempo de sesión.",
            "Web Beacons y señales de Internet: Pequeñas imágenes o scripts que rastrean interacciones con anuncios.",
          ],
        },
        {
          h3: "5.2 Cómo gestionar tus preferencias",
          paragraphs: [],
          items: [
            "Rechazar anuncios personalizados: adssettings.google.com — Configura tus preferencias de publicidad personalizada.",
            "Cómo Google utiliza datos: Política de privacidad de anuncios de Google (policies.google.com/technologies/ads).",
            "Política de privacidad de Google: policies.google.com/privacy.",
            "Tu consentimiento: Si resides en la UE/EEA, verás un banner de consentimiento al cargar el sitio.",
          ],
        },
        {
          h3: "5.3 Cookies esenciales vs. opcionales",
          paragraphs: [
            "Las cookies esenciales son necesarias para el funcionamiento del sitio. Las cookies de publicidad son opcionales.",
          ],
        },
      ],
    },
    {
      h2: "6. Servicios de terceros",
      paragraphs: [
        "TubeTrace puede integrar los siguientes servicios de terceros, cada uno con su propia política de privacidad:",
      ],
      items: [
        "Google AdSense — publicidad: policies.google.com/privacy",
        "Cloudflare Pages — alojamiento: cloudflare.com/privacypolicy",
        "Google Fonts — tipografía: policies.google.com/privacy",
      ],
    },
    {
      h2: "7. Tus derechos (RGPD & CCPA)",
      paragraphs: [
        "Dependiendo de tu ubicación, puedes tener derecho a:",
      ],
      items: [
        "Confirmar la existencia de procesamiento de datos personales",
        "Acceder a tus datos personales",
        "Solicitar corrección, eliminación o anonimización de datos",
        "Retirar el consentimiento en cualquier momento",
      ],
    },
    {
      h2: "8. Menores de edad",
      paragraphs: [
        "TubeTrace no está dirigido a menores de 13 años y no recopila intencionalmente datos de niños.",
      ],
    },
    {
      h2: "9. Cambios en esta política",
      paragraphs: [
        "Podemos actualizar esta política periódicamente. La fecha de 'última actualización' en la parte superior indica cuándo ocurrió la revisión más reciente.",
      ],
    },
    {
      h2: "10. Contacto",
      paragraphs: [
        "¿Preguntas sobre esta política? Abre un issue en github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
