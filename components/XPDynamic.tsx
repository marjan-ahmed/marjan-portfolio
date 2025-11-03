import Image from 'next/image';
import React from 'react';
import { getWorkExperience } from '@/lib/sanity.utils';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

async function XPDynamic() {
  // Fetch work experience from Sanity
  const workExperiences = await getWorkExperience();

  return (
    <div>
      {/* Experience Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-300 dark:border-gray-800" id="experience">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <p className="text-gray-500 dark:text-gray-400">2 years of</p>
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter " data-aos="zoom-in-down">
                XP
              </h2>
              <p className="text-gray-500 dark:text-gray-400">Professional work experience</p>
            </div>
            <div className="md:w-3/4 space-y-6">
              {workExperiences.length > 0 ? (
                workExperiences.map((experience) => (
                  <div 
                    key={experience._id}
                    className="border border-gray-300 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-medium mb-1 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-purple-500" />
                          {experience.title}
                        </h3>
                        {experience.companyLink ? (
                          <Link 
                            href={experience.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 dark:text-gray-400 font-light hover:text-purple-500 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                          >
                            {experience.company}
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400 font-light">
                            {experience.company}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        {experience.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{experience.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{experience.startDate} - {experience.endDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No work experience data available yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default XPDynamic;
