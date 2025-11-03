"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface User {
  id: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}

interface MainLayoutProps {
  children: React.ReactNode;
  user?: User | null;
}

export default function MainLayout({ children, user }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/95 border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center">
                <Image
                  src="/cytLogo.png"
                  alt="Commit Your Talk"
                  className="h-20 w-auto object-contain hover:opacity-90 transition-opacity border-2 border-gray-200 rounded-lg"
                  width={100}
                  height={100}
                  quality={100}
                />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/attendance"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Attendance
                    </Link>
                    <Link
                      href="/curriculum"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Curriculum
                    </Link>
                    <Link
                      href="/pathway"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Pathways
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/pathway"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Pathways
                    </Link>
                    <Link
                      href="/curriculum"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors"
                    >
                      Curriculum
                    </Link>
                    <a
                      href="https://discord.gg/pWGt6JMV9t"
                      className="text-gray-600 hover:text-gray-900 text-sm font-semibold transition-colors inline-flex items-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Discord
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <>
                  <Link
                    href="/signout"
                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors"
                  >
                    Sign Out
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {user.firstName
                        ? user.firstName.charAt(0).toUpperCase()
                        : user.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {user.firstName || user.email}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/login"
                    className="bg-[#3685ff] hover:bg-[#2870E5] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow-md"
                  >
                    Get Started Free
                  </Link>
                </>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/attendance"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Attendance
                  </Link>
                  <Link
                    href="/curriculum"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Curriculum
                  </Link>
                  <Link
                    href="/pathway"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pathways
                  </Link>
                  <a
                    href="https://discord.gg/pWGt6JMV9t"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Discord
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/pathway"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pathways
                  </Link>
                  <Link
                    href="/curriculum"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Curriculum
                  </Link>
                  <a
                    href="https://discord.gg/pWGt6JMV9t"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Discord Community
                  </a>
                </>
              )}
              <div className="border-t border-gray-200 pt-4 mt-4">
                {user ? (
                  <>
                    <div className="px-3 py-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold">
                          {user.firstName
                            ? user.firstName.charAt(0).toUpperCase()
                            : user.email.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            {user.firstName || user.email}
                          </p>
                          <p className="text-xs text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/signout"
                      className="block px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-base font-semibold mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Out
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/login"
                      className="block px-3 py-2 bg-[#3685ff] text-white rounded-lg text-base font-semibold mt-2 text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#0A0911] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4 px-4">
                <Image
                  src="/cytLogo.png"
                  alt="Commit Your Talk"
                  className="h-10 w-auto object-contain"
                  width={100}
                  height={100}
                  quality={100}
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transform from a nervous developer into a confident speaker
                through live practice sessions in our supportive Discord
                community.
              </p>
              <a
                href="https://discord.gg/pWGt6JMV9t"
                className="inline-flex items-center bg-[#3685ff] hover:bg-[#2870E5] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    href="/pathway"
                    className="hover:text-white transition-colors"
                  >
                    Pathways
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="hover:text-white transition-colors"
                  >
                    My Progress
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Community</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a
                    href="https://discord.gg/pWGt6JMV9t"
                    className="hover:text-white transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Commit Your Talk. Built for developers, by developers.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
