"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { href: "#about", labelEn: "About", labelEs: "Sobre Mí" },
  { href: "#services", labelEn: "Services", labelEs: "Servicios" },
  { href: "#projects", labelEn: "Projects", labelEs: "Proyectos" },
  { href: "#stack", labelEn: "Tech Stack", labelEs: "Tecnologías" },
  { href: "#philosophy", labelEn: "Philosophy", labelEs: "Filosofía" },
  { href: "#contact", labelEn: "Contact", labelEs: "Contacto" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: "100%", rotate: 2 },
  visible: {
    opacity: 1,
    y: "0%",
    rotate: 0,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    opacity: 0,
    y: "-50%",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const boxVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const bgVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

export function FullscreenMenu({ isOpen, onClose }: FullscreenMenuProps) {
  const { language, setLanguage } = useLanguage();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Cinematic Animated Background */}
          <motion.div
            className="absolute inset-0 bg-[#020202]"
            variants={bgVariants}
          >
            <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[150px] bg-primary/10 pointer-events-none opacity-50" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] bg-purple-600/10 pointer-events-none opacity-50" />
            
            {/* Holographic Subtle Lines */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </motion.div>

          <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-6 md:px-16 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col md:flex-row justify-between">
            
            {/* Left: Navigation Links */}
            <motion.nav
              className="flex flex-col gap-2 md:gap-4 flex-1 justify-center"
              variants={containerVariants}
            >
              {menuLinks.map((link) => {
                const isHovered = hoveredLink === link.href;
                const isOtherHovered = hoveredLink !== null && hoveredLink !== link.href;

                return (
                  <div key={link.href} className="overflow-hidden">
                    <motion.div variants={linkVariants}>
                      <Link
                        href={link.href}
                        className={`inline-block font-bold uppercase tracking-tighter hover-target transition-all duration-500 ${
                          isOtherHovered ? "opacity-30 blur-[4px] scale-[0.98]" : "opacity-100 blur-0 scale-100"
                        }`}
                        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.1 }}
                        onClick={handleLinkClick}
                        onMouseEnter={() => setHoveredLink(link.href)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {language === "en" ? link.labelEn : link.labelEs}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.nav>

            {/* Right: Glassmorphism Contact Panel */}
            <div className="flex-1 flex flex-col justify-end md:justify-center items-start md:items-end mt-12 md:mt-0">
              <motion.div
                variants={boxVariants}
                className="w-full md:w-auto p-8 rounded-2xl bg-white/[0.015] border border-white/[0.04] shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl flex flex-col gap-8 hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-700"
              >
                <div>
                  <p className="text-[0.6rem] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">
                    {language === "en" ? "Location" : "Ubicación"}
                  </p>
                  <p className="text-sm font-medium text-white/70">Buenos Aires, Argentina</p>
                </div>
                
                <div>
                  <p className="text-[0.6rem] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:46theosaravia46@gmail.com"
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors hover-target inline-block"
                  >
                    46theosaravia46@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[0.6rem] font-mono text-white/30 uppercase tracking-[0.2em] mb-2">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/5491127537746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors hover-target inline-block"
                  >
                    +54 9 11 2753-7746
                  </a>
                </div>

                {/* Social & Language */}
                <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Link href="https://github.com/saraviadev" target="_blank" className="text-white/40 hover:text-white transition-colors hover-target">
                      <FaGithub className="w-4 h-4" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/theo-saravia-239688364/" target="_blank" className="text-white/40 hover:text-white transition-colors hover-target">
                      <FaLinkedin className="w-4 h-4" />
                    </Link>
                    <Link href="https://instagram.com/saravia.devv" target="_blank" className="text-white/40 hover:text-white transition-colors hover-target">
                      <FaInstagram className="w-4 h-4" />
                    </Link>
                  </div>

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
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
