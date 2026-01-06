import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  items: string[];
  cta: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({
  title,
  subtitle,
  description,
  features,
  items,
  cta,
  icon: Icon,
  delay = 0
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-[rgba(19,41,61,0.7)] to-[rgba(19,41,61,0.4)] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#f47dcf]/20 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#f47dcf]/20 transition-all duration-300"
      >
        {/* Header with gradient */}
        <div className="relative bg-[#13293d] h-32 flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[rgba(244,125,207,0.4)] to-[rgba(199,185,255,0.4)]"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Icon and Title overlay */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="bg-[#f6f1e7] rounded-full p-3"
            >
              <Icon className="w-8 h-8 text-[#f47dcf]" />
            </motion.div>
            <h3 className="font-['MuseoModerno'] font-medium text-base text-[#f47dcf] drop-shadow-lg">
              {subtitle}
            </h3>
          </div>
        </div>

        {/* Title badge */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff] text-[#f6f1e7] px-6 py-2 rounded-full shadow-lg">
            <p className="font-['Space_Grotesk'] font-medium text-xl md:text-2xl whitespace-nowrap drop-shadow">
              {title}
            </p>
          </div>
        </div>

        {/* Description section */}
        <div className="pt-16 px-6 pb-4">
          <div className="bg-[rgba(215,168,110,0.24)] border border-[rgba(244,125,207,0.4)] rounded-2xl p-4 shadow-inner">
            <p className="font-['Space_Mono'] text-sm text-[#13293d] text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="px-6 pb-6">
          <div className="space-y-4">
            <p className="font-['Space_Mono'] text-base text-[#13293d] leading-relaxed">
              {features}
            </p>

            <div className="space-y-2">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-[#f47dcf] rounded-full" />
                  <p className="font-['Space_Mono'] text-sm text-[#13293d] leading-tight">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Includes section */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-[rgba(244,125,207,0.4)] to-[rgba(199,185,255,0.4)] rounded-t-2xl px-4 py-2">
            <p className="font-['Space_Mono'] text-sm text-[#13293d]">Incluye:</p>
          </div>
          <div className="bg-gradient-to-br from-[rgba(244,125,207,0.15)] to-[rgba(199,185,255,0.15)] border-x border-b border-[rgba(244,125,207,0.4)] rounded-b-2xl px-6 py-4 space-y-2">
            {features.split('·').map((feature, index) => {
              const trimmed = feature.trim();
              if (!trimmed || index === 0) return null;
              return (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#f47dcf] rounded-full" />
                  <p className="font-['Space_Mono'] text-sm text-[#13293d]">{trimmed}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-6 pb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] text-[#13293d] py-3 rounded-full font-['Space_Mono'] text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{cta}</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f47dcf]/0 via-[#f47dcf]/0 to-[#c7b9ff]/0 group-hover:from-[#f47dcf]/5 group-hover:via-[#f47dcf]/5 group-hover:to-[#c7b9ff]/5 rounded-2xl pointer-events-none transition-all duration-500" />
      </motion.div>
    </motion.div>
  );
}
