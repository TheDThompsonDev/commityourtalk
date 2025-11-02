export interface Pathway {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  focus: string;
  weeklyTopics: string[];
  improvToolkitPrompts: string[];
  experimentalChallenges: ExperimentalChallenge[];
  goals: string[];
  skillsDeveloped: string[];
  color: string;
  challenges?: Challenge[]; // Optional for backwards compatibility
}

export interface ExperimentalChallenge {
  title: string;
  description: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  duration: string;
  focus: string;
  order: number;
  isCompleted?: boolean;
}

export interface Progress {
  userId: string;
  pathwayId: string;
  completedChallenges: string[];
  currentChallenge: string;
  progressPercentage: number;
  lastAccessed: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  currentPathway: string;
  completedPathways: string[];
  progress: Progress[];
}