import Link from 'next/link';
import { Pathway } from '@/lib/types/curriculum';

interface PathwayCardProps {
  pathway: Pathway;
}

export default function PathwayCard({ pathway }: PathwayCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div className="h-28 flex items-center justify-center text-white" style={{ backgroundColor: pathway.color }}>
        <div className="text-center">
          <div className="text-3xl font-bold">{pathway.level}</div>
          <div className="text-sm font-medium">Level {pathway.level}</div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{pathway.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{pathway.description}</p>

        <div className="mb-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Focus Areas</div>
          <div className="text-sm text-gray-700">{pathway.focus}</div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            {pathway.skillsDeveloped.length} skills
          </div>
          <Link
            href={`/pathway/${pathway.id}`}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center"
            style={{
              backgroundColor: pathway.color,
              color: 'white'
            }}
          >
            View Details
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}