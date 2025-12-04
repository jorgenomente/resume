import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.1, 560);

  return (
    <footer
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <div className="space-y-5 text-center md:space-y-6">
        <p
        className={`accent-text text-xl text-[#5A6F55] transition-all duration-[240ms] md:text-2xl md:duration-[260ms] lg:duration-[280ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "100ms",
          }}
        >
          &quot;Somos formas en movimiento, diseñando nuestra luz desde dentro&quot;
        </p>
        <p
          className={`text-[#0E1A2B] opacity-60 transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
            isVisible ? "translate-y-0" : "translate-y-1 md:translate-y-1.5"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            transitionDelay: "140ms",
          }}
        >
          © 2025 Paola Zerpa.
        </p>
      </div>
    </footer>
  );
}
