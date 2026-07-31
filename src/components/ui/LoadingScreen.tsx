"use client";

import { useLoading } from "@/components/providers/LoadingProvider";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const { isReady, progress } = useLoading();
  const [shouldRender, setShouldRender] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isReady) {
      if (reducedMotion) {
        setShouldRender(false);
      } else {
        const timer = setTimeout(() => {
          setShouldRender(false);
        }, 500); // Wait for fade out
        return () => clearTimeout(timer);
      }
    }
  }, [isReady, reducedMotion]);

  if (!shouldRender) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-500 pointer-events-none"
      style={{ opacity: isReady ? 0 : 1, transitionDuration: reducedMotion ? '0s' : '500ms' }}
    >
      <div className="w-64 max-w-[80vw] h-[2px] bg-glass-border overflow-hidden rounded-full">
        <div 
          className="h-full bg-accent"
          style={{ 
            width: `${progress * 100}%`,
            transition: reducedMotion ? 'none' : 'width 0.4s ease-out' 
          }}
        />
      </div>
      <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-steel/60">
        {progress < 1 ? 'Initializing' : 'Ready'}
      </div>
    </div>
  );
}
