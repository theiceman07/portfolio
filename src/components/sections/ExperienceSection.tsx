"use client";

import { useState } from "react";
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
  const reducedMotion = useReducedMotion();

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative section-padding pb-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.12}>
          <RevealItem>
            <p className="mono-label mb-4">
              <span className="text-accent">04</span> / Experience
            </p>
            <h2 className="mb-16 max-w-xl text-3xl font-light tracking-tight text-white text-heading-shadow md:text-4xl lg:text-5xl">
              Industry Experience
            </h2>
          </RevealItem>

          <div className="relative mb-24">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-glass-border md:block" />

            <div className="space-y-4">
              {experiences
                .filter((exp) => exp.type === "real")
                .map((exp) => {
                  const isOpen = expandedId === exp.id;
                  return (
                    <RevealItem key={exp.id}>
                      <div className="relative md:pl-16">
                        <div className="absolute left-3.5 top-5 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-accent/40 bg-background md:block">
                          {isOpen && (
                            <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                          )}
                        </div>

                        <button
                          onClick={() => toggle(exp.id)}
                          className="glass-panel w-full rounded-sm p-6 text-left transition-colors hover:border-accent/15 border-accent/10"
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
                                <span className="font-mono text-[10px] tracking-wider text-accent/80">
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
                              
                              <p className="mt-4 text-sm leading-relaxed text-[rgba(220,218,240,0.8)]">{exp.summary}</p>
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
                                <ul className="mt-6 space-y-3 border-t border-glass-border pt-6 md:ml-14">
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
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-glass-border md:block" />

            <div className="space-y-3">
              {experiences
                .filter((exp) => exp.type === "simulated")
                .map((exp) => {
                  const isOpen = expandedId === exp.id;
                  return (
                    <RevealItem key={exp.id}>
                      <div className="relative md:pl-16">
                        <div className="absolute left-3.5 top-4 hidden h-2 w-2 -translate-x-1/2 rounded-full border border-steel/40 bg-background md:block">
                        </div>

                        <button
                          onClick={() => toggle(exp.id)}
                          className="glass-panel w-full rounded-sm p-4 text-left transition-colors hover:border-steel/30"
                          data-cursor="hover"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-4">
                            <div className="min-w-0 flex-1">
                              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <h4 className="text-base font-light text-foreground md:text-lg">
                                  {exp.company}
                                </h4>
                                <span className="font-mono text-[9px] tracking-wider text-accent/80">
                                  {exp.period}
                                </span>
                              </div>
                              <p className="font-mono text-[10px] text-[rgba(220,218,240,0.9)]">{exp.program}</p>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
