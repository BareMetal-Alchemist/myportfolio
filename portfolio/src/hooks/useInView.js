import { useEffect, useState } from "react";

/**
 * Returns true once the referenced element has entered the viewport.
 * Stays true afterwards. Falls back to "true" when IntersectionObserver
 * isn't available so nothing is ever hidden.
 */
export default function useInView(ref, { threshold = 0.25, rootMargin = "0px 0px -10% 0px" } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return inView;
}
