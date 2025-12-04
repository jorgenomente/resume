/* eslint-disable @next/next/no-img-element */
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HERO_IMAGE = "/IMG_7622.jpeg";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1, 0);
  const handleDownload = () => {
    const resumeUrl = encodeURI("/CV - Paola Zerpa.pdf");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "CV - Paola Zerpa.pdf";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[320ms] md:duration-[280ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="flex w-full justify-center lg:order-first">
          <div
            className="w-full max-w-[340px] md:max-w-none overflow-hidden rounded-[16px] md:rounded-[18px] lg:rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms] hover:scale-[1.005] md:hover:scale-[1.01] hover:shadow-[0px_8px_18px_0px_rgba(0,0,0,0.08)]"
            style={{
              boxShadow:
                "0px 4px 20px 0px rgba(0,0,0,0.02), 0px 0px 40px 0px rgba(199,185,255,0.06)",
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            }}
          >
            <img
              src={HERO_IMAGE}
              alt="Paola Zerpa"
              className="h-auto w-full transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms]"
              style={{
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                animation: isVisible ? "paolakz-fadeInBlur 280ms cubic-bezier(.16,1,.3,1) forwards" : "none",
              }}
            />
          </div>
        </div>

        <div className="space-y-6 text-center lg:space-y-8 lg:text-left md:space-y-7">
          <div className="space-y-3 md:space-y-3.5 lg:space-y-4">
            <h1
              className={`text-[#0E1A2B] transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                transitionDelay: "80ms",
              }}
            >
              Paola Zerpa
            </h1>
            <h3
              className={`text-[#5A6F55] transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
              }`}
              style={{
                fontWeight: "520",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                transitionDelay: "120ms",
              }}
            >
              Diseño UX/UI · Procesos · Sistemas de trabajo
            </h3>
            <p
              className={`text-[#5A6F55] opacity-90 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                isVisible ? "translate-y-0" : "translate-y-1 md:translate-y-1.5"
              }`}
              style={{
                fontFamily: "Work Sans, sans-serif",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                transitionDelay: "160ms",
              }}
            >
              Diseño sistemas que ordenan la operación y hacen que el trabajo fluya.
            </p>
          </div>

          <p
            className={`text-[#0E1A2B] opacity-90 max-w-xl mx-auto lg:mx-0 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
              isVisible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "200ms",
            }}
          >
            Diseño experiencias claras y funcionales integrando UX/UI, procesos reales y sistemas
            internos. Ordeno flujos, optimizo operaciones y creo soluciones digitales prácticas,
            humanas y eficientes.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-3 lg:pt-4 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] justify-center lg:justify-start ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "240ms",
            }}
          >
            <button
              className="rounded-full border-2 border-[#E3C08B] px-6 py-3 text-[#0E1A2B] transition-all duration-[160ms] md:px-7 md:py-3.5 md:duration-[170ms] lg:px-8 lg:py-4 lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] hover:border-[#F4C5E8] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85"
              style={{
                boxShadow: "0px 4px 14px 0px rgba(0,0,0,0.06)",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              }}
              onClick={handleDownload}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = "0px 6px 14px 0px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = "0px 4px 14px 0px rgba(0,0,0,0.06)";
              }}
              onMouseDown={(event) => {
                event.currentTarget.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
                event.currentTarget.style.transitionDuration = "120ms";
              }}
              onMouseUp={(event) => {
                event.currentTarget.style.boxShadow = "0px 6px 14px 0px rgba(0,0,0,0.12)";
                event.currentTarget.style.transitionDuration = "180ms";
              }}
            >
              Descargar CV
            </button>
            <button
              className="rounded-full bg-[#0E1A2B] px-6 py-3 text-[#F4EFE4] transition-all duration-[160ms] md:px-7 md:py-3.5 md:duration-[170ms] lg:px-8 lg:py-4 lg:duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.01] md:hover:scale-[1.015] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85"
              style={{
                boxShadow: "0px 4px 14px 0px rgba(0,0,0,0.08)",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              }}
              onClick={handleViewProjects}
              onMouseEnter={(event) => {
                event.currentTarget.style.boxShadow = "0px 6px 14px 0px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.boxShadow = "0px 4px 14px 0px rgba(0,0,0,0.08)";
              }}
              onMouseDown={(event) => {
                event.currentTarget.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
                event.currentTarget.style.transitionDuration = "120ms";
              }}
              onMouseUp={(event) => {
                event.currentTarget.style.boxShadow = "0px 6px 14px 0px rgba(0,0,0,0.12)";
                event.currentTarget.style.transitionDuration = "180ms";
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
