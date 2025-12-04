import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    tag: "Product Thinking + UX/UI",
    title: "HoyComo",
    description:
      "App para elegir comidas saludables según tiempo, hábitos y preferencias. Userflows, arquitectura, prototipado y validaciones UX.",
    image:
      "https://images.unsplash.com/photo-1758874960056-07aa3d0afa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGFwcHxlbnwxfHx8fDE3NjQ3OTg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tag: "Branding + Sistemas Visuales",
    title: "Pulso",
    description:
      "Identidad visual y sistema editorial para una marca creativa. Paleta cálida, composición editorial y diseño de piezas gráficas.",
    image:
      "https://images.unsplash.com/photo-1612569188757-48810e631c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGVkaXRvcmlhbCUyMGJyYW5kfGVufDF8fHx8MTc2NDc5ODQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tag: "Branding + Concept Retail",
    title: "Auro",
    description:
      "Identidad sensorial para tienda saludable premium. Dirección visual botánica, sistema editorial y estética para packaging y retail.",
    image:
      "https://images.unsplash.com/photo-1614461994835-9ab75c711dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjByZXRhaWwlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjQ3OTg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProjectsGrid() {
  const { ref, isVisible } = useScrollAnimation(0.1, 320);

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
        Más proyectos
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex h-full flex-col rounded-[12px] bg-white bg-opacity-50 p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] hover:-translate-y-0.5 hover:scale-[1.005] hover:shadow-[0px_6px_20px_0px_rgba(0,0,0,0.08)] md:p-[18px] md:duration-[190ms] md:hover:scale-[1.01] lg:p-5 lg:duration-[200ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5 md:translate-y-2"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
              transitionDelay: `${140 + index * 60}ms`,
            }}
          >
            <div className="mb-5 h-[180px] w-full overflow-hidden rounded-[12px] transition-all duration-[180ms] hover:scale-[1.005] md:mb-[22px] md:h-[190px] md:duration-[190ms] md:hover:scale-[1.01] lg:mb-6 lg:h-[200px] lg:duration-[200ms]" style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}>
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms]"
                style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
              />
            </div>
            <span className="mb-3 inline-block text-xs uppercase tracking-wide text-[#8FAF8A] md:mb-4 md:text-sm">
              {project.tag}
            </span>
            <h3 className="mb-3 text-[#0E1A2B] md:mb-4">{project.title}</h3>
            <p className="mb-5 flex-1 text-[#0E1A2B] opacity-80 md:mb-6" style={{ lineHeight: "1.5" }}>
              {project.description}
            </p>
            <button className="rounded-full border border-[#E3C08B] px-5 py-2 text-sm text-[#0E1A2B] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] md:px-6 md:duration-[170ms] md:hover:scale-[1.015] lg:duration-[180ms]" style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}>
              Ver proyecto
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
