import image_2cafed49723bfaf8dfa92846ad6fb9c019ef1846 from 'figma:asset/2cafed49723bfaf8dfa92846ad6fb9c019ef1846.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Icon from '../imports/Icon';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1, 80);

  const chips = [
    'UX/UI Design',
    'Sistemas',
    'Procesos internos',
    'Documentación',
    'Comunicación clara'
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-[150px] lg:py-[128px] transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 items-center">
        {/* Column 1 - Left: Title, paragraph, and chips */}
        <div className="w-full lg:w-[55%]">
          <h2 
            className={`text-[#0E1A2B] mb-8 md:mb-10 lg:mb-12 text-center lg:text-left transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '100ms'
            }}
          >
            Sobre mí
          </h2>
          
          <p 
            className={`text-[#0E1A2B] opacity-90 mb-5 md:mb-6 text-center lg:text-left transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? 'translate-y-0' : 'translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              lineHeight: '1.6',
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '140ms'
            }}
          >
            Diseño soluciones claras entre UX/UI y operaciones. Conecto flujos, proveedores, stock y procesos diarios con diseño y lógica, para mejorar la experiencia real de trabajo de los equipos.
          </p>

          <p 
            className={`text-[#5A6F55] opacity-70 mb-8 md:mb-9 lg:mb-10 accent-text text-lg md:text-xl text-center lg:text-left transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              fontFamily: "'Lora', serif", 
              fontStyle: 'italic',
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '180ms'
            }}
          >
            Diseño desde la calma y la intuición.
          </p>

          <div 
            className={`flex flex-wrap gap-2.5 md:gap-3 justify-center lg:justify-start transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
            }`}
            style={{ 
              transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
              transitionDelay: '220ms'
            }}
          >
            {chips.map((chip, index) => (
              <span
                key={index}
                className="border border-[#E3C08B] text-[#5A6F55] px-4 py-2 md:px-4.5 md:py-2.5 lg:px-5 lg:py-2.5 rounded-[14px] md:rounded-[15px] lg:rounded-[16px] text-sm transition-all duration-[140ms] md:duration-[150ms] lg:duration-[160ms] hover:-translate-y-0.5 hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]"
                style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2 - Right: Scrapbook collage composition - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <div className="relative w-[280px] h-[320px]">
            {/* Soft cosmic pink-lilac gradient halo behind collage */}
            <div 
              className="absolute top-[-40px] rounded-[50%]"
              style={{ 
                right: '-122px',
                width: '400px',
                height: '480px',
                background: 'radial-gradient(ellipse at center, rgba(244, 125, 207, 0.18) 0%, rgba(198, 178, 255, 0.12) 40%, transparent 70%)',
                filter: 'blur(40px)',
                opacity: 0.8
              }}
            />
            
            {/* Soft texture block behind */}
            <div 
              className="absolute top-8 right-4 w-[200px] h-[220px] rounded-[24px] bg-[#8FAF8A]"
              style={{ opacity: 0.06 }}
            />
            
            {/* Washi tape element - realistic with torn edges */}
            <div className="absolute bottom-12 left-18 rotate-[-8deg]">
              <svg width="180" height="36" viewBox="0 0 180 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="washiShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="2" result="offsetblur"/>
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.08"/>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M2 8 Q1 6 2 4 L4 2 Q6 1 8 2 L172 2 Q174 1 176 2 L178 4 Q179 6 178 8 L178 28 Q179 30 178 32 L176 34 Q174 35 172 34 L8 34 Q6 35 4 34 L2 32 Q1 30 2 28 Z" 
                  fill="#E8D5BB" 
                  opacity="0.75"
                  filter="url(#washiShadow)"
                />
                <path 
                  d="M2 4 L178 4 M2 32 L178 32" 
                  stroke="#D4C1A8" 
                  strokeWidth="0.5" 
                  opacity="0.3"
                />
              </svg>
            </div>
            
            {/* Botanical sticker - photo placeholder */}
            <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full overflow-hidden opacity-80 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764249454485-fb24334cd0ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBsZWFmJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc5ODgxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Botanical element"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Detailed botanical line-art sticker */}
            <div className="absolute top-[-32px] left-4 w-[90px] h-[90px] opacity-65 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]">
              <Icon />
            </div>
            
            {/* Polaroid-style photo */}
            <div className="absolute bottom-0 left-[115px] bg-white p-3 rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] rotate-[-4deg]">
              <div className="w-[180px] h-[180px] bg-[#F4EFE4] rounded-[4px] overflow-hidden">
                <ImageWithFallback
                  src={image_2cafed49723bfaf8dfa92846ad6fb9c019ef1846}
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[32px]" />
            </div>
            
            {/* Handwritten phrase 1 - adjusted placement */}
            <div className="absolute top-[-84px] right-[-105px] rotate-[-3deg]">
              <p 
                className="text-[#5A6F55] opacity-70 text-left"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '26px',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  lineHeight: '0.94'
                }}
              >
                Diseño desde la calma
              </p>
              <p 
                className="text-[#5A6F55] opacity-70 text-left"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '26px',
                  fontWeight: '400',
                  letterSpacing: '0.5px',
                  lineHeight: '0.94',
                  marginTop: '2px'
                }}
              >
                y la intención.
              </p>
            </div>
            
            {/* Handwritten phrase 2 - adjusted placement */}
            <div className="absolute bottom-[-60px] left-[-50px] rotate-[2deg]">
              <p 
                className="text-[#5A6F55] opacity-70"
                style={{ 
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '26px',
                  fontWeight: '400',
                  letterSpacing: '0.5px'
                }}
              >
                Somos formas en movimiento.
              </p>
            </div>
            
            {/* Refined elegant minimal portrait line-art of Paola */}
            <div className="absolute bottom-[-90px] right-[-40px]">
              <div 
                className="text-[70px] leading-none"
                style={{
                  filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08))'
                }}
              >
                🌞
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}