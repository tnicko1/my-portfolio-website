// Fix: Import ReactNode to resolve namespace error.
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}