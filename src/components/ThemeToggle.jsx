import { useState } from "react"
import { useLanguage } from "../i18n/LanguageContext"

export function ThemeToggle() {
  const { t } = useLanguage()
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme)
  const isLight = theme === "light"

  const toggle = () => {
    const next = isLight ? "dark" : "light"
    document.documentElement.dataset.theme = next
    setTheme(next)
    localStorage.setItem("theme", next)
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
