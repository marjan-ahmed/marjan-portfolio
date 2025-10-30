import React from "react";
import { FaDocker, FaFigma, FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiFirebase, SiNginx, SiPrisma, SiSupabase, SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiFirebase } from "react-icons/di";
import { RiFirebaseFill, RiFirebaseLine } from "react-icons/ri";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {/* Publications */}

            {/* Front-end Engineer Design */}
            <div className="border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">
                Front-end Engineer Design
              </h3>
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
            <div className="border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">
                Languages
              </h3>
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
            <div className="border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">Database</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-[#DD2C00] rounded-full flex items-center justify-center border border-white/20">
                   <SiFirebase color="white" />
                  </div>
                  <span className="text-sm">Firebase</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 mr-2 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white">
                      <SiSupabase />
                    </span>
                  </div>
                  <span className="text-sm">Supabase</span>
                </div>
              </div>
            </div>

            {/* Back-end */}
            <div className="border-1 border-gray-800 p-4 rounded-2xl">
              <h3 className="text-sm text-gray-500 mb-4 font-normal">
                Back-end
              </h3>
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
  );
}

export default SkillSection;
