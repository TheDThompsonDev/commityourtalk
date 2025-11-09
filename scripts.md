The Complete CYT Playbook: 50 Conversation Scripts
Level 1: The Debugger's Dialogue
Core Technique: Structured Framing (Organizing thoughts under pressure using "What, So What, Now What?")

Script 1.1 - Asking for Help

The "Default" Conversation: (Slacks a senior dev) "Hey, I'm stuck on the new ticket. Can you help?" The "CYT Approach" (Successful Conversation): (Slacks a senior dev) "Hey [Senior Dev]. I'm stuck on ticket 235 (the auth bug).

What I'm trying to do: Get the user's role from the JWT.

What I've already tried: I've tried jwt.decode(), checked the user.payload, and read the auth service docs.

My specific question is: Am I looking in the wrong place for the role, or do I need to add it to the token's scope somewhere?"

Script 1.2 - Don't Know the Answer in a Meeting

The "Default" Conversation: (Put on the spot) "Uh... wow. I... I don't know." The "CYT Approach" (Successful Conversation): (Put on the spot) "That's a great question.

What (Acknowledge): My initial thought is [X], but I don't have the data to back that up.

So What (The Gap): I'd need to check the production logs to confirm.

Now What (The Action): I don't want to give you the wrong answer. I will find out and slack the correct answer to this group by 3 PM today."

Script 1.3 - Running Late on a Deadline

