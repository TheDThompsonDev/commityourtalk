import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
}

export default function Section({ children, className = '', backgroundColor = 'bg-white' }: SectionProps) {
  return (
    <section className={`${backgroundColor} py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

