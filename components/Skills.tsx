
import React from 'react';
import { SKILLS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">The tools and technologies I'm proficient with.</p>
        <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {SKILLS_DATA.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800/50 rounded-lg shadow-md hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
            {skill.icon}
            <p className="mt-4 text-sm font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
