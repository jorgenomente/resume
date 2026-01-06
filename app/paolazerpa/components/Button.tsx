"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: "arrow" | "download";
  onClick?: () => void;
  href?: string;
  className?: string;
  helperText?: string;
}

export function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  href,
  className = "",
  helperText,
}: ButtonProps) {
  const baseClasses =
    "relative px-5 py-2 rounded-full font-['Space_Mono'] text-sm cursor-pointer transition-all duration-300 flex items-center gap-2 overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] text-[#13293d] hover:shadow-lg hover:shadow-[#f47dcf]/30 hover:scale-105",
    secondary:
      "bg-[rgba(19,41,61,0.8)] text-[#f6f1e7] border border-[#f6f1e7]/20 hover:bg-[rgba(19,41,61,0.95)] hover:border-[#f47dcf]/50",
  };

  const IconComponent = icon === "arrow" ? ArrowUpRight : icon === "download" ? Download : null;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {IconComponent && (
        <motion.div whileHover={{ x: 2, y: -2 }} transition={{ duration: 0.2 }}>
          <IconComponent className="w-4 h-4 relative z-10" />
        </motion.div>
      )}
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#c7b9ff] to-[#f47dcf] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
        />
      )}
    </>
  );

  const buttonElement = href ? (
    <motion.a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {content}
    </motion.a>
  ) : (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );

  if (helperText) {
    return (
      <div className="flex flex-col items-center gap-2">
        {buttonElement}
        <p className="font-['Space_Mono'] text-xs text-[#13293d]/70 text-center max-w-[280px]">
          {helperText}
        </p>
      </div>
    );
  }

  return buttonElement;
}
