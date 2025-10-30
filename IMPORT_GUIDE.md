# 🚀 Automated Data Import Guide

This guide explains how to use the automated scripts to import all your portfolio data into Sanity CMS in **under 5 minutes**!

## 📋 What Gets Imported

The import script will automatically create:
- ✅ **12 Projects** (4 HTML + 4 Next.js + 4 Python)
- ✅ **12 Skills** (6 Frontend + 2 Languages + 2 Database + 2 Backend)
- ✅ **3 Experience items** (TypeScript, React, Next.js)
- ✅ **3 Education entries** (Matriculation, WordPress, AI Developer)
- ✅ **2 Testimonials** (Client feedback)
- ✅ **All project images** (automatically uploaded from `/public`)

**Total: 32 content items + 12 images**

## 🎯 Quick Start (5 Minutes)

### Step 1: Prerequisites

Ensure you have:
1. ✅ Created a Sanity account at [sanity.io](https://www.sanity.io/)
2. ✅ Created a new project
3. ✅ Set up `.env.local` with your credentials

Your `.env.local` should contain:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token
```

### Step 2: Install tsx (if not installed)

```bash
npm install -D tsx
```

### Step 3: Run the Import

```bash
npm run import
```

That's it! 🎉

## 📊 Available Scripts

### `npm run import`
**Main import script** - Imports all data from JSON files into Sanity

```bash
npm run import
```

**What it does:**
- Uploads all project images from `/public` to Sanity CDN
- Creates all projects with proper categorization
- Creates all skills grouped by category
- Creates experience, education, and testimonial entries
- Shows progress and error handling

**Output:**
```
============================================================
🚀 Sanity CMS Data Import Script
============================================================
ℹ Project ID: abc123xyz
ℹ Dataset: production

📦 Importing Projects...
✓ Uploaded image: project4.png
✓ Created project: Clima Website
✓ Uploaded image: project1.png
✓ Created project: Nike Clone Website
...
ℹ Projects: 12 created, 0 failed

🛠️  Importing Skills...
✓ Created skill: React JS
✓ Created skill: TypeScript
...
ℹ Skills: 12 created, 0 failed

💼 Importing Experience...
✓ Created experience: TypeScript
...
ℹ Experience: 3 created, 0 failed

🎓 Importing Education...
✓ Created education: Matriculation
...
ℹ Education: 3 created, 0 failed

💬 Importing Testimonials...
✓ Created testimonial: Zain Ali Arain
...
ℹ Testimonials: 2 created, 0 failed

============================================================
✓ Import completed successfully! 🎉
============================================================
```

---

### `npm run verify`
**Verification script** - Checks if all data was imported correctly

```bash
npm run verify
```

**What it does:**
- Counts documents in each content type
- Compares with expected counts
- Checks for images on projects
- Detects duplicate titles
- Shows sample data

**Output:**
```
============================================================
🔍 Sanity CMS Data Verification
============================================================

Checking Projects...
✓ Projects: 12/12 documents ✓
   Sample: Clima Website

Checking Skills...
✓ Skills: 12/12 documents ✓
   Sample: React JS

Additional Checks:
ℹ Projects with images: 12/12
✓ No duplicate project titles
```

---

### `npm run export`
**Export script** - Backs up your Sanity data to JSON files

```bash
npm run export
```

**What it does:**
- Exports all content from Sanity to JSON
- Saves timestamped backup files
- Useful before making bulk changes

**Output location:**
`/data/exports/[content-type]-[timestamp].json`

---

### `npm run cleanup`
**Cleanup script** - Deletes ALL content from Sanity

```bash
npm run cleanup
```

⚠️ **WARNING:** This deletes all content! Use with caution.

**What it does:**
- Deletes all projects, skills, experience, education, and testimonials
- Useful for starting fresh or re-importing

**When to use:**
- You want to re-import from scratch
- Testing the import process
- Removing test data

---

## 📂 Data Files Structure

All source data is stored in `/data/` directory:

```
data/
├── projects.json        # All 12 projects
├── skills.json          # All 12 skills
├── experience.json      # 3 experience items
├── education.json       # 3 education entries
├── testimonials.json    # 2 testimonials
└── exports/            # Backup exports (created by export script)
```

### Example: projects.json
```json
[
  {
    "title": "Nike Clone Website",
    "description": "A full-featured e-commerce platform...",
    "category": "nextjs",
    "imagePath": "/public/project1.png",
    "liveUrl": "https://nike-clone-version.vercel.app",
    "technologies": ["Next.js", "Tailwind", "ShadCN"],
    "order": 10
  }
]
```

## 🔄 Workflow Examples

### First Time Setup
```bash
# 1. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# 2. Import all data
npm run import

# 3. Verify import was successful
npm run verify

# 4. View in Sanity Studio
npm run dev
# Visit http://localhost:3000/studio
```

### Re-importing (Fresh Start)
```bash
# 1. Backup existing data first
npm run export

# 2. Clean all content
npm run cleanup

# 3. Re-import
npm run import

# 4. Verify
npm run verify
```

### Making Changes to Data
```bash
# 1. Edit JSON files in /data/ directory
# Example: data/projects.json

# 2. Clean existing data
npm run cleanup

# 3. Import updated data
npm run import
```

## 🛠️ Troubleshooting

### "Missing environment variables"
**Problem:** Script can't find Sanity credentials

**Solution:**
1. Ensure `.env.local` exists in project root
2. Check all required variables are set:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_TOKEN`
3. Restart your terminal/IDE

---

### "Image not found"
**Problem:** Can't find image file for a project

**Solution:**
1. Check the image exists in `/public/` folder
2. Verify the `imagePath` in JSON matches actual file location
3. File names are case-sensitive on some systems

---

### "Failed to create project"
**Problem:** Some projects fail to import

**Solution:**
1. Check the error message for details
2. Ensure Sanity schemas are properly set up
3. Verify API token has write permissions
4. Try re-running the import

---

### "Duplicate content"
**Problem:** Content appears twice after running import multiple times

**Solution:**
```bash
# Clean everything and start fresh
npm run cleanup
npm run import
```

---

## 📝 Customizing the Import

### Add More Projects

1. Edit `data/projects.json`
2. Add new project object:
```json
{
  "title": "My New Project",
  "description": "Description here",
  "category": "nextjs",
  "imagePath": "/public/my-new-project.png",
  "liveUrl": "https://example.com",
  "technologies": ["Next.js", "TypeScript"],
  "order": 50
}
```
3. Run `npm run import`

### Modify Existing Data

1. Export current data: `npm run export`
2. Edit the generated export files
3. Clean current data: `npm run cleanup`
4. Place edited file in `/data/` (rename to match format)
5. Import: `npm run import`

### Create Custom Import Script

Copy and modify `scripts/import-data.ts`:

```typescript
// scripts/import-custom.ts
import { createClient } from '@sanity/client'
import myData from './my-custom-data.json'

const client = createClient({...})

async function importCustom() {
  for (const item of myData) {
    await client.create({
      _type: 'myType',
      ...item
    })
  }
}
```

Add to package.json:
```json
"scripts": {
  "import:custom": "tsx scripts/import-custom.ts"
}
```

## 🎯 Best Practices

1. **Always export before cleanup**
   ```bash
   npm run export
   npm run cleanup
   ```

2. **Verify after import**
   ```bash
   npm run import
   npm run verify
   ```

3. **Keep backups of your JSON files**
   - Store original data files safely
   - Version control your `/data/` directory

4. **Test with small datasets first**
   - Create a test dataset
   - Try importing 1-2 items
   - Scale up after confirming it works

5. **Use consistent ordering**
   - Increments of 10 (10, 20, 30...)
   - Easy to insert items later

## ⚡ Performance

- **Import time:** ~2-3 minutes for all 32 items
- **Image upload:** ~10-15 seconds per image
- **Document creation:** <1 second per item

**Total estimated time:** 3-5 minutes for complete import

## 🔐 Security Notes

- ✅ Scripts use environment variables (never hardcoded)
- ✅ API token stored in `.env.local` (git-ignored)
- ✅ Safe error handling (won't crash on failures)
- ✅ Read-only verification script (safe to run anytime)

## 📚 Next Steps After Import

1. ✅ Run verification: `npm run verify`
2. ✅ Open Studio: Visit `http://localhost:3000/studio`
3. ✅ Review imported content
4. ✅ Make any manual adjustments
5. ✅ Update components to fetch from Sanity
6. ✅ Test your website
7. ✅ Deploy! 🚀

## 💡 Tips

- **Parallel Development:** Run import on staging dataset first
- **Version Control:** Commit JSON files to track data changes
- **Incremental Updates:** Import one content type at a time if needed
- **Rollback:** Keep exports for easy rollback if needed

---

**That's it!** You now have a powerful automated system to manage your portfolio data. Run `npm run import` and watch the magic happen! ✨

Need help? Check the main documentation or create an issue.
