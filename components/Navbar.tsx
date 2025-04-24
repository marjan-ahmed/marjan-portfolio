'use client'
import React, { useState } from 'react'
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from 'next/link';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>  
    {/* Navigation */}
<nav className="flex justify-center items-center py-4">
<div className="container max-w-6xl px-4 flex justify-between items-center">
  <Link href="/" className="text-white text-xl hover:text-purple-500 transition-colors">
    marjan <span className="text-3xl hover:text-bg-white  text-purple-600">.</span>
  </Link>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center space-x-8">
    <Link href="#education" className="hover:border-b-1 hover:ease-in hover:duration-200 hover:border-purple-500 text-gray-400 hover:text-purple-500 transition-colors">
      education
    </Link>
    <Link href="#experience" className="hover:border-b-1 hover:ease-in hover:duration-200 hover:border-purple-500 text-gray-400 hover:text-purple-500 transition-colors">
      experience
    </Link>
    <Link href="#projects" className="hover:border-b-1 hover:ease-in hover:duration-200 hover:border-purple-500  text-gray-400 hover:text-purple-500 transition-colors">
      projects
    </Link>
    <Link href="#contact" className="hover:border-b-1 hover:ease-in hover:duration-200 hover:border-purple-500 text-gray-400 hover:text-purple-500 transition-colors">
      contact
    </Link>
  </div>

  {/* Social Icons - Desktop */}
  <div className="hidden md:flex items-center space-x-4">
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

  {/* Mobile Menu Button */}
  <button
    className="sm:hidden text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>
</nav>

{/* Mobile Menu */}
{mobileMenuOpen && (
<div className="md:hidden bg-black/95 fixed inset-0 z-50 flex flex-col items-center justify-center">
  <button
    className="absolute top-6 right-6 text-gray-400 hover:text-white"
    onClick={() => setMobileMenuOpen(false)}
  >
    <X className="w-6 h-6" />
  </button>
  <div className="flex flex-col items-center space-y-8 text-xl">
    <Link
      href="#education"
      className="text-gray-400 hover:text-purple-500 transition-colors"
      onClick={() => setMobileMenuOpen(false)}
    >
      education
    </Link>
    <Link
      href="#experience"
      className="text-gray-400 hover:text-purple-500 transition-colors"
      onClick={() => setMobileMenuOpen(false)}
    >
      experience
    </Link>
    <Link
      href="#projects"
      className="text-gray-400 hover:text-purple-500 transition-colors"
      onClick={() => setMobileMenuOpen(false)}
    >
      projects
    </Link>
    <Link
      href="#contact"
      className="text-gray-400 hover:text-purple-500 transition-colors"
      onClick={() => setMobileMenuOpen(false)}
    >
      contact
    </Link>
  </div>
  <div className="flex items-center space-x-6 mt-12">
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

export default Navbar;