import { CurriculumLevel } from '@/lib/types/curriculum';

interface LevelHeaderProps {
  level: CurriculumLevel;
}

export default function LevelHeader({ level }: LevelHeaderProps) {
  return (
    <div
      className="text-white py-24 relative overflow-hidden"
      style={{ backgroundColor: level.color }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 text-3xl font-bold shadow-lg">
                {level.level}
              </div>
              <div>
                <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                  Level {level.level}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {level.title}
                </h1>
              </div>
            </div>

            <p className="text-3xl font-bold text-white/95 mb-6">
              {level.subtitle}
            </p>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {level.description}
            </p>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-3 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Core Technique: {level.coreTechnique.name}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {level.coreTechnique.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

