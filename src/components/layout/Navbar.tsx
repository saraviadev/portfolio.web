"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FullscreenMenu } from "./FullscreenMenu";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`nav-premium ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
        {/* Left: Language Selector */}
        <div className="flex-1 flex items-center justify-start">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("es")}
              className={`text-[0.65rem] font-mono tracking-wider px-2 py-1 rounded transition-all hover-target ${
                language === "es" ? "text-white bg-white/10" : "text-white/30 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[0.65rem] font-mono tracking-wider px-2 py-1 rounded transition-all hover-target ${
                language === "en" ? "text-white bg-white/10" : "text-white/30 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Center: SRV Logo */}
        <div className="flex-none flex items-center justify-center">
          <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity" onClick={() => window.scrollTo(0,0)}>
            <span className="text-[0.8rem] font-bold font-mono tracking-[0.4em] text-white pl-[0.4em]">SRV</span>
          </Link>
        </div>

        {/* Right: Menu Toggle */}
        <div className="flex-1 flex items-center justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 hover-target"
            aria-label="Toggle menu"
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white hidden sm:inline">
              {isMenuOpen
                ? language === "en" ? "CLOSE" : "CERRAR"
                : language === "en" ? "MENU" : "MENÚ"
              }
            </span>
            <div className="menu-icon">
              <span className="line" />
              <span className="line" />
            </div>
          </button>
        </div>
      </nav>

      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
