
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A selection of my recent work.</p>
        <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {PROJECTS_DATA.map((project) => (
          <div key={project.title} className="group relative bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-2">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-300 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                  <GitHubIcon className="h-6 w-6" />
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    <ExternalLinkIcon className="h-6 w-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
