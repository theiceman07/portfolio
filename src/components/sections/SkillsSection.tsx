"use client";

import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import DomeGallery from "@/components/ui/DomeGallery";

export function SkillsSection() {
  // Convert readonly tuple to mutable array for the component
  const skillsArray = [...skills];

  return (
    <section id="skills" className="relative section-padding" aria-labelledby="skills-heading">
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
            <div className="relative w-full h-[600px] md:h-[700px] rounded-lg overflow-hidden border border-glass-border bg-[rgba(10,10,15,0.3)]">
              <DomeGallery 
                items={skillsArray}
                maxVerticalRotationDeg={4}
                segments={20}
              />
            </div>
          </RevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
