import { ReactNode } from 'react';
import Container from './Container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  description, 
  backgroundColor = 'bg-gradient-to-br from-blue-600 to-indigo-700',
  children 
}: PageHeaderProps) {
  return (
    <div className={`${backgroundColor} text-white py-24 relative overflow-hidden`}>
      <Container>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl text-blue-100 mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </div>
  );
}

