import React from 'react'

function XP() {
  return (
    <div>
        {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-800" id="experience">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <p className="text-gray-400 font-light">4 years of</p>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter" data-aos="zoom-in-down">
                XP
              </h2>
              <p className="text-gray-400 mt-2 font-light">with the most popular ecosystem around</p>
            </div>
            <div className="md:w-3/4 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div
                className="bg-[#d8d5a2] rounded-3xl p-6 flex flex-col justify-between h-40"
              >
                <div className="bg-[#b3ad64] text-black w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                  JS
                </div>
                <div className="text-black font-medium">JavaScript</div>
              </div>
              <div
                className="bg-[#83a5b8] rounded-3xl p-6 flex flex-col justify-between h-40"
              >
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
              <div
                className="bg-[#d3d3d3] rounded-3xl p-6 flex flex-col justify-between h-40"
              >
                <div className="bg-black text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold">
                  N
                </div>
                <div className="text-black font-medium">Next.JS</div>
              </div>
            </div>
          </div>
          <div className="hidden md:flexjustify-center mt-8">
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