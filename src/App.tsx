import { useEffect } from 'react'
import { About } from './components/About'
import { BenefitsBento } from './components/BenefitsBento'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Results } from './components/Results'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { TrainingAudience } from './components/TrainingAudience'
import { WhatStudentsGet } from './components/WhatStudentsGet'
import { FINAL_CTA_ID } from './utils/finalCtaScroll'

function App() {
  useEffect(() => {
    if (window.location.hash !== `#${FINAL_CTA_ID}`) {
      return
    }

    const target = document.getElementById(FINAL_CTA_ID)

    if (!target) {
      return
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    })

    const correctionTimer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 350)

    return () => window.clearTimeout(correctionTimer)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text)]">
      <a href="#main-content" className="skip-link">
        Перейти к содержанию
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <BenefitsBento />
        <TrainingAudience />
        <WhatStudentsGet />
        <HowItWorks />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
