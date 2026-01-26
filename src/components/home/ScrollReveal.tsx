import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
}

const getInitialPosition = (direction: string) => {
  switch (direction) {
    case "down": return { opacity: 0, y: -30 };
    case "left": return { opacity: 0, x: 30 };
    case "right": return { opacity: 0, x: -30 };
    case "up":
    default: return { opacity: 0, y: 30 };
  }
};

const getAnimatePosition = (direction: string) => {
  switch (direction) {
    case "down": 
    case "up": return { opacity: 1, y: 0 };
    case "left":
    case "right": return { opacity: 1, x: 0 };
    default: return { opacity: 1, y: 0 };
  }
};

export const ScrollReveal = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={getInitialPosition(direction)}
      whileInView={getAnimatePosition(direction)}
      viewport={{ once, margin: "-100px" }}
      transition={{ 
        duration, 
        delay,
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};
