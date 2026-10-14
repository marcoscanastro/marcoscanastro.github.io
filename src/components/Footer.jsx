import { useLanguage } from "../i18n/LanguageContext"
import { GitHubIcon, LinkedInIcon } from "./Icons"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-dim bg-surface-dim py-10">
      <div className="mx-auto flex max-w-5xl xl:max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-primary">{"<DEV />"}</span>
          <span className="font-mono text-xs text-on-surface-variant">
            © {year} Marcos Canastro — {t.footer.rights}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/Katsuo666" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-on-surface-variant transition-colors hover:text-primary">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/marcos-canastro-a501b0345" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-on-surface-variant transition-colors hover:text-primary">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
