import React from 'react';
import { motion } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';
import { FiCheckSquare } from 'react-icons/fi';

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
      role: "Software Developer Intern",
      company: "WITS Innovation Labs",
      period: "June 2026 - Present",
      type: "Internship",
      color: "#3B82F6", // Primary Accent
      skills: ["Express", "Prisma", "Docker", "Node.js", "REST APIs", "PostgreSQL", "Database Design", "Authentication", "Unit Testing"],
      points: [
        "Developed backend services using Express, TypeScript, and Prisma with a focus on clean architecture and maintainable code.",
        "Designed relational databases, built secure authentication systems, and integrated APIs for production-ready applications.",
        "Containerized applications with Docker and followed collaborative development workflows using Git and GitHub.",
        "Contributed to building scalable software while continuously learning modern engineering practices."
      ]
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Nishva Preschool & Daycare",
      period: "May - June 2026",
      type: "Freelance",
      color: "#60A5FA", // Secondary Accent
      skills: ["React", "Node.js", "TailwindCSS", "Express", "Vercel", "Client Relations", "SEO Optimization"],
      points: [
        "Built the school's website and a simple admin panel for updating content — from wireframes to Vercel deploy.",
        "Sat down with the owner to figure out what parents actually need on the site (hours, fees, contact form).",
        "Deployed on Vercel with auto-deploy from main. Page load stayed under 2s on mobile.",
        "Fixed accessibility issues — proper alt text, contrast, keyboard-navigable forms."
      ]
    },
    {
      role: "Lead Developer",
      company: "HackerRank MUJ",
      period: "June 2026 - Present",
      type: "Leadership",
      color: "#F5F5F4", // Card background or custom color
      skills: ["Technical Leadership", "Mentorship", "Project Management", "React", "System Design"],
      points: [
        "Lead dev for HackerRank MUJ — we run coding contests and workshops.",
        "Review PRs, pair-debug with juniors, and help plan hackathon problem sets.",
        "Helped spec out a portal for contest registration and leaderboard tracking."
      ]
    },
    {
      role: "Web Dev Head",
      company: "MUJ ACM SIGBED Chapter",
      period: "June 2025 - April 2026",
      type: "Leadership",
      color: "#3B82F6",
      skills: ["HTML5", "CSS3", "JavaScript ES6", "Git", "Core Web Concepts", "Teaching"],
      points: [
        "Led the Web Development vertical, planning and organizing technical workshops and learning initiatives for the chapter.",
        "Designed and conducted a 5-day Web Development Bootcamp for 100+ students, covering HTML, CSS, JavaScript, Git, and modern web development fundamentals.",
        "Mentored students through hands-on project development, helping them build a full-stack Habit Tracker application while introducing backend concepts using Supabase.",
        "Guided participants during coding sessions, debugging challenges, and project reviews, fostering practical problem-solving and development best practices.",
        "Collaborated with the chapter team to organize technical events, create learning resources, and strengthen the developer community within the university."
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
    <section id="experience" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#18181B] border-t-4 border-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border" />
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Where I've <span className="text-portfolio-secondary">worked.</span>
          </h2>
        </div>

        {/* Vertical Stack of Brutalist Overlapping Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Outer decorative brutalist accent bar */}
              <div 
                className="absolute top-0 left-0 w-3 h-full border-y-4 border-l-4 border-black rounded-l-brutal z-20"
                style={{ backgroundColor: exp.color }}
              />

              <BrutalistCard 
                hoverRotate={index % 2 === 0 ? 0.8 : -0.8}
                shadowColor={exp.color === '#F5F5F4' ? '#000000' : exp.color}
                className="pl-8 bg-portfolio-card text-portfolio-text"
              >
                {/* Upper row: Role & Metadata */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b-2 border-dashed border-zinc-300 pb-4">
                  <div className="text-left">
                    <span className="inline-block text-xs font-extrabold tracking-widest uppercase bg-[#27272A] text-white px-2 py-0.5 border border-black rounded-sm mb-1.5 brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-black tracking-tight leading-tight">{exp.role}</h3>
                    <h4 className="text-portfolio-primary font-bold text-lg font-grotesk">{exp.company}</h4>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="font-mono text-sm font-bold bg-[#EAEAEA] border-2 border-black px-3 py-1 rounded-full brutal-shadow" style={{ boxShadow: '2px 2px 0px 0px #000000' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Point Description List */}
                <ul className="space-y-3 mb-6 text-left">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FiCheckSquare className="mt-1 text-portfolio-primary shrink-0 text-lg stroke-[3px]" />
                      <span className="text-sm md:text-base font-semibold text-stone-800 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technical Badges */}
                <div className="flex flex-wrap gap-2 justify-start border-t-2 border-dashed border-zinc-300 pt-4">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-bold font-grotesk border-2 border-black bg-white px-2.5 py-1 rounded-md hover:bg-portfolio-primary hover:text-white transition-colors duration-150 select-none"
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
