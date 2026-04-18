export interface Profile {
  name: string
  title: string
  email: string
  github: string
  blog?: string
  location?: string
}

export interface ExperienceItem {
  organization: string
  period: string
  role: string
  tasks: string[]
  skills: string[]
}

export interface ProjectItem {
  title: string
  period: string
  summary: string
  description: string[]
  skills: string[]
  github: string
  demo?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ResumeData {
  profile: Profile
  introduce: string[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
}
