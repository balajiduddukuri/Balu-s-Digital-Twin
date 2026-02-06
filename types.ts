
export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
  FRENCH = 'fr'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ProjectMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
}
