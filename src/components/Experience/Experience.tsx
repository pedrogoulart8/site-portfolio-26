import { experiences } from '../../data/experience'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experiencia" className={`section ${styles.section}`} aria-labelledby="experience-title">
      <span className="eyebrow">Trajetória</span>
      <h2 id="experience-title" className="section-title">Experiência</h2>

      <ol className={styles.timeline} aria-label="Histórico profissional">
        {experiences.map((exp) => (
          <li key={exp.id} className={styles.item}>
            <time className={styles.period}>{exp.period}</time>
            <span className={styles.dot} aria-hidden="true" />
            <div className={styles.content}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>{exp.company}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
