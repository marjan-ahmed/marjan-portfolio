import React from 'react';
import { getEducation } from '@/lib/sanity.utils';
import type { Education } from '@/types/sanity';

async function EduDynamic() {
  // Fetch education from Sanity
  const educationData = await getEducation();

  // Helper to render description with highlights
  const renderDescription = (description: string, highlights?: string[]) => {
    if (!highlights || highlights.length === 0) {
      return <p className="mt-4 text-gray-500 dark:text-gray-400">{description}</p>;
    }

    // Split description and highlight specified terms
    let processedText = description;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    highlights.forEach((highlight, idx) => {
      const index = processedText.indexOf(highlight, lastIndex);
      if (index !== -1) {
        // Add text before highlight
        if (index > lastIndex) {
          parts.push(processedText.substring(lastIndex, index));
        }
        // Add highlighted term
        parts.push(
          <span key={idx} className="text-purple-600 dark:text-purple-400 font-medium">
            {highlight}
          </span>
        );
        lastIndex = index + highlight.length;
      }
    });

    // Add remaining text
    if (lastIndex < processedText.length) {
      parts.push(processedText.substring(lastIndex));
    }

    return <p className="mt-4 text-gray-500 dark:text-gray-400">{parts}</p>;
  };

  // Render education card
  const renderEducationCard = (edu: Education) => {
    return (
      <div 
        key={edu._id}
        className="border border-gray-300 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div>
            <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light">{edu.institution}</p>
          </div>
          <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">{edu.period}</span>
        </div>
        {renderDescription(edu.description, edu.highlights)}
      </div>
    );
  };

  return (
    <>
      {/* Education Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-gray-800 dark:text-gray-100" id="education">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
                EDU
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">My academic journey</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid gap-6 sm:gap-8">
                {educationData.length > 0 ? (
                  educationData.map(renderEducationCard)
                ) : (
                  <p className="text-gray-500">No education data available yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EduDynamic;
