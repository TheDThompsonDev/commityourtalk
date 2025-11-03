import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl">🎙️</span>
                <span className="text-xl font-bold text-gray-900">
                  Commit Your Talk
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="/dashboard"
                  className="text-[#3685ff] font-semibold"
                >
                  Dashboard
                </Link>
                <Link
                  href="/pathway"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Pathways
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Events
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Resources
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-900">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <Link
                href="/profile"
                className="w-10 h-10 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold"
              >
                AD
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Alex!
          </h1>
          <p className="text-lg text-gray-600">
            &quot;The only way to get better at speaking is to do it.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Progress at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-700 mb-6 text-center">
                    Overall Completion
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#F3F4F6"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#3685ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${65 * 2.51} ${100 * 2.51}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          65%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-base font-semibold text-gray-700 mb-6 text-center">
                    Confidence Growth
                  </h3>
                  <div className="flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#F3F4F6"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#FF5F87"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${80 * 2.51} ${100 * 2.51}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          80%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1 font-medium">
                  Completed Talks
                </div>
                <div className="text-4xl font-bold text-gray-900">4</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1 font-medium">
                  Hours Practiced
                </div>
                <div className="text-4xl font-bold text-gray-900">12</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-sm text-gray-600 mb-1 font-medium">
                  Skills Unlocked
                </div>
                <div className="text-4xl font-bold text-gray-900">8</div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Learning Pathway
                </h2>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#E8F1FF] rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#3685ff]"
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
                  <div>
                    <div className="text-sm font-semibold text-[#3685ff] uppercase tracking-wide mb-1">
                      Next Up
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Crafting Your Core Message
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Learn to distill your ideas into a powerful, memorable
                  narrative.
                </p>
                <Link
                  href="/pathway"
                  className="inline-flex items-center bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25"
                >
                  Continue Learning
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#FFE8EE] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#FF5F87]"
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
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Vocal Variety</h3>
                      <p className="text-sm text-gray-600">In Progress</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FF5F87] rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#E8F1FF] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[#3685ff]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Handling Q&A</h3>
                      <p className="text-sm text-gray-600">Not Started</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#3685ff] rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Sessions
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FF5F87] uppercase">
                        Oct
                      </div>
                      <div className="text-3xl font-bold text-gray-900">28</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Practice Pitch
                      </h3>
                      <p className="text-sm text-gray-600">4:00 PM - 4:30 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="flex-1 bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm"
                    >
                      Join Now
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 text-[#3685ff] hover:text-[#2870E5] font-semibold text-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm opacity-75">
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-500 uppercase">
                        Nov
                      </div>
                      <div className="text-3xl font-bold text-gray-900">04</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Peer Feedback Round
                      </h3>
                      <p className="text-sm text-gray-600">5:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg text-sm">
                      Join
                    </button>
                    <Link
                      href="#"
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold text-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm opacity-75">
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold text-gray-500 uppercase">
                        Nov
                      </div>
                      <div className="text-3xl font-bold text-gray-900">11</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Mentor Review: Storytelling
                      </h3>
                      <p className="text-sm text-gray-600">4:30 PM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-lg text-sm">
                      Join
                    </button>
                    <Link
                      href="#"
                      className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold text-sm"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
