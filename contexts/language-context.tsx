"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations, type TranslationKey } from "@/lib/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("el")
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language from localStorage on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("delphi-language") as Language
      if (savedLanguage && (savedLanguage === "el" || savedLanguage === "en")) {
        setLanguageState(savedLanguage)
      }
      setIsInitialized(true)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("delphi-language", lang)
    }
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.el[key]
  }

  // Always render children, but use default language until initialized
  // This prevents the "useLanguage must be used within a LanguageProvider" error
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
