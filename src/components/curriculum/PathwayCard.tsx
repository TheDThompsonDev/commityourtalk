import Link from 'next/link';
import { Pathway } from '@/lib/types/curriculum';

interface PathwayCardProps {
  pathway: Pathway;
}

export default function PathwayCard({ pathway }: PathwayCardProps) {
  return (
    <div className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-custom hover:scale-[1.02]">
      <div className="h-48 flex items-center justify-center text-white relative overflow-hidden" style={{ backgroundColor: pathway.color }}>
        <div className="text-center px-4">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold">
            {pathway.level}
          </div>
          <p className="font-bold text-lg uppercase tracking-wide">Level {pathway.level}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1.5 text-xs font-bold rounded-full bg-white/10" style={{ backgroundColor: `${pathway.color}20`, color: pathway.color }}>
            Level {pathway.level}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-muted flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {pathway.challenges.length} Challenges
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-strong">{pathway.title}</h3>
        <p className="text-base font-semibold text-gray-600 dark:text-muted mb-3">{pathway.subtitle}</p>
        <p className="text-gray-600 dark:text-muted mb-4 line-clamp-3 text-sm leading-relaxed">{pathway.description}</p>
        
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-500 dark:text-muted uppercase tracking-wide mb-2">Focus Areas</p>
          <p className="text-sm text-gray-700 dark:text-muted italic">{pathway.focus}</p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-custom">
          <div className="text-sm text-gray-600 dark:text-muted">
            {pathway.skillsDeveloped.length} skills to develop
          </div>
          <Link
            href={`/pathway/${pathway.id}`}
            className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center"
            style={{ 
              backgroundColor: pathway.color,
              color: 'white'
            }}
          >
            View Path
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}