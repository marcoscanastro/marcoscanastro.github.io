import { useEffect, useRef } from "react"
import { useLanguage } from "../i18n/LanguageContext"
import { useInView } from "../hooks/useInView"
import { GitHubIcon } from "./Icons"

const actionClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-outline-dim text-on-surface transition duration-200 ease-out hover:border-primary hover:text-primary active:scale-95"

// Só reproduz enquanto está no ecrã, o separador está visível e o utilizador não pediu menos movimento.
function Clip({ media, alt }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    const reduce = matchMedia("(prefers-reduced-motion: reduce)")
    let inView = false
    const sync = () => {
      if (inView && !document.hidden && !reduce.matches) video.play().catch(() => {})
      else video.pause()
    }
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    }, { threshold: 0.35 })
    io.observe(video)
    document.addEventListener("visibilitychange", sync)
    reduce.addEventListener("change", sync)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", sync)
      reduce.removeEventListener("change", sync)
    }
  }, [])

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={media.video}
      poster={media.poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
    />
  )
}

export function ProjectCard({ project, i = 0 }) {
  const { t, lang } = useLanguage()
  const [ref, isVisible] = useInView()
  const { media, logo, links } = project
  const hasActions = links.demo || links.github || project.private

  const track = (e) => {
    if (e.pointerType !== "mouse") return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`)
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`)
    el.style.setProperty("--px", (x - 0.5).toFixed(3))
    el.style.setProperty("--py", (y - 0.5).toFixed(3))
  }
  const release = (e) => {
    e.currentTarget.style.setProperty("--px", 0)
    e.currentTarget.style.setProperty("--py", 0)
  }

  return (
    <article
      ref={ref}
      onPointerMove={track}
      onPointerLeave={release}
      className={`project-card reveal group relative flex flex-col overflow-hidden rounded-3xl border border-outline-dim bg-surface-card shadow-xl transition-colors duration-200 hover:border-primary/60 ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: isVisible ? `${(i % 2) * 90}ms` : "0ms" }}
    >
      <div className="relative aspect-video overflow-hidden border-b border-outline-dim bg-surface-dim">
        <div className="absolute inset-0 bg-tiles-grid opacity-50" />
        <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-full bg-primary-container/25 blur-3xl transition-colors duration-300 group-hover:bg-primary-container/40" />

        {media ? (
          <div className={`media-settle absolute inset-0 ${isVisible ? "media-settled" : ""}`}>
            <div className="media-parallax absolute inset-0">
              <Clip media={media} alt={media.alt[lang]} />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            {logo ? (
              <img
                src={logo}
                alt=""
                width="512"
                height="512"
                className="float-slow h-28 w-28 rounded-[22%] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-surface text-primary transition-transform duration-200 ease-out group-hover:scale-105">
                <span className="material-symbols-outlined text-[28px]">{project.icon}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="font-display text-xl font-bold text-on-surface transition-colors duration-200 group-hover:text-primary">
              {project.title[lang]}
            </h3>
            {hasActions ? (
              <div className="flex shrink-0 items-center gap-2">
                {links.demo ? (
                  <a href={links.demo} target="_blank" rel="noreferrer" className={actionClass} aria-label={t.projects.viewDemo} title={t.projects.viewDemo}>
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </a>
                ) : null}
                {links.github ? (
                  <a href={links.github} target="_blank" rel="noreferrer" className={actionClass} aria-label={t.projects.viewCode} title={t.projects.viewCode}>
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                ) : null}
                {project.private ? (
                  <span className="flex h-9 items-center gap-1.5 rounded-full border border-outline-dim px-3 font-mono text-[11px] text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    {t.projects.private}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant">{project.description[lang]}</p>
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
    </article>
  )
}
