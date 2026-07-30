"use client";

import { useState } from "react";
import Image from "next/image";
import { photographyItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { useReducedMotion } from "@/hooks/useMotion";

export function PhotographySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const active = lightboxIndex !== null ? photographyItems[lightboxIndex] : null;

  return (
    <section
      id="photography"
      className="relative section-padding pb-32"
      aria-labelledby="photography-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal stagger={0.08}>
          <RevealItem>
            <SectionHeading
              number="09"
              label="Photography"
              title="Through the lens"
              subtitle="Certificate of Appreciation · The Art of Film and Media"
              className="mb-12"
            />
          </RevealItem>

          {/* Masonry-style grid using CSS columns on larger screens */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
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
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${
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
