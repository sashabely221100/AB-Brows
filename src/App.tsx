import { About } from './components/About'
import { BenefitsBento } from './components/BenefitsBento'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Results } from './components/Results'
import { WhatStudentsGet } from './components/WhatStudentsGet'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text)]">
      <Header />
      <main>
        <Hero />
        <About />
        <BenefitsBento />
        <WhatStudentsGet />
        <HowItWorks />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
