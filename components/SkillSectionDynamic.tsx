import React from "react";
import { FaDocker, FaFigma, FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiFirebase, SiNginx, SiPrisma, SiSupabase, SiVite } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { getSkills } from "@/lib/sanity.utils";
import type { Skill } from "@/types/sanity";
import * as Icons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as IoIcons from "react-icons/io";

async function SkillSectionDynamic() {
  // Fetch skills from Sanity
  const allSkills = await getSkills();

  // Group skills by category
  const frontendSkills = allSkills.filter(s => s.category === 'frontend');
  const languageSkills = allSkills.filter(s => s.category === 'languages');
  const databaseSkills = allSkills.filter(s => s.category === 'database');
  const backendSkills = allSkills.filter(s => s.category === 'backend');

  // Helper to get icon component dynamically
  const getIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    
    // Try different icon libraries
    const allIcons = { ...Icons, ...TbIcons, ...SiIcons, ...IoIcons };
    const IconComponent = (allIcons as any)[iconName];
    
    return IconComponent ? <IconComponent /> : null;
  };

  // Helper to render skill item
  const renderSkillItem = (skill: Skill) => {
    const icon = getIconComponent(skill.icon);
    
    return (
      <div key={skill._id} className="flex items-center">
        <div 
          className={`w-6 h-6 mr-2 rounded-full flex items-center justify-center`}
          style={{ 
            backgroundColor: skill.iconColor || '#gray',
            color: skill.textColor || 'white'
          }}
        >
          {icon || <span className="text-xs font-bold">{skill.name.charAt(0)}</span>}
        </div>
        <span className="text-sm">{skill.name}</span>
      </div>
    );
  };

  // Helper to render category section
  const renderCategory = (title: string, skills: Skill[]) => {
    if (skills.length === 0) return null;
    
    return (
      <div className="border-1 border-gray-800 p-4 rounded-2xl">
        <h3 className="text-sm text-gray-500 mb-4 font-normal">{title}</h3>
        <div className="space-y-3">
          {skills.map(renderSkillItem)}
        </div>
      </div>
    );
  };

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
            {renderCategory("Front-end Engineer Design", frontendSkills)}
            {renderCategory("Languages", languageSkills)}
            {renderCategory("Database", databaseSkills)}
            {renderCategory("Back-end", backendSkills)}
          </div>

          {allSkills.length === 0 && (
            <p className="text-gray-500 text-center mt-8">No skills available yet.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default SkillSectionDynamic;
