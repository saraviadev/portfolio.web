"use client";

import { useEffect, useRef } from "react";

export function InteractiveCyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
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

    // Grid configuration (3D Perspective Wireframe)
    const cols = 32;
    const rows = 20;
    const cameraZ = 200;
    const fov = 350;
    const angleX = 1.15; // 3D tilt perspective angle
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 100; // Shift center downwards to maximize grid perspective

      const spacingX = canvas.width / (cols - 1);
      const spacingY = (canvas.height * 1.5) / (rows - 1); // Stretch deep into the Z plane

      // 2D Array to store projected points on this frame
      const projected: { x: number; y: number; zDepth: number; opacity: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        projected[r] = [];
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX;
          const baseY = r * spacingY - canvas.height * 0.25; // Shift grid start upwards

          // Distance of base point to mouse
          const dx = baseX - mouseRef.current.x;
          const dy = baseY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);

          // 1. Natural animated undulating waves (the "mini-mountains" base breathing)
          let z = Math.sin(c * 0.25 + time) * Math.cos(r * 0.25 + time) * 12;

          // 2. Interactive displacement: lift grid points to form a physical "mountain/ripple" under the mouse
          if (mouseRef.current.active && dist < 240) {
            const force = (1 - dist / 240);
            z += Math.sin(force * Math.PI) * 45; // Curved elastic lift
          }

          // 3D Perspective Rotations & Translation
          const px = baseX - cx;
          const py = baseY - cy;

          const rotY = py * cosX - z * sinX;
          const rotZ = py * sinX + z * cosX + cameraZ + r * 15; // Depth shift based on row

          const projX = cx + (px * fov) / rotZ;
          const projY = cy + (rotY * fov) / rotZ;

          // Depth-based fog/fading
          const maxZ = cameraZ + rows * 15 + canvas.height * 0.5;
          const opacity = Math.max(0, 1 - rotZ / maxZ);

          projected[r][c] = { x: projX, y: projY, zDepth: rotZ, opacity };
        }
      }

      // Draw grid lines
      ctx.lineWidth = 0.65;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = projected[r][c];

          // Draw horizontal connections
          if (c < cols - 1) {
            const nextP = projected[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${Math.min(p.opacity, nextP.opacity) * 0.25})`; // Glowing Cyan/Blue lines
            ctx.stroke();
          }

          // Draw vertical connections
          if (r < rows - 1) {
            const nextP = projected[r + 1][c];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nextP.x, nextP.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${Math.min(p.opacity, nextP.opacity) * 0.25})`;
            ctx.stroke();
          }

          // Draw glowing node dots
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.25 * p.opacity, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity * 0.5})`;
          ctx.fill();

          // Highlight node under mouse spotlight
          if (mouseRef.current.active) {
            const baseX = c * spacingX;
            const baseY = r * spacingY - canvas.height * 0.25;
            const dist = Math.hypot(baseX - mouseRef.current.x, baseY - mouseRef.current.y);
            if (dist < 80) {
              const nodeGlow = (1 - dist / 80) * 0.85;
              ctx.beginPath();
              ctx.arc(p.x, p.y, 2.5 * p.opacity, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(56, 189, 248, ${nodeGlow * p.opacity})`; // Brighter sky-blue highlight
              ctx.fill();
            }
          }
        }
      }

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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-90"
    />
  );
}
