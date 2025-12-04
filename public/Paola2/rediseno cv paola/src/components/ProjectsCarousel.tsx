import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ProjectsCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.1, 240);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      tag: 'UX/UI & Systems Design',
      title: 'Cosmic Studio',
      description: 'Studio de diseño + sistemas. Identidad visual, sistema editorial, componentes reutilizables, paleta de color, UI Kit, flujos y sitio web.\n\nIncluye diseño, procesos y experiencia de cliente.',
      moodboardImage: 'https://images.unsplash.com/photo-1760022638435-aad7c1e684b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0Nzk0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      tag: 'Product Design',
      title: 'MiProveedor',
      description: 'Arquitectura de información, userflows y diseño de interfaz para plataforma B2B de gestión de clientes y proveedores. Enfoque en procesos claros y navegación eficiente.',
      moodboardImage: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc2NDc5NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      tag: 'UX/UI & Systems Design',
      title: 'Nodux',
      description: 'Sistema interno de gestión de proveedores integrado con procesos reales de compras, stock y coordinación operativa. Diseño centrado en el flujo diario del equipo.',
      moodboardImage: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBvcmdhbml6ZWQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0Nzk0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <h2 
        className={`text-[#0E1A2B] mb-10 md:mb-12 lg:mb-16 text-center md:text-left transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
        }`}
        style={{ 
          transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
          transitionDelay: '100ms'
        }}
      >
        Proyectos seleccionados
      </h2>
      
      <div className="relative p-[0px]">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-0 md:px-2 lg:px-4">
                <div 
                  className="bg-white bg-opacity-50 rounded-[12px] p-6 md:p-8 lg:p-[52px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.03)] relative"
                  style={{
                    borderLeft: '3px solid #F47DCF'
                  }}
                >
                  <div className="flex flex-col lg:grid lg:grid-cols-[60%_40%] gap-8 md:gap-10 lg:gap-14 items-start pt-[20px] pr-[120px] pb-[0px] pl-[0px]">
                    {/* Left column - Text content */}
                    <div>
                      <span className="inline-block text-[#8FAF8A] text-xs md:text-sm mb-3 md:mb-4 tracking-wide uppercase">
                        {project.tag}
                      </span>
                      <h2 className="text-[#0E1A2B] mb-4 md:mb-5 lg:mb-6">{project.title}</h2>
                      <p className="text-[#0E1A2B] opacity-80 mb-6 md:mb-7 lg:mb-8" style={{ lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                        {project.description}
                      </p>
                      <button className="border-2 border-[#E3C08B] text-[#0E1A2B] px-6 py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]" style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}>
                        Ver proyecto
                      </button>
                    </div>

                    {/* Right column - Moodboard */}
                    <div className="flex justify-center lg:justify-end w-full lg:mx-[30px] lg:my-[0px] lg:pt-[0px] lg:pr-[-3px] lg:pb-[0px] lg:pl-[0px]">
                      <div 
                        className="border border-[#E3C08B] rounded-[12px] overflow-hidden shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] w-full max-w-[320px] md:max-w-none aspect-square transition-all duration-[180ms] md:duration-[190ms] lg:duration-[200ms] hover:scale-[1.005] md:hover:scale-[1.01] hover:shadow-[0px_6px_14px_0px_rgba(0,0,0,0.08)]"
                        style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
                      >
                        <ImageWithFallback
                          src={project.moodboardImage}
                          alt={`${project.title} moodboard`}
                          className="w-full h-full object-cover transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms]"
                          style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-7 lg:mt-8">
          <button
            onClick={prevSlide}
            className="bg-[#0E1A2B] text-[#F4EFE4] p-2.5 md:p-3 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] active:scale-[0.99]"
            style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#0E1A2B] text-[#F4EFE4] p-2.5 md:p-3 rounded-full transition-all duration-[160ms] md:duration-[170ms] lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] active:scale-[0.99]"
            style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-5 md:mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#F47DCF] w-8' 
                  : 'bg-[#5A6F55] opacity-30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}