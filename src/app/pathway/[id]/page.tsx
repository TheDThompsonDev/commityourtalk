import { notFound } from 'next/navigation';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { pathways } from '@/lib/data/sample-courses';

interface PathwayPageProps {
  params: { id: string };
}

export default function PathwayDetailPage({ params }: PathwayPageProps) {
  const pathway = pathways.find(p => p.id === params.id);

  if (!pathway) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 dark:bg-surface-1 min-h-screen">
        <div className="text-white py-24 relative overflow-hidden" style={{ backgroundColor: pathway.color }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 text-3xl font-bold shadow-lg">
                    {pathway.level}
                  </div>
                  <div>
                    <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">Level {pathway.level}</span>
                    <h1 className="text-4xl md:text-5xl font-bold">
                      {pathway.title}
                    </h1>
                  </div>
                </div>
                
                <p className="text-3xl font-bold text-white/95 mb-6">
                  {pathway.subtitle}
                </p>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {pathway.description}
                </p>

                <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Focus Areas
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {pathway.focus}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a 
                    href="https://discord.gg/your-invite"
                    className="bg-white text-gray-900 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center shadow-xl text-lg"
                  >
                    Start This Level
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  {pathway.level > 1 && (
                    <Link
                      href={`/pathway/${pathway.level - 1}`}
                      className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous Level
                    </Link>
                  )}
                  {pathway.level < 5 && (
                    <Link
                      href={`/pathway/${pathway.level + 1}`}
                      className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-colors inline-flex items-center"
                    >
                      Next Level
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold mb-3">{pathway.challenges.length}</div>
                    <div className="text-white/90 font-medium text-lg">Speaking Challenges</div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Skills to Develop</span>
                      <span className="font-bold">{pathway.skillsDeveloped.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Live Sessions</span>
                      <span className="font-bold">Weekly in Discord</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Community Support</span>
                      <span className="font-bold">Peer Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-card rounded-2xl p-8 mb-8 border border-gray-100 dark:border-custom shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-strong">Speaking Challenges</h2>
                <div className="space-y-6">
                  {pathway.challenges.map((challenge, index) => (
                    <div 
                      key={challenge.id}
                      className="border-l-4 pl-6 py-4 hover:bg-gray-50 dark:hover:bg-surface-2 transition-colors rounded-r-lg"
                      style={{ borderColor: pathway.color }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                            style={{ backgroundColor: pathway.color }}
                          >
                            {challenge.order}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-strong">{challenge.title}</h3>
                            <div className="flex items-center gap-4 mt-1">
                              <span className="text-sm font-semibold" style={{ color: pathway.color }}>
                                {challenge.duration}
                              </span>
                              <span className="text-sm text-gray-500 dark:text-muted">
                                Focus: {challenge.focus}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-muted leading-relaxed ml-14">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-card rounded-2xl p-8 border border-gray-100 dark:border-custom shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-strong">Skills You'll Develop</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pathway.skillsDeveloped.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-6 h-6 mr-3 flex-shrink-0" style={{ color: pathway.color }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-muted font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-card rounded-2xl p-6 mb-6 border border-gray-100 dark:border-custom shadow-lg sticky top-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-strong">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-strong mb-1">Join Discord</h3>
                      <p className="text-sm text-gray-600 dark:text-muted">Connect with our supportive community of developer speakers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FF5F87] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-strong mb-1">Choose a Challenge</h3>
                      <p className="text-sm text-gray-600 dark:text-muted">Pick any challenge from your current level to practice</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#19C37D] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-strong mb-1">Present Live</h3>
                      <p className="text-sm text-gray-600 dark:text-muted">Share your talk in our weekly practice sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FFB020] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-strong mb-1">Get Feedback</h3>
                      <p className="text-sm text-gray-600 dark:text-muted">Receive constructive, encouraging feedback from peers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#F04438] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-strong mb-1">Level Up</h3>
                      <p className="text-sm text-gray-600 dark:text-muted">Complete all challenges and move to the next level</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://discord.gg/your-invite"
                  className="w-full mt-8 font-bold py-4 px-6 rounded-xl transition-colors inline-flex items-center justify-center"
                  style={{ backgroundColor: pathway.color, color: 'white' }}
                >
                  Join Practice Sessions
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card py-16 border-t border-gray-100 dark:border-custom">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-strong mb-4">Explore Other Levels</h2>
              <p className="text-xl text-gray-600 dark:text-muted">Your complete journey from beginner to expert</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {pathways.map((p) => (
                <Link
                  key={p.id}
                  href={`/pathway/${p.id}`}
                  className={`text-center p-6 rounded-xl border-2 transition-all ${
                    p.id === pathway.id 
                      ? 'border-current shadow-lg' 
                      : 'border-gray-200 dark:border-custom hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md'
                  }`}
                  style={p.id === pathway.id ? { borderColor: p.color } : {}}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.level}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-strong mb-1 text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-muted">{p.challenges.length} challenges</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

