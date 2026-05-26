"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function SkillsSection() {
  const { t } = useLanguage();

  const skills = t.skills.items;

  // Group skills by category
  const categories = [
    { id: "frontend", name: t.skills.categories.frontend },
    { id: "backend", name: t.skills.categories.backend },
    { id: "soft", name: t.skills.categories.soft }
  ];

  return (
    <section id="skills" className="py-32 relative border-t border-white/5 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.skills.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.skills.title_2}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((category, catIndex) => {
            const catSkills = skills.filter((s: any) => s.category === category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-8"
              >
                <h3 className="text-xl font-bold border-b border-white/10 pb-4 text-primary">
                  {category.name}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {catSkills.map((skill: any, index: number) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-muted-foreground font-mono">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.value}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full shadow-glow-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
