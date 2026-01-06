"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.25;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#e8e6e1] rounded-full shadow-sm transition-all duration-150 hover:bg-[#D4A89C] hover:shadow group"
          aria-label="Volver arriba"
          type="button"
        >
          <ArrowUp
            className="w-5 h-5 text-[#4a4a4a] group-hover:text-white transition-colors duration-150"
            strokeWidth={2}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

