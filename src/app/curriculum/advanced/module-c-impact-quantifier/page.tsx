import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Module C: The Impact Quantifier - Commit Your Talk",
  description: "Measure 'soft skills' impact in hard numbers, making the invisible visible and building a business case for your work.",
};

export default function ModuleCPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-gradient-to-br from-purple-600 to-violet-700 text-white py-16">
          <Container maxWidth="5xl">
            <div className="mb-4">
              <div className="text-purple-200 font-semibold mb-2">Module C</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                The Impact Quantifier
              </h1>
              <p className="text-xl text-purple-100 mt-2">
                Metrics & Measurement
              </p>
            </div>
            <p className="text-lg text-purple-50 mt-6 max-w-3xl">
              Engineering culture loves metrics. These scripts show how to measure "soft skills" impact in hard numbers, making the invisible visible and building a business case for your work.
            </p>
          </Container>
        </div>

        <Container maxWidth="5xl" className="py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Concept: The Impact Quantifier</h2>

            {/* Script C.1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Script C.1 - Measuring Communication ROI to Leadership
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-2">Context:</p>
                <p className="text-gray-700">Your manager questions the value of spending time on "communication training" vs. coding.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-red-600 mb-3">The Default Response:</h4>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-2">
                  <p className="text-gray-800">"Communication is important! It helps the team work better together!"</p>
                </div>
                <p className="text-sm text-gray-600 italic">(Vague, unmeasurable, unconvincing)</p>
              </div>

              <div>
                <h4 className="font-bold text-purple-600 mb-3">The CYT Approach:</h4>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Phase 1 - The Baseline:</p>
                      <p className="text-gray-700">"Great question. Let me share some data I've been tracking."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 2 - The Time Metrics:</p>
                      <p className="text-gray-700 mb-2">"Last quarter, our team spent:</p>
                      <ul className="list-disc ml-6 text-gray-700">
                        <li>15 hours/week in meetings (30% of our time)</li>
                        <li>8 hours/week on Slack (16% of our time)</li>
                        <li>5 hours/week on PR reviews (10% of our time)</li>
                      </ul>
                      <p className="text-gray-700 mt-2">That's 56% of our time in communication, not coding."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 3 - The Inefficiency Cost:</p>
                      <p className="text-gray-700">"But here's the problem: Our meeting survey shows 60% are rated 'unproductive.' That's 9 wasted hours per week per person. For our team of 8, that's 72 hours/week. That's literally 2 full-time engineers worth of capacity."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 4 - The Improvement Hypothesis:</p>
                      <p className="text-gray-700">"If communication training can make our meetings even 25% more effective, we recover 18 hours/week. That's $45,000 per quarter in recovered capacity."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 5 - The Measurement Plan:</p>
                      <p className="text-gray-700 mb-2">"Here's how we'll measure success:</p>
                      <ul className="list-disc ml-6 text-gray-700">
                        <li>Pre/post meeting effectiveness scores</li>
                        <li>Time from question to answer in Slack</li>
                        <li>PR review turnaround time</li>
                        <li>Sprint velocity changes</li>
                      </ul>
                      <p className="text-gray-700 mt-2">Give me one quarter. If we don't see improvement, we stop."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Deep Nuance Explanation:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Time is money:</strong> Engineers understand resource allocation. Frame communication as resource optimization.</li>
                    <li><strong>Current state baseline:</strong> You can't improve what you don't measure. Start with the current reality.</li>
                    <li><strong>The multiplier effect:</strong> Show how small improvements multiply across the team.</li>
                    <li><strong>Hypothesis-driven:</strong> Frame it as an experiment, not a mandate.</li>
                    <li><strong>Building block:</strong> Convert soft skills to hard metrics by measuring time, velocity, and satisfaction.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Script C.2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Script C.2 - Tracking Stakeholder Satisfaction Systematically
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-2">Context:</p>
                <p className="text-gray-700">You want to prove that better communication leads to happier stakeholders.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-red-600 mb-3">The Default Approach:</h4>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-2">
                  <p className="text-gray-800">"I think our stakeholders are happier now!"</p>
                </div>
                <p className="text-sm text-gray-600 italic">(Anecdotal, subjective, dismissible)</p>
              </div>

              <div>
                <h4 className="font-bold text-purple-600 mb-3">The CYT Approach:</h4>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-4">
                  <p className="text-gray-700 mb-4 italic">(In quarterly review)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Phase 1 - The System Introduction:</p>
                      <p className="text-gray-700">"I've implemented a simple stakeholder NPS system for our team."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 2 - The Methodology:</p>
                      <p className="text-gray-700 mb-2">"After each major delivery, I send a 2-question survey:</p>
                      <ol className="list-decimal ml-6 text-gray-700">
                        <li>How satisfied were you with our communication? (1-10)</li>
                        <li>What one thing could we improve?"</li>
                      </ol>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 3 - The Results:</p>
                      <div className="text-gray-700">
                        <p className="mb-2">"Quarter 1 baseline: 6.2/10 average<br/>
                        Quarter 2 (after communication training): 8.4/10</p>
                        <p className="mb-2">Key feedback themes:</p>
                        <ul className="list-disc ml-6">
                          <li>Q1: 'Don't know status,' 'surprised by delays,' 'unclear requirements'</li>
                          <li>Q2: 'proactive updates,' 'clear timelines,' 'feel heard'"</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 4 - The Business Impact:</p>
                      <p className="text-gray-700">"The real impact? Our stakeholders have requested our team specifically for 3 new projects. The PM literally said 'I want the team that actually communicates.'"</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 5 - The Systematization:</p>
                      <p className="text-gray-700">"I propose we make this standard: All teams track stakeholder satisfaction. It becomes a KPI alongside velocity and quality."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Deep Nuance Explanation:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>NPS familiarity:</strong> Business leaders know NPS. Using familiar metrics increases credibility.</li>
                    <li><strong>Qualitative to quantitative:</strong> Comments become themes become metrics.</li>
                    <li><strong>The preference signal:</strong> Being requested by name is the ultimate satisfaction metric.</li>
                    <li><strong>Building block:</strong> What gets measured gets improved. Make communication measurable.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl p-8 border-2 border-purple-300 mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Measurement Mindset</h3>
              <p className="text-gray-700 mb-4">
                The key to quantifying soft skills is asking: "What changes when communication improves?" The answers are always measurable:
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li><strong>Time saved:</strong> Fewer meetings, faster decisions, quicker resolutions</li>
                <li><strong>Velocity increased:</strong> Less rework, clearer requirements, faster reviews</li>
                <li><strong>Satisfaction improved:</strong> Team surveys, stakeholder NPS, retention rates</li>
                <li><strong>Preference signals:</strong> Teams requesting you, stakeholders praising you, promotions</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                Remember: What engineers dismiss as "soft" often has the "hardest" business impact.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/curriculum/advanced/module-b-ai-augmented"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              ← Previous: Module B
            </Link>
            <Link
              href="/curriculum"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Back to Curriculum
            </Link>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

