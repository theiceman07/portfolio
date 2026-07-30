"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useMotion";

export function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const scale = useRef(1);
  const hovering = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    document.body.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering.current = !!target.closest("a, button, [data-cursor='hover']");
    };

    let rafId: number;
    const animate = () => {
      // 100% instant follow to eliminate all cursor delay
      cursorPos.current.x = pos.current.x;
      cursorPos.current.y = pos.current.y;
      
      const targetScale = hovering.current ? 2 : 1;
      scale.current += (targetScale - scale.current) * 0.3;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%) scale(${scale.current})`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-colors duration-200 md:block"
      aria-hidden
    />
  );
}
