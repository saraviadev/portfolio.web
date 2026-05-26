"use client";

import { motion } from "framer-motion";
import { Brain, Search, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AISection() {
  const { t } = useLanguage();

  const features = [
    {
      ...t.ai.features[0],
      icon: <Brain className="w-6 h-6 text-primary" />,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      ...t.ai.features[1],
      icon: <Search className="w-6 h-6 text-purple-400" />,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      ...t.ai.features[2],
      icon: <Volume2 className="w-6 h-6 text-primary" />,
      color: "from-cyan-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="ai" className="py-32 relative border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.ai.title_1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">{t.ai.title_2}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.ai.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-primary/40 hover:shadow-glow-cyan transition-all duration-300"
            >
              <div>
                <div className={`mb-8 w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
