"use client";

import { useState } from "react";
import Image from "next/image";
import { photographyItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { useReducedMotion } from "@/hooks/useMotion";
import CircularGallery from "@/components/ui/CircularGallery";
import { useLoading } from "@/components/providers/LoadingProvider";

export function PhotographySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const { reportWebGLReady } = useLoading();
  const active = lightboxIndex !== null ? photographyItems[lightboxIndex] : null;

  return (
    <section
      id="photography"
      className="relative section-padding"
      aria-labelledby="photography-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.08}>
          <RevealItem>
            <SectionHeading
              number="08"
              label="Photography"
              title="Through the lens"
              subtitle="Certificate of Appreciation · The Art of Film and Media"
              className="mb-12"
            />
          </RevealItem>

          {/* CircularGallery WebGL (Hidden on mobile) */}
          <div className="hidden h-[600px] w-full md:block">
            <CircularGallery
              items={photographyItems.map((p) => ({ image: p.src, text: p.caption }))}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              onItemClick={(index) => setLightboxIndex(index)}
              onInitialized={reportWebGLReady}
            />
          </div>

          {/* Masonry-style grid (Visible on mobile, sr-only on desktop) */}
          <div className="columns-1 gap-4 sm:columns-2 md:sr-only">
            {photographyItems.map((photo, index) => (
              <RevealItem key={photo.id} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="focus-ring group relative block w-full overflow-hidden rounded-sm border border-glass-border bg-glass-bg text-left"
                  aria-label={`View ${photo.caption}`}
                  data-cursor="hover"
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                    }`}
                  >
                    {/* Using standard <img> tag for the sr-only fallback to avoid next/image double-fetching optimized vs raw URLs. */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`h-full w-full object-cover ${
                        reducedMotion
                          ? ""
                          : "transition-transform duration-500 group-hover:scale-105"
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-foreground/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {photo.caption}
                    </p>
                  </div>
                </button>
              </RevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {active && (
        <Lightbox
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          src={active.src}
          alt={active.alt}
          caption={active.caption}
        />
      )}
    </section>
  );
}
