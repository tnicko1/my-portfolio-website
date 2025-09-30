
import React from 'react';
import { PERSONAL_DATA } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {PERSONAL_DATA.name}. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href={PERSONAL_DATA.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a href={PERSONAL_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href={PERSONAL_DATA.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
