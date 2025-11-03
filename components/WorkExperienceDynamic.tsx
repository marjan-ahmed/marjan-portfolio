import { getWorkExperience } from '@/lib/sanity.utils'
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default async function WorkExperienceDynamic() {
  const workExperiences = await getWorkExperience()

  if (!workExperiences || workExperiences.length === 0) {
    return null
  }

  return (
    <section id="work-experience" className="py-12 sm:py-16 md:py-20 border-b border-gray-300 dark:border-gray-800">
      <div className="container max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-purple-500 to-purple-300 dark:from-purple-400 dark:to-purple-200 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="space-y-8">
          {workExperiences.map((experience) => (
            <div 
              key={experience._id}
              className="bg-white dark:bg-gray-900/50 rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    {experience.title}
                  </h3>
                  {experience.companyLink ? (
                    <Link 
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-gray-700 dark:text-gray-300 font-medium hover:text-purple-500 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                    >
                      {experience.company}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  ) : (
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                      {experience.company}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                  {experience.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.startDate} - {experience.endDate}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {experience.description}
              </p>

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    </section>
  )
}
