
import React from 'react';
import useScrollObserver from '../hooks/useScrollObserver';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
  const [ref, isVisible] = useScrollObserver<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 transition-all duration-1000 ease-in-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
