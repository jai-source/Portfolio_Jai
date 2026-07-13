import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckSquare } from 'react-icons/fi';
import { BrutalistCard } from '../components/BrutalistCard';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  color: string;
  skills: string[];
  points: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer Intern',
      company: 'WITS Innovation Labs',
      period: 'June 2026 - Present',
      type: 'Internship',
      color: '#3B82F6',
      skills: ['Express', 'Prisma', 'Docker', 'Node.js', 'REST APIs', 'PostgreSQL', 'Database Design', 'Authentication', 'Unit Testing'],
      points: [
        'Developed backend services using Express, TypeScript, and Prisma with a focus on clean architecture and maintainable code.',
        'Designed relational databases, built secure authentication systems, and integrated APIs for production-ready applications.',
        'Containerized applications with Docker and followed collaborative development workflows using Git and GitHub.',
        'Contributed to building scalable software while continuously learning modern engineering practices.'
      ]
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'Nishva Preschool & Daycare',
      period: 'May - June 2026',
      type: 'Freelance',
      color: '#60A5FA',
      skills: ['React', 'Node.js', 'TailwindCSS', 'Express', 'Vercel', 'Client Relations', 'SEO Optimization'],
      points: [
        "Built the school's website and a simple admin panel for updating content, from wireframes to Vercel deploy.",
        'Sat down with the owner to figure out what parents actually need on the site (hours, fees, contact form).',
        'Deployed on Vercel with auto-deploy from main. Page load stayed under 2s on mobile.',
        'Fixed accessibility issues with proper alt text, contrast, and keyboard-navigable forms.'
      ]
    },
    {
      role: 'Lead Developer',
      company: 'HackerRank MUJ',
      period: 'June 2026 - Present',
      type: 'Leadership',
      color: '#F5F5F4',
      skills: ['Technical Leadership', 'Mentorship', 'Project Management', 'React', 'System Design'],
      points: [
        'Lead dev for HackerRank MUJ - we run coding contests and workshops.',
        'Review PRs, pair-debug with juniors, and help plan hackathon problem sets.',
        'Helped spec out a portal for contest registration and leaderboard tracking.'
      ]
    },
    {
      role: 'Web Dev Head',
      company: 'MUJ ACM SIGBED Chapter',
      period: 'June 2025 - April 2026',
      type: 'Leadership',
      color: '#3B82F6',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'Git', 'Core Web Concepts', 'Teaching'],
      points: [
        'Led the Web Development vertical, planning and organizing technical workshops and learning initiatives for the chapter.',
        'Designed and conducted a 5-day Web Development Bootcamp for 100+ students, covering HTML, CSS, JavaScript, Git, and modern web development fundamentals.',
        'Mentored students through hands-on project development, helping them build a full-stack Habit Tracker application while introducing backend concepts using Supabase.',
        'Guided participants during coding sessions, debugging challenges, and project reviews, fostering practical problem-solving and development best practices.',
        'Collaborated with the chapter team to organize technical events, create learning resources, and strengthen the developer community within the university.'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="experience" className="relative border-t-4 border-black bg-[#18181B] px-4 py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <div className="mb-12 flex flex-col text-left md:mb-16">
          <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
            <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
            Work
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Where I've <span className="text-portfolio-secondary">worked.</span>
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div
                className="absolute left-0 top-0 z-20 h-full w-2 rounded-l-brutal border-y-4 border-l-4 border-black sm:w-3"
                style={{ backgroundColor: exp.color }}
              />

              <BrutalistCard
                hoverRotate={index % 2 === 0 ? 0.8 : -0.8}
                shadowColor={exp.color === '#F5F5F4' ? '#000000' : exp.color}
                className="bg-portfolio-card pl-6 text-portfolio-text sm:pl-8"
              >
                <div className="mb-5 flex flex-col justify-between gap-3 border-b-2 border-dashed border-zinc-300 pb-4 md:mb-6 md:flex-row md:items-center">
                  <div className="text-left">
                    <span className="mb-1.5 inline-block rounded-sm border border-black bg-[#27272A] px-2 py-0.5 text-xs font-extrabold uppercase tracking-widest text-white brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-black leading-tight tracking-tight sm:text-2xl">{exp.role}</h3>
                    <h4 className="font-grotesk text-base font-bold text-portfolio-primary sm:text-lg">{exp.company}</h4>
                  </div>

                  <div className="text-left md:text-right">
                    <span className="rounded-full border-2 border-black bg-[#EAEAEA] px-3 py-1 font-mono text-xs font-bold brutal-shadow sm:text-sm" style={{ boxShadow: '2px 2px 0px 0px #000000' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-6 space-y-3 text-left">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckSquare className="mt-1 shrink-0 text-lg text-portfolio-primary stroke-[3px]" />
                      <span className="text-sm font-semibold leading-relaxed text-stone-800 md:text-base">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 border-t-2 border-dashed border-zinc-300 pt-4">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="select-none rounded-md border-2 border-black bg-white px-2.5 py-1 font-grotesk text-xs font-bold transition-colors duration-150 hover:bg-portfolio-primary hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </BrutalistCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
