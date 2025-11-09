"use client";

import { useState, useRef, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { curriculum } from "@/lib/data/curriculum";
import { CurriculumLevel, PlaybookScript } from "@/lib/types/curriculum";

const formatText = (text: string) => {
  const formatted = text.replace(/^\d+\.\s*/, '');
  
  const processFormatting = (str: string): React.ReactNode[] => {
    const result: React.ReactNode[] = [];
    let currentIndex = 0;
    
    const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
    let match;
    
    while ((match = regex.exec(str)) !== null) {
      if (match.index > currentIndex) {
        result.push(str.substring(currentIndex, match.index));
      }
      
      if (match[1]) {
        result.push(
          <strong key={match.index} className="font-semibold text-gray-900">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        result.push(
          <em key={match.index} className="italic">
            {match[4]}
          </em>
        );
      } else if (match[5]) {
        result.push(
          <code key={match.index} className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-xs font-mono">
            {match[6]}
          </code>
        );
      }
      
      currentIndex = match.index + match[0].length;
    }
    
    if (currentIndex < str.length) {
      result.push(str.substring(currentIndex));
    }
    
    return result;
  };
  
  return <>{processFormatting(formatted)}</>;
};

export default function ScriptLibraryPage() {
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
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-2">CYT Script Library</h1>
            <p className="text-lg text-slate-300">
              {totalScripts} conversation scripts from the complete curriculum
            </p>
          </div>
        </div>
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
                        <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                          <div className="border-l-4 pl-6" style={{ borderColor: level.color }}>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{script.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                  <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                  </svg>
                                  The &quot;Default&quot; Conversation
                                </h4>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                  <div className="text-gray-700 space-y-2 text-sm">
                                    {script.defaultResponse.conversation.map((line, i) => (
                                      <p key={i} className="italic leading-relaxed">{formatText(line)}</p>
                                    ))}
                                  </div>
                                  <div className="mt-4 pt-3 border-t border-red-200">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Why this fails:</p>
                                    <p className="text-sm text-gray-600">{script.defaultResponse.analysis}</p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                  <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  The &quot;CYT Approach&quot;
                                </h4>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                                  <div className="text-gray-800 space-y-2 text-sm">
                                    {script.cytApproach.conversation.map((line, i) => (
                                      <p key={i} className="leading-relaxed">{formatText(line)}</p>
                                    ))}
                                  </div>
                                  <div className="mt-4 pt-3 border-t border-green-200">
                                    <p className="text-xs font-semibold text-gray-700 mb-1">Why this works:</p>
                                    <p className="text-sm text-gray-600">{script.cytApproach.analysis}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
