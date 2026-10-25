'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 600,
  threshold = 0.05,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    // Immediately reveal if already visible or above viewport
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 80) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px 80px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  // Compute transform offsets
  let initialTransform = 'translate3d(0, 0, 0)';
  if (direction === 'up') initialTransform = `translate3d(0, ${distance}px, 0)`;
  if (direction === 'down') initialTransform = `translate3d(0, -${distance}px, 0)`;
  if (direction === 'left') initialTransform = `translate3d(${distance}px, 0, 0)`;
  if (direction === 'right') initialTransform = `translate3d(-${distance}px, 0, 0)`;
  if (direction === 'none') initialTransform = 'none';

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : initialTransform,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
