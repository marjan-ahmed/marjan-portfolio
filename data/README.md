# 📁 Data & Scripts Directory

This directory contains all the data files and automation scripts for Sanity CMS.

## 📂 Directory Structure

```
data/
├── projects.json       # All 12 portfolio projects
├── skills.json         # All 12 technical skills
├── experience.json     # 3 technology experience items
├── education.json      # 3 education entries
├── testimonials.json   # 2 client testimonials
└── exports/           # Backup exports (auto-created)

scripts/
├── import-data.ts      # Main import script
├── export-data.ts      # Backup/export script
├── cleanup-data.ts     # Delete all content script
└── verify-data.ts      # Verification script
```

## 🚀 Quick Commands

```bash
# Import all data
npm run import

# Verify import success
npm run verify

# Export/backup data
npm run export

# Delete all content (careful!)
npm run cleanup
```

## 📊 Data Files

### projects.json (12 items)
- 4 HTML projects
- 4 Next.js projects
- 4 Python projects

Each project includes:
- Title, description, category
- Image path (auto-uploaded from `/public`)
- Live URL
- Technologies array
- Order number

### skills.json (12 items)
- 6 Frontend skills
- 2 Languages
- 2 Database technologies
- 2 Backend technologies

Each skill includes:
- Name, category
- Icon name (React icon)
- Icon color, text color
- Order number

### experience.json (3 items)
- TypeScript
- React
- Next.js

Each experience includes:
- Technology name
- Icon URL (CDN link)
- Background color
- Order number

### education.json (3 items)
- Matriculation
- WordPress Development
- Agentic AI Developer

Each education entry includes:
- Degree/program, institution
- Time period
- Description
- Highlights array (for purple text)
- Order number

### testimonials.json (2 items)
- Zain Ali Arain
- Anas Moeen

Each testimonial includes:
- Name, role
- Message
- Rating (1-5)
- Order number

## 🛠️ Scripts

### import-data.ts
**Purpose:** Automatically import all JSON data into Sanity

**What it does:**
1. Reads JSON files from `/data`
2. Uploads images from `/public` to Sanity CDN
3. Creates all documents in Sanity
4. Shows progress and handles errors

**Usage:**
```bash
npm run import
```

**Output:**
- Green ✓ for success
- Red ✗ for errors
- Summary counts

---

### verify-data.ts
**Purpose:** Check if all data imported correctly

**What it does:**
1. Counts documents in each collection
2. Compares with expected counts
3. Checks for images
4. Detects duplicates

**Usage:**
```bash
npm run verify
```

**Expected output:**
```
✓ Projects: 12/12 documents ✓
✓ Skills: 12/12 documents ✓
✓ Experience: 3/3 documents ✓
✓ Education: 3/3 documents ✓
✓ Testimonials: 2/2 documents ✓
```

---

### export-data.ts
**Purpose:** Backup Sanity content to JSON files

**What it does:**
1. Fetches all content from Sanity
2. Saves to timestamped JSON files
3. Stores in `/data/exports/`

**Usage:**
```bash
npm run export
```

**Output location:**
```
data/exports/
├── project-1730000000000.json
├── skill-1730000000000.json
├── experience-1730000000000.json
├── education-1730000000000.json
└── testimonial-1730000000000.json
```

---

### cleanup-data.ts
**Purpose:** Delete ALL content from Sanity

⚠️ **WARNING:** This is destructive!

**What it does:**
1. Deletes all projects
2. Deletes all skills
3. Deletes all experience
4. Deletes all education
5. Deletes all testimonials

**Usage:**
```bash
npm run cleanup
```

**When to use:**
- Starting fresh
- Re-importing data
- Removing test content

**Before cleanup, export:**
```bash
npm run export
npm run cleanup
```

## 🔄 Common Workflows

### First Time Setup
```bash
npm run import
npm run verify
```

### Update Data Files
```bash
# 1. Edit JSON in /data directory
# 2. Clean old data
npm run cleanup

# 3. Re-import
npm run import

# 4. Verify
npm run verify
```

### Backup Before Changes
```bash
npm run export
# Now safe to make changes
```

### Reset Everything
```bash
npm run export  # Backup first!
npm run cleanup # Delete all
npm run import  # Re-import
npm run verify  # Check
```

## 📝 Editing Data Files

### Add a New Project

Edit `data/projects.json`:
```json
{
  "title": "My New Project",
  "description": "Project description",
  "category": "nextjs",
  "imagePath": "/public/my-image.png",
  "liveUrl": "https://example.com",
  "technologies": ["Next.js", "TypeScript"],
  "order": 50
}
```

Then re-import:
```bash
npm run cleanup
npm run import
```

### Modify Existing Data

1. Export current data: `npm run export`
2. Edit the exported JSON
3. Move to `/data` directory (rename if needed)
4. Run: `npm run cleanup && npm run import`

## 🎯 Best Practices

1. **Always export before cleanup**
   ```bash
   npm run export
   ```

2. **Use consistent ordering**
   - Increments of 10: 10, 20, 30...
   - Easy to insert items later

3. **Verify after import**
   ```bash
   npm run import && npm run verify
   ```

4. **Keep backups**
   - Export regularly
   - Commit JSON files to Git
   - Store exports safely

5. **Test with small datasets first**
   - Try 1-2 items
   - Verify it works
   - Then import all

## ⚡ Performance

- **Import time:** 2-3 minutes (32 items + 12 images)
- **Export time:** <30 seconds
- **Cleanup time:** <10 seconds
- **Verify time:** <5 seconds

## 🔐 Security

- ✅ Uses environment variables (`.env.local`)
- ✅ Never commits API tokens
- ✅ Safe error handling
- ✅ Read-only verification script

## 📚 Documentation

- **IMPORT_GUIDE.md** - Detailed import documentation
- **QUICKSTART.md** - Quick start guide
- **SANITY_README.md** - Full integration guide

---

**Need help?** Check the documentation files or create an issue.
