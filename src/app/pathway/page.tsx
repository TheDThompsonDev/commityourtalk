import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import PathwayCard from '@/components/curriculum/PathwayCard';
import SessionAgenda from '@/components/curriculum/SessionAgenda';
import { pathways } from '@/lib/data/pathways';

export default function PathwayPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <section className="relative bg-white overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 bg-[#F9FAFB]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
                <div className="w-2 h-2 bg-[#3685ff] rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">5-Level Progressive Pathway</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                From nervous beginner to<br />
                <span className="text-[#3685ff]">confident speaker</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                A structured journey through live Discord practice sessions. Five progressive levels designed to build your public speaking confidence step by step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#levels" 
                  className="group bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Explore All Levels
                  <svg className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <Link
                  href="/signin"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center border border-gray-200 shadow-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F9F0] rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-[#19C37D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">5</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Progressive Levels</div>
                <p className="text-xs text-gray-600">Build skills step-by-step</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8F1FF] rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-[#3685ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">20</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Speaking Challenges</div>
                <p className="text-xs text-gray-600">Live practice sessions</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE8EE] rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-[#FF5F87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Weekly Group Session</div>
                <p className="text-xs text-gray-600">Practice consistently</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFF4E5] rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-[#FFB020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">∞</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Supportive Community</div>
                <p className="text-xs text-gray-600">Grow together</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F9FAFB] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-4 text-sm font-semibold text-gray-700">
                Your Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Progressive pathway design
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start where you are. Progress at your pace. Each level builds on the last, taking you from 2-minute talks to full conference keynotes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 bg-[#E6F9F0] border border-green-100 rounded-full mb-4 text-sm font-semibold text-[#19C37D]">
                Built for introverts
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                A supportive environment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand that many developers are introverts. Our pathway is designed to help you grow at your own pace in a safe, judgment-free space.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#3685ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Small Group Practice</h3>
                <p className="text-sm text-gray-600">Start with just 5-10 people in supportive Discord sessions. No massive audiences.</p>
              </div>

              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#FF5F87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Preparedness Focus</h3>
                <p className="text-sm text-gray-600">Emphasize thorough preparation initially, gradually build to extemporaneous speaking.</p>
              </div>

              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#19C37D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Constructive Feedback</h3>
                <p className="text-sm text-gray-600">Receive specific, encouraging feedback rather than vague criticism or judgment.</p>
              </div>

              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#FFB020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Safe Space</h3>
                <p className="text-sm text-gray-600">Discord is a judgment-free zone where mistakes are learning opportunities.</p>
              </div>

              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#3685ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Topic Ownership</h3>
                <p className="text-sm text-gray-600">Choose topics you&apos;re passionate about to build intrinsic confidence naturally.</p>
              </div>

              <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-6 transition-all hover:shadow-lg">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#FF5F87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Your Own Pace</h3>
                <p className="text-sm text-gray-600">Progress at a speed that&apos;s comfortable for you. No deadlines, no pressure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 bg-[#E8F1FF] border border-blue-100 rounded-full mb-4 text-sm font-semibold text-[#3685ff]">
                What to Expect
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Weekly Discord Session Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every practice session follows a carefully designed 60-minute format to maximize your growth
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <SessionAgenda />
            </div>
          </div>
        </section>

        <section className="bg-[#F9FAFB] py-24" id="levels">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                All 5 levels in detail
              </h2>
              <p className="text-lg text-gray-600">
                Explore each level to see what challenges and skills you&apos;ll develop
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pathways.map((pathway) => (
                <PathwayCard key={pathway.id} pathway={pathway} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjg1ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTYgNTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Start your speaking<br />journey today
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join our Discord community and begin with Level 1. Every great speaker started exactly where you are right now.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://discord.gg/your-invite"
                className="group bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-10 py-5 rounded-xl transition-all inline-flex items-center justify-center shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord - It&apos;s Free
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Start this week</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

