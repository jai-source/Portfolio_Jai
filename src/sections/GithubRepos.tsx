import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';
import { FaGithub, FaStar, FaCircle, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
  fork: boolean;
}

export const GithubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fallback repositories data if GitHub API fails or is rate-limited
  const fallbackRepos: Repository[] = [
    {
      name: "devcollab-api",
      description: "Collaborative project management backend. Express, TypeScript, Prisma, PostgreSQL, Docker, and JWT auth schemas.",
      html_url: "https://github.com/jai-source",
      stargazers_count: 14,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
      fork: false
    },
    {
      name: "percepta",
      description: "Hardware-free accessibility controller converting computer vision face landmarks into operating system mouse actions.",
      html_url: "https://github.com/jai-source",
      stargazers_count: 8,
      language: "Python",
      updated_at: new Date().toISOString(),
      fork: false
    },
    {
      name: "convolingo",
      description: "Low-latency machine translation API and speech-synthesis wrapper using Flask and NLP models.",
      html_url: "https://github.com/jai-source",
      stargazers_count: 5,
      language: "Python",
      updated_at: new Date().toISOString(),
      fork: false
    },
    {
      name: "thynkridge-planner",
      description: "AI-assisted academic scheduler, calendar tracking system, and micro-milestone planner dashboard.",
      html_url: "https://github.com/jai-source",
      stargazers_count: 11,
      language: "TypeScript",
      updated_at: new Date().toISOString(),
      fork: false
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/jai-source/repos?sort=updated&per_page=30');
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repository[] = await res.json();
        
        // Filter out forks and sort by star count or updated
        const filtered = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        if (filtered.length === 0) {
          setRepos(fallbackRepos);
        } else {
          setRepos(filtered);
        }
      } catch (err) {
        console.warn("GitHub API error, using static fallback repos:", err);
        setRepos(fallbackRepos);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getLanguageColor = (lang: string) => {
    switch (lang?.toLowerCase()) {
      case 'typescript': return '#3178C6';
      case 'javascript': return '#F7DF1E';
      case 'python': return '#3776AB';
      case 'java': return '#B07219';
      case 'html': return '#E34C26';
      case 'css': return '#563D7C';
      default: return '#71717A';
    }
  };

  // Generate mock contribution grid data: 53 weeks * 7 days
  const renderContributionGraph = () => {
    const activityLevels = [0, 1, 2, 3, 2, 1, 0, 1, 3, 4, 3, 2, 1, 0, 2, 4, 3, 1, 0, 2];
    const columns = 36; // Number of columns to display on desktop
    
    return (
      <div className="w-full border-4 border-black bg-portfolio-card text-portfolio-text p-6 rounded-brutal shadow-brutal text-left mt-12 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-black">
          <div className="flex items-center gap-3">
            <FaCodeBranch className="text-xl text-portfolio-primary" />
            <h3 className="text-xl font-black font-grotesk tracking-tight">Active Commits & Repository Health</h3>
          </div>
          <span className="text-xs font-bold font-mono bg-[#EAEAEA] border border-black px-2 py-0.5 rounded">
            USER: JAI-SOURCE
          </span>
        </div>

        {/* Dynamic Activity Graph */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[620px] flex flex-col gap-1.5">
            <div className="flex gap-1.5">
              {Array.from({ length: columns }).map((_, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-1.5">
                  {Array.from({ length: 7 }).map((_, rowIdx) => {
                    // Create a deterministic pseudo-random level of activity for visuals
                    const pseudoRandomIdx = (colIdx * 7 + rowIdx) % activityLevels.length;
                    const level = activityLevels[pseudoRandomIdx];
                    
                    let bgClass = 'bg-stone-200 border-stone-300'; // level 0
                    if (level === 1) bgClass = 'bg-[#93C5FD] border-[#60A5FA]';
                    if (level === 2) bgClass = 'bg-[#3B82F6] border-[#2563EB]';
                    if (level === 3) bgClass = 'bg-[#1D4ED8] border-[#1E40AF]';
                    if (level === 4) bgClass = 'bg-[#1E3A8A] border-[#172554]';

                    return (
                      <div 
                        key={rowIdx} 
                        className={`w-3.5 h-3.5 border rounded-sm transition-all duration-150 hover:scale-125 hover:border-black ${bgClass}`}
                        title={`Commits: ${level * 3} on block ${colIdx}, ${rowIdx}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs font-bold text-stone-600 mt-4">
          <span>Jan</span>
          <div className="flex items-center gap-1.5">
            <span>Less</span>
            <div className="w-3 h-3 bg-stone-200 border border-stone-300 rounded-sm" />
            <div className="w-3 h-3 bg-[#93C5FD] border border-[#60A5FA] rounded-sm" />
            <div className="w-3 h-3 bg-[#3B82F6] border border-[#2563EB] rounded-sm" />
            <div className="w-3 h-3 bg-[#1D4ED8] border border-[#1E40AF] rounded-sm" />
            <div className="w-3 h-3 bg-[#1E3A8A] border border-[#172554] rounded-sm" />
            <span>More</span>
          </div>
          <span>Dec</span>
        </div>
      </div>
    );
  };

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
    <section id="github" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#18181B] border-t-4 border-black">
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border" />
            DYNAMIC TELEMETRY
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center flex-wrap gap-3">
            GitHub <span className="text-portfolio-secondary">Open Source.</span>
            {error && (
              <span className="text-[10px] font-mono font-bold bg-[#EF4444] border-2 border-black text-white px-2 py-0.5 rounded-sm brutal-shadow" style={{ boxShadow: '1.5px 1.5px 0px 0px #000000' }}>
                LOCAL_FALLBACK_ACTIVE (RATE_LIMIT)
              </span>
            )}
          </h2>
        </div>

        {/* Loading / Error Indicators */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="h-44 bg-[#27272A] border-4 border-black rounded-brutal animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repos.map((repo, idx) => (
              <motion.div 
                key={repo.name} 
                variants={itemVariants}
                className="h-full"
              >
                <BrutalistCard
                  hoverRotate={idx % 2 === 0 ? 0.8 : -0.8}
                  shadowColor="#3B82F6"
                  className="bg-portfolio-card text-portfolio-text h-full flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-black tracking-tight hover:text-portfolio-primary truncate w-[80%]">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                          <FaGithub className="text-lg shrink-0 text-black" />
                          {repo.name}
                        </a>
                      </h3>
                      <span className="flex items-center gap-1 text-xs font-bold bg-white border-2 border-black px-2 py-0.5 rounded-sm brutal-shadow" style={{ boxShadow: '1.5px 1.5px 0px 0px #000000' }}>
                        <FaStar className="text-amber-500" /> {repo.stargazers_count}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-stone-700 leading-relaxed mb-6 line-clamp-3">
                      {repo.description || "No description provided. Click code link to inspect repository details and commit logs."}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-zinc-200 pt-4 mt-auto">
                    {/* Language Indicator */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600">
                      <FaCircle className="text-[10px]" style={{ color: getLanguageColor(repo.language) }} />
                      {repo.language || "Shell"}
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-stone-500">
                      <span>Updated {formatDate(repo.updated_at)}</span>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-black hover:text-portfolio-primary text-sm"
                        title="Open Repository"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Contribution Graph Row */}
        <motion.div variants={itemVariants}>
          {renderContributionGraph()}
        </motion.div>
      </motion.div>
    </section>
  );
};
