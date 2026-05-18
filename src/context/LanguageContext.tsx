"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/data/translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  showLanguagePrompt: boolean;
  setShowLanguagePrompt: (show: boolean) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "es")) {
      setLanguageState(savedLang);
    } else {
      setShowLanguagePrompt(true);
    }
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    setShowLanguagePrompt(false);
  };

  if (!isInitialized) return null; // Prevent hydration mismatch

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t: translations[language],
      showLanguagePrompt,
      setShowLanguagePrompt
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
