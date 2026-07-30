"use client";

import { protosemUpdates } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

const typeLabels: Record<string, string> = {
  research: "RESEARCH",
  development: "DEVELOPMENT",
  design: "DESIGN",
  testing: "TESTING",
};

export function ProtosemSection() {
  return (
    <section id="protosem" className="relative section-padding pb-32" aria-labelledby="protosem-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.1}>
          <RevealItem>
            <SectionHeading
              number="06"
              label="Protosem"
              title="20-Week Prototype Development"
              className="mb-16"
            />
          </RevealItem>

          <div className="relative mt-8">
            {/* Center line for desktop, left line for mobile */}
            <div className="absolute bottom-0 left-[15px] md:left-1/2 top-0 w-px md:-translate-x-1/2 bg-glass-border" aria-hidden />

            <div className="space-y-12">
              {protosemUpdates.map((update, i) => {
                const isEven = i % 2 === 0;
                return (
                  <RevealItem key={update.id}>
                    <div className="relative flex w-full">
                      {/* Timeline dot */}
                      <div
                        className="absolute left-[15px] top-4 md:left-1/2 md:top-1/2 h-2.5 w-2.5 -translate-x-1/2 md:-translate-y-1/2 rounded-full border border-steel/60 bg-background z-10"
                        aria-hidden
                      />

                      {/* Content block */}
                      <div
                        className={`w-full pl-10 md:w-1/2 md:pl-0 ${
                          isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                        }`}
                      >
                        <div
                          className={`glass-panel rounded-sm p-5 flex flex-col gap-3 ${
                            isEven ? "md:items-end" : "md:items-start"
                          }`}
                        >
                          <span className="glass-panel inline-flex shrink-0 items-center justify-center rounded px-2 py-1 font-mono text-[9px] tracking-wider text-steel w-max">
                            {typeLabels[update.type] || "UPDATE"}
                          </span>
                          <div>
                            <h3 className="text-base font-light text-white text-heading-shadow md:text-lg">{update.title}</h3>
                            <p className="mt-1 font-mono text-[11px] text-[rgba(220,218,240,0.9)]">{update.subtitle}</p>
                          </div>
                        </div>
                      </div>
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
