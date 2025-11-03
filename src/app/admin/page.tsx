import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { getSignInUrl, withAuth } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const { user } = await withAuth();

  if (!user) {
    const signInUrl = await getSignInUrl();
    redirect(signInUrl);
  }

  return (
    <MainLayout user={user}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-300">
              Manage sessions, attendance, and community
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/admin/sessions"
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 p-8 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Session Management
              </h2>
              <p className="text-slate-600">
                Start sessions, generate attendance codes, and track
                participation
              </p>
            </Link>

            <Link
              href="/admin/attendance"
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 p-8 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                <svg
                  className="w-6 h-6 text-green-600 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Attendance Reports
              </h2>
              <p className="text-slate-600">
                View attendance records and generate reports
              </p>
            </Link>

            <Link
              href="/admin/users"
              className="bg-white rounded-xl border-2 border-gray-200 hover:border-purple-500 p-8 transition-all hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                <svg
                  className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors"
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
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                User Management
              </h2>
              <p className="text-slate-600">
                Manage user accounts and permissions
              </p>
            </Link>
          </div>

          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Quick Guide
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Start a Session
                  </h3>
                  <p className="text-slate-700">
                    Go to Session Management and click &quot;Start Session&quot;
                    when your live call begins. This generates a unique 8-digit
                    attendance code.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Share the Code
                  </h3>
                  <p className="text-slate-700">
                    Share the attendance code with participants during your live
                    call. They&rsquo;ll use it to mark their attendance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    End the Session
                  </h3>
                  <p className="text-slate-700">
                    When the session ends, click &quot;End Session&quot;. This
                    deactivates the code so it can&rsquo;t be used anymore.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Review Attendance
                  </h3>
                  <p className="text-slate-700">
                    Check attendance reports to see who attended and track
                    participation over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
