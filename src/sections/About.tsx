import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiServer, FiTrendingUp } from 'react-icons/fi';
import { BrutalistCard } from '../components/BrutalistCard';

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
    <section id="about" className="relative border-t-4 border-black bg-[#1C1C1F] px-4 py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="mb-12 flex max-w-4xl flex-col text-left md:mb-16">
          <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
            <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
            About
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Software engineer focused on building meaningful products. <br className="hidden md:block" />
            <span className="text-portfolio-secondary">Curious enough to explore. Persistent enough to ship.</span>
          </h2>
        </div>

        <div className="mb-14 grid grid-cols-1 items-start gap-6 md:mb-16 lg:grid-cols-12 lg:gap-8">
          <motion.div variants={itemVariants} className="text-left lg:col-span-6">
            <p className="mb-6 text-base font-medium leading-relaxed text-stone-300 sm:text-lg md:text-xl">
              I'm a Computer Science student at Manipal University Jaipur and a Software Engineering Intern at WITS Innovation Labs. I enjoy building software that combines solid engineering with practical problem-solving. Over the past few years I've built projects involving backend development, full-stack web applications, relational databases, and developer tools while experimenting with computer vision. Whether it's designing REST APIs, building applications that integrate modern AI tools, or building intuitive user experiences, I enjoy understanding how every layer of a system fits together. I believe great software isn't defined by the technology used. It's defined by how reliably it solves real problems. That's the mindset I bring to every project I build.
            </p>
            <p className="text-sm leading-relaxed text-stone-400 sm:text-base md:text-lg">
              I enjoy building software and learning by creating real projects. Most of my recent work has been around backend development with Express, Prisma, and PostgreSQL, while my side projects have given me a chance to explore areas like computer vision. Every project teaches me something new, and that's what keeps me building.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:col-span-6">
            <BrutalistCard hoverRotate={-1.5} shadowColor="#FFC300" className="bg-portfolio-card text-left" shadowSize="normal" asymmetric>
              <div className="mb-4 w-fit rounded-lg border-2 border-black bg-portfolio-primary p-2 text-white">
                <FiServer className="text-2xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Software Engineering</h3>
              <p className="text-sm font-medium leading-relaxed text-stone-700">
                Building maintainable applications with clean architecture, maintainable code, and modern development practices across the full software lifecycle.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#FF6B35" className="bg-portfolio-card text-left md:translate-y-4" shadowSize="small">
              <div className="mb-4 w-fit rounded-lg border-2 border-black bg-portfolio-secondary p-2 text-portfolio-text">
                <FiLayers className="text-2xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Backend Systems</h3>
              <p className="text-sm font-medium leading-relaxed text-stone-700">
                Building secure REST APIs with Express, TypeScript, Prisma, PostgreSQL, authentication systems, Docker, and deployment workflows.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#111111" className="bg-portfolio-card text-left md:-translate-x-3" shadowSize="normal" asymmetric>
              <div className="mb-4 w-fit rounded-lg border-2 border-black bg-white p-2 text-black">
                <FiCpu className="text-2xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold">AI & Computer Vision</h3>
              <p className="text-sm font-medium leading-relaxed text-stone-700">
                Exploring computer vision and AI-powered experiences through personal projects using Python, OpenCV, and MediaPipe. Exploring human-computer interaction through projects like Percepta.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={-1.5} shadowColor="#3B82F6" className="bg-portfolio-card text-left">
              <div className="mb-4 w-fit rounded-lg border-2 border-black bg-portfolio-primary p-2 text-white">
                <FiTrendingUp className="text-2xl" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Frontend & Product</h3>
              <p className="text-sm font-medium leading-relaxed text-stone-700">
                Creating responsive interfaces with React and Tailwind CSS while keeping usability, accessibility, and performance in mind.
              </p>
            </BrutalistCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="rounded-brutal border-4 border-black bg-portfolio-card p-6 text-center font-grotesk text-lg font-bold text-portfolio-text shadow-brutal sm:p-8 sm:text-xl md:text-2xl [text-wrap:balance]"
        >
          "Build with curiosity. Engineer with purpose."
        </motion.div>
      </motion.div>
    </section>
  );
};
