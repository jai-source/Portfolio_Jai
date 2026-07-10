import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const SpotlightEffect: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to animate the spotlight position with low latency
  const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Position the spotlight center at the mouse coordinates
      // We substract 175px because spotlight is 350px wide
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-20 opacity-30 mix-blend-screen hidden md:block"
      style={{
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(96, 165, 250, 0.05) 50%, rgba(0, 0, 0, 0) 70%)',
        left: spotlightX,
        top: spotlightY,
      }}
    />
  );
};
