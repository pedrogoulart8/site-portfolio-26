import { GithubIcon, LinkedinIcon } from '../icons/SocialIcons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copy}>
          © 2026 Pedro Goulart · Feito em React + TypeScript + Vite
        </p>
        <div className={styles.links}>
          <a
            href="https://linkedin.com/in/pedromgoulart"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Pedro Goulart"
          >
            <LinkedinIcon size={18} aria-hidden="true" />
          </a>
          <a
            href="https://github.com/pedrogoulart8"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Pedro Goulart"
          >
            <GithubIcon size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
