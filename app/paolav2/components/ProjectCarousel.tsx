"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  tagColor: "sage" | "sand";
};

const projects: Project[] = [
  {
    id: 1,
    tag: "UX/UI & Systems Design",
    title: "Cosmic Studio",
    description:
      "Experiencias digitales que integran UX/UI, procesos y desarrollo. Sistemas claros, interfaces intuitivas y documentación funcional para equipos reales.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    tagColor: "sage",
  },
  {
    id: 2,
    tag: "Product Design",
    title: "MiProveedor",
    description:
      "Plataforma B2B para pedidos, remitos y pagos. Arquitectura, userflows, UI Kit e identidad editorial para un sistema claro y escalable.",
    image:
      "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzY0MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "sand",
  },
  {
    id: 3,
    tag: "UX/UI & Process Design",
    title: "Nodux",
    description:
      "Sistema interno para proveedores y administración. Mapeo real de workflows, optimización de procesos y UI funcional para operación diaria.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    tagColor: "sand",
  },
  {
    id: 4,
    tag: "Visual Identity & Retail UX",
    title: "AURO",
    description:
      "Identidad visual y dirección de arte para tienda saludable premium. Branding, storytelling, e-commerce y experiencia en local físico.",
    image:
      "https://images.unsplash.com/photo-1727755868081-c25d2b427ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmRpbmclMjBpZGVudGl0eXxlbnwxfHx8fDE3NjM1ODEzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "sand",
  },
  {
    id: 5,
    tag: "UX/UI Design",
    title: "HoyComo",
    description:
      "App de alimentación saludable. Investigación, arquitectura de información, UI Design y contenido editorial.",
    image:
      "https://images.unsplash.com/photo-1685810332449-22666f83adf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM2NDM3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "sage",
  },
  {
    id: 6,
    tag: "Brand & Editorial Design",
    title: "Pulso",
    description:
      "Identidad visual y narrativa para libretas de journaling. Paleta, sistema editorial, portadas y prototipos físico–digital.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tagColor: "sand",
  },
  {
    id: 7,
    tag: "UX/UI for Finance",
    title: "Pew",
    description:
      "Diseño de arquitectura, userflows, wireframes, UI y microcopy emocional para finanzas personales y compartidas.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tagColor: "sage",
  },
];

export function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelLockedRef = useRef(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const handleWheel = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      const deltaX = event.deltaX;
      if (Math.abs(deltaX) < 15) return; // ignore vertical or tiny scroll

      event.preventDefault();
      if (wheelLockedRef.current) return;
      wheelLockedRef.current = true;

      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      wheelTimeoutRef.current = setTimeout(() => {
        wheelLockedRef.current = false;
      }, 400);
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    return () => {
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full py-8" onWheel={handleWheel}>
      <div className="relative h-[720px] md:h-[760px] overflow-hidden">
        {projects.map((project, index) => {
          const diff = index - currentSlide;
          const isActive = diff === 0;
          const isPrev = diff === -1 || (currentSlide === 0 && index === projects.length - 1);
          const isNext = diff === 1 || (currentSlide === projects.length - 1 && index === 0);

          let translateX = 0;
          let scale = 0.9;
          let opacity = 0.5;
          let zIndex = 0;

          if (isActive) {
            translateX = 0;
            scale = 1;
            opacity = 1;
            zIndex = 10;
          } else if (isPrev) {
            translateX = -85;
            scale = 0.9;
            opacity = 0.6;
            zIndex = 5;
          } else if (isNext) {
            translateX = 85;
            scale = 0.9;
            opacity = 0.6;
            zIndex = 5;
          } else {
            opacity = 0;
            scale = 0.8;
            zIndex = 0;
          }

          return (
            <div
              key={project.id}
              className="absolute top-0 left-1/2 w-[85%] md:w-[60%] lg:w-[50%] -translate-x-1/2"
              style={{
                transform: `translateX(${translateX}%) scale(${scale})`,
                opacity,
                zIndex,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-6 p-8 md:p-10">
                  <div className="inline-block">
                    <span
                      className={`px-4 py-1.5 rounded-full text-sm text-[var(--dark-gray)] ${
                        project.tagColor === "sage" ? "bg-[var(--sage)]" : "bg-[var(--sand)]"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-[var(--dark-gray)]">{project.title}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-[var(--warm-gray)]">
                    {project.description}
                  </p>

                  <button
                    className="mt-2 rounded-full border border-[var(--dark-gray)] px-8 py-5 text-[var(--dark-gray)] transition-colors hover:bg-[var(--beige)]"
                    type="button"
                  >
                    Ver proyecto
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6 text-[var(--dark-gray)]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6 text-[var(--dark-gray)]" />
      </button>

      <div className="mt-12 flex items-center justify-center gap-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "h-2 w-6 bg-[var(--dark-gray)]"
                : "h-2 w-2 bg-[var(--dark-gray)]/30 hover:bg-[var(--dark-gray)]/50"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
