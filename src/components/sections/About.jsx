import { useLanguage } from "../../i18n/LanguageContext"
import { useInView } from "../../hooks/useInView"

export function About() {
  const { t } = useLanguage()
  const [ref, isVisible] = useInView()

  return (
    <section id="sobre" className="px-6 py-20 md:px-14">
      <div
        ref={ref}
        className={`reveal mx-auto max-w-3xl xl:max-w-4xl rounded-3xl border border-outline-dim bg-surface-card p-8 text-center sm:p-12 ${isVisible ? "reveal-visible" : ""}`}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          {t.about.eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-white">{t.about.title}</h2>
        <p className="mt-4 leading-relaxed text-on-surface-variant">{t.about.body}</p>
      </div>
    </section>
  )
}
