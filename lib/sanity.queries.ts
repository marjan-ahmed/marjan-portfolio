import { groq } from 'next-sanity'

// Projects queries
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    category,
    "imageUrl": image.asset->url,
    liveUrl,
    technologies,
    order
  }
`

export const projectsByCategoryQuery = (category: string) => groq`
  *[_type == "project" && category == "${category}"] | order(order asc) {
    _id,
    title,
    description,
    category,
    "imageUrl": image.asset->url,
    liveUrl,
    technologies,
    order
  }
`

// Skills queries
export const skillsQuery = groq`
  *[_type == "skill"] | order(order asc) {
    _id,
    name,
    category,
    icon,
    iconColor,
    textColor,
    order
  }
`

export const skillsByCategoryQuery = (category: string) => groq`
  *[_type == "skill" && category == "${category}"] | order(order asc) {
    _id,
    name,
    category,
    icon,
    iconColor,
    textColor,
    order
  }
`

// Experience queries
export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc) {
    _id,
    technology,
    iconUrl,
    backgroundColor,
    order
  }
`

// Education queries
export const educationQuery = groq`
  *[_type == "education"] | order(order asc) {
    _id,
    degree,
    institution,
    period,
    description,
    highlights,
    order
  }
`

// Testimonials queries
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    message,
    rating,
    order
  }
`

// Work Experience queries
export const workExperienceQuery = groq`
  *[_type == "workExperience"] | order(order asc) {
    _id,
    title,
    company,
    companyLink,
    location,
    startDate,
    endDate,
    description,
    technologies,
    order
  }
`
