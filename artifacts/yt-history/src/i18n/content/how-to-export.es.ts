import type { HowToExportContent } from "../types";

export const howToExportEs: HowToExportContent = {
  meta: {
    title: "Cómo Exportar tu Historial de YouTube con Google Takeout",
    description:
      "Aprende a exportar historial youtube google takeout en menos de 10 minutos. Guía paso a paso para descargar tu historial de YouTube y analizarlo con TubeTrace.",
  },
  eyebrow: "Guía",
  h1: "Cómo Exportar tu Historial de YouTube con Google Takeout",
  intro:
    "Ve a takeout.google.com, desmarca todos los servicios, selecciona solo YouTube y espera el correo de Google con el enlace de descarga. Luego arrastra el archivo ZIP a TubeTrace y tu informe estará listo en segundos.",
  timeNote:
    "Configurar la exportación toma unos 5 a 10 minutos. Google puede tardar desde unos minutos hasta varias horas en preparar el archivo, dependiendo del tamaño de tu historial.",
  stepsH2: "Instrucciones paso a paso",
  steps: [
    {
      title: "Abre Google Takeout",
      body: "Ve a takeout.google.com e inicia sesión con la cuenta de Google vinculada a tu YouTube. Asegúrate de estar en la cuenta correcta antes de continuar.",
    },
    {
      title: 'Haz clic en "Anular la selección de todo"',
      body: 'En la lista de servicios de Google, haz clic en el botón "Anular la selección de todo" para desmarcar todos los productos de una vez. Así evitas descargar datos que no necesitas.',
    },
    {
      title: "Selecciona YouTube y YouTube Music",
      body: "Desplázate hacia abajo hasta encontrar YouTube y YouTube Music. Marca la casilla junto a YouTube. Si también quieres incluir YouTube Music, márcalo por separado.",
    },
    {
      title: "Configura las opciones de exportación",
      body: 'Haz clic en "Varios formatos" dentro de la sección de YouTube. Asegúrate de que el historial de visualización esté seleccionado y, cuando aparezca la opción de formato, elige JSON — es más fácil de procesar y ofrece datos más completos.',
    },
    {
      title: "Crea la exportación",
      body: 'Desplázate hasta el final de la página y haz clic en "Siguiente paso". Elige "Enviar enlace por correo electrónico" como método de entrega y ZIP como formato del archivo. Luego haz clic en "Crear exportación" para iniciar el proceso.',
    },
    {
      title: "Espera el correo de Google",
      body: "Google procesará tu solicitud y te enviará un correo cuando la exportación esté lista. El tiempo varía: puede ser unos minutos o varias horas.",
    },
    {
      title: "Descarga el archivo",
      body: "Cuando llegue el correo, haz clic en el enlace de descarga. Recibirás un archivo ZIP con todos tus datos de YouTube. Guárdalo en un lugar fácil de encontrar.",
    },
    {
      title: "Súbelo a TubeTrace",
      body: "Vuelve a TubeTrace y arrastra el archivo ZIP (o el JSON/HTML extraído) directamente a la página de inicio. El informe aparece en segundos — sin subida a servidores, todo se procesa en tu propio navegador.",
    },
  ],
  jsonVsHtmlH2: "JSON o HTML: ¿qué formato elegir?",
  jsonTitle: "JSON (Recomendado)",
  jsonItems: [
    "Datos estructurados y fáciles de procesar",
    "Lectura automática sin ambigüedad de formato",
    "Disponible en la mayoría de las cuentas de Google",
    "Nombre del archivo: watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "También compatible con TubeTrace",
    "Legible por humanos — se puede abrir en el navegador",
    "Las fechas pueden estar en español con zona horaria local",
    "Nombre del archivo: watch-history.html",
  ],
  problemsH2: "Problemas comunes y soluciones",
  problems: [
    {
      problem: "TubeTrace dice 'No se encontró ningún archivo de historial'",
      solution:
        "Verifica que el archivo ZIP provenga de una exportación de YouTube (no de otro servicio de Google). TubeTrace busca específicamente los archivos watch-history.json o watch-history.html dentro de la carpeta de YouTube.",
    },
    {
      problem: "La exportación no tiene entradas",
      solution:
        "Es posible que tu historial de visualización esté pausado o haya sido eliminado. Ve a myactivity.google.com, entra en Configuración de actividad y verifica que el historial de YouTube esté activo.",
    },
    {
      problem: "El ZIP es demasiado grande para cargarlo",
      solution:
        "Extrae el ZIP y localiza solo el archivo watch-history.json o watch-history.html dentro de la carpeta YouTube/history/. Sube únicamente ese archivo — es mucho más pequeño.",
    },
    {
      problem: "El correo de Google nunca llegó",
      solution:
        "Revisa tu carpeta de spam. Si no está ahí, vuelve a takeout.google.com — puede que la exportación haya fallado sin avisar. También puedes ver el estado de exportaciones anteriores en esa misma página.",
    },
    {
      problem: "La exportación solo contiene unos meses de historial",
      solution:
        "Esto normalmente significa que la eliminación automática está activada en tu cuenta. Ve a myaccount.google.com/activitycontrols, busca 'Historial de YouTube' y revisa la configuración de eliminación automática — si está en 3 o 18 meses, las entradas más antiguas ya fueron eliminadas permanentemente por Google y no se pueden recuperar, ni siquiera con una nueva exportación.",
    },
    {
      problem: "TubeTrace muestra menos videos de los que esperaba",
      solution:
        "El archivo watch-history.json solo incluye videos vistos mientras estabas conectado y con el historial activado. Los videos vistos en modo incógnito, sin sesión iniciada, o durante un periodo con el historial pausado no aparecerán — es una limitación de los datos de YouTube, no un problema de TubeTrace.",
    },
  ],
  faqH2: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Exportar los datos elimina mi historial de YouTube?",
      a: "No. La exportación es una copia de tus datos — no se elimina nada de tu cuenta. Tu historial sigue exactamente igual que antes.",
    },
    {
      q: "¿Puedo solicitar la exportación más de una vez?",
      a: "Sí, sin límite. Puedes exportar tus datos de Google Takeout tantas veces como quieras, en cualquier momento.",
    },
    {
      q: "¿Es seguro subir mi archivo a TubeTrace?",
      a: "Completamente. TubeTrace procesa todo localmente en tu navegador — el archivo nunca se envía a ningún servidor. Tus datos permanecen en tu dispositivo en todo momento.",
    },
    {
      q: "¿Necesito iniciar sesión en TubeTrace para ver mis resultados?",
      a: "No. TubeTrace no tiene ningún sistema de inicio de sesión. Solo arrastras tu archivo exportado a la página de carga y tu informe se genera al instante en tu navegador.",
    },
    {
      q: "¿Puedo exportar mi historial desde la app de YouTube en vez del navegador?",
      a: "Google Takeout solo está disponible a través de un navegador en takeout.google.com — no hay opción de exportación dentro de la app móvil de YouTube. Aun así puedes abrir takeout.google.com en el navegador de tu teléfono y seguir los mismos pasos.",
    },
    {
      q: "¿Qué pasa si tengo historial de muchos años?",
      a: "TubeTrace no tiene límite de cuánto historial puede procesar — puede manejar exportaciones que cubren una década o más. Las exportaciones muy grandes (decenas de miles de entradas) pueden tardar unos segundos extra en procesarse, pero todo sigue ocurriendo localmente en tu navegador.",
    },
  ],
  cta: {
    h2: "¿Listo para analizar tu historial?",
    desc: "Sube tu exportación de Google Takeout y descubre todo sobre tus hábitos en YouTube.",
    upload: "Subir mi exportación",
    sample: "Ver informe de ejemplo",
  },
};
