import type { YoutubeWrappedContent } from "../types";

export const youtubeWrappedPt: YoutubeWrappedContent = {
  meta: {
    title: "Alternativa ao YouTube Wrapped — Analise seu Histórico como o Spotify Wrapped",
    description:
      "O YouTube não tem um Wrapped como o Spotify. O TubeTrace é a melhor alternativa gratuita: analise seu histórico completo, descubra seu perfil de espectador e muito mais.",
  },
  eyebrow: "Guia",
  h1: "Alternativa ao YouTube Wrapped: Analise seu Histórico como o Spotify Wrapped",
  intro:
    "O YouTube nunca lançou um recurso equivalente ao Spotify Wrapped. Enquanto o Spotify envia um resumo anual personalizado para cada usuário, o YouTube oferece apenas o Recap — com restrições rígidas e disponibilidade limitada. O TubeTrace preenche essa lacuna: análise completa do seu histórico, a qualquer hora, sem depender do YouTube.",
  doesYtHaveH2: "O YouTube tem um recurso Wrapped?",
  doesYtHavePara1:
    "Não existe um YouTube Wrapped oficial. O YouTube lançou o YouTube Recap em alguns anos, mas ele tem requisitos rigorosos: histórico de exibição ativo, atividade suficiente na plataforma e disponibilidade restrita por região e faixa etária. Muitos usuários simplesmente nunca veem o Recap mesmo assistindo ao YouTube o ano todo.",
  doesYtHavePara2:
    "O TubeTrace é a melhor alternativa gratuita ao YouTube Wrapped. Ele analisa seu histórico completo exportado pelo Google Takeout — sem restrições, sem dependência do algoritmo do YouTube e com muito mais profundidade do que o Recap oficial.",
  comparisonH2: "TubeTrace vs YouTube Recap",
  comparisonRows: [
    ["Histórico completo (todos os anos)", true, false],
    ["Sem login necessário", true, false],
    ["100% privado", true, false],
    ["Funciona sem histórico ativo", true, false],
    ["Tipo de personalidade de espectador", true, false],
    ["Detecção de maratona", true, false],
    ["Heatmap de atividade", true, false],
    ["Integrado no app YouTube", false, true],
    ["Cards compartilháveis", "Em breve", true],
  ],
  featuresH2: "O que o TubeTrace mostra (como o Spotify Wrapped)",
  features: [
    {
      title: "Personalidade de Espectador",
      desc: "Descubra seu tipo de espectador com base nos seus hábitos — maratonista, casual, noturno e muito mais.",
    },
    {
      title: "Top Canais",
      desc: "Veja quais canais dominam seu histórico e com qual frequência você voltou a cada um deles.",
    },
    {
      title: "Tempo Total Assistido",
      desc: "Estimativa do total de horas que você passou no YouTube — por mês, por ano e no geral.",
    },
    {
      title: "Detecção de Maratonas",
      desc: "Identifica sequências longas de visualizações contínuas e revela seus momentos de binge-watching.",
    },
    {
      title: "Heatmap de Atividade",
      desc: "Visualize em quais dias da semana e horários do dia você mais assiste ao YouTube.",
    },
    {
      title: "Hábitos de Pico",
      desc: "Descubra seus meses mais ativos e como seu consumo de conteúdo mudou ao longo dos anos.",
    },
  ],
  howToH2: "Como criar seu YouTube Wrapped equivalente",
  howToSteps: [
    {
      title: "Exporte seu histórico pelo Google Takeout",
      desc: "Acesse takeout.google.com, selecione apenas o YouTube e solicite a exportação. O Google envia o arquivo por e-mail.",
    },
    {
      title: "Baixe o arquivo ZIP",
      desc: "Quando o e-mail chegar, baixe o ZIP. Você pode enviá-lo diretamente ao TubeTrace — não precisa extrair.",
    },
    {
      title: "Abra o TubeTrace e envie o arquivo",
      desc: "Arraste o ZIP (ou o JSON extraído) para a área de upload na página inicial do TubeTrace.",
    },
    {
      title: "Explore seu relatório",
      desc: "Em segundos, seu relatório personalizado estará pronto — com todos os anos do seu histórico, sem limite de período.",
    },
  ],
  cta: {
    h2: "Crie seu YouTube Wrapped agora",
    desc: "Gratuito, privado e sem cadastro. Só você vê seus dados.",
    upload: "Analisar meu histórico",
    sample: "Ver relatório de exemplo",
  },
};
