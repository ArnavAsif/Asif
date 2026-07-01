import { useRef, useCallback, useEffect, useState } from "react";

const SCROLL_DURATION = 5000;

function easeInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Drives a smooth translateY scroll animation on an image element
 * using requestAnimationFrame for GPU-accelerated, jank-free performance.
 *
 * Returns refs, hover handlers, and imageAspect for the card to use.
 * imageAspect is set once the image loads (naturalHeight / naturalWidth).
 */
export function useHoverScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const startTimeRef = useRef(0);
  const loadHandlerRef = useRef<(() => void) | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageAspect, setImageAspect] = useState<number | null>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const getMaxOffset = useCallback(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return 0;
    return Math.max(0, image.offsetHeight - container.offsetHeight);
  }, []);

  const animate = useCallback(
    (from: number, to: number) => {
      if (prefersReducedMotion.current) {
        offsetRef.current = to;
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${-to}px)`;
        }
        return;
      }

      const maxOffset = getMaxOffset();
      const distance = Math.abs(to - from);
      const duration = Math.max(
        3000,
        Math.min(7000, (distance / Math.max(maxOffset, 1)) * SCROLL_DURATION),
      );

      cancelAnimationFrame(rafRef.current);
      startTimeRef.current = performance.now();

      const startOff = from;
      const endOff = to;

      const step = (now: number) => {
        const elapsed = now - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOut(progress);
        const current = startOff + (endOff - startOff) * eased;
        offsetRef.current = current;

        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${-current}px)`;
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          offsetRef.current = endOff;
        }
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [getMaxOffset],
  );

  const removeLoadListener = useCallback(() => {
    if (loadHandlerRef.current && imageRef.current) {
      imageRef.current.removeEventListener("load", loadHandlerRef.current);
      loadHandlerRef.current = null;
    }
  }, []);

  const handleImageLoad = useCallback(() => {
    const img = imageRef.current;
    if (!img) return;
    const aspect = img.naturalHeight / img.naturalWidth;
    setImageAspect(aspect);
    loadHandlerRef.current = null;
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    removeLoadListener();

    const maxOffset = getMaxOffset();
    if (maxOffset > 0) {
      animate(offsetRef.current, maxOffset);
    } else if (imageRef.current && !imageRef.current.complete) {
      const onLoad = () => {
        handleImageLoad();
        const newMax = getMaxOffset();
        if (newMax > 0) animate(0, newMax);
      };
      loadHandlerRef.current = onLoad;
      imageRef.current.addEventListener("load", onLoad);
    }
  }, [animate, getMaxOffset, removeLoadListener, handleImageLoad]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    removeLoadListener();
    animate(offsetRef.current, 0);
  }, [animate, removeLoadListener]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      removeLoadListener();
    };
  }, [removeLoadListener]);

  return {
    containerRef,
    imageRef,
    isHovered,
    imageAspect,
    handleImageLoad,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
