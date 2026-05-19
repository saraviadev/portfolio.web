"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Terminal, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tighter uppercase">
            SARAVIA<span className="text-primary">.dev</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</Link>
          <Link href="#philosophy" className="hover:text-primary transition-colors">{t.nav.philosophy}</Link>
          <Link href="#certifications" className="hover:text-primary transition-colors">{t.nav.certifications}</Link>
          <Link href="#stack" className="hover:text-primary transition-colors">{t.nav.stack}</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3">
            <Link href="https://github.com/46theosaravia46-cyber" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/theo-saravia-239688364/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com/saravia.devv" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>

          <button 
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="text-xs font-bold px-2 py-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
          >
            {language.toUpperCase()}
          </button>
          
          <Link href="#contact" className="hidden md:flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
            <Mail className="w-4 h-4" />
            <span>{t.nav.contact}</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-[#090b11]/98 backdrop-blur-xl flex flex-col justify-between p-6 border-t border-white/5 animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-6 text-lg font-medium mt-6">
            <Link 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-white/5"
            >
              {t.nav.projects}
            </Link>
            <Link 
              href="#philosophy" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-white/5"
            >
              {t.nav.philosophy}
            </Link>
            <Link 
              href="#certifications" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-white/5"
            >
              {t.nav.certifications}
            </Link>
            <Link 
              href="#stack" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors py-2 border-b border-white/5"
            >
              {t.nav.stack}
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors py-2 flex items-center justify-between"
            >
              <span>{t.nav.contact}</span>
              <Mail className="w-5 h-5 text-primary" />
            </Link>
          </nav>

          <div className="flex flex-col gap-6 mb-20">
            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <span className="text-sm text-muted-foreground">Idioma / Language</span>
              <button 
                onClick={() => {
                  setLanguage(language === "en" ? "es" : "en");
                  setIsMobileMenuOpen(false);
                }}
                className="text-sm font-bold px-3 py-1.5 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
              >
                {language.toUpperCase() === "ES" ? "Español (ES)" : "English (EN)"}
              </button>
            </div>
            
            <div className="flex items-center space-x-6 justify-center mt-2 border-t border-white/5 pt-6">
              <Link href="https://github.com/46theosaravia46-cyber" target="_blank" className="text-muted-foreground hover:text-white transition-colors p-3 bg-white/5 rounded-full border border-white/10">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/theo-saravia-239688364/" target="_blank" className="text-muted-foreground hover:text-white transition-colors p-3 bg-white/5 rounded-full border border-white/10">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/saravia.devv" target="_blank" className="text-muted-foreground hover:text-white transition-colors p-3 bg-white/5 rounded-full border border-white/10">
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
