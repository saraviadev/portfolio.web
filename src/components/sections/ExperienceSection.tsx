"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ExperienceSection() {
  const { t } = useLanguage();

  const items = [
    {
      ...t.experience.items[0], // UTN
      icon: <Award className="w-5 h-5 text-primary" />,
    },
    {
      ...t.experience.items[1], // Coto
      icon: <Briefcase className="w-5 h-5 text-purple-400" />,
    },
    {
      ...t.experience.items[2], // Técnica N1
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
    }
  ];

  return (
    <section id="experience" className="py-32 relative border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.experience.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.experience.title_2}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-8 border-l border-white/10 flex flex-col gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Icon Node */}
              <div className="absolute -left-[53px] top-1.5 w-10 h-10 rounded-xl bg-bgCard border border-white/10 flex items-center justify-center shadow-lg group">
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/15 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-primary font-bold">{item.period}</span>
                    <h3 className="text-2xl font-bold mt-1">{item.role}</h3>
                  </div>
                  <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground self-start sm:self-center">
                    {item.company}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
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
