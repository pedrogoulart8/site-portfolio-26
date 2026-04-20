import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import styles from './Header.module.css'

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navItems.map(item => item.href.slice(1))
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <div className={styles.inner}>
          <a href="#" className={styles.logo} aria-label="Pedro Goulart — início">
            PG
          </a>

          <nav className={styles.nav} aria-label="Navegação principal">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={styles.themeToggle}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            onClick={toggle}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        {navItems.map(item => (
          <a
            key={item.href}
            href={item.href}
            className={`${styles.mobileLink} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
            onClick={handleNavClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )
}
