"use client";

import { motion } from "framer-motion";

interface HeroVariantControlProps {
  activeVariant: "editorial" | "recruiter" | "technical";
  onVariantChange: (variant: "editorial" | "recruiter" | "technical") => void;
}

export function HeroVariantControl({ activeVariant, onVariantChange }: HeroVariantControlProps) {
  const variants = [
    { id: "editorial" as const, label: "Narrativa" },
    { id: "recruiter" as const, label: "Usuario" },
    { id: "technical" as const, label: "Sistemas" },
  ];

  return (
    <div className="flex items-center gap-1 bg-[#f5f4f0]/60 p-0.5 rounded-lg w-full sm:w-auto overflow-x-auto">
      {variants.map((variant) => {
        const isActive = activeVariant === variant.id;

        return (
          <motion.button
            key={variant.id}
            onClick={() => onVariantChange(variant.id)}
            className={`
              relative px-4 py-1.5 rounded-md text-[0.813rem] tracking-tight whitespace-nowrap
              transition-colors duration-120 flex-shrink-0
              ${isActive ? "text-[#2a2a2a] font-medium" : "text-[#9a9a9a] hover:text-[#6a6a6a]"}
            `}
            whileHover={{ scale: isActive ? 1 : 1.01 }}
            transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}
            type="button"
          >
            {isActive && (
              <motion.div
                layoutId="activeVariant"
                className="absolute inset-0 bg-white/90 rounded-md shadow-sm border border-[#e8e6e1]"
                transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
            <span className="relative z-10">{variant.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
