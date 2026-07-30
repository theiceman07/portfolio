"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useMotion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function ScrollReveal({ children, className = "", stagger = 0.15, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) {
      // Reveal immediately if reduced motion
      const items = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
      items?.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
        item.style.transition = "none";
      });
      if (ref.current && !items?.length) {
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translateY(0)";
        ref.current.style.transition = "none";
      }
      return;
    }

    const items = Array.from(ref.current.querySelectorAll<HTMLElement>("[data-reveal]"));
    const targets = items.length ? items : [ref.current];

    // Set initial state
    targets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(40px)";
      // Apple-style easing
      target.style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((target, index) => {
              const itemDelay = delay + (index * stagger); 
              target.style.transitionDelay = `${itemDelay}s`;
              
              // Trigger reflow
              void target.offsetWidth;

              target.style.opacity = "1";
              target.style.transform = "translateY(0)";
            });
            // Stop observing once revealed
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [reducedMotion, stagger, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className = "" }: RevealItemProps) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}
