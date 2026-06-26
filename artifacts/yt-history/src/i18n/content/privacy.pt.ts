import type { PrivacyContent } from "../types";

export const privacyPt: PrivacyContent = {
  meta: {
    title: "Política de Privacidade — TubeTrace",
    description:
      "Política de Privacidade do TubeTrace — como tratamos seus dados, cookies e publicidade.",
  },
  eyebrow: "Privacidade",
  h1: "Política de Privacidade",
  updated: "Última atualização: 26 de junho de 2026",
  summary:
    "🔒 O TubeTrace processa todo o seu histórico do YouTube localmente no seu navegador. Nenhum dado do seu histórico é enviado para nossos servidores ou para terceiros.",
  sections: [
    {
      h2: "1. Quem somos",
      paragraphs: [
        "O TubeTrace (tubetrace.pages.dev) é uma ferramenta gratuita de análise de histórico do YouTube que processa dados do Google Takeout diretamente no navegador do usuário.",
      ],
    },
    {
      h2: "2. Dados que coletamos",
      paragraphs: [
        "O TubeTrace não coleta, armazena nem transmite o seu histórico do YouTube. Todo o processamento ocorre localmente no seu dispositivo.",
        "Os únicos dados que podem ser coletados são:",
      ],
      items: [
        "Dados de uso anônimos via Google Analytics (se aplicável): páginas visitadas, tempo de sessão, país de origem. Não identificam você pessoalmente.",
        "Cookies de publicidade do Google AdSense, descritos na seção 5.",
      ],
    },
    {
      h2: "3. Dados que você fornece",
      paragraphs: [
        "Quando você faz upload do seu arquivo do Google Takeout (ZIP, JSON ou HTML), esse arquivo é lido diretamente no seu navegador via JavaScript. O arquivo não é enviado para nenhum servidor. Após fechar ou recarregar a página, os dados são descartados automaticamente.",
      ],
    },
    {
      h2: "4. Cookies",
      paragraphs: ["Usamos os seguintes tipos de cookies:"],
      items: [
        "Cookies essenciais: necessários para o funcionamento básico do site.",
        "Cookies de publicidade: o Google AdSense utiliza cookies para exibir anúncios relevantes. Veja a seção 5.",
      ],
    },
    {
      h2: "5. Google AdSense e publicidade",
      paragraphs: [
        "Este site utiliza o Google AdSense para exibição de anúncios. O Google, como fornecedor terceirizado, usa cookies para veicular anúncios com base em visitas anteriores do usuário a este e outros sites.",
      ],
      subsections: [
        {
          h3: "5.1 Cookies de publicidade do Google",
          paragraphs: [
            "O Google AdSense utiliza os seguintes tipos de cookies e tecnologias:",
          ],
          items: [
            "Cookies de publicidade do Google: Usados para personalização de anúncios e limitação de frequência. Permitem ao Google veicular anúncios relevantes com base no seu histórico de navegação.",
            "Cookies DoubleClick: Rastreiam o desempenho dos anúncios, previnem fraude e medem conversões.",
            "Google Analytics (se habilitado): Cookies para medir uso do site, páginas visitadas e tempo de sessão. Não identificam você pessoalmente.",
            "Sinais de Web Beacon e Internet: Pequenas imagens ou scripts que rastreiam interações com anúncios e conteúdo.",
          ],
        },
        {
          h3: "5.2 Como gerenciar suas preferências",
          paragraphs: [],
          items: [
            "Recusar anúncios personalizados: adssettings.google.com — Configure suas preferências de publicidade personalizada.",
            "Como o Google usa dados: Política de privacidade de anúncios do Google (policies.google.com/technologies/ads).",
            "Política de privacidade do Google: policies.google.com/privacy.",
            "Seu consentimento: Se você reside na UE/EEA, verá um banner de consentimento ao carregar o site para aceitar ou recusar cookies de publicidade.",
          ],
        },
        {
          h3: "5.3 Cookies essenciais vs. opcional",
          paragraphs: [
            "Cookies essenciais (ex: segurança, idioma) são necessários para o funcionamento do site. Cookies de publicidade são opcionais — você pode recusá-los, embora isso possa significar anúncios menos relevantes.",
          ],
        },
      ],
    },
    {
      h2: "6. Serviços de terceiros",
      paragraphs: [
        "O TubeTrace pode integrar os seguintes serviços de terceiros, cada um com sua própria política de privacidade:",
      ],
      items: [
        "Google AdSense — publicidade: policies.google.com/privacy",
        "Cloudflare Pages — hospedagem: cloudflare.com/privacypolicy",
        "Google Fonts — tipografia: policies.google.com/privacy",
      ],
    },
    {
      h2: "7. Seus direitos (LGPD)",
      paragraphs: [
        "De acordo com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem direito a:",
      ],
      items: [
        "Confirmar a existência de tratamento de dados pessoais",
        "Acessar seus dados pessoais",
        "Solicitar a correção, exclusão ou anonimização dos dados",
        "Revogar o consentimento a qualquer momento",
      ],
      subsections: [
        {
          h3: "Proteção de dados no Brasil",
          paragraphs: [
            "Como não armazenamos seus dados de histórico, não há dados pessoais para excluir no TubeTrace além dos cookies de terceiros mencionados acima.",
          ],
        },
      ],
    },
    {
      h2: "8. Menores de idade",
      paragraphs: [
        "O TubeTrace não é direcionado a menores de 13 anos e não coleta intencionalmente dados de crianças.",
      ],
    },
    {
      h2: "9. Alterações nesta política",
      paragraphs: [
        "Podemos atualizar esta política periodicamente. A data de 'última atualização' no topo indica quando ocorreu a revisão mais recente.",
      ],
    },
    {
      h2: "10. Contato",
      paragraphs: [
        "Dúvidas sobre esta política? Abra uma issue em github.com/LucasHenriqueDiniz/tubetrace.",
      ],
    },
  ],
};
