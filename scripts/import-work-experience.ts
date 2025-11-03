import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importWorkExperience() {
  try {
    console.log('🚀 Starting work experience import...\n')

    // Read the work experience JSON file
    const workExperiencePath = path.join(__dirname, '../data/workExperience.json')
    const workExperienceData = JSON.parse(fs.readFileSync(workExperiencePath, 'utf-8'))

    console.log(`📄 Found ${workExperienceData.length} work experience item(s)\n`)

    // Import each work experience
    for (const experience of workExperienceData) {
      try {
        console.log(`\n📝 Importing: ${experience.title} at ${experience.company}...`)

        const doc = {
          _type: 'workExperience',
          title: experience.title,
          company: experience.company,
          location: experience.location,
          startDate: experience.startDate,
          endDate: experience.endDate,
          description: experience.description,
          technologies: experience.technologies || [],
          order: experience.order || 0,
        }

        const result = await client.create(doc)
        console.log(`✅ Successfully imported: ${experience.title}`)
        console.log(`   ID: ${result._id}`)
      } catch (error) {
        console.error(`❌ Failed to import ${experience.title}:`, error)
      }
    }

    console.log('\n\n✨ Work experience import completed!')
  } catch (error) {
    console.error('❌ Error during import:', error)
    process.exit(1)
  }
}

importWorkExperience()
