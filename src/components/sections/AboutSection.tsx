"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6 block"
          >
            {t.about.subtitle}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
          >
            {t.about.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.about.title_2}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed md:leading-loose"
          >
            {t.about.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
