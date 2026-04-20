import { Monitor, Server, Wrench } from 'lucide-react'
import { stackCategories } from '../../data/stack'
import styles from './Stack.module.css'

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Monitor size={18} aria-hidden="true" />,
  backend: <Server size={18} aria-hidden="true" />,
  tools: <Wrench size={18} aria-hidden="true" />,
}

export default function Stack() {
  return (
    <section id="stack" className={`section ${styles.section}`} aria-labelledby="stack-title">
      <span className="eyebrow">Ferramentas do ofício</span>
      <h2 id="stack-title" className="section-title">Stack técnica</h2>

      <div className={styles.categories}>
        {stackCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>
                {categoryIcons[category.id]}
              </span>
              <h3 className={styles.categoryLabel}>{category.label}</h3>
            </div>
            <div className={styles.pills} role="list" aria-label={`Tecnologias de ${category.label}`}>
              {category.items.map((item) => (
                <span key={item} className="tag" role="listitem">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
