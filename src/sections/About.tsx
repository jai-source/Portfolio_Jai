import React from 'react';
import { motion } from 'framer-motion';
import { BrutalistCard } from '../components/BrutalistCard';
import { FiServer, FiLayers, FiCpu, FiTrendingUp } from 'react-icons/fi';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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
    <section id="about" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#1C1C1F] border-t-4 border-black">
      {/* Dynamic Background Grid Pattern on Sub-section */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border" />
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Software engineer focused on building meaningful products. <br className="hidden md:block"/>
            <span className="text-portfolio-secondary">Curious enough to explore. Persistent enough to ship.</span>
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main philosophy description */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 text-left"
          >
            <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-medium mb-6">
              I'm a Computer Science student at Manipal University Jaipur and a Software Engineering Intern at WITS Innovation Labs. I enjoy building software that combines solid engineering with practical problem-solving.
              Over the past few years I've built projects involving backend development, full-stack web applications, relational databases, and developer tools while experimenting with computer vision. Whether it's designing REST APIs, building applications that integrate modern AI tools, or building intuitive user experiences, I enjoy understanding how every layer of a system fits together.
              I believe great software isn't defined by the technology used—it's defined by how reliably it solves real problems. That's the mindset I bring to every project I build.
            </p>
            <p className="text-base md:text-lg text-stone-400 leading-relaxed">
              I enjoy building software and learning by creating real projects. Most of my recent work has been around backend development with Express, Prisma, and PostgreSQL, while my side projects have given me a chance to explore areas like computer vision. Every project teaches me something new, and that's what keeps me building.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Core Pillars - varied styling */}
            <BrutalistCard hoverRotate={-1.5} shadowColor="#FFC300" className="text-left bg-portfolio-card asymmetric" shadowSize="normal" asymmetric>
              <div className="p-2 border-2 border-black bg-portfolio-primary text-white rounded-lg w-fit mb-4">
                <FiServer className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Software Engineering</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-medium">
                Building maintainable applications with clean architecture, maintainable code, and modern development practices across the full software lifecycle.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#FF6B35" className="text-left bg-portfolio-card offset-right" shadowSize="small" variant="default">
              <div className="p-2 border-2 border-black bg-portfolio-secondary text-portfolio-text rounded-lg w-fit mb-4">
                <FiLayers className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend Systems</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-medium">
                Building secure REST APIs with Express, TypeScript, Prisma, PostgreSQL, authentication systems, Docker, and deployment workflows.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#111111" className="text-left bg-portfolio-card offset-left" shadowSize="normal" asymmetric>
              <div className="p-2 border-2 border-black bg-white text-black rounded-lg w-fit mb-4">
                <FiCpu className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Computer Vision</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-medium">
                Exploring computer vision and AI-powered experiences through personal projects. using Python, OpenCV, and MediaPipe. Exploring human-computer interaction through projects like Percepta.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={-1.5} shadowColor="#3B82F6" className="text-left bg-portfolio-card">
              <div className="p-2 border-2 border-black bg-portfolio-primary text-white rounded-lg w-fit mb-4">
                <FiTrendingUp className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend & Product</h3>
              <p className="text-sm text-stone-700 leading-relaxed font-medium">
                Creating responsive interfaces with React and Tailwind CSS while keeping usability, accessibility, and performance in mind.
              </p>
            </BrutalistCard>
          </motion.div>
        </div>

        {/* Quick quote block */}
        <motion.div 
          variants={itemVariants}
          className="border-4 border-black bg-portfolio-card text-portfolio-text p-8 rounded-brutal shadow-brutal text-center font-grotesk font-bold text-xl md:text-2xl"
        >
          "Build with curiosity. Engineer with purpose."
        </motion.div>
      </motion.div>
    </section>
  );
};
