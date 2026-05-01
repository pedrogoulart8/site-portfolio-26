import { MapPin, Globe, GraduationCap, Zap } from 'lucide-react'
import styles from './About.module.css'

const infoCards = [
  {
    icon: <MapPin size={16} />,
    label: 'Localização',
    value: 'Rio de Janeiro, RJ',
    isStatus: false,
  },
  {
    icon: <Globe size={16} />,
    label: 'Idiomas',
    value: 'Português · Inglês',
    isStatus: false,
  },
  {
    icon: <GraduationCap size={16} />,
    label: 'Formação',
    value: 'Bacharel em Administração',
    isStatus: false,
  },
  {
    icon: <Zap size={16} />,
    label: 'Status',
    value: 'Disponível para oportunidades',
    isStatus: true,
  },
]

export default function About() {
  return (
    <section id="sobre" className={`section ${styles.about}`} aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">Sobre</h2>

      <div className={styles.text}>
        <p className={styles.paragraph}>
          Trabalhei 10 anos com administração, incluindo coordenar uma equipe de 22 pessoas no maior shopping de arquitetura da América Latina e gerenciar meu próprio e-commerce, que faturou mais de R$1M. A programação apareceu na tentativa de criar um site melhor para a minha empresa. Funcionou. Nunca mais parei.
        </p>
        <p className={styles.paragraph}>
          Hoje trabalho com React, TypeScript e Node.js, mas o que mais gosto de fazer é identificar
          um problema operacional do dia a dia e transformá-lo em automação.
        </p>
      </div>

      <div className={styles.infoGrid} role="list" aria-label="Informações rápidas">
        {infoCards.map((card) => (
          <div
            key={card.label}
            className={`${styles.infoCard} ${card.isStatus ? styles.infoCardStatus : ''}`}
            role="listitem"
          >
            <span className={styles.infoCardIcon} aria-hidden="true">{card.icon}</span>
            <span className={styles.infoCardLabel}>{card.label}</span>
            <span className={styles.infoCardValue}>
              {card.isStatus && <span className={styles.statusDot} aria-hidden="true" />}
              {card.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
