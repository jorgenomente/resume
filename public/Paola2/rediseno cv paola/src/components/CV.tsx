import image_d2894c10fd184bee616dda3f47427d08b8926774 from 'figma:asset/d2894c10fd184bee616dda3f47427d08b8926774.png';
import paolaPhoto from 'figma:asset/c52ebd02d98e626bf3d502062aab6f9905fba264.png';
import { Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CV() {
  const { ref, isVisible } = useScrollAnimation(0.1, 400);

  const experiences = [
    'UX/UI Design',
    'Procesos y sistemas',
    'Gestión de stock y vencimientos',
    'Documentación interna',
    'Relación con proveedores',
    'Coordinación operativa',
    'Arquitectura de información',
    'Control de presupuesto'
  ];

  const chips = ['UX/UI Design', 'Procesos', 'Sistemas'];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <div 
        className="bg-white bg-opacity-50 rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-8 md:p-12 lg:p-16 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.03)] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(199,185,255,0.04) 0%, rgba(255,255,255,0.5) 100%)'
        }}
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left column - Header and Experience List */}
          <div>
            {/* Header */}
            <div className="mb-8 md:mb-10 lg:mb-12 text-center lg:text-left">
              <h2 
                className={`text-[#0E1A2B] mb-2 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
                }`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                  transitionDelay: '100ms'
                }}
              >
                Paola Zerpa
              </h2>
              <p 
                className={`text-[#5A6F55] text-lg md:text-xl transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
                }`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                  transitionDelay: '140ms'
                }}
              >
                Diseño UX/UI · Procesos · Sistemas
              </p>
            </div>

            {/* Experience List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-3 md:gap-y-4">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-2.5 md:gap-3 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
                  }`}
                  style={{ 
                    transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                    transitionDelay: `${180 + index * 25}ms`
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F47DCF] mt-2.5 md:mt-3 flex-shrink-0" />
                  <p className="text-[#0E1A2B] opacity-90">{exp}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Photo and Chips */}
          <div 
            className={`flex flex-col items-center gap-5 md:gap-6 lg:sticky lg:top-8 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5 md:translate-y-2'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '200ms'
            }}
          >
            <div 
              className="rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] md:duration-[190ms] lg:duration-[200ms] hover:scale-[1.005] md:hover:scale-[1.01] hover:shadow-[0px_8px_18px_0px_rgba(0,0,0,0.08)] max-w-[280px] md:max-w-none"
              style={{
                boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.02), 0px 0px 40px 0px rgba(199,185,255,0.06)',
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)'
              }}
            >
              <img 
                src={image_d2894c10fd184bee616dda3f47427d08b8926774} 
                alt="Paola Zerpa" 
                className="w-56 md:w-60 lg:w-64 h-auto transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms]"
                style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
              />
            </div>
            
            <div className="flex flex-row md:flex-col gap-2.5 md:gap-3 items-center justify-center flex-wrap">
              {chips.map((chip, index) => (
                <span
                  key={index}
                  className="border border-[#E3C08B] text-[#5A6F55] px-4 py-2 rounded-[14px] md:rounded-[15px] lg:rounded-[16px] text-sm transition-all duration-[140ms] md:duration-[150ms] lg:duration-[160ms] hover:-translate-y-0.5 hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
                  style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div 
          className={`flex justify-center pt-10 md:pt-11 lg:pt-12 mt-10 md:pt-11 lg:mt-12 border-t border-[#E3C08B] border-opacity-20 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
          }`}
          style={{ 
            transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
            transitionDelay: '420ms'
          }}
        >
          <button 
            className="bg-[#0E1A2B] text-[#F4EFE4] px-8 py-3 md:px-9 md:py-3.5 lg:px-10 lg:py-4 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85 flex items-center gap-2.5 md:gap-3"
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
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}