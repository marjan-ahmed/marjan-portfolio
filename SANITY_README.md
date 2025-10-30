# 🎨 Portfolio CMS Integration - Complete Guide

Your Next.js portfolio now has **Sanity CMS** integrated! This means you can manage all your portfolio content (projects, skills, experience, education, testimonials) through a beautiful admin interface.

## 🌟 What's New?

- ✅ **Sanity Studio** - Content management interface at `/studio`
- ✅ **5 Content Schemas** - Projects, Skills, Experience, Education, Testimonials
- ✅ **Type-Safe Queries** - TypeScript types for all content
- ✅ **Backward Compatible** - Your hardcoded content still works as fallback
- ✅ **Image Optimization** - Automatic image processing via Sanity CDN
- ✅ **Live Preview** - See changes instantly

## 🚦 Getting Started (5 Minutes)

### Step 1: Create Sanity Account
1. Visit [sanity.io](https://www.sanity.io/)
2. Sign up for free
3. Create a new project (name it "Marjan Portfolio")
4. Choose a dataset name (default: `production`)

### Step 2: Get Your Credentials
From your Sanity dashboard at https://www.sanity.io/manage:
1. Copy your **Project ID** 
2. Create an **API Token** (Settings → API → Add API Token)
   - Name: "Portfolio Token"
   - Permissions: "Editor"

### Step 3: Configure Environment
Create `.env.local` in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=sk...your-token-here
```

### Step 4: Start Your Project
```bash
npm run dev
```

### Step 5: Open Sanity Studio
Navigate to: **http://localhost:3000/studio**

🎉 **You're ready to add content!**

## 📂 Project Structure

```
marjan-portfolio-1/
├── app/
│   └── studio/
│       └── [[...tool]]/
│           └── page.tsx          # Sanity Studio route
├── sanity/
│   ├── schemas/
│   │   ├── project.ts            # Project schema
│   │   ├── skill.ts              # Skill schema
│   │   ├── experience.ts         # Experience schema
│   │   ├── education.ts          # Education schema
│   │   └── testimonial.ts        # Testimonial schema
│   └── schemaTypes/
│       └── index.ts              # Schema registry
├── lib/
│   ├── sanity.client.ts          # Sanity client config
│   ├── sanity.queries.ts         # GROQ queries
│   └── sanity.utils.ts           # Helper functions
├── types/
│   └── sanity.ts                 # TypeScript types
├── .env.local                    # Your credentials (create this!)
├── .env.example                  # Template
├── sanity.config.ts              # Sanity configuration
├── SANITY_SETUP.md              # Detailed setup guide
└── MIGRATION_REFERENCE.md        # All your data for migration
```

## 📝 Adding Content to Sanity

### Quick Example: Add a Project

1. Go to http://localhost:3000/studio
2. Click **"Project"** in the sidebar
3. Click **"Create new document"**
4. Fill in the form:
   - Title: "Nike Clone Website"
   - Description: "A full-featured e-commerce platform..."
   - Category: Select "nextjs"
   - Image: Upload from `/public/project1.png`
   - Live URL: "https://nike-clone-version.vercel.app"
   - Technologies: Click "Add item" → type "Next.js", repeat for others
   - Order: 10
5. Click **"Publish"**

✅ **Your project is now live!**

### Content Migration Made Easy

All your existing content is documented in `MIGRATION_REFERENCE.md` with:
- ✅ Exact field values
- ✅ Image file locations
- ✅ Suggested order numbers
- ✅ Copy-paste ready format

Just open the file and copy the data into Sanity Studio!

## 🔧 Using Sanity Data in Components

### Option 1: Fetch in Server Components (Recommended)

```tsx
// app/page.tsx or any Server Component
import { getProjects } from '@/lib/sanity.utils'

export default async function ProjectSection() {
  const projects = await getProjects()
  
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.imageUrl} alt={project.title} />
        </div>
      ))}
    </div>
  )
}
```

### Option 2: With Fallback (Safe Migration)

```tsx
import { getProjects } from '@/lib/sanity.utils'

