"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

import { DynamicText } from "@/components/ui/DynamicText";

export function HeroSection() {
  const { t, language } = useLanguage();

  const titleWords = t.hero.title_1.split(" ");
  const subtitleWords = t.hero.title_2.split(" ");

  return (
    <section className="hero-cinematic" id="hero">


      {/* Dark overlay gradient */}
      <div className="hero-overlay" />

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
