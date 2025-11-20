import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  tagColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    tag: "UX/UI Design",
    title: "HoyComo",
    description: "App de alimentación saludable. Arquitectura de información, UI design y contenido editorial.",
    image: "https://images.unsplash.com/photo-1685810332449-22666f83adf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGFwcCUyMGRlc2lnbnxlbnwxfHx8fDE3NjM2NDM3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "bg-[var(--sage)]"
  },
  {
    id: 2,
    tag: "UX Research & Redesign",
    title: "GeStock",
    description: "Rediseño UX/UI basado en operaciones reales de tienda: pagos, proveedores, carga y control.",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzY0MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "bg-[var(--sand)]"
  },
  {
    id: 3,
    tag: "Visual Identity",
    title: "AURA",
    description: "Identidad visual para tienda saludable. Moodboard, concepto y diseño visual.",
    image: "https://images.unsplash.com/photo-1727755868081-c25d2b427ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmRpbmclMjBpZGVudGl0eXxlbnwxfHx8fDE3NjM1ODEzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tagColor: "bg-[var(--sage)]"
  }
];

export default function ProjectCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const handleViewProject = (projectId: number) => {
    console.log(`View project ${projectId}`);
  };

  const getSlideStyle = (index: number) => {
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

    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div className="relative w-full py-8">
      {/* Carousel Container */}
      <div
        className="relative h-[600px] md:h-[650px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute top-0 left-1/2 w-[85%] md:w-[60%] lg:w-[50%] -translate-x-1/2"
            style={getSlideStyle(index)}
          >
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
              {/* Project Image */}
              <div className="aspect-[16/10] w-full overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 md:p-10 space-y-6">
                {/* Tag */}
                <div className="inline-block">
                  <span
                    className={`px-4 py-1.5 ${project.tagColor} text-[var(--dark-gray)] rounded-full text-sm`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl">{project.title}</h3>

                {/* Description */}
                <p className="text-base md:text-lg text-[var(--warm-gray)] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => handleViewProject(project.id)}
                  variant="outline"
                  className="border-[var(--dark-gray)] text-[var(--dark-gray)] hover:bg-[var(--beige)] rounded-full px-8 py-5 mt-2"
                >
                  Ver proyecto
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-[var(--dark-gray)]" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-[var(--dark-gray)]" />
      </button>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 h-2 bg-[var(--dark-gray)]'
                : 'w-2 h-2 bg-[var(--dark-gray)]/30 hover:bg-[var(--dark-gray)]/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
