import { useLanguage } from "../../i18n/LanguageContext"
import { useInView } from "../../hooks/useInView"
import { journey, languages } from "../../data/journey"

function Item({ item, i, lang }) {
  const [ref, isVisible] = useInView()
  const period = typeof item.period === "string" ? item.period : item.period?.[lang]

  return (
    <li
      ref={ref}
      className={`reveal relative pl-16 sm:pl-20 ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${Math.min(i, 2) * 70}ms` : "0ms" }}
    >
      <div
        className={`absolute top-0 left-0 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-outline-dim sm:h-14 sm:w-14 ${item.logoTile ? "bg-white p-1.5" : "bg-surface-card"} ${item.logo ? "" : "text-primary"}`}
      >
        {item.logo ? (
          <img src={item.logo} alt="" width="112" height="112" className="h-full w-full object-contain" />
        ) : (
          <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
        )}
      </div>

      <div className="rounded-2xl border border-outline-dim bg-surface-card p-5 transition-colors duration-200 hover:border-primary/50 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-widest text-primary">
          <span>{item.kind[lang]}</span>
          {period ? <span className="text-on-surface-variant">{period}</span> : null}
        </div>
        <h3 className="mt-2 font-display text-lg font-bold text-on-surface sm:text-xl">{item.title[lang]}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant">{item.body[lang]}</p>
        {item.tags ? (
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px]">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-primary/30 px-3 py-1 text-primary">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </li>
  )
}

export function Journey() {
  const { t, lang } = useLanguage()
  const [ref, isVisible] = useInView()

  return (
    <section id="percurso" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-3xl xl:max-w-4xl">
        <div ref={ref} className={`reveal mb-12 text-center ${isVisible ? "reveal-visible" : ""}`}>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">{t.journey.eyebrow}</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-on-surface">{t.journey.title}</h2>
        </div>

        <ol className="relative flex flex-col gap-6">
          <span aria-hidden="true" className="absolute top-6 bottom-6 left-6 w-px bg-outline-dim sm:left-7" />
          {journey.map((item, i) => (
            <Item key={item.id} item={item} i={i} lang={lang} />
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-outline-dim pt-8 font-mono text-xs">
          <span className="w-full text-center uppercase tracking-widest text-on-surface-variant">{t.journey.languages}</span>
          {languages.map((l) => (
            <span key={l.name.pt} className="rounded-full border border-primary/30 px-4 py-1.5 text-on-surface">
              {l.name[lang]} <span className="text-primary">· {l.level[lang]}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
