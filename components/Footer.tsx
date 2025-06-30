import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const data = new Date()
    const currYear = data.getFullYear()
  return (
    <>
    <footer className="py-12 sm:py-16 border-t border-gray-300 dark:border-gray-800">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 font-light">Follow me</p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/marjan-ahmed" target="_blank" aria-label="GitHub">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com/in/hafizmarjanahmed" target="_blank" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
              </Link>
              <Link href="mailto:marjanahmed.dev@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <p className="text-gray-500 dark:text-gray-400 text-sm">marjan-ahmed© {currYear}</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer