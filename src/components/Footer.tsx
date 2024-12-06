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

          <div className="flex gap-8">
            <a
              href="https://github.com/unknownalone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="mailto:your.email@gmail.com"
              className="flex items-center justify-center p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
            <a
              href="https://wa.me/17156573827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-400 text-sm">
            {new Date().getFullYear()} BrainFlix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};