import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight, FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { MagneticButton } from '../components/MagneticButton';

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
    <section id="hero" className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-grid-pattern px-4 pb-10 pt-24 sm:min-h-[90vh] sm:px-6 sm:pb-16 sm:pt-32 md:px-8 xl:px-16">
      <div className="pointer-events-none absolute bottom-6 left-3 h-10 w-10 rotate-45 border-4 border-[#27272A] sm:bottom-8 sm:left-10 sm:h-16 sm:w-16" />
      <div className="pointer-events-none absolute right-4 top-14 hidden h-20 w-20 rounded-full border-4 border-dashed border-[#27272A] sm:block md:right-10 md:top-10 md:h-24 md:w-24 animate-spin" style={{ animationDuration: '40s' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <div className="flex max-w-3xl flex-col justify-center text-left lg:col-span-7">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex max-w-full items-center gap-1.5 rounded-full border-2 border-black bg-[#27272A] px-2.5 py-1 text-[9px] font-bold uppercase leading-snug tracking-[0.18em] text-portfolio-secondary sm:mb-6 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm sm:tracking-wider brutal-shadow"
            style={{ boxShadow: '2px 2px 0px 0px #000000' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-portfolio-primary animate-ping" />
            Open to Software Engineering Internships, Freelance & Collaboration
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-4 text-[2.45rem] font-extrabold leading-[0.92] tracking-tighter text-white sm:mb-5 sm:text-6xl md:text-7xl"
          >
            I'm <span className="relative inline-block text-portfolio-primary">Jai Ratna<span className="absolute bottom-1 left-0 h-3 w-full bg-portfolio-primary/20 -z-10" /></span>.
            <br />
            <span className="text-white">I build software that solves real problems.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-6 max-w-2xl text-[15px] font-medium leading-7 text-stone-400 sm:mb-8 sm:text-lg md:text-xl"
          >
            Software Engineering student passionate about building scalable applications, intelligent systems, and products people actually enjoy using. From backend APIs and full-stack web apps to computer vision projects like Percepta, I enjoy turning ideas into reliable software.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-6 flex flex-col items-stretch gap-2.5 min-[400px]:flex-row min-[400px]:gap-3 sm:mb-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <MagneticButton
              href="#projects"
              className="w-full border-black bg-portfolio-primary text-white hover:bg-portfolio-hover hover:text-white min-[400px]:w-auto sm:w-auto"
            >
              View Projects <FaChevronRight className="ml-2 text-sm" />
            </MagneticButton>
            <MagneticButton
              href="mailto:jairatna54@gmail.com"
              className="w-full border-black bg-portfolio-card text-portfolio-text min-[400px]:w-auto sm:w-auto"
            >
              Contact Me <FaRegEnvelope className="ml-2 text-sm" />
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500 sm:text-sm sm:tracking-widest">Find me on</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/jai-source"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-portfolio-card text-portfolio-text brutal-shadow transition-all duration-200 hover:-translate-y-[2px] hover:bg-portfolio-primary hover:text-white sm:h-10 sm:w-10"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/jai-ratna-600522328/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-portfolio-card text-portfolio-text brutal-shadow transition-all duration-200 hover:-translate-y-[2px] hover:bg-portfolio-primary hover:text-white sm:h-10 sm:w-10"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="lg:hidden">
          <div className="overflow-hidden rounded-brutal border-4 border-black bg-portfolio-card text-portfolio-text shadow-brutal-lg">
            <div className="flex items-center justify-between border-b-4 border-black bg-[#27272A] px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="font-grotesk text-xs font-black uppercase tracking-wider text-white sm:text-sm">Right now</span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Focus</span>
            </div>

            <div className="grid gap-2 p-3 min-[400px]:grid-cols-3 sm:grid-cols-3 sm:gap-3 sm:p-4">
              {currentFocus.map((item) => (
                <div key={item.label} className="rounded-[14px] border-2 border-black bg-white p-2.5 shadow-[2px_2px_0px_0px_#000000]">
                  <div className="mb-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-stone-500 sm:text-[10px] sm:tracking-[0.22em]">{item.label}</div>
                  <div className="text-[13px] font-bold leading-snug text-portfolio-text sm:text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative hidden items-center justify-center lg:col-span-5 lg:flex"
        >
          <div className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-brutal border-4 border-black bg-[#3B82F6] opacity-20" />

          <div className="relative w-full max-w-[440px] overflow-hidden rounded-brutal border-4 border-black bg-portfolio-card text-portfolio-text shadow-brutal-xl animate-float-slow">
            <div className="border-b-4 border-black bg-[#27272A] px-5 py-3">
              <span className="font-grotesk text-sm font-black uppercase tracking-wider text-white">Right now</span>
            </div>

            <div className="space-y-4 p-5">
              {currentFocus.map((item) => (
                <div key={item.label} className="border-b-2 border-dashed border-zinc-300 pb-3 last:border-0 last:pb-0">
                  <div className="mb-1 text-[10px] font-extrabold uppercase tracking-widest text-stone-500">{item.label}</div>
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
