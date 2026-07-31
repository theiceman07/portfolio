"use client";

import { useState, useRef, useEffect, useCallback, UIEvent, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import { useReducedMotion } from "@/hooks/useMotion";

function CompanyMark({ company }: { company: string }) {
  const initials = company
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-glass-border bg-glass-bg font-mono text-[10px] tracking-wider text-accent">
      {initials}
    </div>
  );
}

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [industryProgress, setIndustryProgress] = useState(0);
  const [virtualProgress, setVirtualProgress] = useState(0);
  
  const industryScrollRef = useRef<HTMLDivElement>(null);
  const virtualScrollRef = useRef<HTMLDivElement>(null);
  
  const reducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>, setProgress: (val: number) => void) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }
    const progress = target.scrollLeft / maxScroll;
    setProgress(Math.max(0, Math.min(1, progress)));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Dynamically find card width to scroll by exactly one card
    const firstCard = ref.current.querySelector('[data-card]');
    if (!firstCard) return;
    
    const cardWidth = firstCard.getBoundingClientRect().width + 24; // 24px is gap-6

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      ref.current.scrollBy({ left: cardWidth, behavior: reducedMotion ? 'instant' : 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      ref.current.scrollBy({ left: -cardWidth, behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  };

  const handleWheel = useCallback((e: WheelEvent, el: HTMLElement) => {
    // Only hijack if vertical scroll is dominant
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      if (!isScrollable) return;

      const atLeftEdge = el.scrollLeft <= 0 && e.deltaY < 0;
      const atRightEdge = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth && e.deltaY > 0;

      // If we aren't at the boundaries, we hijack and translate to horizontal
      if (!atLeftEdge && !atRightEdge) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    }
  }, []);

  useEffect(() => {
    const industryEl = industryScrollRef.current;
    const virtualEl = virtualScrollRef.current;

    const onIndustryWheel = (e: WheelEvent) => handleWheel(e, industryEl!);
    const onVirtualWheel = (e: WheelEvent) => handleWheel(e, virtualEl!);

    if (industryEl) industryEl.addEventListener("wheel", onIndustryWheel, { passive: false });
    if (virtualEl) virtualEl.addEventListener("wheel", onVirtualWheel, { passive: false });

    // Initial progress calculation
    if (industryEl) {
      const maxScroll = industryEl.scrollWidth - industryEl.clientWidth;
      if (maxScroll <= 0) setIndustryProgress(1); // fully visible
    }
    if (virtualEl) {
      const maxScroll = virtualEl.scrollWidth - virtualEl.clientWidth;
      if (maxScroll <= 0) setVirtualProgress(1);
    }

    return () => {
      if (industryEl) industryEl.removeEventListener("wheel", onIndustryWheel);
      if (virtualEl) virtualEl.removeEventListener("wheel", onVirtualWheel);
    };
  }, [handleWheel]);

  return (
    <section id="experience" className="relative section-padding">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.12}>
          <RevealItem>
            <p className="mono-label mb-4">
              <span className="text-accent">04</span> / Experience
            </p>
            <h2 className="mb-8 max-w-xl text-3xl font-light tracking-tight text-white text-heading-shadow md:text-4xl lg:text-5xl">
              Industry Experience
            </h2>
          </RevealItem>

          <div className="relative mb-12">
            {/* Removed horizontal line */}

            <div 
              ref={industryScrollRef}
              className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar overscroll-x-contain pb-8 focus-ring relative z-10"
              style={{ maskImage: "linear-gradient(to right, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)" }}
              tabIndex={0}
              role="region"
              aria-label="Industry experience timeline"
              data-lenis-prevent="true"
              onScroll={(e) => handleScroll(e, setIndustryProgress)}
              onKeyDown={(e) => handleKeyDown(e, industryScrollRef)}
            >
              {experiences
                .filter((exp) => exp.type === "real")
                .map((exp) => {
                  const isOpen = expandedId === exp.id;
                  return (
                    <RevealItem key={exp.id} className="snap-start w-[min(85vw,700px)] flex-none relative h-full" data-card>
                      <div className="relative h-full">

                        <button
                          onClick={() => toggle(exp.id)}
                          className="glass-panel w-full h-full rounded-sm p-6 text-left transition-colors hover:border-accent/15 border-accent/10 flex flex-col"
                          data-cursor="hover"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-4">
                            <CompanyMark company={exp.company} />
                            <div className="min-w-0 flex-1">
                              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <h3 className="text-xl font-light text-foreground md:text-2xl">
                                  {exp.company}
                                </h3>
                                <span className="font-mono text-[10px] tracking-wider text-accent/80 whitespace-nowrap">
                                  {exp.period}
                                </span>
                              </div>
                              <p className="font-mono text-sm text-[rgba(220,218,240,0.9)]">{exp.program}</p>
                              
                              {exp.tags && exp.tags.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {exp.tags.map(tag => (
                                    <span key={tag} className="rounded-sm bg-glass-bg border border-glass-border px-2 py-0.5 font-mono text-[9px] text-steel">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              
                              <p className="mt-4 text-sm leading-relaxed text-[rgba(220,218,240,0.8)] line-clamp-3">{exp.summary}</p>
                            </div>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: reducedMotion ? 0 : 0.2 }}
                              className="mt-1 shrink-0 font-mono text-xs text-steel"
                            >
                              ▼
                            </motion.span>
                          </div>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <ul className="mt-6 space-y-3 border-t border-glass-border pt-6">
                                  {exp.details.map((detail, idx) => {
                                    const isNote = detail.startsWith("Note:");
                                    return (
                                      <li
                                        key={idx}
                                        className={`flex gap-3 font-mono text-xs leading-relaxed ${isNote ? 'text-steel/70 italic' : 'text-[rgba(220,218,240,0.85)]'}`}
                                      >
                                        <span className="shrink-0 text-accent/60 mt-0.5">▸</span>
                                        <span>
                                          {detail.includes(":") && !isNote ? (
                                            <>
                                              <span className="text-foreground/90 font-medium">{detail.split(":")[0]}:</span>
                                              {detail.substring(detail.indexOf(":") + 1)}
                                            </>
                                          ) : (
                                            detail
                                          )}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    </RevealItem>
                  );
                })}
            </div>
            
            {/* Scroll Progress Indicator */}
            <div className="mt-2 h-[2px] w-full max-w-xs bg-glass-border overflow-hidden mx-auto hidden md:block rounded-full">
               <div 
                 className="h-full bg-accent transition-transform duration-100 ease-out origin-left rounded-full" 
                 style={{ transform: `scaleX(${Math.max(0.05, industryProgress)})` }} 
               />
            </div>
          </div>
          
          <RevealItem>
            <h3 className="mb-2 text-xl font-light tracking-tight text-white text-heading-shadow md:text-2xl">
              Virtual Programs
            </h3>
            <p className="mb-8 font-mono text-[10px] text-foreground/70 text-heading-shadow">
              Simulated desk environments · Forage platform
            </p>
          </RevealItem>

          <div className="relative">
            {/* Removed horizontal line */}

            <div 
              ref={virtualScrollRef}
              className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar overscroll-x-contain pb-8 focus-ring relative z-10"
              style={{ maskImage: "linear-gradient(to right, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 85%, transparent 100%)" }}
              tabIndex={0}
              role="region"
              aria-label="Virtual programs timeline"
              data-lenis-prevent="true"
              onScroll={(e) => handleScroll(e, setVirtualProgress)}
              onKeyDown={(e) => handleKeyDown(e, virtualScrollRef)}
            >
              {experiences
                .filter((exp) => exp.type === "simulated")
                .map((exp) => {
                  const isOpen = expandedId === exp.id;
                  return (
                    <RevealItem key={exp.id} className="snap-start w-[min(85vw,450px)] flex-none relative h-full" data-card>
                      <div className="relative h-full">

                        <button
                          onClick={() => toggle(exp.id)}
                          className="glass-panel w-full h-full rounded-sm p-4 text-left transition-colors hover:border-steel/30 flex flex-col"
                          data-cursor="hover"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-4">
                            <div className="min-w-0 flex-1">
                              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <h4 className="text-base font-light text-foreground md:text-lg">
                                  {exp.company}
                                </h4>
                                <span className="font-mono text-[9px] tracking-wider text-accent/80 whitespace-nowrap">
                                  {exp.period}
                                </span>
                              </div>
                              <p className="font-mono text-[10px] text-[rgba(220,218,240,0.9)] line-clamp-1">{exp.program}</p>
                            </div>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: reducedMotion ? 0 : 0.2 }}
                              className="mt-1 shrink-0 font-mono text-[10px] text-steel"
                            >
                              ▼
                            </motion.span>
                          </div>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 border-t border-glass-border pt-4">
                                  <p className="mb-3 text-xs text-[rgba(220,218,240,0.8)]">{exp.summary}</p>
                                  <ul className="space-y-1.5">
                                    {exp.details.map((detail, idx) => (
                                      <li
                                        key={idx}
                                        className="flex gap-2 font-mono text-[10px] leading-relaxed text-[rgba(220,218,240,0.85)]"
                                      >
                                        <span className="shrink-0 text-accent/60">▸</span>
                                        {detail}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    </RevealItem>
                  );
                })}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="mt-2 h-[2px] w-full max-w-xs bg-glass-border overflow-hidden mx-auto hidden md:block rounded-full">
               <div 
                 className="h-full bg-steel/50 transition-transform duration-100 ease-out origin-left rounded-full" 
                 style={{ transform: `scaleX(${Math.max(0.05, virtualProgress)})` }} 
               />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
