import { useRef, useState, useEffect } from 'react'
import styles from './ProjectVideo.module.css'

interface ProjectVideoProps {
  src: string
  poster?: string
  alt: string
  className?: string
}

export default function ProjectVideo({ src, poster, alt, className }: ProjectVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const isGif = src.endsWith('.gif')
  const [prefersReducedMotion] = useState(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (isGif) return
    const container = containerRef.current
    const video = videoRef.current
    if (!container || !video || prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (video.getAttribute('preload') === 'none') {
              video.setAttribute('preload', 'auto')
            }
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [prefersReducedMotion, isGif])

  return (
    <div
      ref={containerRef}
      className={`${styles.wrap} ${className ?? ''}`}
      role="img"
      aria-label={alt}
    >
      {isGif ? (
        <img
          src={src}
          alt={alt}
          className={styles.video}
        />
      ) : (
        <>
          {!isLoaded && !hasError && (
            <div className={styles.skeleton} aria-hidden="true" />
          )}

          {hasError && (
            <span className={styles.fallback} aria-hidden="true">
              Print do projeto aqui
            </span>
          )}

          {!hasError && (
            <video
              ref={videoRef}
              className={`${styles.video} ${isLoaded ? styles.visible : styles.hidden}`}
              src={src}
              poster={poster}
              loop
              muted
              playsInline
              preload="none"
              onCanPlay={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </>
      )}
    </div>
  )
}
