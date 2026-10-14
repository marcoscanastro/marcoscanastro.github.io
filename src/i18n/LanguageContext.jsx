import { createContext, useContext, useEffect, useState } from "react"
import { translations } from "./translations"

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLanguage] = useState(() => localStorage.getItem("lang") || "pt")

  useEffect(() => {
    localStorage.setItem("lang", lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = { lang, setLanguage, t: translations[lang] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
