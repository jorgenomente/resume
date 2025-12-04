import Icon from "./imports/Icon";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const WORKSPACE_IMAGE = "/pao.jpeg";

export function About() {
  const { ref, isVisible } = useScrollAnimation(0.1, 80);

  const chips = ["UX/UI Design", "Sistemas", "Procesos internos", "Documentación", "Comunicación clara"];

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-[150px] lg:py-[128px] transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div className="flex flex-col items-center gap-10 md:gap-12 lg:gap-16 lg:flex-row">
        <div className="w-full lg:w-[55%]">
          <h2
            className={`mb-8 text-center text-[#0E1A2B] transition-all duration-[240ms] md:mb-10 md:duration-[260ms] lg:mb-12 lg:text-left lg:duration-[280ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "100ms",
            }}
          >
            Sobre mí
          </h2>

          <p
            className={`mb-5 text-center text-[#0E1A2B] opacity-90 transition-all duration-[240ms] md:mb-6 md:duration-[260ms] lg:text-left lg:duration-[280ms] ${
              isVisible ? "translate-y-0" : "translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              lineHeight: "1.6",
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "140ms",
            }}
          >
            Diseño soluciones claras entre UX/UI y operaciones. Conecto flujos, proveedores, stock y procesos
            diarios con diseño y lógica, para mejorar la experiencia real de trabajo de los equipos.
          </p>

          <p
            className={`accent-text mb-8 text-center text-lg text-[#5A6F55] opacity-70 transition-all duration-[240ms] md:mb-9 md:text-xl md:duration-[260ms] lg:mb-10 lg:text-left lg:duration-[280ms] ${
              isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              fontFamily: "'Lora', serif",
              fontStyle: "italic",
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "180ms",
            }}
          >
            Diseño desde la calma y la intuición.
          </p>

          <div
            className={`flex flex-wrap justify-center gap-2.5 transition-all duration-[240ms] md:gap-3 md:duration-[260ms] lg:justify-start lg:duration-[280ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "220ms",
            }}
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-[14px] border border-[#E3C08B] px-4 py-2 text-sm text-[#5A6F55] transition-all duration-[140ms] hover:-translate-y-0.5 hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] md:rounded-[15px] md:px-[18px] md:py-[10px] md:duration-[150ms] lg:rounded-[16px] lg:px-5 lg:py-[10px] lg:duration-[160ms]"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <div className="relative h-[320px] w-[280px]">
            <div
              className="absolute top-[-40px] rounded-[50%]"
              style={{
                right: "-122px",
                width: "400px",
                height: "480px",
                background:
                  "radial-gradient(ellipse at center, rgba(244, 125, 207, 0.18) 0%, rgba(198, 178, 255, 0.12) 40%, transparent 70%)",
                filter: "blur(40px)",
                opacity: 0.8,
              }}
            />

            <div
              className="absolute top-8 right-4 h-[220px] w-[200px] rounded-[24px] bg-[#8FAF8A]"
              style={{ opacity: 0.06 }}
            />

            <div className="absolute bottom-12 left-[72px] -rotate-[8deg]">
              <svg
                width="180"
                height="36"
                viewBox="0 0 180 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="washiShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.08" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M2 8 Q1 6 2 4 L4 2 Q6 1 8 2 L172 2 Q174 1 176 2 L178 4 Q179 6 178 8 L178 28 Q179 30 178 32 L176 34 Q174 35 172 34 L8 34 Q6 35 4 34 L2 32 Q1 30 2 28 Z"
                  fill="#E8D5BB"
                  opacity="0.75"
                  filter="url(#washiShadow)"
                />
                <path d="M2 4 L178 4 M2 32 L178 32" stroke="#D4C1A8" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>

            <div className="absolute right-0 top-0 h-[100px] w-[100px] overflow-hidden rounded-full opacity-80 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764249454485-fb24334cd0ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBsZWFmJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NDc5ODgxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Botanical element"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-4 top-[-32px] h-[90px] w-[90px] opacity-65 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)]">
              <Icon />
            </div>

            <div className="absolute bottom-0 left-[115px] rotate-[-4deg] bg-white p-3 shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <div className="h-[180px] w-[180px] overflow-hidden rounded-[4px] bg-[#F4EFE4]">
                <ImageWithFallback
                  src={WORKSPACE_IMAGE}
                  alt="Workspace"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-[32px]" />
            </div>

            <div className="absolute right-[-105px] top-[-84px] -rotate-[3deg]">
              <p
                className="text-left text-[#5A6F55] opacity-70"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "26px",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                  lineHeight: "0.94",
                }}
              >
                Diseño desde la calma
              </p>
              <p
                className="text-left text-[#5A6F55] opacity-70"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "26px",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                  lineHeight: "0.94",
                  marginTop: "2px",
                }}
              >
                y la intención.
              </p>
            </div>

            <div className="absolute left-[-50px] bottom-[-60px] rotate-[2deg]">
              <p
                className="text-[#5A6F55] opacity-70"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "26px",
                  fontWeight: "400",
                  letterSpacing: "0.5px",
                }}
              >
                Somos formas en movimiento.
              </p>
            </div>

            <div className="absolute bottom-[-90px] right-[-40px]">
              <div
                className="text-[70px] leading-none"
                style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08))" }}
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
