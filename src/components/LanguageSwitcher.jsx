import { useLanguage } from "../i18n/LanguageContext"

const codes = ["pt", "en"]

export function LanguageSwitcher() {
  const { lang, setLanguage } = useLanguage()
  const activeIndex = codes.indexOf(lang)

  return (
    <div className="relative flex items-center rounded-full border border-primary/20 bg-surface-card/60 p-0.5 font-mono text-[11px]">
      <span
        className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-primary-container transition-transform duration-200 ease-in-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
        aria-hidden="true"
      />
      {codes.map((code) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          className={`relative z-10 rounded-full px-2.5 py-1 uppercase transition-colors duration-200 ${
            lang === code ? "text-white" : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
