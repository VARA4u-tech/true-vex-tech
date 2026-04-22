"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  useEffect(() => {
    const updateVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", updateVisibility);
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x * 0.4, y: y * 0.4 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          style={{ opacity, scale, x: mousePosition.x, y: mousePosition.y }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileTap={{ scale: 0.9 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Main Button Circle */}
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-slate-950/40 backdrop-blur-xl border-2 border-white/40 shadow-[0_0_20px_rgba(13,126,146,0.2)] overflow-hidden">
            {/* Liquid Background Effect */}
            <motion.div
              animate={{
                y: isHovered ? ["0%", "-50%", "0%"] : "100%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none"
            />

            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/5"
              />
              <motion.circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="0 1"
                style={{ pathLength }}
                className="text-cyan-500 shadow-[0_0_10px_#0D7E92]"
              />
            </svg>

            {/* Icon */}
            <motion.div
              animate={{
                y: isHovered ? [0, -4, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 text-cyan-400 group-hover:text-white transition-colors duration-300"
            >
              <ArrowUp size={24} strokeWidth={2.5} />
            </motion.div>
          </div>

          {/* Hover Glow */}
          <motion.div
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.6 : 0,
            }}
            className="absolute -inset-2 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
