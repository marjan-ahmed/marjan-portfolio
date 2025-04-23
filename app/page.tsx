import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Send } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-center items-center py-6">
        <div className="container max-w-6xl px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-500 transition-colors">
              marjan.
            </Link>
            <Link href="#education" className="text-gray-400 hover:text-purple-500 transition-colors">
              education
            </Link>
            <Link href="#experience" className="text-gray-400 hover:text-purple-500 transition-colors">
              experience
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-purple-500 transition-colors">
              projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">
              contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="https://github.com/marjan-ahmed" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/hafizmarjanahmed" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:marjanahmed.dev@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-8 tracking-tight">Hi, I'm Marjan</h1>
              <p className="text-gray-400 mb-2 font-light">
                During these <span className="text-white">4 years</span> as Front-End Software Engineer. My role has
                extended beyond coding to effective communication with various departments, to define new features and
                spearheading the development of new apps.
              </p>
              <div className="mt-10 flex items-center space-x-6">
              <a
  href="/Marjan Resume.pdf"
  download
  className="bg-transparent hover:bg-white/10 text-white px-6 py-2 rounded-full border border-white/20 transition-colors"
>
  Download CV
</a>

                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  See experience
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-teal-300 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black">
                  <Image src="/coding_table.jpeg" alt="Lucas" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 border-t border-gray-800" id="education">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold tracking-tighter">EDU</h2>
              <p className="text-gray-400 mt-2 font-light">My academic journey</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid gap-8">
                <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-1">Matriculation</h3>
                      <p className="text-gray-400 font-light">Nasra School</p>
                    </div>
                    <span className="text-gray-400 font-light">2021 - 2025</span>
                  </div>
                  <p className="mt-4 text-gray-400 font-light">
                    Focused on web development, algorithms, and software engineering principles. Graduated with honors.
                  </p>
                </div>

                <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-1">WordPress Development Certification</h3>
                      <p className="text-gray-400 font-light">Professional Technologies</p>
                    </div>
                    <span className="text-gray-400 font-light">2023</span>
                  </div>
                  <p className="mt-4 text-gray-400 font-light">
                    Advanced course covering React, Redux, and modern frontend architecture patterns.
                  </p>
                </div>

                <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium mb-1">Agentic AI Developer</h3>
                      <p className="text-gray-400 font-light">GIAIC - Governor Initiative for AI and Computing</p>
                    </div>
                    <span className="text-gray-400 font-light">2022</span>
                  </div>
                  <p className="mt-4 text-gray-400 font-light">
                    Specialized training in React Native and cross-platform mobile application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t border-gray-800" id="experience">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-10 md:mb-0">
              <p className="text-gray-400 font-light">4 years of</p>
              <h2 className="text-6xl font-bold tracking-tighter">XP</h2>
              <p className="text-gray-400 mt-2 font-light">with the most popular ecosystem around</p>
            </div>
            <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#d8d5a2] rounded-3xl p-6 flex flex-col justify-between h-40">
                <div className="bg-[#b3ad64] text-black w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                  JS
                </div>
                <div className="text-black font-medium">JavaScript</div>
              </div>
              <div className="bg-[#83a5b8] rounded-3xl p-6 flex flex-col justify-between h-40">
                <div className="text-[#61dafb]">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div className="text-black font-medium">React</div>
              </div>
              <div className="bg-[#d3d3d3] rounded-3xl p-6 flex flex-col justify-between h-40">
                <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                  N
                </div>
                <div className="text-black font-medium">Next.JS</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-6 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container max-w-6xl px-4 mx-auto text-center">
          <h2 className="text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-8 tracking-tight">
            Javascript
          </h2>
          <h2 className="text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-8 tracking-tight">
            React
          </h2>
          <h2 className="text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-8 tracking-tight">
            Coffee
          </h2>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">
            These are the technologies
            <br />
            that I've been using
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Publications */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 font-light">Publications in both stores</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <span className="text-sm">App Store</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span className="text-sm">Play Store</span>
                </div>
              </div>
            </div>

            {/* Front-end Engineer Design */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 font-light">Front-end Engineer Design</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-[#61dafb] rounded-full flex items-center justify-center">
                    <span className="text-xs text-black">R</span>
                  </div>
                  <span className="text-sm">React JS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-[#61dafb] rounded-full flex items-center justify-center">
                    <span className="text-xs text-black">R</span>
                  </div>
                  <span className="text-sm">React Native</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-black rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-xs">N</span>
                  </div>
                  <span className="text-sm">Next.JS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">V</span>
                  </div>
                  <span className="text-sm">Vite</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-black rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-xs">F</span>
                  </div>
                  <span className="text-sm">Figma</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">J</span>
                  </div>
                  <span className="text-sm">Jest</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">R</span>
                  </div>
                  <span className="text-sm">React Testing Library</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 font-light">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-black">JS</span>
                  </div>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">TS</span>
                  </div>
                  <span className="text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 font-light">DevOps</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-gray-800 rounded-full flex items-center justify-center border border-white/20">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                  <span className="text-sm">GitHub Actions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">N</span>
                  </div>
                  <span className="text-sm">Nginx</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">D</span>
                  </div>
                  <span className="text-sm">Docker</span>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div>
              <h3 className="text-sm text-gray-400 mb-4 font-light">Back-end</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-xs">N</span>
                  </div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-xs">P</span>
                  </div>
                  <span className="text-sm">Prisma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 border-t border-gray-800" id="projects">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold tracking-tighter">PRO</h2>
              <p className="text-gray-400 mt-2 font-light">Selected projects I've worked on</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="relative h-48 bg-gray-900">
                    <Image src="/project1.png" alt="E-commerce App" fill className="object-cover opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">Nike Clone Website</h3>
                      <Link href="https://nike-clone-version.vercel.app" target="_blank" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-gray-400 font-light mb-4">
                      A full-featured e-commerce platform built with React, Next.js, and Stripe integration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Tailwind</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">ShadCN</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Supabase</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Stripe</span>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="relative h-48 bg-gray-900">
                    <Image src="/project2.png" alt="Fitness Tracker" fill className="object-cover opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">Fitness Tracker</h3>
                      <Link href="https://hekto-store.vercel.app/" target="_blank" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-gray-400 font-light mb-4">
                      Mobile app for tracking workouts, nutrition, and fitness goals with data visualization.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">React Native</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Firebase</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">D3.js</span>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="relative h-48 bg-gray-900">
                    <Image
                      src="/project3.png"
                      alt="Task Management Dashboard"
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">Task Management Dashboard</h3>
                      <Link href="https://marvix-blog.vercel.app/" target="_blank" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-gray-400 font-light mb-4">
                      Collaborative task management platform with real-time updates and team features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Socket.io</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Node.js</span>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="relative h-48 bg-gray-900">
                    <Image src="/project4.png" alt="AI Content Generator" fill className="object-cover opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">AI Content Generator</h3>
                      <Link href="https://clima-webapp-project.vercel.app/" target="_blank" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-gray-400 font-light mb-4">
                      Web application that leverages AI to generate marketing content and social media posts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">OpenAI API</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                  <div className="relative h-48 bg-gray-900">
                    <Image src="/project4.png" alt="AI Content Generator" fill className="object-cover opacity-80" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">AI Content Generator</h3>
                      <Link href="https://example.com" target="_blank" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-gray-400 font-light mb-4">
                      Web application that leverages AI to generate marketing content and social media posts.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">OpenAI API</span>
                      <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div> */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-gray-800" id="contact">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold tracking-tighter">SAY HI</h2>
              <p className="text-gray-400 mt-2 font-light">Let's work together</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full bg-transparent border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                    <div className="space-y-3 text-gray-400 font-light">
                      <p>
                        Feel free to reach out if you're looking for a developer, have a question, or just want to
                        connect.
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:marjanahmed.dev@gmail.com" className="hover:text-purple-500 transition-colors">
                          marjanahmed.dev@gmail.com
                        </a>
                      </p>
                      <p>Location: Karachi, PK</p>
                      <p>Available for: Freelance, Full-time opportunities</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">Connect</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://github.com/marjan-ahmed"
                        target="_blank"
                        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link
                        href="https://linkedin.com/in/hafizmarjanahmed"
                        target="_blank"
                        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                      <Link
                        href="mailto:example@example.com"
                        className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 font-light">Follow me</p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/marjan-ahmed" target="_blank" aria-label="GitHub">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/hafizmarjanahmed" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="mailto:marjanahmed.dev@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-500 text-sm font-light">ahmed© 2024</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
