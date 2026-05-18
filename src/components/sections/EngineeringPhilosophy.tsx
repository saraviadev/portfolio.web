"use client";

import { Layers, Zap, Cpu, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EngineeringPhilosophy() {
  const { t } = useLanguage();

  const principles = [
    {
      ...t.philosophy.items[0],
      icon: <Layers className="w-8 h-8 text-primary" />,
    },
    {
      ...t.philosophy.items[1],
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      ...t.philosophy.items[2],
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      ...t.philosophy.items[3],
      icon: <Code className="w-8 h-8 text-primary" />,
    }
  ];

  return (
    <section id="philosophy" className="py-32 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t.philosophy.title_1} <br />
              <span className="text-primary">{t.philosophy.title_2}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t.philosophy.subtitle}
            </p>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors">
                <div className="mb-6">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
