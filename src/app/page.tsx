"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";

interface AnimatedStats {
  confidence: number;
  talks: number;
  members: number;
}

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({
    confidence: 0,
    talks: 0,
    members: 0,
  });

  useEffect(() => {
    const animateValue = (
      start: number,
      end: number,
      duration: number,
      setValue: (value: number) => void
    ) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(start + (end - start) * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    const timer = setTimeout(() => {
      animateValue(0, 85, 2000, (value) =>
        setAnimatedStats((prev) => ({ ...prev, confidence: value }))
      );
      animateValue(0, 1200, 2500, (value) =>
        setAnimatedStats((prev) => ({ ...prev, talks: value }))
      );
      animateValue(0, 500, 2000, (value) =>
        setAnimatedStats((prev) => ({ ...prev, members: value }))
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-pink-50/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/10 to-transparent rounded-full"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-green-400/15 rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-20 w-2 h-2 bg-yellow-400/20 rounded-full animate-bounce delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="transition-all duration-1000 opacity-100 translate-y-0 text-center lg:text-left">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-blue-200">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="hidden sm:inline">
                  Join {animatedStats.members}+ developers building confidence
                </span>
                <span className="sm:hidden">
                  {animatedStats.members}+ developers
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-0">
                Practice public speaking
                <br />
                <span className="text-blue-300">in live sessions</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0">
                Join weekly Discord sessions designed for developers. Go from
                2-minute talks to conference keynotes through structured
                practice and peer feedback.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10 justify-center lg:justify-start">
                <Link
                  href="/signin"
                  className="bg-white text-slate-900 hover:bg-blue-50 font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all hover:shadow-lg inline-flex items-center justify-center group text-sm sm:text-base"
                >
                  <span>Join Free Session</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/pathway"
                  className="bg-transparent hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-colors inline-flex items-center justify-center border border-white/30 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">See How It Works</span>
                  <span className="sm:hidden">How It Works</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
                No credit card • Join Discord • Start this week
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm mt-6 sm:mt-8">
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-200">
                    Free forever
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-200">
                    1 session/week
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-400/30">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 9a3.001 3.001 0 01-2 2.83V11a1 1 0 102 0v-1a1 1 0 111 1 1 1 0 001-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-200 hidden sm:inline">
                    No experience needed
                  </span>
                  <span className="font-semibold text-slate-200 sm:hidden">
                    No experience
                  </span>
                </div>
              </div>
            </div>

            <div className="relative transition-all duration-1000 delay-300 opacity-100 translate-y-0 mt-8 lg:mt-0">
              <div className="relative bg-white/5 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/10">
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-2xl shadow-pink-500/30 animate-pulse">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Live Now
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10 mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                      AM
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-base sm:text-lg truncate">
                      Alex Martinez
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                      <span className="hidden sm:inline">Presenting:</span>
                      <span className="font-semibold text-blue-300 truncate">
                        &quot;Why TypeScript Matters&quot;
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Recording • 8 watching
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-white/10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Live Audience
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-slate-300">12 active</span>
                    </div>
                  </div>
                  <div className="flex -space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="relative">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 shadow-sm transition-all duration-300 ${
                            i < 3
                              ? "bg-blue-600"
                              : i < 6
                                ? "bg-pink-600"
                                : "bg-green-600"
                          }`}
                        ></div>
                        {i < 2 && (
                          <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border border-slate-800"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm shadow-lg transition-colors group">
                      <span className="flex items-center justify-center gap-1 sm:gap-2">
                        👏{" "}
                        <span className="hidden sm:inline group-hover:animate-bounce">
                          Great Point!
                        </span>
                        <span className="sm:hidden">Like</span>
                      </span>
                    </button>
                    <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm border border-white/20 transition-colors group">
                      <span className="flex items-center justify-center gap-1 sm:gap-2">
                        ❓{" "}
                        <span className="hidden sm:inline group-hover:animate-pulse">
                          Ask Question
                        </span>
                        <span className="sm:hidden">Ask</span>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white border border-white/20">
                    60 min
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white border border-white/20">
                    Small groups
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white border border-white/20">
                    Discord
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-white/10 group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-extrabold text-white">
                        {animatedStats.confidence}%
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        Confidence
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedStats.confidence}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-xl border border-white/10 group">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-extrabold text-white">
                        {animatedStats.talks}+
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        Talks
                      </div>
                    </div>
                  </div>
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full border border-white animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -top-8 -left-8 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-2xl shadow-yellow-500/30 animate-bounce delay-1000">
                <div className="flex items-center gap-2">
                  <span>🏆</span>
                  <span>Level 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              What you&apos;ll gain
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Build skills that transform your career
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Think faster</h3>
              <p className="text-sm text-gray-600">
                Organize thoughts quickly under pressure
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
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
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sound clear</h3>
              <p className="text-sm text-gray-600">
                Structure ideas that resonate with audiences
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Feel confident</h3>
              <p className="text-sm text-gray-600">
                Present to any audience without fear
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Advance faster</h3>
              <p className="text-sm text-gray-600">
                Lead meetings and influence decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 sm:py-24 lg:py-32 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3685ff 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #FF5F87 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-bold text-blue-600 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4 animate-fade-in delay-200">
              See the transformation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
              Track real journeys from first nervous talk to career-changing
              presentations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in delay-400">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                  SJ
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">
                    Junior Dev → Tech Lead
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-gray-700">
                    6-month journey
                  </span>
                  <span className="text-blue-600 font-bold">Level 3 ✓</span>
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-200"></div>
                  <div
                    className="absolute top-2 left-2 h-0.5 bg-blue-600"
                    style={{ width: "60%" }}
                  ></div>
                  <div className="relative flex justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Start</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Now</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">L5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase mb-1">
                    Before
                  </div>
                  <p className="text-sm text-gray-600">
                    Terrified of standup meetings
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-blue-600 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase mb-1">
                    After
                  </div>
                  <p className="text-sm text-gray-600">
                    Leading company all-hands presentations
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs font-bold text-green-700 uppercase mb-2">
                  Career Impact
                </div>
                <p className="text-sm text-gray-700 font-semibold">
                  Promoted to Tech Lead
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in delay-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                  MC
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Senior Engineer</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-gray-700">
                    10-month journey
                  </span>
                  <span className="text-pink-600 font-bold">Level 4 ✓</span>
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-200"></div>
                  <div
                    className="absolute top-2 left-2 h-0.5 bg-pink-600"
                    style={{ width: "80%" }}
                  ></div>
                  <div className="relative flex justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-pink-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Start</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-pink-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Now</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">L5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase mb-1">
                    Before
                  </div>
                  <p className="text-sm text-gray-600">
                    Avoided speaking as an introvert
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-pink-600 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase mb-1">
                    After
                  </div>
                  <p className="text-sm text-gray-600">
                    Delivered 3 conference talks
                  </p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
                <div className="text-xs font-bold text-pink-700 uppercase mb-2">
                  Achievement
                </div>
                <p className="text-sm text-gray-700 font-semibold">
                  12 talks • 3 conferences
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-fade-in delay-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow">
                  EP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emma Patel</div>
                  <div className="text-sm text-gray-600">
                    Full Stack Developer
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="font-semibold text-gray-700">
                    4-month journey
                  </span>
                  <span className="text-green-600 font-bold">Level 2 ✓</span>
                </div>
                <div className="relative">
                  <div className="absolute top-2 left-2 right-2 h-0.5 bg-gray-200"></div>
                  <div
                    className="absolute top-2 left-2 h-0.5 bg-green-600"
                    style={{ width: "40%" }}
                  ></div>
                  <div className="relative flex justify-between">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Start</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">Now</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
                      <span className="text-xs text-gray-500 mt-1">L5</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-bold text-red-600 uppercase mb-1">
                    Before
                  </div>
                  <p className="text-sm text-gray-600">
                    Struggled with team communication
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-green-600 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <div>
                  <div className="text-xs font-bold text-green-600 uppercase mb-1">
                    After
                  </div>
                  <p className="text-sm text-gray-600">
                    Manager praised communication in review
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-xs font-bold text-green-700 uppercase mb-2">
                  Career Impact
                </div>
                <p className="text-sm text-gray-700 font-semibold">
                  Landed promotion
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16 animate-fade-in delay-1000">
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              These are just three of hundreds of success stories. Your journey
              starts with one session.
            </p>
          </div>

          <div className="text-center animate-fade-in delay-1100">
            <div className="inline-flex flex-col sm:flex-row items-center gap-8 sm:gap-12 bg-white/90 backdrop-blur-sm rounded-3xl px-8 sm:px-12 py-6 sm:py-8 shadow-2xl border border-gray-200/50">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {animatedStats.members}+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
                  Active Members
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mt-2"></div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {animatedStats.talks}+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
                  Talks Delivered
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mx-auto mt-2"></div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {animatedStats.confidence}%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
                  Confidence Boost
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16 lg:py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              What you&apos;ll achieve
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Four key outcomes that transform how you communicate and lead
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                num: "1",
                title: "Clarity under pressure",
                desc: "Think fast, speak clearly",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                color: "blue",
              },
              {
                num: "2",
                title: "Structured delivery",
                desc: "Sound organized, not rambling",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                ),
                color: "green",
              },
              {
                num: "3",
                title: "Audience confidence",
                desc: "Feel calm in front of peers",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                color: "purple",
              },
              {
                num: "4",
                title: "Career visibility",
                desc: "Lead meetings & talks",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                color: "pink",
              },
            ].map((o, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      o.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : o.color === "green"
                          ? "bg-green-100 text-green-600"
                          : o.color === "purple"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-pink-100 text-pink-600"
                    }`}
                  >
                    {o.icon}
                  </div>
                  <div
                    className={`text-xs font-bold px-2 py-1 rounded-full ${
                      o.color === "blue"
                        ? "bg-blue-50 text-blue-700"
                        : o.color === "green"
                          ? "bg-green-50 text-green-700"
                          : o.color === "purple"
                            ? "bg-purple-50 text-purple-700"
                            : "bg-pink-50 text-pink-700"
                    }`}
                  >
                    {o.num}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {o.title}
                </h3>
                <p className="text-sm text-gray-600">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center px-4 sm:px-5 py-2 bg-white border border-blue-100 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-semibold text-blue-600 shadow-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
              Your Learning Pathway
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 px-4">
              Your roadmap to
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mt-2">
                conference speaking
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Progress through 5 structured levels—from your first 2-minute talk
              to 45-minute keynotes
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
            <div className="relative py-8 sm:py-12">
              <div className="hidden md:block absolute top-20 left-20 right-20 h-1 bg-gray-300 rounded-full"></div>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-2">
                {[
                  {
                    level: 1,
                    title: "Icebreaker",
                    color: "#3b82f6",
                    bgColor: "bg-blue-600",
                    description: "2-min talks",
                  },
                  {
                    level: 2,
                    title: "Storyteller",
                    color: "#a855f7",
                    bgColor: "bg-purple-600",
                    description: "5-min talks",
                  },
                  {
                    level: 3,
                    title: "Presenter",
                    color: "#ec4899",
                    bgColor: "bg-pink-600",
                    description: "10-min talks",
                  },
                  {
                    level: 4,
                    title: "Speaker",
                    color: "#10b981",
                    bgColor: "bg-green-600",
                    description: "20-min talks",
                  },
                  {
                    level: 5,
                    title: "Keynote",
                    color: "#f59e0b",
                    bgColor: "bg-yellow-500",
                    description: "45-min talks",
                  },
                ].map((item) => (
                  <div key={item.level} className="flex flex-col items-center">
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.bgColor} shadow-xl border-4 border-white mb-3 sm:mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-10`}
                    >
                      <span className="text-white font-bold text-xl sm:text-2xl">
                        {item.level}
                      </span>
                    </div>
                    <div className="text-center px-1 sm:px-2">
                      <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/pathway"
              className="group inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>View Complete Pathway</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Explore all 5 levels with detailed session guides
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
        id="how-it-works"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How it works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              A clear progression through five levels of speaking mastery
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  level: 1,
                  title: "Join the community",
                  note: "Pick a session on Discord",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  level: 2,
                  title: "Practice live",
                  note: "2–5 minute talks in small groups",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  ),
                },
                {
                  level: 3,
                  title: "Level up",
                  note: "Feedback + progress through 5 levels",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  ),
                },
              ].map((s, idx) => (
                <div key={s.level} className="relative">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 hover:border-blue-400 transition-colors duration-300 h-full shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                        {s.level}
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                        {s.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-600">{s.note}</p>
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg
                        className="w-8 h-8 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-3xl mx-auto border border-blue-100 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Ready to start practicing?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
                Join a free session this week. No experience or preparation
                needed.
              </p>
              <Link
                href="/signin"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-xl transition-all hover:shadow-xl group text-base sm:text-lg"
              >
                <span>Join Your First Session</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free forever
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  60 min/week
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  Discord
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/20 to-transparent rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 bg-green-50 border border-green-100 rounded-full mb-4 sm:mb-6 text-xs sm:text-sm font-bold text-green-600 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Built for introverts
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 animate-fade-in delay-200 px-4">
              A{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                safe space
              </span>
              <span className="block">to grow</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
              We know speaking can be scary. That&apos;s why we created a
              supportive environment designed specifically for introverted
              developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-400">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Small, intimate groups
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed text-center">
                Practice with just 5-10 supportive developers. No massive
                audiences. No judgment.
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-600">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                Progress at your pace
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                No deadlines. No pressure. Move through levels when you&apos;re
                comfortable and ready.
              </p>
              <div className="flex justify-center mt-6">
                <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pink-600 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-800">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                Safe environment
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                Supportive community where mistakes are learning opportunities,
                not failures.
              </p>
              <div className="flex justify-center mt-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-green-700 font-semibold text-sm">
                    100% Safe & Supportive
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 animate-fade-in delay-1000">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">
                Tech-focused topics
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                Talk about what you know: APIs, architectures, frameworks, and
                tools you love.
              </p>
              <div className="flex justify-center mt-6 space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  ...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 lg:py-40 bg-slate-900 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 sm:px-8 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 sm:mb-8 text-white text-sm sm:text-base font-semibold shadow-2xl">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              Ready to Transform Your Career?
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 animate-fade-in delay-200 px-4">
            Start speaking with confidence
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              this week
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
            Join {animatedStats.members}+ developers practicing live every week.
            Next session starts in 3 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-fade-in delay-500">
            <a
              href="https://discord.gg/your-invite"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl transition-all duration-300 inline-flex items-center justify-center shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-purple-500/30 hover:-translate-y-2 hover:scale-105 text-base sm:text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg
                className="w-8 h-8 mr-4 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="relative z-10">
                Join Discord - It&apos;s Free
              </span>
              <svg
                className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 -skew-x-12 group-hover:animate-shine"></div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto animate-fade-in delay-700">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">
                Free to Join
              </h4>
              <p className="text-gray-300 text-sm">
                No hidden fees, no subscriptions. Just pure community support.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">
                No Commitment
              </h4>
              <p className="text-gray-300 text-sm">
                Leave anytime. No contracts, no obligations, no pressure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">
                Start This Week
              </h4>
              <p className="text-gray-300 text-sm">
                Join a session this week. Your speaking journey begins
                immediately.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 animate-fade-in delay-900">
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
              Trusted by developers from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="text-white/60 font-semibold text-sm sm:text-base">
                Google
              </div>
              <div className="text-white/60 font-semibold text-sm sm:text-base">
                Meta
              </div>
              <div className="text-white/60 font-semibold text-sm sm:text-base">
                Netflix
              </div>
              <div className="text-white/60 font-semibold text-sm sm:text-base">
                Stripe
              </div>
              <div className="text-white/60 font-semibold text-sm sm:text-base">
                Shopify
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
