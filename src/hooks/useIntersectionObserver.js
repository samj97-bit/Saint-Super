import { useEffect } from 'react';

/**
 * Reusable React Hook to handle IntersectionObserver scroll reveals.
 * Adds 'is-visible' class to elements with data-reveal, data-reveal-stagger, and .image-reveal when they intersect.
 */
export function useIntersectionObserver() {
  useEffect(() => {
    const observers = [];

    // 1. Single reveals
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0;
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, parseInt(delay));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
    observers.push(revealObserver);

    // 2. Stagger reveals
    const staggerElements = document.querySelectorAll('[data-reveal-stagger]');
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );
    staggerElements.forEach((el) => staggerObserver.observe(el));
    observers.push(staggerObserver);

    // 3. Image clip reveals
    const imageElements = document.querySelectorAll('.image-reveal');
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            imageObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -80px 0px',
      }
    );
    imageElements.forEach((el) => imageObserver.observe(el));
    observers.push(imageObserver);

    // Clean up
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);
}
