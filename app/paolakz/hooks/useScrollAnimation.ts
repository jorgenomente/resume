"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useScrollAnimation(threshold = 0.1, delay = 0) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold },
    );

    const node = ref.current;
    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [threshold, delay, isVisible]);

  return { ref: ref as RefObject<HTMLElement>, isVisible };
}
