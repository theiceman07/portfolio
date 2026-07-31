"use client";

import { useState, useRef, useEffect, useCallback, UIEvent, KeyboardEvent } from "react";
import { protosemUpdates } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useMotion";

const typeLabels: Record<string, string> = {
  research: "RESEARCH",
  development: "DEVELOPMENT",
  design: "DESIGN",
  testing: "TESTING",
};

const typeColors: Record<string, string> = {
  research: "var(--accent)", // Typically blue/amber
  development: "var(--foreground)", // White/light grey
  design: "var(--steel)", 
  testing: "rgba(168, 200, 232, 0.6)",
};

export function ProtosemSection() {
  const [progress, setProgress] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }
    const currentProgress = target.scrollLeft / maxScroll;
    setProgress(Math.max(0, Math.min(1, currentProgress)));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    
    const firstCard = scrollRef.current.querySelector('[data-card]');
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width + 24; // gap-6 is 24px

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: cardWidth, behavior: reducedMotion ? 'instant' : 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  };

  const handleWheel = useCallback((e: WheelEvent, el: HTMLElement) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      if (!isScrollable) return;

      const atLeftEdge = el.scrollLeft <= 0 && e.deltaY < 0;
      const atRightEdge = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth && e.deltaY > 0;

      if (!atLeftEdge && !atRightEdge) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const onWheel = (e: WheelEvent) => handleWheel(e, scrollEl);
    scrollEl.addEventListener("wheel", onWheel, { passive: false });

    const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
    if (maxScroll <= 0) setProgress(1);

    return () => {
      scrollEl.removeEventListener("wheel", onWheel);
    };
  }, [handleWheel]);

  return (
    <section 
      id="protosem" 
      className="relative section-padding overflow-hidden md:overflow-visible" 
      aria-labelledby="protosem-heading"
    >
      <div className="mx-auto max-w-7xl relative z-10 px-4 md:px-0">
        <ScrollReveal stagger={0.1}>
          <RevealItem>
            <SectionHeading
              number="06"
              label="Protosem"
              title="20-Week Prototype Development"
              className="mb-12"
            />
          </RevealItem>
        </ScrollReveal>

        <div className="relative w-full">
          <div 
            ref={scrollRef}
            className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar overscroll-x-contain pb-8 focus-ring relative z-10"
            style={{ maskImage: "linear-gradient(to right, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)" }}
            tabIndex={0}
            role="region"
            aria-label="Protosem timeline"
            data-lenis-prevent="true"
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
          >
            {protosemUpdates.map((update, i) => {
              const color = typeColors[update.type] || typeColors.development;
              return (
                <div 
                  key={update.id} 
                  className="snap-start shrink-0 w-[min(85vw,450px)] flex-none relative h-full"
                  data-card
                >
                  <div className="glass-panel rounded-sm p-6 h-full flex flex-col gap-4 shadow-xl border border-glass-border bg-glass-bg transition-colors hover:border-accent/15 cursor-default hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color, backgroundColor: color }} />
                      <span className="inline-flex shrink-0 items-center justify-center font-mono text-[10px] tracking-widest text-steel w-max">
                        {typeLabels[update.type] || "UPDATE"}
                      </span>
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="text-xl font-light text-white mb-3 md:text-2xl">{update.title}</h3>
                      <p className="font-mono text-xs text-[rgba(220,218,240,0.8)] leading-relaxed">{update.subtitle}</p>
                    </div>
                    <div className="text-[10px] text-accent/60 font-mono self-end pt-4 mt-auto">
                      WK {String(i).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Scroll Progress Indicator */}
          <div className="mt-2 h-[2px] w-full max-w-xs bg-glass-border overflow-hidden mx-auto hidden md:block rounded-full">
             <div 
               className="h-full bg-accent transition-transform duration-100 ease-out origin-left rounded-full" 
               style={{ transform: `scaleX(${Math.max(0.05, progress)})` }} 
             />
          </div>
        </div>
      </div>
    </section>
  );
}
