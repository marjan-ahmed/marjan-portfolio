import Image from "next/image"
import Link from "next/link"
import SkillSection from "@/components/SkillSection"
import ProjectSection from "@/components/ProjectSection"
import XP from "@/components/XP"
import ContactSection from "@/components/ContactSection"
import Edu from "@/components/Edu"
import BackToTopButton from "@/components/BackToTop"
import Testimonial from "@/components/Testimonial"

export default function Home() {

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <BackToTopButton />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 border-b border-gray-300 dark:border-gray-800">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 md:mb-8 tracking-tight">
                Hi, I'm Marjan
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-2 font-light">
                During these <span className="text-black dark:text-white">2 years</span> as Front-End Software Engineer. My role has
                extended beyond coding to effective communication with various departments, to define new features and
                spearheading the development of new apps.
              </p>
              <div className="mt-8 md:mt-10 flex items-center justify-center md:justify-start space-x-6">
                <a
                  href="/Marjan Ahmed Resume.pdf"
                  download
                  className="bg-transparent hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white px-5 sm:px-6 py-2 rounded-full border border-black/20 dark:border-white/20 transition-colors"
                >
                  Download CV
                </a>
                <Link href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  See experience
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-teal-300 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-black">
                  <Image src="/jlsa;sd.jpg" alt="Lucas" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Edu />
      <XP />

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl px-4 mx-auto text-center">
          {["Javascript", "React", "Coffee"].map((tech) => (
            <h2
              key={tech}
              className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-500 to-purple-300 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent font-bold mb-6 sm:mb-8 tracking-tight"
            >
              {tech}
            </h2>
          ))}
        </div>
      </section>

      <SkillSection />
      <ProjectSection />
      <Testimonial />
      <ContactSection />

    </main>
  )
}
