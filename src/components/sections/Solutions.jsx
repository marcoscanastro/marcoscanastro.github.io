import { useLanguage } from "../../i18n/LanguageContext"
import { useInView } from "../../hooks/useInView"

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"]
const icons = ["code", "bolt", "database", "groups"]

function SolutionCard({ card, i }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-outline-dim bg-surface-card p-8 transition-colors duration-200 hover:border-primary/50 ${spans[i]} ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
    >
      <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-primary-container/15 blur-3xl transition-colors duration-300 group-hover:bg-primary-container/25" />
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-surface-dim text-primary shadow-[0_0_15px_rgba(124,58,237,0.25)] transition-transform duration-200 ease-out group-hover:scale-105">
        <span className="material-symbols-outlined text-[24px]">{icons[i]}</span>
      </div>
      <div>
        <h3 className="mb-2 font-display text-xl font-bold text-on-surface sm:text-2xl">{card.title}</h3>
        <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base">{card.body}</p>
      </div>
    </div>
  )
}

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="solucoes" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {t.solutions.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-on-surface sm:text-4xl lg:text-5xl xl:text-6xl">
            {t.solutions.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {t.solutions.cards.map((card, i) => (
            <SolutionCard key={card.title} card={card} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
