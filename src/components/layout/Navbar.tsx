"use client";

import Link from "next/link";
import { Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();

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
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <Link href="#projects" className="hover:text-primary transition-colors">{t.nav.projects}</Link>
          <Link href="#philosophy" className="hover:text-primary transition-colors">{t.nav.philosophy}</Link>
          <Link href="#certifications" className="hover:text-primary transition-colors">{t.nav.certifications}</Link>
          <Link href="#stack" className="hover:text-primary transition-colors">{t.nav.stack}</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="https://github.com/46theosaravia46-cyber" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/theo-saravia-239688364/" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com/saravia.dev" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
            <FaInstagram className="w-5 h-5" />
          </Link>
          <button 
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="text-xs font-bold px-2 py-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
          >
            {language.toUpperCase()}
          </button>
          <Link href="mailto:46theosaravia46@gmail.com" className="hidden md:flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">
            <Mail className="w-4 h-4" />
            <span>{t.nav.contact}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
