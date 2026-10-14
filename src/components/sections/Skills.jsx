import { useLanguage } from "../../i18n/LanguageContext"
import { skills } from "../../data/skills"
import { useInView } from "../../hooks/useInView"

function SkillGroup({ group, i, lang }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal rounded-3xl border border-outline-dim bg-surface-card p-6 ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
    >
      <h3 className="mb-4 font-display text-sm font-semibold text-primary">
        {group.category[lang]}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary/30 bg-surface px-3 py-1 font-mono text-[11px] text-on-surface transition-colors duration-200 hover:border-primary/60 hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { t, lang } = useLanguage()

  return (
    <section id="skills" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            {t.skills.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <SkillGroup key={group.category.en} group={group} i={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
