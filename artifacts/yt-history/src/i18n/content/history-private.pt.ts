import type { YoutubePrivacyContent } from "../types";

export const youtubePrivacyPt: YoutubePrivacyContent = {
  meta: {
    title: "O histórico do YouTube é privado? Quem pode ver o que você assiste",
    description:
      "Seu histórico do YouTube é privado por padrão — outros usuários não podem ver. Mas o Google sim. Saiba quem acessa seus dados e como usar o TubeTrace com total privacidade.",
  },
  eyebrow: "Guia",
  h1: "O histórico do YouTube é privado? Quem pode ver o que você assiste",
  intro:
    "Sim, seu histórico do YouTube é privado por padrão. Nenhum outro usuário consegue ver o que você assistiu — apenas você tem acesso à sua lista de vídeos visualizados. Isso dito, o Google coleta e usa esses dados internamente.",
  whoCanSeeH2: "Quem pode ver seu histórico do YouTube?",
  whoCanSee: [
    {
      title: "Outros usuários",
      answer: "Não podem ver",
      positive: true,
      desc: "Seu histórico de exibição é completamente privado para outros usuários do YouTube. Ninguém pode acessar sua lista de vídeos assistidos — nem seus seguidores, nem quem você segue.",
    },
    {
      title: "Google e YouTube",
      answer: "Podem ver",
      positive: false,
      desc: "O Google tem acesso total ao seu histórico e o usa para personalizar recomendações, direcionar anúncios e melhorar seus serviços. Isso está descrito na política de privacidade da empresa.",
    },
    {
      title: "Anunciantes",
      answer: "Não veem diretamente",
      positive: true,
      desc: "Os anunciantes não recebem seu histórico individual. O Google cria segmentos de audiência com base nos seus dados e os usa para direcionar anúncios — mas sem revelar sua identidade ou histórico específico.",
    },
    {
      title: "Contas compartilhadas",
      answer: "Podem ver se estiverem logados",
      positive: false,
      desc: "Se outra pessoa usa o YouTube com a mesma conta do Google, ela consegue ver seu histórico de exibição. Use perfis separados ou o modo anônimo se quiser manter a privacidade em dispositivos compartilhados.",
    },
    {
      title: "TubeTrace",
      answer: "Não pode ver",
      positive: true,
      desc: "O TubeTrace processa tudo localmente no seu navegador. O arquivo que você envia nunca é transmitido para nenhum servidor — seus dados ficam no seu dispositivo o tempo todo.",
    },
  ],
  howToPrivacyH2: "Como tornar seu histórico do YouTube mais privado",
  privacyOptions: [
    {
      title: "Pausar o histórico de exibição",
      desc: "Você pode pausar o registro do histórico em myactivity.google.com. Com o histórico pausado, o YouTube para de registrar o que você assiste — mas as recomendações ficam menos personalizadas.",
    },
    {
      title: "Ativar exclusão automática",
      desc: "Configure o YouTube para excluir automaticamente seu histórico após 3 ou 18 meses. Assim, dados antigos são removidos sem precisar fazer isso manualmente.",
    },
    {
      title: "Usar o modo anônimo",
      desc: "O modo anônimo no app do YouTube ou o modo de navegação privada no navegador impede que o vídeo assistido seja adicionado ao seu histórico — útil para pesquisas pontuais.",
    },
    {
      title: "Excluir vídeos específicos",
      desc: "Em myactivity.google.com você pode remover vídeos específicos do seu histórico, um a um ou em lote, sem precisar apagar tudo.",
    },
  ],
  isSafeH2: "É seguro analisar meu histórico com o TubeTrace?",
  isSafeTitle: "Sim — o TubeTrace é 100% client-side",
  isSafeDesc:
    "Todo o processamento acontece no seu navegador. O arquivo do Google Takeout que você envia nunca é transmitido para nenhum servidor externo — ele é lido e analisado localmente, na sua própria máquina.",
  isSafeItems: [
    "Nenhum dado é enviado para servidores",
    "Não requer login nem cadastro",
    "Não rastreia nem armazena suas informações",
    "Código aberto — qualquer pessoa pode auditar",
    "Funciona até mesmo offline após o carregamento da página",
  ],
  faqH2: "Perguntas frequentes",
  faqs: [
    {
      q: "Um canal que eu sigo consegue ver que assisti aos vídeos dele?",
      a: "Não. Criadores conseguem ver contagens de visualizações agregadas e anônimas do próprio canal, mas não conseguem ver quais contas específicas assistiram aos vídeos nem vincular uma visualização à sua identidade.",
    },
    {
      q: "Apagar meu histórico do YouTube o remove totalmente dos servidores do Google?",
      a: "Apagar o histórico o remove da visualização da sua conta e de recursos como recomendações, mas as políticas gerais de retenção de dados e retenção legal do Google (documentadas na própria política de privacidade do Google) podem manter certos registros por um período limitado do lado deles.",
    },
    {
      q: "Se eu usar o TubeTrace, o YouTube fica sabendo que analisei meu histórico?",
      a: "Não. O TubeTrace nunca se conecta à sua conta do YouTube ou Google — ele só lê o arquivo de exportação que você já baixou, inteiramente dentro do seu navegador. O YouTube não tem nenhuma visibilidade sobre esse processo.",
    },
  ],
  cta: {
    h2: "Explore seu histórico com privacidade",
    desc: "Analise seus dados do YouTube sem abrir mão da privacidade. Tudo no seu navegador, sem rastros.",
    upload: "Analisar meu histórico",
    sample: "Ver relatório de exemplo",
    exportGuide: "Como exportar meus dados",
  },
};
