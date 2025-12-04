import { Mail } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1, 480);

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3 lg:translate-y-3.5"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className={`mb-6 text-[#0E1A2B] transition-all duration-[240ms] md:mb-7 md:duration-[260ms] lg:mb-8 lg:duration-[280ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "120ms",
          }}
        >
          ¿Charlamos?
        </h2>
        <p
          className={`mb-10 text-lg text-[#0E1A2B] opacity-85 transition-all duration-[240ms] md:mb-11 md:text-xl md:duration-[260ms] lg:mb-12 lg:duration-[280ms] ${
            isVisible ? "translate-y-0" : "translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            lineHeight: "1.6",
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "160ms",
          }}
        >
          Si querés ordenar flujos, mejorar procesos o diseñar algo hermoso y funcional, charlemos. Me encanta
          transformar caos en claridad.
        </p>
        <a
          href="https://wa.me/541133652899"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-2.5 rounded-full bg-[#0E1A2B] px-10 py-4 text-lg text-[#F4EFE4] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#F4C5E8] hover:text-[#0E1A2B] active:translate-y-0 active:scale-[0.99] active:bg-[#F4C5E8] active:bg-opacity-85 md:gap-3 md:px-11 md:py-[18px] md:text-xl md:duration-[170ms] md:hover:scale-[1.015] lg:px-12 lg:py-5 lg:duration-[180ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            boxShadow: "0px 4px 14px 0px rgba(0,0,0,0.08)",
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "200ms",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.boxShadow = "0px 8px 16px 0px rgba(244,125,207,0.2)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.boxShadow = "0px 4px 14px 0px rgba(0,0,0,0.08)";
          }}
          onMouseDown={(event) => {
            event.currentTarget.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
            event.currentTarget.style.transitionDuration = "120ms";
          }}
          onMouseUp={(event) => {
            event.currentTarget.style.boxShadow = "0px 8px 16px 0px rgba(244,125,207,0.2)";
            event.currentTarget.style.transitionDuration = "180ms";
          }}
        >
          <Mail className="h-5 w-5 md:h-6 md:w-6" />
          Contactar
        </a>
      </div>
    </section>
  );
}
