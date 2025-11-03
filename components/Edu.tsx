import React from 'react';

function Edu() {
  return (
    <>
      {/* Education Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-100" id="education">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
                EDU
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 ">My academic journey</p>
            </div>
            <div className="md:w-3/4">
              <div className="grid gap-6 sm:gap-8">
                {/* Matriculation */}
                {/* Matriculation */}
<div className="border border-gray-300 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors">
  <div className="flex flex-col sm:flex-row justify-between items-start">
    <div>
      <h3 className="text-xl font-medium mb-1">Matriculation</h3>
      <p className="text-gray-500 dark:text-gray-400 font-light">Nasra School</p>
    </div>
    <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">2021 - 2025</span>
  </div>
  <p className="mt-4 text-gray-500 dark:text-gray-400">
    Currently studying science under 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> AKU-EB </span> 
     with a focus on 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> conceptual learning </span> 
     and 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> critical thinking</span>.
  </p>
</div>

{/* WordPress Development Certification */}
<div className="border border-gray-300 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors">
  <div className="flex flex-col sm:flex-row justify-between items-start">
    <div>
      <h3 className="text-xl font-medium mb-1">WordPress Development</h3>
      <p className="text-gray-500 dark:text-gray-400 font-light">Professional Technologies</p>
    </div>
    <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">2023</span>
  </div>
  <p className="mt-4 text-gray-500 dark:text-gray-400">
    Learned 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> WordPress </span> 
    with hands-on experience in 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> Elementor </span>, 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> themes </span>, 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> plugins </span>, and 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> WooCommerce </span> integration.
  </p>
</div>

{/* Agentic AI Developer */}
<div className="border border-gray-300 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:border-purple-500 transition-colors">
  <div className="flex flex-col sm:flex-row justify-between items-start">
    <div>
      <h3 className="text-xl font-medium mb-1">Agentic AI Developer</h3>
      <p className="text-gray-500 dark:text-gray-400 font-light">GIAIC - Governor Initiative for AI and Computing</p>
    </div>
    <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">2024 - Present</span>
  </div>
  <p className="mt-4 text-gray-500 dark:text-gray-400">
    Currently enrolled, learning 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> TypeScript</span>, 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> Next.js</span>, and 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> Python</span> —now building AI agents using the 
    <span className="text-purple-600 dark:text-purple-400 font-medium"> OpenAI Agents SDK</span>.
  </p>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Edu;
