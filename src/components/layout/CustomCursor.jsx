import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for fluid, physics-based trailing cursor
  const cursorX = useSpring(-100, { damping: 25, stiffness: 300, mass: 0.1 });
  const cursorY = useSpring(-100, { damping: 25, stiffness: 300, mass: 0.1 });
  const dotX = useSpring(-100, { damping: 40, stiffness: 600, mass: 0.05 });
  const dotY = useSpring(-100, { damping: 40, stiffness: 600, mass: 0.05 });

  useEffect(() => {
    // Detect touch
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Hover state on links & buttons
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 border border-emerald-400/40 bg-emerald-400/5 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: isHovered ? 52 : 32,
          height: isHovered ? 52 : 32,
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.8)' : 'rgba(16, 185, 129, 0.4)',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'rgba(16, 185, 129, 0.04)',
          boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250 }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2 bg-emerald-400 shadow-[0_0_10px_#10b981]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          width: isHovered ? 8 : 4,
          height: isHovered ? 8 : 4,
          backgroundColor: isHovered ? '#00f0ff' : '#10b981',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />
    </>
  );
}
