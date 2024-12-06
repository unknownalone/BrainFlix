import React, { useCallback, useMemo } from 'react';
import { Menu, X, Sun, Moon, Github, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const mainNavItems = ['Home', 'Portfolio', 'About', 'Skills', 'Contact'] as const;

export const Navbar = React.memo(() => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }

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

      const newSection = currentSection ? currentSection.id : 'home';
      if (activeSection !== newSection) {
        setActiveSection(newSection);
      }
    } else if (location.pathname === '/cv' && activeSection !== 'cv') {
      setActiveSection('cv');
    }
  }, [location.pathname, isScrolled, activeSection]);

  React.useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  const handleNavClick = useCallback((item: string) => {
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
  }, [location.pathname, navigate]);

  const getIsActive = useCallback((item: string) => {
    if (item === 'Home' && location.pathname === '/' && activeSection === 'home') return true;
    if (item === 'CV' && location.pathname === '/cv') return true;
    if (location.pathname === '/' && activeSection === item.toLowerCase()) return true;
    return false;
  }, [location.pathname, activeSection]);

  const navItems = useMemo(() => [...mainNavItems, 'CV'].map((item) => (
    <button
      key={item}
      onClick={() => handleNavClick(item)}
      className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        getIsActive(item)
          ? 'text-primary-400 dark:text-primary-400 font-semibold'
          : 'text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400'
      }`}
    >
      {item}
    </button>
  )), [activeSection, handleNavClick, getIsActive]);

  const menuButton = useMemo(() => (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </motion.button>
  ), [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.button
              onClick={() => handleNavClick('Home')}
              className="text-2xl font-bold focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                BrainFlix
              </span>
            </motion.button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://github.com/unknownalone"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:your.email@gmail.com"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/17156573827"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Phone className="h-5 w-5" />
              </motion.a>
            </div>
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-primary-50 dark:bg-gray-800 hover:bg-primary-100/80 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-primary-400" />
              )}
            </motion.button>
            <div className="md:hidden">
              {menuButton}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex flex-col space-y-1">
                {navItems}
              </div>
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <motion.a
                  href="https://github.com/unknownalone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 p-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:your.email@gmail.com"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 p-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://wa.me/17156573827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 p-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Phone className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

// Utility function for debouncing
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};