import { useRef, useState, type WheelEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    tag: "UX/UI & Systems Design",
    title: "Cosmic Studio",
    url: "https://cosmicst.dev",
    description:
      "Studio de diseño + sistemas. Identidad visual, sistema editorial, componentes reutilizables, paleta de color, UI Kit, flujos y sitio web.\n\nIncluye diseño, procesos y experiencia de cliente.",
    moodboardImage:
      "https://images.unsplash.com/photo-1760022638435-aad7c1e684b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0Nzk0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tag: "Product Design",
    title: "MiProveedor",
    url: "https://miproveedor.app",
    description:
      "Arquitectura de información, userflows y diseño de interfaz para plataforma B2B de gestión de clientes y proveedores. Enfoque en procesos claros y navegación eficiente.",
    moodboardImage:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJmYWNlJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc2NDc5NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tag: "UX/UI & Systems Design",
    title: "Nodux",
    url: "https://nodux1.vercel.app/demo",
    description:
      "Sistema interno de gestión de proveedores integrado con procesos reales de compras, stock y coordinación operativa. Diseño centrado en el flujo diario del equipo.",
    moodboardImage:
      "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBvcmdhbml6ZWQlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0Nzk0Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    tag: "Product Thinking + UX/UI",
    title: "HoyComo",
    downloadFile: "/HoyComo - app saludable.pdf",
    description:
      "App para elegir comidas saludables según tiempo, hábitos y preferencias. Userflows, arquitectura, prototipado y validaciones UX.",
    moodboardImage:
      "https://images.unsplash.com/photo-1758874960056-07aa3d0afa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGFwcHxlbnwxfHx8fDE3NjQ3OTg0OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProjectsCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.1, 240);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastWheelTimestamp = useRef(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const triggerDownload = (path: string, filename?: string) => {
    const link = document.createElement("a");
    link.href = encodeURI(path);
    if (filename) link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const now = performance.now();
    if (now - lastWheelTimestamp.current < 360) return;

    if (event.deltaX > 30) {
      nextSlide();
      lastWheelTimestamp.current = now;
    } else if (event.deltaX < -30) {
      prevSlide();
      lastWheelTimestamp.current = now;
    }
  };

  return (
    <section
      id="projects"
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
        Proyectos seleccionados
      </h2>

      <div className="relative p-0" onWheel={handleWheel}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.title} className="w-full flex-shrink-0 px-0 md:px-2 lg:px-4">
                <div
                  className="relative rounded-[12px] bg-white bg-opacity-50 p-6 shadow-[0px_2px_16px_0px_rgba(0,0,0,0.03)] md:p-8 lg:p-[52px]"
                  style={{ borderLeft: "3px solid #F47DCF" }}
                >
                  <div className="flex flex-col items-start gap-8 pt-[20px] pr-[120px] pb-0 pl-0 md:gap-10 lg:grid lg:grid-cols-[60%_40%] lg:gap-14">
                    <div>
                      <span className="mb-3 inline-block text-xs uppercase tracking-wide text-[#8FAF8A] md:mb-4 md:text-sm">
                        {project.tag}
                      </span>
                      <h2 className="mb-4 text-[#0E1A2B] md:mb-5 lg:mb-6">{project.title}</h2>
                      <p
                        className="mb-6 whitespace-pre-line text-[#0E1A2B] opacity-80 md:mb-7 lg:mb-8"
                        style={{ lineHeight: "1.5" }}
                      >
                        {project.description}
                      </p>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full border-2 border-[#E3C08B] px-6 py-2.5 text-[#0E1A2B] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] md:px-7 md:py-3 md:duration-[170ms] md:hover:scale-[1.015] lg:px-8 lg:py-3 lg:duration-[180ms]"
                          style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
                        >
                          Ver proyecto
                        </a>
                      ) : project.downloadFile ? (
                        <button
                          type="button"
                          onClick={() => triggerDownload(project.downloadFile, "HoyComo - app saludable.pdf")}
                          className="inline-block rounded-full border-2 border-[#E3C08B] px-6 py-2.5 text-[#0E1A2B] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-[#E3C08B] hover:bg-opacity-10 hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] md:px-7 md:py-3 md:duration-[170ms] md:hover:scale-[1.015] lg:px-8 lg:py-3 lg:duration-[180ms]"
                          style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
                        >
                          Ver proyecto
                        </button>
                      ) : (
                        <span
                          className="inline-block rounded-full border-2 border-[#E3C08B] px-6 py-2.5 text-[#0E1A2B] opacity-50 md:px-7 md:py-3 lg:px-8 lg:py-3"
                          style={{ cursor: "not-allowed" }}
                        >
                          Ver proyecto
                        </span>
                      )}
                    </div>

                    <div className="flex w-full justify-center lg:mx-[30px] lg:justify-end lg:pt-0 lg:pr-[-3px] lg:pb-0 lg:pl-0">
                      <div
                        className="w-full max-w-[320px] aspect-[4/3] overflow-hidden rounded-[12px] border border-[#E3C08B] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.02)] transition-all duration-[180ms] hover:scale-[1.005] hover:shadow-[0px_6px_14px_0px_rgba(0,0,0,0.08)] md:max-w-none md:duration-[190ms] md:hover:scale-[1.01] lg:max-w-[420px] lg:duration-[200ms]"
                        style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
                      >
                        <ImageWithFallback
                          src={project.moodboardImage}
                          alt={`${project.title} moodboard`}
                          className="h-full w-full object-cover transition-all duration-[280ms] md:duration-[320ms] lg:duration-[360ms]"
                          style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3 md:mt-7 md:gap-4 lg:mt-8">
          <button
            onClick={prevSlide}
            className="rounded-full bg-[#0E1A2B] p-2.5 text-[#F4EFE4] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] active:scale-[0.99] md:p-3 md:duration-[170ms] md:hover:scale-[1.015] lg:duration-[180ms]"
            style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-[#0E1A2B] p-2.5 text-[#F4EFE4] transition-all duration-[160ms] hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] active:scale-[0.99] md:p-3 md:duration-[170ms] md:hover:scale-[1.015] lg:duration-[180ms]"
            style={{ transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2 md:mt-6">
          {projects.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#F47DCF]" : "w-2 bg-[#5A6F55] opacity-30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
