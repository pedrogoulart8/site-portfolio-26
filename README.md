# Pedro Goulart — Portfolio

Site portfólio pessoal. Construído com React 18 + TypeScript + Vite, estilizado com CSS Modules.

## Stack

- React 18 + TypeScript
- Vite
- CSS Modules (sem Tailwind, sem bibliotecas de UI)
- lucide-react (ícones)
- Google Fonts: Inter + Space Grotesk

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`

## Build de produção

```bash
npm run build
```

Os arquivos gerados ficam em `/dist`. Para pré-visualizar o build localmente:

```bash
npm run preview
```

## Estrutura

```
src/
├── components/       # Componentes por seção
│   ├── Header/
│   ├── Hero/
│   ├── About/
│   ├── FeaturedProjects/
│   ├── OtherProjects/
│   ├── Stack/
│   ├── Experience/
│   ├── Contact/
│   └── Footer/
├── data/             # Dados tipados (projetos, experiência, stack)
│   ├── projects.ts
│   ├── experience.ts
│   └── stack.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx
public/
├── hero-placeholder.png   ← substituir pela foto real (WebP, 800x800)
├── cv-pedro-goulart.pdf   ← substituir pelo CV real
├── projects/              ← screenshots dos projetos
└── favicon.svg
```

## Substituições pendentes

- `public/hero-placeholder.png` → foto gerada no Nano Banana (WebP, 800x800px)
- `public/cv-pedro-goulart.pdf` → CV real em PDF
- `public/projects/frete-screenshot.png` → screenshot do projeto de automação
- `public/projects/youtube-screenshot.png` → screenshot do dashboard
- `public/projects/chronos-screenshot.png` → screenshot do Chronos

## Deploy

Deploy via [Vercel](https://vercel.com). Conectar o repositório e configurar o domínio `pedrogoulart.dev`.
