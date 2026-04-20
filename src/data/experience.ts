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
    role: 'Desenvolvedor Júnior',
    company: 'Hook Digital',
    description:
      'Desenvolvimento de sites, landing pages, blogs e módulos personalizados com forte integração ao HubSpot CMS. Stack: JavaScript, React, HubL, PHP.',
  },
  {
    id: 'dls',
    period: 'Mai 2023 — Set 2023',
    role: 'Desenvolvedor Júnior',
    company: 'Grupo DLS',
    description:
      'Desenvolvimento de sites, landing pages e temas personalizados para WordPress com PHP, JavaScript, SCSS, ACF e Gulp.',
  },
  {
    id: 'ecommerce',
    period: 'Fev 2020 — Abr 2023',
    role: 'Desenvolvedor Web & Tráfego Pago',
    company: 'E-commerce Próprio',
    description:
      'Administração geral de e-commerce, desenvolvimento de sites e gestão de campanhas de tráfego pago. Stack: JavaScript, React, WordPress, Google Ads, Meta Ads, Google Analytics.',
  },
  {
    id: 'casashopping',
    period: 'Ago 2016 — Jan 2019',
    role: 'Coordenador Administrativo',
    company: 'CasaShopping',
    description:
      'Coordenação de rotinas administrativas de uma equipe de 22 pessoas e forte participação no projeto de reestruturação do estacionamento do shopping, aumentando a receita mensal do setor.',
  },
];
