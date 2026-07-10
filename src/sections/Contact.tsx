import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '../components/MagneticButton';
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaCheckCircle } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Auto open email client with pre-filled content as a direct backup
      const mailtoLink = `mailto:jairatna54@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0DReply to: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;
      
      // Clear form
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
    <section id="contact" className="relative py-24 px-4 md:px-8 xl:px-16 bg-[#1C1C1F] border-t-4 border-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: CTA & Details */}
          <div className="lg:col-span-6 text-left">
            <span className="text-portfolio-primary font-grotesk font-extrabold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="h-3 w-3 bg-portfolio-primary inline-block brutal-border" />
              GET IN TOUCH
            </span>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6"
            >
              Want to work <br className="hidden md:block" />
              together? <br className="hidden md:block" />
              <span className="text-portfolio-secondary">Email me.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-stone-400 font-semibold mb-8 max-w-md leading-relaxed"
            >
              Looking for backend internships, freelance web work, or just want to talk about a project idea. 
              I reply within a day — usually faster.
            </motion.p>

            {/* Direct Contacts */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 mb-8"
            >
              <a 
                href="mailto:jairatna54@gmail.com" 
                className="flex items-center gap-4 text-white hover:text-portfolio-primary transition-colors duration-150 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border-4 border-black bg-portfolio-card text-portfolio-text rounded-md group-hover:bg-portfolio-primary group-hover:text-white brutal-shadow transition-all duration-150" style={{ boxShadow: '3px 3px 0px 0px #000000' }}>
                  <FaRegEnvelope className="text-xl" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Email Address</div>
                  <div className="font-mono font-bold text-base md:text-lg">jairatna54@gmail.com</div>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/jai-ratna-600522328/" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-4 text-white hover:text-portfolio-primary transition-colors duration-150 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border-4 border-black bg-portfolio-card text-portfolio-text rounded-md group-hover:bg-portfolio-primary group-hover:text-white brutal-shadow transition-all duration-150" style={{ boxShadow: '3px 3px 0px 0px #000000' }}>
                  <FaLinkedinIn className="text-xl" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">LinkedIn Profile</div>
                  <div className="font-mono font-bold text-base md:text-lg">jai-ratna-600522328</div>
                </div>
              </a>
            </motion.div>

            {/* Social Circle */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t border-zinc-800"
            >
              <a 
                href="https://github.com/jai-source" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 flex items-center justify-center border-2 border-black bg-portfolio-card text-portfolio-text rounded-full brutal-shadow hover:bg-portfolio-primary hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: '3px 3px 0px 0px #000000' }}
              >
                <FaGithub className="text-lg" />
              </a>
              <span className="text-xs font-bold text-stone-500 uppercase font-mono">/ JAI-SOURCE</span>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 bg-portfolio-card text-portfolio-text border-4 border-black p-8 rounded-brutal shadow-brutal-xl relative overflow-hidden text-left"
          >
            <AnimatePresence>
              {showSuccess && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-6 text-center"
                >
                  <FaCheckCircle className="text-5xl text-portfolio-primary mb-4" />
                  <h3 className="text-2xl font-black mb-2">Ready to send</h3>
                  <p className="text-sm font-semibold text-stone-600 max-w-sm mb-6 leading-relaxed">
                    Your email client should open with the message pre-filled. If it didn't, send directly to: <span className="font-mono font-bold text-portfolio-primary">jairatna54@gmail.com</span>
                  </p>
                  <button 
                    onClick={() => setShowSuccess(false)}
                    className="px-4 py-2 border-2 border-black bg-[#27272A] text-white font-bold rounded-md hover:bg-portfolio-primary hover:text-white transition-colors duration-150 brutal-shadow"
                    style={{ boxShadow: '2px 2px 0px 0px #000000' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-stone-600 mb-2 font-grotesk">
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
                <label className="block text-xs font-extrabold uppercase tracking-widest text-stone-600 mb-2 font-grotesk">
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
                <label className="block text-xs font-extrabold uppercase tracking-widest text-stone-600 mb-2 font-grotesk">
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
                <MagneticButton 
                  className="w-full bg-[#18181B] text-white border-black hover:bg-portfolio-primary hover:text-white active:translate-y-1"
                >
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
