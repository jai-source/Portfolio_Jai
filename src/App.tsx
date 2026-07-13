import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { SpotlightEffect } from './components/SpotlightEffect';
import logoImage from './assets/Logo/Logo2.png';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Timeline } from './sections/Timeline';

const NAV_LINKS = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Work', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Timeline', href: '#timeline', id: 'timeline' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (const link of NAV_LINKS) {
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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen bg-[#18181B] text-white selection:bg-portfolio-primary selection:text-white">
      <SpotlightEffect />

      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1.5 origin-[0%] bg-portfolio-primary"
        style={{ scaleX }}
      />

      <header className="fixed inset-x-2 top-2 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-brutal border-4 border-black bg-[#1C1C1F]/90 px-3 py-2 shadow-brutal backdrop-blur-md transition-all duration-200 sm:inset-x-4 sm:top-4 sm:px-6 sm:py-3">
        <a href="#hero" className="flex items-center gap-2 font-grotesk text-[15px] font-black tracking-tight hover:text-portfolio-secondary sm:text-xl">
          <img
            src={logoImage}
            alt="Jai Ratna logo"
            className="inline-block h-5 w-5 rounded-sm object-cover"
          />
          JAI RATNA
        </a>

        <nav className="hidden items-center gap-1.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                rounded-md px-3 py-1.5 font-grotesk text-xs font-extrabold uppercase tracking-wider transition-all duration-150 select-none
                ${activeSection === link.id
                  ? 'bg-portfolio-primary text-white border-2 border-black brutal-shadow translate-y-[-1px]'
                  : 'text-stone-300 hover:bg-zinc-800 hover:text-white'
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

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded border-2 border-black bg-portfolio-card px-4 py-1.5 font-grotesk text-xs font-extrabold uppercase tracking-wider text-portfolio-text transition-colors duration-150 hover:bg-portfolio-primary hover:text-white brutal-shadow"
            style={{ boxShadow: '2.5px 2.5px 0px 0px #000000' }}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded border-2 border-black bg-portfolio-card text-portfolio-text brutal-shadow active:translate-y-0.5 lg:hidden"
          style={{ boxShadow: '2px 2px 0px 0px #000000' }}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              key="mobile-nav-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/45 backdrop-blur-[2px] lg:hidden"
              aria-label="Close navigation menu"
            />

            <motion.div
              key="mobile-nav-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="fixed inset-x-2 top-[4.35rem] z-40 rounded-brutal border-4 border-black bg-[#1C1C1F] p-3 shadow-brutal-lg sm:inset-x-4 sm:p-6 lg:hidden"
            >
              <nav className="flex flex-col gap-2 text-left">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      rounded-md border-2 border-transparent px-4 py-2 font-grotesk text-sm font-bold uppercase tracking-wider transition-all duration-150
                      ${activeSection === link.id
                        ? 'border-black bg-portfolio-primary text-white brutal-shadow'
                        : 'text-stone-300 hover:bg-zinc-800 hover:text-white'
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
                  className="mt-1 rounded border-2 border-black bg-portfolio-card py-2.5 text-center font-grotesk text-sm font-bold uppercase tracking-wider text-portfolio-text brutal-shadow"
                  style={{ boxShadow: '3px 3px 0px 0px #000000' }}
                >
                  Hire Me
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <footer className="relative z-10 border-t-4 border-black bg-[#121214] px-4 py-8 text-stone-500 sm:px-6 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <span className="flex items-center gap-2 font-grotesk text-lg font-black tracking-tighter text-white">
              <img
                src={logoImage}
                alt="Jai Ratna logo"
                className="h-6 w-6 rounded-sm object-cover"
              />
              JAI RATNA
            </span>
            <span className="text-xs font-semibold">Delhi NCR</span>
          </div>

          <div className="flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-zinc-800 bg-[#1C1C1F] px-3 py-2 text-center font-mono text-[11px] font-bold text-stone-400 sm:px-4 sm:py-1.5 sm:text-xs">
            <FiActivity className="text-green-400" />
            <span className="break-all">jairatna54@gmail.com</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/jai-source"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 transition-colors duration-150 hover:text-white"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/jai-ratna-600522328/"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 transition-colors duration-150 hover:text-white"
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
