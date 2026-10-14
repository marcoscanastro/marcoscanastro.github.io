import { useLanguage } from "../../i18n/LanguageContext"

export function Hero() {
  const { t } = useLanguage()

  const stack = [
    "React",
    "Vue",
    "Node.js",
    "Laravel",
    "Inertia.js",
    "JavaScript",
    "Python",
    "Java",
    "Android Studio",
    "WebAR",
    "PostgreSQL",
    "MySQL",
    "NoSQL",
    "Docker",
    "Git/GitHub",
  ]

  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-16 md:px-14 lg:pb-28 xl:pt-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:max-w-[96rem] xl:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div
            className="hero-in inline-flex items-center gap-2.5 self-start rounded-full border border-primary/30 bg-surface-card px-3.5 py-1 shadow-[0_0_15px_rgba(168,85,247,0.2)] xl:px-5 xl:py-2"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse xl:h-2.5 xl:w-2.5" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary xl:text-sm">
              {t.hero.badge}
            </span>
          </div>

          <h1
            className="hero-in font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-8xl"
            style={{ animationDelay: "70ms" }}
          >
            {t.hero.title1}{" "}
            <span className="bg-linear-to-r from-white via-primary to-primary-glow bg-clip-text text-transparent text-glow-purple">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.title2}
          </h1>

          <p
            className="hero-in max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg xl:max-w-2xl xl:text-2xl"
            style={{ animationDelay: "140ms" }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="hero-in flex flex-wrap items-center gap-4 pt-1"
            style={{ animationDelay: "210ms" }}
          >
            <a
              href="#projetos"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-mono text-sm font-semibold text-background shadow-[0_0_28px_rgba(210,187,255,0.4)] transition duration-200 ease-out hover:bg-primary hover:shadow-[0_0_35px_rgba(210,187,255,0.8)] active:scale-97 xl:px-10 xl:py-4 xl:text-base"
            >
              {t.hero.ctaPrimary}
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-primary/30 bg-surface-card px-7 py-3.5 font-mono text-sm text-white transition duration-200 ease-out hover:border-primary/70 hover:bg-surface-card-hover active:scale-97 xl:px-9 xl:py-4 xl:text-base"
            >
              {t.hero.ctaSecondary}
            </a>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-surface-card px-7 py-3.5 font-mono text-sm text-white transition duration-200 ease-out hover:border-primary/70 hover:bg-surface-card-hover active:scale-97 xl:px-9 xl:py-4 xl:text-base"
            >
              {t.hero.ctaCv}
              <span className="material-symbols-outlined text-[18px] text-primary">download</span>
            </a>
          </div>

          <div
            className="hero-in grid max-w-lg grid-cols-1 gap-4 border-t border-outline-dim pt-6 sm:grid-cols-3 xl:max-w-2xl xl:gap-5 xl:pt-8"
            style={{ animationDelay: "280ms" }}
          >
            {t.hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-surface-card p-3 shadow-[0_0_15px_rgba(168,85,247,0.15)] xl:p-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant xl:text-xs">
                  {metric.label}
                </div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary xl:mt-2 xl:text-lg">
                  {metric.value}
                </div>
                <div className="mt-0.5 font-mono text-[9px] text-on-surface-variant xl:text-[11px]">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-in relative flex justify-center lg:col-span-6"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative flex w-full max-w-lg items-center justify-center xl:max-w-2xl">
            <div
              className="bg-tiles-grid absolute inset-0 -top-8 -bottom-4 z-0 rounded-3xl border border-primary/20 bg-primary-container/10 opacity-40"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              }}
            />

            <div className="glow-breathe pointer-events-none absolute -top-10 h-80 w-80 rounded-full bg-primary-container/30 blur-[120px] xl:h-96 xl:w-96" />
            <div
              className="glow-breathe pointer-events-none absolute right-4 bottom-10 h-72 w-72 rounded-full bg-secondary-container/25 blur-[100px] xl:h-84 xl:w-84"
              style={{ animationDelay: "2.5s" }}
            />

            <div className="absolute top-2 left-4 z-20 flex items-center gap-2 rounded-full border border-primary/30 bg-surface/85 px-3 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
              <span className="font-mono text-[10px] tracking-wide text-primary">
                {t.hero.statusBadge}
              </span>
            </div>

            <div
              className="relative z-10 flex w-full items-end justify-center"
              style={{
                maskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
              }}
            >
              <img
                src="/photo-cutout.png"
                alt="Marcos Canastro"
                className="w-full object-cover object-top drop-shadow-[0_0_45px_rgba(124,58,237,0.5)]"
                onError={(e) => {
                  e.currentTarget.src = "/photo.jpg"
                }}
              />
            </div>

            <div className="absolute right-6 bottom-0 left-6 z-20 flex items-center justify-between rounded-2xl border border-primary/30 bg-surface/85 p-3 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/50 bg-primary-container/30 text-primary">
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </div>
                <div>
                  <div className="font-mono text-xs font-semibold text-white">Dev Júnior</div>
                  <div className="font-mono text-[9px] text-primary/80">Sistemas & Dados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-in mx-auto mt-20 max-w-5xl border-t border-outline-dim pt-10 xl:max-w-6xl xl:pt-14"
        style={{ animationDelay: "350ms" }}
      >
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-on-surface-variant xl:mb-8 xl:text-sm">
          {t.hero.stackLabel}
        </p>
        <div className="mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] overflow-hidden">
          <div className="marquee-track flex w-max items-center">
            {[...stack, ...stack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="mr-10 font-mono text-sm font-bold tracking-tight whitespace-nowrap text-primary xl:mr-14 xl:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
