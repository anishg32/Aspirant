'use client';

import { useEffect } from 'react';

/**
 * Global ScrollObserver
 * Automatically tracks all elements with `.scroll-reveal` or `[data-reveal]`
 * and triggers their visibility with smooth transitions as the user scrolls.
 */
export default function ScrollObserver() {
  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = () => {
      const targets = document.querySelectorAll<HTMLElement>('.scroll-reveal, [data-reveal]');
      if (targets.length === 0) return;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        targets.forEach((el) => {
          el.classList.add('is-revealed');
        });
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px 80px 0px', // Pre-trigger so letters are immediately visible as user scrolls
          threshold: 0.05,
        }
      );

      targets.forEach((el) => {
        // If already in viewport on initial load
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight + 80) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Run on initial render and slightly after for dynamic hydration
    const obs = revealElements();
    const timer = setTimeout(revealElements, 400);

    return () => {
      clearTimeout(timer);
      obs?.disconnect();
    };
  }, []);

  return null;
}
