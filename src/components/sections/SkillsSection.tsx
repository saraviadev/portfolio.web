"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skillCategories = [
  {
    titleEn: "Frontend",
    titleEs: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
  },
  {
    titleEn: "Backend",
    titleEs: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Microservices"],
  },
  {
    titleEn: "Tools & AI",
    titleEs: "Herramientas e IA",
    skills: ["Git/GitHub", "Vercel", "Docker", "Postman", "AI Agents", "OpenAI / Gemini SDK"],
  },
];

export function SkillsSection() {
  const { language } = useLanguage();

  return (
    <section id="stack" className="section-padding bg-black relative border-t border-white/5">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="section-title">
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-4">
              {language === "en" ? "Technical Arsenal" : "Arsenal Técnico"}
            </span>
            {language === "en" ? "Tech Stack" : "Tecnologías"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-medium text-white mb-8 pb-4 border-b border-white/10 group-hover:border-primary/50 transition-colors">
                {language === "en" ? category.titleEn : category.titleEs}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 text-sm font-mono tracking-wide text-white/70 bg-white/[0.03] border border-white/5 rounded hover:bg-primary/10 hover:text-white hover:border-primary/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
