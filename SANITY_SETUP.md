# Sanity CMS Integration Guide

This portfolio is now integrated with Sanity CMS, a headless content management system that allows you to manage your portfolio content through a user-friendly interface.

## 🚀 Quick Start

### 1. Set Up Sanity Account

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project
3. Note down your **Project ID**

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_api_token_here
```

**To get your Project ID:**
- Go to https://www.sanity.io/manage
- Select your project
- Copy the Project ID

**To create an API Token:**
- Go to https://www.sanity.io/manage/project/YOUR_PROJECT_ID/api#tokens
- Click "Add API Token"
- Name it (e.g., "Portfolio Token")
- Select "Editor" permissions
- Copy the token

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Access Sanity Studio

Open your browser and navigate to:
```
http://localhost:3000/studio
```

Or run the standalone studio:
```bash
npm run studio
```

## 📋 Content Schemas

### Projects
Manage your portfolio projects with the following fields:
- **Title**: Project name
- **Description**: Brief description
- **Category**: html, nextjs, or python
- **Image**: Project screenshot/thumbnail
- **Live URL**: Deployed project link
- **Technologies**: Array of tech stack items
- **Order**: Display order (lower numbers first)

### Skills
Manage your technical skills:
- **Name**: Skill name (e.g., "React JS")
- **Category**: frontend, languages, database, or backend
- **Icon**: React icon name (e.g., "FaReact")
- **Icon Color**: Background color (e.g., "bg-[#61dafb]")
- **Text Color**: Icon text color (e.g., "text-black")
- **Order**: Display order within category

### Experience
Your technology experience cards:
- **Technology**: Tech name (e.g., "TypeScript")
- **Icon URL**: CDN icon URL
- **Background Color**: Card background color
- **Order**: Display order

### Education
Academic background and certifications:
- **Degree/Program**: Qualification name
- **Institution**: School/organization name
- **Period**: Time range (e.g., "2021 - 2025")
- **Description**: Detailed description
- **Highlights**: Terms to highlight in purple
- **Order**: Display order

### Testimonials
Client and user testimonials:
- **Name**: Person's name
- **Role**: Position/title
- **Message**: Testimonial text
- **Rating**: 1-5 stars
- **Order**: Display order

## 🔄 Migrating Your Existing Data

### Step 1: Access Sanity Studio
Navigate to `http://localhost:3000/studio` and log in.

### Step 2: Add Your Content

#### For Projects (Example):
1. Click "Project" in the sidebar
2. Click "Create new document"
3. Fill in the fields:
   - Title: "Nike Clone Website"
   - Description: "A full-featured e-commerce platform..."
   - Category: Select "nextjs"
   - Upload image from `/public/project1.png`
   - Live URL: "https://nike-clone-version.vercel.app"
   - Technologies: Add "Next.js", "Tailwind", "ShadCN", etc.
   - Order: 1
4. Click "Publish"

#### For Skills (Example):
1. Click "Skill" in the sidebar
2. Create new document:
   - Name: "React JS"
   - Category: "frontend"
   - Icon: "FaReact"
   - Icon Color: "bg-[#61dafb]"
   - Text Color: "text-black"
   - Order: 1
3. Publish

Repeat for all your existing content!

## 💡 Usage in Components

### Fetching Data (Server Components)

```tsx
import { getProjects, getSkills } from '@/lib/sanity.utils'

export default async function ProjectSection() {
  const projects = await getProjects()
  
  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
```

### With Fallback Data

```tsx
import { getProjects } from '@/lib/sanity.utils'

const FALLBACK_PROJECTS = [
  // Your hardcoded projects
]

export default async function ProjectSection() {
  const sanityProjects = await getProjects()
  const projects = sanityProjects.length > 0 ? sanityProjects : FALLBACK_PROJECTS
  
  return (
    // Render projects
  )
}
```

## 🎨 Image Handling

For images stored in Sanity:

```tsx
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'

// If you have the image object
<Image 
  src={urlFor(project.image).url()} 
  alt={project.title}
  width={400}
  height={300}
/>

// If you already have the URL from the query
<Image 
  src={project.imageUrl} 
  alt={project.title}
  width={400}
  height={300}
/>
```

## 🔧 Advanced Configuration

### Customizing Schemas
Edit files in `/sanity/schemas/` to modify content structure.

### Adding New Content Types
1. Create a new schema file in `/sanity/schemas/`
2. Import and add it to `/sanity/schemaTypes/index.ts`
3. Create corresponding TypeScript types in `/types/sanity.ts`
4. Add queries in `/lib/sanity.queries.ts`
5. Add fetch functions in `/lib/sanity.utils.ts`

### Deploying Sanity Studio

Deploy your studio to Sanity's hosting:
```bash
npm run studio:deploy
```

Access it at: `https://your-project.sanity.studio`

## 🛡️ Best Practices

1. **Always use fallback data** during development
2. **Order field**: Use multiples of 10 (10, 20, 30) to easily reorder later
3. **Image optimization**: Upload images at reasonable sizes (max 2MB)
4. **API tokens**: Keep tokens secure, never commit to Git
5. **Testing**: Test thoroughly after migrating each content type

## 🐛 Troubleshooting

### Studio won't load
- Check `.env.local` has correct Project ID
- Ensure you're logged in to Sanity
- Try clearing cache: `rm -rf .next`

### Data not showing
- Verify content is published in Studio
- Check browser console for errors
- Confirm environment variables are set

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check TypeScript types match schema definitions

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Integration Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

## 🔗 API Endpoints

Your Sanity project API:
```
https://[PROJECT_ID].api.sanity.io/v[API_VERSION]/data/query/[DATASET]
```

## ⚠️ Important Notes

- Your existing hardcoded content is **NOT lost**
- Components have fallbacks if Sanity data is unavailable
- Migrate content gradually, one section at a time
- Always keep backups of your original data

## 🎯 Next Steps

1. ✅ Set up environment variables
2. ✅ Access Sanity Studio
3. 📝 Migrate your projects
4. 📝 Migrate your skills
5. 📝 Migrate other content
6. 🚀 Deploy and enjoy dynamic content management!

---

Need help? Check the [Sanity Community](https://www.sanity.io/community) or create an issue in this repository.
