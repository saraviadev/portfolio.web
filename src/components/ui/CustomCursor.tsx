"use client";

import React, { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    const lerpSpeed = 0.15; // Smooth dragging inertia

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    const updatePosition = () => {
      outlineX += (mouseX - outlineX) * lerpSpeed;
      outlineY += (mouseY - outlineY) * lerpSpeed;
      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;
      }
      requestAnimationFrame(updatePosition);
    };

    const animationId = requestAnimationFrame(updatePosition);

    // Custom hover handlers for interactive items
    const onMouseEnter = (e: Event) => {
      document.body.classList.add("cursor-hover-active");
      const target = e.currentTarget as HTMLElement;
      if (
        target.classList.contains("magnetic-target") || 
        target.tagName === "A" || 
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        document.body.classList.add("cursor-blend-active");
      }
    };

    const onMouseLeave = () => {
      document.body.classList.remove("cursor-hover-active");
      document.body.classList.remove("cursor-blend-active");
    };

    const attachListeners = () => {
      document.querySelectorAll(".hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    attachListeners();

    // Re-check dynamic components
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
      observer.disconnect();
      document.body.classList.remove("cursor-hover-active", "cursor-blend-active");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" id="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline hidden md:block" id="cursor-outline" />
    </>
  );
}
export default CustomCursor;
