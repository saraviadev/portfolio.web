"use client";

import { useEffect, useRef } from "react";

// Pre-render a single glowing particle for performance
function createParticleCanvas(size: number, colorStr: string) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = size * 4;
  canvas.height = size * 4;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const center = size * 2;
  const gradient = ctx.createRadialGradient(center, center, 0, center, center, size * 2);
  gradient.addColorStop(0, colorStr);
  gradient.addColorStop(0.3, colorStr.replace(/[\d.]+\)$/, '0.8)'));
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

    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    const cyanParticle = createParticleCanvas(5, "rgba(56, 189, 248, 1)");
    const darkBlueParticle = createParticleCanvas(3, "rgba(14, 165, 233, 1)");

    // Wireframe Grid Configuration
    const cols = 75; // Number of vertical lines
    const rows = 45; // Number of horizontal lines deep
    const spreadX = 2600; 
    const spreadZ = 1600;

    // 3D Camera Configuration
    const cameraY = -180; // Low angle to see the peaks
    const cameraZ = -200;
    const fov = 450;
    const angleX = 1.25; // Tilt for deep horizon
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 100;

      // Calculate base grid coordinates
      const points: { x: number, y: number, projX: number, projY: number, rotZ: number, active: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          const bx = (c / cols - 0.5) * spreadX;
          const bz = r * (spreadZ / rows);

          // Fluid organic waves (but maintaining the structural grid)
          let y = Math.sin(bx * 0.003 + time) * 45 
                + Math.sin(bz * 0.005 + time * 1.2) * 35
                + Math.cos((bx + bz) * 0.004 + time * 0.8) * 20;

          // Mouse Mountain Magnetism
          let activeGlow = 0;
          if (mouseRef.current.active) {
            const mouseZApprox = (mouseRef.current.y / canvas.height) * (spreadZ * 0.7);
            const mouseXApprox = (mouseRef.current.x - cx) * 2.5;
            
            const dx = bx - mouseXApprox;
            const dz = bz - mouseZApprox;
            const dist = Math.hypot(dx, dz);

            if (dist < 300) {
              const force = Math.max(0, 1 - dist / 300);
              // Pull mesh upwards
              y += Math.pow(Math.sin(force * Math.PI / 2), 2) * -130; 
              activeGlow = force;
            }
          }

          const pz = bz - cameraZ;
          const py = y - cameraY;
          
          const rotY = py * cosX - pz * sinX;
          const rotZ = py * sinX + pz * cosX;

          let projX = -9999, projY = -9999;
          if (rotZ > 10) {
            projX = cx + (bx * fov) / rotZ;
            projY = cy + (rotY * fov) / rotZ;
          }

          points[r].push({ x: bx, y, projX, projY, rotZ, active: activeGlow });
        }
      }

      // Draw Connection Lines (The Cyber-Mesh)
      ctx.lineWidth = 1;
      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p = points[r][c];
          const right = points[r][c + 1];
          const bottom = points[r + 1][c];

          if (p.rotZ <= 10) continue;
          
          const opacity = Math.max(0, 1 - p.rotZ / spreadZ);
          if (opacity <= 0.02) continue;

          ctx.beginPath();
          // Draw horizontal line
          if (right.rotZ > 10) {
            ctx.moveTo(p.projX, p.projY);
            ctx.lineTo(right.projX, right.projY);
          }
          // Draw vertical line
          if (bottom.rotZ > 10) {
            ctx.moveTo(p.projX, p.projY);
            ctx.lineTo(bottom.projX, bottom.projY);
          }

          // Line color based on glow/height
          if (p.active > 0.1) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * (0.15 + p.active * 0.4)})`;
          } else {
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.15})`;
          }
          ctx.stroke();
        }
      }

      // Draw the Glowing Particles at intersections
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (p.rotZ <= 10) continue;

          const opacity = Math.max(0, 1 - p.rotZ / spreadZ);
          if (opacity <= 0.05) continue;

          const size = Math.max(1.5, (fov / p.rotZ) * 2.5);
          
          const particleImg = p.active > 0.3 ? cyanParticle : darkBlueParticle;
          if (particleImg) {
            ctx.globalAlpha = opacity * (0.6 + p.active * 0.4);
            ctx.drawImage(particleImg, p.projX - size / 2, p.projY - size / 2, size, size);
          }
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
      <div className="absolute inset-0 bg-[#020617] opacity-80" /> 
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-90"
      />
    </div>
  );
}
