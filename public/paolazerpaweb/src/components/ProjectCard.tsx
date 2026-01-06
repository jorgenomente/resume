import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, TrendingUp, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  bulletPoints: string[];
  impact: string;
  image: string;
  keyDecision: string;
  delay?: number;
}

export function ProjectCard({
  title,
  category,
  description,
  bulletPoints,
  impact,
  image,
  keyDecision,
  delay = 0
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative"
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-[rgba(19,41,61,0.2)] to-[rgba(19,41,61,0.1)] backdrop-blur-md border border-[#f6f1e7]/20 rounded-2xl overflow-hidden h-full"
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <h3 className="font-['Space_Grotesk'] font-medium text-xl md:text-2xl text-[#13293d] leading-tight">
              {title}
            </h3>
            <div className="h-px w-48 md:w-56 bg-gradient-to-r from-transparent via-[#f47dcf]/40 to-transparent" />
            <p className="font-['Space_Grotesk'] text-sm text-[#13293d]/70">
              {category}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative px-6 pb-6">
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Key Decision Overlay */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-[#13293d]/95 backdrop-blur-sm p-6 flex flex-col items-center justify-center"
                >
                  <Lightbulb className="w-8 h-8 text-[#f47dcf] mb-3" />
                  <p className="font-['Space_Mono'] text-xs text-[#f47dcf] uppercase tracking-wider mb-2">
                    Decisión clave
                  </p>
                  <p className="font-['Space_Mono'] text-sm text-[#f6f1e7] text-center leading-relaxed">
                    {keyDecision}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Ver caso button */}
          <motion.div
            className="absolute -bottom-3 right-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff] rounded-full p-3 shadow-lg cursor-pointer">
              <ArrowUpRight className="w-5 h-5 text-[#13293d]" />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-['Space_Mono'] text-[#13293d]">
              Ver caso
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 pt-8 space-y-4">
          <p className="font-['Space_Mono'] text-base text-[#13293d] leading-relaxed">
            {description}
          </p>

          <ul className="space-y-2 font-['Space_Mono'] text-base text-[#13293d]">
            {bulletPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#f47dcf] mt-1.5">•</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Footer */}
        <motion.div
          className="bg-[#f6f1e7] p-4 flex items-center gap-3 border-t border-[#f47dcf]/20"
          whileHover={{ backgroundColor: '#fff' }}
          transition={{ duration: 0.2 }}
        >
          <TrendingUp className="w-5 h-5 text-[#f47dcf]" />
          <p className="font-['Space_Mono'] text-xs text-[#13293d] leading-tight">
            {impact}
          </p>
        </motion.div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-[#f47dcf]/0 group-hover:border-[#f47dcf]/30 rounded-2xl pointer-events-none transition-all duration-300" />
      </motion.div>
    </motion.div>
  );
}