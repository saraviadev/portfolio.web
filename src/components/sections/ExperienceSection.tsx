"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();

  const items = [
    { ...t.experience.items[0], icon: <Award className="w-5 h-5 text-primary" /> },
    { ...t.experience.items[1], icon: <Briefcase className="w-5 h-5 text-white/50" /> },
    { ...t.experience.items[2], icon: <GraduationCap className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section id="experience" className="section-padding relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.experience.title_1}{" "}
            <span className="gradient-text-accent">{t.experience.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema"
          >
            {t.experience.subtitle}
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-12 flex flex-col gap-10">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/[0.06]" />

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="absolute -left-8 md:-left-12 top-2 w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#0a0a0a] border border-white/[0.08] flex items-center justify-center group">
                <div className="absolute inset-0 bg-primary/[0.05] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-[0.7rem] font-mono text-primary font-bold tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1 tracking-[-0.02em]">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 self-start sm:self-center shrink-0">
                    {item.company}
                  </span>
                </div>
                <p className="text-white/35 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
