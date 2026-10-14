import { useLanguage } from "../../i18n/LanguageContext"
import { projects } from "../../data/projects"
import { ProjectCard } from "../ProjectCard"

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projetos" className="px-6 py-20 md:px-14">
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {t.projects.eyebrow}
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
              {t.projects.title}
            </h2>
          </div>
          <a
            href="https://github.com/Katsuo666"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 px-4 py-2 font-mono text-xs text-primary transition-colors hover:bg-primary/10 hover:text-white"
          >
            {t.projects.viewAll}
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
