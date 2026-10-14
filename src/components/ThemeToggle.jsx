import { useState } from "react"
import { flushSync } from "react-dom"
import { useLanguage } from "../i18n/LanguageContext"

export function ThemeToggle() {
  const { t } = useLanguage()
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme)
  const isLight = theme === "light"

  const toggle = (e) => {
    const next = isLight ? "dark" : "light"
    const apply = () => {
      document.documentElement.dataset.theme = next
      setTheme(next)
      localStorage.setItem("theme", next)
    }

    // Sem View Transitions (ou com "menos movimento") a troca é imediata.
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply()
      return
    }

    // O novo tema "abre" como um círculo a partir do botão: explica de onde veio a mudança.
    const box = e.currentTarget.getBoundingClientRect()
    const x = box.left + box.width / 2
    const y = box.top + box.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = document.startViewTransition(() => flushSync(apply))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
      )
    })
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? t.nav.themeDark : t.nav.themeLight}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-surface-card/60 text-on-surface-variant transition duration-150 ease-out hover:text-primary active:scale-90"
    >
      <span className="material-symbols-outlined text-[18px]">
        {isLight ? "dark_mode" : "light_mode"}
      </span>
    </button>
  )
}
