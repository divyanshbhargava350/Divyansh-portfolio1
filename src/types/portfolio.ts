export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'Planned';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string;
  status: ProjectStatus;
  category: 'IoT & Embedded' | 'Smart Systems' | 'Automation';
  diagramType: 'irrigation' | 'fire-smoke' | 'plant' | 'home-auto';
  githubUrl?: string; // Hidden if empty or null
  demoUrl?: string;   // Hidden if empty or null
  keyFeatures: string[];
}

export type SkillLevel = 'Foundational' | 'Active Practice' | 'Project-Tested' | 'Exploring';

export interface SkillItem {
  name: string;
  category: 'Programming' | 'IoT & Hardware' | 'Software & Tools';
  level: SkillLevel;
  description: string;
  verified: boolean;
}

export interface SensorNode {
  id: string;
  name: string;
  model: string;
  category: 'Environmental' | 'Safety' | 'Agricultural' | 'Controller';
  icon: string;
  interfaceType: 'Analog ADC' | 'Digital 1-Wire' | 'I2C' | 'SPI' | 'GPIO Relay';
  voltage: string;
  readingUnit: string;
  nominalRange: string;
  simulatedValue: number;
  purpose: string;
  pinout: { pin: string; function: string }[];
  application: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  event: string;
  role: string;
  timeline: string;
  responsibilities: string[];
  contribution: string;
  results: string;
  tag: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlight: string;
}

export interface HackathonItem {
  id: string;
  name: string;
  year: string;
  team: string;
  problemStatement: string;
  proposedSolution: string;
  technologies: string[];
  contribution: string;
  status: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  expectedGraduation: string;
  status: string;
  coursework: string[];
  milestones: string[];
}
