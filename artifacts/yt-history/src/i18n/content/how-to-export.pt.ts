import type { HowToExportContent } from "../types";

export const howToExportPt: HowToExportContent = {
  meta: {
    title: "Como Exportar seu Histórico do YouTube com o Google Takeout",
    description:
      "Aprenda a exportar histórico youtube google takeout em menos de 10 minutos. Guia passo a passo para baixar seu histórico do YouTube e analisar com o TubeTrace.",
  },
  eyebrow: "Guia",
  h1: "Como Exportar seu Histórico do YouTube com o Google Takeout",
  intro:
    "Acesse takeout.google.com, desmarque tudo, selecione apenas o YouTube e aguarde o e-mail do Google com o link para download. Depois é só arrastar o arquivo ZIP para o TubeTrace e seu relatório estará pronto em segundos.",
  timeNote:
    "Leva cerca de 5 a 10 minutos para configurar a exportação. O Google pode levar de alguns minutos até algumas horas para preparar o arquivo — depende do tamanho do seu histórico.",
  stepsH2: "Instruções passo a passo",
  steps: [
    {
      title: "Abra o Google Takeout",
      body: "Acesse takeout.google.com e faça login com a conta do Google vinculada ao seu YouTube. Certifique-se de estar na conta certa antes de continuar.",
    },
    {
      title: 'Clique em "Desmarcar tudo"',
      body: 'Na lista de serviços do Google, clique no botão "Desmarcar tudo" para desmarcar todos os produtos de uma vez. Isso evita baixar dados que você não precisa.',
    },
    {
      title: "Selecione YouTube e YouTube Music",
      body: "Role a página para baixo até encontrar YouTube e YouTube Music. Marque a caixa ao lado do YouTube. Se quiser incluir o YouTube Music também, marque-o separadamente.",
    },
    {
      title: "Configure as opções de exportação",
      body: 'Clique em "Múltiplos formatos" dentro da seção do YouTube. Mantenha o histórico de exibição selecionado e, quando houver a opção de formato, escolha JSON — é mais fácil de processar e oferece dados mais ricos.',
    },
    {
      title: "Crie a exportação",
      body: 'Role até o fim da página e clique em "Próxima etapa". Escolha "Enviar link por e-mail" como método de entrega e ZIP como formato do arquivo. Depois clique em "Criar exportação" para iniciar o processo.',
    },
    {
      title: "Aguarde o e-mail do Google",
      body: "O Google vai processar sua solicitação e enviar um e-mail quando a exportação estiver pronta. O tempo varia — pode ser alguns minutos ou algumas horas.",
    },
    {
      title: "Baixe o arquivo",
      body: "Quando o e-mail chegar, clique no link de download. Você receberá um arquivo ZIP com todos os seus dados do YouTube. Salve-o em algum lugar fácil de encontrar.",
    },
    {
      title: "Envie para o TubeTrace",
      body: "Volte para o TubeTrace e arraste o arquivo ZIP (ou o JSON/HTML extraído) direto na página inicial. O relatório aparece em segundos — sem upload para servidor, tudo processado no seu próprio navegador.",
    },
  ],
  jsonVsHtmlH2: "JSON ou HTML: qual formato escolher?",
  jsonTitle: "JSON (Recomendado)",
  jsonItems: [
    "Dados estruturados e fáceis de processar",
    "Leitura automática sem ambiguidade de formato",
    "Disponível na maioria das contas do Google",
    "Nome do arquivo: watch-history.json",
  ],
  htmlTitle: "HTML",
  htmlItems: [
    "Também suportado pelo TubeTrace",
    "Legível por humanos — dá para abrir no navegador",
    "As datas podem estar em português com fuso BRT",
    "Nome do arquivo: watch-history.html",
  ],
  problemsH2: "Problemas comuns e soluções",
  problems: [
    {
      problem: "TubeTrace diz 'Nenhum arquivo de histórico encontrado'",
      solution:
        "Verifique se o arquivo ZIP vem de um export do YouTube (não de outro serviço do Google). O TubeTrace procura especificamente pelos arquivos watch-history.json ou watch-history.html dentro da pasta do YouTube.",
    },
    {
      problem: "A exportação diz 'Nenhuma entrada'",
      solution:
        "Seu histórico de exibição pode estar pausado ou ter sido apagado. Acesse myactivity.google.com, vá em Configurações de atividade e verifique se o histórico do YouTube está ativo.",
    },
    {
      problem: "O ZIP está grande demais para carregar",
      solution:
        "Extraia o ZIP e localize apenas o arquivo watch-history.json ou watch-history.html dentro da pasta YouTube/history/. Envie só esse arquivo — ele é bem menor.",
    },
    {
      problem: "O e-mail do Google nunca chegou",
      solution:
        "Verifique a caixa de spam. Se não estiver lá, acesse takeout.google.com novamente — a exportação pode ter falhado silenciosamente. Você também pode acompanhar o status de exportações anteriores na mesma página.",
    },
    {
      problem: "A exportação só contém alguns meses de histórico",
      solution:
        "Isso geralmente significa que a exclusão automática está ativada na sua conta. Acesse myaccount.google.com/activitycontrols, encontre 'Histórico do YouTube' e verifique a configuração de exclusão automática — se estiver definida para 3 ou 18 meses, as entradas mais antigas já foram removidas permanentemente pelo Google e não podem ser recuperadas, mesmo com uma nova exportação.",
    },
    {
      problem: "O TubeTrace mostra menos vídeos do que eu esperava",
      solution:
        "O watch-history.json só inclui vídeos assistidos enquanto conectado com o histórico ativado. Vídeos assistidos no modo anônimo, desconectado ou durante um período em que o histórico estava pausado não aparecem — isso é uma limitação dos dados do YouTube, não um problema do TubeTrace.",
    },
  ],
  faqH2: "Perguntas frequentes",
  faqs: [
    {
      q: "Exportar os dados apaga meu histórico do YouTube?",
      a: "Não. A exportação é uma cópia dos seus dados — nada é removido da sua conta. Seu histórico continua exatamente como estava.",
    },
    {
      q: "Posso solicitar a exportação mais de uma vez?",
      a: "Sim, sem limite. Você pode exportar seus dados do Google Takeout quantas vezes quiser, a qualquer momento.",
    },
    {
      q: "É seguro enviar meu arquivo para o TubeTrace?",
      a: "Totalmente. O TubeTrace processa tudo localmente no seu navegador — o arquivo nunca é enviado para nenhum servidor. Seus dados ficam no seu computador o tempo todo.",
    },
    {
      q: "Preciso fazer login no TubeTrace para ver meus resultados?",
      a: "Não. O TubeTrace não tem nenhum sistema de login. Basta soltar o arquivo exportado na página de upload e seu relatório é gerado instantaneamente no navegador.",
    },
    {
      q: "Posso exportar meu histórico pelo app do YouTube em vez do navegador?",
      a: "O Google Takeout só está disponível pelo navegador em takeout.google.com — não há opção de exportação dentro do app do YouTube. Você ainda pode abrir takeout.google.com no navegador do celular e seguir os mesmos passos.",
    },
    {
      q: "E se eu tiver histórico de vários anos?",
      a: "O TubeTrace não tem limite de quanto histórico consegue processar — ele lida com exportações cobrindo uma década ou mais. Exportações muito grandes (dezenas de milhares de entradas) podem levar alguns segundos a mais para processar, mas tudo continua acontecendo localmente no seu navegador.",
    },
  ],
  cta: {
    h2: "Pronto para analisar seu histórico?",
    desc: "Envie sua exportação do Google Takeout e descubra tudo sobre seus hábitos no YouTube.",
    upload: "Enviar minha exportação",
    sample: "Ver relatório de exemplo antes",
  },
};
