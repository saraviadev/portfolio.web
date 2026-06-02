"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { DynamicText } from "@/components/ui/DynamicText";
import { InteractiveCyberGrid } from "@/components/ui/InteractiveCyberGrid";

export function HeroSection() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normalizedX = (x / rect.width) - 0.5;
      const normalizedY = (y / rect.height) - 0.5;

      // Small, elegant 3D parallax tilt (max 5 degrees)
      containerRef.current.style.setProperty("--tilt-x", `${normalizedY * -5}deg`);
      containerRef.current.style.setProperty("--tilt-y", `${normalizedX * 5}deg`);
    };

    const handleMouseLeave = () => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--tilt-x", "0deg");
      containerRef.current.style.setProperty("--tilt-y", "0deg");
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="hero-cinematic overflow-hidden relative" 
      id="hero"
      style={{ perspective: "1200px" }}
    >
      {/* Background Container */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) scale(1.05)",
          transformStyle: "preserve-3d",
          willChange: "transform"
        }}
      >
        <InteractiveCyberGrid />
      </div>

      {/* Dark overlay gradient for maximum text readability */}
      <div className="hero-overlay z-[1] absolute inset-0 pointer-events-none" />

      {/* Hero Content — Bottom Left */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-5xl">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.6 }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-white/40 uppercase tracking-[0.15em]">
              {t.hero.available}
            </span>
          </motion.div>

          {/* Main Title — Dynamic typing/reveal */}
          <div className="mb-6">
            <motion.h1
              className="section-title-cinema leading-[1.1]"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 2.7, ease: [0.76, 0, 0.24, 1] }}
            >
              <span className="text-3xl md:text-5xl font-light tracking-wide text-white/70 block mb-2 md:inline md:mb-0">
                {language === "en" ? "Building " : "Creamos "}
              </span>
              <br className="hidden md:block" />
              <DynamicText />
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="text-white/40 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="https://wa.me/5491127537746"
              target="_blank"
              className="cta-premium hover-target"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </Link>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-white/30">
                {language === "en" ? "Quick response." : "Respuesta rápida."}
              </span>
              <a
                href="mailto:46theosaravia46@gmail.com"
                className="text-xs text-white/40 hover:text-primary transition-colors hover-target"
              >
                46theosaravia46@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
