import { Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1, 480);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3 lg:translate-y-3.5'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 
          className={`text-[#0E1A2B] mb-6 md:mb-7 lg:mb-8 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
          }`}
          style={{ 
            transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
            transitionDelay: '120ms'
          }}
        >
          ¿Charlamos?
        </h2>
        <p 
          className={`text-[#0E1A2B] opacity-85 mb-10 md:mb-11 lg:mb-12 text-lg md:text-xl transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
            isVisible ? 'translate-y-0' : 'translate-y-1 md:translate-y-1.5'
          }`}
          style={{ 
            lineHeight: '1.6',
            transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
            transitionDelay: '160ms'
          }}
        >
          Si querés ordenar flujos, mejorar procesos o diseñar algo hermoso y funcional, charlemos. Me encanta transformar caos en claridad.
        </p>
        <button 
          className={`bg-[#0E1A2B] text-[#F4EFE4] px-10 py-4 md:px-11 md:py-4.5 lg:px-12 lg:py-5 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85 inline-flex items-center gap-2.5 md:gap-3 text-lg md:text-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
          }`}
          style={{ 
            boxShadow: '0px 4px 14px 0px rgba(0,0,0,0.08)',
            transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0px 8px 16px 0px rgba(244,125,207,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0px 4px 14px 0px rgba(0,0,0,0.08)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
            e.currentTarget.style.transitionDuration = '120ms';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = '0px 8px 16px 0px rgba(244,125,207,0.2)';
            e.currentTarget.style.transitionDuration = '180ms';
          }}
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
          Contactar
        </button>
      </div>
    </section>
  );
}