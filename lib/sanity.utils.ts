import { client } from './sanity.client'
import { 
  projectsQuery, 
  skillsQuery, 
  experienceQuery, 
  educationQuery, 
  testimonialsQuery,
  workExperienceQuery
} from './sanity.queries'
import type { 
  Project, 
  Skill, 
  Experience, 
  Education, 
  Testimonial,
  WorkExperience
} from '@/types/sanity'

// Fetch functions with error handling
export async function getProjects(): Promise<Project[]> {
  try {
    return await client.fetch(projectsQuery)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    return await client.fetch(skillsQuery)
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    return await client.fetch(experienceQuery)
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}

export async function getEducation(): Promise<Education[]> {
  try {
    return await client.fetch(educationQuery)
  } catch (error) {
    console.error('Error fetching education:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    return await client.fetch(testimonialsQuery)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    return await client.fetch(workExperienceQuery)
  } catch (error) {
    console.error('Error fetching work experience:', error)
    return []
  }
}

// Helper function to get projects by category
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  try {
    const query = `*[_type == "project" && category == $category] | order(order asc) {
      _id,
      title,
      description,
      category,
      "imageUrl": image.asset->url,
      liveUrl,
      technologies,
      order
    }`
    return await client.fetch(query, { category })
  } catch (error) {
    console.error(`Error fetching ${category} projects:`, error)
    return []
  }
}

// Helper function to get skills by category
export async function getSkillsByCategory(category: string): Promise<Skill[]> {
  try {
    const query = `*[_type == "skill" && category == $category] | order(order asc) {
      _id,
      name,
      category,
      icon,
      iconColor,
      textColor,
      order
    }`
    return await client.fetch(query, { category })
  } catch (error) {
    console.error(`Error fetching ${category} skills:`, error)
    return []
  }
}
