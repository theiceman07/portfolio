"use client";

import { tickerItems } from "@/lib/data";
import { useLiveClock } from "@/hooks/useMotion";

export function DataTicker() {
  const time = useLiveClock();
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-glass-border bg-background backdrop-blur-md">
      <div className="flex items-center">
        <div className="hidden shrink-0 border-r border-glass-border px-4 py-2 font-mono text-[11px] tracking-wider text-status sm:block">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-status mr-2" />
          LIVE
        </div>
        <div className="min-w-0 flex-1 overflow-hidden py-2">
          <div className="flex animate-ticker whitespace-nowrap">
            {items.map((item, i) => (
              <span key={`${item}-${i}`} className="mx-6 font-mono text-[11px] tracking-[0.15em] text-foreground">
                {item}
                <span className="mx-6 text-accent/50">◆</span>
              </span>
            ))}
          </div>
        </div>
        <div className="hidden shrink-0 border-l border-glass-border px-4 py-2 font-mono text-[11px] tracking-wider text-steel lg:block">
          {time}
        </div>
      </div>
    </div>
  );
}

