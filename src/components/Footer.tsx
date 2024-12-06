import type { FC } from 'react';
import { Github, Mail, Phone } from 'lucide-react';

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              BrainFlix
            </span>
          </div>

          <div className="flex space-x-6">
            <button
              onClick={() => window.open('https://github.com/unknownalone', '_blank')}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.location.href = 'mailto:your.email@gmail.com'}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/17156573827', '_blank')}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400 text-sm">
            {new Date().getFullYear()} BrainFlix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};