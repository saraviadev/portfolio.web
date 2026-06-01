"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function WorkflowSection() {
  const { t } = useLanguage();
  const steps = t.workflow.steps;

  return (
    <section id="workflow" className="section-padding relative border-t border-white/[0.04]">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.workflow.title_1}{" "}
            <span className="gradient-text-accent">{t.workflow.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema"
          >
            {t.workflow.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-400"
            >
              <span className="step-ghost-num block mb-4">{step.num}</span>
              <h3 className="text-lg font-bold mb-3 tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
