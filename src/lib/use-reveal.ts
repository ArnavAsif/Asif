import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const all = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
    if (!all.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    all.forEach((child) => {
      const rect = child.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        child.classList.add("visible");
      } else {
        observer.observe(child);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
