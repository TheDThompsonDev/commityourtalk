import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import LevelCard from "@/components/curriculum/LevelCard";
import SessionAgenda from "@/components/curriculum/SessionAgenda";
import { curriculum } from "@/lib/data/curriculum";

export const metadata = {
  title: "Curriculum - Commit Your Talk",
  description: "A structured journey to transform software engineers into exceptional communicators and leaders through 10 progressive levels.",
};

export default function CurriculumPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Simple Hero */}
        <section className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                The Complete Curriculum
              </h1>
              <p className="text-xl text-slate-300">
                A structured journey from nervous beginner to confident communicator. 
                Master 10 progressive levels, 3 advanced modules, and the 5 core techniques 
                that transform engineers into exceptional leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="border-b border-gray-200 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#overview" className="text-blue-600 hover:text-blue-800 font-semibold">Overview</a>
              <a href="#levels" className="text-blue-600 hover:text-blue-800 font-semibold">10 Core Levels</a>
              <a href="#advanced" className="text-blue-600 hover:text-blue-800 font-semibold">Advanced Modules</a>
              <a href="#sessions" className="text-blue-600 hover:text-blue-800 font-semibold">Weekly Sessions</a>
              <a href="#for-introverts" className="text-blue-600 hover:text-blue-800 font-semibold">For Introverts</a>
              <a href="#learning" className="text-blue-600 hover:text-blue-800 font-semibold">Learning System</a>
            </div>
          </div>
        </section>

        {/* Overview - How It Works */}
        <section id="overview" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">
                A clear progression through ten levels of communication mastery, 
                designed specifically for engineers who prefer structure and practice over theory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Foundation</h3>
                <p className="text-sm text-gray-600 mb-2">Levels 1-2</p>
                <p className="text-sm text-gray-700">
                  Learn to ask for help, admit what you don't know, and explain technical concepts clearly.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600 mb-2">Levels 3-4</p>
                <p className="text-sm text-gray-700">
                  Master peer communication, code reviews, and mentoring junior developers effectively.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership</h3>
                <p className="text-sm text-gray-600 mb-2">Levels 5-7</p>
                <p className="text-sm text-gray-700">
                  Lead teams, influence technical decisions, and communicate across the organization.
                </p>
              </div>

              <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 mb-2">Levels 8-10</p>
                <p className="text-sm text-gray-700">
                  Shape engineering culture, deliver conference talks, and inspire industry change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who This Is For</h2>
              <p className="text-lg text-gray-600">
                Different starting points, one clear pathway
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-blue-600 font-bold text-sm mb-3">PATH 1</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">New to Speaking</h3>
                <p className="text-gray-600 text-sm">
                  You avoid speaking up in meetings. Start with 2-minute talks and simple prompts to build confidence gradually.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-green-600 font-bold text-sm mb-3">PATH 2</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Gaining Consistency</h3>
                <p className="text-gray-600 text-sm">
                  You can speak but tend to ramble. Build structure, refine delivery, and communicate with impact.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-purple-600 font-bold text-sm mb-3">PATH 3</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Leading the Room</h3>
                <p className="text-gray-600 text-sm">
                  You lead meetings but want more presence. Master persuasive delivery and inspire teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 10 Levels */}
        <section id="levels" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The 10 Core Levels
              </h2>
              <p className="text-xl text-gray-600">
                Click any level to explore detailed scripts, real-world challenges, and practice exercises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {curriculum.map((level) => (
                <div key={level.id} className="h-full">
                  <LevelCard level={level} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Modules */}
        <section id="advanced" className="py-20 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Scenarios
              </h2>
              <p className="text-xl text-gray-600">
                Once you've mastered the core levels, tackle these specialized, high-leverage situations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Module A */}
              <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="bg-blue-600 text-white p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-white text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold">
                      A
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-100 uppercase tracking-wide">Module A</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    Remote-First Leader
                  </h3>
                  <p className="text-sm text-blue-100">
                    Async Communication
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Master communication across time zones with front-loaded context.
                  </p>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What You'll Learn</div>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        <span>Async code reviews</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        <span>Written stakeholder updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">→</span>
                        <span>Time-zone collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/curriculum/advanced/module-a-remote-first"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Module B */}
              <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-400 hover:shadow-lg transition-all">
                <div className="bg-green-600 text-white p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-white text-green-600 rounded-lg flex items-center justify-center text-2xl font-bold">
                      B
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-100 uppercase tracking-wide">Module B</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    AI-Augmented Engineer
                  </h3>
                  <p className="text-sm text-green-100">
                    Value Reframing
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Reframe human value in an AI world. Humans with AI vs. problems.
                  </p>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What You'll Learn</div>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>AI job anxiety discussions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>Code review value defense</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">→</span>
                        <span>AI pair programming tools</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/curriculum/advanced/module-b-ai-augmented"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Module C */}
              <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-400 hover:shadow-lg transition-all">
                <div className="bg-purple-600 text-white p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-white text-purple-600 rounded-lg flex items-center justify-center text-2xl font-bold">
                      C
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-purple-100 uppercase tracking-wide">Module C</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">
                    Impact Quantifier
                  </h3>
                  <p className="text-sm text-purple-100">
                    Metrics & Measurement
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-sm mb-4">
                    Measure soft skills impact in hard numbers. Build business cases.
                  </p>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">What You'll Learn</div>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">→</span>
                        <span>Communication ROI metrics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">→</span>
                        <span>Stakeholder satisfaction tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">→</span>
                        <span>Impact measurement systems</span>
                      </li>
                    </ul>
                  </div>
                  <Link
                    href="/curriculum/advanced/module-c-impact-quantifier"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Sessions */}
        <section id="sessions" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Weekly Session Structure
              </h2>
              <p className="text-xl text-gray-600">
                A focused 60-minute format that balances practice, feedback, and gradual difficulty so you improve every week
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                      At a Glance
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-700 font-medium">
                        60 minutes
                      </span>
                      <span className="px-3 py-1.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-700 font-medium">
                        Small groups (5-10)
                      </span>
                      <span className="px-3 py-1.5 rounded-lg text-sm bg-white border border-gray-200 text-gray-700 font-medium">
                        Discord voice
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                      What You&apos;ll Build
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        <span>Clear structure under time constraints</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        <span>Confident delivery and vocal control</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-600">→</span>
                        <span>Actionable feedback habits (give and receive)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                      Legend
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                        Breakouts
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                        Spotlight
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                        Full group
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <SessionAgenda
                    accentColor="#3b82f6"
                    variant="light"
                    showHeader={false}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Timing may shift slightly based on group size. The core sequence stays the same.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* For Introverts */}
        <section id="for-introverts" className="py-20 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Designed for Introverts
              </h2>
              <p className="text-xl text-gray-600">
                We understand that many developers are introverts. Our curriculum is designed 
                to help you grow at your own pace in a safe, judgment-free space.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Small Group Practice</h3>
                <p className="text-gray-600 text-sm">
                  Start with just 5-10 people in supportive Discord sessions. No massive audiences.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Preparedness Focus</h3>
                <p className="text-gray-600 text-sm">
                  Emphasize thorough preparation initially, gradually build to extemporaneous speaking.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Constructive Feedback</h3>
                <p className="text-gray-600 text-sm">
                  Receive specific, encouraging feedback rather than vague criticism or judgment.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Safe Space</h3>
                <p className="text-gray-600 text-sm">
                  Discord is a judgment-free zone where mistakes are learning opportunities.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Topic Ownership</h3>
                <p className="text-gray-600 text-sm">
                  Choose topics you&apos;re passionate about to build intrinsic confidence naturally.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Your Own Pace</h3>
                <p className="text-gray-600 text-sm">
                  Progress at a speed that&apos;s comfortable for you. No deadlines, no pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning System */}
        <section id="learning" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Learning System
              </h2>
              <p className="text-xl text-gray-600">
                These techniques become natural through daily practice. Follow our 3-stage path 
                to make the CYT approach your instinctive communication style.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-blue-200 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Three-Stage Learning Path</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Weeks 1-2</div>
                  <div className="font-bold text-gray-900 mb-2">Stage 1: Recognition</div>
                  <p className="text-sm text-gray-600">
                    Notice the patterns in your conversations. Identify moments where you think "I should have said..."
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">Weeks 3-4</div>
                  <div className="font-bold text-gray-900 mb-2">Stage 2: Preparation</div>
                  <p className="text-sm text-gray-600">
                    Before meetings, identify which script applies. Write out key points and practice opening lines.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Weeks 5+</div>
                  <div className="font-bold text-gray-900 mb-2">Stage 3: Integration</div>
                  <p className="text-sm text-gray-600">
                    Frameworks become natural. You create your own variations and teach others the patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/learning-system"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
              >
                Explore the Complete Learning System →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join our Discord community and begin with Level 1. Every great speaker started exactly where you are right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://discord.gg/pWGt6JMV9t"
                className="px-8 py-4 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-lg transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord (It&apos;s Free)
              </a>
              <Link
                href="/curriculum/1-the-nervous-beginner"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors inline-flex items-center border-2 border-blue-500"
              >
                Start at Level 1
              </Link>
            </div>

            <p className="text-sm text-slate-400">
              No credit card required • No commitment • Start this week
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
