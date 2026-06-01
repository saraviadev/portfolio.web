"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-counter">
      {prefix}{count}{suffix}
    </span>
  );
}

export function StatsSection() {
  const { language } = useLanguage();

  const stats = [
    {
      target: 100,
      prefix: "",
      suffix: "%",
      labelEn: "Passion & Engineering",
      labelEs: "Pasión e Ingeniería",
    },
    {
      target: 1,
      prefix: "0",
      suffix: "",
      labelEn: "Initial Project Delivered",
      labelEs: "Proyecto Inicial Entregado",
    },
    {
      target: 100,
      prefix: "",
      suffix: "%",
      labelEn: "Focus on AI & Automation",
      labelEs: "Enfoque en IA y Automatización",
    },
  ];

  return (
    <section className="section-padding-sm border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center md:text-left"
            >
              <AnimatedCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="stat-label">
                {language === "en" ? stat.labelEn : stat.labelEs}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
