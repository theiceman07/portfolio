"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface MediaGalleryProps {
  images: { src: string; caption: string }[];
  videoSrc?: string;
  videoCaption?: string;
}

export function MediaGallery({ images, videoSrc, videoCaption }: MediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="space-y-6 my-8">
      {videoSrc && (
        <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40">
          <div className="aspect-video w-full relative">
            <video
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              src={videoSrc}
              muted
              playsInline
              loop
              autoPlay
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-accent/80 hover:bg-accent flex items-center justify-center text-white backdrop-blur-sm transition-transform hover:scale-110 shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]"
              >
                <Play className="w-6 h-6 ml-1" />
              </button>
            </div>
          </div>
          {videoCaption && (
            <div className="px-4 py-3 bg-black/60 backdrop-blur-md absolute bottom-0 left-0 right-0 border-t border-white/10">
              <p className="text-sm text-gray-300 font-medium">{videoCaption}</p>
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/20 cursor-pointer"
            onClick={() => setSelectedImage(idx)}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="p-3 text-xs text-white line-clamp-2">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-white/10" onClick={(e) => e.stopPropagation()}>
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].caption}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-center">{images[selectedImage].caption}</p>
              </div>
            </div>
          </motion.div>
        )}

        {videoOpen && videoSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setVideoOpen(false)}
          >
            <button className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <video
                className="w-full h-full"
                src={videoSrc}
                controls
                autoPlay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
