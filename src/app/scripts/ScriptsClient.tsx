"use client";

import { useState, useRef, useEffect } from "react";
import { CurriculumLevel, PlaybookScript } from "@/lib/types/curriculum";
import ScriptCard from "@/components/curriculum/ScriptCard";

interface ScriptsClientProps {
  curriculum: readonly CurriculumLevel[];
}

export default function ScriptsClient({ curriculum }: ScriptsClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<number | "all">("all");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  
  const levelRefs = useRef<{ [key: number]: HTMLElement | null }>({});

  const allScripts: (PlaybookScript & { level: CurriculumLevel })[] = curriculum.flatMap((level) =>
    level.playbook.map((script) => ({ ...script, level }))
  );

  const filteredScripts = allScripts.filter((script) => {
    const levelMatch = selectedLevel === "all" || script.level.level === selectedLevel;
    const searchTermMatch =
      searchTerm === "" ||
      script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      script.defaultResponse.conversation.join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ||
      script.cytApproach.conversation.join(" ").toLowerCase().includes(searchTerm.toLowerCase());
    return levelMatch && searchTermMatch;
  });

  const scriptsByLevel = curriculum.map(level => ({
    level,
    scripts: filteredScripts.filter(script => script.level.level === level.level)
  })).filter(group => group.scripts.length > 0);

  const scrollToLevel = (levelNumber: number) => {
    const element = levelRefs.current[levelNumber];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: "-150px 0px -60% 0px" }
    );

    Object.values(levelRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [scriptsByLevel]);

  const totalScripts = filteredScripts.length;

  return (
    <>
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <input
              type="text"
              placeholder="Search scripts by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value === "all" ? "all" : parseInt(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Levels ({totalScripts})</option>
              {curriculum.map((level) => {
                const count = allScripts.filter(s => s.level.level === level.level).length;
                return (
                  <option key={level.level} value={level.level}>
                    Level {level.level}: {level.title} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Quick Navigation</h3>
              <nav className="space-y-1">
                {scriptsByLevel.map(({ level, scripts }) => (
                  <button
                    key={level.level}
                    onClick={() => scrollToLevel(level.level)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSectionId === `level-${level.level}`
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">Level {level.level}</span>
                      <span 
                        className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: activeSectionId === `level-${level.level}` ? level.color : '#f3f4f6',
                          color: activeSectionId === `level-${level.level}` ? 'white' : '#6b7280'
                        }}
                      >
                        {scripts.length}
                      </span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-12">
            {scriptsByLevel.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="mt-4 text-gray-600">No scripts found matching your criteria.</p>
                <button
                  onClick={() => { setSearchTerm(""); setSelectedLevel("all"); }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              scriptsByLevel.map(({ level, scripts }) => (
                <section
                  key={level.level}
                  id={`level-${level.level}`}
                  ref={(el) => { levelRefs.current[level.level] = el; }}
                  className="scroll-mt-32"
                >
                  <div 
                    className="rounded-lg p-6 mb-6 text-white"
                    style={{ backgroundColor: level.color }}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                        {level.level}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{level.title}</h2>
                        <p className="text-white/90">{level.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mt-3">
                      <span className="font-semibold">Core Technique:</span> {level.coreTechnique.name}
                    </p>
                    <p className="text-sm text-white/70 mt-1">{scripts.length} scripts in this level</p>
                  </div>

                  <div className="space-y-6">
                    {scripts.map((script, index) => (
                      <ScriptCard key={index} script={script} accentColor={level.color} />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

