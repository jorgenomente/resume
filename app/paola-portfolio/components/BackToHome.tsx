"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface BackToHomeProps {
  position?: "top" | "bottom";
}

export function BackToHome({ position = "top" }: BackToHomeProps) {
  return (
    <motion.a
      href="/paola-portfolio"
      data-position={position}
      className="inline-flex items-center gap-2 text-[0.875rem] text-[#6b6b6b] hover:text-[#2a2a2a] group"
      initial="rest"
      whileHover="hover"
    >
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: -4 } }}
        transition={{ duration: 0.12, ease: [0.4, 0, 0.2, 1] }}
        className="group-hover:text-[#D4A89C] transition-colors duration-120"
      >
        <ArrowLeft className="w-4 h-4" />
      </motion.span>
      <span className="group-hover:underline decoration-1 underline-offset-4 transition-all duration-120">
        Volver a Home
      </span>
    </motion.a>
  );
}
