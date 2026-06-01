"use client";

import { motion } from "framer-motion";
import { Brain, Search, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AISection() {
  const { t } = useLanguage();

  const features = [
    {
      ...t.ai.features[0],
      icon: <Brain className="w-7 h-7 text-primary" />,
    },
    {
      ...t.ai.features[1],
      icon: <Search className="w-7 h-7 text-primary" />,
    },
    {
      ...t.ai.features[2],
      icon: <Volume2 className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <section id="ai" className="section-padding relative border-t border-white/[0.04]">
      {/* Breathing glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none"
        style={{ animation: "breathe 8s ease-in-out infinite" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.ai.title_1}{" "}
            <span className="gradient-text-accent">{t.ai.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema"
          >
            {t.ai.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] inline-flex group-hover:bg-primary/[0.08] group-hover:border-primary/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/35 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
