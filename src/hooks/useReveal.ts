import { useEffect } from 'react';

/**
 * Scroll-triggered reveal animations.
 * Add className="reveal" to any element that should animate in on scroll.
 * Add className="reveal d1" through "d5" for staggered delays.
 * Call this hook once in the page root component.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.rv, .rv-scale, .rv-left, .rv-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
