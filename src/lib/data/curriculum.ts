import { CurriculumLevel } from '../types/curriculum';

export const curriculum: readonly CurriculumLevel[] = [
  {
    id: "level-1-the-debuggers-dialogue",
    level: 1,
    title: "The Debugger's Dialogue",
    subtitle: "Building Foundational Confidence",
    description: "Your journey begins by building a 'container' for your thoughts. Anxiety comes from not knowing what to say. Structured Framing gives you a simple, repeatable formula (like 'Problem, Action, Result') to rely on, so you sound clear and confident even when you're nervous.",
    coreTechnique: {
      name: "Structured Framing",
      description: "Organizing your thoughts into a simple 3-part structure (e.g., 'What, So What, Now What?')."
    },
    playbook: [
      {
        title: "Asking for Help (Prompt #9)",
        defaultResponse: {
          conversation: [
            "(Slacks a senior dev) \"Hey, I'm stuck on the new ticket. Can you help?\""
          ],
          analysis: "This is a 'pass the work' message. It's vague, provides no context, and forces the senior dev to stop their work to do yours."
        },
        cytApproach: {
          conversation: [
            "(Slacks a senior dev) \"Hey [Senior Dev]. I'm stuck on ticket 235 (the auth bug).",
            "1. **What I'm trying to do:** Get the user's role from the JWT.",
            "2. **What I've already tried:** I've tried `jwt.decode()` and checked the `user.payload`, but the `role` field is missing. I've also checked the docs for the auth service.",
            "3. **My specific question is:** Am I looking in the wrong place for the role, or do I need to add it to the token's scope somewhere?\""
          ],
          analysis: "This Structured Framing shows respect for their time. You've proven you're not lazy, you've done your homework, and you've given them a high-level, specific question they can probably answer in 30 seconds."
        }
      },
      {
        title: "Don't Know the Answer (Prompt #11)",
        defaultResponse: {
          conversation: [
            "(In a meeting, put on the spot) \"Uh... wow. I... I don't know.\""
          ],
          analysis: "This is a dead end. It feels awkward and can make you seem unknowledgeable."
        },
        cytApproach: {
          conversation: [
            "(In a meeting, put on the spot) \"That's a great question.",
            "1. **What (Acknowledge):** My initial thought is [X], but I don't have the data to back that up.",
            "2. **So What (The Gap):** I'd need to check the production logs to confirm.",
            "3. **Now What (The Action):** I don't want to give you the wrong answer. I'm going to find out and I will slack the correct answer to this group by 3 PM today.\""
          ],
          analysis: "You've turned 'I don't know' into a confident, three-step plan. You appear organized, honest, and reliable."
        }
      },
      {
        title: "Running Late on a Deadline (Prompt #18)",
        defaultResponse: {
          conversation: [
            "(Silence until the deadline. Then, at the 5 PM standup) \"Yeah, so... I didn't get the feature done. I ran into some issues.\""
          ],
          analysis: "This is a 'fire-starter.' You've just surprised your PM and manager, and now everyone has to scramble. This destroys trust."
        },
        cytApproach: {
          conversation: [
            "(It's *Tuesday*, the deadline is Friday) \"Hey [Manager], I'm sending a proactive update on the 'Project X' deadline.",
            "1. **What (The Status):** I'm currently at the database integration step.",
            "2. **So What (The Problem):** I've discovered the API we're using has an undocumented rate limit, which is much slower than we planned.",
            "3. **Now What (The New Plan):** This adds about one day of work. I'm proposing we move the delivery date to Monday EOD. Does that work, or should we find a way to cut scope?\""
          ],
          analysis: "This is Structured Framing used for proactive communication. You're not 'running late'; you're a manager of the project who has identified a risk and is proposing a solution. This builds trust."
        }
      }
    ],
    improvToolkitPrompts: [
      "Explain a complex concept (e.g., \"API\") using the \"What, So What, Now What?\" structure.",
      "Tell the story of the most frustrating bug you ever fixed. (Frame: 1. The Problem, 2. The \"Aha!\" Moment, 3. The Lesson).",
      "You're in a standup and realize you forgot to do your assigned task. How do you communicate this?",
      "You're onboarding and need to admit you don't understand the codebase architecture. How do you ask for help clearly?",
      "You made a mistake that affected the team. How do you communicate what happened in standup?",
      "A teammate's code review comment seems harsh. How do you respond professionally?",
      "Introduce a new tool or practice you'd like the team to try. (Frame: 1. The Problem it Solves, 2. The Value, 3. The Small Ask)."
    ],
    color: "#3685ff"
  },
  {
    id: "level-2-the-architects-articulation",
    level: 2,
    title: "The Architect's Articulation",
    subtitle: "Developing Technical Explanations",
    description: "Now that you have a structure, you'll learn the most important skill in engineering: Diagnostic Questions. Your job isn't to be a 'feature factory' but a 'problem-solver.' This level teaches you to stop taking requests at face value and start asking the questions that uncover the real problem.",
    coreTechnique: {
      name: "Diagnostic Questions",
      description: "Using open-ended questions (\"What,\" \"How,\" \"Why\") to diagnose the true problem beneath the surface request."
    },
    playbook: [
      {
        title: "Vague Requirement from a PM",
        defaultResponse: {
          conversation: [
            "**PM:** \"We need an 'admin' role for users.\"",
            "**Engineer:** \"Okay, I'll add a new 'admin' boolean to the user model.\" (Goes away for a week, builds the wrong thing)."
          ],
          analysis: "The engineer is acting like a 'ticket-taker.' They're building the request, not the need, and will almost certainly have to rebuild it."
        },
        cytApproach: {
          conversation: [
            "**PM:** \"We need an 'admin' role for users.\"",
            "**Engineer:** (Diagnose) \"Happy to build that. To make sure I get it right, **what's the #1 thing** you expect an 'admin' to be able to do that a 'user' can't?\"",
            "**PM:** \"Oh, they need to be able to edit other people's posts.\"",
            "**Engineer:** (Diagnose Deeper) \"Got it. Just editing, or *deleting* as well? **And what about** seeing analytics? **Who** are we giving this role to?\""
          ],
          analysis: "With two simple Diagnostic Questions, you've uncovered the real features (Post Editing, Post Deleting, Analytics) and the user persona. You've gone from a vague 1-day task to a well-defined 5-day epic, all in 30 seconds."
        }
      },
      {
        title: "Stakeholder Keeps Changing Requirements (Prompt #18)",
        defaultResponse: {
          conversation: [
            "\"You *again*? You just changed this yesterday! I already built the first version!\""
          ],
          analysis: "This is adversarial and emotional. You've made the stakeholder feel bad, and now they see you as a 'blocker.'"
        },
        cytApproach: {
          conversation: [
            "\"Thanks for the update. I'm noticing this has changed a few times, which is totally normal for a new project.",
            "(**Diagnose**) **It seems like we're still honing the core problem.** Can we take 10 minutes to **walk through the user's journey** one more time?",
            "My goal is to make sure what I build for you *next* is the *final* version, so we don't waste any more of your time on changes.\""
          ],
          analysis: "This is brilliant. You've reframed 'they are annoying' to 'we are a team, honing an idea.' You've used Diagnostic Questions to become a collaborative partner, not a frustrated code-monkey."
        }
      },
      {
        title: "The \"Simple\" Feature Request (Prompt #15)",
        defaultResponse: {
          conversation: [
            "**Founder:** \"I need a 'Forgot Password' link.\"",
            "**Engineer:** \"That's not simple. That involves tokens, database writes, email servers, and front-end state. That's a week of work.\""
          ],
          analysis: "You sound negative and defensive. You've created a wall of jargon, and the founder just thinks you're lazy."
        },
        cytApproach: {
          conversation: [
            "**Founder:** \"I need a 'Forgot Password' link.\"",
            "**Engineer:** \"Great idea, that's a must-have.",
            "(**Diagnose**) \"To help me scope this, **what's the 'Day 1' version**?",
            "1. Is it a fully automated email with a 24-hour expiring token?",
            "2. Or, is the Day 1 version a link that just sends an email to support, and *we* reset it manually?",
            "Path 1 is about a week, Path 2 is something I can get done for you *this afternoon*. **What's the bigger priority for you: speed or automation?**\""
          ],
          analysis: "You've used Diagnostic Questions to reframe the conversation around options and tradeoffs. You've given the founder agency, shown you're on their side, and demonstrated your strategic value."
        }
      }
    ],
    improvToolkitPrompts: [
      "A product manager wants a feature. Practice using Diagnostic Questions to find the user story behind the feature request.",
      "You need to tell a designer their mockup isn't feasible. Instead of saying \"no,\" what Diagnostic Questions can you ask to find a compromise?",
      "A team member keeps bikeshedding (arguing over tiny, irrelevant details) in a code review. How do you respond?",
      "Walk through a recent architectural decision, explaining the tradeoffs you considered.",
      "A client asks, \"Why is this taking so long?\"",
      "Explain the concept of technical debt using a non-technical analogy."
    ],
    color: "#FF5F87"
  },
  {
    id: "level-3-the-collaborators-craft",
    level: 3,
    title: "The Collaborator's Craft",
    subtitle: "Advancing Peer Communication",
    description: "This is where we apply your new skills to the most common (and most dangerous) conversations you'll have: talking to your peers. This level is all about handling difficult conversations about code, ideas, and feedback, both as the giver and the receiver.",
    coreTechnique: {
      name: "Diagnostic Questions + Structured Framing",
      description: "Combining diagnostic questions with structured framing to handle difficult peer conversations effectively."
    },
    playbook: [
      {
        title: "Receiving a Harsh, Vague Code Review (Prompt #16)",
        defaultResponse: {
          conversation: [
            "(In your head: \"This guy is a jerk.\")",
            "(In the PR: \"What are you talking about? This is fine. The factory pattern is overkill here.\")"
          ],
          analysis: "This is defensive and adversarial. You've now started a 'code review war' that is about ego, not about the code. No one wins."
        },
        cytApproach: {
          conversation: [
            "(In the PR: \"Thanks for the review. **I'm not sure I follow your concern.**",
            "1. **What problem** are you seeing with the current approach?",
            "2. **Can you help me understand** how the factory pattern would solve that problem here?",
            "Happy to jump on a 5-min call if it's easier!\")"
          ],
          analysis: "This is 'bulletproof.' You've used Diagnostic Questions in a Structured Frame to move from an emotional, vague conflict to a specific, technical discussion. You're not accusing them; you're inviting them to clarify. This de-escalates the entire situation."
        }
      },
      {
        title: "Giving a Code Review to a Junior (Prompt #11)",
        defaultResponse: {
          conversation: [
            "\"This is inefficient. Don't use a `forEach` here, you're causing an N+1 query. You need to use a single SQL lookup and map the data. Please fix.\""
          ],
          analysis: "This is technically correct, but it's demoralizing. You've told them what to do, but not why. They will feel 'corrected,' not 'mentored.'"
        },
        cytApproach: {
          conversation: [
            "(In the PR: \"Great job getting this feature working! The logic is correct, which is the hard part.",
            "**I have one suggestion** for the data loading.",
            "(**Diagnose**) **I'm curious** if you considered what happens when this function has 1,000 users? This `forEach` loop will run 1,000 separate database queries.",
            "**I wonder what would happen if** we fetched all the users in *one* query *outside* the loop, and then used a simple `map` to find the user for each item?",
            "Let me know what you think!\")"
          ],
          analysis: "This is the C.O.D.E. framework in action. It's positive ('Great job...'), uses Diagnostic Questions ('I'm curious if...'), and guides them to the answer ('I wonder...'). You are now mentoring, not just managing."
        }
      },
      {
        title: "Disagreeing with a Peer's Technical Decision (Prompt #3)",
        defaultResponse: {
          conversation: [
            "(In a public channel) \"Why did you use React Query for this? That's not right. We should be using a simple `useState`.\""
          ],
          analysis: "This is a public accusation. You've questioned your peer's competence and forced them to get defensive."
        },
        cytApproach: {
          conversation: [
            "(In a *private* DM) \"Hey [Name], I saw your PR for the new service. Looks great.",
            "(**Diagnose**) \"I was curious about your choice to use React Query. **My assumption** was this was a simple 'fetch-once' component, but your choice makes me think it's more complex.",
            "**Can you walk me through your thinking?** I'm wondering if I'm missing something, like caching or re-validation needs.\""
          ],
          analysis: "You've moved the conversation to private. You've assumed you are the one who is missing context (even if you think you're right). You've used Diagnostic Questions ('Can you walk me through...?') to make this a learning opportunity, not a fight."
        }
      }
    ],
    improvToolkitPrompts: [
      "You're pair programming and your partner has a completely different approach. How do you navigate this without being \"right\"?",
      "A colleague's PR has been sitting for days. You need to follow up without seeming pushy.",
      "During pairing, you spot a bug your partner missed. How do you point it out tactfully?",
      "Your teammate is defensive about feedback. How do you respond?",
      "You and a peer both have valid solutions. How do you facilitate choosing the best path forward?",
      "A peer's commit broke the build. They seem embarrassed. How do you discuss it supportively?",
      "A colleague keeps interrupting during technical discussions. How do you address this?"
    ],
    color: "#10B981"
  },
  {
    id: "level-4-the-mentors-method",
    level: 4,
    title: "The Mentor's Method",
    subtitle: "Teaching & Guiding Others",
    description: "This level is where you transition from 'doer' to 'multiplier.' Your value is no longer just the code you write; it's your ability to make other engineers better. You'll master the art of teaching by asking, not telling.",
    coreTechnique: {
      name: "Impact Framing",
      description: "Connecting a technical problem or choice to a real-world consequence (the 'so what?'). This is the key to getting buy-in for refactoring, testing, and good architecture."
    },
    playbook: [
      {
        title: "Explaining Why Unit Testing Matters",
        defaultResponse: {
          conversation: [
            "\"Your code works, but you forgot to write unit tests. Our rule is 80% coverage. Please add them.\""
          ],
          analysis: "This is 'because I said so.' The junior dev sees tests as a 'tax' and will do the bare minimum."
        },
        cytApproach: {
          conversation: [
            "\"Hey, the feature logic looks solid.",
            "(Impact Frame) \"I want to talk about the tests. Right now, this code works. But what's the impact of not having tests?",
            "\"The 'so what' is that in 6 months, another dev (maybe you!) will change something nearby, this code will break, and no one will know. A test isn't for now; it's a gift to your future self. It's the 'alarm system' that protects you from breaking the app.",
            "(Diagnose) \"What's one 'edge case' we're worried about that we could write a test for right now?\""
          ],
          analysis: "By using Impact Framing, you've reframed tests from a 'chore' to an 'alarm system' and a 'gift.' The lesson is now emotional and will stick."
        }
      },
      {
        title: "Mentee Keeps Making the Same Mistake",
        defaultResponse: {
          conversation: [
            "(Sighs) \"You did it again. You always forget to add the error handling. I've told you this before.\""
          ],
          analysis: "This is frustrated and accusatory, making the mentee feel stupid. They will shut down."
        },
        cytApproach: {
          conversation: [
            "\"Hey, I noticed this PR is also missing the try/catch block for the API call.",
            "(Diagnose) \"This is the third time this has come up. Clearly, my way of explaining it isn't working. What's your process when you write a new function? Where in that process do you think about 'what happens if this fails?'\"",
            "(Listen to their answer... \"I just try to make it work first.\")",
            "\"That makes sense. What if we tried this: from now on, write a 'TODO' for the error handling first, before you even write the 'happy path' code? Would that help you remember?\""
          ],
          analysis: "You've taken the blame ('my way of explaining...'), used Diagnostic Questions to understand their process, and then collaborated on a new solution."
        }
      },
      {
        title: "Guiding Someone Through Debugging",
        defaultResponse: {
          conversation: [
            "Junior: \"I'm stuck. My code is returning undefined.\"",
            "Senior: (Looks for 10 seconds) \"Oh, you're missing an await on line 52.\""
          ],
          analysis: "This is fast, but the junior dev learned nothing. You fixed the code, but didn't build a better engineer."
        },
        cytApproach: {
          conversation: [
            "Junior: \"I'm stuck. My code is returning undefined.\"",
            "Senior: (Acknowledge & Diagnose) \"No problem. Let's dig in. What are you seeing?\"",
            "Junior: \"The user.name is undefined.\"",
            "Senior: (Guide with Questions) \"Okay. And what's the function that's supposed to get the user? ... Right, fetchUser. What does that function return?\"",
            "Junior: \"It returns... oh... it returns a Promise.\"",
            "Senior: (Guide to the 'Aha!' Moment) \"Exactly. So if it returns a promise, but you're trying to access .name right away, what's the 'state' of that promise when your code runs?\"",
            "Junior: \"It's... still pending? ... Oh! I'm not awaiting it!\""
          ],
          analysis: "This takes 2 minutes longer but teaches the junior dev how to debug. By guiding them down the exact mental path you would have taken, you've let them feel the win."
        }
      },
      {
        title: "Mentee is Discouraged About Their Progress",
        defaultResponse: {
          conversation: [
            "\"It's fine, you're doing great. Imposter syndrome is normal. Just keep going.\""
          ],
          analysis: "This is dismissive and provides no real help. The mentee still feels discouraged."
        },
        cytApproach: {
          conversation: [
            "\"I hear you. That feeling of being overwhelmed is normal.\"",
            "(Diagnose) \"What's one thing this week that made you feel stuck?\"",
            "(Listen... \"I couldn't figure out the Redux store.\")",
            "\"Okay. But let's look at this PR. Three months ago, do you think you could have set up this API endpoint from scratch? Or written this unit test?\"",
            "\"You're not 'stuck' on Redux. You're learning Redux. You've already mastered the other parts. The 'frustration' you feel is just what 'learning' feels like.\""
          ],
          analysis: "You've acknowledged their feelings, diagnosed the specific problem, and reframed their progress to help them see how far they've come."
        }
      },
      {
        title: "Explaining Why We Refactor",
        defaultResponse: {
          conversation: [
            "\"This code is messy. We need to refactor it to follow the new pattern.\""
          ],
          analysis: "This focuses on 'clean code' which sounds like busywork. No business justification."
        },
        cytApproach: {
          conversation: [
            "\"I want to show you something. See this file? I timed it.\"",
            "(Impact Frame) \"It takes a new engineer 3 days to understand this file. The 'so what' is that any bug in this file takes 10x longer to fix.\"",
            "\"This isn't about being 'clean.' This is about being fast. The business impact is that this 'messy' code is costing us speed. By refactoring it, we aren't 'cleaning'; we are 'accelerating' all future work on this feature.\""
          ],
          analysis: "You've used Impact Framing to connect technical debt to real business costs (time and speed), making the case for refactoring compelling and data-driven."
        }
      }
    ],
    improvToolkitPrompts: [
      "Teach a junior developer about async/await. Focus on the feeling of the problem (a blocked UI) not just the syntax.",
      "Explain to a junior dev why a 'working' solution needs refactoring. Use Impact Framing.",
      "A junior dev is stuck but hasn't asked for help. How do you open the conversation in a supportive, non-micromanaging way?",
      "Your mentee is discouraged about their progress. How do you motivate them?",
      "A junior developer asks a question you don't know the answer to. Model how to find out together.",
      "Your mentee wants to use a shiny new technology. Help them think through the decision (Hint: use Diagnostic Questions about tradeoffs)."
    ],
    color: "#8B5CF6"
  },
  {
    id: "level-5-the-project-leads-pitch",
    level: 5,
    title: "The Project Lead's Pitch",
    subtitle: "Leading with Your Voice",
    description: "Step into leadership through communication. Learn to influence teams, lead discussions, deliver persuasive arguments, and motivate others toward shared goals.",
    coreTechnique: {
      name: "Collaborative Discovery",
      description: "Guiding someone to a solution by asking questions that help them see the problem and solution from your perspective. It's the art of letting them 'discover' your idea."
    },
    playbook: [
      {
        title: "Handling a 'Bad' 1-on-1 (Vague Negative Feedback)",
        defaultResponse: {
          conversation: [
            "Boss: \"I just feel like your team isn't moving fast enough.\"",
            "You: \"What? We're working really hard! We closed 15 tickets last sprint!\""
          ],
          analysis: "This is defensive and emotional. You've given your boss zero data and made yourself look reactive."
        },
        cytApproach: {
          conversation: [
            "(Breathe. Get curious.) \"That's really important feedback. Thank you for sharing it.",
            "(Diagnose) \"To help me understand, can you walk me through what you're seeing that makes you feel that way? Is there a specific project you're worried about?\"",
            "Boss: \"Well, the login feature just seems to be dragging on.\"",
            "(Impact Frame) \"I agree, it is. Right now, my team is splitting its time 50/50 between that feature and three other 'urgent' projects. Because they are context-switching, that one feature is taking twice as long as it should.",
            "(Collaborative Discovery) \"I'm curious, in a perfect world, what would you rather have: one project 100% done, or four projects 25% done?\"",
            "Boss: \"One project 100% done, obviously.\"",
            "\"Great. Then I'd like to propose a solution...\""
          ],
          analysis: "You took a vague attack and masterfully turned it into a collaborative problem-solving session using Diagnostic Questions, Impact Framing, and Collaborative Discovery."
        }
      },
      {
        title: "Mediating Team Conflict",
        defaultResponse: {
          conversation: [
            "(In Slack) \"Hey, let's calm down. Both are good. Let's just pick one and move on.\""
          ],
          analysis: "This invalidates both people's concerns and solves nothing. The conflict will just go underground and fester."
        },
        cytApproach: {
          conversation: [
            "(In Slack) \"This is a great discussion with good points on both sides. It's clearly too important for a text-only chat.",
            "(Take Control) \"I'm booking a 30-min meeting for 2 PM with both of you + me to find a path forward. The goal is to agree on a set of tradeoffs, not to 'win.' See you then.\"",
            "(In the meeting, as mediator) \"Okay...\"",
            "(To Eng A): \"What's the main problem you see with Approach B?\"",
            "(To Eng B): \"What's the main problem you see with Approach A?\"",
            "(To both): \"It sounds like A is better for performance and B is better for developer speed.\"",
            "(Collaborative Discovery) \"Given our #1 goal for this quarter is X, which of those two tradeoffs is more important for us to get right?\""
          ],
          analysis: "You took control, moved the venue, set the goal, and used Diagnostic Questions to frame the debate around tradeoffs, not ego."
        }
      },
      {
        title: "Team Member is Consistently Negative",
        defaultResponse: {
          conversation: [
            "(In a team meeting) \"Can you please be positive for once, [Name]?\""
          ],
          analysis: "This is a public attack. You've humiliated your team member and just made the problem 10x worse."
        },
        cytApproach: {
          conversation: [
            "(In a private 1-on-1) \"Hey [Name], I wanted to check in. I really value your technical skill and your eye for problems.",
            "(Diagnose) \"I've noticed in our last few team meetings that you seem frustrated. In yesterday's meeting, you mentioned the new project was 'doomed.' Can you walk me through what you're seeing that I'm not?\"",
            "(Listen... they feel unheard, or see a real risk)",
            "\"Okay, that makes sense.\"",
            "(Impact Frame) \"The impact of framing it as 'doomed' in the public meeting, though, is that the junior devs shut down.\"",
            "(Collaborative Discovery) \"What if in the future, you brought these major risks to me first, in our 1-on-1? That way, we can turn it into a concrete proposal for the team, instead of just a problem.\""
          ],
          analysis: "You've made your negative-but-smart employee feel heard. You've given them a 'job' (Risk Identifier) and a process to channel their feedback."
        }
      },
      {
        title: "Saying 'No' to a Stakeholder by Saying 'Yes, and...'",
        defaultResponse: {
          conversation: [
            "Stakeholder: \"I need this new feature in the sprint. It's urgent.\"",
            "You: \"No. The sprint is locked. We can't.\""
          ],
          analysis: "This is confrontational and makes you look inflexible. You've created an adversarial relationship."
        },
        cytApproach: {
          conversation: [
            "Stakeholder: \"I need this new feature in the sprint. It's urgent.\"",
            "You: \"I agree, this looks important.\"",
            "(Diagnose) \"Can you help me understand the urgency? Is this a legal deadline, or a 'go-to-market' one?\"",
            "Stakeholder: \"It's for the big conference in 3 weeks!\"",
            "\"Okay, this is a 'tradeoff' conversation, and I want to make you the decider.\"",
            "(Collaborative Discovery) \"Right now, the team is working on [Feature X]. If we pull them off, we can definitely hit your conference deadline. The impact is that [Feature X] will slip.\"",
            "\"Which of these two is the bigger company priority right now? You tell me, and I'll make it happen.\""
          ],
          analysis: "You've turned a 'no' into a collaborative decision. The stakeholder feels empowered and in control, and you've protected your team from impossible commitments."
        }
      },
      {
        title: "Your Manager Wants You to Work the Weekend",
        defaultResponse: {
          conversation: [
            "Boss: \"I need you to come in this weekend to finish the project.\"",
            "You: \"Oh, okay.\" (You feel resentful and burned out)."
          ],
          analysis: "You've said yes out of fear, but you're now resentful. This will lead to burnout and resentment."
        },
        cytApproach: {
          conversation: [
            "Boss: \"I need you to come in this weekend to finish the project.\"",
            "You: (Pause) \"That's a tough ask.\"",
            "(Diagnose) \"Help me understand the urgency. What's the 'hard deadline' that's driving this?\"",
            "Boss: \"The client demo is Monday morning.\"",
            "\"Okay.\"",
            "(Collaborative Discovery) \"I can work on Saturday, but I can't work on Sunday. What if we 'time-box' it? I'll work 4 hours Saturday to get the 'demo path' 100% stable. The impact is that the 'settings' page won't be done, but the demo will be perfect.\"",
            "\"Would that solve the Monday demo problem?\""
          ],
          analysis: "You've set a boundary while still being helpful. You've turned an unreasonable ask into a reasonable compromise that protects your personal time."
        }
      }
    ],
    improvToolkitPrompts: [
      "What tech trend are you most excited about for the next year, and why?",
      "Pitch a completely useless but hilarious new app idea.",
      "What's your most controversial (but polite) tech opinion?",
      "Tell us about a technical 'failure' that taught you a valuable lesson.",
      "Describe a time you successfully influenced a team decision."
    ],
    color: "#19C37D"
  },
  {
    id: "level-6-the-cross-functional-catalyst",
    level: 6,
    title: "The Cross-Functional Catalyst",
    subtitle: "Bridging Teams & Departments",
    description: "Master communication across organizational boundaries. Learn to align diverse stakeholders, translate between technical and business perspectives, and drive cross-functional collaboration.",
    coreTechnique: {
      name: "Impact Framing (Mastery Level)",
      description: "Translating technical work into business value: the #1 skill of all Staff-plus and Principal engineers."
    },
    playbook: [
      {
        title: "Why do we need to hire more engineers?",
        defaultResponse: {
          conversation: [
            "\"We need more people. We're too slow, and we're all working too hard.\""
          ],
          analysis: "This is emotional and vague. It sounds like whining, not a business case."
        },
        cytApproach: {
          conversation: [
            "(To Finance/Execs) \"Our current team of 5 is supporting $10M in revenue.\"",
            "(Impact Frame) \"That means we are at 100% capacity just on 'keep the lights on' work (bugs, maintenance). The business impact is that our 'new feature' velocity is at zero. We literally have no one to put on new, revenue-generating projects.\"",
            "\"Hiring two more engineers isn't a 'cost' for our team; it's an investment that unlocks our ability to build the $5M 'Project X' that Sales is waiting for.\""
          ],
          analysis: "You've translated 'we're too busy' into business language: capacity, revenue impact, and ROI. This is how executives think."
        }
      },
      {
        title: "Sales Promised an Impossible Feature",
        defaultResponse: {
          conversation: [
            "(To your manager) \"Tell Sales they're idiots. We can't do this. It's not our problem.\""
          ],
          analysis: "This is combative and unprofessional. You've created a permanent enemy in Sales."
        },
        cytApproach: {
          conversation: [
            "(To the Sales lead) \"Hey [Sales Lead], congrats on the new client. I want to partner with you to make them successful.\"",
            "(Diagnose) \"Can you walk me through what the client really needs? What's the core problem they're trying to solve?\"",
            "(Listen... they need 'reporting'.)",
            "\"Okay, 'reporting' is the goal.\"",
            "(Collaborative Discovery) \"The feature they asked for will take 3 months. But what if we could get them 80% of the way there, right now?\"",
            "\"We can give them a raw data export today. Would that solve their immediate pain while we schedule the 'full-featured' version for Q2?\""
          ],
          analysis: "You've turned a conflict into a collaboration. You've diagnosed the real need and proposed a pragmatic compromise."
        }
      },
      {
        title: "Why is this taking so long?",
        defaultResponse: {
          conversation: [
            "\"Because it's hard! You don't understand, we have to refactor the database, and the old API is a mess...\""
          ],
          analysis: "This is defensive and technical. Non-technical stakeholders will tune out and think you're making excuses."
        },
        cytApproach: {
          conversation: [
            "\"That's a fair question. Let me be transparent.\"",
            "(Structured Frame)",
            "**What:** When we started, we thought this was just a simple UI change.",
            "**So What (The Problem):** As we dug in, we discovered that this part of the system is connected to our billing code.",
            "**Now What (The Impact):** This means we have to be extra careful. The impact of rushing this is that we could break customer payments.",
            "\"So, we're taking an extra 3 days to build a 'safe' version with full testing. Our #1 priority is protecting customer data over speed. I hope you agree that's the right tradeoff.\""
          ],
          analysis: "You've used Structured Framing to explain the situation clearly, and Impact Framing to connect the delay to customer safety, which is a value everyone shares."
        }
      },
      {
        title: "Convincing the PM to Pay Down Tech Debt",
        defaultResponse: {
          conversation: [
            "\"We can't build your new feature. Our tech debt is out of control. We need two 'refactor sprints'.\""
          ],
          analysis: "This sounds like you're blocking their roadmap for internal engineering reasons. PMs will resist."
        },
        cytApproach: {
          conversation: [
            "\"Hey, I was looking at your roadmap for Q4, and I'm really excited about the new 'search' feature. I've identified a major risk that will prevent us from hitting that goal.\"",
            "PM: \"A risk? What?\"",
            "(Impact Frame) \"Our current search module is the oldest code in the app. My team estimates that 25% of all our bug reports come from that one file.\"",
            "\"The business impact is that your 'search' feature will be built on a 'house of cards' and will likely be slow and buggy from day one.\"",
            "(Collaborative Discovery) \"I have a proposal. If we take one sprint now to rewrite that module... we'll build the new 'search' feature twice as fast in the following sprint.\"",
            "\"Would you rather we build it fast and buggy, or take one extra sprint to build it right and fast forever?\""
          ],
          analysis: "You've reframed tech debt as a risk to their roadmap and proposed it as an investment, not a cost. This is how PMs think."
        }
      },
      {
        title: "Sales is Upset About Bugs",
        defaultResponse: {
          conversation: [
            "\"We're fixing them as fast as we can! Stop complaining!\""
          ],
          analysis: "This is defensive and dismissive. You've made an ally into an enemy."
        },
        cytApproach: {
          conversation: [
            "(To the Sales lead) \"I hear you. It's unacceptable that the demo is buggy.\"",
            "(Impact Frame) \"Your team can't sell, and my team looks bad. We have the same problem.\"",
            "(Diagnose) \"Can you walk me through the 'Top 3' bugs that are actually killing your demos? Not the whole list, but the ones that make you fail.\"",
            "(Listen... \"It's the login and the dashboard.\")",
            "\"Okay. My team will drop everything else. We will have the login and dashboard 100% stable for you by EOD tomorrow. In return, we need you to 'hold' the other, lower-priority bugs for one week. Can we agree to that?\""
          ],
          analysis: "You've acknowledged the pain, found common ground, diagnosed the critical issues, and proposed a clear trade-off that solves their immediate problem."
        }
      }
    ],
    improvToolkitPrompts: [
      "Explain a 3-month delay to a VP. Focus on the solution and new timeline, not the problem.",
      "Align product, design, and engineering on a timeline when each has conflicting priorities.",
      "Present a technical problem to the executive team. Frame it in terms of business impact (risk, cost, user trust).",
      "Your product manager wants feature X, but it'll create massive technical debt. Make your case using Impact Framing.",
      "Present a quarterly roadmap to executives who want everything done in half the time.",
      "Sales is upset about bugs affecting demos. Address their concerns while protecting your team."
    ],
    color: "#F59E0B"
  },
  {
    id: "level-7-the-organizational-architect",
    level: 7,
    title: "The Organizational Architect",
    subtitle: "Driving Change at Scale",
    description: "Learn to communicate and drive organizational change. Master executive communication, lead large-scale initiatives, and influence company-wide technical strategy and culture.",
    coreTechnique: {
      name: "All Techniques Combined",
      description: "Combining Framing + Diagnosis + Impact + Discovery to drive change at an organizational level."
    },
    playbook: [
      {
        title: "Pitching a 'Boring' but Critical Project (Tech Debt)",
        defaultResponse: {
          conversation: [
            "\"We have too much tech debt. We need to stop and refactor. Our engineers are unhappy, and our code is bad.\""
          ],
          analysis: "This is emotional and focuses on internal engineering problems. Executives will tune out."
        },
        cytApproach: {
          conversation: [
            "(In a presentation to executives) \"Good afternoon. I've spent the last month analyzing our engineering velocity, and I've created a data-driven proposal to increase our feature output by 40%.\"",
            "(Impact Frame) \"My analysis is simple: Right now, we spend 60% of our engineering hours on 'unplanned work' (fixing bugs and system outages). This is costing us $1.2 million in lost productivity per year.\"",
            "(Collaborative Discovery) \"What if we could 'buy back' half of that time?\"",
            "(Solution) \"I'm proposing 'Project Velocity.' We will dedicate a small team for one quarter to fix the 5 'hotspots' that cause 80% of this pain. This is a one-time investment to buy back 30% of our engineering time, forever.\""
          ],
          analysis: "You've reframed tech debt as a revenue-generating investment using business language (velocity, cost, ROI) that executives understand."
        }
      },
      {
        title: "Handling a Major Security Breach",
        defaultResponse: {
          conversation: [
            "(Rushing into the exec meeting) \"This is a disaster. We're breached. Everything is on fire!\""
          ],
          analysis: "This creates panic and makes you look out of control. Executives need calm, structured information during crises."
        },
        cytApproach: {
          conversation: [
            "(Calmly, in the exec meeting) \"Okay, team, we have a critical incident. Here is the 'What, So What, Now What' as of 10:00 AM.\"",
            "**What (The Problem):** At 9:15 AM, we identified an unauthorized access to a production database.",
            "**So What (The Impact):** We immediately shut down the affected service and patched the vulnerability. The 'hole' is closed.",
            "**Now What (The Plan):** The infra team is now doing a full audit. Our next steps are: A) Confirm the blast radius, B) Prepare a customer comms draft. I need a decision from this group: who is the legal point-person?\""
          ],
          analysis: "You've used Structured Framing to provide calm, actionable information in a crisis, demonstrating leadership under pressure."
        }
      },
      {
        title: "Announcing an Unpopular Decision (Hiring Freeze)",
        defaultResponse: {
          conversation: [
            "(At a team meeting) \"This is hard, but corporate is freezing hiring. No more new people. I know it stinks. Sorry.\""
          ],
          analysis: "This is weak and defeatist. You've provided no context or leadership, just bad news."
        },
        cytApproach: {
          conversation: [
            "(At a team meeting) \"Team, I want to be transparent about a business decision we've made.\"",
            "**What (The Decision):** We are proactively pausing new hiring for Q1.",
            "**Why (The Impact Frame):** This is not because we're in trouble. This is a proactive, strategic move to protect our current team and our runway in a volatile market.",
            "**What it means for you (The 'So What'):** This means your role is more important than ever. We must be ruthless about prioritizing.",
            "\"This isn't a 'stop' button; it's a 'focus' button. I'm counting on you, and I'm here to clear any roadblocks.\""
          ],
          analysis: "You've provided context, reframed the negative as a strategic positive, and rallied the team around their importance."
        }
      },
      {
        title: "Leading a Town Hall When Morale is Low",
        defaultResponse: {
          conversation: [
            "\"I've heard morale is low. I just want to say, please work hard, things will get better. We appreciate you.\""
          ],
          analysis: "This is hollow and doesn't address the real issues. It sounds like corporate platitudes."
        },
        cytApproach: {
          conversation: [
            "\"Good morning, team. I asked for this meeting because I've heard the same rumors you have, and I've seen the burnout.\"",
            "(Diagnose) \"I'm not here to give a speech. I'm here to listen. I want to use the next 30 minutes to do a 'live retro.'\"",
            "\"I want to ask two questions:\"",
            "**1.** What is the one thing that is causing you the most 'drag' right now?",
            "**2.** What is one small thing we could do next week that would make your life 10% better?",
            "\"This isn't a 'magic wand' meeting, but I'm committing to you that I will take the top 3 themes and present an action plan by Friday.\""
          ],
          analysis: "You've demonstrated vulnerability and used Diagnostic Questions to make the team feel heard, building trust and demonstrating action-oriented leadership."
        }
      },
      {
        title: "Supporting an Unpopular Decision You Disagree With",
        defaultResponse: {
          conversation: [
            "(To your team) \"Look, I don't get it either. 'Corporate' wants us to use [New Tool X]. I fought them, but they said we have to. So, I guess we have to.\""
          ],
          analysis: "You've undermined the decision and leadership, creating division and resentment without solving anything."
        },
        cytApproach: {
          conversation: [
            "(To your team) \"Hey team, I have an update on our tooling.\"",
            "(Structured Frame)",
            "**What (The Decision):** As a company, we are standardizing on [New Tool X].",
            "**So What (The Impact):** This means our team will be migrating off of [Old Tool Y] over the next quarter. I know this is a big change. The reason for this is that [Tool X] saves the company [$Z] and [solves Y problem] for the Legal team.",
            "**Now What (The Plan):** My job is not to debate the 'why'. That's decided. My job is to make this transition as painless as possible for this team.",
            "\"So, I need your help. Let's use this meeting to map out all the risks and 'gotchas' so I can build a realistic plan.\""
          ],
          analysis: "You've shown leadership by supporting the decision while channeling the team's energy into constructive problem-solving."
        }
      }
    ],
    improvToolkitPrompts: [
      "Present a case for changing the entire company's development methodology to the executive team.",
      "Deliver an all-hands about organizational restructuring that acknowledges concerns while building buy-in.",
      "Propose a multi-million dollar infrastructure investment to the board. Justify the business value.",
      "Lead a town hall where engineering morale is low and trust in leadership is eroding.",
      "Present a 3-year technical strategy to executives who want results in 3 months.",
      "Communicate a major architectural migration that will disrupt every team for 6 months."
    ],
    color: "#DC2626"
  },
  {
    id: "level-8-the-innovators-influence",
    level: 8,
    title: "The Innovator's Influence",
    subtitle: "Inspiring Change and Thought Leadership",
    description: "Craft impactful presentations for broader audiences. Learn to inspire innovation, communicate business value, and build your professional brand as a thought leader.",
    coreTechnique: {
      name: "Vision Casting",
      description: "Inspiring action by painting a clear, compelling, and emotional picture of a future state (the 'What if...')."
    },
    playbook: [
      {
        title: "Pitching a Conference Talk",
        defaultResponse: {
          conversation: [
            "**Title:** A Deep Dive Into React Server Components",
            "**Abstract:** I will cover the history of React, explain what server components are, and show some code examples."
          ],
          analysis: "This is boring and technical. It's about you, not about the audience's problem or transformation."
        },
        cytApproach: {
          conversation: [
            "**Title:** You're Probably Fetching Data Wrong: How Server Components Will Fix Your App",
            "**Abstract:** For years, we've filled our apps with loading spinners. We've accepted this 'waterfall' as normal.",
            "(Impact Frame) \"But this 'normal' is slow and creates a terrible user experience.\"",
            "(Vision Casting) \"What if we could build apps that were 'fast by default'? What if 90% of your data-fetching code... just... disappeared? Imagine an app that's as interactive as React, but as fast as a static site.\"",
            "\"This isn't a dream. This is what React Server Components do. In this talk, I'll show you why they will fundamentally change how you build for the web.\""
          ],
          analysis: "You've used Vision Casting to paint a compelling future, making the audience excited to learn."
        }
      },
      {
        title: "Pitching a 'Boring' Project to Your Team",
        defaultResponse: {
          conversation: [
            "\"Hey team, our next project is to build a new CI/CD pipeline.\""
          ],
          analysis: "This is a task, not a vision. No one is excited to 'build a pipeline.'"
        },
        cytApproach: {
          conversation: [
            "\"Team, I have a question. What if our build time went from 40 minutes to 4?\"",
            "(Vision Cast) \"What if you could push a hotfix with total confidence in 5 minutes, not 50? What if you never had to 'babysit' a deployment again?\"",
            "\"That's our next project. We're not 'building a pipeline.' We're buying back our time and eliminating our deployment anxiety. We're building our freedom.\""
          ],
          analysis: "You've reframed a boring technical project as a transformation that solves their daily pain, inspiring buy-in."
        }
      },
      {
        title: "Arguing a Controversial Tech Opinion",
        defaultResponse: {
          conversation: [
            "(On Twitter) \"Microservices are stupid, and you're all doing it wrong.\""
          ],
          analysis: "This is combative and arrogant. You'll create enemies, not thoughtful discussion."
        },
        cytApproach: {
          conversation: [
            "(On a blog) \"Our industry loves microservices, but what's the hidden impact?\"",
            "(Impact Frame) \"We've traded a simple monolith for a complex, distributed system that most of our teams aren't trained for. The 'so what' is that our 'time to first line of code' for a new engineer is now weeks, not hours.\"",
            "(Vision Cast) \"What if we refocused on a 'majestic monolith' first? What if we valued 'speed of shipping' over 'purity of architecture'?\""
          ],
          analysis: "You've presented a contrarian view with respect, using Impact Framing and Vision Casting to make people think, not fight."
        }
      },
      {
        title: "Telling Your Career Story in an Interview",
        defaultResponse: {
          conversation: [
            "\"First I worked at [Company A] as a junior, then I got promoted at [Company B]... I'm a hard worker.\""
          ],
          analysis: "This is a chronology, not a story. There's no theme, no impact, no reason to hire you."
        },
        cytApproach: {
          conversation: [
            "\"My career has had one theme: impact.\"",
            "\"At [Company A], I was a junior, but I saw the team was wasting time on deployments. I built a script that automated it and saved us 5 hours a week.\"",
            "\"At [Company B], I led a team that refactored a legacy system. The impact was a 50% drop in bugs and a 20% increase in team morale.\"",
            "\"I'm not just a 'coder.' I'm a 'problem-solver,' and that's what I want to do for you.\""
          ],
          analysis: "You've told a thematic story with measurable impact, demonstrating your value proposition clearly."
        }
      },
      {
        title: "Pitching a 'Crazy' New App Idea",
        defaultResponse: {
          conversation: [
            "\"I have an idea for an app. It's like Uber, but for [X].\""
          ],
          analysis: "This is lazy and uncompelling. 'It's like X but for Y' tells me nothing about the real problem you're solving."
        },
        cytApproach: {
          conversation: [
            "(Impact Frame) \"What's the one thing everyone hates? Wasting a Saturday at the mechanic.\"",
            "(Vision Cast) \"What if you never had to do that again? Imagine you tap a button, a certified mechanic comes to your house while you're at work, and by 5 PM, your car is fixed. No lines, no Ubers, no wasted weekend.\"",
            "\"That's the app. It's 'peace of mind' for car owners.\""
          ],
          analysis: "You've led with the pain, painted a vivid picture of the transformation, and created emotional resonance."
        }
      }
    ],
    improvToolkitPrompts: [
      "What's one revolutionary idea in tech that you think is just around the corner?",
      "If you could instantly solve one major problem in software development, what would it be and why?",
      "What's a common misconception about being a developer that you wish you could clear up for everyone?",
      "Describe a project you worked on where the 'why' was more impactful than the 'how.'",
      "Pitch a new feature for a well-known product, focusing only on the user benefits and emotional impact.",
      "What's a trend in tech that everyone's excited about but you think is overrated? Make your case.",
      "Describe the future of software development in 10 years. What will be radically different?"
    ],
    color: "#FFB020"
  },
  {
    id: "level-9-the-community-builder",
    level: 9,
    title: "The Community Builder",
    subtitle: "Industry Influence & Community Leadership",
    description: "Extend your influence beyond your organization into the broader tech community. Learn to build movements, lead open source communities, create content at scale, and shape industry conversations.",
    coreTechnique: {
      name: "Vision Casting (Mastery Level)",
      description: "Building movements and leading communities through compelling vision and authentic leadership."
    },
    playbook: [
      {
        title: "Starting a New Community",
        defaultResponse: {
          conversation: [
            "(On Twitter) \"Hi, I'm starting a Discord for devs. Here's the link.\""
          ],
          analysis: "This is transactional and uninspiring. No one knows why they should join or what makes this different."
        },
        cytApproach: {
          conversation: [
            "(On Twitter) \"I'm tired of 'tech help' channels that are full of ego and 'just read the docs' snark.\"",
            "(Pain + Vision) \"What if we could build a space where the #1 rule is 'be kind,' and the goal is to mentor, not just 'answer'? What if junior devs felt safe to ask 'dumb' questions?\"",
            "\"I'm starting a new community to do just that. That's what this is for. Join me. [link]\""
          ],
          analysis: "You've led with a shared pain, cast a vision for something better, and invited people into a movement, not just a server."
        }
      },
      {
        title: "Handling a Toxic (but Smart) Contributor",
        defaultResponse: {
          conversation: [
            "(In the public channel) \"You're banned. You're a jerk.\""
          ],
          analysis: "This is reactive and public. You've created drama and possibly alienated other members."
        },
        cytApproach: {
          conversation: [
            "(In a private DM) \"Hey [Name]. I want to start by saying your technical contributions to [Project] are A+.\"",
            "\"I'm writing you privately because your comment in [Channel X] yesterday came across as demeaning and broke our 'be kind' rule.\"",
            "(Impact Frame) \"The impact is that it shut down the conversation and made three other members DM me to say they felt unwelcome.\"",
            "(The Choice) \"You're brilliant, but I care more about the safety of the community than the brilliance of one member.\"",
            "\"My question for you is: are you willing to be a leader here and model our 'be kind' principle? Or is this not the right community for you?\""
          ],
          analysis: "You've handled it privately, acknowledged their value, explained the impact, and given them a choice to change or leave."
        }
      },
      {
        title: "Motivating Volunteer Maintainers",
        defaultResponse: {
          conversation: [
            "(In the maintainer channel) \"Hey, we need more PRs. The queue is full. Please help.\""
          ],
          analysis: "This sounds like nagging. It focuses on the problem, not the impact or vision."
        },
        cytApproach: {
          conversation: [
            "(In the maintainer channel) \"Team, I was just looking at the stats.\"",
            "(Impact Frame) \"Because of the work you've done, this project is now used by 50,000 developers. Your code is running at companies like [X] and [Y].\"",
            "(Vision Cast) \"We're not just 'fixing bugs.' We are building the new standard for [X]. Our mission for Q1 is to [Y].\"",
            "\"I know everyone is busy. I am so grateful for your time. Let's look at the queue and see what we are most excited to tackle.\""
          ],
          analysis: "You've reminded them of their impact, cast a vision, and focused on what excites them, not just what needs to be done."
        }
      },
      {
        title: "Handling Public Criticism of Your Project",
        defaultResponse: {
          conversation: [
            "(On Twitter) \"You didn't read the article. My project doesn't have that flaw. You're wrong.\""
          ],
          analysis: "This is defensive and creates an adversarial relationship. You've turned a critic into an enemy."
        },
        cytApproach: {
          conversation: [
            "(On Twitter, replying to the critic) \"Hey [Name], that's a really sharp observation.\"",
            "(Acknowledge & Reframe) \"You're 100% right that the 'simple' example doesn't account for [X]. That's a tradeoff we made for a cleaner 'getting started' guide.\"",
            "\"The advanced way to handle [X] is in our 'pro' docs here [link].\"",
            "\"You've actually pointed out that our docs could be clearer on this. Thank you. You've just helped us make the project better.\""
          ],
          analysis: "You've turned criticism into appreciation, demonstrated humility, and made a critic into a potential contributor."
        }
      },
      {
        title: "Pitching Your Open Source Project to a Sponsor",
        defaultResponse: {
          conversation: [
            "\"Hi, I run [Project]. Please give us money so we can keep working.\""
          ],
          analysis: "This sounds like begging. There's no value proposition for the sponsor."
        },
        cytApproach: {
          conversation: [
            "\"Hi [Sponsor]. I noticed your company is a heavy user of [Project].\"",
            "(Impact Frame) \"We're proud that our project is helping your engineers ship code faster.\"",
            "\"Right now, the project is run by 3 volunteers. We're at a crossroads: to build the 'enterprise-grade' features your teams need (like SSO, audits), we need full-time support.\"",
            "(Vision Cast) \"My proposal is a sponsorship that lets us hire one full-time dev. The impact for you is that you get your #1 feature request (SSO) built in 90 days.\"",
            "\"This isn't a 'donation'; it's a 'procurement' for a feature you need.\""
          ],
          analysis: "You've reframed sponsorship as a business transaction with clear value, not charity."
        }
      }
    ],
    improvToolkitPrompts: [
      "You're starting a developer community from scratch. How do you pitch the vision and get the first 100 members?",
      "Address conflict in your open source community between maintainers and contributors with different visions.",
      "Present your case for why developers should contribute to your open source project at a meetup.",
      "You're launching a podcast about software development. Pitch it in a way that gets guests and listeners excited.",
      "Navigate a PR crisis in your open source project where a controversial decision upset the community.",
      "Motivate volunteer maintainers in your project who are burning out but the community depends on them."
    ],
    color: "#EC4899"
  },
  {
    id: "level-10-the-conference-keynote",
    level: 10,
    title: "The Conference Keynote",
    subtitle: "Becoming a Recognized Expert",
    description: "Master the art of high-stakes presentations. Learn to command large audiences, deliver powerful keynotes, and contribute meaningfully to the wider tech community.",
    coreTechnique: {
      name: "All 5 CYT Techniques Combined",
      description: "Combining all techniques (Framing, Diagnosis, Impact, Discovery, and Vision) to deliver transformative keynotes."
    },
    playbook: [
      {
        title: "The 'Mindset Shift' Keynote",
        defaultResponse: {
          conversation: [
            "\"Hi everyone. It's been a tough year. We've had layoffs, and AI is scary. But I think if we just keep learning and work hard, it'll be okay. So, keep your chins up. Thanks!\""
          ],
          analysis: "This is hollow and uninspiring. It acknowledges pain but offers no real insight or transformation."
        },
        cytApproach: {
          conversation: [
            "(Speaking calmly, on stage) \"It's been a tough year.\"",
            "(Diagnostic Question) \"How many of you are tired? How many of you are... a little scared? You're looking at AI, you're seeing layoffs, and you're wondering: 'Am I still relevant?'\"",
            "(Pause) \"I'm here to tell you: that is the wrong question.\"",
            "(Impact Framing) \"For 20 years, our industry has defined our value by what we do. We wrote JavaScript. We built APIs. We were 'coders'. And now, a machine can do that 'what'.\"",
            "(Vision Casting) \"But 'what' was never our value. Our true value has always been our 'why'. Our value is our curiosity. Our value is our resilience. Our value is the human quality a machine will never have: Hope.\"",
            "(Collaborative Discovery) \"AI is not a 'replacement.' It's a 'promotion.' It's promoting us away from being 'coders' and into being 'problem-solvers'.\"",
            "(Call to Action) \"So my call to action for you is this: Stop defining yourself by the code you write. Start defining yourself by the problems you solve. Thank you.\""
          ],
          analysis: "You've combined all 5 CYT techniques to create a powerful, transformative message that shifts mindsets and inspires action."
        }
      },
      {
        title: "Challenging a 'Sacred Cow'",
        defaultResponse: {
          conversation: [
            "\"Stop using [Framework X]! It's terrible, and here's why!\""
          ],
          analysis: "This is combative and alienates half your audience immediately. You sound like a troll, not a thought leader."
        },
        cytApproach: {
          conversation: [
            "\"[Framework X] is one of the most popular tools in the world. It got us here.\"",
            "(Diagnose) \"But what if the 'problems' it solved in 2018 are no longer our biggest problems in 2026?\"",
            "(Impact Frame) \"We chose [X] because it gave us [Y]. But the 'so what' is that it cost us [Z].\"",
            "(Vision Cast) \"What if we could have the best of both worlds? What if we took the lessons from [X] and built something new?\"",
            "\"I'm not here to tell you 'X is bad.' I'm here to ask you: 'What comes next?'\""
          ],
          analysis: "You've challenged a widely-held belief with respect, nuance, and vision, making people think rather than fight."
        }
      },
      {
        title: "The 'Hostile Q&A'",
        defaultResponse: {
          conversation: [
            "Audience: \"Everything you just said is wrong. [Framework Y] already does all this, and it's faster.\"",
            "You: \"Well, you're wrong. If you'd listened, you'd know...\""
          ],
          analysis: "You've turned the audience against you. Even if you're right, you look defensive and arrogant."
        },
        cytApproach: {
          conversation: [
            "Audience: \"Everything you just said is wrong. [Framework Y] already does all this, and it's faster.\"",
            "You: (Breathe. Be calm.) \"That's a great point, and I'm a huge fan of [Framework Y].\"",
            "(Diagnose) \"When you say it 'does all this,' what's the main feature you're referring to?\"",
            "Audience: \"Its data-fetching!\"",
            "You: \"Exactly! Its data-fetching is S-tier.\"",
            "(Reframing/Discovery) \"In fact, the reason I'm proposing this new idea is because the rest of the framework... the 'routing' and 'state'... hasn't kept up. What if we could take [Y]'s data-fetching and combine it with [Z]'s router? Wouldn't that be the 'best of both worlds' you're looking for?\""
          ],
          analysis: "You've turned a hostile question into a collaborative conversation, demonstrating grace under pressure and winning the audience."
        }
      },
      {
        title: "The Powerful Call to Action",
        defaultResponse: {
          conversation: [
            "\"So, in conclusion, that's how [X] works. You should go try it. Thanks.\""
          ],
          analysis: "This is weak and forgettable. There's no emotional hook or specific action to take."
        },
        cytApproach: {
          conversation: [
            "\"So, what's the one thing I want you to remember?\"",
            "(Vision Cast) \"We have a choice. We can keep building our apps the 'old' way. Or, we can choose the 'fast' path. The 'simple' path.\"",
            "(Call to Action) \"My challenge to you is this: go home, find one 'loading spinner' in your app, and delete it. Replace it with this new pattern.\"",
            "\"Don't just learn this. Go do this. And start building 'fast by default.' Thank you.\""
          ],
          analysis: "You've given a clear, specific, actionable challenge that's memorable and achievable, turning learning into action."
        }
      },
      {
        title: "Redefining 'Success' for Developers",
        defaultResponse: {
          conversation: [
            "\"To be a 10x developer, you have to be smart and write a lot of code.\""
          ],
          analysis: "This reinforces the status quo and offers no new insight or transformation."
        },
        cytApproach: {
          conversation: [
            "\"We've been told that a '10x' developer is someone who writes 10x more code.\"",
            "(Impact Frame) \"But the impact of 'more code' is 'more bugs' and 'more maintenance.' That's not a 10x developer; that's a 10x problem.\"",
            "(Vision Cast) \"The real 10x developer is the one who deletes 10x more code. It's the engineer who stops the company from building the wrong feature. It's the mentor who makes 10 other developers 1x better.\"",
            "\"Stop trying to be a '10x coder.' Start trying to be a '10x multiplier'.\""
          ],
          analysis: "You've reframed success with a compelling counternarrative that challenges assumptions and inspires a new way of thinking."
        }
      }
    ],
    improvToolkitPrompts: [
      "You have 60 seconds to introduce a keynote speaker who is about to change the world. Make us excited!",
      "Summarize your biggest lesson from your entire career in one minute.",
      "If you could give one piece of advice to your past self at the start of your career, what would it be and why?",
      "What's the one thing you believe truly sets a good developer apart from a great one?",
      "Imagine you're concluding a major conference talk. What is your final, most memorable statement or call to action?",
      "Deliver the opening 2 minutes of a keynote that makes 1000 developers sit up and pay attention.",
      "You're being interviewed on stage at a major conference. Answer: 'What's the future of our industry?'"
    ],
    color: "#9333EA"
  }
];
