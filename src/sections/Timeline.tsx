import React from 'react';
import { motion } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';

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
      year: "2024 - Present",
      title: "University Education",
      company: "Manipal University Jaipur",
      description: "Built a strong foundation in Operating Systems, DBMS, and Object Oriented Programming while beginning to explore software engineering through personal projects.",
      color: "#3B82F6",
      tag: "Academic"
    },
    {
      year: "December 2025",
      title: "Bootcamp Instructor",
      company: "MUJ ACM SIGBED Chapter",
      description: "First time teaching. Ran an 5 day bootcamp on HTML, CSS, and JS. Learned that explaining closures to beginners is harder than writing them.",
      color: "#60A5FA",
      tag: "Teaching"
    },
    {
      year: "June 2026 - Present",
      title: "Lead Developer",
      company: "HackerRank MUJ",
      description: "Took over as lead dev for the campus HackerRank chapter. Running contests, reviewing code, and helping juniors ship their first PRs.",
      color: "#3B82F6",
      tag: "Leadership"
    },
    {
      year: "May - June 2026",
      title: "Freelance Engineer",
      company: "Nishva Preschool & Daycare",
      description: "First paid client work — built a preschool website end-to-end. Learned more about client communication than any course could teach.",
      color: "#60A5FA",
      tag: "Freelance"
    },
    {
      year: "June 2026 - Present",
      title: "Software Developer Intern",
      company: "WITS Innovation Labs",
      description: "Backend intern at WITS. Writing APIs, fixing Prisma migrations, and getting comfortable with Docker in a real team setting.",
      color: "#3B82F6",
      tag: "Internship"
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
      transition: { duration: 1.5, ease: "easeInOut" as const }
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
    <section id="timeline" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#1C1C1F] border-t-4 border-black">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col mb-20 text-left md:text-center md:items-center">
          <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border animate-pulse" />
            Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How I got <span className="text-portfolio-secondary">here.</span>
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical Center Line */}
          <motion.div 
            variants={lineVariants}
            className="absolute left-4 md:left-1/2 top-0 -translate-x-[2px] w-1 bg-black h-full border-l-4 border-black z-0 pointer-events-none"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row relative items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline circular node marker */}
                  <div 
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-20 flex items-center justify-center bg-portfolio-card"
                    style={{
                      boxShadow: '2px 2px 0px 0px #000000',
                      top: '12px'
                    }}
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: event.color === '#111111' ? '#3B82F6' : event.color }} />
                  </div>

                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <BrutalistCard
                      hoverRotate={isEven ? -1 : 1}
                      shadowColor={event.color}
                      className="bg-portfolio-card text-portfolio-text text-left"
                    >
                      <div className="flex items-center justify-between gap-2 mb-3 border-b-2 border-dashed border-zinc-200 pb-2">
                        <span className="font-mono text-sm font-extrabold text-portfolio-primary">{event.year}</span>
                        <span className="text-[10px] font-black uppercase tracking-wider bg-[#27272A] text-white px-2 py-0.5 border border-black rounded-sm">
                          {event.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-black tracking-tight leading-none mb-1">{event.title}</h3>
                      <h4 className="text-sm font-bold text-stone-600 mb-4">{event.company}</h4>
                      <p className="text-sm font-semibold text-stone-700 leading-relaxed">
                        {event.description}
                      </p>
                    </BrutalistCard>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
