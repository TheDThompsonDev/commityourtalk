import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "The Learning System - Commit Your Talk",
  description: "A framework for internalizing the CYT approach and making it a natural part of your communication style.",
};

export default function LearningSystemPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <PageHeader
          title="The Learning System"
          subtitle="Part 3: How to Internalize and Practice These Skills"
          description="A framework for making the CYT approach a natural, integrated part of your communication style"
        />

        <Container maxWidth="5xl" className="py-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Five Core Patterns to Internalize</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The CYT approach isn't about memorizing scripts. It's about internalizing patterns. These aren't just communication techniques; they're thinking tools. The conversation is just the external expression of clear thinking.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-2">1. Diagnose before prescribing</h3>
                <p className="text-sm text-gray-600">Understand before solving</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-2">2. Frame impact in their terms</h3>
                <p className="text-sm text-gray-600">What matters to THEM</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-600">
                <h3 className="font-bold text-gray-900 mb-2">3. Create ownership through discovery</h3>
                <p className="text-sm text-gray-600">Guide, don't tell</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-600">
                <h3 className="font-bold text-gray-900 mb-2">4. Structure when overwhelmed</h3>
                <p className="text-sm text-gray-600">What/So What/Now What</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-pink-600 md:col-span-2 md:max-w-md md:mx-auto">
                <h3 className="font-bold text-gray-900 mb-2">5. Vision cast to inspire action</h3>
                <p className="text-sm text-gray-600">Paint the better future</p>
              </div>
            </div>
          </div>

          {/* Three-Stage Learning Path */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Three-Stage Learning Path</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-200">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Recognition</h3>
                <p className="text-center text-gray-600 mb-6 font-semibold">Weeks 1-2</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span>Read scripts daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span>Identify which conversations you're currently having "defaultly"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">→</span>
                    <span>Notice the moments AFTER conversations where you think "I should have said..."</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Preparation</h3>
                <p className="text-center text-gray-600 mb-6 font-semibold">Weeks 3-4</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span>Before each meeting, identify which script might apply</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span>Write out your key points using the frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">→</span>
                    <span>Practice the opening lines out loud</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-purple-200">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Integration</h3>
                <p className="text-center text-gray-600 mb-6 font-semibold">Weeks 5+</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span>The frameworks become natural</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span>You start creating your own variations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">→</span>
                    <span>You teach others the patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Daily Practice */}
          <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Daily Practice</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 mb-4 border-2 border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Morning Planning
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">1.</span>
                      <span>Look at calendar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">2.</span>
                      <span>Identify one conversation to practice CYT approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">3.</span>
                      <span>Write out your What/So What/Now What</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 mb-4 border-2 border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Evening Reflection
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">1.</span>
                      <span>Which conversations went well?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">2.</span>
                      <span>Which defaulted to old patterns?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">3.</span>
                      <span>What would you do differently?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The Failure Protocol */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 mb-12 border-2 border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Failure Protocol
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When a CYT approach fails (and it will), use this protocol to learn and adapt:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-bold text-red-600 mb-2">1. Analyze</div>
                <p className="text-sm text-gray-700">What resistance did you hit? (Refer to the "Graceful Pivot" scripts)</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-bold text-orange-600 mb-2">2. Adjust</div>
                <p className="text-sm text-gray-700">Which part of the script needs modification?</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-bold text-green-600 mb-2">3. Retry</div>
                <p className="text-sm text-gray-700">Use the adjusted version next time</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-bold text-blue-600 mb-2">4. Share</div>
                <p className="text-sm text-gray-700">Tell someone else what you learned</p>
              </div>
            </div>
          </div>

          {/* Building Your Own Scripts */}
          <div className="bg-white rounded-2xl p-8 mb-12 border-2 border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Building Your Own Scripts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              As you internalize the patterns, create your own scripts for situations you encounter repeatedly:
            </p>
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Context
                </h3>
                <p className="text-gray-600 ml-11">When does this conversation happen?</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Default
                </h3>
                <p className="text-gray-600 ml-11">What typically goes wrong?</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  CYT Approach
                </h3>
                <p className="text-gray-600 ml-11">The improved version</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Phases
                </h3>
                <p className="text-gray-600 ml-11">Break it into 3-5 steps</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Nuances
                </h3>
                <p className="text-gray-600 ml-11">What makes this work?</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Building blocks
                </h3>
                <p className="text-gray-600 ml-11">What's the transferable principle?</p>
              </div>
            </div>
          </div>

          {/* Cultural Adaptation */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-12 border-2 border-green-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Cultural Adaptation Layer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These scripts assume Western, particularly American, business culture. Adapt for different cultural contexts:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">High-Context Cultures</h3>
                <p className="text-sm text-gray-600 mb-3">(Asian, Middle Eastern)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Add more relationship building</li>
                  <li>• Indirect disagreement</li>
                  <li>• Honor hierarchies more explicitly</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Direct Cultures</h3>
                <p className="text-sm text-gray-600 mb-3">(German, Dutch)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Less softening language</li>
                  <li>• More data, less emotion</li>
                  <li>• Shorter, more efficient</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">Relationship-First Cultures</h3>
                <p className="text-sm text-gray-600 mb-3">(Latin American, African)</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Personal check-ins first</li>
                  <li>• More storytelling</li>
                  <li>• Group harmony emphasis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Integration */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">The Ultimate Goal</h2>
            <p className="text-xl text-slate-200 mb-6 max-w-3xl mx-auto">
              You become the person others seek out when conversations get hard, because you make the complex simple, the tense calm, and the stuck unstuck.
            </p>
            <p className="text-lg text-slate-300 italic max-w-2xl mx-auto mb-8">
              "Every difficult conversation is an opportunity to build trust, clarify thinking, and move forward. The CYT approach just gives you the tools to do it consistently."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/pWGt6JMV9t"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Join Discord to Practice
              </a>
              <Link
                href="/curriculum"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all shadow-lg border-2 border-white"
              >
                Back to Curriculum
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

