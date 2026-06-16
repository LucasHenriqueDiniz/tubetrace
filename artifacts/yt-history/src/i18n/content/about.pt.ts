import type { AboutContent } from "../types";

export const aboutPt: AboutContent = {
  meta: {
    title: "Sobre o TubeTrace — Analisador de Histórico do YouTube",
    description:
      "O TubeTrace é uma ferramenta gratuita e open-source que analisa seu histórico do YouTube diretamente no navegador. Sem servidor, sem cadastro, 100% privado.",
  },
  eyebrow: "Sobre",
  h1: "O que é o TubeTrace?",
  intro:
    "O TubeTrace é um analisador de histórico do YouTube gratuito, open-source e que roda inteiramente no seu navegador. Envie seu export do Google Takeout e descubra tudo sobre seus hábitos de consumo no YouTube — sem cadastro, sem servidor, sem nenhum dado saindo do seu computador.",
  features: [
    {
      title: "100% Privado",
      desc: "Todo o processamento acontece localmente no seu navegador. Seus dados nunca são enviados para nenhum servidor.",
    },
    {
      title: "Análise Instantânea",
      desc: "Resultados em segundos após o upload. Sem espera, sem processamento em fila.",
    },
    {
      title: "Sem conta necessária",
      desc: "Não precisa criar conta, fazer login ou fornecer qualquer informação pessoal.",
    },
    {
      title: "Código aberto",
      desc: "O código-fonte está disponível no GitHub. Qualquer pessoa pode auditar, contribuir ou fazer um fork.",
    },
  ],
  whyH2: "Por que o TubeTrace?",
  whyParas: [
    "O YouTube não oferece um resumo anual como o Spotify Wrapped — e quando disponibiliza o Recap, os requisitos são tão rígidos que muita gente fica de fora. Queríamos criar algo que qualquer pessoa pudesse usar, independente de região, idade ou frequência de uso.",
    "A privacidade foi uma decisão desde o início. Histórico de visualizações é algo pessoal — revela interesses, rotinas e até momentos difíceis da vida. Por isso o TubeTrace não coleta nada: o arquivo fica no seu dispositivo e o processamento acontece no seu navegador.",
    "Construímos o TubeTrace como uma ferramenta que gostaríamos de usar. Simples, rápida e honesta sobre o que faz com seus dados.",
  ],
  whatH2: "O que o TubeTrace analisa",
  whatItems: [
    "Total de vídeos assistidos e estimativa de horas consumidas",
    "Ranking dos canais mais assistidos",
    "Evolução do consumo por mês e por ano",
    "Heatmap de atividade por hora do dia e dia da semana",
    "Detecção de maratonas e sessões longas",
    "Tipo de personalidade de espectador",
    "Períodos de pico e tendências ao longo do tempo",
    "Distribuição de conteúdo por categoria e canal",
    "Comparação entre diferentes períodos do histórico",
  ],
  howH2: "Como usar o TubeTrace",
  howSteps: [
    "Acesse takeout.google.com e exporte seu histórico do YouTube",
    "Aguarde o e-mail do Google com o link para download",
    "Arraste o arquivo ZIP (ou o JSON/HTML extraído) para o TubeTrace",
    "Explore seu relatório — pronto em segundos",
  ],
  cta: {
    analyze: "Analisar meu histórico",
    sample: "Ver relatório de exemplo",
    github: "Ver no GitHub",
  },
};
