import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Home, User, Briefcase, Award, MapPin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Location', href: '#location', icon: MapPin },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 90; // Adjusted offset for mobile/tablet
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed w-full z-50">
      {/* Professional Greeting Bar */}
      <div className="bg-blue-600 dark:bg-blue-700 py-2 text-center text-[10px] sm:text-xs font-bold text-white tracking-[0.2em] uppercase">
        Available for internship opportunities | Open to clinical placements
      </div>
      
      <nav className="w-full transition-all duration-500 bg-white dark:bg-gray-950 py-4 shadow-lg border-b border-gray-100 dark:border-gray-900">
        <div className="container-custom flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="group text-lg font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
              AD
            </div>
            <span className="hidden sm:inline group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-base">Anketse Dereje</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <div className="flex space-x-8 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-white">
              {navItems.map(item => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative hover:text-blue-600 dark:hover:text-blue-400 transition-colors group py-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800" />
            <button 
              onClick={toggleDark} 
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm border border-gray-100 dark:border-gray-800"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleDark} 
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content - Full Screen Overlay for Premium Feel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 z-[60] md:hidden bg-white dark:bg-gray-950 flex flex-col"
            >
              <div className="container-custom py-8 flex justify-between items-center border-b border-gray-100 dark:border-gray-900">
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm shadow-lg shadow-blue-500/20">
                    AD
                  </div>
                  Anketse Dereje
                </span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400"
                >
                  <X size={28} />
                </button>
              </div>
              
              <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
                <div className="space-y-4">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Navigation</p>
                  {navItems.map((item, index) => (
                    <motion.a 
                      key={item.name} 
                      href={item.href} 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <item.icon size={16} />
                      </div>
                      <span className="text-base font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-10 border-t border-gray-100 dark:border-gray-900"
                >
                  <button 
                    onClick={toggleDark} 
                    className="w-full flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl text-gray-900 dark:text-white font-bold shadow-sm border border-gray-100 dark:border-gray-800 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white shadow-sm'}`}>
                        {isDark ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-blue-600" />}
                      </div>
                      <span className="text-lg">{isDark ? 'Switch to Light' : 'Switch to Dark'}</span>
                    </div>
                    <div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded-full relative p-1">
                      <div className={`w-4 h-4 bg-white dark:bg-blue-600 rounded-full transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
                    </div>
                  </button>
                </motion.div>
              </div>
              
              <div className="p-10 text-center">
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">Clinical Portfolio &copy; 2026</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
