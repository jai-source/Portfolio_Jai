import React from 'react';
import { DiJava } from 'react-icons/di';
import { GoTerminal } from 'react-icons/go';
import { motion } from 'framer-motion';
import {
  SiDocker,
  SiExpress,
  SiGithub,
  SiGit,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from 'react-icons/si';
import { TbLayersLinked, TbNetwork } from 'react-icons/tb';
import { VscDatabase } from 'react-icons/vsc';
import { BrutalistCard } from '../components/BrutalistCard';

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      color: '#3B82F6',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="bg-black text-[#F7DF1E]" /> },
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'Java', icon: <DiJava className="text-lg text-[#007396]" /> },
        { name: 'SQL', icon: <VscDatabase className="text-stone-700" /> },
        { name: 'C', icon: <GoTerminal className="text-stone-700" /> }
      ]
    },
    {
      title: 'Backend',
      color: '#60A5FA',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-black" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'REST APIs', icon: <TbNetwork className="text-[#2563EB]" /> },
        { name: 'Prisma ORM', icon: <SiPrisma className="text-black" /> },
        { name: 'Authentication (JWT)', icon: <SiJsonwebtokens className="text-pink-500" /> },
        { name: 'Zod', icon: <GoTerminal className="text-[#3E67B1]" /> }
      ]
    },
    {
      title: 'Frontend & UI',
      color: '#3B82F6',
      skills: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'HTML5', icon: <GoTerminal className="text-orange-500" /> },
        { name: 'CSS3', icon: <GoTerminal className="text-blue-500" /> }
      ]
    },
    {
      title: 'Core CS & Systems',
      color: '#111111',
      skills: [
        { name: 'System Design', icon: <TbLayersLinked className="text-stone-700" /> },
        { name: 'OOP', icon: <GoTerminal className="text-stone-700" /> },
        { name: 'DBMS', icon: <VscDatabase className="text-stone-700" /> },
        { name: 'Operating Systems', icon: <GoTerminal className="text-stone-700" /> },
      ]
    },
    {
      title: 'Databases',
      color: '#22C55E',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> }
      ]
    },
    {
      title: 'DevOps & Tools',
      color: '#F59E0B',
      skills: [
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
        { name: 'Git', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="text-black" /> },
        { name: 'Vercel', icon: <SiVercel className="text-black" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative overflow-hidden border-t-4 border-black bg-[#141418] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.02)_0%,_rgba(0,0,0,0.12)_100%)]" />
      <div className="pointer-events-none absolute -top-24 left-[-6rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.06] mix-blend-screen" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="mb-8 flex flex-col text-left sm:mb-12 md:mb-16">
          <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
            <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
            Skills
          </span>
          <h2 className="text-[2rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Tools I <span className="text-portfolio-secondary">use.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2 md:grid-cols-2 md:gap-8 lg:grid-cols-6">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full lg:col-span-2">
              <BrutalistCard
                hoverRotate={idx % 2 === 0 ? 0.6 : -0.6}
                shadowColor={category.color === '#111111' ? '#000000' : category.color}
                className="flex h-full flex-col justify-start bg-portfolio-card text-left text-portfolio-text"
              >
                <h3 className="mb-4 flex items-center justify-between border-b-4 border-black pb-2 font-grotesk text-lg font-black tracking-tight sm:mb-6 sm:text-xl">
                  {category.title}
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex select-none items-center gap-1.5 rounded-md border-2 border-black bg-white px-2.5 py-1 text-[11px] font-extrabold transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#3B82F6] hover:text-white sm:px-3 sm:py-1.5 sm:text-xs brutal-shadow"
                      style={{ boxShadow: '2px 2px 0px 0px #000000' }}
                    >
                      {skill.icon && <span className="shrink-0 text-[13px] sm:text-sm">{skill.icon}</span>}
                      {skill.name}
                    </div>
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
