import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Hero } from "./components/sections/Hero"
import { Solutions } from "./components/sections/Solutions"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

export function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-[850px] w-[850px] rounded-full bg-primary-container/18 blur-[160px]" />
        <div className="absolute top-[38%] -left-40 h-[650px] w-[650px] rounded-full bg-secondary-container/16 blur-[180px]" />
        <div className="absolute top-[65%] right-0 h-[700px] w-[700px] rounded-full bg-primary-glow/12 blur-[170px]" />
        <div className="bg-tiles-grid absolute inset-0 opacity-75" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Solutions />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
