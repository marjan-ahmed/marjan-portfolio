import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

// Load environment variables from .env.local
config({ path: path.resolve(process.cwd(), '.env.local') })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
}

const log = {
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  info: (msg: string) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  section: (msg: string) => console.log(`\n${colors.cyan}${msg}${colors.reset}`),
}

async function exportData() {
  console.log('\n' + '='.repeat(60))
  console.log('📤 Sanity CMS Data Export Script')
  console.log('='.repeat(60))

  const exportDir = path.join(__dirname, '../data/exports')
  
  // Create exports directory if it doesn't exist
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir, { recursive: true })
  }

  const contentTypes = [
    { type: 'project', query: '*[_type == "project"] | order(order asc)' },
    { type: 'skill', query: '*[_type == "skill"] | order(order asc)' },
    { type: 'experience', query: '*[_type == "experience"] | order(order asc)' },
    { type: 'education', query: '*[_type == "education"] | order(order asc)' },
    { type: 'testimonial', query: '*[_type == "testimonial"] | order(order asc)' },
  ]

  try {
    for (const { type, query } of contentTypes) {
      log.section(`Exporting ${type} data...`)
      
      const data = await client.fetch(query)
      const filePath = path.join(exportDir, `${type}-${Date.now()}.json`)
      
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
      log.success(`Exported ${data.length} ${type} document(s) to ${path.basename(filePath)}`)
    }

    console.log('\n' + '='.repeat(60))
    log.success('Export completed! 🎉')
    log.info(`Files saved to: ${exportDir}`)
    console.log('='.repeat(60) + '\n')
  } catch (error) {
    console.error('Export failed:', error)
    process.exit(1)
  }
}

exportData()
