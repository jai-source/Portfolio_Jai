import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

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
      description: 'Collaborative project management API — workspaces, projects, tasks, comments, and role-based permissions. Built to learn how real multi-tenant backends handle auth and data isolation.',
      github: 'https://github.com/jai-source/devcollab-api',
      accent: '#3B82F6',
      mockup: (
        <div className="w-full h-44 bg-[#121214] border-4 border-black rounded-lg overflow-hidden font-mono text-[10px] p-3 text-stone-400 relative">
          <div className="flex items-center gap-1.5 mb-2 border-b border-zinc-800 pb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-stone-500 text-[8px] ml-1">REST CLIENT — sync.http</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-2">
              <span className="text-green-400 font-bold">POST</span>
              <span className="text-white">/api/v1/workspaces/proj_92a/tasks</span>
            </div>
            <div>
              <span className="text-stone-500">Headers:</span> <span className="text-portfolio-secondary">Authorization: Bearer jwt_tkn...</span>
            </div>
            <div className="text-[9px] text-[#C084FC]">
              {`{ "title": "Implement Prisma Sync", "priority": "CRITICAL" }`}
            </div>
            <div className="text-green-500 border-t border-zinc-800 pt-1.5 flex justify-between items-center text-[9px]">
              <span>HTTP/1.1 201 Created</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'percepta',
      title: 'Percepta',
      category: 'ai',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Accessibility'],
      description: 'Accessibility tool: control your cursor with head movement and click by raising an eyebrow. Uses MediaPipe face landmarks — runs on a regular webcam, no extra hardware.',
      github: 'https://github.com/jai-source/percepta',
      accent: '#60A5FA',
      mockup: (
        <div className="w-full h-44 bg-[#121214] border-4 border-black rounded-lg overflow-hidden relative flex items-center justify-center">
          {/* Facial mesh simulation */}
          <svg className="w-24 h-24 stroke-[#60A5FA] fill-none stroke-[1.5px]" viewBox="0 0 100 100">
            {/* Face oval */}
            <path d="M 50,20 C 30,20 20,35 20,55 C 20,75 35,90 50,90 C 65,90 80,75 80,55 C 80,35 70,20 50,20 Z" className="opacity-40" />
            {/* Eyebrows */}
            <path d="M 33,38 Q 40,34 47,38" className="stroke-green-400 stroke-2" />
            <path d="M 53,38 Q 60,34 67,38" className="stroke-green-400 stroke-2" />
            {/* Eyes */}
            <circle cx="40" cy="45" r="3" className="fill-green-400 stroke-none" />
            <circle cx="60" cy="45" r="3" className="fill-green-400 stroke-none" />
            {/* Nose */}
            <path d="M 50,45 L 50,65 L 46,65" className="opacity-50" />
            {/* Mouth */}
            <path d="M 38,75 Q 50,70 62,75" className="opacity-50" />
            {/* Vector crosshairs */}
            <line x1="50" y1="10" x2="50" y2="95" className="stroke-zinc-800 stroke-[1px] stroke-dasharray-[2]" />
            <line x1="5" y1="55" x2="95" y2="55" className="stroke-zinc-800 stroke-[1px] stroke-dasharray-[2]" />
          </svg>
          <div className="absolute top-2 left-2 bg-[#27272A] border border-black px-1.5 py-0.5 rounded text-[8px] font-mono text-green-400 brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
            tracking: on
          </div>
          <div className="absolute bottom-2 right-2 bg-[#27272A] border border-black px-1.5 py-0.5 rounded text-[8px] font-mono text-white brutal-shadow" style={{ boxShadow: '1px 1px 0px 0px #000000' }}>
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
      description: 'Real-time translation with speech output — speak in English, hear it in Hindi (and vice versa). Flask backend wrapping translation and TTS APIs.',
      github: 'https://github.com/jai-source/convolingo',
      accent: '#3B82F6',
      mockup: (
        <div className="w-full h-44 bg-[#121214] border-4 border-black rounded-lg overflow-hidden p-3 font-mono text-[9px] flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
            <span className="text-[#3B82F6] font-bold uppercase">English ➔ Hindi</span>
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <div className="space-y-2 my-auto">
            <div className="bg-[#1C1C1F] p-1.5 border border-zinc-800 rounded">
              <span className="text-zinc-500">ENG:</span> <span className="text-white">"Can we push this to prod tonight?"</span>
            </div>
            <div className="bg-[#27272A] p-1.5 border border-black rounded">
              <span className="text-portfolio-secondary">HIN:</span> <span className="text-white">"क्या हम इसे आज रात प्रोड में डाल सकते हैं?"</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-[#71717A] text-[8px]">
            <span className="bg-portfolio-primary/20 text-portfolio-primary px-1 rounded">speaking</span>
          </div>
        </div>
      )
    },
    {
      id: 'thynkridge',
      title: 'ThynkRidge',
      category: 'fullstack',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'AI Agent', 'LocalStorage'],
      description: 'Semester planner that breaks your syllabus into weekly tasks. React frontend, stores progress locally. Built because I kept missing assignment deadlines.',
      github: 'https://github.com/jai-source/thynkridge',
      accent: '#60A5FA',
      mockup: (
        <div className="w-full h-44 bg-[#121214] border-4 border-black rounded-lg overflow-hidden p-3 flex flex-col justify-between">
          {/* Small Planner Dashboard Mockup */}
          <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5 text-[9px] font-mono text-zinc-500">
            <span>semester planner</span>
            <span className="text-green-400">week 6 of 14</span>
          </div>
          <div className="space-y-1.5 my-2">
            <div className="flex justify-between items-center text-[10px] bg-white border border-black text-black px-2 py-1 rounded">
              <span className="font-bold">OS assignment</span>
              <span className="text-[8px] bg-portfolio-primary text-white px-1 py-0.5 rounded font-mono">due fri</span>
            </div>
            <div className="flex justify-between items-center text-[10px] bg-[#1C1C1F] border border-zinc-800 text-stone-300 px-2 py-1 rounded">
              <span>DBMS lab report</span>
              <span className="text-[8px] bg-zinc-800 text-stone-500 px-1 py-0.5 rounded font-mono">next week</span>
            </div>
          </div>
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden border border-black">
            <div className="bg-portfolio-primary h-full w-[43%]" />
          </div>
        </div>
      )
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#1C1C1F] border-t-4 border-black">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left gap-6">
          <div>
            <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border" />
              PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Things I've <span className="text-portfolio-secondary">built.</span>
            </h2>
          </div>

          {/* Filtering Chips */}
          <div className="flex flex-wrap gap-2.5">
            {(['all', 'systems', 'fullstack', 'ai'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 font-grotesk font-bold text-xs uppercase tracking-wider
                  border-2 border-black rounded-md transition-all duration-150
                  hover:-translate-y-0.5 active:translate-y-0 select-none cursor-pointer
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

        {/* Project Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
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
                  className="bg-portfolio-card text-portfolio-text flex flex-col justify-between h-full text-left"
                >
                  <div>
                    {/* Visual Mockup Container */}
                    <div className="mb-6">
                      {project.mockup}
                    </div>

                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-2xl font-black tracking-tight">{project.title}</h3>
                      <span className="text-[10px] font-extrabold uppercase font-grotesk tracking-widest border border-black bg-white px-2 py-0.5 rounded-sm">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-stone-700 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] font-bold font-mono bg-[#EAEAEA] border border-black text-black px-2 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between border-t-2 border-black pt-4 mt-auto">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase text-stone-500">
                        <FaCode className="text-base" /> {project.category === 'systems' ? 'Backend' : project.category === 'ai' ? 'NLP' : 'Full stack'}
                      </div>
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-extrabold tracking-tight uppercase border-2 border-black bg-[#27272A] text-white px-3 py-1.5 rounded hover:bg-portfolio-primary hover:text-white transition-colors duration-150 brutal-shadow"
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
                            className="flex items-center gap-1.5 text-xs font-extrabold tracking-tight uppercase border-2 border-black bg-white text-black px-3 py-1.5 rounded hover:bg-portfolio-primary hover:text-white transition-colors duration-150 brutal-shadow"
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
