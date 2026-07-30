"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative section-padding pb-32" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.15}>
          <RevealItem>
            <SectionHeading
              number="05"
              label="Projects"
              title="Case studies"
              subtitle="Each project proves a capability — not a thumbnail, a thesis."
              className="mb-16"
            />
          </RevealItem>

          <div className="space-y-8 md:space-y-12">
            {projects.map((project) => (
              <RevealItem key={project.id}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
