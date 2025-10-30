import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import path from 'path'

// Load environment variables from .env.local
config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
}

const log = {
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  info: (msg: string) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  section: (msg: string) => console.log(`\n${colors.cyan}${msg}${colors.reset}`),
}

async function verifyData() {
  console.log('\n' + '='.repeat(60))
  console.log('🔍 Sanity CMS Data Verification')
  console.log('='.repeat(60))

  const checks = [
    { name: 'Projects', query: '*[_type == "project"]', expected: 12 },
    { name: 'Skills', query: '*[_type == "skill"]', expected: 12 },
    { name: 'Experience', query: '*[_type == "experience"]', expected: 3 },
    { name: 'Education', query: '*[_type == "education"]', expected: 3 },
    { name: 'Testimonials', query: '*[_type == "testimonial"]', expected: 2 },
  ]

  let allPassed = true

  try {
    for (const check of checks) {
      log.section(`Checking ${check.name}...`)
      
      const data = await client.fetch(check.query)
      const count = data.length
      
      if (count === check.expected) {
        log.success(`${check.name}: ${count}/${check.expected} documents ✓`)
      } else {
        console.log(`${colors.yellow}⚠${colors.reset} ${check.name}: ${count}/${check.expected} documents (expected ${check.expected})`)
        allPassed = false
      }

      // Show sample data
      if (data.length > 0) {
        console.log(`   Sample: ${data[0].title || data[0].name || data[0].degree || data[0].technology}`)
      }
    }

    console.log('\n' + '='.repeat(60))
    if (allPassed) {
      log.success('All checks passed! 🎉')
    } else {
      console.log(`${colors.yellow}⚠${colors.reset} Some checks did not match expected counts`)
      log.info('This might be normal if you added/removed content manually')
    }
    console.log('='.repeat(60) + '\n')

    // Additional checks
    log.section('Additional Checks:')
    
    // Check for projects with images
    const projectsWithImages = await client.fetch('*[_type == "project" && defined(image)]')
    log.info(`Projects with images: ${projectsWithImages.length}/12`)
    
    // Check for duplicate titles
    const projects = await client.fetch('*[_type == "project"].title')
    const uniqueTitles = new Set(projects)
    if (uniqueTitles.size !== projects.length) {
      console.log(`${colors.yellow}⚠${colors.reset} Found duplicate project titles`)
    } else {
      log.success('No duplicate project titles')
    }

  } catch (error) {
    console.error('Verification failed:', error)
    process.exit(1)
  }
}

verifyData()
