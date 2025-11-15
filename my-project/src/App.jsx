import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
