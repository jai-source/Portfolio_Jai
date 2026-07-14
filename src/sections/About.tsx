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
    <section id="about" className="relative border-t-4 border-black bg-[#1C1C1F] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="mb-8 flex max-w-4xl flex-col text-left sm:mb-12 md:mb-16">
          <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
            <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
            About
          </span>
          <h2 className="text-[2rem] font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Still learning. <br className="hidden md:block" />
            <span className="text-portfolio-secondary">Still building.</span>
          </h2>
        </div>

        <div className="mb-10 grid grid-cols-1 items-start gap-4 sm:mb-14 sm:gap-6 md:mb-16 lg:grid-cols-12 lg:gap-8">
          <motion.div variants={itemVariants} className="space-y-4 text-left lg:col-span-6">
            <p className="text-[15px] font-medium leading-7 text-stone-300 sm:text-lg md:text-xl">
              I'm a Computer Science student at Manipal University Jaipur and currently a Software Engineering Intern at WITS Innovation Labs.
              Over the past few years, I've spent most of my time outside the classroom building projects, trying new technologies, and learning how different parts of software fit together.
            </p>
            <p className="text-[15px] font-medium leading-7 text-stone-300 sm:text-lg md:text-xl">
              Most of my recent work has been around backend development with Node.js, Express, Prisma, and PostgreSQL, while other projects have given me the chance to explore areas like computer vision and AI integrations. I'm still exploring what I enjoy the most, and every project teaches me something different.
            </p>
            <p className="text-[15px] font-medium leading-7 text-stone-300 sm:text-lg md:text-xl">
              The part I enjoy most is turning an idea into something people can actually use. Every project pushes me to learn something new, whether that's a technology I haven't used before or a problem I haven't solved yet.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-6 lg:col-span-6">
            <BrutalistCard hoverRotate={-1.5} shadowColor="#FFC300" className="bg-portfolio-card text-left" shadowSize="normal" asymmetric>
              <div className="mb-3 w-fit rounded-lg border-2 border-black bg-portfolio-primary p-2 text-white">
                <FiServer className="text-xl sm:text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Software Engineering</h3>
              <p className="text-[13px] font-medium leading-6 text-stone-700 sm:text-sm sm:leading-relaxed">
                Building maintainable applications with clean architecture, maintainable code, and modern development practices across the full software lifecycle.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#FF6B35" className="bg-portfolio-card text-left md:translate-y-4" shadowSize="small">
              <div className="mb-3 w-fit rounded-lg border-2 border-black bg-portfolio-secondary p-2 text-portfolio-text">
                <FiLayers className="text-xl sm:text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Backend Systems</h3>
              <p className="text-[13px] font-medium leading-6 text-stone-700 sm:text-sm sm:leading-relaxed">
                Building secure REST APIs with Express, TypeScript, Prisma, PostgreSQL, authentication systems, Docker, and deployment workflows.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={1.5} shadowColor="#111111" className="bg-portfolio-card text-left md:-translate-x-3" shadowSize="normal" asymmetric>
              <div className="mb-3 w-fit rounded-lg border-2 border-black bg-white p-2 text-black">
                <FiCpu className="text-xl sm:text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:text-xl">AI & Computer Vision</h3>
              <p className="text-[13px] font-medium leading-6 text-stone-700 sm:text-sm sm:leading-relaxed">
                Exploring computer vision and AI-powered experiences through personal projects using Python, OpenCV, and MediaPipe. Exploring human-computer interaction through projects like Percepta.
              </p>
            </BrutalistCard>

            <BrutalistCard hoverRotate={-1.5} shadowColor="#3B82F6" className="bg-portfolio-card text-left">
              <div className="mb-3 w-fit rounded-lg border-2 border-black bg-portfolio-primary p-2 text-white">
                <FiTrendingUp className="text-xl sm:text-2xl" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:text-xl">Frontend & Product</h3>
              <p className="text-[13px] font-medium leading-6 text-stone-700 sm:text-sm sm:leading-relaxed">
                Creating responsive interfaces with React and Tailwind CSS while keeping usability, accessibility, and performance in mind.
              </p>
            </BrutalistCard>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="rounded-brutal border-4 border-black bg-portfolio-card p-5 text-center font-grotesk text-base font-bold text-portfolio-text shadow-brutal sm:p-8 sm:text-xl md:text-2xl [text-wrap:balance]"
        >
          "Turns out debugging teaches more than tutorials ever could."
        </motion.div>
      </motion.div>
    </section>
  );
};
