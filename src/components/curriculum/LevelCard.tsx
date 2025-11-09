import Link from "next/link";
import { CurriculumLevel } from "@/lib/types/curriculum";

interface LevelCardProps {
  level: CurriculumLevel;
}

export default function LevelCard({ level }: LevelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-200 h-full flex flex-col">
      <div
        className="h-28 flex items-center justify-center text-white"
        style={{ backgroundColor: level.color }}
      >
        <div className="text-center">
          <div className="text-3xl font-bold">{level.level}</div>
          <div className="text-sm font-medium">Level {level.level}</div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          {level.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm">{level.description}</p>

        <div className="mb-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
            Core Technique
          </div>
          <div className="text-sm text-gray-700">{level.coreTechnique.name}</div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            {level.playbook.length} scripts
          </div>
          <Link
            href={`/pathway/${level.id}`}
            className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center"
            style={{
              backgroundColor: level.color,
              color: "white",
            }}
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
    </div>
  );
}
