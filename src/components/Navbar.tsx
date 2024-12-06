import React, { useCallback, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
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

    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, navigate]);

  const navItems = useMemo(() => mainNavItems.map((item) => (
    <motion.button
      key={item}
      onClick={() => handleNavClick(item)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
        activeSection === item.toLowerCase()
          ? 'text-primary-400 dark:text-primary-400'
          : 'text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {item}
    </motion.button>
  )), [activeSection, handleNavClick]);

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
              className="text-2xl font-bold text-gray-900 dark:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BrainFlix
            </motion.button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-400 dark:hover:text-primary-400 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              {navItems}
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