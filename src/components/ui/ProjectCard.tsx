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

const categoryStyles: Record<string, { border: string; glow: string; text: string; bg: string; borderLeft: string }> = {
  "risk-intelligence": { 
    border: "border-t border-t-amber-500/30", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.25)] group-hover:border-amber-500/30", 
    text: "bg-gradient-to-br from-amber-500/80 to-amber-200/20 text-transparent bg-clip-text",
    bg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    borderLeft: "border-l-amber-500/50 text-amber-100/90"
  },
  "blockchain-viz": { 
    border: "border-t border-t-purple-500/30", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.25)] group-hover:border-purple-500/30", 
    text: "bg-gradient-to-br from-purple-500/80 to-purple-200/20 text-transparent bg-clip-text",
    bg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    borderLeft: "border-l-purple-500/50 text-purple-100/90"
  },
  "fastf1-undercut": { 
    border: "border-t border-t-red-500/30", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.25)] group-hover:border-red-500/30", 
    text: "bg-gradient-to-br from-red-500/80 to-red-200/20 text-transparent bg-clip-text",
    bg: "bg-red-500/10 border-red-500/30 text-red-400",
    borderLeft: "border-l-red-500/50 text-red-100/90"
  },
  "fraud-detection": { 
    border: "border-t border-t-emerald-500/30", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/30", 
    text: "bg-gradient-to-br from-emerald-500/80 to-emerald-200/20 text-transparent bg-clip-text",
    bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    borderLeft: "border-l-emerald-500/50 text-emerald-100/90"
  },
  "restaurant-rec": { 
    border: "border-t border-t-cyan-500/30", 
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.25)] group-hover:border-cyan-500/30", 
    text: "bg-gradient-to-br from-cyan-500/80 to-cyan-200/20 text-transparent bg-clip-text",
    bg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    borderLeft: "border-l-cyan-500/50 text-cyan-100/90"
  },
};

const defaultStyle = {
  border: "border-t border-t-accent/30",
  glow: "group-hover:shadow-[0_0_40px_-10px_rgba(168,200,232,0.25)] group-hover:border-accent/30",
  text: "bg-gradient-to-br from-accent/80 to-white/20 text-transparent bg-clip-text",
  bg: "bg-accent/10 border-accent/30 text-accent",
  borderLeft: "border-l-accent/50 text-white/90"
};

export function ProjectCard({ project }: ProjectCardProps) {
  const style = categoryStyles[project.id] || defaultStyle;

  return (
    <article className={`group rounded-sm border border-glass-border bg-[rgba(10,10,15,0.6)] backdrop-blur-[20px] transition-all duration-500 hover:-translate-y-1 ${style.border} ${style.glow}`}>
      <div className="grid gap-8 p-8 md:grid-cols-12 md:p-10">
        <div className="md:col-span-3">
          <p className={`font-mono text-4xl font-bold md:text-5xl ${style.text}`}>
            {project.index}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70 text-heading-shadow mt-4">{project.category}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span key={badge} className={`rounded border px-2 py-1 font-mono text-[9px] tracking-wider text-heading-shadow backdrop-blur-md ${style.bg}`}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-9">
          <h3 className="mb-3 text-xl font-light leading-snug text-white text-heading-shadow md:text-2xl lg:text-3xl">
            {project.title}
          </h3>

          <p className={`mb-4 border-l-2 pl-4 font-mono text-xs leading-relaxed md:text-sm ${style.borderLeft}`}>
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
            className="focus-ring inline-flex items-center gap-2 rounded-sm font-mono text-xs tracking-wider text-foreground/70 transition-colors hover:text-white"
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
