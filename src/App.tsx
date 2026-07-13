import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SpotlightEffect } from './components/SpotlightEffect';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Timeline } from './sections/Timeline';
import { Contact } from './sections/Contact';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import logoImage from './assets/Logo/Logo2.png';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll progress at the top of page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Work', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Intersect observer to highlight active links
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#18181B] text-white min-h-screen selection:bg-portfolio-primary selection:text-white">
      {/* 60fps Spotlight Effect */}
      <SpotlightEffect />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-portfolio-primary z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <header className="fixed top-4 inset-x-4 z-40 max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-[#1C1C1F]/90 backdrop-blur-md border-4 border-black rounded-brutal shadow-brutal transition-all duration-200">
        {/* Logo / Title */}
        <a href="#hero" className="font-grotesk font-black text-xl tracking-tighter flex items-center gap-1.5 hover:text-portfolio-secondary">
          <img
            src={logoImage}
            alt="Jai Ratna logo"
            className="w-5 h-5 inline-block rounded-sm object-cover"
          />
          JAI RATNA
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                px-3 py-1.5 font-grotesk font-extrabold text-xs uppercase tracking-wider rounded-md transition-all duration-150 select-none
                ${activeSection === link.id 
                  ? 'bg-portfolio-primary text-white border-2 border-black brutal-shadow translate-y-[-1px]' 
                  : 'text-stone-300 hover:text-white hover:bg-zinc-800'
                }
              `}
              style={{
                boxShadow: activeSection === link.id ? '2px 2px 0px 0px #000000' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Nav CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 font-grotesk font-extrabold text-xs uppercase tracking-wider border-2 border-black bg-portfolio-card text-portfolio-text rounded hover:bg-portfolio-primary hover:text-white transition-colors duration-150 brutal-shadow"
            style={{ boxShadow: '2.5px 2.5px 0px 0px #000000' }}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center border-2 border-black bg-portfolio-card text-portfolio-text rounded brutal-shadow active:translate-y-0.5"
          style={{ boxShadow: '2px 2px 0px 0px #000000' }}
        >
          {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`fixed inset-x-4 top-20 z-40 bg-[#1C1C1F] border-4 border-black rounded-brutal shadow-brutal-lg p-6 lg:hidden ${menuOpen ? 'block' : 'pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-3 text-left">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                px-4 py-2.5 font-grotesk font-bold text-sm uppercase tracking-wider rounded-md border-2 border-transparent transition-all duration-150
                ${activeSection === link.id 
                  ? 'bg-portfolio-primary text-white border-black brutal-shadow' 
                  : 'text-stone-300 hover:text-white hover:bg-zinc-800'
                }
              `}
              style={{
                boxShadow: activeSection === link.id ? '3px 3px 0px 0px #000000' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center py-2.5 font-grotesk font-bold text-sm uppercase tracking-wider border-2 border-black bg-portfolio-card text-portfolio-text rounded brutal-shadow"
            style={{ boxShadow: '3px 3px 0px 0px #000000' }}
          >
            Hire Me
          </a>
        </nav>
      </motion.div>

      {/* Main Sections Container */}
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-[#121214] py-12 px-6 relative z-10 text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-grotesk font-black text-white tracking-tighter text-lg flex items-center gap-2">
              <img
                src={logoImage}
                alt="Jai Ratna logo"
                className="w-6 h-6 rounded-sm object-cover"
              />
              JAI RATNA
            </span>
            <span className="text-xs font-semibold"> · Delhi NCR</span>
          </div>

          <div className="flex items-center gap-2 border border-zinc-800 bg-[#1C1C1F] px-4 py-1.5 rounded-full text-xs font-bold text-stone-400 font-mono">
            <FiActivity className="text-green-400" />
            <span>jairatna54@gmail.com</span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/jai-source" 
              target="_blank" 
              rel="noreferrer" 
              className="text-stone-400 hover:text-white transition-colors duration-150"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jai-ratna-600522328/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-stone-400 hover:text-white transition-colors duration-150"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
