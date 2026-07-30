"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useMotion";
import { siteConfig } from "@/lib/data";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const subheadlineRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Initial entrance animation
    if (!reducedMotion && sectionRef.current) {
      const items = sectionRef.current.querySelectorAll<HTMLElement>(".hero-anim");
      items.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
        item.style.transitionDelay = `${0.2 + index * 0.15}s`;
        
        // Trigger reflow
        void item.offsetWidth;
        
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
    }

    if (reducedMotion) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return; // Disable parallax on mobile/touch

    let rafId: number;
    let scrollY = window.scrollY;

    const onScroll = () => {
      scrollY = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    const updateParallax = () => {
      // Parallax logic
      if (headlineRef.current) {
        const offset = scrollY * 0.08;
        headlineRef.current.style.transform = `translateY(-${offset}px)`;
      }
      if (subheadlineRef.current) {
        const offset = scrollY * 0.12;
        subheadlineRef.current.style.transform = `translateY(-${offset}px)`;
      }
      rafId = 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-[1] flex min-h-screen items-center section-padding pb-32 pt-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="hero-anim mono-label mb-8">
          <span className="text-status animate-pulse">●</span> Portfolio · 2026
        </p>

        <h1 className="mb-8 max-w-5xl">
          <span 
            ref={headlineRef}
            className="hero-anim block text-5xl font-light tracking-tight text-heading text-heading-shadow sm:text-6xl md:text-7xl lg:text-8xl will-change-transform"
          >
            <span className="inline-block pb-2">
              Malligaarjunan
            </span>
          </span>
          <span 
            ref={subheadlineRef}
            className="hero-anim block text-3xl font-light tracking-tight text-foreground/90 text-heading-shadow sm:text-4xl md:text-5xl lg:text-6xl will-change-transform"
          >
            <span className="inline-flex items-center gap-4 pt-1">
              AVK 
              <span className="font-mono text-lg text-accent md:text-xl lg:text-2xl">(Arjun)</span>
            </span>
          </span>
        </h1>

        <p className="hero-anim max-w-2xl text-balance text-base leading-relaxed text-foreground/80 text-heading-shadow md:text-lg lg:text-xl">
          {siteConfig.description}
        </p>

        <div className="hero-anim mt-12 flex flex-wrap items-center gap-6 border-t border-glass-border pt-8">
          <div>
            <p className="mono-label mb-1">Status</p>
            <p className="font-mono text-sm text-foreground">Open to opportunities</p>
          </div>
          <div className="hidden h-8 w-px bg-glass-border sm:block" />
          <div>
            <p className="mono-label mb-1">Focus</p>
            <p className="font-mono text-sm text-steel">Quant · AI · Engineering</p>
          </div>
          <div className="hidden h-8 w-px bg-glass-border md:block" />
          <div className="hidden md:block">
            <p className="mono-label mb-1">Location</p>
            <p className="font-mono text-sm text-foreground">{siteConfig.location}</p>
          </div>
        </div>

        <div className="hero-anim mt-10">
          <a
            href="#about"
            className="focus-ring group inline-flex items-center gap-3 rounded-sm font-mono text-xs tracking-wider text-foreground transition-colors hover:text-accent"
            data-cursor="hover"
          >
            <span>Scroll to explore</span>
            <span className="inline-block transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

