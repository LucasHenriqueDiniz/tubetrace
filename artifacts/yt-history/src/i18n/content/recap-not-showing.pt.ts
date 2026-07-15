import type { YoutubeRecapContent } from "../types";

export const youtubeRecapPt: YoutubeRecapContent = {
  meta: {
    title: "YouTube Recap não aparece? Veja por que e o que fazer",
    description:
      "O YouTube Recap tem requisitos rígidos e nem sempre aparece. Entenda os motivos e descubra como analisar seu histórico completo com o TubeTrace — sem depender do Recap.",
  },
  eyebrow: "Guia",
  h1: "YouTube Recap não aparece? Veja por que",
  intro:
    "O YouTube Recap não é garantido para todos os usuários — ele depende de requisitos específicos de atividade, região e configurações de conta. Se você não está vendo o Recap, não é necessariamente por falta de uso: os critérios são pouco transparentes e variam a cada ano. O TubeTrace é a alternativa que funciona para qualquer pessoa com histórico do YouTube.",
  requirementsH2: "Requisitos conhecidos para o YouTube Recap",
  requirements: [
    {
      title: "Histórico de exibição ativo",
      desc: "O Recap só funciona se o seu histórico de exibição estiver ativado. Se você pausou ou desativou esse recurso em algum momento, o YouTube pode não ter dados suficientes para gerar o relatório.",
    },
    {
      title: "Atividade suficiente na plataforma",
      desc: "O YouTube exige um volume mínimo de vídeos assistidos para gerar o Recap. O número exato nunca foi divulgado oficialmente, mas usuários com pouca atividade costumam não receber.",
    },
    {
      title: "Elegibilidade por idade e região",
      desc: "O Recap não está disponível para contas supervisionadas, menores de idade em algumas regiões ou usuários em países onde o recurso não foi lançado.",
    },
    {
      title: "Não ter optado pela exclusão automática",
      desc: "Se você configurou a exclusão automática do histórico (por exemplo, dados mais antigos que 3 ou 18 meses), o YouTube pode não ter histórico suficiente para montar o Recap.",
    },
  ],
  howToCheckH2: "Como verificar se seu histórico do YouTube está ativo",
  howToCheckSteps: [
    "Abra o YouTube e acesse sua foto de perfil no canto superior direito",
    'Clique em "Gerenciar sua conta do Google" e depois em "Dados e privacidade"',
    'Role até "Configurações de atividade" e clique em "Histórico do YouTube"',
    'Verifique se o botão está ativado. Se estiver desligado, clique em "Ativar" para reativar',
  ],
  howToCheckNote:
    "Reativar o histórico começa a registrar visualizações a partir desse momento — vídeos assistidos enquanto estava desativado não voltam. Para analisar o que já foi registrado antes, use o Google Takeout.",
  alternativeH2: "YouTube Recap indisponível? Use o TubeTrace",
  alternativePara1:
    "Se o Recap não aparece para você — seja por restrições de conta, histórico pausado ou simplesmente porque o YouTube decidiu não oferecer — o TubeTrace entrega as mesmas informações com ainda mais profundidade. Não há critérios de elegibilidade: basta ter um arquivo de histórico do Google Takeout.",
  alternativePara2:
    "O TubeTrace funciona analisando diretamente o arquivo exportado pelo Google Takeout. Isso significa que você tem acesso a todo o histórico disponível na sua conta — não apenas o do último ano.",
  alternativeItems: [
    "Análise de todo o histórico disponível, sem limite de período",
    "Canais mais assistidos com contagem de visualizações",
    "Estimativa de horas totais consumidas",
    "Heatmap de atividade por hora e dia da semana",
    "Detecção de maratonas e binge-watching",
    "Tipo de personalidade de espectador",
    "Evolução do consumo ao longo dos anos",
    "100% privado — nenhum dado sai do seu navegador",
  ],
  faqH2: "Perguntas frequentes",
  faqs: [
    {
      q: "O YouTube Recap vai acabar aparecendo se eu só esperar?",
      a: "Possivelmente — o YouTube lança o Recap gradualmente e não garante uma data. Se você não quiser esperar, o TubeTrace oferece os mesmos tipos de insights imediatamente, sem depender do cronograma de lançamento do YouTube.",
    },
    {
      q: "Reativar meu histórico de exibição corrige o Recap retroativamente?",
      a: "Não. Reativar o histórico só afeta a exibição futura — não consegue recuperar dados de um período em que o histórico estava pausado ou apagado. O TubeTrace tem a mesma limitação, já que também depende do arquivo de histórico que o próprio YouTube mantém.",
    },
    {
      q: "Existe um jeito oficial de contatar o YouTube sobre o Recap ausente?",
      a: "O YouTube não oferece suporte individual para elegibilidade do Recap, já que é um lançamento automatizado baseado em critérios, não um recurso concedido manualmente. Não existe um chamado de suporte que faça ele aparecer mais rápido.",
    },
  ],
  cta: {
    h2: "Não espere pelo YouTube Recap",
    desc: "Analise seu histórico completo agora, sem depender do YouTube. Gratuito e sem cadastro.",
    upload: "Analisar meu histórico",
    sample: "Ver relatório de exemplo",
    exportGuide: "Como exportar meus dados",
  },
};
