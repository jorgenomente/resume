import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-16 md:mt-20">
      {/* Main footer content */}
      <div 
        className="relative overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #1a1a1a, #0d0d0d)',
        }}
      >
        <div className="container-portfolio py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-10 md:space-y-12">
            {/* Título principal */}
            <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] text-[#f5f5f5] font-medium tracking-tight leading-[1.35] max-w-2xl mx-auto">
              Diseño sistemas con intención.<br />
              Hablemos.
            </h2>

            {/* Email - ancla visual central */}
            <div className="pt-2">
              <a 
                href="mailto:paolazerpak@gmail.com"
                className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] text-white font-medium tracking-tight transition-all duration-200 hover:text-[#D4A89C]"
              >
                paolazerpak@gmail.com
              </a>
            </div>

            {/* CTA principal */}
            <div className="pt-6 md:pt-8">
              <a
                href="https://linkedin.com/in/paolazerpak"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full transition-all duration-200"
                style={{
                  background: '#D4A89C',
                }}
              >
                <span className="text-[1rem] text-white font-medium tracking-tight">
                  Conectar en LinkedIn
                </span>

                {/* Flecha con micro-interacción */}
                <motion.span
                  className="inline-block"
                  initial={{ x: 0, rotate: 0 }}
                  whileHover={{ x: 3, rotate: 3 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
                </motion.span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}