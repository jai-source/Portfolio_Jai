import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  download
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Dampen effect (pull factor: x * 0.35, y * 0.35)
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const hasBg = className.includes('bg-');
  const hasText = className.includes('text-');

  const buttonStyle = `
    inline-flex items-center justify-center 
    px-6 py-3 font-grotesk font-bold text-lg 
    ${hasBg ? '' : 'bg-portfolio-card'} 
    ${hasText ? '' : 'text-portfolio-text'} 
    border-4 border-portfolio-border 
    rounded-brutal brutal-shadow 
    transition-all duration-200 
    hover:brutal-shadow-lg hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-brutal 
    select-none cursor-pointer
    ${className}
  `;

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a href={href} className={buttonStyle} onClick={onClick} download={download} rel="noreferrer" target={href.startsWith('http') ? '_blank' : undefined}>
          {children}
        </a>
      ) : (
        <button className={buttonStyle} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );
};
