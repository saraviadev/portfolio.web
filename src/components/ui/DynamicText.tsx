"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PHRASES = [
  "AI Systems",
  "Automation",
  "Intelligent Workflows",
  "Fullstack Architectures",
  "Realtime Platforms",
  "Voice Assistants",
  "AI Agents",
  "Advanced Interfaces",
  "System Engineering",
  "AI-native Applications",
  "Intelligent Automation",
  "Agentic Systems",
  "Next-Gen Software",
  "Realtime AI Systems"
];

export function DynamicText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap gradient-text-accent font-bold"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap font-bold" aria-hidden="true">
        Intelligent Workflows
      </span>
    </div>
  );
}
