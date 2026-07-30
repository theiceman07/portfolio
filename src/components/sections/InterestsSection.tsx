"use client";

import {
  interestMosaic,
  interestCategoryStyles,
  type InterestCategory,
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

const categoryLabels: Record<InterestCategory, string> = {
  sport: "SPORT",
  lifestyle: "LIFESTYLE",
  mind: "MIND",
  film: "FILM",
};

export function InterestsSection() {
  return (
    <section id="interests" className="relative section-padding pb-32" aria-labelledby="interests-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.05}>
          <RevealItem>
            <SectionHeading
              number="08"
              label="Interests"
              title={
                <>
                  Off the clock,
                  <span className="text-foreground/45 text-heading-shadow"> still on-brand.</span>
                </>
              }
              subtitle="A mosaic of what fuels the curiosity — tap nothing, just vibe."
              className="mb-12"
            />
          </RevealItem>

          <RevealItem>
            <div className="mb-6 flex flex-wrap gap-2">
              {(Object.keys(categoryLabels) as InterestCategory[]).map((cat) => (
                <span
                  key={cat}
                  className="rounded border border-glass-border px-+2 py-1 font-mono text-[9px] tracking-widest text-steel/70"
                >
                  {categoryLabels[cat]}
                </span>
              ))}
            </div>
          </RevealItem>

          <div className="grid grid-cols-1 gap-3 auto-rows-[100px] md:grid-cols-4 md:grid-flow-dense md:auto-rows-[120px]">
            {interestMosaic.map((item) => {
              const style = interestCategoryStyles[item.category];
              return (
                <RevealItem
                  key={item.id}
                  className={`${item.span}`}
                >
                  <div
                    className={`group glass-panel relative flex h-full flex-col justify-between overflow-hidden rounded-sm border p-4 transition-all duration-500 ${style.accent}`}
                    data-cursor="hover"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] text-steel/50 transition-opacity duration-300 group-hover:opacity-0" aria-hidden>
                        {style.icon}
                      </span>
                      <span className="rounded border border-glass-border px-1.5 py-0.5 font-mono text-[8px] tracking-widest text-steel/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    
                    <div className="relative mt-4">
                      <div className="font-mono text-xs leading-tight text-[rgba(220,218,240,0.9)] transition-all duration-500 group-hover:-translate-y-2 md:text-sm">
                        {item.label}
                      </div>
                      <div className="absolute left-0 top-full font-sans text-[10px] tracking-wide text-steel opacity-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-100">
                        {item.literal}
                      </div>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
