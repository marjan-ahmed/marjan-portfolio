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
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
}

const log = {
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg: string) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg: string) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  section: (msg: string) => console.log(`\n${colors.cyan}${msg}${colors.reset}`),
}

async function deleteAllContent() {
  console.log('\n' + '='.repeat(60))
  console.log('🗑️  Sanity CMS Data Cleanup Script')
  console.log('='.repeat(60))

  log.warning('This will DELETE ALL content from your Sanity dataset!')
  log.warning('Make sure you have a backup if needed.')
  
  const contentTypes = ['project', 'skill', 'experience', 'education', 'testimonial']

  try {
    for (const type of contentTypes) {
      log.section(`Deleting all ${type} documents...`)
      
      const query = `*[_type == "${type}"]._id`
      const ids = await client.fetch(query)
      
      if (ids.length === 0) {
        log.warning(`No ${type} documents found`)
        continue
      }

      const transaction = client.transaction()
      ids.forEach((id: string) => transaction.delete(id))
      await transaction.commit()
      
      log.success(`Deleted ${ids.length} ${type} document(s)`)
    }

    console.log('\n' + '='.repeat(60))
    log.success('Cleanup completed! 🎉')
    console.log('='.repeat(60) + '\n')
  } catch (error) {
    log.error(`Cleanup failed: ${error}`)
    process.exit(1)
  }
}

deleteAllContent()
