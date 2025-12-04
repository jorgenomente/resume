import {
  CheckCircle2,
  DollarSign,
  Figma,
  FileText,
  Layout,
  Package,
  TrendingUp,
  Users,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  { icon: Figma, title: "UX/UI y prototipos", description: "Interfaces claras y funcionales centradas en el usuario." },
  { icon: Layout, title: "Arquitectura de información", description: "Estructuras y flujos eficientes para equipos." },
  { icon: TrendingUp, title: "Mejora de procesos", description: "Optimización de tareas y operaciones diarias." },
  { icon: FileText, title: "Documentación interna", description: "Guías, sistemas e instructivos claros." },
  { icon: Package, title: "Gestión de stock y vencimientos", description: "Control práctico de inventario y fechas críticas." },
  { icon: Users, title: "Relación con proveedores", description: "Coordinación eficiente con proveedores externos." },
  { icon: DollarSign, title: "Control de presupuesto", description: "Seguimiento simple de recursos financieros." },
  { icon: CheckCircle2, title: "Coordinación operativa", description: "Organización y comunicación diaria entre áreas." },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1, 160);

  return (
    <section
      ref={ref}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:translate-y-3"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
    >
      <h2
        className={`mb-10 text-center text-[#0E1A2B] transition-all duration-[240ms] md:mb-12 md:duration-[260ms] lg:mb-16 lg:text-left lg:duration-[280ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
          transitionDelay: "100ms",
        }}
      >
        Habilidades clave
      </h2>

      <div className="mb-12 grid grid-cols-1 gap-5 transition-all md:mb-16 md:grid-cols-2 md:gap-6 lg:mb-20 lg:gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.title}
              className={`flex h-full flex-col rounded-[12px] bg-white bg-opacity-40 p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.005] hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] md:p-[18px] md:duration-[190ms] md:hover:scale-[1.01] lg:p-5 lg:duration-[200ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5 md:translate-y-2"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                transitionDelay: `${140 + index * 30}ms`,
              }}
            >
              <Icon
                className="mb-3 h-7 w-7 text-[#5A6F55] md:mb-3.5 md:h-[30px] md:w-[30px] lg:mb-4 lg:h-8 lg:w-8"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-[#0E1A2B] md:mb-2.5 lg:mb-3">{skill.title}</h3>
              <p className="text-[#0E1A2B] opacity-70" style={{ lineHeight: "1.5" }}>
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>

      <p
        className={`accent-text text-center text-xl text-[#5A6F55] transition-all duration-[240ms] md:text-xl md:duration-[260ms] lg:text-2xl lg:duration-[280ms] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 md:translate-y-1.5"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
          transitionDelay: "460ms",
        }}
      >
        &quot;Procesos que se ordenan desde dentro&quot;
      </p>
    </section>
  );
}
