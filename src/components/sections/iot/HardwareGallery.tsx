"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Cpu } from 'lucide-react';
import { HardwareComponentData } from '@/types/iot';

interface HardwareGalleryProps {
  components: HardwareComponentData[];
  taskTitle?: string;
}

function ComponentCard({ component }: { component: HardwareComponentData }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photo = component.photos[photoIndex];

  const next = () => setPhotoIndex((i) => (i + 1) % component.photos.length);
  const prev = () => setPhotoIndex((i) => (i - 1 + component.photos.length) % component.photos.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden grid md:grid-cols-2"
    >
      {/* Photo carousel */}
      <div className="relative bg-black/40 border-b md:border-b-0 md:border-r border-white/10">
        {photo && (
          <div className="relative aspect-[4/3]">
            <img
              src={photo.imageUrl}
              alt={photo.altText}
              className="w-full h-full object-contain p-4"
              loading="lazy"
            />
            {component.photos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}
        <div className="px-4 py-3 border-t border-white/5">
          <p className="text-xs text-gray-400 leading-relaxed">{photo?.caption}</p>
          {component.photos.length > 1 && (
            <p className="text-[10px] text-gray-600 font-mono mt-1">
              {photoIndex + 1} / {component.photos.length} · {photo?.type}
            </p>
          )}
        </div>
      </div>

      {/* Details panel */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h4 className="text-lg font-medium text-white">{component.name}</h4>
          <Cpu className="w-4 h-4 text-accent shrink-0 mt-1" />
        </div>
        <p className="text-xs text-gray-500 font-mono mb-4">
          {component.manufacturer}{component.model ? ` · ${component.model}` : ''} · {component.category}
        </p>

        <p className="text-sm text-gray-400 leading-relaxed mb-5">{component.usageContext}</p>

        <div className="mb-5">
          <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Specifications</h5>
          <div className="divide-y divide-white/5 border border-white/5 rounded-lg overflow-hidden">
            {component.specifications.map((spec, i) => (
              <div key={i} className="flex justify-between items-center px-3 py-2 text-sm odd:bg-white/5">
                <span className="text-gray-400">{spec.label}</span>
                <span className="text-white font-mono text-xs">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {component.pins && component.pins.length > 0 && (
          <div className="mb-5">
            <h5 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Pins</h5>
            <div className="divide-y divide-white/5 border border-white/5 rounded-lg overflow-hidden">
              {component.pins.map((pin, i) => (
                <div key={i} className="px-3 py-2 text-sm odd:bg-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-mono text-xs">{pin.name}</span>
                    <span className="text-gray-400 text-xs">{pin.voltage}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">{pin.function}{pin.notes ? ` — ${pin.notes}` : ''}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {component.datasheetUrl && (
            <a
              href={component.datasheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-medium hover:bg-accent/20 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" /> Datasheet
            </a>
          )}
          {component.purchaseUrl && (
            <a
              href={component.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Where to buy
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function HardwareGallery({ components, taskTitle }: HardwareGalleryProps) {
  if (!components || components.length === 0) return null;

  return (
    <div className="py-10">
      <div className="mb-6">
        <h3 className="text-xl font-medium text-white mb-1">Hardware Used{taskTitle ? ` in ${taskTitle}` : ''}</h3>
        <p className="text-sm text-gray-500">Real components, pinouts, and specs — not just code.</p>
      </div>
      <div className="grid gap-6">
        <AnimatePresence>
          {components.map((component, idx) => (
            <ComponentCard key={`${component.name}-${idx}`} component={component} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
