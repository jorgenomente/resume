import { Figma, Layout, TrendingUp, FileText, Package, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1, 160);

  const skills = [
    {
      icon: Figma,
      title: 'UX/UI y prototipos',
      description: 'Interfaces claras y funcionales centradas en el usuario.'
    },
    {
      icon: Layout,
      title: 'Arquitectura de información',
      description: 'Estructuras y flujos eficientes para equipos.'
    },
    {
      icon: TrendingUp,
      title: 'Mejora de procesos',
      description: 'Optimización de tareas y operaciones diarias.'
    },
    {
      icon: FileText,
      title: 'Documentación interna',
      description: 'Guías, sistemas e instructivos claros.'
    },
    {
      icon: Package,
      title: 'Gestión de stock y vencimientos',
      description: 'Control práctico de inventario y fechas críticas.'
    },
    {
      icon: Users,
      title: 'Relación con proveedores',
      description: 'Coordinación eficiente con proveedores externos.'
    },
    {
      icon: DollarSign,
      title: 'Control de presupuesto',
      description: 'Seguimiento simple de recursos financieros.'
    },
    {
      icon: CheckCircle2,
      title: 'Coordinación operativa',
      description: 'Organización y comunicación diaria entre áreas.'
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full max-w-[1440px] mx-auto px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-32 transition-all duration-[280ms] md:duration-[320ms] lg:duration-[340ms] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 md:translate-y-3'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)' }}
    >
      <h2 
        className={`text-[#0E1A2B] mb-10 md:mb-12 lg:mb-16 text-center transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
        }`}
        style={{ 
          transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
          transitionDelay: '100ms'
        }}
      >
        Habilidades clave
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className={`bg-white bg-opacity-40 rounded-[12px] p-4 md:p-4.5 lg:p-5 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] md:duration-[190ms] lg:duration-[200ms] hover:-translate-y-0.5 hover:scale-[1.005] md:hover:scale-[1.01] hover:shadow-[0px_6px_16px_0px_rgba(0,0,0,0.08)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5 md:translate-y-2'
              }`}
              style={{ 
                transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
                transitionDelay: `${140 + index * 30}ms`
              }}
            >
              <Icon className="w-7 h-7 md:w-7.5 md:h-7.5 lg:w-8 lg:h-8 text-[#5A6F55] mb-3 md:mb-3.5 lg:mb-4" strokeWidth={1.5} />
              <h3 className="text-[#0E1A2B] mb-2 md:mb-2.5 lg:mb-3">{skill.title}</h3>
              <p className="text-[#0E1A2B] opacity-70" style={{ lineHeight: '1.5' }}>{skill.description}</p>
            </div>
          );
        })}
      </div>

      <p 
        className={`text-center text-[#5A6F55] accent-text text-xl md:text-xl lg:text-2xl transition-all duration-[240ms] md:duration-[260ms] lg:duration-[280ms] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 md:translate-y-1.5'
        }`}
        style={{ 
          transitionTimingFunction: 'cubic-bezier(.16,1,.3,1)',
          transitionDelay: '460ms'
        }}
      >
        "Procesos que se ordenan desde dentro"
      </p>
    </section>
  );
}