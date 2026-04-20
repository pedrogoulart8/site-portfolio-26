import { useState } from 'react'
import { Mail, Phone, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons'
import styles from './Contact.module.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigator.clipboard.writeText('pedromgoulartt@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
    window.location.href = 'mailto:pedromgoulartt@gmail.com'
  }

  return (
    <section id="contato" className="section" aria-labelledby="contact-title">
      <span className="eyebrow">Contato</span>
      <h2 id="contact-title" className="section-title">Vamos conversar?</h2>

      <p className={styles.description}>
        Estou aberto a novas oportunidades como desenvolvedor ou posições híbridas que valorizem automação, integrações e visão de negócio.
      </p>

      <div className={styles.grid}>
        <a
          href="mailto:pedromgoulartt@gmail.com"
          className={styles.card}
          onClick={handleEmailClick}
          aria-label="Enviar email para Pedro Goulart"
        >
          <Mail size={22} className={styles.cardIcon} aria-hidden="true" />
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>Email</span>
            {copied
              ? <span className={styles.copyFeedback}>Copiado!</span>
              : <span className={styles.cardValue}>pedromgoulartt@gmail.com</span>
            }
          </div>
        </a>

        <a
          href="https://wa.me/5521998552748"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar mensagem no WhatsApp"
        >
          <Phone size={22} className={styles.cardIcon} aria-hidden="true" />
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>WhatsApp</span>
            <span className={styles.cardValue}>(21) 99855-2748</span>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/pedromgoulart"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver perfil no LinkedIn"
        >
          <LinkedinIcon size={22} className={styles.cardIcon} aria-hidden="true" />
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>LinkedIn</span>
            <span className={styles.cardValue}>/in/pedromgoulart</span>
          </div>
        </a>

        <a
          href="https://github.com/pedrogoulart8"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver perfil no GitHub"
        >
          <GithubIcon size={22} className={styles.cardIcon} aria-hidden="true" />
          <div className={styles.cardInfo}>
            <span className={styles.cardLabel}>GitHub</span>
            <span className={styles.cardValue}>/pedrogoulart8</span>
          </div>
        </a>
      </div>

      <div className={styles.cta}>
        {/* Replace /cv-pedro-goulart.pdf with the actual file in /public */}
        <a
          href="/cv-pedro-goulart.pdf"
          download
          className="btn btn-primary"
          aria-label="Baixar CV em PDF"
        >
          <Download size={16} aria-hidden="true" />
          Baixar CV em PDF
        </a>
      </div>
    </section>
  )
}
