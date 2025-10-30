import React from "react";
import { ExternalLink } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/sanity.utils";
import type { Project } from "@/types/sanity";

async function ProjectSectionDynamic() {
  // Fetch projects from Sanity
  const allProjects = await getProjects();
  
  // Group projects by category
  const htmlProjects = allProjects.filter(p => p.category === 'html');
  const nextjsProjects = allProjects.filter(p => p.category === 'nextjs');
  const pythonProjects = allProjects.filter(p => p.category === 'python');

  // Helper function to render project cards
  const renderProjectCard = (project: Project) => {
    return (
      <div key={project._id} className="border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors">
        <div className="relative h-48 bg-gray-900">
          <Image
            src={project.imageUrl || '/placeholder.png'}
            alt={project.title}
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-medium">
              {project.title}
            </h3>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-white"
              >
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

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
              <p className="text-gray-500 dark:text-gray-500 mt-2">
                Selected projects I've worked on
              </p>
            </div>
            <div className="md:w-3/4">
              <Tabs defaultValue="html" className="w-full">
                <TabsList className="mb-6 w-full max-w-md">
                  <TabsTrigger value="html">HTML</TabsTrigger>
                  <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                </TabsList>

                {/* HTML Tab */}
                <TabsContent value="html">
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {htmlProjects.length > 0 ? (
                        htmlProjects.map(renderProjectCard)
                      ) : (
                        <p className="text-gray-500">No HTML projects available yet.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Next.js Tab */}
                <TabsContent value="nextjs">
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {nextjsProjects.length > 0 ? (
                        nextjsProjects.map(renderProjectCard)
                      ) : (
                        <p className="text-gray-500">No Next.js projects available yet.</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                {/* Python Tab */}
                <TabsContent value="python">
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {pythonProjects.length > 0 ? (
                        pythonProjects.map(renderProjectCard)
                      ) : (
                        <p className="text-gray-500">No Python projects available yet.</p>
                      )}
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

export default ProjectSectionDynamic;
