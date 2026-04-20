import { ExternalLink, FolderOpen } from 'lucide-react'
import { GithubIcon } from '../icons/SocialIcons'
import { otherProjects } from '../../data/projects'
import styles from './OtherProjects.module.css'

export default function OtherProjects() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="other-projects-title">
      <h2 id="other-projects-title" className="section-title">Outros projetos</h2>

      <div className={styles.grid}>
        {otherProjects.map((project) => (
          <article key={project.id} className={styles.card} aria-label={`Projeto: ${project.title}`}>
            <div className={styles.cardHeader}>
              <FolderOpen size={28} className={styles.cardIcon} aria-hidden="true" />
              <div className={styles.cardLinks}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className={styles.cardLinkIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Código de ${project.title} no GitHub`}
                  >
                    <GithubIcon size={18} />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className={styles.cardLinkIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Demo de ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.cardDescription}>{project.description}</p>

            <div className={styles.cardStack} role="list" aria-label="Tecnologias usadas">
              {project.stack.map((tech) => (
                <span key={tech} className="tag" role="listitem">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
