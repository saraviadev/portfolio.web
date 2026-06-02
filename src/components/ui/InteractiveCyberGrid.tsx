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

    // High-density particle wave configuration (3D Perspective)
    const cols = 60;
    const rows = 35;
    const cameraZ = 120;
    const fov = 380;
    const angleX = 1.22; // Low-angle 3D tilt perspective matching the image
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2 + 120; // Shift center downwards for expansive landscape

      const spacingX = canvas.width / (cols - 1);
      const spacingY = (canvas.height * 1.6) / (rows - 1);

      // Project all particle nodes
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX;
          const baseY = r * spacingY - canvas.height * 0.3;

          // Distance to mouse for interactive mountains
          const dx = baseX - mouseRef.current.x;
          const dy = baseY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);

          // 1. Natural flowing waves (undulating peaks & valleys)
          let z = Math.sin(c * 0.12 + time) * Math.cos(r * 0.15 + time * 0.8) * 15;
          z += Math.sin((c + r) * 0.08 + time * 0.5) * 8; // Layered noise wave

          // 2. Interactive "Mini-Mountains" displacement: lift grid points to form a physical peak under mouse
          let activeGlow = 0;
          if (mouseRef.current.active && dist < 220) {
            const force = (1 - dist / 220);
            const peakHeight = Math.sin(force * Math.PI) * 60; // Smooth dome peak
            z += peakHeight;
            activeGlow = force;
          }

          // 3D Perspective Rotations & Translation
          const px = baseX - cx;
          const py = baseY - cy;

          const rotY = py * cosX - z * sinX;
          const rotZ = py * sinX + z * cosX + cameraZ + r * 16; // Add depth per row

          const projX = cx + (px * fov) / rotZ;
          const projY = cy + (rotY * fov) / rotZ;

          // Depth check to prevent rendering behind camera
          if (rotZ <= 10) continue;

          // Depth-based fog/fading
          const maxZ = cameraZ + rows * 16 + canvas.height * 0.6;
          const opacity = Math.max(0, 1 - rotZ / maxZ);

          // Calculate particle size based on 3D depth (bokeh/perspective)
          const baseSize = 2.2 * (fov / rotZ) * opacity;
          const finalSize = Math.max(0.6, baseSize);

          // Draw the glowing particle
          ctx.beginPath();
          ctx.arc(projX, projY, finalSize, 0, Math.PI * 2);

          // Interpolate color from sky-blue to electric-cyan depending on mouse active lift
          if (activeGlow > 0) {
            ctx.fillStyle = `rgba(56, 189, 248, ${opacity * (0.6 + activeGlow * 0.4)})`;
          } else {
            ctx.fillStyle = `rgba(14, 165, 233, ${opacity * 0.45})`; // Match the image's cyan/blue glow
          }
          ctx.fill();

          // Render subtle connection lines only for nearby rows to keep the net structure elegant
          if (c < cols - 1 && r % 2 === 0) {
            const nextBaseX = (c + 1) * spacingX;
            const nextBaseY = r * spacingY - canvas.height * 0.3;
            const nextDx = nextBaseX - mouseRef.current.x;
            const nextDy = nextBaseY - mouseRef.current.y;
            const nextDist = Math.hypot(nextDx, nextDy);
            let nextZ = Math.sin((c + 1) * 0.12 + time) * Math.cos(r * 0.15 + time * 0.8) * 15;
            nextZ += Math.sin((c + 1 + r) * 0.08 + time * 0.5) * 8;

            if (mouseRef.current.active && nextDist < 220) {
              nextZ += Math.sin((1 - nextDist / 220) * Math.PI) * 60;
            }

            const nextRotY = (nextBaseY - cy) * cosX - nextZ * sinX;
            const nextRotZ = (nextBaseY - cy) * sinX + nextZ * cosX + cameraZ + r * 16;

            const nextProjX = cx + ((nextBaseX - cx) * fov) / nextRotZ;
            const nextProjY = cy + (nextRotY * fov) / nextRotZ;

            if (nextRotZ > 10) {
              ctx.beginPath();
              ctx.moveTo(projX, projY);
              ctx.lineTo(nextProjX, nextProjY);
              ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.08})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }

          // Add elegant outer glow bloom for high-intensity interactive peaks
          if (activeGlow > 0.4 && rotZ < 450) {
            ctx.beginPath();
            ctx.arc(projX, projY, finalSize * 3.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${activeGlow * opacity * 0.12})`;
            ctx.fill();
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
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-85"
    />
  );
}
