import { useLanguage } from "../../i18n/LanguageContext"
import { useInView } from "../../hooks/useInView"
import { GitHubIcon, LinkedInIcon, MailIcon } from "../Icons"

export function Contact() {
  const { t } = useLanguage()
  const [ref, isVisible] = useInView()

  return (
    <section id="contacto" className="px-6 py-20 md:px-14">
      <div
        ref={ref}
        className={`reveal relative mx-auto max-w-4xl xl:max-w-5xl overflow-hidden rounded-3xl border border-primary/40 bg-linear-to-b from-primary-container/25 via-surface-card to-background p-8 text-center shadow-[0_0_80px_-20px_rgba(124,58,237,0.4)] sm:p-14 ${isVisible ? "reveal-visible" : ""}`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-surface px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[11px] text-white">{t.contact.badge}</span>
        </div>

        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-on-surface-variant sm:text-base">
          {t.contact.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:markuscanastro@gmail.com"
            className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-mono text-xs font-semibold text-background shadow-[0_0_25px_rgba(210,187,255,0.6)] transition duration-200 ease-out active:scale-97 hover:bg-primary"
          >
            <MailIcon className="h-4 w-4" />
            markuscanastro@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/marcos-canastro-a501b0345"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-surface-card px-7 py-3.5 font-mono text-xs text-white transition duration-200 ease-out active:scale-97 hover:bg-surface-card-hover"
          >
            <LinkedInIcon className="h-4 w-4 text-primary" />
            {t.contact.linkedin}
          </a>
          <a
            href="https://github.com/Katsuo666"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-surface-card px-7 py-3.5 font-mono text-xs text-white transition duration-200 ease-out active:scale-97 hover:bg-surface-card-hover"
          >
            <GitHubIcon className="h-4 w-4 text-primary" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