// Your existing hardcoded data
const FALLBACK_PROJECTS = [
  { title: "Nike Clone", ... },
  // ... more projects
]

export default async function ProjectSection() {
  const sanityProjects = await getProjects()
  
  // Use Sanity if available, otherwise use fallback
  const projects = sanityProjects.length > 0 
    ? sanityProjects 
    : FALLBACK_PROJECTS
  
  return (
    // Render projects...
  )
}
```

### Option 3: Filter by Category

```tsx
import { getProjectsByCategory } from '@/lib/sanity.utils'

const htmlProjects = await getProjectsByCategory('html')
const nextProjects = await getProjectsByCategory('nextjs')
const pythonProjects = await getProjectsByCategory('python')
```

## 🎯 Available Helper Functions

In `lib/sanity.utils.ts`:

```typescript
getProjects()              // All projects
getProjectsByCategory(cat) // Projects by category
getSkills()                // All skills
getSkillsByCategory(cat)   // Skills by category
getExperience()            // All experience items
getEducation()             // All education items
getTestimonials()          // All testimonials
```

## 🖼️ Image Handling

### From Sanity
```tsx
<Image 
  src={project.imageUrl}  // Already optimized URL
  alt={project.title}
  width={400}
  height={300}
/>
```

### With URL Builder (Advanced)
```tsx
import { urlFor } from '@/lib/sanity.client'

<Image 
  src={urlFor(image).width(800).height(600).url()}
  alt="Optimized"
/>
```

## 🚀 Deployment

### Deploy Your Site (Vercel)
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy Sanity Studio
```bash
npm run studio:deploy
```

Access your studio anywhere: `https://your-project.sanity.studio`

## 🛠️ Development Scripts

```bash
npm run dev           # Start Next.js dev server
npm run studio        # Start Sanity Studio standalone
npm run studio:deploy # Deploy studio to Sanity hosting
npm run build         # Build for production
```

## ⚠️ Important Notes

### Your Data is Safe
- ✅ **Nothing is deleted** - Your hardcoded content still exists
- ✅ **Gradual migration** - Move content at your own pace
- ✅ **Fallbacks work** - Site works even without Sanity data

### Environment Variables
- ⚠️ **Never commit** `.env.local` to Git
- ✅ **Use** `.env.example` as a template
- ✅ **Add to Vercel** when deploying

### Content Strategy
1. Start with **Projects** (most visible)
2. Then **Skills** and **Experience**
3. Finally **Education** and **Testimonials**
4. Test each section before moving to the next

## 🐛 Troubleshooting

### "Studio won't load"
- ✅ Check Project ID in `.env.local`
- ✅ Clear cache: Delete `.next` folder
- ✅ Restart dev server

### "No data showing"
- ✅ Ensure content is **Published** in Studio (not just saved)
- ✅ Check browser console for errors
- ✅ Verify environment variables are set

### "Build fails"
- ✅ Run `npm install` again
- ✅ Check all TypeScript types match schemas
- ✅ Ensure all images are uploaded to Sanity

## 📚 Next Steps

1. ✅ **Set up environment** (`.env.local`)
2. ✅ **Access Studio** (http://localhost:3000/studio)
3. 📝 **Add first project** (test it works)
4. 📝 **Migrate all projects** (use MIGRATION_REFERENCE.md)
5. 📝 **Add skills, experience, etc.**
6. 🧪 **Test thoroughly**
7. 🚀 **Deploy to production**

## 🎓 Learning Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Cheat Sheet](https://www.sanity.io/docs/query-cheat-sheet)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [Image Optimization](https://www.sanity.io/docs/image-urls)

## 💬 Need Help?

- 📖 Read `SANITY_SETUP.md` for detailed setup
- 📋 Check `MIGRATION_REFERENCE.md` for data templates
- 🌐 Visit [Sanity Community](https://www.sanity.io/community)
- 💻 Check [Next.js Discord](https://nextjs.org/discord)

---

**You now have a powerful, flexible CMS for your portfolio!** 🎉

Start by accessing the Studio at `http://localhost:3000/studio` and adding your first project. Everything is backward compatible, so take your time migrating content.

Happy coding! 🚀