The "Default" Conversation: (Silence until the deadline. Then, at the 5 PM standup) "Yeah, so... I didn't get the feature done. I ran into some issues." The "CYT Approach" (Successful Conversation): (It's Tuesday, the deadline is Friday) "Hey [Manager], I'm sending a proactive update on the 'Project X' deadline.

What (The Status): I'm currently at the database integration step.

So What (The Problem): I've discovered the API we're using has an undocumented rate limit, which is much slower than we planned.

Now What (The New Plan): This adds about one day of work. I'm proposing we move the delivery date to Monday EOD. Does that work, or should we find a way to cut scope?"

Script 1.4 - Making an Introduction in a New Group

The "Default" Conversation: "Hi, I'm Danny. I'm a software engineer." The "CYT Approach" (Successful Conversation): "Hi everyone, I'm Danny.

Who I am: I'm a senior engineer on the Platform team.

What I do: My team and I are currently working on the new CI/CD pipeline.

Why I'm here: I'm excited to learn from this group and find ways our new pipeline can help make everyone's lives easier."

Script 1.5 - Communicating a Mistake in Stand-up

The "Default" Conversation: "Yesterday, the build was red. I'm looking into it. Not sure what happened." The "CYT Approach" (Successful Conversation): "Morning, team. I have a high-priority fix I'm working on.

What (The Problem): Yesterday, I pushed a change that I now realize broke the login on staging.

So What (The Impact): This means the QA team is currently blocked. My apologies for that.

Now What (The Fix): I've already identified the fix. I'm rolling it back right now and will have it resolved in 10 minutes. I've also added a new ticket to write the missing test."

Level 2: The Architect's Articulation
Core Technique: Diagnostic Questions (Asking "What," "How," "Why" to uncover the real problem)

Script 2.1 - Vague Requirement from a PM

The "Default" Conversation: PM: "We need an 'admin' role for users." Engineer: "Okay, I'll add a new 'admin' boolean to the user model." (Goes away for a week, builds the wrong thing). The "CYT Approach" (Successful Conversation): PM: "We need an 'admin' role for users." Engineer: (Diagnose) "Happy to build that. To make sure I get it right, what's the #1 thing you expect an 'admin' to be able to do that a 'user' can't?" PM: "Oh, they need to be able to edit other people's posts." Engineer: (Diagnose Deeper) "Got it. Just editing, or deleting as well? And what about seeing analytics? Who are we giving this role to?"

Script 2.2 - Stakeholder Keeps Changing Requirements

The "Default" Conversation: "You again? You just changed this yesterday! I already built the first version!" The "CYT Approach" (Successful Conversation): "Thanks for the update. I'm noticing this has changed a few times, which is totally normal for a new project.

(Diagnose) It seems like we're still honing the core problem. Can we take 10 minutes to walk through the user's journey one more time?

My goal is to make sure what I build for you next is the final version, so we don't waste any more of your time on changes."

Script 2.3 - The "Simple" Feature Request

The "Default" Conversation: Founder: "I need a 'Forgot Password' link." Engineer: "That's not simple. That involves tokens, database writes, email servers, and front-end state. That's a week of work." The "CYT Approach" (Successful Conversation): Founder: "I need a 'Forgot Password' link." Engineer: "Great idea, that's a must-have.

(Diagnose) "To help me scope this, what's the 'Day 1' version?

Is it a fully automated email with a 24-hour expiring token?

Or, is the Day 1 version a link that just sends an email to support, and we reset it manually?

Path 1 is about a week, Path 2 is something I can get done for you this afternoon. What's the bigger priority for you: speed or automation?"

Script 2.4 - A Stakeholder is Visibly Frustrated in a Meeting

The "Default" Conversation: (You ignore it and keep talking faster, hoping to finish the presentation.) The "CYT Approach" (Successful Conversation): (You pause your presentation.) "Hey [Stakeholder], I'm sensing some frustration, and I want to make sure this is useful.

(Diagnose) "The part I was just explaining about the database... what's your main concern about that? Is it the timeline, or the cost?"

(Listen)

"Thank you, that's a valid concern. Let's focus on that for a minute..."

Script 2.5 - Pushing Back on an Unfeasible Design

The "Default" Conversation: Designer: "Here's the new profile page with the custom physics-based animation!" Engineer: "We can't build this. This is impossible. The library for this is 500kb and will break the site. No." The "CYT Approach" (Successful Conversation): Designer: "Here's the new profile page with the custom physics-based animation!" Engineer: "Wow, this looks incredible. I love the 'pop' it gives the page.

(Diagnose) "What's the main feeling you're trying to get from this animation? Is it the 'playfulness,' or the 'smoothness'?"

Designer: "The 'playfulness'!"

"Okay. The exact library for this is a bit heavy, and I'm worried it will slow the page down.

(Collaborate) "But what if we could get that same 'playful' feeling with a simpler CSS-based animation? It would be 90% of the effect, but 100% faster. Would you be open to me mocking that up?"

Level 3: The Collaborator's Craft
Core Technique: Diagnostic Questions + Structured Framing (for difficult peer-to-peer conversations)

Script 3.1 - Receiving a Harsh, Vague Code Review

The "Default" Response (Receiving): (In the PR: "What are you talking about? This is fine. The factory pattern is overkill here.") The "CYT Approach" (Successful Response): (In the PR: "Thanks for the review. I'm not sure I follow your concern.

What problem are you seeing with the current approach?

Can you help me understand how the factory pattern would solve that problem here?

Happy to jump on a 5-min call if it's easier!")

Script 3.2 - Giving a Code Review to a Junior

The "Default" Review (Giving): "This is inefficient. Don't use a forEach here, you're causing an N+1 query. You need to use a single SQL lookup and map the data. Please fix." The "CYT Approach" (Successful Review): (In the PR: "Great job getting this feature working! The logic is correct, which is the hard part.

I have one suggestion for the data loading.

(Diagnose) I'm curious if you considered what happens when this function has 1,000 users? This forEach loop will run 1,000 separate database queries.

I wonder what would happen if we fetched all the users in one query outside the loop, and then used a simple map to find the user for each item?

Let me know what you think!")

Script 3.3 - Disagreeing with a Peer's Technical Decision

The "Default" Conversation: (In a public channel) "Why did you use React Query for this? That's not right. We should be using a simple useState." The "CYT Approach" (Successful Conversation): (In a private DM) "Hey [Name], I saw your PR for the new service. Looks great.

(Diagnose) "I was curious about your choice to use React Query. My assumption was this was a simple 'fetch-once' component, but your choice makes me think it's more complex.

Can you walk me through your thinking? I'm wondering if I'm missing something, like caching or re-validation needs."

Script 3.4 - Your Teammate is Defensive About Feedback

The "Default" Conversation: You: "This part is wrong." Them: "No it's not, it works on my machine!" You: "You're not listening. I'm telling you, it's wrong." The "CYT Approach" (Successful Conversation): You: "This part here, I'm concerned it might cause X." Them: "No it's not, it works on my machine!" You: (Pause) "You're right. I'm sorry. I phrased that badly.

(Diagnose) "It does work on your machine. Can you help me understand the part I'm missing? What's the difference between your machine and the staging environment where it's failing?"

Script 3.5 - A Colleague Keeps Interrupting in Meetings

The "Default" Conversation: (In the meeting) "Will you let me finish? You keep interrupting me!" The "CYT Approach" (Successful Conversation): (In a private DM after the meeting) "Hey [Name], great points in that meeting.

(Diagnose) "I wanted to ask you something. I noticed you were really passionate about the topic, and you jumped in a few times while I was talking. I'm guessing you have a lot of ideas here.

"Can I ask that in the next meeting, you let me get my full thought out, and then I'll 'pass the baton' to you? I just want to make sure we're not talking over each other and the PM can follow us."

Level 4: The Mentor's Method
Core Technique: Impact Framing (Connecting a technical problem to a real-world consequence—the "so what?")

Script 4.1 - Explaining Why Unit Testing Matters

The "Default" Conversation: "Your code works, but you forgot to write unit tests. Our rule is 80% coverage. Please add them." The "CYT Approach" (Successful Conversation): "Hey, the feature logic looks solid.

(Impact Frame) "I want to talk about the tests. Right now, this code works. But what's the impact of not having tests?

"The 'so what' is that in 6 months, another dev (maybe you!) will change something nearby, this code will break, and no one will know. A test isn't for now; it's a gift to your future self. It's the 'alarm system' that protects you from breaking the app.

(Diagnose) "What's one 'edge case' we're worried about that we could write a test for right now?"

Script 4.2 - Mentee Keeps Making the Same Mistake

The "Default" Conversation: (Sighs) "You did it again. You always forget to add the error handling. I've told you this before." The "CYT Approach" (Successful Conversation): "Hey, I noticed this PR is also missing the try/catch block for the API call.

(Diagnose) "This is the third time this has come up. Clearly, my way of explaining it isn't working. What's your process when you write a new function? Where in that process do you think about 'what happens if this fails'?"

(Listen to their answer... "I just try to make it work first.")

"That makes sense. What if we tried this: from now on, write a 'TODO' for the error handling first, before you even write the 'happy path' code? Would that help you remember?"

Script 4.3 - Guiding Someone Through Debugging

The "Default" Conversation: Junior: "I'm stuck. My code is returning undefined." Senior: (Looks for 10 seconds) "Oh, you're missing an await on line 52." The "CYT Approach" (Successful Conversation): Junior: "I'm stuck. My code is returning undefined." Senior: (Acknowledge & Diagnose) "No problem. Let's dig in. What are you seeing?" Junior: "The user.name is undefined." Senior: (Guide with Questions) "Okay. And what's the function that's supposed to get the user? ... Right, fetchUser. What does that function return?" Junior: "It returns... oh... it returns a Promise." Senior: (Guide to the 'Aha!' Moment) "Exactly. So if it returns a promise, but you're trying to access .name right away, what's the 'state' of that promise when your code runs?" Junior: "It's... still pending? ... Oh! I'm not awaiting it!"

Script 4.4 - Mentee is Discouraged About Their Progress

The "Default" Conversation: "It's fine, you're doing great. Imposter syndrome is normal. Just keep going." The "CYT Approach" (Successful Conversation): "I hear you. That feeling of being overwhelmed is normal.

(Diagnose) "What's one thing this week that made you feel stuck?"

(Listen... "I couldn't figure out the Redux store.")

"Okay. But let's look at this PR. Three months ago, do you think you could have set up this API endpoint from scratch? Or written this unit test?

"You're not 'stuck' on Redux. You're learning Redux. You've already mastered the other parts. The 'frustration' you feel is just what 'learning' feels like."

Script 4.5 - Explaining Why We Refactor

The "Default" Conversation: "This code is messy. We need to refactor it to follow the new pattern." The "CYT Approach" (Successful Conversation): "I want to show you something. See this file? I timed it.

(Impact Frame) "It takes a new engineer 3 days to understand this file. The 'so what' is that any bug in this file takes 10x longer to fix.

"This isn't about being 'clean.' This is about being fast. The business impact is that this 'messy' code is costing us speed. By refactoring it, we aren't 'cleaning'; we are 'accelerating' all future work on this feature."

Level 5: The Project Lead's Pitch
Core Technique: Collaborative Discovery (Guiding someone to a solution so they feel ownership)

Script 5.1 - Handling a "Bad" 1-on-1 (Vague Negative Feedback)

The "Default" Response: Boss: "I just feel like your team isn't moving fast enough." You: "What? We're working really hard! We closed 15 tickets last sprint!" The "CYT Approach" (Successful Response): (Breathe. Get curious.) "That's really important feedback. Thank you for sharing it.

(Diagnose) "To help me understand, can you walk me through what you're seeing that makes you feel that way? Is there a specific project you're worried about?"

Boss: "Well, the login feature just seems to be dragging on."

(Impact Frame) "I agree, it is. Right now, my team is splitting its time 50/50 between that feature and three other 'urgent' projects. Because they are context-switching, that one feature is taking twice as long as it should.

(Collaborative Discovery) "I'm curious, in a perfect world, what would you rather have: one project 100% done, or four projects 25% done?"

Boss: "One project 100% done, obviously."

"Great. Then I'd like to propose a solution..."

Script 5.2 - Mediating Team Conflict (React vs. Vue)

The "Default" Response (as a Team Lead): (In Slack) "Hey, let's calm down. Both are good. Let's just pick one and move on." The "CYT Approach" (Successful Response): (In Slack) "This is a great discussion with good points on both sides. It's clearly too important for a text-only chat.

(Take Control) "I'm booking a 30-min meeting for 2 PM with both of you + me to find a path forward. The goal is to agree on a set of tradeoffs, not to 'win.' See you then."

(In the meeting, as mediator) "Okay...

(To Eng A): What's the main problem you see with Approach B?

(To Eng B): What's the main problem you see with Approach A?

(To both): It sounds like A is better for performance and B is better for developer speed.

(Collaborative Discovery) Given our #1 goal for this quarter is X, which of those two tradeoffs is more important for us to get right?"

Script 5.3 - Team Member is Consistently Negative

The "Default" Conversation: (In a team meeting) "Can you please be positive for once, [Name]?" The "CYT Approach" (Successful Conversation): (In a private 1-on-1) "Hey [Name], I wanted to check in. I really value your technical skill and your eye for problems.

(Diagnose) "I've noticed in our last few team meetings that you seem frustrated. In yesterday's meeting, you mentioned the new project was 'doomed.' Can you walk me through what you're seeing that I'm not?"

(Listen... they feel unheard, or see a real risk)

"Okay, that makes sense.

(Impact Frame) "The impact of framing it as 'doomed' in the public meeting, though, is that the junior devs shut down.

(Collaborative Discovery) "What if in the future, you brought these major risks to me first, in our 1-on-1? That way, we can turn it into a concrete proposal for the team, instead of just a problem."

Script 5.4 - Saying "No" to a Stakeholder by Saying "Yes, and..."

The "Default" Conversation: Stakeholder: "I need this new feature in the sprint. It's urgent." You: "No. The sprint is locked. We can't." The "CYT Approach" (Successful Conversation): Stakeholder: "I need this new feature in the sprint. It's urgent." You: "I agree, this looks important.

(Diagnose) "Can you help me understand the urgency? Is this a legal deadline, or a 'go-to-market' one?"

Stakeholder: "It's for the big conference in 3 weeks!"

"Okay, this is a 'tradeoff' conversation, and I want to make you the decider.

(Collaborative Discovery) "Right now, the team is working on [Feature X]. If we pull them off, we can definitely hit your conference deadline. The impact is that [Feature X] will slip.

"Which of these two is the bigger company priority right now? You tell me, and I'll make it happen."

Script 5.5 - Your Manager Wants You to Work the Weekend

The "Default" Conversation: Boss: "I need you to come in this weekend to finish the project." You: "Oh, okay." (You feel resentful and burned out). The "CYT Approach" (Successful Conversation): Boss: "I need you to come in this weekend to finish the project." You: (Pause) "That's a tough ask.

(Diagnose) "Help me understand the urgency. What's the 'hard deadline' that's driving this?"

Boss: "The client demo is Monday morning."

"Okay.

(Collaborative Discovery) "I can work on Saturday, but I can't work on Sunday. What if we 'time-box' it? I'll work 4 hours Saturday to get the 'demo path' 100% stable. The impact is that the 'settings' page won't be done, but the demo will be perfect.

"Would that solve the Monday demo problem?"

Level 6: The Cross-Functional Catalyst
Core Technique: Impact Framing (Mastery Level: Translating technical work into business value)

Script 6.1 - "Why do we need to hire more engineers?"

The "Default" Conversation: "We need more people. We're too slow, and we're all working too hard." The "CYT Approach" (Successful Conversation): (To Finance/Execs) "Our current team of 5 is supporting $10M in revenue.

(Impact Frame) "That means we are at 100% capacity just on 'keep the lights on' work (bugs, maintenance). The business impact is that our 'new feature' velocity is at zero. We literally have no one to put on new, revenue-generating projects.

"Hiring two more engineers isn't a 'cost' for our team; it's an investment that unlocks our ability to build the $5M 'Project X' that Sales is waiting for."

Script 6.2 - Sales Promised an Impossible Feature

The "Default" Conversation: (To your manager) "Tell Sales they're idiots. We can't do this. It's not our problem." The "CYT Approach" (Successful Conversation): (To the Sales lead) "Hey [Sales Lead], congrats on the new client. I want to partner with you to make them successful.

(Diagnose) "Can you walk me through what the client really needs? What's the core problem they're trying to solve?"

(Listen... they need 'reporting'.)

"Okay, 'reporting' is the goal.

(Collaborative Discovery) "The feature they asked for will take 3 months. But what if we could get them 80% of the way there, right now?

"We can give them a raw data export today. Would that solve their immediate pain while we schedule the 'full-featured' version for Q2?"

Script 6.3 - "Why is this taking so long?"

The "Default" Conversation: "Because it's hard! You don't understand, we have to refactor the database, and the old API is a mess..." The "CYT Approach" (Successful Conversation): "That's a fair question. Let me be transparent.

(Structured Frame)

What: When we started, we thought this was just a simple UI change.

So What (The Problem): As we dug in, we discovered that this part of the system is connected to our billing code.

Now What (The Impact): This means we have to be extra careful. The impact of rushing this is that we could break customer payments.

"So, we're taking an extra 3 days to build a 'safe' version with full testing. Our #1 priority is protecting customer data over speed. I hope you agree that's the right tradeoff."

Script 6.4 - Convincing the PM to Pay Down Tech Debt

The "Default" Conversation: "We can't build your new feature. Our tech debt is out of control. We need two 'refactor sprints'." The "CYT Approach" (Successful Conversation): "Hey, I was looking at your roadmap for Q4, and I'm really excited about the new 'search' feature. I've identified a major risk that will prevent us from hitting that goal."

PM: "A risk? What?"

(Impact Frame) "Our current search module is the oldest code in the app. My team estimates that 25% of all our bug reports come from that one file.

"The business impact is that your 'search' feature will be built on a 'house of cards' and will likely be slow and buggy from day one.

(Collaborative Discovery) "I have a proposal. If we take one sprint now to rewrite that module... we'll build the new 'search' feature twice as fast in the following sprint.

"Would you rather we build it fast and buggy, or take one extra sprint to build it right and fast forever?"

Script 6.5 - Sales is Upset About Bugs

The "Default" Conversation: "We're fixing them as fast as we can! Stop complaining!" The "CYT Approach" (Successful Conversation): (To the Sales lead) "I hear you. It's unacceptable that the demo is buggy.

(Impact Frame) "Your team can't sell, and my team looks bad. We have the same problem.

(Diagnose) "Can you walk me through the 'Top 3' bugs that are actually killing your demos? Not the whole list, but the ones that make you fail."

(Listen... "It's the login and the dashboard.")

"Okay. My team will drop everything else. We will have the login and dashboard 100% stable for you by EOD tomorrow. In return, we need you to 'hold' the other, lower-priority bugs for one week. Can we agree to that?"

Level 7: The Organizational Architect
Core Technique: All Techniques Combined (Framing + Diagnosis + Impact + Discovery)

Script 7.1 - Pitching a "Boring" but Critical Project (Tech Debt)

The "Default" Conversation: "We have too much tech debt. We need to stop and refactor. Our engineers are unhappy, and our code is bad." The "CYT Approach" (Successful Conversation): (In a presentation to executives) "Good afternoon. I've spent the last month analyzing our engineering velocity, and I've created a data-driven proposal to increase our feature output by 40%."

(Impact Frame) "My analysis is simple: Right now, we spend 60% of our engineering hours on 'unplanned work'—fixing bugs and system outages. This is costing us $1.2 million in lost productivity per year.

(Collaborative Discovery) "What if we could 'buy back' half of that time?

(Solution) "I'm proposing 'Project Velocity.' We will dedicate a small team for one quarter to fix the 5 'hotspots' that cause 80% of this pain. This is a one-time investment to buy back 30% of our engineering time, forever."

Script 7.2 - Handling a Major Security Breach

The "Default" Conversation: (Rushing into the exec meeting) "This is a disaster. We're breached. Everything is on fire!" The "CYT Approach" (Successful Conversation): (Calmly, in the exec meeting) "Okay, team, we have a critical incident. Here is the 'What, So What, Now What' as of 10:00 AM.

What (The Problem): At 9:15 AM, we identified an unauthorized access to a production database.

So What (The Impact): We immediately shut down the affected service and patched the vulnerability. The 'hole' is closed.

Now What (The Plan): The infra team is now doing a full audit. Our next steps are: A) Confirm the blast radius, B) Prepare a customer comms draft. I need a decision from this group: who is the legal point-person?"

Script 7.3 - Announcing an Unpopular Decision (Hiring Freeze)

The "Default" Conversation: (At a team meeting) "This is hard, but corporate is freezing hiring. No more new people. I know it stinks. Sorry." The "CYT Approach" (Successful Conversation): (At a team meeting) "Team, I want to be transparent about a business decision we've made.

What (The Decision): We are proactively pausing new hiring for Q1.

Why (The Impact Frame): This is not because we're in trouble. This is a proactive, strategic move to protect our current team and our runway in a volatile market.

What it means for you (The 'So What'): This means your role is more important than ever. We must be ruthless about prioritizing.

"This isn't a 'stop' button; it's a 'focus' button. I'm counting on you, and I'm here to clear any roadblocks."

Script 7.4 - Leading a Town Hall When Morale is Low

The "Default" Conversation: "I've heard morale is low. I just want to say, please work hard, things will get better. We appreciate you." The "CYT Approach" (Successful Conversation): "Good morning, team. I asked for this meeting because I've heard the same rumors you have, and I've seen the burnout.

(Diagnose) "I'm not here to give a speech. I'm here to listen. I want to use the next 30 minutes to do a 'live retro.'

"I want to ask two questions:

What is the one thing that is causing you the most 'drag' right now?

What is one small thing we could do next week that would make your life 10% better?

"This isn't a 'magic wand' meeting, but I'm committing to you that I will take the top 3 themes and present an action plan by Friday."

Script 7.5 - Supporting an Unpopular Decision You Disagree With

The "Default" Conversation: (To your team) "Look, I don't get it either. 'Corporate' wants us to use [New Tool X]. I fought them, but they said we have to. So, I guess we have to." The "CYT Approach" (Successful Conversation): (To your team) "Hey team, I have an update on our tooling.

(Structured Frame)

What (The Decision): As a company, we are standardizing on [New Tool X].

So What (The Impact): This means our team will be migrating off of [Old Tool Y] over the next quarter. I know this is a big change. The reason for this is that [Tool X] saves the company [$Z] and [solves Y problem] for the Legal team.

Now What (The Plan): My job is not to debate the 'why'—that's decided. My job is to make this transition as painless as possible for this team.

"So, I need your help. Let's use this meeting to map out all the risks and 'gotchas' so I can build a realistic plan."

Level 8: The Innovator's Influence
Core Technique: Vision Casting (Painting a clear, compelling, emotional picture of the future)

Script 8.1 - Pitching a Conference Talk

The "Default" Talk Proposal: Title: A Deep Dive Into React Server Components Abstract: I will cover the history of React, explain what server components are, and show some code examples. The "CYT Approach" (Successful Proposal): Title: You're Probably Fetching Data Wrong: How Server Components Will Fix Your App Abstract: For years, we've filled our apps with loading spinners. We've accepted this "waterfall" as normal.

(Impact Frame) "But this 'normal' is slow and creates a terrible user experience.

(Vision Casting) "What if we could build apps that were 'fast by default'? What if 90% of your data-fetching code... just... disappeared? Imagine an app that's as interactive as React, but as fast as a static site.

"This isn't a dream. This is what React Server Components do. In this talk, I'll show you why they will fundamentally change how you build for the web."

Script 8.2 - Pitching a "Boring" Project to Your Team

The "Default" Conversation: "Hey team, our next project is to build a new CI/CD pipeline." The "CYT Approach" (Successful Conversation): "Team, I have a question. What if our build time went from 40 minutes to 4?

(Vision Cast) "What if you could push a hotfix with total confidence in 5 minutes, not 50? What if you never had to 'babysit' a deployment again?

"That's our next project. We're not 'building a pipeline.' We're buying back our time and eliminating our deployment anxiety. We're building our freedom."

Script 8.3 - Arguing a Controversial Tech Opinion

The "Default" Conversation: (On Twitter) "Microservices are stupid, and you're all doing it wrong." The "CYT Approach" (Successful Conversation): (On a blog) "Our industry loves microservices, but what's the hidden impact?

(Impact Frame) "We've traded a simple monolith for a complex, distributed system that most of our teams aren't trained for. The 'so what' is that our 'time to first line of code' for a new engineer is now weeks, not hours.

(Vision Cast) "What if we refocused on a 'majestic monolith' first? What if we valued 'speed of shipping' over 'purity of architecture'?"

Script 8.4 - Telling Your Career Story in an Interview

The "Default" Conversation: "First I worked at [Company A] as a junior, then I got promoted at [Company B]... I'm a hard worker." The "CYT Approach" (Successful Conversation): "My career has had one theme: impact.

"At [Company A], I was a junior, but I saw the team was wasting time on deployments. I built a script that automated it and saved us 5 hours a week.

"At [Company B], I led a team that refactored a legacy system. The impact was a 50% drop in bugs and a 20% increase in team morale.

"I'm not just a 'coder.' I'm a 'problem-solver,' and that's what I want to do for you."

Script 8.5 - Pitching a "Crazy" New App Idea

The "Default" Conversation: "I have an idea for an app. It's like Uber, but for [X]." The "CYT Approach" (Successful Conversation): (Impact Frame) "What's the one thing everyone hates? Wasting a Saturday at the mechanic.

(Vision Cast) "What if you never had to do that again? Imagine you tap a button, a certified mechanic comes to your house while you're at work, and by 5 PM, your car is fixed. No lines, no Ubers, no wasted weekend.

"That's the app. It's 'peace of mind' for car owners."

Level 9: The Community Builder
Core Technique: Vision Casting (Mastery Level: Building a movement)

Script 9.1 - Starting a New Community

The "Default" Conversation: (On Twitter) "Hi, I'm starting a Discord for devs. Here's the link." The "CYT Approach" (Successful Conversation): (On Twitter) "I'm tired of 'tech help' channels that are full of ego and 'just read the docs' snark.

(Pain + Vision) "What if we could build a space where the #1 rule is 'be kind,' and the goal is to mentor, not just 'answer'? What if junior devs felt safe to ask 'dumb' questions?

"I'm starting a new community to do just that. That's what this is for. Join me. [link]"

Script 9.2 - Handling a Toxic (but Smart) Contributor

The "Default" Response: (In the public channel) "You're banned. You're a jerk." The "CYT Approach" (Successful Response): (In a private DM) "Hey [Name]. I want to start by saying your technical contributions to [Project] are A+.

"I'm writing you privately because your comment in [Channel X] yesterday came across as demeaning and broke our 'be kind' rule.

(Impact Frame) "The impact is that it shut down the conversation and made three other members DM me to say they felt unwelcome.

(The Choice) "You're brilliant, but I care more about the safety of the community than the brilliance of one member.

My question for you is: are you willing to be a leader here and model our 'be kind' principle? Or is this not the right community for you?"

Script 9.3 - Motivating Volunteer Maintainers

The "Default" Conversation: (In the maintainer channel) "Hey, we need more PRs. The queue is full. Please help." The "CYT Approach" (Successful Conversation): (In the maintainer channel) "Team, I was just looking at the stats.

(Impact Frame) "Because of the work you've done, this project is now used by 50,000 developers. Your code is running at companies like [X] and [Y].

(Vision Cast) "We're not just 'fixing bugs.' We are building the new standard for [X]. Our mission for Q1 is to [Y].

"I know everyone is busy. I am so grateful for your time. Let's look at the queue and see what we are most excited to tackle."

Script 9.4 - Handling Public Criticism of Your Project

The "Default" Conversation: (On Twitter) "You didn't read the article. My project doesn't have that flaw. You're wrong." The "CYT Approach" (Successful Conversation): (On Twitter, replying to the critic) "Hey [Name], that's a really sharp observation.

(Acknowledge & Reframe) "You're 100% right that the 'simple' example doesn't account for [X]. That's a tradeoff we made for a cleaner 'getting started' guide.

"The advanced way to handle [X] is in our 'pro' docs here [link].

"You've actually pointed out that our docs could be clearer on this. Thank you—you've just helped us make the project better."

Script 9.5 - Pitching Your Open Source Project to a Sponsor

The "Default" Conversation: "Hi, I run [Project]. Please give us money so we can keep working." The "CYT Approach" (Successful Conversation): "Hi [Sponsor]. I noticed your company is a heavy user of [Project].

(Impact Frame) "We're proud that our project is helping your engineers ship code faster.

"Right now, the project is run by 3 volunteers. We're at a crossroads: to build the 'enterprise-grade' features your teams need (like SSO, audits), we need full-time support.

(Vision Cast) "My proposal is a sponsorship that lets us hire one full-time dev. The impact for you is that you get your #1 feature request (SSO) built in 90 days.

"This isn't a 'donation'; it's a 'procurement' for a feature you need."

Level 10: The Conference Keynote
Core Technique: All 5 CYT Techniques Combined

Script 10.1 - The "Mindset Shift" Keynote

The "Default" Talk: "Hi everyone. It's been a tough year. We've had layoffs, and AI is scary. But I think if we just keep learning and work hard, it'll be okay. So, keep your chins up. Thanks!" The "CYT Approach" (Successful Talk): (Speaking calmly, on stage) "It's been a tough year.

(Diagnostic Question) "How many of you are tired? How many of you are... a little scared? You're looking at AI, you're seeing layoffs, and you're wondering: 'Am I still relevant?'

(Pause) "I'm here to tell you: that is the wrong question.

(Impact Framing) "For 20 years, our industry has defined our value by what we do. We wrote JavaScript. We built APIs. We were 'coders'. And now, a machine can do that 'what'.

(Vision Casting) "But 'what' was never our value. Our true value has always been our 'why'. Our value is our curiosity. Our value is our resilience. Our value is the human quality a machine will never have: Hope.

(Collaborative Discovery) "AI is not a 'replacement.' It's a 'promotion.' It's promoting us away from being 'coders' and into being 'problem-solvers'.

(Call to Action) "So my call to action for you is this: Stop defining yourself by the code you write. Start defining yourself by the problems you solve. Thank you."

Script 10.2 - Challenging a "Sacred Cow"

The "Default" Talk: "Stop using [Framework X]! It's terrible, and here's why!" The "CYT Approach" (Successful Talk): "[Framework X] is one of the most popular tools in the world. It got us here.

(Diagnose) "But what if the 'problems' it solved in 2018 are no longer our biggest problems in 2026?

(Impact Frame) "We chose [X] because it gave us [Y]. But the 'so what' is that it cost us [Z].

(Vision Cast) "What if we could have the best of both worlds? What if we took the lessons from [X] and built something new?

"I'm not here to tell you 'X is bad.' I'm here to ask you: 'What comes next?'"

Script 10.3 - The "Hostile Q&A"

The "Default" Response: Audience: "Everything you just said is wrong. [Framework Y] already does all this, and it's faster." You: "Well, you're wrong. If you'd listened, you'd know..." The "CYT Approach" (Successful Response): Audience: "Everything you just said is wrong. [Framework Y] already does all this, and it's faster." You: (Breathe. Be calm.) "That's a great point, and I'm a huge fan of [Framework Y].

(Diagnose) "When you say it 'does all this,' what's the main feature you're referring to?"

Audience: "Its data-fetching!"

You: "Exactly! Its data-fetching is S-tier.

(Reframing/Discovery) "In fact, the reason I'm proposing this new idea is because the rest of the framework... the 'routing' and 'state'... hasn't kept up. What if we could take [Y]'s data-fetching and combine it with [Z]'s router? Wouldn't that be the 'best of both worlds' you're looking for?"

Script 10.4 - The Powerful Call to Action

The "Default" Talk: "So, in conclusion, that's how [X] works. You should go try it. Thanks." The "CYT Approach" (Successful Talk): "So, what's the one thing I want you to remember?

(Vision Cast) "We have a choice. We can keep building our apps the 'old' way. Or, we can choose the 'fast' path. The 'simple' path.

(Call to Action) "My challenge to you is this: go home, find one 'loading spinner' in your app, and delete it. Replace it with this new pattern.

"Don't just learn this. Go do this. And start building 'fast by default.' Thank you."

Script 10.5 - Redefining "Success" for Developers

The "Default" Talk: "To be a 10x developer, you have to be smart and write a lot of code." The "CYT Approach" (Successful Talk): "We've been told that a '10x' developer is someone who writes 10x more code.

(Impact Frame) "But the impact of 'more code' is 'more bugs' and 'more maintenance.' That's not a 10x developer; that's a 10x problem.

(Vision Cast) "The real 10x developer is the one who deletes 10x more code. It's the engineer who stops the company from building the wrong feature. It's the mentor who makes 10 other developers 1x better.

"Stop trying to be a '10x coder.' Start trying to be a '10x multiplier'."