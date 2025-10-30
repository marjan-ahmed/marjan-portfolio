import Image from 'next/image';
import React from 'react'

function XP() {
  return (
    <div>
        {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-800" id="experience">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <p className="text-gray-500 dark:text-gray-400">2 years of</p>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter" data-aos="zoom-in-down">
                XP
              </h2>
              <p className="text-gray-500 dark:text-gray-400">with the most popular ecosystem around</p>
            </div>
           <div className="md:w-3/4 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* TypeScript */}
      <div className="bg-[#6cb6e7] rounded-3xl p-6 flex flex-col justify-between h-40">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            width={35}
            height={35}
          />
        </div>
        <div className="text-black font-medium">TypeScript</div>
      </div>

      {/* React */}
      <div className="bg-[#cceefa] rounded-3xl p-6 flex flex-col justify-between h-40">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            width={35}
            height={35}
          />
        </div>
        <div className="text-black font-medium">React</div>
      </div>

      {/* Next.js */}
       <div className="bg-gray-300 rounded-3xl p-6 flex flex-col justify-between h-40">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            width={35}
            height={35}
          />
        </div>
        <div className="text-black font-medium">Next.JS</div>
        </div>
    
            </div>
          </div>
          <div className="hidden md:flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-6 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default XP;