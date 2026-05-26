import styles from './Stack.module.css'

interface SkillItem {
  name: string
  icon: React.ReactNode
}

// ── Icon helpers ───────────────────────────────────────────────────────────────

function Badge({
  text,
  bg,
  textColor = '#ffffff',
}: {
  text: string
  bg: string
  textColor?: string
}) {
  const len = text.length
  const fontSize = len <= 2 ? 15 : len <= 3 ? 12 : len <= 4 ? 10 : 8.5
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="8" fill={bg} />
      <text
        x="18"
        y="18"
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={fontSize}
        fontFamily="system-ui,-apple-system,sans-serif"
        fontWeight="700"
      >
        {text}
      </text>
    </svg>
  )
}

function ReactIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" />
      <ellipse
        cx="12" cy="12" rx="11" ry="4.2"
        stroke="#61DAFB" strokeWidth="1"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12" cy="12" rx="11" ry="4.2"
        stroke="#61DAFB" strokeWidth="1"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

function TailwindIcon() {
  return (
    <svg width="36" height="22" viewBox="0 0 54 33" aria-hidden="true">
      <path
        fill="#06B6D4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
      />
    </svg>
  )
}

function GitIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#F05032"
        d="M23.546 10.93L13.067.452c-.604-.604-1.582-.604-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.546-.547-.676-1.363-.396-2.028L7.608 3.681.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function FigmaIcon() {
  return (
    <svg width="24" height="36" viewBox="0 0 38 57" aria-hidden="true">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
    </svg>
  )
}

function VercelIcon() {
  return (
    <svg width="36" height="32" viewBox="0 0 24 21" fill="currentColor" aria-hidden="true">
      <path d="M12 0L24 21H0L12 0z" />
    </svg>
  )
}

// ── Skill rows ────────────────────────────────────────────────────────────────

const row1: SkillItem[] = [
  { name: 'React',      icon: <ReactIcon /> },
  { name: 'TypeScript', icon: <Badge text="TS"   bg="#3178C6" /> },
  { name: 'JavaScript', icon: <Badge text="JS"   bg="#F7DF1E" textColor="#323330" /> },
  { name: 'HTML',       icon: <Badge text="HTML" bg="#E34F26" /> },
  { name: 'CSS',        icon: <Badge text="CSS"  bg="#264DE4" /> },
  { name: 'SCSS',       icon: <Badge text="SCSS" bg="#CC6699" /> },
  { name: 'Tailwind',   icon: <TailwindIcon /> },
  { name: 'Node.js',    icon: <Badge text="Node" bg="#339933" /> },
  { name: 'Next.js',    icon: <Badge text="Next" bg="#000000" /> },
  { name: 'PHP',        icon: <Badge text="PHP"  bg="#777BB4" /> },
  { name: 'HubL',       icon: <Badge text="HubL" bg="#FF7A59" /> },
]

const row2: SkillItem[] = [
  { name: 'Git',         icon: <GitIcon /> },
  { name: 'GitHub',      icon: <GitHubIcon /> },
  { name: 'Figma',       icon: <FigmaIcon /> },
  { name: 'Vercel',      icon: <VercelIcon /> },
  { name: 'n8n',         icon: <Badge text="n8n"  bg="#EA4B71" /> },
  { name: 'Claude AI',   icon: <Badge text="AI"   bg="#7C3AED" /> },
  { name: 'HubSpot',     icon: <Badge text="HS"   bg="#FF7A59" /> },
  { name: 'WordPress',   icon: <Badge text="WP"   bg="#21759B" /> },
  { name: 'API',         icon: <Badge text="API"  bg="#0EA5E9" /> },
]

// ── Carousel track ────────────────────────────────────────────────────────────

function CarouselTrack({
  items,
  direction,
}: {
  items: SkillItem[]
  direction: 'left' | 'right'
}) {
  const doubled = [...items, ...items]
  return (
    <div
      className={`${styles.track} ${direction === 'left' ? styles.trackLeft : styles.trackRight}`}
      aria-hidden="true"
    >
      {doubled.map((item, i) => (
        <div key={i} className={styles.item}>
          <span className={styles.itemIcon}>{item.icon}</span>
          <span className={styles.itemName}>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Stack() {
  return (
    <section id="stack" className={`section ${styles.section}`} aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title">Stack técnica</h2>

      <div className={styles.card}>
        <div className={styles.carouselOuter}>
          <CarouselTrack items={row1} direction="left" />
          <CarouselTrack items={row2} direction="right" />
        </div>
      </div>
    </section>
  )
}
