import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(54,133,255,0.08),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,95,135,0.06),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full mb-8 shadow-sm">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-6 h-6 rounded-full bg-[#3685ff] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#FF5F87] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#19C37D] border-2 border-white"></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">Join 500+ developers building confidence</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-none tracking-tight">
                Your Voice Matters.
                <span className="block text-[#3685ff]">Let It Be Heard.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform from a nervous developer into a confident speaker through live practice sessions. Start with 2-minute talks, grow to conference keynotes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/signin"
                  className="group bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  Start Your Free Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="#how-it-works"
                  className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all inline-flex items-center border-2 border-gray-200 shadow-sm"
                >
                  See How It Works
                </Link>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Free forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">1 session/week</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#19C37D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">No experience needed</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="absolute -top-4 -right-4 bg-[#FF5F87] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Live Now
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold">
                      AM
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Alex Martinez</div>
                      <div className="text-sm text-gray-600">Presenting: &quot;Why TypeScript Matters&quot;</div>
                    </div>
                  </div>
                  
                  <div className="bg-[#F9FAFB] rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-gray-700">Audience</span>
                      <span className="text-xs text-gray-600">8 people watching</span>
                    </div>
                    <div className="flex -space-x-2 mb-4">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#19C37D] text-white font-semibold py-2 px-4 rounded-lg text-sm">
                        👏 Great Point!
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm">
                        ❓ Question
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#FF5F87] rounded-full shrink-0"></div>
                      <div className="bg-gray-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700"><span className="font-semibold">Sarah:</span> Love your explanation of type safety!</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#FFB020] rounded-full shrink-0"></div>
                      <div className="bg-gray-50 rounded-lg p-3 flex-1">
                        <p className="text-sm text-gray-700"><span className="font-semibold">Mike:</span> Can you show a code example?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E8F1FF] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#3685ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">+85%</div>
                    <div className="text-xs text-gray-600">Confidence increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#E8F1FF] border border-blue-100 rounded-full mb-4 text-sm font-semibold text-[#3685ff]">
              Real Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Developers just like you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our community is transforming from nervous speakers to confident communicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SJ
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Junior Developer → Tech Lead</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFB020]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                &quot;I went from being terrified of speaking in standup to presenting at our company all-hands. The small group practice made all the difference.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="px-3 py-1 bg-white rounded-full font-medium">Level 3 Complete</span>
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#FF5F87] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MC
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael Chen</div>
                  <div className="text-sm text-gray-600">Senior Engineer</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFB020]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                &quot;As an introvert, I never thought I&apos;d enjoy public speaking. Now I&apos;ve given 3 conference talks! The supportive environment here is everything.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="px-3 py-1 bg-white rounded-full font-medium">12 Talks Given</span>
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#19C37D] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  EP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emma Patel</div>
                  <div className="text-sm text-gray-600">Full Stack Developer</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFB020]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                &quot;The feedback I got here helped me land a promotion. My manager specifically mentioned my improved communication skills in my review.&quot;
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="px-3 py-1 bg-white rounded-full font-medium">8 Talks Given</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 font-medium">Active Members</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-600 font-medium">Talks Delivered</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600 font-medium">Confidence Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full mb-4 text-sm font-semibold text-gray-700">
              Your Learning Pathway
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Five levels. One goal.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured progression from nervous beginner to confident conference speaker
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/pathway"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Complete Pathway
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-[#E8F1FF] border border-blue-100 rounded-full mb-4 text-sm font-semibold text-[#3685ff]">
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From zero to confident in 3 steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No complicated setup. Just join, practice, and grow with a supportive community.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-[#3685ff] rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-transform">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#3685ff] text-xl shadow-lg border-4 border-white">
                      1
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Join the Community</h3>
                <p className="text-gray-600 text-center">
                  Sign up and join our Discord. Browse upcoming sessions and pick a time that works for you. No commitments required.
                </p>
              </div>

              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-[#FF5F87] rounded-3xl flex items-center justify-center shadow-2xl shadow-pink-500/30 transform hover:scale-105 transition-transform">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#FF5F87] text-xl shadow-lg border-4 border-white">
                      2
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Practice Live</h3>
                <p className="text-gray-600 text-center">
                  Give your first talk in a small, supportive group. Start with just 2 minutes on any topic you choose. Everyone&apos;s here to help.
                </p>
              </div>

              <div className="relative">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-[#19C37D] rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30 transform hover:scale-105 transition-transform">
                      <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-[#19C37D] text-xl shadow-lg border-4 border-white">
                      3
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Level Up</h3>
                <p className="text-gray-600 text-center">
                  Get specific feedback, track your progress, and move through 5 levels. From 2-minute talks to full conference keynotes.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/signin"
              className="inline-flex items-center bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold px-10 py-5 rounded-xl transition-all shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 text-lg"
            >
              Start Free Today
              <svg className="w-6 h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-gray-600">No credit card required • Join 500+ developers</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#E6F9F0] border border-green-100 rounded-full mb-4 text-sm font-semibold text-[#19C37D]">
              Built for introverts
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A safe space to grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We know speaking can be scary. That&apos;s why we created a supportive environment designed specifically for introverted developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#3685ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Small, intimate groups</h3>
              <p className="text-gray-600">Practice with just 5-10 supportive developers. No massive audiences. No judgment.</p>
            </div>

            <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#FF5F87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Progress at your pace</h3>
              <p className="text-gray-600">No deadlines. No pressure. Move through levels when you&apos;re comfortable and ready.</p>
            </div>

            <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#19C37D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe environment</h3>
              <p className="text-gray-600">Supportive community where mistakes are learning opportunities, not failures.</p>
            </div>

            <div className="group bg-[#F9FAFB] hover:bg-white border border-gray-200 rounded-2xl p-8 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#FFB020]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tech-focused topics</h3>
              <p className="text-gray-600">Talk about what you know: APIs, architectures, frameworks, and tools you love.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#F9FAFB] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNjg1ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTYgNTRjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to find<br />your voice?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of developers who are building their public speaking confidence through live practice and supportive feedback.
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
    </MainLayout>
  );
}
