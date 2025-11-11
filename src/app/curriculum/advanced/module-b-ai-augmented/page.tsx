import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Module B: The AI-Augmented Engineer - Commit Your Talk",
  description: "Reframe human value in an AI-augmented world. Shift from 'AI vs. humans' to 'humans with AI vs. problems.'",
};

export default function ModuleBPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-16">
          <Container maxWidth="5xl">
            <div className="mb-4">
              <div className="text-green-200 font-semibold mb-2">Module B</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                The AI-Augmented Engineer
              </h1>
              <p className="text-xl text-green-100 mt-2">
                Value Reframing
              </p>
            </div>
            <p className="text-lg text-green-50 mt-6 max-w-3xl">
              These conversations aren't about defending against AI but reframing human value in an AI-augmented world. The key: shift from "AI vs. humans" to "humans with AI vs. problems."
            </p>
          </Container>
        </div>

        <Container maxWidth="5xl" className="py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Concept: The Value Reframer</h2>

            {/* Script B.1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Script B.1 - "AI Will Replace Our Jobs" Team Discussion
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-2">Context:</p>
                <p className="text-gray-700">Your team is anxious after seeing another AI coding demo, morale is dropping.</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-red-600 mb-3">The Default Response:</h4>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-2">
                  <p className="text-gray-800">"Don't worry, AI can't replace human creativity and judgment! We'll be fine!"</p>
                </div>
                <p className="text-sm text-gray-600 italic">(Empty reassurance that no one believes)</p>
              </div>

              <div>
                <h4 className="font-bold text-green-600 mb-3">The CYT Approach:</h4>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <p className="text-gray-800 font-medium mb-4">"I get it. I watched that demo too, and my first thought was 'well, there goes my job.'"</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Phase 1 - Acknowledge Reality:</p>
                      <p className="text-gray-700">"Let's be real: AI can now write a CRUD app faster than any of us. That's just true."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 2 - The Historical Pattern:</p>
                      <p className="text-gray-700">"But here's what I've learned from history: When calculators arrived, mathematicians didn't disappear - they started solving harder problems. When compilers arrived, we didn't need fewer programmers - we built more ambitious software."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 3 - The Value Shift:</p>
                      <p className="text-gray-700 mb-2">"AI is really good at the 'what' - writing code that follows patterns. But our value was never just writing code. Our value is:</p>
                      <ul className="list-disc ml-6 text-gray-700">
                        <li>Deciding WHAT to build (AI doesn't know your business)</li>
                        <li>Deciding what NOT to build (AI will build whatever you ask)</li>
                        <li>Knowing when code ISN'T the answer (AI only knows code)</li>
                        <li>Taking responsibility when things break (AI can't be sued)"</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 4 - The Practical Pivot:</p>
                      <p className="text-gray-700">"So here's my proposal: Let's become the team that's BEST at using AI. Let's be the ones teaching it our domain, reviewing its code, and using it to ship 10x faster. We don't compete with AI - we become the team that wields it best."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 5 - The Immediate Action:</p>
                      <p className="text-gray-700">"This sprint, everyone pick one tedious task and try to automate it with AI. Share what works in our Friday demo. Let's learn this together."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Deep Nuance Explanation:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Validation before reframing:</strong> Dismissing fear makes it grow. Acknowledging it allows processing.</li>
                    <li><strong>Historical precedent:</strong> Past automation fears that didn't materialize provide perspective.</li>
                    <li><strong>The responsibility argument:</strong> This is crucial - businesses need humans who can be accountable.</li>
                    <li><strong>From threat to tool:</strong> Reframing AI as a weapon you wield, not an enemy you fight.</li>
                    <li><strong>Building block:</strong> Give people agency over their adaptation rather than promising everything will be OK.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Script B.2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Script B.2 - Defending Human Code Review Value to Management
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-2">Context:</p>
                <p className="text-gray-700">Executive suggests replacing code reviews with AI since "AI can catch bugs better than humans."</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-red-600 mb-3">The Default Response:</h4>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-2">
                  <p className="text-gray-800">"AI can't understand context and nuance like humans can! We need human review!"</p>
                </div>
                <p className="text-sm text-gray-600 italic">(Sounds defensive and luddite-ish)</p>
              </div>

              <div>
                <h4 className="font-bold text-green-600 mb-3">The CYT Approach:</h4>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <p className="text-gray-800 font-medium mb-4">"You're absolutely right that AI is incredible at catching bugs. In fact, we should definitely add AI review as a first pass."</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Phase 1 - Agree and Expand:</p>
                      <p className="text-gray-700">"AI will catch syntax errors, security vulnerabilities, and performance issues faster than any human. Let's use it."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 2 - The Different Dimension:</p>
                      <p className="text-gray-700">"But here's what I've learned: Code review isn't really about catching bugs anymore. That's what tests and linters are for."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 3 - The Real Value:</p>
                      <p className="text-gray-700 mb-2">"Human code review is about:</p>
                      <ul className="list-disc ml-6 text-gray-700">
                        <li><strong>Knowledge transfer:</strong> 'Why did you solve it this way?' teaches the team</li>
                        <li><strong>Architecture alignment:</strong> 'This works but doesn't fit our patterns' maintains consistency</li>
                        <li><strong>Business logic validation:</strong> 'This code works but solves the wrong problem'</li>
                        <li><strong>Team ownership:</strong> The reviewer becomes co-responsible for the code"</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 4 - The Hybrid Proposal:</p>
                      <p className="text-gray-700">"What if we do this: AI reviews first for all the mechanical issues. Then humans review for intention, learning, and ownership. We get faster AND better."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 5 - The Measurement:</p>
                      <p className="text-gray-700">"Let's run an experiment for one month: Track bugs that AI catches vs. architectural issues humans catch. I bet we'll find they're complementary, not redundant."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Deep Nuance Explanation:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Never position as "either/or":</strong> That's a losing argument. Position as "both/and."</li>
                    <li><strong>Redefine the value:</strong> If you argue AI can't do X, you'll lose when it can. Instead, argue that X isn't the real value.</li>
                    <li><strong>The experiment frame:</strong> Executives love data. Propose measurement instead of philosophy.</li>
                    <li><strong>Building block:</strong> Don't defend the old way - design the new way that includes both.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Script B.3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Script B.3 - Collaborating with AI Pair Programming Tools
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-semibold text-gray-900 mb-2">Context:</p>
                <p className="text-gray-700">A teammate refuses to use GitHub Copilot/Cursor, saying "real programmers don't need AI."</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-red-600 mb-3">The Default Response:</h4>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-2">
                  <p className="text-gray-800">"You're being stubborn. Everyone else is using it. You're slowing us down."</p>
                </div>
                <p className="text-sm text-gray-600 italic">(Creates resentment and deeper entrenchment)</p>
              </div>

              <div>
                <h4 className="font-bold text-green-600 mb-3">The CYT Approach:</h4>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <p className="text-gray-800 font-medium mb-4">(Private conversation)<br/>"Hey, I noticed you're not using Copilot. I'm genuinely curious - what's your concern?"</p>
                  <p className="text-gray-700 mb-4 italic">(They explain: "It makes developers lazy. They don't understand what they're writing.")</p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900">Phase 1 - Validate the Concern:</p>
                      <p className="text-gray-700">"That's a really valid concern. I've seen junior devs accept suggestions they don't understand. That's definitely a risk."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 2 - Share Your Experience:</p>
                      <p className="text-gray-700">"Here's how I think about it: I don't use Copilot to write code FOR me. I use it to write boilerplate so I can focus on the interesting parts."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 3 - The Analogy:</p>
                      <p className="text-gray-700">"It's like using an IDE instead of Notepad. Sure, I COULD write without autocomplete, but why would I? My value isn't in remembering syntax - it's in solving problems."</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 4 - The Challenge Frame:</p>
                      <p className="text-gray-700">"Actually, I find AI makes me a BETTER programmer because I have to review more code. Every suggestion is a mini code review. I'm constantly asking 'Is this right? Is this our pattern?'"</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Phase 5 - The No-Pressure Offer:</p>
                      <p className="text-gray-700">"Want to pair with me for an hour and see how I use it? No pressure to adopt it - I'm just curious what you'd think. You might spot risks I'm missing."</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-blue-900 mb-2">Deep Nuance Explanation:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1">
                    <li><strong>Respect the philosophy:</strong> "Real programmers" identity is important. Don't attack it.</li>
                    <li><strong>The expertise frame:</strong> Position AI as requiring MORE skill to use well, not less.</li>
                    <li><strong>Personal experience over prescription:</strong> "Here's how I use it" is better than "You should use it."</li>
                    <li><strong>The reverse psychology:</strong> Asking them to critique your process makes them more open to it.</li>
                    <li><strong>Building block:</strong> Identity-based resistance requires identity-compatible solutions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Link
              href="/curriculum/advanced/module-a-remote-first"
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              ← Previous: Module A
            </Link>
            <Link
              href="/curriculum/advanced/module-c-impact-quantifier"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Next: Module C →
            </Link>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

