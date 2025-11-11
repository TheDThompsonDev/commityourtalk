"use client";

import Link from "next/link";
import { CurriculumLevel } from "@/lib/types/curriculum";

interface LevelNavigationProps {
  curriculum: readonly CurriculumLevel[];
  currentLevel: CurriculumLevel;
}

export default function LevelNavigation({ curriculum, currentLevel }: LevelNavigationProps) {
  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Other Levels
          </h2>
          <p className="text-xl text-gray-600">
            Your complete journey from beginner to expert
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {curriculum.map((p) => (
            <Link
              key={p.id}
              href={`/curriculum/${p.id}`}
              className={`text-center p-6 rounded-xl border-2 transition-all ${
                p.id === currentLevel.id
                  ? "border-current shadow-lg"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
              style={p.id === currentLevel.id ? { borderColor: p.color } : {}}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3"
                style={{ backgroundColor: p.color }}
              >
                {p.level}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

