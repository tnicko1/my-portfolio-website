import React from 'react';
import { PERSONAL_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img 
            src="https://picsum.photos/seed/nikoloz/400/400" 
            alt="Nikoloz Taturashvili" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500/50 shadow-lg"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                About Me
            </h2>
            <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {PERSONAL_DATA.about}
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;