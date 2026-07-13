import React from 'react';
import { motion } from 'framer-motion';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  hoverRotate?: number;
  shadowColor?: string;
  shadowSize?: 'normal' | 'large' | 'small';
  asymmetric?: boolean; // Use asymmetric border radius
  variant?: 'default' | 'accent' | 'minimal';
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = '',
  hoverRotate = 0,
  shadowColor = '#000000',
  shadowSize = 'normal',
  asymmetric = false,
  variant = 'default'
}) => {
  const shadowMap = {
    small: { base: '2px 3px 0px 0px', hover: '4px 5px 0px 0px' },
    normal: { base: '5px 6px 0px 0px', hover: '8px 10px 0px 0px' },
    large: { base: '8px 10px 0px 0px', hover: '12px 14px 0px 0px' }
  };

  const baseShadow = shadowMap[shadowSize].base;
  const hoverShadow = shadowMap[shadowSize].hover;

  const borderRadiusClass = asymmetric ? 'rounded-[12px_24px_8px_20px]' : 'rounded-brutal';
  
  const borderClass = variant === 'minimal' ? 'border-2' : 'border-4';
  const bgClass = variant === 'accent' ? 'bg-portfolio-card' : 'bg-portfolio-card';

  return (
    <motion.div
      className={`
        ${bgClass} text-portfolio-text 
        ${borderClass} border-portfolio-border 
        ${borderRadiusClass} p-4 sm:p-6 
        relative overflow-hidden
        ${className}
      `}
      style={{
        boxShadow: `${baseShadow} ${shadowColor}`,
      }}
      whileHover={{
        y: -6,
        rotate: hoverRotate,
        boxShadow: `${hoverShadow} ${shadowColor}`,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};
