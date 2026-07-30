interface StatBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function StatBadge({ children, className = "" }: StatBadgeProps) {
  return (
    <span
      className={`rounded border border-accent/40 bg-[rgba(255,176,0,0.15)] px-2 py-1 font-mono text-[9px] tracking-wider text-accent text-heading-shadow backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}
