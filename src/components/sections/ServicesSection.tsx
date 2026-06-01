"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      ...t.services.items[0],
      num: "01",
      icon: <Monitor className="w-7 h-7 text-primary" />,
    },
    {
      ...t.services.items[1],
      num: "02",
      icon: <Cpu className="w-7 h-7 text-primary" />,
    },
    {
      ...t.services.items[2],
      num: "03",
      icon: <Zap className="w-7 h-7 text-primary" />,
    },
  ];

  return (
    <section id="services" className="services-pinned">
      {/* Left — Sticky Title */}
      <div className="services-left">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-cinema mb-6"
          >
            {t.services.title_1}
            <br />
            <span className="gradient-text-accent">{t.services.title_2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle-cinema"
          >
            {t.services.subtitle}
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] bg-primary mt-8 rounded-full"
          />
        </div>
      </div>

      {/* Right — Scrolling Cards */}
      <div className="services-right">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="service-card-premium group"
          >
            <span className="s-num">{service.num}</span>
            <div className="flex items-start gap-5 mb-4">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-primary/20 group-hover:bg-primary/[0.05] transition-all">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
