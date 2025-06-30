import React from "react";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

function ProjectSection() {
  return (
    <>
      {/* Projects Section */}
      <section
        className="py-12 sm:py-16 md:py-20 border-t border-gray-800"
        id="projects"
      >
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
                PRO
              </h2>
              <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mt-2">
                Selected projects I've worked on
              </p>
            </div>
            <div className="md:w-3/4">
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="mb-6  w-full">
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>

                {/* HTML Tab */}
                <TabsContent value="html">
                  <div className="w-full md:w-5/6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/project4.png"
                            alt="AI Content Generator"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Clima Website
                            </h3>
                            <Link
                              href="https://clima-webapp-project.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-4">
                            A Hackathon project that provides information about
                            the climate.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              HTML
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              CSS
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              JS
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/asphaltlegends.vercel.app_.png"
                            alt="Asphalt Lengends Clone"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Asphalt Lengends - Webpage Clone
                            </h3>
                            <Link
                              href="https://asphaltlegends.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-4">
                            It is my favourite game which I created the same
                            website clone of it
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              HTML
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              CSS
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              JS
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/joke-engine.vercel.app_.png"
                            alt="Joke Generator"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">Joke Engine</h3>
                            <Link
                              href="https://joke-engine.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A simple web application that generates random jokes
                            using the JokeAPI.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              HTML
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              CSS
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              JS
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Random Dad Joke API
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/dynamic-resume-builder-six-lake.vercel.app_.png"
                            alt="Resume Builder"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Dynamic Resume Builder
                            </h3>
                            <Link
                              href="https://dynamic-resume-builder-six-lake.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A web application that allows users to create and
                            download their resumes in PDF format.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              HTML
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              CSS
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              JS
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Next.js Tab */}
                <TabsContent value="nextjs">
                  <div className="w-full md:w-5/6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/project1.png"
                            alt="E-commerce App"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Nike Clone Website
                            </h3>
                            <Link
                              href="https://nike-clone-version.vercel.app"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A full-featured e-commerce platform built with
                            React, Next.js, and Stripe integration.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Next.js
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Tailwind
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              ShadCN
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Supabase
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Stripe
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/project2.png"
                            alt="Fitness Tracker"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Hekto Ecommerce Website
                            </h3>
                            <Link
                              href="https://hekto-store.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Web-App for mobile to purchase online furtinure
                            easily and real time update
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Nextjs
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              ShipEngine
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Sanity
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project 3 */}
                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/project3.png"
                            alt="Task Management Dashboard"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Marvix - Blog Website
                            </h3>
                            <Link
                              href="https://marvix-blog.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Collaborative task management platform with
                            real-time updates and team features.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              React
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Socket.io
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Node.js
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/governorsindh-seven.vercel.app_.png"
                            alt="Governor Sindh - Website Clone"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Governor Sindh - Website Clone
                            </h3>
                            <Link
                              href="https://governorsindh-seven.vercel.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A clone of the official website of the Governor of
                            Sindh, Pakistan.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Next.js
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Tailwind
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Python Tab */}
                <TabsContent value="python">
                  <div className="w-full md:w-5/6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/unit-converter.JPG"
                            alt="Unit Convertor"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Unit Converter
                            </h3>
                            <Link
                              href="https://marjan-unit-converter.streamlit.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A basic unit converter web application.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Streanlit
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              UV
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/password-checker.JPG"
                            alt="Password Strength Meter"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Password Strength Meter
                            </h3>
                            <Link
                              href="https://password-strength-measure.streamlit.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A web application that checks the strength of a
                            password.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Streanlit
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              UV
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/bmi.JPG"
                            alt="BMI Calculator"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              BMI (Body Mass Index) Calculator
                            </h3>
                            <Link
                              href="https://bmi-measure.streamlit.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A web application that calculates the Body Mass
                            Index (BMI) based on user input.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Streanlit
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              UV
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
                        <div className="relative h-48 bg-gray-900">
                          <Image
                            src="/secure-data.JPG"
                            alt="Secure Data Encryption"
                            fill
                            className="object-cover opacity-80"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-medium">
                              Secure Data Encryption
                            </h3>
                            <Link
                              href="https://secure-data-encryption-by-marjan.streamlit.app/"
                              target="_blank"
                              className="text-gray-500 dark:text-gray-400 hover:text-white"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            A web application that encrypts and decrypts data
                            using a secure algorithm.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              Streanlit
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              UV
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              hashlib
                            </span>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                              cryptography
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;