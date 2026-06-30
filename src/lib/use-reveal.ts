import { useEffect, useRef } from "react";

type Anim = "up" | "left" | "right" | "scale";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const all = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!all.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay;
            if (delay) {
              entry.target.style.transitionDelay = `${delay}ms`;
            }
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    all.forEach((child) => {
      const rect = child.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Already in viewport — reveal immediately with no delay
        child.classList.add("revealed");
      } else {
        observer.observe(child);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
