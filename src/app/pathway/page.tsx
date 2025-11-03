"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PathwayCard from "@/components/curriculum/PathwayCard";
import SessionAgenda from "@/components/curriculum/SessionAgenda";
import { pathways } from "@/lib/data/pathways";

export default function PathwayPage() {
  const [activeId, setActiveId] = useState<string>("overview");

  useEffect(() => {
    const sectionIds = [
      "overview",
      "how-it-works",
      "levels",
      "session",
      "introverts",
      "join",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen">
        <section
          id="overview"
          className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 lg:py-28 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6 text-xs font-semibold text-blue-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  5-Level Progressive Pathway
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  From nervous beginner
                  <br />
                  <span className="text-blue-300">to confident speaker</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-200 mt-6 max-w-2xl">
                  Join a structured journey through live Discord practice.
                  Advance through five focused levels and build lasting
                  confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <a
                    href="#levels"
                    className="bg-white text-slate-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center shadow-sm"
                  >
                    Explore All Levels
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                  <Link
                    href="/signin"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center border border-blue-500/50"
                  >
                    Get Started
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>{" "}
                    Weekly live sessions
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                  <div>Built for introverted developers</div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">
                      Pathway Roadmap
                    </h3>
                    <span className="text-blue-200 text-xs font-medium">
                      5 levels
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { lvl: 1, title: "Foundation", note: "2-min talks" },
                      { lvl: 2, title: "Mastery", note: "5-min talks" },
                      { lvl: 3, title: "Leadership", note: "10-min talks" },
                      { lvl: 4, title: "Innovation", note: "20-min talks" },
                      { lvl: 5, title: "Expertise", note: "45-min talks" },
                    ].map((s) => (
                      <li
                        key={s.lvl}
                        className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                            {s.lvl}
                          </div>
                          <div>
                            <div className="text-white font-semibold">
                              {s.title}
                            </div>
                            <div className="text-slate-300 text-xs">
                              {s.note}
                            </div>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-white/60"
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
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-1/5" />
                    </div>
                    <div className="text-xs text-slate-300 mt-2">
                      Start at Level 1 • Move at your pace
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Who this is for
              </h2>
              <p className="text-gray-600 mt-2">
                Different starting points, one clear pathway
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "New to speaking",
                  desc: "You avoid speaking up; start with 2‑minute talks and simple prompts.",
                },
                {
                  title: "Gaining consistency",
                  desc: "You can speak but ramble; build structure and delivery.",
                },
                {
                  title: "Leading the room",
                  desc: "You lead meetings but want presence; practice persuasive delivery.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 p-6 bg-white"
                >
                  <div className="text-blue-600 font-semibold text-sm mb-2">
                    Path {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <nav className="sticky top-16 z-30 bg-white/90 backdrop-blur border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex gap-3 sm:gap-6 text-sm overflow-x-auto py-3 -mx-4 px-4">
              {[
                { id: "how-it-works", label: "How it works" },
                { id: "levels", label: "Levels" },
                { id: "session", label: "Weekly session" },
                { id: "introverts", label: "For introverts" },
                { id: "join", label: "Join" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={activeId === item.id ? "page" : undefined}
                    className={`px-2 py-1 border-b-2 transition-colors ${
                      activeId === item.id
                        ? "text-gray-900 border-blue-600 font-semibold"
                        : "text-gray-600 border-transparent hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className="bg-white py-12 border-b border-gray-200 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  title: "Clarity under pressure",
                  desc: "Think fast, speak clearly",
                },
                {
                  title: "Structured delivery",
                  desc: "Sound organized, not rambling",
                },
                {
                  title: "Audience confidence",
                  desc: "Feel calm in front of peers",
                },
                { title: "Career visibility", desc: "Lead meetings & talks" },
              ].map((o, i) => (
                <div key={i} className="rounded-lg border border-gray-200 p-5">
                  <div className="text-sm font-semibold text-blue-600 mb-1">
                    Outcome {i + 1}
                  </div>
                  <div className="font-bold text-gray-900">{o.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{o.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-gray-50 py-20 border-b border-gray-200 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A clear progression through five levels of speaking mastery
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ol className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
                {[
                  { level: 1, title: "Foundation", note: "2-min talks" },
                  { level: 2, title: "Mastery", note: "5-min talks" },
                  { level: 3, title: "Leadership", note: "10-min talks" },
                  { level: 4, title: "Innovation", note: "20-min talks" },
                  { level: 5, title: "Expertise", note: "45-min talks" },
                ].map((s, idx) => (
                  <li key={s.level} className="md:flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                        {s.level}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {s.title}
                        </div>
                        <div className="text-xs text-gray-600">{s.note}</div>
                      </div>
                    </div>
                    {idx < 4 && (
                      <div className="hidden md:block h-1 bg-gray-200 rounded-full mt-4">
                        <div
                          className="h-1 bg-blue-600 rounded-full"
                          style={{ width: "100%" }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="introverts"
          className="bg-gray-50 py-20 border-b border-gray-200 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Designed for Introverts
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We understand that many developers are introverts. Our pathway
                is designed to help you grow at your own pace in a safe,
                judgment-free space.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Small Group Practice
                </h3>
                <p className="text-gray-600 text-sm">
                  Start with just 5-10 people in supportive Discord sessions. No
                  massive audiences.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Preparedness Focus
                </h3>
                <p className="text-gray-600 text-sm">
                  Emphasize thorough preparation initially, gradually build to
                  extemporaneous speaking.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Constructive Feedback
                </h3>
                <p className="text-gray-600 text-sm">
                  Receive specific, encouraging feedback rather than vague
                  criticism or judgment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Safe Space
                </h3>
                <p className="text-gray-600 text-sm">
                  Discord is a judgment-free zone where mistakes are learning
                  opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Topic Ownership
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose topics you&apos;re passionate about to build intrinsic
                  confidence naturally.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Your Own Pace
                </h3>
                <p className="text-gray-600 text-sm">
                  Progress at a speed that&apos;s comfortable for you. No
                  deadlines, no pressure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What members say
              </h2>
              <p className="text-slate-300 mt-2">
                Real stories from developers building confidence
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "I went from avoiding standups to leading demos confidently.",
                  name: "Priya, Frontend Dev",
                },
                {
                  quote:
                    "Clear structure and consistent practice made all the difference.",
                  name: "Luis, Backend Eng",
                },
                {
                  quote:
                    "The judgment-free environment helped me find my voice.",
                  name: "Hannah, Full‑stack Dev",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 p-6 bg-white/5"
                >
                  <p className="text-white/90 font-medium leading-relaxed italic">
                    “{t.quote}”
                  </p>
                  <div className="mt-4 text-sm text-slate-300">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently asked
              </h2>
              <p className="text-gray-600 mt-2">
                Quick answers to common questions
              </p>
            </div>
            <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
              {[
                {
                  q: "Do I need prior speaking experience?",
                  a: "No. Level 1 starts with 2-minute talks and simple prompts.",
                },
                {
                  q: "How do sessions work?",
                  a: "Weekly 60-minute calls on Discord with small group practice and feedback.",
                },
                {
                  q: "What if I miss a week?",
                  a: "No problem. Continue at your pace—there are no deadlines or penalties.",
                },
              ].map((f, i) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">
                      ⌄
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="session"
          className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 border-b border-gray-200 scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Weekly Session Structure
              </h2>
              <p className="text-lg md:text-xl text-slate-300 mt-3 max-w-3xl">
                A focused 60-minute format that balances practice, feedback, and
                gradual difficulty so you improve every week.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                      At a glance
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/20">
                        60 minutes
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/20">
                        Small groups (5‑10)
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/20">
                        Discord voice
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                      What you&apos;ll build
                    </h3>
                    <ul className="mt-3 space-y-2 text-slate-200">
                      <li className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Clear structure under time constraints</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Confident delivery and vocal control</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>
                          Actionable feedback habits (give and receive)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                      Legend
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-200">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                        Breakouts
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-300"></span>
                        Spotlight
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                        Full group
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-white/10 shadow-sm bg-white/5">
                  <SessionAgenda
                    accentColor="#60a5fa"
                    variant="dark"
                    showHeader={false}
                  />
                </div>
                <p className="text-xs text-slate-300 mt-3">
                  Timing may shift slightly based on group size. The core
                  sequence stays the same.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-gray-50 py-20 border-b border-gray-200 scroll-mt-24"
          id="levels"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All 5 Levels in Detail
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore each level to see what challenges and skills you&apos;ll
                develop
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {pathways.map((pathway) => (
                <div key={pathway.id} className="h-full">
                  <PathwayCard pathway={pathway} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="join"
          className="bg-gradient-to-b from-slate-900 to-slate-800 py-20 scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to start your journey?
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join our Discord community and begin with Level 1. Every great
              speaker started exactly where you are right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://discord.gg/your-invite"
                className="bg-white hover:bg-blue-50 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center shadow-sm"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord — It&apos;s Free
              </a>
              <Link
                href="/signin"
                className="bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center border border-white/30"
              >
                Sign Up First
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">Free to Join</h4>
                <p className="text-slate-300 text-sm">
                  No hidden fees, no subscriptions. Just pure community support.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">No Commitment</h4>
                <p className="text-slate-300 text-sm">
                  Leave anytime. No contracts, no obligations, no pressure.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-2">
                  Start This Week
                </h4>
                <p className="text-slate-300 text-sm">
                  Join a session this week. Your speaking journey begins
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
