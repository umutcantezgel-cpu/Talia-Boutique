"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "DE" | "EN" | "TR" | "KU" | "FA" | "AR";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const RTL_LANGS: Language[] = ["FA", "AR"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("DE");
  const isRtl = RTL_LANGS.includes(language);

  useEffect(() => {
    // Read from localStorage if available
    const savedLang = localStorage.getItem("app-language") as Language | null;
    if (savedLang && ["DE", "EN", "TR", "KU", "FA", "AR"].includes(savedLang)) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = language.toLowerCase();
    localStorage.setItem("app-language", language);
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>
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
