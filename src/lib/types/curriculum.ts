export interface CoreTechnique {
  name: string;
  description: string;
}

export interface ScriptResponse {
  conversation: string[];
  analysis: string;
}

export interface PlaybookScript {
  title: string;
  defaultResponse: ScriptResponse;
  cytApproach: ScriptResponse;
}

export interface CurriculumLevel {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  coreTechnique: CoreTechnique;
  playbook: PlaybookScript[];
  improvToolkitPrompts: string[];
  color: string;
}