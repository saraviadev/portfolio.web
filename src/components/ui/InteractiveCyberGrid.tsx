"use client";

import { useEffect, useRef } from "react";

// Pre-render a single glowing particle for massive performance gains (Canvas Caching)
function createParticleCanvas(size: number, colorStr: string) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = size * 4;
  canvas.height = size * 4;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const center = size * 2;
  
  // Soft outer glow for bokeh effect
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, size * 2);
  gradient.addColorStop(0, colorStr);
  gradient.addColorStop(0.2, colorStr.replace(/[\d.]+\)$/, '0.8)'));
  gradient.addColorStop(0.6, colorStr.replace(/[\d.]+\)$/, '0.15)'));
  gradient.addColorStop(1, colorStr.replace(/[\d.]+\)$/, '0)'));

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(center, center, size * 2, 0, Math.PI * 2);
  ctx.fill();

  return canvas;
}

export function InteractiveCyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use alpha: false if possible for performance, but we need transparent background, so we stick to true.
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        canvas.width = entry.contentRect.width || window.innerWidth;
        canvas.height = entry.contentRect.height || 600;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -999;
      mouseRef.current.y = -999;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    // Pre-render glowing particles
    const cyanParticle = createParticleCanvas(6, "rgba(56, 189, 248, 1)"); // Bright highlight
    const darkBlueParticle = createParticleCanvas(4, "rgba(14, 165, 233, 1)"); // Deep sea base

    // Massive Particle Cloud Initialization (Organic random distribution to kill grid look)
    const particles: { bx: number; bz: number; sizeOffset: number }[] = [];
    const densityX = 140; // 140 columns
    const densityZ = 70;  // 70 rows deep
    const spreadX = 2800; // Wide cinematic canvas
    const spreadZ = 1200; // Deep Z-axis

    for (let i = 0; i < densityZ; i++) {
      for (let j = 0; j < densityX; j++) {
        // Add extreme jitter to eliminate straight lines, creating an organic point cloud
        const jitterX = (Math.random() - 0.5) * (spreadX / densityX) * 1.8;
        const jitterZ = (Math.random() - 0.5) * (spreadZ / densityZ) * 1.8;
        
        particles.push({
          bx: (j / densityX - 0.5) * spreadX + jitterX,
          bz: i * (spreadZ / densityZ) + jitterZ,
          sizeOffset: Math.random() * 0.6 + 0.4 // Varied sizes for realistic bokeh
        });
      }
    }

    // 3D Camera Configuration
    const cameraY = -140; // Positioned low to the ground for epic peaks
    const cameraZ = -120;
    const fov = 400;
    const angleX = 1.30; // Tilt upwards to see deep horizon
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 100;

      // Slow cinematic camera drift
      const cameraOffsetX = Math.sin(time * 0.2) * 80;
      
      // Batch rendering
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Fluid organic waves (Stacked irrational frequencies for chaotic fluid dynamics)
        let y = Math.sin(p.bx * 0.005 + time) * 35 
              + Math.sin(p.bz * 0.008 + time * 1.2) * 25
              + Math.cos((p.bx + p.bz) * 0.007 + time * 0.8) * 15;

        // Base 3D Coordinates relative to camera
        const px = p.bx - cameraOffsetX;
        const pz = p.bz - cameraZ;

        // Interactive "Mouse Mountain" Magnetism
        let activeGlow = 0;
        if (mouseRef.current.active) {
          // Estimate mapping from 2D mouse coordinates back to 3D plane
          const mouseZApprox = (mouseRef.current.y / canvas.height) * (spreadZ * 0.6);
          const mouseXApprox = (mouseRef.current.x - cx) * 2;
          
          const dx = px - mouseXApprox;
          const dz = p.bz - mouseZApprox;
          const dist = Math.hypot(dx, dz);

          if (dist < 280) {
            const force = Math.max(0, 1 - dist / 280);
            // Smooth mountain peak pulling particles up (-y)
            const lift = Math.pow(Math.sin(force * Math.PI / 2), 2) * -110; 
            y += lift;
            activeGlow = force;
          }
        }

        // Apply 3D Pitch Rotation
        const py = y - cameraY;
        const rotY = py * cosX - pz * sinX;
        const rotZ = py * sinX + pz * cosX;

        // Frustum culling (Don't render behind camera)
        if (rotZ < 10) continue;

        // Perspective Projection
        const projX = cx + (px * fov) / rotZ;
        const projY = cy + (rotY * fov) / rotZ;

        // Cinematic Depth of Field (Bokeh effect)
        const focusZ = 250; // Z-depth that is perfectly in focus
        const blurFactor = Math.abs(rotZ - focusZ) / 500;
        
        let scale = (fov / rotZ) * p.sizeOffset;
        let opacity = Math.max(0, 1 - rotZ / spreadZ);
        
        // Particles far away get large and blurry, particles close stay sharp
        if (rotZ > focusZ) {
           scale *= 1 + blurFactor * 2;
           opacity *= Math.max(0.05, 1 - blurFactor * 1.5);
        }

        if (opacity <= 0.01) continue;

        const size = scale * 2.5;
        
        // Select particle image (glowing cyan if lifted, dark blue if base)
        const particleImg = activeGlow > 0.25 ? cyanParticle : darkBlueParticle;
        
        if (particleImg) {
          ctx.globalAlpha = opacity * (0.35 + activeGlow * 0.65);
          ctx.drawImage(particleImg, projX - size / 2, projY - size / 2, size, size);
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#020617] opacity-80" /> {/* Dark cinematic gradient layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />
    </div>
  );
}
