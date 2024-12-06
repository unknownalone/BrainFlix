import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CV } from './components/CV';
import { PageTransition } from './components/PageTransition';

function HomePage() {
  return (
    <PageTransition>
      <main className="relative">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
    </PageTransition>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-1000 relative">
      {/* Dotted texture overlay with parallax effect */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(#A855F7_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]"
        style={{
          transform: `translateY(${Math.min(window.scrollY * 0.1, 100)}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      <Navbar />
      <main id="main-content" role="main" className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={
              <PageTransition>
                <CV />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;