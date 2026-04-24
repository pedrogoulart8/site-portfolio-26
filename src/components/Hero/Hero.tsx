import { ArrowDown, Download } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <div className={styles.inner}>
        <h1 className={styles.title}>Pedro Goulart</h1>

        <p className={styles.subtitle}>
          Desenvolvedor júnior.
          <br />
          React • TypeScript • Node.js
        </p>

        <p className={styles.description}>
          Background em gestão e e-commerce, com foco em integrações, automação e IA.
        </p>

        <div className={styles.actions}>
          <a href="#projetos" className="btn btn-primary">
            Ver projetos
          </a>
          <a
            href="/cv-pedro-goulart.pdf"
            download
            className="btn btn-secondary"
            aria-label="Baixar CV em PDF"
          >
            <Download size={16} aria-hidden="true" />
            Baixar CV
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <ArrowDown size={16} />
        scroll
      </div>
    </section>
  )
}
