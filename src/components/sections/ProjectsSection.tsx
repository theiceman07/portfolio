"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative section-padding" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.15}>
          <RevealItem>
            <SectionHeading
              number="05"
              label="Projects"
              title="Case studies"
              subtitle="Each project proves a capability — not a thumbnail, a thesis."
              className="mb-8"
            />
          </RevealItem>

          <div className="space-y-8 md:space-y-0">
            <ScrollStack useWindowScroll={true} itemDistance={100} itemScale={0.03} itemStackDistance={30} baseScale={0.85}>
              {projects.map((project) => (
                <ScrollStackItem key={project.id}>
                  <ProjectCard project={project} />
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
