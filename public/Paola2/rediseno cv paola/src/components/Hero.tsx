import image_c52ebd02d98e626bf3d502062aab6f9905fba264 from 'figma:asset/c52ebd02d98e626bf3d502062aab6f9905fba264.png';
import paolaPhoto from 'figma:asset/c52ebd02d98e626bf3d502062aab6f9905fba264.png';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1, 0);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[320ms] md:duration-[280ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        {/* Photo - First on mobile, left on desktop */}
        <div className="flex justify-center w-full lg:order-first">
          <div 
            className="rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms] hover:scale-[1.005] md:hover:scale-[1.01] hover:shadow-[0px_8px_18px_0px_rgba(0,0,0,0.08)] max-w-[340px] md:max-w-none w-full"
            style={{
              boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.02), 0px 0px 40px 0px rgba(199,185,255,0.06)',
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)'
            }}
          >
            <img 
              src={image_c52ebd02d98e626bf3d502062aab6f9905fba264} 
              alt="Paola Zerpa" 
              className="w-full h-auto transition-all duration-[280ms] md:duration-[320px] lg:duration-[360ms]"
              style={{
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                animation: isVisible ? 'fadeInBlur 280ms cubic-bezier(.16,1,.3,1) forwards' : 'none'
              }}
            />
          </div>
        </div>

        {/* Content - Second on mobile, right on desktop */}
        <div className="space-y-6 md:space-y-7 lg:space-y-8 text-center lg:text-left">
          <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
            <h1 
              className={`text-[#0E1A2B] transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                transitionDelay: '80ms'
              }}
            >
              Paola Zerpa
            </h1>
            <h3 
              className={`text-[#5A6F55] transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
              }`}
              style={{ 
                fontWeight: '520',
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                transitionDelay: '120ms'
              }}
            >
              Diseño UX/UI · Procesos · Sistemas de trabajo
            </h3>
            <p 
              className={`text-[#5A6F55] opacity-90 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? 'translate-y-0' : 'translate-y-1 md:translate-y-1.5'
              }`}
              style={{ 
                fontFamily: 'Work Sans, sans-serif',
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                transitionDelay: '160ms'
              }}
            >
              Diseño sistemas que ordenan la operación y hacen que el trabajo fluya.
            </p>
          </div>

          <p 
            className={`text-[#0E1A2B] opacity-90 max-w-xl mx-auto lg:mx-0 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '200ms'
            }}
          >
            Diseño experiencias claras y funcionales integrando UX/UI, procesos reales y sistemas internos. Ordeno flujos, optimizo operaciones y creo soluciones digitales prácticas, humanas y eficientes.
          </p>

          <div 
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-3 lg:pt-4 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] justify-center lg:justify-start ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '240ms'
            }}
          >
            <button 
              className="border-2 border-[#E3C08B] text-[#0E1A2B] px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:border-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85"
              style={{ 
                boxShadow: '0px 4px 14px 0px rgba(0,0,0,0.06)',
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 6px 14px 0px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 14px 0px rgba(0,0,0,0.06)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
                e.currentTarget.style.transitionDuration = '120ms';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = '0px 6px 14px 0px rgba(0,0,0,0.12)';
                e.currentTarget.style.transitionDuration = '180ms';
              }}
            >
              Descargar CV
            </button>
            <button 
              className="bg-[#0E1A2B] text-[#F4EFE4] px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85"
              style={{ 
                boxShadow: '0px 4px 14px 0px rgba(0,0,0,0.08)',
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0px 6px 14px 0px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0px 4px 14px 0px rgba(0,0,0,0.08)';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
                e.currentTarget.style.transitionDuration = '120ms';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = '0px 6px 14px 0px rgba(0,0,0,0.12)';
                e.currentTarget.style.transitionDuration = '180ms';
              }}
            >
              Ver proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}