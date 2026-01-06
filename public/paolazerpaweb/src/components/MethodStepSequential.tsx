import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface MethodStepSequentialProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isActive: boolean;
}

export function MethodStepSequential({ 
  title, 
  description, 
  icon: Icon, 
  index,
  isActive 
}: MethodStepSequentialProps) {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1 : 0.98
      }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Connecting line */}
      {index < 3 && (
        <motion.div 
          className="absolute left-4 top-16 bottom-0 w-0.5"
          initial={{ backgroundColor: 'rgba(244, 125, 207, 0.2)' }}
          animate={{ 
            backgroundColor: isActive ? 'rgba(244, 125, 207, 0.6)' : 'rgba(244, 125, 207, 0.2)'
          }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className="flex gap-4 relative z-10">
        {/* Icon badge */}
        <motion.div
          animate={{ 
            scale: isActive ? 1.1 : 1,
            boxShadow: isActive 
              ? '0 4px 12px rgba(244, 125, 207, 0.4)' 
              : '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          transition={{ duration: 0.4 }}
          className="flex-shrink-0"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-400 ${
            isActive 
              ? 'bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff]' 
              : 'bg-[#f6f1e7]'
          }`}>
            <Icon 
              className={`w-6 h-6 transition-colors duration-400 ${
                isActive ? 'text-[#13293d]' : 'text-[#f47dcf]'
              }`} 
              strokeWidth={1.5} 
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-8">
          {/* Title badge */}
          <motion.div
            animate={{
              backgroundColor: isActive 
                ? 'rgba(244, 125, 207, 1)' 
                : 'rgba(244, 125, 207, 0.3)'
            }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full px-4 py-1.5 mb-3 shadow-md"
          >
            <span className={`font-['Space_Mono'] text-sm font-medium transition-colors duration-400 ${
              isActive ? 'text-white' : 'text-[#13293d]'
            }`}>
              {title}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="font-['Space_Mono'] text-base text-black leading-relaxed"
            animate={{
              opacity: isActive ? 1 : 0.6
            }}
            transition={{ duration: 0.4 }}
          >
            {description}
          </motion.p>

          {/* Active indicator */}
          {isActive && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6 }}
              className="h-0.5 bg-gradient-to-r from-[#f47dcf] to-transparent mt-3"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
