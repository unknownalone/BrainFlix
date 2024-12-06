import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const mainNavItems = ['Home', 'Portfolio', 'About', 'Skills', 'Contact'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (location.pathname === '/') {
        const sections = mainNavItems.map(item => ({
          id: item.toLowerCase(),
          element: document.getElementById(item.toLowerCase())
        }));

        const currentSection = sections.find(section => {
          if (!section.element) return false;
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });

        setActiveSection(currentSection ? currentSection.id : 'home');
      } else if (location.pathname === '/cv') {
        setActiveSection('cv');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    if (item === 'Home') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }
    
    if (item === 'CV') {
      navigate('/cv');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getIsActive = (item: string) => {
    if (item === 'Home' && location.pathname === '/' && activeSection === 'home') return true;
    if (item === 'CV' && location.pathname === '/cv') return true;
    if (location.pathname === '/' && activeSection === item.toLowerCase()) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-primary-50/20 dark:border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('Home')}
            className="flex-shrink-0 focus:outline-none"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              BrainFlix
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {mainNavItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none ${
                  getIsActive(item) ? 'text-primary-400 dark:text-primary-400 font-semibold' : ''
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('CV')}
              className={`text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 focus:outline-none ${
                getIsActive('CV') ? 'text-primary-400 dark:text-primary-400 font-semibold' : ''
              }`}
            >
              CV
            </button>
          </div>

          {/* Theme toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-50 dark:bg-gray-800 hover:bg-primary-100/80 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-primary-400" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-primary-50/20 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...mainNavItems, 'CV'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                  getIsActive(item)
                    ? 'text-primary-400 dark:text-primary-400 bg-primary-50 dark:bg-gray-800 font-semibold'
                    : 'text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-primary-50 dark:bg-gray-800 hover:bg-primary-100/80 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400/20"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-primary-400" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};