import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects'
import OtherProjects from './components/OtherProjects/OtherProjects'
import Stack from './components/Stack/Stack'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <FeaturedProjects />
        <OtherProjects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
