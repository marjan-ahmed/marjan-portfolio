"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from "@/components/Navbar"
import SkillSection from "@/components/SkillSection"
import ProjectSection from "@/components/ProjectSection"
import XP from "@/components/XP"
import ContactSection from "@/components/ContactSection"
import Edu from "@/components/Edu"

export default function Home() {
  const data = new Date()
  const currYear = data.getFullYear()

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 md:mb-8 tracking-tight">Hi, I'm Marjan</h1>
              <p className="text-gray-400 mb-2 font-light">
                During these <span className="text-white">2 years</span> as Front-End Software Engineer. My role has
                extended beyond coding to effective communication with various departments, to define new features and
                spearheading the development of new apps.
              </p>
              <div className="mt-8 md:mt-10 flex items-center justify-center md:justify-start space-x-6">
                <a
                  href="/Marjan Resume.pdf"
                  download
                  className="bg-transparent hover:bg-white/10 text-white px-5 sm:px-6 py-2 rounded-full border border-white/20 transition-colors"
                >
                  Download CV
                </a>
                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors">
                  See experience
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-teal-300 opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black">
                  <Image src="/coding_table.jpeg" alt="Lucas" fill className="object-cover" priority />
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
          <h2
            data-aos="fade-down"
            className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-6 sm:mb-8 tracking-tight"
          >
            Javascript
          </h2>
          <h2
            data-aos="fade-down"
            className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-6 sm:mb-8 tracking-tight"
          >
            React
          </h2>
          <h2
            data-aos="fade-down"
            className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent font-bold mb-6 sm:mb-8 tracking-tight"
          >
            Coffee
          </h2>
        </div>
      </section>

      <SkillSection />
      <ProjectSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-gray-800">
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
            <p className="text-gray-500 text-sm font-light">ahmed© {currYear}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
