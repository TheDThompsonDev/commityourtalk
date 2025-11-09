import { notFound } from "next/navigation";
import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { curriculum } from "@/lib/data/curriculum";
import { LevelChallenge } from "./levelChallenges";
import LevelHeader from "@/components/curriculum/LevelHeader";
import ScriptCard from "@/components/curriculum/ScriptCard";
import LevelNavigation from "./LevelNavigation";
import Container from "@/components/ui/Container";

interface LevelDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return curriculum.map((level) => ({
    id: level.id,
  }));
}

export async function generateMetadata({ params }: LevelDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const level = curriculum.find((l) => l.id === id);

  if (!level) {
    return {
      title: "Level Not Found - Commit Your Talk",
    };
  }

  return {
    title: `${level.title} - Level ${level.level} - Commit Your Talk`,
    description: level.description,
  };
}

export default async function LevelDetailPage({ params }: LevelDetailPageProps) {
  const { id } = await params;
  const level = curriculum.find((l) => l.id === id);

  if (!level) {
    notFound();
  }

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <LevelHeader level={level} />

        <Container className="py-16">
          {level.level === 1 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border-2 border-blue-200 shadow-xl">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Welcome to the CYT Approach
                  </h2>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Core Philosophy</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Commit Your Talk</strong> is designed to transform software engineers into exceptional communicators and leaders. 
                    We believe the single greatest gap in a technical career isn&apos;t coding skill; it&apos;s the ability to <strong>diagnose</strong> problems, 
                    <strong>align</strong> teams, and <strong>articulate</strong> value.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                  The CYT Approach is a framework for becoming a technical diagnostician. This curriculum is built on a single premise: <strong>The best way to communicate is to stop <em>telling</em> and start <em>discovering</em>.</strong>
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Your Journey: The 5 Core Techniques</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    An engineer who just gives answers vs An engineer who &quot;diagnoses&quot; and asks the right questions to uncover the <em>real</em> problem. 
                    This creates inviting conversations, builds trust, and makes you the person who <em>actually</em> solves the problem, not just the ticket.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 shrink-0 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Level 1: Structured Framing</p>
                        <p className="text-sm text-gray-600">How to organize your thoughts under pressure to build confidence and clarity.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center mr-3 shrink-0 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Level 2: Diagnostic Questions</p>
                        <p className="text-sm text-gray-600">How to ask questions that uncover the <em>true</em> problem beneath the surface request.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-3 shrink-0 font-bold text-sm">
                        4
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Level 4: Impact Framing</p>
                        <p className="text-sm text-gray-600">How to connect a technical problem to a business outcome (the &quot;so what?&quot;).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mr-3 shrink-0 font-bold text-sm">
                        5
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Level 5: Collaborative Discovery</p>
                        <p className="text-sm text-gray-600">How to guide someone to a solution so they feel ownership (the &quot;what if?&quot;).</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-pink-100 text-pink-700 rounded-full flex items-center justify-center mr-3 shrink-0 font-bold text-sm">
                        8
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Level 8: Vision Casting</p>
                        <p className="text-sm text-gray-600">How to inspire action by painting a clear, compelling picture of the future.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                  <p className="text-gray-800 leading-relaxed font-medium italic">
                    &quot;This curriculum is your path from a junior developer who <strong>answers tickets</strong> to a leader who <strong>defines the work</strong>. This will change your career and your life.&quot;
                  </p>
                </div>
              </div>
            </div>
          )}

          {level.level > 1 && (
            <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Building on Your Foundation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {level.level === 2 && (
                  <>Now that you have a structure (Structured Framing from Level 1), you&apos;ll learn the most important skill in engineering: <strong>Diagnostic Questions</strong>. Your job isn&apos;t to be a &quot;feature factory&quot; but a &quot;problem-solver.&quot; This level teaches you to stop taking requests at face value and start asking the questions that uncover the <em>real</em> problem.</>
                )}
                {level.level === 3 && (
                  <>This is where we apply your new skills (Structured Framing + Diagnostic Questions) to the most common—and most dangerous—conversations you&apos;ll have: talking to your peers. This level is all about <strong>handling difficult conversations</strong> about code, ideas, and feedback, both as the giver and the receiver.</>
                )}
                {level.level === 4 && (
                  <>This level is where you transition from &quot;doer&quot; to &quot;multiplier.&quot; Your value is no longer just the code you write; it&apos;s your ability to make <em>other engineers</em> better. You&apos;ll master the art of teaching by asking, not telling, using <strong>Impact Framing</strong> to connect technical choices to real-world consequences.</>
                )}
                {level.level === 5 && (
                  <>You&apos;re now moving into leadership. This level is about handling difficult conversations <em>up and across</em>. You&apos;ll learn to manage your manager, mediate conflict, and advocate for your team using <strong>Collaborative Discovery</strong> to guide stakeholders to solutions where they feel ownership.</>
                )}
                {level.level === 6 && (
                  <>Your focus now expands outside your team. You will learn to speak the language of Product, Design, and Marketing. This is where you master <strong>Impact Framing</strong> to translate technical work into <em>business value</em>—the #1 skill of all Staff-plus and Principal engineers.</>
                )}
                {level.level === 7 && (
                  <>You are now operating at the Staff/Principal level. Your job is no longer to <em>work on</em> the system; your job is to <em>redesign</em> the system. This means influencing company-wide strategy, leading large-scale initiatives, and combining <strong>all CYT techniques</strong> to drive organizational change.</>
                )}
                {level.level === 8 && (
                  <>Your influence now extends beyond your company. This level is about building your professional brand, crafting impactful presentations, and inspiring innovation using <strong>Vision Casting</strong>—painting a clear, compelling, and emotional picture of the future.</>
                )}
                {level.level === 9 && (
                  <>Your focus is now on <em>scale</em>. How do you take your &quot;big idea&quot; from Level 8 and build a community or a movement around it? This level is about leading open-source projects, building a content brand, and shaping industry conversations through masterful <strong>Vision Casting</strong>.</>
                )}
                {level.level === 10 && (
                  <>This is the capstone. You will now combine <strong>all 5 CYT techniques</strong>—Framing, Diagnosis, Impact, Discovery, and Vision—to deliver high-stakes keynotes that don&apos;t just <em>inform</em> an audience, but <em>change</em> them.</>
                )}
              </p>
            </div>
          )}

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                CYT Playbook
              </h2>
              <div className="space-y-8">
                {level.playbook.map((script, index) => (
                  <ScriptCard key={index} script={script} accentColor={level.color} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Improv Toolkit Prompts
              </h2>
              <p className="text-gray-600 mb-6">
                Use these prompts for breakout practice sessions:
              </p>
              <div className="space-y-4">
                {level.improvToolkitPrompts.map((prompt, index) => (
                  <div
                    key={index}
                    className="border-l-4 pl-6 py-3"
                    style={{ borderColor: level.color }}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {prompt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <LevelChallenge levelNumber={level.level} levelColor={level.color} />
            
            <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100 shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                <svg className="w-8 h-8 mr-3" style={{ color: level.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Your Action Plan: Implementing {level.coreTechnique.name}
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mental Map: The CYT Thought Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-white" style={{ backgroundColor: level.color }}>
                        1
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">PAUSE before responding</p>
                        <p className="text-sm text-gray-600">Take 2 seconds. Your first instinct is often to &quot;tell&quot; not &quot;discover&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-white" style={{ backgroundColor: level.color }}>
                        2
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">DIAGNOSE the real problem</p>
                        <p className="text-sm text-gray-600">Ask yourself: &quot;What are they <em>really</em> asking for? What&apos;s the need behind the request?&quot;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-white" style={{ backgroundColor: level.color }}>
                        3
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">FRAME your response using the technique</p>
                        <p className="text-sm text-gray-600">
                          {level.level === 1 && "Use 'What, So What, Now What' structure"}
                          {level.level === 2 && "Ask open-ended questions: 'What,' 'How,' 'Why,' 'Can you walk me through...'"}
                          {level.level >= 3 && `Apply ${level.coreTechnique.name} to guide the conversation`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-white" style={{ backgroundColor: level.color }}>
                        4
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">LISTEN actively to their answer</p>
                        <p className="text-sm text-gray-600">Don&apos;t plan your next question. Actually hear what they&apos;re saying</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 font-bold text-white" style={{ backgroundColor: level.color }}>
                        5
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">ADAPT and follow up</p>
                        <p className="text-sm text-gray-600">Use their answer to ask your next diagnostic question</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 This Week&apos;s Practice</h3>
                  <p className="text-gray-700 mb-4">
                    Practice {level.coreTechnique.name} in these real-world situations:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">💼 At Work</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• In your next standup or 1-on-1</li>
                        <li>• When receiving a vague task or request</li>
                        <li>• During code review (giving or receiving)</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">🏠 In Life</h4>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>• Explaining something technical to non-technical friends/family</li>
                        <li>• Resolving a miscommunication or conflict</li>
                        <li>• Making a decision with your partner/roommate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-2 rounded-lg p-6" style={{ borderColor: level.color }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Quick Reference Card</h3>
                  <p className="text-sm text-gray-600 mb-4">Save this mental checklist for quick reference:</p>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                    <p className="text-gray-900 mb-2">Before you speak, ask yourself:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>☐ Have I paused to think?</li>
                      <li>☐ Am I about to &quot;tell&quot; instead of &quot;discover&quot;?</li>
                      <li>☐ What&apos;s the real problem here?</li>
                      <li>☐ What question would help me understand better?</li>
                      <li>☐ Am I using {level.coreTechnique.name}?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <LevelNavigation curriculum={curriculum} currentLevel={level} />
      </div>
    </MainLayout>
  );
}
