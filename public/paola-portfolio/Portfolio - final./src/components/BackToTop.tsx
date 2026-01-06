import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 25% of viewport height
      const scrollThreshold = window.innerHeight * 0.25;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#e8e6e1] rounded-full shadow-sm transition-colors duration-150 hover:bg-[#d8d6d1]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#4a4a4a]" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
