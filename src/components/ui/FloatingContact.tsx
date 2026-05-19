"use client";

import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Make them fade in fluidly shortly after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600); // 600ms delay for a perfect, elegant entrance
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 md:hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-12 scale-90 pointer-events-none"
      }`}
    >
      {/* Email Floating Button */}
      <Link 
        href="https://mail.google.com/mail/?view=cm&fs=1&to=46theosaravia46@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/10 flex items-center justify-center text-white shadow-xl backdrop-blur-md transition-all duration-300 active:scale-95 group relative hover:border-primary/40 hover:shadow-primary/5"
        aria-label="Email"
      >
        <Mail className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
        <span className="absolute right-14 bg-slate-950/95 text-[10px] font-bold text-white px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Email
        </span>
      </Link>

      {/* WhatsApp Floating Button */}
      <Link 
        href="https://wa.me/5491127537746"
        target="_blank"
        className="w-12 h-12 rounded-full bg-green-500/90 hover:bg-green-600 border border-green-400/20 flex items-center justify-center text-white shadow-xl shadow-green-500/20 backdrop-blur-md transition-all duration-300 active:scale-95 group relative hover:scale-105"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-950/95 text-[10px] font-bold text-white px-2.5 py-1 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp
        </span>
      </Link>
    </div>
  );
}
