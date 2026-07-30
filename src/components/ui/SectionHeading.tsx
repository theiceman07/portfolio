interface SectionHeadingProps {
  number: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mono-label mb-4">
        <span className="text-accent">{number}</span> / {label}
      </p>
      <h2 className="max-w-2xl text-3xl font-light tracking-tight text-white text-heading-shadow md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-lg font-mono text-xs text-foreground/45 text-heading-shadow">{subtitle}</p>
      )}
    </div>
  );
}
