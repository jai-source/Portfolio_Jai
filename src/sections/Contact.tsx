import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle, FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MagneticButton } from '../components/MagneticButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      const mailtoLink = `mailto:jairatna54@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0DReply to: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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

  const inputStyle = `
    w-full px-4 py-3 bg-white text-black font-semibold
    border-4 border-black rounded-lg outline-none
    transition-all duration-200
    focus:border-portfolio-primary focus:ring-0
    placeholder:text-stone-400
  `;

  return (
    <section id="contact" className="relative border-t-4 border-black bg-[#1C1C1F] px-4 py-20 md:px-8 md:py-24 xl:px-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 mx-auto w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="text-left lg:col-span-6">
            <span className="mb-2 flex items-center gap-2 font-grotesk text-sm font-extrabold uppercase tracking-widest text-portfolio-primary">
              <span className="inline-block h-3 w-3 bg-portfolio-primary brutal-border" />
              Get in touch
            </span>
            <motion.h2
              variants={itemVariants}
              className="mb-6 text-[2.8rem] font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Want to work <br className="hidden md:block" />
              together? <br className="hidden md:block" />
              <span className="text-portfolio-secondary">Email me.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-md text-base font-semibold leading-relaxed text-stone-400 sm:text-lg"
            >
              Looking for backend internships, freelance web work, or just want to talk about a project idea.
              I reply within a day, usually faster.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8 space-y-4">
              <a
                href="mailto:jairatna54@gmail.com"
                className="group flex items-start gap-4 text-white transition-colors duration-150 hover:text-portfolio-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border-4 border-black bg-portfolio-card text-portfolio-text brutal-shadow transition-all duration-150 group-hover:bg-portfolio-primary group-hover:text-white" style={{ boxShadow: '3px 3px 0px 0px #000000' }}>
                  <FaRegEnvelope className="text-xl" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Email Address</div>
                  <div className="break-all font-mono text-sm font-bold sm:text-base md:text-lg">jairatna54@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jai-ratna-600522328/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 text-white transition-colors duration-150 hover:text-portfolio-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border-4 border-black bg-portfolio-card text-portfolio-text brutal-shadow transition-all duration-150 group-hover:bg-portfolio-primary group-hover:text-white" style={{ boxShadow: '3px 3px 0px 0px #000000' }}>
                  <FaLinkedinIn className="text-xl" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-stone-500">LinkedIn Profile</div>
                  <div className="break-all font-mono text-sm font-bold sm:text-base md:text-lg">jai-ratna-600522328</div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 border-t border-zinc-800 pt-4">
              <a
                href="https://github.com/jai-source"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-portfolio-card text-portfolio-text brutal-shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-portfolio-primary hover:text-white"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaGithub className="text-lg" />
              </a>
              <span className="font-mono text-xs font-bold uppercase text-stone-500">/ JAI-SOURCE</span>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-brutal border-4 border-black bg-portfolio-card p-5 text-left text-portfolio-text shadow-brutal-xl sm:p-8 lg:col-span-6"
          >
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white p-5 text-center sm:p-6"
                >
                  <FaCheckCircle className="mb-4 text-5xl text-portfolio-primary" />
                  <h3 className="mb-2 text-2xl font-black">Ready to send</h3>
                  <p className="mb-6 max-w-sm text-sm font-semibold leading-relaxed text-stone-600">
                    Your email client should open with the message pre-filled. If it didn't, send directly to: <span className="break-all font-mono font-bold text-portfolio-primary">jairatna54@gmail.com</span>
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="rounded-md border-2 border-black bg-[#27272A] px-4 py-2 font-bold text-white transition-colors duration-150 hover:bg-portfolio-primary hover:text-white brutal-shadow"
                    style={{ boxShadow: '2px 2px 0px 0px #000000' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block font-grotesk text-xs font-extrabold uppercase tracking-widest text-stone-600">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block font-grotesk text-xs font-extrabold uppercase tracking-widest text-stone-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block font-grotesk text-xs font-extrabold uppercase tracking-widest text-stone-600">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className={inputStyle}
                />
              </div>

              <div className="pt-2">
                <MagneticButton className="w-full bg-[#18181B] text-white border-black hover:bg-portfolio-primary hover:text-white active:translate-y-1">
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
