import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { BrutalistCard } from '../components/BrutalistCard';

interface Project {
  id: string;
  title: string;
  category: 'systems' | 'ai' | 'fullstack';
  tags: string[];
  description: string;
  github?: string;
  live?: string;
  accent: string;
  mockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'ai' | 'fullstack'>('all');

  const projects: Project[] = [
    {
      id: 'devcollab',
      title: 'DevCollab API',
      category: 'systems',
      tags: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'PostgreSQL', 'Docker', 'JWT', 'REST APIs'],
      description: 'Collaborative project management API - workspaces, projects, tasks, comments, and role-based permissions. Built to learn how real multi-tenant backends handle auth and data isolation.',
      github: 'https://github.com/jai-source/devcollab-api',
      accent: '#3B82F6',
      mockup: (
        <div className="relative h-40 w-full overflow-hidden rounded-lg border-4 border-black bg-[#121214] p-3 font-mono text-[9px] text-stone-400 sm:h-44 sm:text-[10px]">
          <div className="mb-2 flex items-center gap-1.5 border-b border-zinc-800 pb-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="ml-1 text-[8px] text-stone-500">REST CLIENT - sync.http</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="font-bold text-green-400">POST</span>
              <span className="text-white">/api/v1/workspaces/proj_92a/tasks</span>
            </div>
            <div>
              <span className="text-stone-500">Headers:</span> <span className="text-portfolio-secondary">Authorization: Bearer jwt_tkn...</span>
            </div>
            <div className="text-[9px] text-[#C084FC]">
              {`{ "title": "Implement Prisma Sync", "priority": "CRITICAL" }`}
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800 pt-1.5 text-[9px] text-green-500">
              <span>HTTP/1.1 201 Created</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'percepta',
      title: 'Percepta (In progress)',
      category: 'ai',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Accessibility'],
      description: 'Accessibility tool: control your cursor with head movement and click by raising an eyebrow. Uses MediaPipe face landmarks - runs on a regular webcam, no extra hardware.',
      github: 'https://github.com/jai-source/percepta',
      accent: '#60A5FA',
      mockup: (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg border-4 border-black bg-[#121214] sm:h-44">
          <svg className="h-24 w-24 fill-none stroke-[#60A5FA] stroke-[1.5px]" viewBox="0 0 100 100">
            <path d="M 50,20 C 30,20 20,35 20,55 C 20,75 35,90 50,90 C 65,90 80,75 80,55 C 80,35 70,20 50,20 Z" className="opacity-40" />
            <path d="M 33,38 Q 40,34 47,38" className="stroke-2 stroke-green-400" />
            <path d="M 53,38 Q 60,34 67,38" className="stroke-2 stroke-green-400" />
            <circle cx="40" cy="45" r="3" className="fill-green-400 stroke-none" />
            <circle cx="60" cy="45" r="3" className="fill-green-400 stroke-none" />
            <path d="M 50,45 L 50,65 L 46,65" className="opacity-50" />
            <path d="M 38,75 Q 50,70 62,75" className="opacity-50" />
            <line x1="50" y1="10" x2="50" y2="95" className="stroke-[1px] stroke-dasharray-[2] stroke-zinc-800" />
            <line x1="5" y1="55" x2="95" y2="55" className="stroke-[1px] stroke-dasharray-[2] stroke-zinc-800" />
          </svg>
          <div className="absolute left-2 top-2 rounded border border-black bg-[#27272A] px-1.5 py-0.5 font-mono text-[8px] text-green-400 brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
            tracking: on
          </div>
          <div className="absolute bottom-2 right-2 rounded border border-black bg-[#27272A] px-1.5 py-0.5 font-mono text-[8px] text-white brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
            click: eyebrow up
          </div>
        </div>
      )
    },
    {
      id: 'convolingo',
      title: 'Convolingo',
      category: 'ai',
      tags: ['Flask', 'Python', 'Speech Synthesis', 'NLP', 'APIs'],
      description: 'Real-time translation with speech output - speak in English, hear it in Hindi (and vice versa). Flask backend wrapping translation and TTS APIs.',
      github: 'https://github.com/jai-source/convolingo',
      accent: '#3B82F6',
      mockup: (
        <div className="flex h-40 w-full flex-col justify-between overflow-hidden rounded-lg border-4 border-black bg-[#121214] p-3 font-mono text-[8px] sm:h-44 sm:text-[9px]">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span className="font-bold uppercase text-[#3B82F6]">English - Hindi</span>
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <div className="my-auto space-y-2">
            <div className="rounded border border-zinc-800 bg-[#1C1C1F] p-1.5">
              <span className="text-zinc-500">ENG:</span> <span className="text-white">"Can we push this to prod tonight?"</span>
            </div>
            <div className="rounded border border-black bg-[#27272A] p-1.5">
              <span className="text-portfolio-secondary">HIN:</span> <span className="text-white">"Kya hum ise aaj raat prod me dal sakte hain?"</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[8px] text-[#71717A]">
            <span className="rounded bg-portfolio-primary/20 px-1 text-portfolio-primary">speaking</span>
          </div>
        </div>
      )
    },
    {
      id: 'thynkridge',
      title: 'ThynkRidge (In progress)',
      category: 'fullstack',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'AI Agent', 'LocalStorage'],
      description: 'Semester planner that breaks your syllabus into weekly tasks. React frontend, stores progress locally. Built because I kept missing assignment deadlines.',
      github: 'https://github.com/jai-source/thynkridge',
      accent: '#60A5FA',
      mockup: (
        <div className="flex h-40 w-full flex-col justify-between overflow-hidden rounded-lg border-4 border-black bg-[#121214] p-3 sm:h-44">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 font-mono text-[9px] text-zinc-500">
            <span>semester planner</span>
            <span className="text-green-400">week 6 of 14</span>
          </div>
          <div className="my-2 space-y-1.5">
            <div className="flex items-center justify-between rounded border border-black bg-white px-2 py-1 text-[10px] text-black">
              <span className="font-bold">OS assignment</span>
              <span className="rounded bg-portfolio-primary px-1 py-0.5 font-mono text-[8px] text-white">due fri</span>
            </div>
            <div className="flex items-center justify-between rounded border border-zinc-800 bg-[#1C1C1F] px-2 py-1 text-[10px] text-stone-300">
              <span>DBMS lab report</span>
              <span className="rounded bg-zinc-800 px-1 py-0.5 font-mono text-[8px] text-stone-500">next week</span>
            </div>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full border border-black bg-zinc-800">
            <div className="h-full w-[43%] bg-portfolio-primary" />
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative border-t-4 border-black bg-[#1C1C1F] px-4 py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 text-left md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
              <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
              Portfolio
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Things I've <span className="text-portfolio-secondary">built.</span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:flex-wrap">
            {(['all', 'systems', 'fullstack', 'ai'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  flex cursor-pointer justify-center rounded-md border-2 border-black px-4 py-2 font-grotesk text-xs font-bold uppercase tracking-wider transition-all duration-150 select-none
                  hover:-translate-y-0.5 active:translate-y-0
                  ${activeFilter === filter
                    ? 'bg-portfolio-primary text-white brutal-shadow'
                    : 'bg-portfolio-card text-portfolio-text hover:bg-portfolio-primary hover:text-white brutal-shadow'
                  }
                `}
                style={{ boxShadow: activeFilter === filter ? '3px 3px 0px 0px #000000' : '2px 2px 0px 0px #000000' }}
              >
                {filter === 'all' ? 'All' : filter === 'systems' ? 'Backend' : filter === 'fullstack' ? 'Full Stack' : 'CV / ML'}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="h-full"
              >
                <BrutalistCard
                  hoverRotate={project.id === 'devcollab' || project.id === 'convolingo' ? -0.8 : 0.8}
                  shadowColor={project.accent}
                  shadowSize="large"
                  className="flex h-full flex-col justify-between bg-portfolio-card text-left text-portfolio-text"
                >
                  <div>
                    <div className="mb-6">
                      {project.mockup}
                    </div>

                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-2xl font-black tracking-tight">{project.title}</h3>
                      <span className="w-fit rounded-sm border border-black bg-white px-2 py-0.5 font-grotesk text-[10px] font-extrabold uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <p className="mb-6 text-sm font-semibold leading-relaxed text-stone-700 sm:text-[15px]">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-black bg-[#EAEAEA] px-2 py-0.5 font-mono text-[10px] font-bold text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-4 border-t-2 border-black pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase text-stone-500">
                        <FaCode className="text-base" /> {project.category === 'systems' ? 'Backend' : project.category === 'ai' ? 'NLP' : 'Full stack'}
                      </div>
                      <div className="flex w-full flex-wrap gap-3 sm:w-auto">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-1.5 rounded border-2 border-black bg-[#27272A] px-3 py-1.5 text-xs font-extrabold uppercase tracking-tight text-white transition-colors duration-150 hover:bg-portfolio-primary hover:text-white sm:flex-none brutal-shadow"
                            style={{ boxShadow: '2px 2px 0px 0px #000000' }}
                          >
                            <FaGithub className="text-sm" /> Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-1 items-center justify-center gap-1.5 rounded border-2 border-black bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-tight text-black transition-colors duration-150 hover:bg-portfolio-primary hover:text-white sm:flex-none brutal-shadow"
                            style={{ boxShadow: '2px 2px 0px 0px #000000' }}
                          >
                            <FaExternalLinkAlt className="text-xs" /> Launch
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
