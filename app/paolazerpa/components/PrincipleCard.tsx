"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface PrincipleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function PrincipleCard({ title, description, icon: Icon, delay = 0 }: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group h-full"
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative bg-gradient-to-br from-[#d7a86e] to-[#d7a86e]/80 border border-[#f6f1e7] rounded-2xl p-6 shadow-lg overflow-hidden h-full flex flex-col"
      >
        <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,0 Z" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f47dcf" />
                <stop offset="100%" stopColor="#c7b9ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="absolute top-4 right-4 bg-[#f6f1e7] rounded-2xl p-3 shadow-md"
        >
          <Icon className="w-8 h-8 text-[#f47dcf]" strokeWidth={1.5} />
        </motion.div>

        <div className="relative z-10 pr-16 flex-1">
          <h3 className="font-['Space_Mono'] font-bold text-lg text-[#13293d] mb-3 leading-tight">
            {title}
          </h3>
          <p className="font-['Space_Mono'] text-sm text-[#13293d] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="absolute inset-0 border-2 border-[#f47dcf]/0 group-hover:border-[#f47dcf]/40 rounded-2xl pointer-events-none transition-all duration-300" />
      </motion.div>
    </motion.div>
  );
}
