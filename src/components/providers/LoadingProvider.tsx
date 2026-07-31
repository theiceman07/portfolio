"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  isReady: boolean;
  progress: number;
  reportWebGLReady: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isReady: false,
  progress: 0,
  reportWebGLReady: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [webglReady, setWebglReady] = useState(false);

  useEffect(() => {
    let imagesDone = false;
    let fontsDone = false;
    let mounted = true;

    // Minimum display time
    const start = Date.now();
    const MIN_TIME = 600;
    const MAX_TIME = 8000;
    
    let isForcedReady = false;
    const fallbackTimeout = setTimeout(() => {
      if (mounted) {
        isForcedReady = true;
        setIsReady(true);
        setProgress(1);
      }
    }, MAX_TIME);

    const checkReady = () => {
      if (isForcedReady) return;
      
      let currentProgress = 0;
      if (fontsDone) currentProgress += 0.33;
      if (imagesDone) currentProgress += 0.33;
      if (webglReady) currentProgress += 0.34;
      
      if (mounted) {
        setProgress(Math.min(currentProgress, 0.99));
      }

      if (fontsDone && imagesDone && webglReady) {
        const elapsed = Date.now() - start;
        const delay = Math.max(0, MIN_TIME - elapsed);
        
        setTimeout(() => {
          if (mounted) {
            setProgress(1);
            // small delay for the bar to reach 100% before fading out
            setTimeout(() => {
              if (mounted) setIsReady(true);
              clearTimeout(fallbackTimeout);
            }, 200);
          }
        }, delay);
      }
    };

    // 1. Check fonts
    document.fonts.ready.then(() => {
      fontsDone = true;
      checkReady();
    });

    // 2. Check images (hero / above fold)
    const images = Array.from(document.querySelectorAll('img')).filter(img => {
      return img.loading !== 'lazy';
    });

    if (images.length === 0) {
      imagesDone = true;
      checkReady();
    } else {
      let loadedImages = 0;
      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
          if (loadedImages === images.length) {
            imagesDone = true;
            checkReady();
          }
        } else {
          img.addEventListener('load', () => {
            loadedImages++;
            if (loadedImages === images.length) {
              imagesDone = true;
              checkReady();
            }
          }, { once: true });
          img.addEventListener('error', () => {
            loadedImages++;
            if (loadedImages === images.length) {
              imagesDone = true;
              checkReady();
            }
          }, { once: true });
        }
      });
    }

    checkReady();

    return () => {
      mounted = false;
      clearTimeout(fallbackTimeout);
    };
  }, [webglReady]);

  return (
    <LoadingContext.Provider value={{ isReady, progress, reportWebGLReady: () => setWebglReady(true) }}>
      {children}
    </LoadingContext.Provider>
  );
}
