"use client";

import { navItems } from "@/lib/data";
import { useActiveSection } from "@/hooks/useMotion";
import { motion } from "framer-motion";
import GlassSurface from "@/components/ui/GlassSurface";

export function Navigation() {
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-auto max-w-[calc(100%-24px)] -translate-x-1/2 md:top-6">
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={999}
        blur={15}
        backgroundOpacity={0.1}
        saturation={1.5}
        className="rounded-[999px]"
      >
        <nav className="mx-auto flex items-center justify-center px-4 py-3 md:px-6 md:py-3.5 w-full h-full">
          <ul className="flex items-center gap-1 overflow-x-auto md:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="relative px-2 py-1 md:px-3"
                    data-cursor="hover"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="flex items-center gap-1.5 text-[10px] tracking-wider md:text-xs">
                      <span className={`font-mono ${isActive ? "text-accent text-heading-shadow font-semibold" : "text-white/70 text-heading-shadow"}`}>{item.number}</span>
                      <span
                        className={`font-display hidden transition-colors sm:inline tracking-wide ${
                          isActive ? "text-white font-semibold text-heading-shadow" : "text-white/70 text-heading-shadow hover:text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </GlassSurface>
    </header>
  );
}
