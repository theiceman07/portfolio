interface SkillTagProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "terminal";
  className?: string;
}

export function SkillTag({ children, variant = "default", className = "" }: SkillTagProps) {
  const variants = {
    default: "rounded border border-glass-border px-2.5 py-1 font-mono text-[10px] text-steel",
    outline:
      "rounded-full border border-glass-border px-3 py-1 font-mono text-[10px] tracking-wide text-foreground/80 hover:border-steel/40 hover:text-white",
    terminal:
      "border border-transparent px-2 py-2 font-mono text-xs text-foreground/90 transition-colors hover:border-accent/10 hover:bg-accent-muted/30 hover:text-accent font-medium",
  };

  return (
    <span className={`${variants[variant]} ${className}`} data-cursor="hover">
      {children}
    </span>
  );
}
