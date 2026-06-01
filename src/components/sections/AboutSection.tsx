"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AboutSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  // 1. Particle Neural-Net Background Animation (High-Visibility & Robust Resize)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 45;
    const connectionDistance = 115;

    // Use a standard ResizeObserver to prevent height-0 layout race conditions on mount
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        const width = entry.contentRect.width || canvas.parentElement?.clientWidth || window.innerWidth;
        const height = entry.contentRect.height || canvas.parentElement?.clientHeight || 550;
        
        canvas.width = width;
        canvas.height = height;

        // Re-initialize or adjust particles if they are out of the new boundaries
        if (particles.length === 0) {
          for (let i = 0; i < particleCount; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.35,
              vy: (Math.random() - 0.5) * 0.35,
              radius: Math.random() * 1.8 + 1.2, // Slightly larger particles
            });
          }
        } else {
          // Keep existing particles inside active bounds
          particles.forEach(p => {
            if (p.x > width) p.x = Math.random() * width;
            if (p.y > height) p.y = Math.random() * height;
          });
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    // Animation Loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles (Emerald Green solarpunk accents)
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse interaction (gentle attraction)
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180) {
            p.x += (dx / dist) * 0.15;
            p.y += (dy / dist) * 0.15;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(16, 185, 129, 0.65)"; // Bright Solarpunk Emerald Green
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.35; // Increased line visibility
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // 2. IntersectionObserver for Reveal Words
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
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.1,
      }
    );

    words.forEach((word) => observer.observe(word));

    return () => {
      words.forEach((word) => observer.unobserve(word));
    };
  }, [t]);

  // Split content into words for the sequential cascade effect
  const aboutText = t.about.content;
  const wordsArray = aboutText.split(" ");

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding relative overflow-hidden bg-black flex items-center justify-center min-h-[50vh]"
    >
      {/* Premium Neural Net Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-85"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div>
          <p className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.5] tracking-[-0.02em] text-white">
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
