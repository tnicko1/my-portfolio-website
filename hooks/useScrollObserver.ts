// Fix: Import RefObject to resolve namespace error.
import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useScrollObserver = <T extends HTMLElement> (
  options: UseScrollObserverOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const targetRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        } else if (!triggerOnce) {
            setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, triggerOnce]);

  return [targetRef, isIntersecting];
};

export default useScrollObserver;