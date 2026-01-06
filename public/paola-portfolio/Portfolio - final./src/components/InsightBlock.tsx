import { motion } from 'motion/react';
import { motionVariants, scrollViewport } from '../lib/motion';

interface InsightBlockProps {
  title: string;
  content?: string;
  index: number;
  minimal?: boolean; // For Pulso case
}

export function InsightBlock({ title, content, index, minimal = false }: InsightBlockProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={scrollViewport}
      variants={{
        initial: { opacity: 0, y: minimal ? 6 : 8 },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: minimal ? 0.3 : 0.24,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }
        }
      }}
      className="bg-[#f5f4f0] rounded p-8 min-h-[130px] flex flex-col justify-center space-y-4"
    >
      {/* Subtle coral accent line */}
      <div className="w-6 h-[1px] bg-[#D4A89C] opacity-40"></div>
      
      <p className="text-[1.25rem] text-[#2a2a2a] leading-relaxed tracking-tight">
        {title}
      </p>
    </motion.div>
  );
}