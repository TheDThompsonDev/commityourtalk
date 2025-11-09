import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "CYT Approach Framework - Commit Your Talk",
  description: "Learn the CYT Approach Framework that transforms engineers from order-takers into confident technical leaders through diagnostic questioning.",
};

export default function CYTFrameworkPage() {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <PageHeader
          title="The CYT Approach Framework"
          subtitle="The Diagnostician's Model for Engineering Leadership"
          description='Stop "telling," start "discovering." Learn the framework that transforms engineers from order-takers into confident technical leaders.'
        />

        <Container maxWidth="5xl" className="py-16">
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is the CYT Approach?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The <strong>CYT Approach</strong> is a framework for becoming a true technical diagnostician.  It&apos;s built on the principle that the most confident and effective communicators don&apos;t <em>push</em> their ideas; they <strong>pull</strong> information through diagnostic questioning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              For an engineer, this is not &quot;sales.&quot; This is a <strong>Root Cause Analysis for human beings</strong>.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-800 leading-relaxed">
                <strong>You don&apos;t just fix the symptom</strong> (a PM&apos;s vague ticket).<br />
                <strong>You use questions to find the disease</strong> (the underlying business problem).
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              This framework is the key to building confidence, because it gives you a <strong>logical process to follow</strong>. When you have a process, you are no longer &quot;winging it&quot; or &quot;speaking from opinion.&quot; You are a professional running a diagnostic, and that gives you all the authority and confidence in the world.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Goal: Stop {'"'}Telling,{'"'} Start {'"'}Discovering{'"'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  A &quot;Default&quot; Engineer (Afraid to Speak)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Waits for instructions. Hopes the ticket is clear.</li>
                  <li>• When something is wrong (like tech debt), they stay silent because they don&apos;t know how to bring it up without sounding like a complainer.</li>
                  <li>• Reacts to problems instead of preventing them.</li>
                  <li>• Feels like they&apos;re &quot;bothering&quot; people with questions.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  A &quot;CYT&quot; Engineer (Confident Diagnostician)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Never starts with a statement.</strong> They start with a question.</li>
                  <li>• They &quot;vocalize when something is wrong&quot; by reframing it as a <strong>diagnostic question about business impact</strong>.</li>
                  <li>• Prevents problems by uncovering hidden risks early.</li>
                  <li>• Seen as a strategic partner, not a code monkey.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              The Three Stages of a CYT Diagnostic Conversation
            </h2>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Stage 1: The Setup (The &quot;Intent Statement&quot;)
                </h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This is how you confidently take control of any meeting, from a 1-on-1 to an all-hands. You establish your competence and set the agenda.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-900 mb-2">❌ The Engineer&apos;s Problem:</h4>
                <p className="text-gray-700">
                  You&apos;re afraid to speak in a meeting because you&apos;re &quot;on the spot.&quot; You&apos;re in a reactive posture, waiting for someone to ask you a question you might not know the answer to.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2">✅ The CYT Solution:</h4>
                <p className="text-gray-700 mb-3">
                  You start the conversation with an <strong>Intent Statement</strong>. This is your opening move that frames you as a professional diagnostician.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>The Subtle Nuance:</strong> You are not asking for permission. You are stating your purpose as an expert and then asking for collaboration.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold text-gray-900 mb-3">🧠 The Psychology & How-To</h4>
                <p className="text-gray-700 mb-3">Your statement has two parts:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><strong>Your Goal (The &quot;Why&quot;):</strong> &quot;My only goal for this meeting is...&quot;</li>
                  <li><strong>The Collaborative Question (The &quot;How&quot;):</strong> &quot;...Does that sound like a good starting point?&quot;</li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50">
                  <h5 className="font-bold text-gray-900 mb-2">Example 1: Team Meeting / 1-on-1</h5>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-red-700 mb-1">Default (Weak):</p>
                    <p className="text-gray-700 italic">&quot;...So, you wanted to talk about the new feature?&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-1">CYT Approach (Confident):</p>
                    <p className="text-gray-800">&quot;Thanks for this time. My goal is to fully understand the problem we&apos;re solving with this feature, so I can map out any technical risks before we write any code. Does that sound like a good starting point?&quot;</p>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50">
                  <h5 className="font-bold text-gray-900 mb-2">Example 2: Vocalizing Something is Wrong</h5>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-red-700 mb-1">Default (Weak):</p>
                    <p className="text-gray-700 italic">&quot;Ugh, I don&apos;t think this new library is a good idea. It&apos;s going to be slow.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-1">CYT Approach (Confident):</p>
                    <p className="text-gray-800">&quot;Hey, before we move on, I have a concern. My goal is to make sure we don&apos;t accidentally create a huge performance problem. Would it be helpful if I took 2 minutes to walk through a risk I&apos;ve identified?&quot;</p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg mt-4 border-l-4 border-indigo-500">
                <p className="text-gray-800">
                  <strong>By starting this way</strong>, you&apos;ve just built a &quot;nest&quot; of confidence for yourself. You&apos;re no longer &quot;the quiet engineer&quot;; you&apos;re the <strong>&quot;strategic diagnostician&quot;</strong> who is guiding the meeting.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Stage 2: The Diagnosis (The Core Questioning Flow)
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This is the heart of the framework. You are now running your diagnostic. You are digging for the <strong>disease</strong>, not just the <strong>symptom</strong>.
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">A. Diagnostic Questions: Understanding the Symptom</h4>
                
                <div className="bg-red-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
                  <h5 className="font-bold text-red-900 mb-2">❌ The Engineer&apos;s Problem:</h5>
                  <p className="text-gray-700">
                    A PM gives you a vague ticket (&quot;We need an admin role&quot;). You just build it, and it&apos;s wrong. You&apos;ve wasted a week.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-900 mb-2">✅ The CYT Solution:</h5>
                  <p className="text-gray-700 mb-3">
                    You ask broad, open-ended questions to get them talking.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>The Subtle Nuance:</strong> You are not a &quot;ticket-taker.&quot; You are a detective. You must be genuinely curious. Your tone is not &quot;why is this ticket so bad?&quot; Your tone is &quot;help me see what you see.&quot;
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-bold text-gray-900 mb-3">Example Questions:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>• &quot;Can you walk me through the user&apos;s journey here?&quot;</li>
                    <li>• &quot;Help me understand... what&apos;s the first thing the user does that leads them to this problem?&quot;</li>
                    <li>• <em>(A great disarming question)</em> &quot;What parts of the current system do you like?&quot;</li>
                    <li>• &quot;...and if you could change one thing about it, what would that be?&quot;</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">B. Impact-Framing Questions: Diagnosing the Disease (The &quot;So What?&quot;)</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  This is the <strong>most important part of the entire framework</strong>. This is how you confidently vocalize when something is wrong.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You connect a <strong>logical problem</strong> (the symptom) to an <strong>emotional consequence</strong> (the disease). People don&apos;t fix &quot;tech debt&quot; (a problem). They fix &quot;customer churn,&quot; &quot;wasted money,&quot; and &quot;team burnout&quot; (the consequences).
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg mb-4 border-l-4 border-yellow-500">
                  <p className="text-gray-800">
                    <strong>The Subtle Nuance:</strong> You NEVER tell them the impact. You <strong>ASK</strong> them. You must make them say the pain out loud.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gray-50">
                    <h5 className="font-bold text-gray-900 mb-2">Example 1: Vocalizing Tech Debt (The &quot;Disease&quot;)</h5>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-red-700 mb-1">Default (Weak):</p>
                      <p className="text-gray-700 italic">&quot;We need to refactor. Our code is messy.&quot; <span className="text-xs">(This is a complaint.)</span></p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-1">CYT Approach (Diagnosing):</p>
                      <p className="text-gray-800">&quot;Hey [PM], I&apos;ve been looking at our bug reports. When the app crashes like that, what&apos;s the ripple effect on the support team? How does that impact customer renewals?&quot;</p>
                      <p className="text-sm text-gray-600 mt-2"><strong>Psychology:</strong> You&apos;ve just reframed &quot;your&quot; tech debt problem as &quot;their&quot; business problem. You&apos;re not complaining; you&apos;re revealing a hidden risk.</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6 py-4 bg-gray-50">
                    <h5 className="font-bold text-gray-900 mb-2">Example 2: Speaking Up in a Meeting (The &quot;Disease&quot;)</h5>
                    <div className="mb-3">
                      <p className="text-sm font-semibold text-red-700 mb-1">Default (Weak):</p>
                      <p className="text-gray-700 italic">&quot;That new feature will be slow.&quot;</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-700 mb-1">CYT Approach (Diagnosing):</p>
                      <p className="text-gray-800">&quot;I&apos;m concerned about the performance. What&apos;s the business impact if this new page takes 5 seconds to load instead of 1? What happens to our user drop-off rate?&quot;</p>
                      <p className="text-sm text-gray-600 mt-2"><strong>Psychology:</strong> You&apos;ve just forced the team to confront the consequence. You&apos;ve elevated the conversation from a technical opinion to a business-critical discussion.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">C. Vision-Casting Questions: Designing the Cure (The &quot;What If?&quot;)</h4>
                
                <div className="bg-red-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
                  <h5 className="font-bold text-red-900 mb-2">❌ The Engineer&apos;s Problem:</h5>
                  <p className="text-gray-700">
                    You have a great idea (e.g., &quot;We should use a new architecture!&quot;), but when you &quot;push&quot; it on the team, they get defensive.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
                  <h5 className="font-bold text-green-900 mb-2">✅ The CYT Solution:</h5>
                  <p className="text-gray-700 mb-3">
                    You get them to design the &quot;perfect world.&quot; This is <strong>&quot;Collaborative Discovery.&quot;</strong>
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>The Subtle Nuance:</strong> You are creating a gap. In Step 2B, you made them feel the pain (the &quot;Current State&quot;). Now, you make them describe the dream (the &quot;Future State&quot;). This gap creates a tension in their brain that demands a solution.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h5 className="font-bold text-gray-900 mb-3">Example Questions:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>• &quot;If you could wave a magic wand, what would this ideally look like for the user?&quot;</li>
                    <li>• &quot;Forget our current limits for a second. What&apos;s the &apos;dream&apos; solution here?&quot;</li>
                    <li>• <em>(To a team in a retro)</em> &quot;What&apos;s one thing that, if it were fixed, would make your whole week better?&quot;</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                  <p className="text-gray-800">
                    <strong>Psychology:</strong> They have now (1) stated their deep pain and (2) described their perfect vision. You have created the &quot;problem space.&quot; They are now desperate for a path from one to the other.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Stage 3: The Bridge (Proposing the Treatment Plan)
                </h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This is where you finally connect their &quot;disease&quot; and their &quot;cure&quot; to <strong>your solution</strong>.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
                <h4 className="font-bold text-red-900 mb-2">❌ The Engineer&apos;s Problem:</h4>
                <p className="text-gray-700">
                  You&apos;re afraid to ask for what you need (&quot;I need two weeks for this refactor&quot;). It feels like you&apos;re asking for a favor.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-4 border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2">✅ The CYT Solution:</h4>
                <p className="text-gray-700 mb-3">
                  You are not asking for a favor. You are a diagnostician <strong>prescribing a treatment</strong>. You are asking for permission to solve <em>their stated pain</em>.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>The Subtle Nuance:</strong> You do this with one final, low-pressure <strong>&quot;Commitment Question.&quot;</strong>
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold text-gray-900 mb-3">🧠 The Psychology & How-To</h4>
                <p className="text-gray-700">
                  You summarize their <strong>Pain</strong> and their <strong>Vision</strong> (using their words) and ask if they&apos;re &quot;open&quot; to a solution.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-600 pl-6 py-4 bg-gray-50">
                  <h5 className="font-bold text-gray-900 mb-2">Example 1: Getting Buy-In for a Refactor</h5>
                  <p className="text-gray-800 mb-2">
                    &quot;So, it sounds like the &apos;slow build&apos; is costing the team about 10 hours a week in frustration, and the &apos;ideal world&apos; is one where we can deploy with confidence in 5 minutes.
                  </p>
                  <p className="text-gray-800 mb-2">
                    If I could put a 2-sprint plan together that would <strong>[solve the 10-hour waste]</strong> and get us <strong>[that 5-minute build you wanted]</strong>...
                  </p>
                  <p className="text-gray-800">
                    ...is that something you&apos;d be open to me writing up for our next planning meeting?&quot;
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-4 bg-gray-50">
                  <h5 className="font-bold text-gray-900 mb-2">Example 2: Speaking at a Company All-Hands</h5>
                  <p className="text-gray-700 mb-2 italic">
                    This is how you frame a big idea to the whole company.
                  </p>
                  <p className="text-gray-800 mb-2">
                    &quot;I&apos;ve heard from so many teams that our &apos;internal tools&apos; are slow and frustrating. The impact is wasted time and burnout.
                  </p>
                  <p className="text-gray-800 mb-2">
                    What if we had a &apos;central platform&apos; that was fast, reliable, and made your job easier?
                  </p>
                  <p className="text-gray-800">
                    If you&apos;d be open to it, I&apos;d love to start a working group to build this. My ask is: talk to me after this meeting.&quot;
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-6 border-l-4 border-yellow-500">
                <h4 className="font-bold text-gray-900 mb-3">Why This Builds Ultimate Confidence:</h4>
                <p className="text-gray-700 mb-3">
                  This &quot;Commitment Question&quot; is a <strong>&quot;no-lose&quot; scenario</strong>.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>If they say &quot;YES&quot;:</strong> You have just received explicit permission to propose your solution. You&apos;re not &quot;pushing&quot; your idea; they are &quot;pulling&quot; it from you.</li>
                  <li><strong>If they say &quot;NO&quot;:</strong> (e.g., &quot;I&apos;m not sure...&quot;) You have &quot;failed&quot; fast and without any rejection. You simply say, &quot;That&apos;s no problem. Clearly I missed something. Can I ask, what&apos;s the real priority for you right now?&quot; And you go right back to diagnosing.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mt-6 border-2 border-indigo-300">
                <p className="text-lg text-gray-800 font-medium">
                  This process gives you a <strong>logical, step-by-step path</strong> to follow in any conversation. It turns your fear of &quot;speaking up&quot; into a professional, diagnostic process.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Master the CYT Approach?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Explore our 10-level curriculum to transform from a junior developer who answers tickets to a leader who defines the work.
            </p>
            <Link
              href="/pathway"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore the Curriculum →
            </Link>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

