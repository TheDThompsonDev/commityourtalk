import Link from "next/link";
import { CurriculumLevel } from "@/lib/types/curriculum";

interface LevelCardProps {
  level: CurriculumLevel;
}

export default function LevelCard({ level }: LevelCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
      style={{ 
        borderColor: `${level.color}20`,
      }}
    >
      {/* Colored Header */}
      <div
        className="text-white p-6"
        style={{ backgroundColor: level.color }}
      >
        <div className="flex items-center gap-4 mb-2">
          <div 
            className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl font-bold"
            style={{ color: level.color }}
          >
            {level.level}
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide opacity-90">
              Level {level.level}
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-1">
          {level.title}
        </h3>
        <p className="text-sm opacity-90">
          {level.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {level.description}
        </p>

        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Core Technique
          </div>
          <div className="text-sm font-semibold text-gray-900">
            {level.coreTechnique.name}
          </div>
        </div>

        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            What You'll Practice
          </div>
          <ul className="space-y-1.5 text-sm text-gray-600">
            {level.playbook.slice(0, 3).map((script, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2" style={{ color: level.color }}>→</span>
                <span className="line-clamp-1">{script.title}</span>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 mt-2">
            {level.playbook.length} total scripts
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/curriculum/${level.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-3 text-white font-semibold rounded-lg transition-colors mt-auto hover:opacity-90"
          style={{ backgroundColor: level.color }}
        >
          View Details
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
