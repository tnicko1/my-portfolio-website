
import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';

const TimelineItem: React.FC<{ title: string, subtitle: string, period: string, description: string, isLast?: boolean }> = ({ title, subtitle, period, description, isLast }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="flex items-center absolute left-0 sm:left-4 top-6">
      <div className="w-4 h-4 bg-cyan-500 rounded-full z-10 group-hover:scale-125 transition-transform"></div>
      {!isLast && <div className="absolute top-2 left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>}
    </div>
    <div className="mb-1 sm:flex justify-between items-center">
      <h3 className="font-bold text-lg text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">{period}</p>
    </div>
    <p className="italic text-gray-600 dark:text-gray-400 mb-2">{subtitle}</p>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Career & Education</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">My professional journey and academic background.</p>
        <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Experience</h3>
          <div className="relative">
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem 
                key={item.role} 
                title={item.role} 
                subtitle={item.company} 
                period={item.period} 
                description={item.description}
                isLast={index === EXPERIENCE_DATA.length - 1}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Education</h3>
          <div className="relative">
            {EDUCATION_DATA.map((item, index) => (
              <TimelineItem 
                key={item.degree} 
                title={item.degree} 
                subtitle={item.institution} 
                period={item.period} 
                description={item.description}
                isLast={index === EDUCATION_DATA.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
