import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { motionVariants, scrollViewport } from '../lib/motion';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  link: string;
  index: number;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  category,
  tags,
  image,
  link,
  index
}: ProjectCardProps) {
  return (
    <motion.article
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
      className="group pb-8 relative"
    >
      {/* Coral gradient separator line at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[10px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,168,156,0.2), rgba(184,149,106,0.12), transparent)',
          filter: 'blur(1.5px)'
        }}
      ></div>

      {/* Image */}
      <a href={link} className="block mb-6 md:mb-8 overflow-hidden rounded bg-[#f5f4f0]">
        <motion.div 
          className="aspect-[16/9] md:aspect-[5/2] w-full"
          initial="rest"
          whileHover="hover"
          variants={motionVariants.cardImage}
        >
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#f5f4f0] to-[#e8e6e1]" />
          )}
        </motion.div>
      </a>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-between">
        {/* Left: Main content */}
        <div className="flex-1 space-y-3 md:space-y-4">
          {/* Category label */}
          <div className="flex items-center gap-3 text-[0.75rem] tracking-[0.05em] uppercase">
            <span className="text-[#D4A89C]">{subtitle}</span>
            <span className="text-[#e8e6e1]">·</span>
            <span className="text-[#8a8a8a]">{category}</span>
          </div>

          {/* Title */}
          <h3 className="text-[0.938rem] md:text-[1rem] text-[#2a2a2a] tracking-tight leading-[1.4]">{title}</h3>

          {/* Meta */}
          <p className="text-[0.875rem] text-[#4a4a4a] leading-relaxed">
            {subtitle.replace(' · ', ' · ').replace(' · ', ' · ')}
          </p>

          {/* Description */}
          <p className="text-[0.938rem] md:text-[1rem] text-[#4a4a4a] leading-[1.65] max-w-xl">
            {description}
          </p>

          {/* Link with CTA hover */}
          <motion.a
            href={link}
            className="inline-flex items-center gap-2 text-[0.938rem] md:text-[1rem] text-[#2a2a2a] group pt-2"
            initial="rest"
            whileHover="hover"
          >
            <motion.span variants={motionVariants.ctaHover}>
              Ver caso
            </motion.span>
            <motion.span 
              variants={motionVariants.ctaArrow}
              className="group-hover:text-[#D4A89C] transition-colors duration-120"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </div>

        {/* Right: Tags */}
        <div className="flex flex-wrap gap-2 content-start lg:max-w-[270px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-[#f5f4f0] text-[#6b6b6b] text-[0.813rem] md:text-[0.875rem] rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}