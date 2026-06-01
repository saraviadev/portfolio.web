"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Cpu, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EngineeringPhilosophy() {
  const { t } = useLanguage();

  const principles = [
    { ...t.philosophy.items[0], icon: <Layers className="w-7 h-7 text-primary" /> },
    { ...t.philosophy.items[1], icon: <Zap className="w-7 h-7 text-primary" /> },
    { ...t.philosophy.items[2], icon: <Cpu className="w-7 h-7 text-primary" /> },
    { ...t.philosophy.items[3], icon: <Code className="w-7 h-7 text-primary" /> },
  ];

  return (
    <section id="philosophy" className="section-padding border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
          {/* Left — Title */}
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title-cinema mb-6"
            >
              {t.philosophy.title_1}
              <br />
              <span className="gradient-text-accent">{t.philosophy.title_2}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle-cinema mb-8"
            >
              {t.philosophy.subtitle}
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[2px] bg-primary rounded-full"
            />
          </div>

          {/* Right — Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/15 transition-all duration-300"
              >
                <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] inline-flex group-hover:bg-primary/[0.06] group-hover:border-primary/15 transition-all">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-white/35 leading-relaxed text-sm">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
