import { motion } from 'framer-motion';
import type { ReactNode } from 'react';


interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  noOffset?: boolean; // If true, disables offset for CLS-sensitive/above-the-fold content
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '', noOffset = false }: FadeInProps) {
  // Reduce offset for all uses, and allow disabling for above-the-fold content
  const directionOffset = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
  };

  const initial = noOffset
    ? { opacity: 0 }
    : { opacity: 0, ...directionOffset[direction] };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
