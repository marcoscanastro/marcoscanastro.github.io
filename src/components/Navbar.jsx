import { useEffect, useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { ThemeToggle } from "./ThemeToggle"

// Mesma ordem em que as secções aparecem na página (ver App.jsx).
const sectionIds = ["solucoes", "sobre", "percurso", "skills", "projetos", "contacto"]

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  const labels = {
    solucoes: t.nav.solutions,
    sobre: t.nav.about,
    percurso: t.nav.journey,
    skills: t.nav.skills,
    projetos: t.nav.projects,
    contacto: t.nav.contact,
  }
  const links = sectionIds.map((id) => ({ id, href: `#${id}`, label: labels[id] }))

  // A secção ativa é a que cruza a linha a meio do ecrã; no topo (hero) nenhuma fica ativa.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    ;["top", ...sectionIds].forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 xl:max-w-5xl rounded-2xl border border-primary/20 bg-surface/85 px-5 py-2.5 shadow-[0_10px_35px_-5px_rgba(124,58,237,0.35)] backdrop-blur-2xl sm:rounded-full sm:px-7">
      <div className="flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-primary-container/30 font-mono text-xs font-bold text-primary shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-transform duration-200 ease-out group-hover:scale-105">
            MC
          </div>
          <span className="font-display text-sm font-bold text-on-surface transition-colors duration-200 group-hover:text-primary">
            Marcos Canastro
          </span>
        </a>

        <nav className="hidden items-center gap-6 font-mono text-xs tracking-wide text-on-surface-variant md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "true" : undefined}
              className={`group relative py-1 transition-colors duration-200 hover:text-primary ${active === link.id ? "text-primary" : ""}`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-px w-full origin-left bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100 ${active === link.id ? "scale-x-100" : "scale-x-0"}`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="text-on-surface transition-transform duration-150 ease-out active:scale-90 md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="starting:-translate-y-1 starting:opacity-0 mt-3 flex origin-top flex-col gap-3 border-t border-outline-dim pt-3 font-mono text-sm transition-[opacity,transform] duration-200 ease-out md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={active === link.id ? "true" : undefined}
              className={`transition-colors duration-200 hover:text-primary ${active === link.id ? "text-primary" : "text-on-surface-variant"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
