import { useLanguage } from "../i18n/LanguageContext"
import { useInView } from "../hooks/useInView"

export function ProjectCard({ project, i = 0 }) {
  const { t, lang } = useLanguage()
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      className={`reveal group flex flex-col overflow-hidden rounded-3xl border border-outline-dim bg-surface-card shadow-xl transition-colors duration-200 hover:border-primary/60 ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${i * 70}ms` : "0ms" }}
    >
      <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-outline-dim bg-surface-dim p-6">
        <div className="absolute inset-0 bg-tiles-grid opacity-50" />
        <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-primary-container/25 blur-3xl transition-colors duration-300 group-hover:bg-primary-container/40" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title[lang]}
            className="relative z-10 h-full w-full rounded-xl object-cover"
          />
        ) : (
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-surface text-primary transition-transform duration-200 ease-out group-hover:scale-105">
            <span className="material-symbols-outlined text-[28px]">{project.icon}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <h3 className="font-display text-xl font-bold text-on-surface transition-colors duration-200 group-hover:text-primary">
              {project.title[lang]}
            </h3>
            {project.links.demo || project.links.github !== "#" ? (
              <a
                href={project.links.demo || project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-dim text-on-surface transition duration-200 ease-out group-hover:border-primary group-hover:text-primary"
                aria-label={t.projects.viewProject}
              >
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            {project.description[lang]}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-outline-dim pt-4 font-mono text-[11px]">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/30 px-3 py-1 text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
