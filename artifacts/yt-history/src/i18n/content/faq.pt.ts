import type { FaqContent } from "../types";

export const faqPt: FaqContent = {
  meta: {
    title: "Perguntas Frequentes — TubeTrace",
    description:
      "Tire suas dúvidas sobre o TubeTrace: privacidade, formatos suportados, como exportar o histórico do YouTube e muito mais.",
  },
  eyebrow: "FAQ",
  h1: "Perguntas Frequentes",
  intro:
    "Respondemos as dúvidas mais comuns sobre o TubeTrace. Não encontrou o que procura? Veja nosso guia de exportação ou entre em contato.",
  faqs: [
    {
      q: "O TubeTrace é seguro?",
      a: "Sim. O TubeTrace é uma aplicação open-source que roda inteiramente no seu navegador. Não há servidores recebendo seus dados, não há rastreamento e não há necessidade de login. Você pode auditar o código-fonte no GitHub.",
    },
    {
      q: "Meus dados saem do navegador?",
      a: "Não. Todo o processamento acontece localmente, no seu próprio dispositivo. O arquivo que você envia é lido pelo JavaScript do navegador — nenhum dado é transmitido para servidores externos em nenhum momento.",
    },
    {
      q: "Como exporto meu histórico do YouTube?",
      a: "Acesse takeout.google.com, desmarque tudo, selecione apenas YouTube e YouTube Music, escolha o formato JSON quando disponível e solicite a exportação. O Google envia um e-mail com o link para download. Confira nosso guia completo para o passo a passo detalhado.",
    },
    {
      q: "Qual arquivo devo enviar?",
      a: "Você pode enviar o ZIP completo do Google Takeout — o TubeTrace encontra automaticamente os arquivos certos dentro dele. Se preferir, pode extrair e enviar apenas o watch-history.json ou o watch-history.html.",
    },
    {
      q: "Por que o TubeTrace não encontra meu histórico no ZIP?",
      a: "Certifique-se de que o ZIP foi gerado pela seleção do YouTube no Google Takeout — não de outro serviço. O TubeTrace procura especificamente os arquivos watch-history.json e watch-history.html dentro da pasta do YouTube. Se o problema persistir, tente extrair e enviar o arquivo diretamente.",
    },
    {
      q: "O TubeTrace funciona offline?",
      a: "Depois que a página carrega, sim. O processamento é todo local, então você não precisa de conexão com a internet para analisar seu histórico. Basta carregar a página uma vez e poderá usá-la sem internet.",
    },
    {
      q: "O TubeTrace é afiliado ao YouTube ou Google?",
      a: "Não. O TubeTrace é um projeto independente e open-source, sem qualquer vínculo com o YouTube, Google ou qualquer outra empresa. Usamos apenas os dados que você mesmo exporta pelo Google Takeout.",
    },
    {
      q: "Quais formatos de histórico são suportados?",
      a: "O TubeTrace aceita watch-history.json (recomendado), watch-history.html e arquivos ZIP ou TGZ gerados pelo Google Takeout. Tanto o JSON quanto o HTML são gerados pelo Google Takeout — o JSON é o formato preferido por oferecer dados mais precisos.",
    },
    {
      q: "Meu histórico só vai alguns anos atrás. Por quê?",
      a: "O histórico disponível no Google Takeout se limita ao que o Google tem registrado na sua conta. Se você pausou o histórico de exibição em algum momento, desativou a sincronização ou usou o YouTube sem estar logado, esses períodos não aparecem no export.",
    },
    {
      q: "Posso usar o TubeTrace sem enviar arquivo?",
      a: "Sim! O TubeTrace tem um modo de demonstração que gera dados sintéticos para você explorar o relatório sem precisar enviar nenhum arquivo. Clique em 'Ver relatório de exemplo' na página inicial.",
    },
    {
      q: "O TubeTrace é gratuito?",
      a: "Sim, completamente gratuito. Não há planos pagos, sem limite de uso e sem anúncios. O TubeTrace é um projeto open-source mantido pela comunidade.",
    },
    {
      q: "Quão precisa é a estimativa de tempo assistido?",
      a: "É uma estimativa. O Google Takeout registra que você iniciou um vídeo, mas não quanto tempo você assistiu. O TubeTrace usa a duração média dos vídeos para estimar o tempo total — o número real pode variar para mais ou para menos.",
    },
  ],
  stillHaveH2: "Ainda tem dúvidas?",
  stillHaveDesc:
    "Consulte nosso guia completo de exportação para instruções detalhadas sobre como obter seu histórico do YouTube, ou entre em contato pelo GitHub.",
  cta: {
    analyze: "Analisar meu histórico",
    sample: "Ver relatório de exemplo",
  },
};
