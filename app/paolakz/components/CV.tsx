/* eslint-disable @next/next/no-img-element */
import { Download } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const CV_IMAGE = "/IMG_7613.webp";

const experiences = [
  "UX/UI Design",
  "Procesos y sistemas",
  "Gestión de stock y vencimientos",
  "Documentación interna",
  "Relación con proveedores",
  "Coordinación operativa",
  "Arquitectura de información",
  "Control de presupuesto",
];

const chips = ["UX/UI Design", "Procesos", "Sistemas"];

export function CV() {
  const { ref, isVisible } = useScrollAnimation(0.1, 400);
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

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div
        className="relative overflow-hidden rounded-[16px] bg-white bg-opacity-50 p-8 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.03)] md:rounded-[18px] md:p-12 lg:rounded-[20px] lg:p-16"
        style={{
          background: "linear-gradient(135deg, rgba(199,185,255,0.04) 0%, rgba(255,255,255,0.5) 100%)",
        }}
      >
        <div className="flex flex-col items-start gap-12 md:gap-16 lg:grid lg:grid-cols-[1fr_auto] lg:gap-20">
          <div>
            <div className="mb-8 text-center md:mb-10 lg:mb-12 lg:text-left">
              <h2
                className={`mb-2 text-[#0E1A2B] transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                  transitionDelay: "100ms",
                }}
              >
                Paola Zerpa
              </h2>
              <p
                className={`text-lg text-[#5A6F55] transition-all duration-[240ms] md:text-xl md:duration-[260ms] lg:duration-[280ms] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                  transitionDelay: "140ms",
                }}
              >
                Diseño UX/UI · Procesos · Sistemas
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:gap-x-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp}
                  className={`flex items-start gap-2.5 transition-all duration-[240ms] md:gap-3 md:duration-[260ms] lg:duration-[280ms] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                    transitionDelay: `${180 + index * 25}ms`,
                  }}
                >
                  <div className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F47DCF] md:mt-3" />
                  <p className="text-[#0E1A2B] opacity-90">{exp}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`flex flex-col items-center gap-5 transition-all duration-[280ms] md:gap-6 md:duration-[320ms] lg:sticky lg:top-8 lg:duration-[340ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5 md:translate-y-2"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: "200ms",
            }}
          >
            <div
              className="max-w-[280px] overflow-hidden rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] hover:scale-[1.005] hover:shadow-[0px_8px_18px_0px_rgba(0,0,0,0.08)] md:rounded-[18px] md:duration-[190ms] md:hover:scale-[1.01] lg:rounded-[20px] lg:duration-[200ms]"
              style={{
                boxShadow:
                  "0px 4px 20px 0px rgba(0,0,0,0.02), 0px 0px 40px 0px rgba(199,185,255,0.06)",
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              }}
            >
              <img
                src={CV_IMAGE}
                alt="Paola Zerpa"
                className="h-auto w-56 transition-all duration-[280ms] md:w-60 md:duration-[320ms] lg:w-64 lg:duration-[360ms]"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              />
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 md:flex-col md:gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-[14px] border border-[#E3C08B] px-4 py-2 text-sm text-[#5A6F55] transition-all duration-[140ms] hover:-translate-y-0.5 hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] md:rounded-[15px] md:duration-[150ms] lg:rounded-[16px] lg:duration-[160ms]"
                  style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-10 flex justify-center border-t border-[#E3C08B] border-opacity-20 pt-10 transition-all duration-[240ms] md:mt-11 md:pt-11 md:duration-[260ms] lg:mt-12 lg:pt-12 lg:duration-[280ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "420ms",
          }}
        >
          <button
            className="flex items-center gap-2.5 rounded-full bg-[#0E1A2B] px-8 py-3 text-[#F4EFE4] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85 md:gap-3 md:px-9 md:py-3.5 md:duration-[170ms] md:hover:scale-[1.015] lg:px-10 lg:py-4 lg:duration-[180ms]"
            style={{
              boxShadow: "0px 4px 14px 0px rgba(0,0,0,0.08)",
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            }}
            onClick={handleDownload}
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
            <Download className="h-4 w-4 md:h-5 md:w-5" />
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
}
