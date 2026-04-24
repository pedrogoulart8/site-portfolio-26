import { ArrowRight } from 'lucide-react'
import { GithubIcon } from '../icons/SocialIcons'
import { featuredProjects } from '../../data/projects'
import ProjectVideo from '../ProjectVideo/ProjectVideo'
import styles from './FeaturedProjects.module.css'

export default function FeaturedProjects() {
  return (
    <section id="projetos" className={`section ${styles.section}`} aria-labelledby="projects-title">
      <span className="eyebrow">O que construí</span>
      <h2 id="projects-title" className="section-title">Projetos em destaque</h2>

      <div className={styles.list}>
        {featuredProjects.map((project, i) => (
          <article
            key={project.id}
            className={`${styles.card} ${i % 2 !== 0 ? styles.reverse : ''}`}
            aria-label={`Projeto: ${project.title}`}
          >
            <ProjectVideo
              src={`/projects/${project.id}-demo.gif`}
              alt={project.videoAlt ?? `Demo do projeto ${project.title}`}
            />

            {/* Conteúdo */}
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                {project.inProduction && (
                  <span className={styles.badge} aria-label="Projeto em uso real">
                    Em produção
                  </span>
                )}
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.stack} role="list" aria-label="Tecnologias usadas">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag" role="listitem">{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.title}`}
                  >
                    Acessar site
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código de ${project.title} no GitHub`}
                  >
                    <GithubIcon size={15} aria-hidden="true" />
                    Código no GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
