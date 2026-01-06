import { motion } from 'motion/react';
import { motionVariants, scrollViewport } from '../lib/motion';

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

export function ValueCard({ title, description, index }: ValueCardProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={scrollViewport}
      variants={{
        initial: { opacity: 0, y: 8 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.24,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }
        }
      }}
      className="space-y-3 md:space-y-4"
    >
      {/* Subtle coral accent line */}
      <div className="w-8 h-[1px] bg-[#D4A89C] opacity-30"></div>
      
      <h3 className="text-[0.938rem] md:text-[1rem] text-[#2a2a2a] tracking-tight">
        {title}
      </h3>
      <p className="text-[0.938rem] md:text-[1rem] text-[#4a4a4a] leading-[1.65] max-w-md">
        {description}
      </p>
    </motion.div>
  );
}