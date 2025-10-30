import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: path.resolve(process.cwd(), '.env.local') })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
}

const log = {
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg: string) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  info: (msg: string) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  warning: (msg: string) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  section: (msg: string) => console.log(`\n${colors.cyan}${msg}${colors.reset}`),
}

// Upload image from file path
async function uploadImage(imagePath: string) {
  try {
    const fullPath = path.join(process.cwd(), imagePath)
    
    if (!fs.existsSync(fullPath)) {
      log.warning(`Image not found: ${imagePath}`)
      return null
    }

    const imageBuffer = fs.readFileSync(fullPath)
    const fileName = path.basename(imagePath)
    
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: fileName,
    })
    
    log.success(`Uploaded image: ${fileName}`)
    return asset._id
  } catch (error) {
    log.error(`Failed to upload image ${imagePath}: ${error}`)
    return null
  }
}

// Import projects
async function importProjects() {
  log.section('📦 Importing Projects...')
  
  const projectsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/projects.json'), 'utf-8')
  )

  let successCount = 0
  let failCount = 0

  for (const project of projectsData) {
    try {
      // Upload image
      const imageAssetId = await uploadImage(project.imagePath)
      
      if (!imageAssetId) {
        log.warning(`Skipping project "${project.title}" - no image`)
        failCount++
        continue
      }

      // Create document
      const doc = {
        _type: 'project',
        title: project.title,
        description: project.description,
        category: project.category,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAssetId,
          },
        },
        liveUrl: project.liveUrl,
        technologies: project.technologies,
        order: project.order,
      }

      await client.create(doc)
      log.success(`Created project: ${project.title}`)
      successCount++
    } catch (error) {
      log.error(`Failed to create project "${project.title}": ${error}`)
      failCount++
    }
  }

  log.info(`Projects: ${successCount} created, ${failCount} failed`)
}

// Import skills
async function importSkills() {
  log.section('🛠️  Importing Skills...')
  
  const skillsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/skills.json'), 'utf-8')
  )

  let successCount = 0
  let failCount = 0

  for (const skill of skillsData) {
    try {
      const doc = {
        _type: 'skill',
        name: skill.name,
        category: skill.category,
        icon: skill.icon,
        iconColor: skill.iconColor,
        textColor: skill.textColor,
        order: skill.order,
      }

      await client.create(doc)
      log.success(`Created skill: ${skill.name}`)
      successCount++
    } catch (error) {
      log.error(`Failed to create skill "${skill.name}": ${error}`)
      failCount++
    }
  }

  log.info(`Skills: ${successCount} created, ${failCount} failed`)
}

// Import experience
async function importExperience() {
  log.section('💼 Importing Experience...')
  
  const experienceData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/experience.json'), 'utf-8')
  )

  let successCount = 0
  let failCount = 0

  for (const exp of experienceData) {
    try {
      const doc = {
        _type: 'experience',
        technology: exp.technology,
        iconUrl: exp.iconUrl,
        backgroundColor: exp.backgroundColor,
        order: exp.order,
      }

      await client.create(doc)
      log.success(`Created experience: ${exp.technology}`)
      successCount++
    } catch (error) {
      log.error(`Failed to create experience "${exp.technology}": ${error}`)
      failCount++
    }
  }

  log.info(`Experience: ${successCount} created, ${failCount} failed`)
}

// Import education
async function importEducation() {
  log.section('🎓 Importing Education...')
  
  const educationData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/education.json'), 'utf-8')
  )

  let successCount = 0
  let failCount = 0

  for (const edu of educationData) {
    try {
      const doc = {
        _type: 'education',
        degree: edu.degree,
        institution: edu.institution,
        period: edu.period,
        description: edu.description,
        highlights: edu.highlights,
        order: edu.order,
      }

      await client.create(doc)
      log.success(`Created education: ${edu.degree}`)
      successCount++
    } catch (error) {
      log.error(`Failed to create education "${edu.degree}": ${error}`)
      failCount++
    }
  }

  log.info(`Education: ${successCount} created, ${failCount} failed`)
}

// Import testimonials
async function importTestimonials() {
  log.section('💬 Importing Testimonials...')
  
  const testimonialsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/testimonials.json'), 'utf-8')
  )

  let successCount = 0
  let failCount = 0

  for (const testimonial of testimonialsData) {
    try {
      const doc = {
        _type: 'testimonial',
        name: testimonial.name,
        role: testimonial.role,
        message: testimonial.message,
        rating: testimonial.rating,
        order: testimonial.order,
      }

      await client.create(doc)
      log.success(`Created testimonial: ${testimonial.name}`)
      successCount++
    } catch (error) {
      log.error(`Failed to create testimonial "${testimonial.name}": ${error}`)
      failCount++
    }
  }

  log.info(`Testimonials: ${successCount} created, ${failCount} failed`)
}

// Main import function
async function runImport() {
  console.log('\n' + '='.repeat(60))
  console.log('🚀 Sanity CMS Data Import Script')
  console.log('='.repeat(60))

  // Check environment variables
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    log.error('Missing required environment variables!')
    log.info('Please ensure NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN are set in .env.local')
    process.exit(1)
  }

  log.info(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
  log.info(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`)
  
  try {
    await importProjects()
    await importSkills()
    await importExperience()
    await importEducation()
    await importTestimonials()

    console.log('\n' + '='.repeat(60))
    log.success('Import completed successfully! 🎉')
    console.log('='.repeat(60) + '\n')
    
    log.info('Next steps:')
    log.info('1. Visit http://localhost:3000/studio to view your content')
    log.info('2. Verify all data was imported correctly')
    log.info('3. Update your components to fetch from Sanity')
    console.log('')
  } catch (error) {
    log.error(`Import failed: ${error}`)
    process.exit(1)
  }
}

// Run import
runImport()
