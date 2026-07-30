"use client";

import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillTag } from "@/components/ui/SkillTag";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

export function SkillsSection() {
  return (
    <section id="skills" className="relative section-padding pb-32" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.06}>
          <RevealItem>
            <SectionHeading
              number="03"
              label="Skills"
              title="Capabilities readout"
              className="mb-12"
            />
          </RevealItem>

          <RevealItem>
            <div className="glass-panel overflow-hidden rounded-sm">
              <div className="flex items-center justify-between border-b border-glass-border px-4 py-3 md:px-6">
                <div className="flex items-center gap-2" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-white/70">
                  avk@portfolio:~ /capabilities
                </span>
                <span className="font-mono text-[10px] text-accent">[{skills.length}] LOADED</span>
              </div>

              <div className="p-4 md:p-6">
                <p className="mb-6 font-mono text-xs text-white/80">
                  <span className="text-accent">$</span> cat skills_manifest.txt --format=grid
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {skills.map((skill, i) => (
                    <div key={skill} className="group flex items-center gap-2">
                      <span className="font-mono text-[10px] text-white/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <SkillTag variant="terminal">{skill}</SkillTag>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-glass-border pt-4 font-mono text-[10px] text-white/50">
                  <span>
                    STATUS: <span className="text-accent font-semibold">ACTIVE</span>
                  </span>
                  <span>DOMAINS: quant · ml · blockchain · viz</span>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="mt-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillTag key={`tag-${skill}`} variant="outline">
                  {skill.toUpperCase()}
                </SkillTag>
              ))}
            </div>
          </RevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
