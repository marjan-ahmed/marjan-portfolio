export interface Project {
  _id: string
  title: string
  description: string
  category: 'html' | 'nextjs' | 'python'
  imageUrl: string
  liveUrl: string
  technologies: string[]
  order?: number
}

export interface Skill {
  _id: string
  name: string
  category: 'frontend' | 'languages' | 'database' | 'backend'
  icon?: string
  iconColor?: string
  textColor?: string
  order?: number
}

export interface Experience {
  _id: string
  technology: string
  iconUrl: string
  backgroundColor: string
  order?: number
}

export interface Education {
  _id: string
  degree: string
  institution: string
  period: string
  description: string
  highlights?: string[]
  order?: number
}

export interface Testimonial {
  _id: string
  name: string
  role: string
  message: string
  rating: number
  order?: number
}

export interface WorkExperience {
  _id: string
  title: string
  company: string
  companyLink?: string
  location?: string
  startDate: string
  endDate: string
  description: string
  technologies?: string[]
  order?: number
}
