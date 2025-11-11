import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Module A: The Remote-First Leader - Advanced Playbooks",
  description: "Master async communication across time zones and cultural boundaries with front-loaded context and structured collaboration.",
};

export default function ModuleAPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
          <Container maxWidth="5xl">
            <div className="mb-4">
              <div className="text-blue-200 font-semibold mb-2">Module A</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                The Remote-First Leader
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                Async Communication
              </p>
            </div>
            <p className="text-lg text-blue-50 mt-6 max-w-3xl">
              Async communication fails when we assume shared context that doesn't exist. These scripts teach you to front-load context, make implicit things explicit, and create clarity across time zones and cultural boundaries.
            </p>
          </Container>
        </div>

        <Container maxWidth="5xl" className="py-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Concept: The Context Maximizer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Async communication fails when we assume shared context that doesn't exist. The golden rule:
            </p>
            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <p className="text-lg font-semibold text-gray-900 italic">
                "In async, you can't see faces or hear tone. Overcompensate with context and warmth."
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              Every piece of context provided saves a 24-hour round trip. Front-loading prevents follow-ups.
            </p>
          </div>

          {/* Script A.1 */}
          <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-gray-200 shadow-lg">
            <div className="border-l-4 border-blue-600 pl-6 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Script A.1: The Async Code Review
              </h2>
              <p className="text-gray-600">Across Time Zones</p>
            </div>

            <div className="mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-red-900 mb-3">❌ The Default Async Review</h3>
                <div className="bg-white rounded p-4 font-mono text-sm mb-4">
                  <p className="text-gray-800">(PR comment at 11 PM their time)</p>
                  <p className="text-gray-800 mt-2">"This is wrong. The service will crash if user_id is null. Please fix."</p>
                </div>
                <p className="text-gray-700 italic">
                  → They wake up demoralized, unclear on the fix, relationship strained
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">✅ The CYT Async Approach</h3>
                <div className="bg-white rounded-lg p-6 font-mono text-sm space-y-4">
                  <div>
                    <p className="font-bold text-gray-900">Hey [Name]! 👋</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-blue-600">## Timeline Context</p>
                    <p className="text-gray-800">I'm reviewing this at 2 PM my time (11 PM yours), so no rush on response - I know you'll see this tomorrow.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## What I'm Seeing</p>
                    <p className="text-gray-800">The implementation looks solid overall - particularly love the error handling on line 47.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## The Concern</p>
                    <p className="text-gray-800">I noticed on line 82, we're accessing `user_id` without a null check:</p>
                    <p className="text-gray-800 bg-gray-100 p-2 rounded mt-2">`const userName = users[user_id].name;`</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## The Potential Impact</p>
                    <p className="text-gray-800">If `user_id` is null (which can happen when anonymous users hit this endpoint), this would throw a TypeError in production.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Suggested Fix</p>
                    <p className="text-gray-800 mb-2">Option A (Quick): Add a null check:</p>
                    <p className="text-gray-800 bg-gray-100 p-2 rounded mb-3">`const userName = user_id ? users[user_id]?.name : 'Anonymous';`</p>
                    <p className="text-gray-800">Option B (Robust): We could add validation earlier in the function to handle all edge cases.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Your Thoughts?</p>
                    <p className="text-gray-800">What do you think makes more sense given the timeline? I'm happy with either approach, just want to prevent the production error.</p>
                    <p className="text-gray-800 mt-3">PS: If this comment feels too detailed, let me know! Still calibrating my async review style with the team 😊</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200">
              <h3 className="font-bold text-gray-900 mb-3">🧠 Deep Nuance Explanation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Timezone empathy:</strong> Acknowledging time differences shows respect and removes urgency pressure
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>The compliment sandwich evolution:</strong> Instead of fake praise, find something genuinely good. This makes the criticism feel balanced, not targeted
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Options, not orders:</strong> Providing multiple fixes gives agency to the PR author, maintaining their ownership
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>The vulnerability note:</strong> The "PS" shows you're also learning, which equalizes the power dynamic
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Building block:</strong> In async, you can't see faces or hear tone. Overcompensate with context and warmth
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Cultural awareness:</strong> Direct criticism norms vary by culture. Options and questions work universally
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Script A.2 */}
          <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-gray-200 shadow-lg">
            <div className="border-l-4 border-blue-600 pl-6 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Script A.2: The Written-Only Stakeholder Update
              </h2>
              <p className="text-gray-600">When Things Are Behind</p>
            </div>

            <div className="mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-red-900 mb-3">❌ The Default Async Update</h3>
                <div className="bg-white rounded p-4 font-mono text-sm mb-4">
                  <p className="text-gray-800">"Hi all, quick update: The project is delayed by two weeks due to technical issues. Will keep you posted."</p>
                </div>
                <p className="text-gray-700 italic">
                  → Executives panic, trust erodes, emergency meetings get scheduled
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">✅ The CYT Async Approach</h3>
                <div className="bg-white rounded-lg p-6 font-mono text-sm space-y-4">
                  <div>
                    <p className="font-bold text-gray-900">Subject: Project X Update - Revised Timeline with Mitigation Plan</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900">Hi [Stakeholder Names],</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Executive Summary</p>
                    <p className="text-gray-800">Project X delivery is moving from March 1 to March 15. This message contains the why, the impact, and our mitigation plan.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## What Changed (Root Cause)</p>
                    <p className="text-gray-800">On Tuesday, we discovered our payment provider deprecated an API we depend on (with 10 days notice instead of their usual 90). This breaks our checkout flow.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Impact Assessment</p>
                    <ul className="text-gray-800 space-y-1 ml-4">
                      <li>- Customer Impact: NONE (current system continues working)</li>
                      <li>- Revenue Impact: NONE (we're not touching production until ready)</li>
                      <li>- Timeline Impact: 2 weeks to implement their new API safely</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Our Mitigation Plan</p>
                    <ol className="text-gray-800 space-y-1 ml-4">
                      <li>1. <strong>Week 1</strong> (Feb 19-23): Implement new payment API</li>
                      <li>2. <strong>Week 2</strong> (Feb 26-Mar 1): Extended testing with real transaction simulations</li>
                      <li>3. <strong>Week 3</strong> (Mar 4-8): Staged rollout to 5% of traffic</li>
                      <li>4. <strong>Week 4</strong> (Mar 11-15): Full rollout if metrics are green</li>
                    </ol>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## What We Need From You</p>
                    <ul className="text-gray-800 space-y-1 ml-4">
                      <li>- ✅ No action needed unless you have concerns</li>
                      <li>- 📅 We'll send updates every Monday at 2 PM</li>
                      <li>- 🚨 If this timeline doesn't work for business reasons, please flag by EOD tomorrow</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## The Silver Lining</p>
                    <p className="text-gray-800">The new API actually reduces transaction fees by 0.3%, which will save us ~$50K annually.</p>
                  </div>

                  <div>
                    <p className="font-bold text-blue-600">## Questions?</p>
                    <p className="text-gray-800">I'm monitoring email actively today. For urgent concerns, I'm also available at [phone number].</p>
                    <p className="text-gray-800 mt-2">Best,<br/>[Your name]</p>
                    <p className="text-gray-600 text-xs mt-3">P.S. Full technical details are in the appendix below for those interested.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200">
              <h3 className="font-bold text-gray-900 mb-3">🧠 Deep Nuance Explanation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>The pre-emptive strike:</strong> By addressing all likely questions upfront, you prevent panic-driven reply-alls
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Visual hierarchy:</strong> Formatting with headers makes skimming easy for busy executives
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>The "No action needed" gift:</strong> Executives love updates that don't create work for them
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Quantified impact:</strong> Specific numbers (dates, percentages, dollars) build confidence
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>The silver lining technique:</strong> Always include ONE positive to prevent doom spiraling
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">•</span>
                  <div>
                    <strong>Building block:</strong> In async, you're competing for attention. Make consumption effortless
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/curriculum"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              ← Back to Curriculum
            </Link>
            <Link
              href="/curriculum/advanced/module-b-ai-augmented"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center justify-end"
            >
              Next: Module B - AI-Augmented Engineer →
            </Link>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

