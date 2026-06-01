"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoaded(true);
      // Instead of hiding immediately, show language selection
      setTimeout(() => setShowLanguageSelect(true), 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelect = (lang: "en" | "es") => {
    setLanguage(lang);
    setHidden(true);
    window.scrollTo(0, 0);
  };

  if (hidden) return null;

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className={`preloader-content transition-all duration-700 ${showLanguageSelect ? "-translate-y-10" : ""}`}>
        <div className="preloader-logo tracking-widest text-center">
          S R V
        </div>
        {!showLanguageSelect && (
          <div className="preloader-progress mt-4 mx-auto">
            <div className="preloader-bar" />
          </div>
        )}
      </div>

      {/* Language Selection Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-1000 ${
          showLanguageSelect ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 mt-24">
          <p className="text-white/50 font-mono text-xs tracking-[0.3em] uppercase">Select Language / Selecciona Idioma</p>
          <div className="flex gap-6">
            <button
              onClick={() => handleSelect("en")}
              className="px-8 py-3 rounded-full border border-white/10 text-white font-mono tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              ENGLISH
            </button>
            <button
              onClick={() => handleSelect("es")}
              className="px-8 py-3 rounded-full border border-white/10 text-white font-mono tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              ESPAÑOL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
