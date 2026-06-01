"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch desktop devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 768) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", onMouseMove);

    const attachListeners = () => {
      document.querySelectorAll(".hover-target, a, button").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="cursor-dot bg-[#5b21b6] rounded-full z-[99999] pointer-events-none"
      animate={{
        x: mousePosition.x - 4, // Center the 8px dot
        y: mousePosition.y - 4,
        scale: isHovering ? 2.5 : 1,
        opacity: isHovering ? 0.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 40,
        mass: 0.1,
      }}
    />
  );
}

export default CustomCursor;
