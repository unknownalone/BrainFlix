import type { FC } from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const SocialLink: FC<{
  href: string;
  icon: JSX.Element;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-10"
  >
    {icon}
  </a>
);

export const Footer: FC = () => {
  return (
    <footer className="relative z-10 bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              BrainFlix
            </span>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink
              href="https://github.com/unknownalone"
              icon={<Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              label="GitHub Profile"
            />
            <SocialLink
              href="mailto:your.email@gmail.com"
              icon={<Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              label="Send Email"
            />
            <SocialLink
              href="https://wa.me/17156573827"
              icon={<Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />}
              label="WhatsApp Contact"
            />
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm">
            {new Date().getFullYear()} BrainFlix. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};