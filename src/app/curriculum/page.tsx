"use client";

import { curriculum } from "@/lib/data/curriculum";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function CurriculumPage() {
  return (
    <MainLayout>
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
                confident speaker through 5 progressive levels. Each level
                builds on the previous, ensuring you develop the skills,
                confidence, and expertise needed to become a recognized voice in
                tech.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
            {curriculum.map((level) => (
                <div
                  key={level.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                >
                  <div
                    className="h-2"
                    style={{ backgroundColor: level.color }}
                  ></div>

                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                            style={{ backgroundColor: level.color }}
                          >
                            {level.level}
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-slate-900">
                              {level.title}
                            </h2>
                            <p className="text-lg text-slate-600">
                              {level.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-lg text-slate-700 mb-4">
                          {level.description}
                        </p>
                        <p className="text-base text-slate-600 italic">
                          Core Technique: {level.coreTechnique.name}
                        </p>
                      </div>
                      <Link
                        href={`/pathway/${level.id}`}
                        className="px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap text-center"
                        style={{
                          backgroundColor: level.color,
                          color: "white",
                        }}
                      >
                        View Details →
                      </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          Playbook Scripts
                        </h3>
                        <p className="text-slate-600">
                          {level.playbook.length} conversation scenarios with CYT approach
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">
                          Improv Toolkit
                        </h3>
                        <p className="text-slate-600">
                          {level.improvToolkitPrompts.length} practice prompts for live sessions
                        </p>
                      </div>
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
              Join our free weekly sessions and begin building the speaking
              skills that will transform your career.
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
    </MainLayout>
  );
}
