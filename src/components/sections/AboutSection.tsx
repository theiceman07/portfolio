"use client";

import { aboutStatement, personalityTraits } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="relative section-padding pb-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <RevealItem>
            <div className="mb-16 flex items-end justify-between gap-8">
              <SectionHeading
                number="02"
                label="About"
                title={
                  <>
                    Analytical mind.
                    <br />
                    <span className="text-foreground/45 text-heading-shadow">Global ambition.</span>
                  </>
                }
              />
              <p className="hidden max-w-xs text-right font-mono text-[10px] leading-relaxed tracking-wider text-steel lg:block">
                KCT · B.TECH IT · COIMBATORE
              </p>
            </div>
          </RevealItem>

          <div className="grid gap-12 lg:grid-cols-12">
            <RevealItem className="lg:col-span-7">
              <div className="glass-panel rounded-sm p-8 md:p-10">
                <p className="mono-label mb-6">Personal Statement</p>
                <p className="text-base leading-relaxed text-[rgba(220,218,240,0.9)] md:text-lg md:leading-relaxed">
                  {aboutStatement}
                </p>
                <div className="mt-8 border-t border-glass-border pt-6">
                  <p className="mono-label mb-2">Education</p>
                  <p className="text-sm text-foreground/80">B.Tech Information Technology</p>
                  <p className="mt-1 font-mono text-xs text-steel">
                    Kumaraguru College of Technology · Coimbatore, India
                  </p>
                </div>
              </div>
            </RevealItem>

            <RevealItem className="lg:col-span-5">
              <div className="glass-panel rounded-sm p-8">
                <p className="mono-label mb-6">Trait Telemetry</p>
                <ul className="space-y-5">
                  {personalityTraits.map((trait) => (
                    <li key={trait.label}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-mono text-xs text-[rgba(220,218,240,0.9)]">{trait.label}</span>
                        <span className="font-mono text-xs text-accent">{trait.value}</span>
                      </div>
                      <div className="h-px w-full bg-glass-border">
                        <div
                          className="h-px bg-gradient-to-r from-accent/80 to-steel/60"
                          style={{ width: `${trait.value}%` }}
                          role="presentation"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
