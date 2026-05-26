export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 'hook',
    period: 'Out 2023 — Abr 2026',
    role: 'Desenvolvedor Full Stack',
    company: 'Hook Digital',
    description:
      'Desenvolvimento de sites para empresas de diversos segmentos, incluindo sites dinâmicos com quiz interativo, formulários multi-etapa, landing pages e blogs. Realizei manutenção e evolução de projetos em React, PHP e WordPress, com forte integração ao HubSpot CMS. Stack: JavaScript, TypeScript, React, HubL, PHP.',
  },
  {
    id: 'dls',
    period: 'Mai 2023 — Set 2023',
    role: 'Desenvolvedor Front-end',
    company: 'Grupo DLS',
    description:
      'Desenvolvimento e manutenção de sites para clientes de diferentes segmentos, com criação de temas personalizados (WordPress), sites e landing pages e funcionalidades dinâmicas. Stack: PHP, JavaScript, SCSS, ACF e Gulp.',
  },
  {
    id: 'ecommerce',
    period: 'Fev 2020 — Abr 2023',
    role: 'Desenvolvedor Web & Tráfego Pago',
    company: 'E-commerce Próprio',
    description:
      'Desenvolvi e gerenciei e-commerce próprio do zero, atingindo mais de R$1M em faturamento. Responsável pelo desenvolvimento front-end, criação do site, landing pages de produtos, e gestão de campanhas de tráfego pago com Google Ads e Meta Ads. Stack: JavaScript, React, WordPress, HTML, CSS, Google Analytics, Facebook Ads, Google Ads.',
  },
  {
    id: 'casashopping',
    period: 'Ago 2016 — Jan 2019',
    role: 'Coordenador Administrativo',
    company: 'CasaShopping',
    description:
      'Coordenação de equipe operacional e administrativa de 22 pessoas. Gestão financeira do estacionamento e forte participação no projeto de reestruturação do setor, resultando em aumento da receita mensal do shopping.',
  },
];
