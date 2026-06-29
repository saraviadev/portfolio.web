"use client";

import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";

const bgCode = `import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WorkflowSection />
      <TechStack />
    </main>
  );
}

// System configuration initialized
function initSystem() {
  console.log("Starting neural link...");
  connectDatabase(process.env.DB_URI);
  mountNeuralInterface();
}

initSystem();
`.repeat(30);

export function HeroSplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    // Initial position to center
    if (containerRef.current) {
       const rect = containerRef.current.getBoundingClientRect();
       setMousePos({ x: rect.width / 2, y: rect.height / 2 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsInteracting(true);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
        
        // Forward pointer events to Spline canvas so it tracks the mouse even when it's on the left side of the screen
        const splineCanvas = containerRef.current.querySelector('canvas');
        if (splineCanvas) {
          const canvasRect = splineCanvas.getBoundingClientRect();
          // If mouse is outside the canvas (e.g. on the left side where text is), manually feed it to Spline
          if (e.clientX < canvasRect.left || e.clientX > canvasRect.right || e.clientY < canvasRect.top || e.clientY > canvasRect.bottom) {
            splineCanvas.dispatchEvent(new PointerEvent('pointermove', {
              clientX: e.clientX,
              clientY: e.clientY,
              bubbles: true
            }));
          }
        }
      }
    };

    const handleMouseLeave = () => {
      setIsInteracting(false);
    };

    const container = containerRef.current;
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* Background Code layer with flashlight mask */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none flex"
        style={{
          maskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      >
        <div className="w-full h-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4 overflow-hidden">
          <pre className="text-gray-600/50 text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words select-none">
            {bgCode}
          </pre>
          <pre className="text-gray-600/50 text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words select-none hidden md:block">
            {bgCode}
          </pre>
          <pre className="text-gray-600/50 text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words select-none hidden lg:block">
            {bgCode}
          </pre>
        </div>
      </div>

      {/* Spline Model - Right Side */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] lg:w-[50%] h-full z-10 overflow-hidden pointer-events-auto flex items-center justify-center">
        {/* We scale the Spline and apply a slight bottom/right translate trick to hide the watermark. 
            When interacting, it smoothly zooms out to reveal more of the robot while keeping the watermark hidden. */}
        <div 
          className={`w-full h-[115%] transition-all duration-[2000ms] ease-out origin-center ${
            isInteracting 
              ? 'scale-[1.10] translate-y-[2%] translate-x-[2%]' 
              : 'scale-[1.30] translate-y-[10%] translate-x-[6%]'
          }`}
        >
          <Spline scene="https://prod.spline.design/o-V6F6pRACjmT4a9/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
