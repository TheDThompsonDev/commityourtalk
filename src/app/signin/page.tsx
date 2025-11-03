import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3685ff] rounded-2xl mb-4">
              <span className="text-3xl">🎙️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Sign in to continue your speaking journey
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#3685ff]/30 focus:border-[#3685ff] transition-all text-gray-900"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#3685ff]/30 focus:border-[#3685ff] transition-all text-gray-900"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#3685ff] border-gray-300 rounded focus:ring-[#3685ff]"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-semibold text-[#3685ff] hover:text-[#2870E5]"
              >
                Forgot password?
              </Link>
            </div>

            <Link
              href="/dashboard"
              className="w-full bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-3 px-4 rounded-xl transition-all inline-flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              Sign in
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="#"
                className="font-semibold text-[#3685ff] hover:text-[#2870E5]"
              >
                Join Discord
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
