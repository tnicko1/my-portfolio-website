
import React from 'react';
import { PERSONAL_DATA } from '../constants';
import DarkVeil from './DarkVeil';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center">
      <DarkVeil />
      <div className="relative z-10 space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-[fadeInUp_1s_ease-out]">
          {PERSONAL_DATA.name}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 animate-[fadeInUp_1s_ease-out_0.2s]">
          {PERSONAL_DATA.role}
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-[fadeInUp_1s_ease-out_0.4s]">
          {PERSONAL_DATA.tagline}
        </p>
        <a 
          href="#contact"
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 animate-[fadeInUp_1s_ease-out_0.6s]"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
