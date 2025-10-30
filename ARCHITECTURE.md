# Sanity CMS Architecture Overview

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Your Portfolio Website                    │
│                     (Next.js Frontend)                       │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Fetches content via API
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                     Sanity CMS Cloud                         │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  Projects   │  │   Skills     │  │  Education   │       │
│  └─────────────┘  └──────────────┘  └──────────────┘       │
│  ┌─────────────┐  ┌──────────────┐                         │
│  │ Experience  │  │ Testimonials │                         │
│  └─────────────┘  └──────────────┘                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ Manage content
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    Sanity Studio                             │
│              (Admin Interface at /studio)                    │
│   Edit • Create • Delete • Upload Images • Preview          │
└─────────────────────────────────────────────────────────────┘
```

## 📂 File Structure

```
marjan-portfolio-1/
│
├── 📱 app/
│   ├── page.tsx                    # Homepage (can fetch from Sanity)
│   ├── layout.tsx                  # Root layout
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx            # Sanity Studio route ✨
│
├── 🎨 components/
│   ├── ProjectSection.tsx          # Can use getProjects()
│   ├── SkillSection.tsx            # Can use getSkills()
│   ├── XP.tsx                      # Can use getExperience()
│   ├── Edu.tsx                     # Can use getEducation()
│   └── Testimonial.tsx             # Can use getTestimonials()
│
├── 🗄️ sanity/
│   ├── schemas/                    # Content schemas ✨
│   │   ├── project.ts
│   │   ├── skill.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── testimonial.ts
│   └── schemaTypes/
│       └── index.ts                # Schema registry
│
├── 🔧 lib/
│   ├── sanity.client.ts            # Sanity connection ✨
│   ├── sanity.queries.ts           # GROQ queries ✨
│   └── sanity.utils.ts             # Helper functions ✨
│
├── 📝 types/
│   └── sanity.ts                   # TypeScript types ✨
│
├── ⚙️ Configuration Files
│   ├── sanity.config.ts            # Sanity settings ✨
│   ├── sanity.cli.ts               # CLI config ✨
│   ├── .env.local                  # Your credentials (create this!)
│   └── .env.example                # Template ✨
│
└── 📚 Documentation
    ├── QUICKSTART.md               # Quick start guide ✨
    ├── SANITY_README.md            # Main guide ✨
    ├── SANITY_SETUP.md             # Detailed setup ✨
    └── MIGRATION_REFERENCE.md      # Data migration help ✨

✨ = New files created for Sanity integration
```

## 🔄 Data Flow

### Traditional (Hardcoded)
```
Component → Hardcoded Array → Render
```

### With Sanity CMS
```
┌──────────────┐
│  Component   │
└──────┬───────┘
       │
       │ calls getProjects()
       ▼
┌──────────────────┐
│ sanity.utils.ts  │ ← Helper functions
└──────┬───────────┘
       │
       │ uses query
       ▼
┌──────────────────┐
│ sanity.queries.ts│ ← GROQ queries
└──────┬───────────┘
       │
       │ via client
       ▼
┌──────────────────┐
│ sanity.client.ts │ ← API connection
└──────┬───────────┘
       │
       │ fetches from
       ▼
┌──────────────────┐
│  Sanity Cloud    │ ← Your content
└──────┬───────────┘
       │
       │ returns data
       ▼
┌──────────────┐
│  Component   │ ← Renders content
└──────────────┘
```

## 🎯 Content Schemas

### Project Schema
```typescript
{
  title: string           // "Nike Clone Website"
  description: string     // "A full-featured e-commerce..."
  category: string        // "html" | "nextjs" | "python"
  image: image           // Uploaded file
  liveUrl: url           // "https://..."
  technologies: array    // ["Next.js", "Tailwind"]
  order: number          // 10
}
```

### Skill Schema
```typescript
{
  name: string           // "React JS"
  category: string       // "frontend" | "languages" | etc
  icon: string          // "FaReact"
  iconColor: string     // "bg-[#61dafb]"
  textColor: string     // "text-black"
  order: number         // 10
}
```

### Experience Schema
```typescript
{
  technology: string     // "TypeScript"
  iconUrl: url          // "https://cdn.jsdelivr.net/..."
  backgroundColor: string // "#6cb6e7"
  order: number         // 10
}
```

### Education Schema
```typescript
{
  degree: string         // "Matriculation"
  institution: string    // "Nasra School"
  period: string        // "2021 - 2025"
  description: text     // Full description
  highlights: array     // ["AKU-EB", "WordPress"]
  order: number         // 10
}
```

### Testimonial Schema
```typescript
{
  name: string          // "Zain Ali Arain"
  role: string         // "NASA Space App Challenge..."
  message: text        // Full testimonial
  rating: number       // 5
  order: number        // 10
}
```

## 🔐 Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID    → Your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET       → "production" (or "development")
NEXT_PUBLIC_SANITY_API_VERSION   → "2024-01-01"
SANITY_API_TOKEN                 → Your API token (for writes)
```

