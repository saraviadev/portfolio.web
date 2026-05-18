"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArchitectureModal } from "@/components/ui/ArchitectureModal";

export function HeroSection() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">{t.hero.available}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          {t.hero.title_1} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
            {t.hero.title_2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[600px] text-lg md:text-xl text-muted-foreground mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium flex items-center space-x-2 hover:bg-primary/90 transition-all hover:scale-105"
          >
            <span>{t.hero.view_architecture}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <Link
            href="https://github.com/46theosaravia46-cyber"
            target="_blank"
            className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium flex items-center space-x-2 hover:bg-white/10 transition-all"
          >
            <Terminal className="w-4 h-4" />
            <span>{t.hero.github_profile}</span>
          </Link>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {['Node.js', 'Next.js', 'TypeScript', 'MongoDB'].map((tech) => (
            <div key={tech} className="flex items-center space-x-2 text-muted-foreground font-mono font-medium">
              <Code2 className="w-4 h-4" />
              <span>{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ArchitectureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
