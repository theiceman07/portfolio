"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpandableTaskCardProps {
  taskNumber: string;
  colorVar: string;
  title: string;
  description: string;
  videoSrc: string;
  imageFolder: string;
  imageCount: number;
}

export function ExpandableTaskCard({
  taskNumber,
  colorVar,
  title,
  description,
  videoSrc,
  imageFolder,
  imageCount,
}: ExpandableTaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="glass-panel rounded-sm shadow-xl border border-glass-border bg-glass-bg transition-colors hover:border-accent/15 overflow-hidden"
    >
      <div 
        className="p-8 cursor-pointer flex justify-between items-start group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="pr-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: colorVar, backgroundColor: colorVar }} />
            <span className="inline-flex shrink-0 items-center justify-center font-mono text-[10px] tracking-widest text-steel w-max">
              {taskNumber}
            </span>
          </div>
          <h3 className="text-2xl font-light text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
          <p className="font-mono text-sm text-[rgba(220,218,240,0.8)] leading-relaxed">
            {description}
          </p>
        </div>
        <div className="text-steel shrink-0 mt-2">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="p-8 pt-0 space-y-6">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-glass-border bg-black/20">
                <video className="w-full h-full" controls preload="metadata">
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Array.from({ length: imageCount }, (_, i) => i + 1).map((num) => (
                  <div key={num} className="aspect-video rounded-lg overflow-hidden border border-glass-border bg-black/20 group/img">
                    <img 
                      src={`${imageFolder}/image${num}.png`} 
                      alt={`${taskNumber} Photo ${num}`} 
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
