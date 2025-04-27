'use client'
import React, { useState } from 'react'
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navigation */}
      <nav className="flex bg-black justify-center items-center py-3">
        <div className="container max-w-6xl px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-gray-700 text-xl font-semibold hover:text-purple-500 transition-colors dark:text-gray-200 dark:hover:text-purple-500"
          >
            marjan
            <span className="text-3xl text-purple-600 dark:text-purple-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["education", "experience", "projects", "testimonials", "contact"].map(section => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-gray-500 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-500 transition-colors border-b-2 border-transparent hover:border-purple-500"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Link href="https://github.com/marjan-ahmed" target="_blank" aria-label="GitHub">
              <Github className="w-5 h-5 text-gray-500 hover:text-purple-500 transition-colors dark:text-gray-200 dark:hover:text-white" />
            </Link>
            <Link href="https://linkedin.com/in/hafizmarjanahmed" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-purple-500 transition-colors dark:text-gray-200 dark:hover:text-white" />
            </Link>
            <Link href="mailto:marjanahmed.dev@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-gray-500 hover:text-purple-500 transition-colors dark:text-gray-200 dark:hover:text-white" />
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-3 md:hidden">
            <ModeToggle />
            <button
              className="text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 fixed inset-0 z-50 flex flex-col items-center justify-center px-4">
          <button
            className="absolute top-6 right-6 text-gray-500 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center space-y-6 text-xl">
            {["education", "experience", "projects", "testimonials", "contact"].map(section => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6 mt-10">
            <Link href="https://github.com/marjan-ahmed" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/hafizmarjanahmed" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
            <Link href="mailto:marjanahmed.dev@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
