import React from 'react';

interface LevelChallengeProps {
  levelNumber: number;
  levelColor: string;
}

export const LevelChallenge: React.FC<LevelChallengeProps> = ({ levelNumber, levelColor }) => {
  if (levelNumber === 1) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-blue-200 shadow-lg">
        <div className="flex items-start mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              📝 The 3-Second Rule Challenge
            </h2>
            <p className="text-lg text-gray-700">
              Monday&apos;s Lesson: Leverage &quot;Structured Framing&quot; from the CYT Approach
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before you answer <strong>any question</strong> this week, you must pause for 3 seconds and mentally structure your response using the &quot;What, So What, Now What&quot; framework. No rambling, no meandering, no thinking out loud.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <h4 className="font-semibold text-red-900 mb-2">❌ What You&apos;re NOT Allowed to Do:</h4>
            <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
              <li>Answer immediately without pausing</li>
              <li>Start talking before you know where you&apos;re going</li>
              <li>Say &quot;um&quot; or &quot;so yeah&quot; as filler while you think</li>
              <li>Give a wall of text without structure</li>
              <li>Answer the question they asked without confirming it&apos;s the right question</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-green-900 mb-2">✅ What You MUST Do Instead:</h4>
            <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
              <li><strong>PAUSE</strong> for 3 seconds (literally count to 3)</li>
              <li><strong>WHAT:</strong> State the core issue or context in 1 sentence</li>
              <li><strong>SO WHAT:</strong> Explain why it matters in 1 sentence</li>
              <li><strong>NOW WHAT:</strong> Provide the action or next step in 1 sentence</li>
              <li>Speak with confidence (no hedging language)</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Applying the 3-Second Rule</h3>
          <p className="text-gray-700 mb-4">
            Let&apos;s take one of the Improv Toolkit prompts and apply structured framing:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
              <p className="font-semibold text-gray-900 mb-2">📋 Prompt: &quot;Your PM asks: &apos;Why is this taking so long?&apos;&quot;</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ Unstructured Response</h4>
                <div className="bg-red-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800 italic">
                    &quot;Oh, um, well, so basically the issue is that... I mean, there&apos;s a lot going on. First, the API was down yesterday, and then I had to refactor some stuff because the code review said... and also there&apos;s this dependency issue, and I&apos;m waiting on...&quot;
                  </p>
                  <p className="text-xs text-red-800 font-semibold mt-3">Why this fails:</p>
                  <p className="text-xs text-gray-600">Rambling, no clear point, sounds defensive, loses the listener&apos;s attention.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ Structured Response (3-Second Rule)</h4>
                <div className="bg-green-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800">
                    <strong>[Pause 3 seconds]</strong><br />
                    <strong>What:</strong> &quot;The auth service integration required more work than expected.&quot;<br />
                    <strong>So What:</strong> &quot;We had to refactor how we handle tokens to avoid security risks.&quot;<br />
                    <strong>Now What:</strong> &quot;I&apos;ll have it ready by Thursday with full test coverage.&quot;
                  </p>
                  <p className="text-xs text-green-800 font-semibold mt-3">Why this works:</p>
                  <p className="text-xs text-gray-600">Clear, confident, structured. The PM knows what happened, why it matters, and what to expect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (levelNumber === 2) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 mb-8 border-2 border-orange-200 shadow-lg">
        <div className="flex items-start mb-6">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              🚫 No Regular Questions Challenge
            </h2>
            <p className="text-lg text-gray-700">
              Monday&apos;s Lesson: Leverage &quot;Diagnostic Questions&quot; from the CYT Approach
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In your next session, you are <strong>NOT allowed to ask basic, generic questions</strong>. Instead, you must dig deeper.
            The goal is to move from surface-level questions to questions that uncover the <em>real</em> problem, motivation, or need.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <h4 className="font-semibold text-red-900 mb-2">❌ Avoid These Basic Questions:</h4>
            <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
              <li>&quot;What do you need?&quot;</li>
              <li>&quot;Can you explain more?&quot;</li>
              <li>&quot;What happened?&quot;</li>
              <li>&quot;How can I help?&quot;</li>
              <li>&quot;Is that all?&quot;</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-green-900 mb-2">✅ Instead, Ask Diagnostic Questions:</h4>
            <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
              <li>&quot;What&apos;s the #1 outcome you&apos;re hoping for here?&quot;</li>
              <li>&quot;Can you walk me through what you&apos;ve already tried?&quot;</li>
              <li>&quot;What would &apos;success&apos; look like for this?&quot;</li>
              <li>&quot;What&apos;s the impact if we don&apos;t solve this?&quot;</li>
              <li>&quot;What constraints are you working within?&quot;</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Turning Prompts into Deeper Questions</h3>
          <p className="text-gray-700 mb-4">
            Let&apos;s take one of the Improv Toolkit prompts and show how to dig deeper:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50">
              <p className="font-semibold text-gray-900 mb-2">📋 Prompt: &quot;A teammate asks for help with a bug.&quot;</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ Basic Questions (Don&apos;t Ask)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="bg-red-50 p-3 rounded">
                    <span className="text-red-900">&quot;What&apos;s the bug?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Too vague, gets a surface description</p>
                  </li>
                  <li className="bg-red-50 p-3 rounded">
                    <span className="text-red-900">&quot;Did you check the logs?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Assumptive, might insult their intelligence</p>
                  </li>
                  <li className="bg-red-50 p-3 rounded">
                    <span className="text-red-900">&quot;Can you explain it to me?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Lazy, puts all burden on them</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ Diagnostic Questions (Ask These)</h4>
                <ul className="space-y-2 text-sm">
                  <li className="bg-green-50 p-3 rounded">
                    <span className="text-green-900">&quot;What&apos;s the expected behavior versus what you&apos;re seeing?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Gets a clear problem definition</p>
                  </li>
                  <li className="bg-green-50 p-3 rounded">
                    <span className="text-green-900">&quot;What have you already tried, and what did you learn?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Shows respect, builds on their work</p>
                  </li>
                  <li className="bg-green-50 p-3 rounded">
                    <span className="text-green-900">&quot;Where in the flow does it break? User action → code → output?&quot;</span>
                    <p className="text-gray-600 text-xs mt-1">Narrows scope, teaches debugging process</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (levelNumber === 3) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border-2 border-purple-200 shadow-lg">
        <div className="flex items-start mb-6">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              🤝 The &quot;No Feedback Sandwich&quot; Challenge
            </h2>
            <p className="text-lg text-gray-700">
              Monday&apos;s Lesson: Leverage &quot;Collaborative Discovery&quot; from the CYT Approach
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This week, when giving or receiving feedback, you are <strong>NOT allowed to use the &quot;feedback sandwich&quot;</strong> (good → bad → good). 
            Instead, you must be direct, specific, and collaborative. The goal is to build trust through honesty, not politeness.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <h4 className="font-semibold text-red-900 mb-2">❌ What You&apos;re NOT Allowed to Do:</h4>
            <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
              <li>Use the &quot;feedback sandwich&quot; (compliment → criticism → compliment)</li>
              <li>Say &quot;It&apos;s fine, but...&quot; or &quot;This is good, however...&quot;</li>
              <li>Be vague: &quot;This could be better&quot;</li>
              <li>Make it personal: &quot;You always do this&quot;</li>
              <li>Get defensive when receiving feedback</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-green-900 mb-2">✅ What You MUST Do Instead:</h4>
            <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
              <li><strong>Be specific:</strong> Point to the exact code, behavior, or situation</li>
              <li><strong>Focus on impact:</strong> Explain the consequence, not the judgment</li>
              <li><strong>Collaborate:</strong> Ask questions, not demands (&quot;What if we...?&quot;)</li>
              <li><strong>When receiving feedback:</strong> Ask clarifying questions, not justifications</li>
              <li><strong>Follow up:</strong> Close the loop and show you heard them</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Direct, Collaborative Feedback</h3>
          <p className="text-gray-700 mb-4">
            Let&apos;s take a code review scenario and apply the CYT approach:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50">
              <p className="font-semibold text-gray-900 mb-2">📋 Prompt: &quot;You need to give feedback on a teammate&apos;s PR with nested conditionals.&quot;</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ The Feedback Sandwich</h4>
                <div className="bg-red-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800 italic">
                    &quot;Great work on this feature! The logic works perfectly. However, the nested conditionals are a bit hard to follow. But overall, really solid effort!&quot;
                  </p>
                  <p className="text-xs text-red-800 font-semibold mt-3">Why this fails:</p>
                  <p className="text-xs text-gray-600">The compliments dilute the message. They don&apos;t know what to fix or why it matters.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ Direct, Collaborative Feedback</h4>
                <div className="bg-green-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800">
                    &quot;In this function (lines 45-60), the 4 levels of nested conditionals make it hard to debug when something breaks. What if we extract each condition into its own function with a descriptive name? That way, we can test each piece independently.&quot;
                  </p>
                  <p className="text-xs text-green-800 font-semibold mt-3">Why this works:</p>
                  <p className="text-xs text-gray-600">Specific, explains the impact, offers a collaborative solution, and respects their work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (levelNumber === 4) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200 shadow-lg">
        <div className="flex items-start mb-6">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              🎓 The &quot;Teach, Don&apos;t Tell&quot; Challenge
            </h2>
            <p className="text-lg text-gray-700">
              Monday&apos;s Lesson: Leverage &quot;Impact Framing&quot; from the CYT Approach
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            This week, when a junior engineer asks for help, you are <strong>NOT allowed to give them the answer directly</strong>. 
            Instead, you must ask questions that guide them to discover the solution themselves. Your goal is to teach the <em>process</em>, not just solve the ticket.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <h4 className="font-semibold text-red-900 mb-2">❌ What You&apos;re NOT Allowed to Do:</h4>
            <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
              <li>&quot;Just do X&quot; (giving the answer without context)</li>
              <li>Take over their keyboard and fix it for them</li>
              <li>&quot;I&apos;ll handle it&quot; (removing the learning opportunity)</li>
              <li>Say &quot;This is how I&apos;d do it&quot; without explaining the trade-offs</li>
              <li>Leave them without understanding <em>why</em> it works</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-green-900 mb-2">✅ What You MUST Do Instead:</h4>
            <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
              <li><strong>Ask diagnostic questions:</strong> &quot;What have you tried so far?&quot;</li>
              <li><strong>Frame the impact:</strong> &quot;What happens if we don&apos;t handle this edge case?&quot;</li>
              <li><strong>Offer options:</strong> &quot;We could do X or Y. What are the trade-offs?&quot;</li>
              <li><strong>Let them struggle (a little):</strong> Growth happens in the discomfort zone</li>
              <li><strong>Follow up:</strong> &quot;Now that it&apos;s working, can you explain why?&quot;</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Example: Teaching vs. Telling</h3>
          <p className="text-gray-700 mb-4">
            A junior engineer asks: &quot;How do I make this API call work?&quot;
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-red-700 mb-2">❌ The &quot;Tell&quot; Approach</h4>
                <div className="bg-red-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800 italic">
                    &quot;You need to add an authorization header. Here, let me show you...&quot; <em>[takes over keyboard]</em>
                  </p>
                  <p className="text-xs text-red-800 font-semibold mt-3">Why this fails:</p>
                  <p className="text-xs text-gray-600">They learn the answer, but not how to find it themselves next time.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ The &quot;Teach&quot; Approach</h4>
                <div className="bg-green-50 p-4 rounded space-y-2">
                  <p className="text-sm text-gray-800">
                    &quot;What error are you seeing? <em>[They show 401]</em> That&apos;s an authentication error. What does the API doc say about auth? <em>[They check]</em> Now, where in your code do you set headers? What happens if we add that header?&quot;
                  </p>
                  <p className="text-xs text-green-800 font-semibold mt-3">Why this works:</p>
                  <p className="text-xs text-gray-600">They learn how to debug, read docs, and solve it themselves next time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8 border-2 border-gray-200 shadow-lg">
      <div className="flex items-start mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 text-white" style={{ backgroundColor: levelColor }}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Level {levelNumber} Weekly Challenge
          </h2>
          <p className="text-lg text-gray-700">
            Monday&apos;s Lesson: Apply the CYT Approach Framework
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This week, focus on applying the core techniques from this level in your daily work and interactions.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-sm text-gray-700">
            <strong>Your mission:</strong> Practice the core technique at least 3 times this week in real situations. Reflect on what worked and what didn&apos;t.
          </p>
        </div>
      </div>
    </div>
  );
};

