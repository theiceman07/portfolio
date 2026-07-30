"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number;
  baseOpacity: number;
  baseSize: number;
  parallaxMult: number;
  color: string;
}

interface Packet {
  active: boolean;
  p1: Particle | null;
  p2: Particle | null;
  progress: number;
  speed: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];
    let packets: Packet[] = Array.from({ length: 30 }, () => ({
      active: false,
      p1: null,
      p2: null,
      progress: 0,
      speed: 0,
    }));

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Colors
    const colors = ["#FFB000", "#4A6B8A"];
    const bgColor = "#0A0A0B"; // Matches tailwind background

    // Cursor tracking
    const mouse = { x: -1000, y: -1000 };
    let mouseOffsetX = 0;
    let mouseOffsetY = 0;
    const interactionRadius = 250;
    const isCoarse = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles = [];
      packets.forEach(p => (p.active = false));
      
      const isMobile = width < 768;
      const count = isMobile ? 25 : 60;
      
      for (let i = 0; i < count; i++) {
        // Depth logic: 1 = Near, 2 = Mid, 3 = Far
        // Far layer gets more nodes, Near gets fewer
        const rand = Math.random();
        let z = 3;
        if (rand > 0.85) z = 1;
        else if (rand > 0.5) z = 2;

        const speedMult = z === 1 ? 0.25 : z === 2 ? 0.15 : 0.08;
        const baseOpacity = z === 1 ? 0.9 : z === 2 ? 0.5 : 0.3;
        const baseSize = z === 1 ? 3.0 : z === 2 ? 1.8 : 1.2;
        const parallaxMult = z === 1 ? -0.04 : z === 2 ? -0.02 : -0.005;

        // Introduce richer brightness variation per node
        const brightnessVar = 0.5 + Math.random() * 0.5; // 0.5 to 1.0 multiplier

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speedMult,
          vy: (Math.random() - 0.5) * speedMult,
          z,
          baseOpacity: baseOpacity * brightnessVar,
          baseSize,
          parallaxMult,
          color: "rgba(100, 120, 200, 0.3)", // Dim blue-purple idle state
        });
      }
    };

    const draw = () => {
      // Clear background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, width, height);

      const connectThreshold = 140;
      const connectThresholdSq = connectThreshold * connectThreshold;

      // Compute smooth mouse parallax offset from center
      const centerX = width / 2;
      const centerY = height / 2;
      if (mouse.x > -1000) {
        // Lerp mouse offset slightly for smoothness
        const targetOffsetX = mouse.x - centerX;
        const targetOffsetY = mouse.y - centerY;
        mouseOffsetX += (targetOffsetX - mouseOffsetX) * 0.05;
        mouseOffsetY += (targetOffsetY - mouseOffsetY) * 0.05;
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reducedMotion) {
          // Drifting
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off edges (using logical coords, not parallax coords)
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x));
          p.y = Math.max(0, Math.min(height, p.y));

          // Mouse attraction (soft gravity)
          if (!isCoarse) {
            const renderX = p.x + mouseOffsetX * p.parallaxMult;
            const renderY = p.y + mouseOffsetY * p.parallaxMult;
            
            const dx = renderX - mouse.x;
            const dy = renderY - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < interactionRadius * interactionRadius) {
              const dist = Math.sqrt(distSq);
              const force = (interactionRadius - dist) / interactionRadius;
              // Apply soft attraction to logical coords
              // Near layer gets pulled more
              const attractionForce = p.z === 1 ? 0.8 : p.z === 2 ? 0.4 : 0.1;
              p.x -= (dx / dist) * force * attractionForce;
              p.y -= (dy / dist) * force * attractionForce;
            }
          }
        }

        // Render coordinates for drawing
        const rx = p.x + mouseOffsetX * p.parallaxMult;
        const ry = p.y + mouseOffsetY * p.parallaxMult;

        // Interaction brightness and color transition
        const dx = rx - mouse.x;
        const dy = ry - mouse.y;
        const distSq = dx * dx + dy * dy;
        
        let opacityMult = 1;
        let isGlowing = false;
        if (!isCoarse && distSq < interactionRadius * interactionRadius) {
          opacityMult = 1 + (1 - Math.sqrt(distSq) / interactionRadius) * 2; // Up to 3x brighter
          isGlowing = true;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(rx, ry, p.baseSize, 0, Math.PI * 2);
        
        if (isGlowing) {
          ctx.fillStyle = `rgba(232, 160, 32, ${Math.min(p.baseOpacity * opacityMult, 1)})`; // Amber #E8A020
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#E8A020";
        } else {
          ctx.fillStyle = p.color; // Dim blue-purple
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect lines (only connect if within the same depth layer to avoid chaos, or 1 layer apart)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (Math.abs(p.z - p2.z) > 1) continue;

          const rx2 = p2.x + mouseOffsetX * p2.parallaxMult;
          const ry2 = p2.y + mouseOffsetY * p2.parallaxMult;
          
          const ldx = rx - rx2;
          const ldy = ry - ry2;
          const lDistSq = ldx * ldx + ldy * ldy;

          if (lDistSq < connectThresholdSq) {
            const midX = (rx + rx2) / 2;
            const midY = (ry + ry2) / 2;
            const mdx = midX - mouse.x;
            const mdy = midY - mouse.y;
            const mDistSq = mdx * mdx + mdy * mdy;
            
            let lineOpacity = (1 - Math.sqrt(lDistSq) / connectThreshold) * 0.15;
            
            // Brighten and color near cursor
            let strokeStyle = `rgba(100, 120, 200, ${lineOpacity})`;
            if (!isCoarse && mDistSq < interactionRadius * interactionRadius * 1.5) {
              lineOpacity = Math.min(lineOpacity * 3, 0.5);
              strokeStyle = `rgba(232, 160, 32, ${lineOpacity})`; // Amber
            }

            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx2, ry2);
            ctx.strokeStyle = strokeStyle;
            ctx.lineWidth = p.z === 1 && p2.z === 1 ? 0.8 : 0.4;
            ctx.stroke();

            // Randomly trigger data packet
            if (!reducedMotion && Math.random() < 0.015) {
              const freePacket = packets.find(pk => !pk.active);
              if (freePacket) {
                freePacket.active = true;
                freePacket.p1 = p;
                freePacket.p2 = p2;
                freePacket.progress = 0;
                freePacket.speed = 0.006 + Math.random() * 0.012;
              }
            }
          }
        }
      }

      // Draw active packets
      if (!reducedMotion) {
        ctx.fillStyle = "rgba(255, 176, 0, 1)"; // Amber packet
        for (let i = 0; i < packets.length; i++) {
          const pk = packets[i];
          if (pk.active && pk.p1 && pk.p2) {
            pk.progress += pk.speed;
            if (pk.progress >= 1) {
              pk.active = false;
              continue;
            }
            
            const rx1 = pk.p1.x + mouseOffsetX * pk.p1.parallaxMult;
            const ry1 = pk.p1.y + mouseOffsetY * pk.p1.parallaxMult;
            const rx2 = pk.p2.x + mouseOffsetX * pk.p2.parallaxMult;
            const ry2 = pk.p2.y + mouseOffsetY * pk.p2.parallaxMult;

            const px = rx1 + (rx2 - rx1) * pk.progress;
            const py = ry1 + (ry2 - ry1) * pk.progress;

            ctx.beginPath();
            ctx.arc(px, py, 2.0, 0, Math.PI * 2);
            ctx.fill();
            
            // Subtle glow
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#FFB000";
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }

        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    initParticles();
    
    if (reducedMotion) {
      draw();
      return;
    }
    
    rafId = requestAnimationFrame(draw);

    const onResize = () => {
      resize();
      initParticles();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
      {/* Subtle cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_5%,#0A0A0B_90%)] opacity-90" />
    </div>
  );
}
