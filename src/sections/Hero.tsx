import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../components/MagneticButton';
import { FaGithub, FaLinkedinIn, FaChevronRight, FaRegEnvelope } from 'react-icons/fa';


export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 120, damping: 14 }
    }
  };

  const currentFocus = [
    { label: 'Studying', value: 'B.Tech Computer Science @ Manipal University Jaipur' },
    { label: 'Working', value: 'Software Engineering Intern @ WITS Innovation Labs' },
    { label: 'Based in', value: 'Delhi NCR, India' },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 xl:px-16 bg-grid-pattern">
      {/* Absolute Decorative Grid Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-4 border-dashed border-[#27272A] rounded-full pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-[#27272A] pointer-events-none rotate-45" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Left Column: Text & Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Confident Tagline Label */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#27272A] border-2 border-black px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase text-portfolio-secondary max-w-fit mb-6 brutal-shadow"
            style={{ boxShadow: '2px 2px 0px 0px #000000' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-portfolio-primary animate-ping" />
            Open to Software Engineering Internships, Freelance & Collaboration
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-none mb-4"
          >
            I'm <span className="text-portfolio-primary relative inline-block">Jai Ratna<span className="absolute bottom-1 left-0 w-full h-3 bg-portfolio-primary/20 -z-10" /></span>.
            <br />
            <span className="text-white">I build software that solves real problems.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-stone-400 font-medium max-w-2xl mb-8 leading-relaxed"
          >
            Software Engineering student passionate about building scalable applications, intelligent systems, and products people actually enjoy using. From backend APIs and full-stack web apps to computer vision projects like Percepta, I enjoy turning ideas into reliable software.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <MagneticButton 
              href="#projects" 
              className="bg-portfolio-primary text-white border-black hover:bg-portfolio-hover hover:text-white"
            >
              View Projects <FaChevronRight className="ml-2 text-sm" />
            </MagneticButton>
            <MagneticButton 
              href="mailto:jairatna54@gmail.com" 
              className="bg-portfolio-card text-portfolio-text border-black"
            >
              Contact Me <FaRegEnvelope className="ml-2 text-sm" />
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-sm font-bold text-stone-500 uppercase tracking-widest">Find me on</span>
            <div className="flex gap-3">
              <a 
                href="https://github.com/jai-source" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 flex items-center justify-center border-2 border-black bg-portfolio-card text-portfolio-text rounded-full brutal-shadow hover:bg-portfolio-primary hover:text-white hover:translate-y-[-2px] transition-all duration-200"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaGithub className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jai-ratna-600522328/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 flex items-center justify-center border-2 border-black bg-portfolio-card text-portfolio-text rounded-full brutal-shadow hover:bg-portfolio-primary hover:text-white hover:translate-y-[-2px] transition-all duration-200"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Current focus */}
        <motion.div 
          variants={itemVariants}
          className="hidden lg:flex lg:col-span-5 justify-center items-center relative"
        >
          <div className="absolute inset-0 bg-[#3B82F6] rounded-brutal brutal-border translate-x-3 translate-y-3 pointer-events-none opacity-20" />
          
          <div className="w-full max-w-[440px] border-4 border-black bg-portfolio-card text-portfolio-text rounded-brutal shadow-brutal-xl overflow-hidden relative animate-float-slow">
            <div className="bg-[#27272A] border-b-4 border-black px-5 py-3">
              <span className="font-grotesk font-black text-sm text-white uppercase tracking-wider">Right now</span>
            </div>
            
            <div className="p-5 space-y-4">
              {currentFocus.map((item) => (
                <div key={item.label} className="border-b-2 border-dashed border-zinc-300 pb-3 last:border-0 last:pb-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-stone-500 mb-1">{item.label}</div>
                  <div className="text-sm font-bold leading-snug">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