## 🛠️ Available Functions

### In Components
```typescript
// Server Components (Recommended)
import { getProjects, getSkills, getExperience } from '@/lib/sanity.utils'

const projects = await getProjects()
const skills = await getSkills()
const experience = await getExperience()

// With filtering
const htmlProjects = await getProjectsByCategory('html')
const frontendSkills = await getSkillsByCategory('frontend')
```

### GROQ Queries
```typescript
// All projects
*[_type == "project"] | order(order asc)

// Projects by category
*[_type == "project" && category == "nextjs"]

// All skills
*[_type == "skill"] | order(order asc)
```

## 🎨 Studio Interface

```
┌─────────────────────────────────────────────────┐
│  Sanity Studio                          [User]  │
├─────────────────────────────────────────────────┤
│                                                 │
│  📋 Content                    🔍 Search        │
│  ├─ Project                                     │
│  ├─ Skill                                       │
│  ├─ Experience                                  │
│  ├─ Education                                   │
│  └─ Testimonial                                 │
│                                                 │
│  ┌────────────────────────────────────┐        │
│  │  Edit Document                     │        │
│  │  ┌──────────────────────────────┐  │        │
│  │  │ Title: [Nike Clone Website]  │  │        │
│  │  │ Category: [nextjs ▼]         │  │        │
│  │  │ Image: [Upload or drag]      │  │        │
│  │  │ ...                           │  │        │
│  │  └──────────────────────────────┘  │        │
│  │  [Save Draft]  [Publish]           │        │
│  └────────────────────────────────────┘        │
│                                                 │
└─────────────────────────────────────────────────┘
```

## 🚀 Deployment Flow

### Development
```
localhost:3000        → Your Next.js site
localhost:3000/studio → Sanity Studio
```

### Production
```
your-domain.com        → Next.js on Vercel
your-domain.com/studio → Sanity Studio embedded
OR
your-project.sanity.studio → Standalone Studio
```

## 📊 Content Update Flow

```
1. Open Studio (localhost:3000/studio)
   ↓
2. Edit/Create content
   ↓
3. Upload images (if needed)
   ↓
4. Click "Publish"
   ↓
5. Content saved to Sanity Cloud
   ↓
6. Next.js fetches new content
   ↓
7. Changes appear on website
   (May need page refresh in dev)
```

## 🎯 Migration Path

```
Current State:
Components → Hardcoded Arrays → Display

Step 1 (Testing):
Components → Fetch from Sanity → Fallback to Hardcoded → Display

Step 2 (After Migration):
Components → Fetch from Sanity → Display

Step 3 (Optional):
Components → Fetch from Sanity (Remove hardcoded) → Display
```

## ⚡ Performance

- **CDN Delivery**: Images served from global CDN
- **Query Caching**: Automatic caching of queries
- **Incremental Static Regeneration**: Next.js can revalidate
- **Optimized Images**: Automatic resizing and format selection

## 🔒 Security

- **API Tokens**: Separate read/write permissions
- **CORS Configuration**: Controlled access
- **Environment Variables**: Sensitive data not in code
- **Git Ignored**: .env.local never committed

---

This architecture provides:
- ✅ **Flexibility** - Change content without code changes
- ✅ **Type Safety** - TypeScript ensures data correctness
- ✅ **Performance** - Optimized queries and caching
- ✅ **Scalability** - Grow content without limits
- ✅ **Developer Experience** - Clean, maintainable code
