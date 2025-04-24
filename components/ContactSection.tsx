import { Github, Link, Linkedin, Mail, Send } from 'lucide-react'
import React from 'react'

function ContactSection() {
  return (
    <div>
    {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-800" id="contact">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">SAY HI</h2>
              <p className="text-gray-400 mt-2 font-light">Let's work together</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity w-full sm:w-auto"
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
                        <a
                          href="mailto:marjanahmed.dev@gmail.com"
                          className="hover:text-purple-500 text-gray-300 text-sm bg-gray-700 p-0.5 px-2 rounded-sm transition-colors"
                        >
                          marjanahmed.dev@gmail.com
                        </a>
                      </p>
                      <p>
                        Location:{" "}
                        <span className="text-sm bg-gray-700 p-0.5 px-2 text-gray-300 rounded-sm">Karachi, PK</span>
                      </p>
                      <p>
                        Available for: <span className="text-sm">Freelance, Full-time opportunities</span>
                      </p>
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
    </div>
  )
}

export default ContactSection