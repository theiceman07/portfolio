"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useMotion";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export function Lightbox({ isOpen, onClose, src, alt, caption }: LightboxProps) {
  const reducedMotion = useReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" aria-hidden />

          <motion.figure
            initial={reducedMotion ? false : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-sm border border-glass-border">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="h-auto max-h-[75vh] w-auto object-contain"
                priority
              />
            </div>
            {caption && (
              <figcaption className="mt-4 text-center font-mono text-xs text-foreground/60">
                {caption}
              </figcaption>
            )}
            <button
              onClick={onClose}
              className="focus-ring absolute -right-2 -top-2 rounded-sm border border-glass-border bg-background px-3 py-1 font-mono text-xs text-foreground/70 hover:text-accent md:-right-4 md:-top-4"
              aria-label="Close lightbox"
            >
              ESC ✕
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
