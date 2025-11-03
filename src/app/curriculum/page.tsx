"use client";

import { pathways, codeFeedbackFramework } from "@/lib/data/pathways";
import Link from "next/link";

export default function CurriculumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Complete Curriculum
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              A comprehensive learning journey from first talk to conference
              keynote
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our curriculum is designed to take you from nervous beginner to
              confident speaker through 5 progressive levels. Each level builds
              on the previous, ensuring you develop the skills, confidence, and
              expertise needed to become a recognized voice in tech.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {pathways.map((pathway, index) => (
              <div
                key={pathway.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div
                  className="h-2"
                  style={{ backgroundColor: pathway.color }}
                ></div>

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                          style={{ backgroundColor: pathway.color }}
                        >
                          {pathway.level}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900">
                            {pathway.title}
                          </h2>
                          <p className="text-lg text-slate-600">
                            {pathway.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 mb-4">
                        {pathway.description}
                      </p>
                      <p className="text-base text-slate-600 italic">
                        Focus: {pathway.focus}
                      </p>
                    </div>
                    <Link
                      href={`/pathway/${pathway.id}`}
                      className="px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center"
                      style={{
                        backgroundColor: pathway.color,
                        color: "white",
                      }}
                    >
                      View Details →
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Weekly Topics
                      </h3>
                      <ul className="space-y-2">
                        {pathway.weeklyTopics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <svg
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: pathway.color }}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        Skills You'll Develop
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {pathway.skillsDeveloped.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm font-medium text-white"
                            style={{ backgroundColor: pathway.color }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Goals & Challenges
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {pathway.goals.map((goal, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-slate-50 border border-slate-200"
                        >
                          <div className="flex items-start gap-2">
                            <svg
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: pathway.color }}
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
                            <span className="text-sm font-medium text-slate-800">
                              {goal}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {codeFeedbackFramework.title}
            </h2>
            <p className="text-xl text-slate-300">
              {codeFeedbackFramework.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {codeFeedbackFramework.elements.map((element, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {element.letter}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{element.word}</h3>
                    <p className="text-slate-300 italic">
                      &ldquo;{element.prompt}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Join our free weekly sessions and begin building the speaking skills
            that will transform your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://discord.gg/pWGt6JMV9t"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Join Free Session
            </a>
            <Link
              href="/pathway"
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl border-2 border-slate-200"
            >
              Explore Pathways
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            No credit card required • Join Discord • Start this week
          </p>
        </div>
      </section>
    </div>
  );
}
