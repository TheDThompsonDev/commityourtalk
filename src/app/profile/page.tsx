import Link from "next/link";

export default function ProfilePage() {
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
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/curriculum"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Pathways
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              My Speaking Journey
            </h1>
            <p className="text-lg text-gray-600">Hello, Alex Doe!</p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Log a New Talk
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-[#3685ff] rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
              AD
            </div>
            <div>
              <div className="text-sm text-gray-600 font-medium mb-1">
                Alex&apos;s Dashboard
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Current Pathway: Conference Speaker
              </h2>
              <div className="text-gray-600">
                Total Talks Given:{" "}
                <span className="font-bold text-gray-900">12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Learning Pathways
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#E8F1FF] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-[#3685ff]"
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
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        Conference Speaker
                      </h3>
                      <p className="text-sm text-gray-600">
                        Master the art of delivering compelling talks at tech
                        conferences.
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-[#3685ff]">
                        75% Complete
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#3685ff] rounded-full transition-all"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-[#FFE8EE] rounded-xl flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-[#FF5F87]"
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
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        Team Lead Communication
                      </h3>
                      <p className="text-sm text-gray-600">
                        Enhance your leadership skills through effective
                        communication.
                      </p>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Progress
                      </span>
                      <span className="text-sm font-bold text-[#FF5F87]">
                        20% Complete
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FF5F87] rounded-full transition-all"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Speaking History
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Talk Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        The Future of UI
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        Global Dev Conf
                      </td>
                      <td className="px-6 py-4 text-gray-600">2024-05-20</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href="#"
                          className="text-[#3685ff] hover:text-[#2870E5] font-semibold text-sm"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        Introvert&apos;s Guide to Networking
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        Internal Tech Talk
                      </td>
                      <td className="px-6 py-4 text-gray-600">2024-03-11</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href="#"
                          className="text-[#3685ff] hover:text-[#2870E5] font-semibold text-sm"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        State Management in React
                      </td>
                      <td className="px-6 py-4 text-gray-600">Local Meetup</td>
                      <td className="px-6 py-4 text-gray-600">2023-11-02</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href="#"
                          className="text-[#3685ff] hover:text-[#2870E5] font-semibold text-sm"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Achievements & Milestones
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-20 h-20 border-3 border-[#FF5F87] rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <svg
                      className="w-10 h-10 text-[#FF5F87]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    First Talk Logged
                  </h3>
                  <p className="text-xs text-gray-600">
                    You started your journey!
                  </p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-20 h-20 border-3 border-[#3685ff] rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <svg
                      className="w-10 h-10 text-[#3685ff]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    Confident Speaker
                  </h3>
                  <p className="text-xs text-gray-600">Completed a pathway.</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-20 h-20 border-3 border-[#19C37D] rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <svg
                      className="w-10 h-10 text-[#19C37D]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    5 Talks Given
                  </h3>
                  <p className="text-xs text-gray-600">Great momentum!</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm opacity-30">
                  <div className="w-20 h-20 border-3 border-gray-400 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    Conference Pro
                  </h3>
                  <p className="text-xs text-gray-600">
                    Speak at a major conference
                  </p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm opacity-30">
                  <div className="w-20 h-20 border-3 border-gray-400 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    Pathway Master
                  </h3>
                  <p className="text-xs text-gray-600">Complete 3 pathways.</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-sm opacity-30">
                  <div className="w-20 h-20 border-3 border-gray-400 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    Locked
                  </h3>
                  <p className="text-xs text-gray-600">Keep going!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
