"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".reveal-word");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.5,
      }
    );

    words.forEach((word) => observer.observe(word));

    return () => {
      words.forEach((word) => observer.unobserve(word));
    };
  }, [t]);

  // Split the about content into words for reveal animation
  const aboutText = t.about.content;
  const wordsArray = aboutText.split(" ");

  return (
    <section
      id="about"
      className="section-padding relative"
      style={{ background: "#000" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div ref={containerRef}>
          <p className="text-[clamp(1.5rem,3.5vw,3rem)] font-semibold leading-[1.4] tracking-[-0.02em] text-white">
            {wordsArray.map((word, i) => (
              <span 
                key={i} 
                className="reveal-word mr-[0.3em] inline-block transition-all duration-700 ease-out"
                style={{ transitionDelay: `${i * 12}ms` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
