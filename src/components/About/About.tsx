import styles from './About.module.css'

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`} aria-labelledby="about-title">
      <span className="eyebrow">Quem sou</span>
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 id="about-title" className="section-title">Sobre</h2>

          <div className={styles.text}>
            <p className={styles.paragraph}>
              Trabalhei 10 anos com administração — incluindo coordenar uma equipe de 22 pessoas no maior shopping de arquitetura da América Latina e gerenciar meu próprio e-commerce. A programação apareceu na tentativa de criar um site melhor para a minha empresa. Funcionou. Nunca mais parei.
            </p>
            <p className={styles.paragraph}>
              Hoje trabalho com React, TypeScript e Node.js, mas o que mais gosto de fazer é identificar um problema operacional do dia a dia e transformá-lo em automação.
            </p>
          </div>
        </div>

        <aside className={styles.sidebar} aria-label="Informações rápidas">
          <span className={styles.sidebarTitle}>Info rápida</span>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Localização</span>
            <span className={styles.infoValue}>Rio de Janeiro, RJ</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Idiomas</span>
            <span className={styles.infoValue}>Português · Inglês</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Formação</span>
            <span className={styles.infoValue}>Bacharel em Administração</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Status</span>
            <span className={`${styles.infoValue} ${styles.statusBadge}`}>
              <span className={styles.statusDot} aria-hidden="true" />
              Disponível para novas oportunidades
            </span>
          </div>
        </aside>
      </div>
    </section>
  )
}
