export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
  imagePlaceholder: string;
  videoAlt?: string;
  inProduction?: boolean;
}

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 'financas',
    number: '01',
    title: 'Gerenciador de Finanças Pessoais',
    description:
      'Aplicativo de controle de gastos pessoais com leitura de notas fiscais e boletos por IA. O app possibilita tirar foto do comprovante de pagamento pelo celular e depois envia essa imagem para a API do Claude. A IA extrai automaticamente data, valor, destinatário e método de pagamento, e salva no banco de dados. Disponível painel de Dashboard com seis visualizações: comparação mensal, gastos por categoria, série diária, curva cumulativa mês vs mês anterior, ranking dos maiores gastos e padrão por dia da semana. Instalável como PWA no celular e desktop. ',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Claude API', 'Tailwind', 'Tremor', 'PWA'],
    demoUrl: 'https://gastos-pessoais-red.vercel.app/',
    githubUrl: 'https://github.com/pedrogoulart8/gastos-pessoais',
    imagePlaceholder: 'Print do projeto aqui',
    videoAlt: 'Demo do Gerenciador de Finanças mostrando extração automática de comprovante por IA',
  },
  {
    id: 'youtube',
    number: '02',
    title: 'YouTube Analytics Dashboard',
    description:
      'Dashboard que consome dados do Youtube (YouTube Data API v3) e exibe métricas reais de canais do YouTube. Quatro modos: análise detalhada de canal com gráficos de performance, busca de vídeos com filtros, trending por região com distribuição por categoria, e comparador lado a lado de até 4 canais.',
    stack: ['React', 'TypeScript', 'Node.js', 'Fastify', 'Redis', 'YouTube Data API'],
    demoUrl: 'https://youtube-insights-pedrogoulart8s-projects.vercel.app/channel',
    githubUrl: 'https://github.com/pedrogoulart8/dashboard-youtube-api',
    imagePlaceholder: 'Print do projeto aqui',
    videoAlt: 'Demo do YouTube Analytics Dashboard mostrando busca de canal e gráficos de performance',
  },
  {
    id: 'frete',
    number: '03',
    title: 'Automação de Cotação de Frete',
    description:
      'Automação que eliminou processo 100% manual de cotação de frete por pedido em loja virtual real (Vesty Prata). Script em Python + Playwright faz scraping do site da transportadora, atualiza a planilha de vendas via Google Sheets API e o n8n orquestra a execução agendada e notifica o gestor por email.',
    stack: ['Python', 'Playwright', 'n8n', 'Google Sheets API', 'Gmail'],
    demoUrl: undefined,
    githubUrl: 'https://github.com/pedrogoulart8/frete-automatizado-ecommerce',
    imagePlaceholder: 'Print do projeto aqui',
    videoAlt: 'Demo da automação de cotação de frete rodando no terminal',
    inProduction: true,
  },
];

export const otherProjects: OtherProject[] = [
  {
    id: 'chronos',
    title: 'Chronos Pomodoro Moderno',
    description:
      'Aplicativo de produtividade baseado na técnica Pomodoro, construído em React + TypeScript. Configuração de ciclos de foco e descanso, histórico de sessões e tema personalizável.',
    stack: ['React', 'TypeScript', 'Vite', 'Context API'],
    demoUrl: 'https://chronos-pomodoro-moderno.vercel.app/',
    githubUrl: 'https://github.com/pedrogoulart8/chronos-pomodoro-moderno',
  },
  {
    id: 'github-finder',
    title: 'GitHub Finder',
    description:
      'App que consome a API pública do GitHub para buscar perfis e exibir informações, repositórios e estatísticas. Consumo de API REST com tipagem forte em TypeScript.',
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://pedrogoulart8.github.io/api-github-ts-react/',
    githubUrl: 'https://github.com/pedrogoulart8/api-github-ts-react',
  },
  {
    id: 'blog',
    title: 'Blog React',
    description:
      'Blog consumindo API para listar posts e categorias. Roteamento com React Router, consumo de API e layout responsivo.',
    stack: ['React', 'React Router'],
    demoUrl: 'https://pedrogoulart8.github.io/api-blog-react/',
    githubUrl: 'https://github.com/pedrogoulart8/api-blog-react',
  },
];
