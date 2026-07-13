import React from 'react';
import { motion } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';
import { MobileDisclosure } from '../components/MobileDisclosure';

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
  tag: string;
}

export const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: '2024 - Present',
      title: 'University Education',
      company: 'Manipal University Jaipur',
      description: 'Built a strong foundation in Operating Systems, DBMS, and Object Oriented Programming while beginning to explore software engineering through personal projects.',
      color: '#3B82F6',
      tag: 'Academic'
    },
    {
      year: 'December 2025',
      title: 'Bootcamp Instructor',
      company: 'MUJ ACM SIGBED Chapter',
      description: 'First time teaching. Ran a 5 day bootcamp on HTML, CSS, and JS. Learned that explaining closures to beginners is harder than writing them.',
      color: '#60A5FA',
      tag: 'Teaching'
    },
    {
      year: 'June 2026 - Present',
      title: 'Lead Developer',
      company: 'HackerRank MUJ',
      description: 'Took over as lead dev for the campus HackerRank chapter. Running contests, reviewing code, and helping juniors ship their first PRs.',
      color: '#3B82F6',
      tag: 'Leadership'
    },
    {
      year: 'May - June 2026',
      title: 'Freelance Engineer',
      company: 'Nishva Preschool & Daycare',
      description: 'First paid client work - built a preschool website end-to-end. Learned more about client communication than any course could teach.',
      color: '#60A5FA',
      tag: 'Freelance'
    },
    {
      year: 'June 2026 - Present',
      title: 'Software Developer Intern',
      company: 'WITS Innovation Labs',
      description: 'Backend intern at WITS. Writing APIs, fixing Prisma migrations, and getting comfortable with Docker in a real team setting.',
      color: '#3B82F6',
      tag: 'Internship'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: { duration: 1.5, ease: 'easeInOut' as const }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="timeline" className="relative border-t-4 border-black bg-[#1C1C1F] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <div className="mb-8 flex flex-col text-left sm:mb-12 md:mb-20 md:items-center md:text-center">
          <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
            <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border animate-pulse" />
            Timeline
          </span>
          <h2 className="text-[2rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            How I got <span className="text-portfolio-secondary">here.</span>
          </h2>
        </div>

        <div className="relative">
          <motion.div
            variants={lineVariants}
            className="pointer-events-none absolute left-2.5 top-0 z-0 h-full w-1 -translate-x-[2px] border-l-4 border-black bg-black sm:left-4 md:left-1/2"
          />

          <div className="space-y-5 sm:space-y-8 md:space-y-16">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col items-start md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div
                    className="absolute left-2.5 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-black bg-portfolio-card sm:left-4 sm:h-6 sm:w-6 md:left-1/2"
                    style={{
                      boxShadow: '2px 2px 0px 0px #000000',
                      top: '10px'
                    }}
                  >
                    <span className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5" style={{ backgroundColor: event.color === '#111111' ? '#3B82F6' : event.color }} />
                  </div>

                  <div className="w-full pl-7 sm:pl-12 md:w-1/2 md:px-8 md:pl-0">
                    <BrutalistCard
                      hoverRotate={isEven ? -1 : 1}
                      shadowColor={event.color}
                      className="bg-portfolio-card text-left text-portfolio-text"
                    >
                      <div className="mb-2.5 flex flex-col items-start gap-1.5 border-b-2 border-dashed border-zinc-200 pb-2 sm:mb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                        <span className="font-mono text-xs font-extrabold text-portfolio-primary sm:text-sm">{event.year}</span>
                        <span className="rounded-sm border border-black bg-[#27272A] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white sm:text-[10px]">
                          {event.tag}
                        </span>
                      </div>
                      <h3 className="text-base font-black leading-tight tracking-tight sm:text-xl">{event.title}</h3>
                      <MobileDisclosure contentClassName="mt-3">
                        <div className="space-y-2.5 sm:space-y-4">
                          <h4 className="text-[11px] font-bold text-stone-600 sm:text-sm">{event.company}</h4>
                          <p className="text-[13px] font-semibold leading-6 text-stone-700 sm:text-sm sm:leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </MobileDisclosure>
                    </BrutalistCard>
                  </div>

                  <div className="hidden w-1/2 md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
