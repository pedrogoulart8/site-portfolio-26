export interface StackCategory {
  id: string;
  label: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    id: 'frontend',
    label: 'Front-end',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind'],
  },
  {
    id: 'backend',
    label: 'Back-end',
    items: ['Node.js', 'Next.js', 'PHP', 'HubL'],
  },
  {
    id: 'tools',
    label: 'Ferramentas & IA',
    items: ['n8n', 'Integrações de API', 'Claude AI', 'Git', 'GitHub', 'HubSpot', 'WordPress', 'Figma', 'Vercel'],
  },
];
