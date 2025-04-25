import React from 'react'
import { FaDocker, FaFigma, FaNode, FaReact } from "react-icons/fa"
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"
import { SiNginx, SiPrisma, SiVite } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"

function SkillSection() {
  return (
    <>
      {/* Skills Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-16 tracking-tight text-center md:text-left">
            These are the technologies
            <br className="hidden md:block" />
            that I've been using
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Publications */}
            <div data-aos="fade-up" className="border-1 border-gray-800 p-4 rounded-2xl mb-8 sm:mb-0">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">Publications in both stores</h3>
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
            <div data-aos="fade-up" className="border-1 border-gray-800 p-4 rounded-2xl mb-8 sm:mb-0">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">Front-end Engineer Design</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-[#61dafb] rounded-full flex items-center justify-center">
                    <span className="text-black">
                      <FaReact />
                    </span>
                  </div>
                  <span className="text-sm">React JS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-[#61dafb] rounded-full flex items-center justify-center">
                    <span className="text-black">
                      <TbBrandReactNative />
                    </span>
                  </div>
                  <span className="text-sm">React Native</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 dark:bg-white bg-black rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-s">
                      <TbBrandNextjs />
                    </span>
                  </div>
                  <span className="text-sm">Next.JS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <SiVite />
                    </span>
                  </div>
                  <span className="text-sm">Vite</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 dark:bg-white bg-black rounded-full flex items-center justify-center border border-white/20">
                    <span className="text-white">
                      <FaFigma />
                    </span>
                  </div>
                  <span className="text-sm">Figma</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <FaReact />
                    </span>
                  </div>
                  <span className="text-sm">React Testing Library</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div data-aos="fade-up" className="border-1 border-gray-800 p-4 rounded-2xl mb-8 sm:mb-0">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black">
                      <IoLogoJavascript />
                    </span>
                  </div>
                  <span className="text-sm">JavaScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white">TS</span>
                  </div>
                  <span className="text-sm">TypeScript</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div data-aos="fade-up" className="mb-8 sm:mb-0 border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">DevOps</h3>
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
                    <span className="text-white">
                      <SiNginx />
                    </span>
                  </div>
                  <span className="text-sm">Nginx</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <FaDocker />
                    </span>
                  </div>
                  <span className="text-sm">Docker</span>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div data-aos="fade-up" className="border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">Back-end</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <FaNode />
                    </span>
                  </div>
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <SiPrisma />
                    </span>
                  </div>
                  <span className="text-sm">Prisma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillSection;
