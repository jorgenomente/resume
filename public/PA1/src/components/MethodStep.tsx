import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface MethodStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function MethodStep({ title, description, icon: Icon, index }: MethodStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connecting line */}
      {index < 3 && (
        <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-[#f47dcf] to-[#f47dcf]/20" />
      )}

      <div className="flex gap-4 relative z-10">
        {/* Icon badge */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-12 h-12 rounded-full bg-[#f6f1e7] flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-[#f47dcf]" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 pb-8">
          {/* Title badge */}
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] rounded-full px-4 py-1.5 mb-3 shadow-md"
          >
            <span className="font-['Space_Mono'] text-sm text-[#13293d] font-medium">
              {title}
            </span>
          </motion.div>

          {/* Description */}
          <p className="font-['Space_Mono'] text-base text-black leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
