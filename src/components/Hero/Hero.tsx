import { ArrowDown, Download } from 'lucide-react'
import styles from './Hero.module.css'
import Terminal from './Terminal'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Apresentação">
      <div className={styles.inner}>
        {/* Top text: title + subtitle */}
        <div className={styles.contentTop}>
          <h1 className={styles.title}>Pedro Goulart</h1>

          <p className={styles.subtitle}>
            Desenvolvedor júnior.
            <br />
            React • TypeScript • Node.js
          </p>
        </div>

        {/* Right: interactive terminal */}
        <div className={styles.terminalWrapper}>
          <Terminal replay />
        </div>

        {/* Bottom text: description + actions */}
        <div className={styles.contentBottom}>
          <p className={styles.description}>
            Background em gestão e e-commerce, com foco em integrações, automação e IA.
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
            </a>
            {/* Replace /cv-pedro-goulart.pdf with the actual CV file in /public */}
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
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <ArrowDown size={16} />
        scroll
      </div>
    </section>
  )
}
