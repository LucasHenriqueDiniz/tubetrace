import type { GoogleTakeoutContent } from "../types";

export const googleTakeoutPt: GoogleTakeoutContent = {
  meta: {
    title: "Google Takeout Histórico do YouTube: Baixe e Analise seus Dados",
    description:
      "Entenda o que é o google takeout histórico youtube, quais arquivos você recebe e como analisar seus dados com o TubeTrace diretamente no navegador.",
  },
  eyebrow: "Guia",
  h1: "Google Takeout Histórico do YouTube: Baixe e Analise seus Dados",
  intro:
    "O Google Takeout permite baixar uma cópia completa do seu histórico do YouTube — todos os vídeos que você assistiu, com data e hora. O TubeTrace transforma esses dados em um relatório visual detalhado, processado 100% no seu navegador.",
  whatIsH2: "O que é o Google Takeout?",
  whatIsPara1:
    "O Google Takeout é uma ferramenta oficial do Google que permite exportar seus dados de qualquer serviço da empresa — Gmail, Google Fotos, Google Maps e, claro, YouTube. É a forma oficial de obter uma cópia de tudo que você já fez na plataforma.",
  whatIsPara2:
    "A exportação chega como um arquivo ZIP ou TGZ contendo pastas organizadas por serviço. Para o YouTube, os arquivos de histórico ficam dentro de uma pasta chamada YouTube and YouTube Music.",
  filesH2: "Quais arquivos o Google Takeout inclui para o YouTube?",
  files: [
    {
      filename: "watch-history.json",
      desc: "O arquivo principal com todo o histórico de vídeos assistidos em formato estruturado. Contém título, canal, URL e timestamp de cada visualização. É o formato recomendado.",
    },
    {
      filename: "watch-history.html",
      desc: "Versão legível do histórico de exibição. Contém as mesmas informações que o JSON, mas formatadas em HTML. As datas podem aparecer em português com fuso BRT.",
    },
    {
      filename: "search-history.json / search-history.html",
      desc: "Histórico de buscas feitas no YouTube. O TubeTrace foca no histórico de exibição, mas este arquivo também pode ser útil para entender seus padrões de consumo.",
    },
  ],
  dataContainsH2: "O que o watch-history.json contém?",
  dataContainsPre:
    "Cada entrada no arquivo representa um vídeo assistido e inclui as seguintes informações:",
  dataContainsItems: [
    "Título do vídeo",
    "Nome do canal",
    "Data e hora da visualização (timestamp UTC)",
    "Tipo de atividade (histórico de exibição)",
  ],
  dataContainsPost:
    "O arquivo não inclui informações como tempo assistido por vídeo, quantas vezes você pausou ou porcentagem do vídeo assistida — apenas o registro de que você assistiu.",
  howToH2: "Como baixar seu histórico do YouTube pelo Google Takeout",
  howToSteps: [
    "Acesse takeout.google.com e faça login com sua conta do Google",
    'Clique em "Desmarcar tudo" para desmarcar todos os serviços',
    "Role até YouTube e YouTube Music e marque a caixa",
    'Clique em "Múltiplos formatos" e selecione JSON quando disponível',
    'Clique em "Próxima etapa", escolha entrega por e-mail e formato ZIP',
    'Clique em "Criar exportação" e aguarde o e-mail do Google',
  ],
  whatCanH2: "O que o TubeTrace faz com seus dados do Google Takeout?",
  whatCanPre:
    "Depois de enviar seu arquivo do Google Takeout, o TubeTrace gera um relatório completo com:",
  whatCanItems: [
    "Total de vídeos assistidos e estimativa de horas consumidas",
    "Ranking dos seus canais favoritos por número de visualizações",
    "Heatmap de atividade por hora do dia e dia da semana",
    "Evolução do consumo ao longo dos meses e anos",
    "Detecção de maratonas (sequências longas de visualizações)",
    "Tipo de personalidade de espectador com base nos seus hábitos",
    "Picos de atividade e períodos mais ativos",
    "Análise completa sem nenhum dado sair do seu navegador",
  ],
  faqH2: "Perguntas frequentes",
  faqs: [
    {
      q: "Quanto tempo o Google Takeout leva para preparar minha exportação do YouTube?",
      a: "Geralmente de alguns minutos a algumas horas, dependendo de quanto histórico você tem. O Google envia um link de download por e-mail assim que o arquivo estiver pronto — não é preciso manter a aba do Takeout aberta esperando.",
    },
    {
      q: "O Google Takeout inclui vídeos que eu curti ou comentei?",
      a: "Sim, se você selecionar a opção completa 'YouTube e YouTube Music', a exportação pode incluir curtidas, comentários e playlists como arquivos separados. O TubeTrace só lê o watch-history.json/html; os outros arquivos são ignorados.",
    },
    {
      q: "Posso solicitar uma exportação do Takeout mais de uma vez?",
      a: "Sim, sem limite. Cada exportação é uma cópia atualizada dos seus dados no momento em que foi solicitada, então você pode reexportar quando quiser uma análise atualizada.",
    },
    {
      q: "Meus dados do Google Takeout são compartilhados com alguém?",
      a: "Não. A exportação é gerada pelo Google exclusivamente para você e entregue por um link de download privado vinculado à sua conta. O TubeTrace também nunca a recebe — o arquivo é lido inteiramente dentro do seu navegador depois que você o baixa.",
    },
  ],
  cta: {
    h2: "Analise seus dados do Google Takeout agora",
    desc: "Arraste seu arquivo e descubra tudo sobre seus hábitos no YouTube. Gratuito, privado e sem cadastro.",
    upload: "Enviar meu Takeout",
    sample: "Ver relatório de exemplo",
    uploadLabel: "Enviar meu Takeout",
  },
};
