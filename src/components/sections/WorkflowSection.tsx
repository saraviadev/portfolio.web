"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function WorkflowSection() {
  const { t } = useLanguage();

  const steps = t.workflow.steps;

  return (
    <section id="workflow" className="py-32 relative border-t border-white/5 bg-black/30">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.workflow.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.workflow.title_2}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.workflow.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-primary/40 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div>
                <span className="text-4xl font-black text-white/5 group-hover:text-primary/20 transition-colors font-mono block mb-6">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
