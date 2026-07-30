"use client";

import { LineWaves } from "@/components/ui/LineWaves";
import { useReducedMotion } from "@/hooks/useMotion";

export function LineWavesBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <LineWaves
      color1="#000000"
      color2="#94a3b8"
      color3="#94a3b8"
      speed={0.3}
      innerLineCount={32}
      outerLineCount={36}
      warpIntensity={1}
      rotation={-45}
      edgeFadeWidth={0}
      colorCycleSpeed={1}
      brightness={0.2}
      enableMouseInteraction={!reducedMotion}
      mouseInfluence={2}
    />
  );
}
