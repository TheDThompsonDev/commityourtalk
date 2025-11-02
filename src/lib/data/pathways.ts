import { Pathway } from '../types/curriculum';

export const pathways: Pathway[] = [
  {
    id: 'level-1-debuggers-dialogue',
    level: 1,
    title: "The Debugger's Dialogue",
    subtitle: 'Building Foundational Confidence',
    description: 'Start your journey to confident communication. Learn to structure your thoughts, find your voice, and overcome initial speaking anxiety in a safe, supportive environment.',
    focus: 'Overcoming initial speaking anxiety, structuring thoughts, and finding your voice in a safe environment.',
    weeklyTopics: [
      'Making Introductions',
      'Explaining Simple Concepts',
      'Telling a Short Story'
    ],
    improvToolkitPrompts: [
      'Explain a complex concept (e.g., "API," "asynchronous") as if you were talking to a 12-year-old.',
      'What was the first thing you ever coded? Describe the project and the feeling you had.',
      'Describe the purpose of a git rebase versus a git merge in a way a new PM could understand.',
      'Tell the story of the most frustrating bug you ever fixed. What was the "aha!" moment?',
      'Describe a time you had a major "imposter syndrome" moment and how you pushed through it.'
    ],
    experimentalChallenges: [
      {
        title: 'The "What If" Code Review',
        description: 'One person shares a (non-project) code snippet. The others must practice giving supportive, constructive feedback, phrased as a question: "I like this. What if we tried [X]?" or "I wonder what the impact of [Y] would be?" (Teaches diplomatic communication.)'
      },
      {
        title: 'The "Two Audiences" (Simplified)',
        description: 'Pick one topic. Minute 1: Explain it to a fellow dev. Minute 2: Explain it to a non-technical friend. (Focuses on basic audience adaptation.)'
      }
    ],
    goals: [
      'Introduction to Your Stack',
      'Code Review Commentary',
      'Stand-up Star',
      'The "Unblocked" Moment',
      'The "Why This Matters" Minute'
    ],
    skillsDeveloped: [
      'Active listening',
      'Basic speech structure',
      'Clear articulation',
      'Managing nervousness',
      'Succinct explanations',
      'Audience-centric thinking'
    ],
    color: '#3685ff'
  },
  {
    id: 'level-2-architects-articulation',
    level: 2,
    title: "The Architect's Articulation",
    subtitle: 'Mastering Technical Explanations',
    description: 'Develop the ability to explain complex technical concepts clearly to varied audiences. Learn to handle questions effectively and use visuals to enhance your message.',
    focus: 'Clearly explaining complex technical concepts to varied audiences, handling questions, and using visuals effectively.',
    weeklyTopics: [
      'Explaining Technical Trade-offs',
      'Simplifying Complex Architecture',
      'Preparing for Q&A'
    ],
    improvToolkitPrompts: [
      'Explain your favorite IDE feature. Why can\'t you live without it?',
      'What\'s the most misunderstood concept in your specific tech stack? Clarify it.',
      'What\'s one "best practice" you think is outdated or wrong?',
      'Describe a code review (that you gave or received) that went really well. What made it great?',
      'Convince us to try a new tool, library, or framework you\'ve recently discovered.'
    ],
    experimentalChallenges: [
      {
        title: 'The "Audience Persona" Drill',
        description: 'Each person gets a prompt. Before speaking, they must state who they imagine their audience is (e.g., "I\'m explaining this to a CEO," "I\'m explaining this to a junior dev"). They then deliver their 2-3 minute explanation tailored to that persona. (Emphasizes audience adaptation.)'
      },
      {
        title: 'The "Investigative Intro" Drill',
        description: 'For any technical topic, craft an introduction that starts with a question or a relatable problem statement that the audience might be experiencing, leading them into why your talk is important.'
      }
    ],
    goals: [
      'Deep Dive Demo',
      'Explaining to the Client/PM',
      'API Walkthrough',
      'Defending a Design Choice',
      'The Investigative Intro'
    ],
    skillsDeveloped: [
      'Technical storytelling',
      'Q&A management',
      'Visual aid design',
      'Audience adaptation',
      'Logical argumentation',
      'Problem-framing'
    ],
    color: '#FF5F87'
  },
  {
    id: 'level-3-project-leads-pitch',
    level: 3,
    title: "The Project Lead's Pitch",
    subtitle: 'Leading with Your Voice',
    description: 'Step into leadership through communication. Learn to influence teams, lead discussions, deliver persuasive arguments, and motivate others toward shared goals.',
    focus: 'Influencing teams, leading discussions, delivering persuasive arguments, and motivating others.',
    weeklyTopics: [
      'Presenting Project Updates',
      'Advocating for Change',
      'Constructive Feedback'
    ],
    improvToolkitPrompts: [
      'What tech trend are you most excited about for the next year, and why?',
      'Pitch a completely useless but hilarious new app idea.',
      'What\'s your most controversial (but polite) tech opinion?',
      'Tell us about a technical "failure" that taught you a valuable lesson.',
      'Describe a time you successfully influenced a team decision.'
    ],
    experimentalChallenges: [
      {
        title: 'The "Devil\'s Advocate" Drill',
        description: 'One person proposes a technical choice (e.g., "We should use microservices for our next project"). The rest of the group must politely challenge that idea, acting as "Devil\'s Advocates." The speaker practices defending their idea calmly and with logic.'
      },
      {
        title: 'The Mediator',
        description: 'Give the group a scenario: "Two senior devs are in a stalemate over React vs. Vue." One person must act as the team lead and mediate, only asking questions to find common ground.'
      }
    ],
    goals: [
      'The Team Update',
      'Advocating for Best Practices',
      'Mentorship Moment',
      'Conflict Resolution through Communication',
      'The Impact Interview'
    ],
    skillsDeveloped: [
      'Team leadership',
      'Persuasive speaking',
      'Motivational communication',
      'Negotiation',
      'Coaching',
      'Uncovering needs through questioning'
    ],
    color: '#19C37D'
  },
  {
    id: 'level-4-innovators-influence',
    level: 4,
    title: "The Innovator's Influence",
    subtitle: 'Inspiring Change and Thought Leadership',
    description: 'Craft impactful presentations for broader audiences. Learn to inspire innovation, communicate business value, and build your professional brand as a thought leader.',
    focus: 'Crafting impactful presentations for broader audiences, inspiring innovation, and building a professional brand.',
    weeklyTopics: [
      'Communicating Business Value',
      'Envisioning the Future',
      'Personal Branding through Talks'
    ],
    improvToolkitPrompts: [
      'What\'s one revolutionary idea in tech that you think is just around the corner?',
      'If you could instantly solve one major problem in software development, what would it be and why?',
      'What\'s a common misconception about being a developer that you wish you could clear up for everyone?',
      'Describe a project you worked on where the "why" was more impactful than the "how."',
      'Pitch a new feature for a well-known product, focusing only on the user benefits and emotional impact.'
    ],
    experimentalChallenges: [
      {
        title: 'The "5 Whys" of Value',
        description: 'One person presents a feature (e.g., "We\'re adding a new button to the dashboard"). The group must ask "Why?" five times until the speaker gets to the core human or business value. (Focuses on articulating deep impact.)'
      },
      {
        title: 'The "Future Headline"',
        description: 'Describe a future where your technology (or a concept) has achieved its full potential. Imagine you\'re writing a news headline about it 5 years from now – what does it say, and what\'s the story behind it?'
      }
    ],
    goals: [
      'The "Why" Behind the Code',
      'Future Tech Vision',
      'Personal Growth Journey',
      'Lightning Talk Mastery'
    ],
    skillsDeveloped: [
      'Inspirational speaking',
      'Thought leadership',
      'Advanced presentation skills',
      'Storytelling for impact',
      'Brand building',
      'Creating compelling futures'
    ],
    color: '#FFB020'
  },
  {
    id: 'level-5-conference-keynote',
    level: 5,
    title: 'The Conference Keynote',
    subtitle: 'Becoming a Recognized Expert',
    description: 'Master the art of high-stakes presentations. Learn to command large audiences, deliver powerful keynotes, and contribute meaningfully to the wider tech community.',
    focus: 'Delivering high-stakes presentations, commanding a large audience, and contributing to the wider tech community.',
    weeklyTopics: [
      'Crafting a Powerful Opening',
      'Engaging a Large Audience',
      'Call to Action Mastery'
    ],
    improvToolkitPrompts: [
      'You have 60 seconds to introduce a keynote speaker who is about to change the world. Make us excited!',
      'Summarize your biggest lesson from your entire career in one minute.',
      'If you could give one piece of advice to your past self at the start of your career, what would it be and why?',
      'What\'s the one thing you believe truly sets a good developer apart from a great one?',
      'Imagine you\'re concluding a major conference talk. What is your final, most memorable statement or call to action?'
    ],
    experimentalChallenges: [
      {
        title: 'The "2-Minute Debate"',
        description: 'Give the group a strong, debatable topic (e.g., "AI code assistants will ultimately make developers dumber"). Assign two people "For" and two "Against." Each person gets 1 minute to make their case. (Focuses on structuring arguments under pressure.)'
      },
      {
        title: 'The "Emotional Arc"',
        description: 'One person briefly outlines a topic for a 5-minute talk. The group then discusses and helps them plot the "emotional journey" they want the audience to experience during that talk (e.g., "Start with frustration, move to curiosity, end with empowerment").'
      }
    ],
    goals: [
      'Mock Conference Session',
      'Technical Debate',
      'The "Call to Action" Talk',
      'Mentoring Future Speakers',
      'The "Mindset Shift" Keynote'
    ],
    skillsDeveloped: [
      'Keynote delivery',
      'Advanced stage presence',
      'Profound audience connection',
      'Intellectual contribution',
      'Emotional resonance in speaking'
    ],
    color: '#9333EA'
  }
];

export const codeFeedbackFramework = {
  title: 'C.O.D.E. Feedback Framework',
  description: 'A structured approach to giving constructive feedback at all levels',
  elements: [
    {
      letter: 'C',
      word: 'Connect',
      prompt: 'One thing that really connected with me was...'
    },
    {
      letter: 'O',
      word: 'Observe',
      prompt: 'I observed that you did [X specific action] really well...'
    },
    {
      letter: 'D',
      word: 'Deepen',
      prompt: 'I\'m curious about [X part of the talk]. Could you tell us more about...?'
    },
    {
      letter: 'E',
      word: 'Explore',
      prompt: 'As an experiment for next time, I wonder what would happen if you...?'
    }
  ]
};

