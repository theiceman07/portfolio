import { StatBadge } from "@/components/ui/StatBadge";
import { SkillTag } from "@/components/ui/SkillTag";

export interface ProjectData {
  id: string;
  index: string;
  title: string;
  category: string;
  proves: string;
  description: string;
  tags: readonly string[];
  badges: readonly string[];
  href: string;
  linkLabel: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel group rounded-sm transition-colors hover:border-accent/10">
      <div className="grid gap-8 p-8 md:grid-cols-12 md:p-10">
        <div className="md:col-span-3">
          <p className="font-mono text-4xl font-light text-foreground/40 text-heading-shadow transition-colors group-hover:text-accent/40 md:text-5xl">
            {project.index}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 text-heading-shadow mt-4">{project.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <StatBadge key={badge}>{badge}</StatBadge>
            ))}
          </div>
        </div>

        <div className="md:col-span-9">
          <h3 className="mb-3 text-xl font-light leading-snug text-white text-heading-shadow md:text-2xl lg:text-3xl">
            {project.title}
          </h3>

          <p className="mb-4 border-l-2 border-accent/40 pl-4 font-mono text-xs leading-relaxed text-accent/90 md:text-sm">
            {project.proves}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-[rgba(220,218,240,0.8)] md:text-base md:leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <SkillTag key={tag}>{tag}</SkillTag>
            ))}
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-sm font-mono text-xs tracking-wider text-foreground/70 transition-colors hover:text-accent"
            data-cursor="hover"
          >
            {project.linkLabel}
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
