"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Archive,
  DollarSign,
  FileDown,
  FileText,
  LayoutGrid,
  Mail,
  MessageCircle,
  Palette,
  ShoppingBag,
  Users,
} from "lucide-react";
import { ProjectCarousel } from "./components/ProjectCarousel";

export default function Paolav2Page() {
  const [downloadAnimationTarget, setDownloadAnimationTarget] = useState<null | "hero" | "cta">(null);
  // Use the browser timer handle so Next.js build types don’t mix Node’s Timeout
  const downloadAnimationTimeout = useRef<number | null>(null);

  const triggerDownloadAnimation = useCallback((target: "hero" | "cta") => {
    setDownloadAnimationTarget(target);

    if (downloadAnimationTimeout.current) {
      window.clearTimeout(downloadAnimationTimeout.current);
    }

    downloadAnimationTimeout.current = window.setTimeout(() => {
      setDownloadAnimationTarget(null);
    }, 220);
  }, []);

  useEffect(() => {
    return () => {
      if (downloadAnimationTimeout.current) {
        window.clearTimeout(downloadAnimationTimeout.current);
      }
    };
  }, []);

  const handleDownload = useCallback(
    (target: "hero" | "cta") => {
      triggerDownloadAnimation(target);

      const resumeUrl = encodeURI("/CV - Paola Zerpa.pdf");
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "CV - Paola Zerpa.pdf";
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
    },
    [triggerDownloadAnimation],
  );

  const scrollToProjects = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      document.getElementById("projects")?.scrollIntoView({ behavior, block: "start" });
    },
    [],
  );

  const handleViewProjects = useCallback(() => {
    const targetHash = "#projects";
    const newUrl = `${window.location.pathname}${window.location.search}${targetHash}`;
    window.history.replaceState(null, "", newUrl);
    scrollToProjects();
  }, [scrollToProjects]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") {
        scrollToProjects();
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToProjects]);

  const heroImage = "/IMG_7613.webp";
  const downloadImage = "/IMG_7622.jpeg";

  return (
    <div id="paolav2-page" className="min-h-screen bg-[var(--cream)] text-[var(--dark-gray)]">
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <div className="mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <Image
                src={heroImage}
                alt="Paola Zerpa"
                className="h-full w-full object-cover"
                width={960}
                height={1280}
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="order-1 space-y-6 md:order-2">
            <div className="space-y-3">
              <h1 className="text-4xl tracking-tight md:text-5xl lg:text-6xl">Paola Zerpa</h1>
              <h2 className="text-xl text-[var(--warm-gray)] md:text-2xl">Diseñadora de procesos y sistemas</h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[var(--warm-gray)]">
              Ordeno flujos, optimizo procesos y diseño sistemas que funcionan en la vida real. Vengo de operaciones
              reales —proveedores, stock, presupuestos, tareas diarias— y uso esa perspectiva para crear soluciones
              digitales claras, humanas y eficientes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={handleViewProjects}
                className="rounded-full bg-[var(--dark-gray)] px-8 py-6 text-white shadow-[0_4px_16px_rgb(0,0,0,0.1)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--dark-gray)]/92 hover:shadow-[0_8px_22px_rgb(0,0,0,0.16)]"
              >
                Ver proyectos
              </button>
              <button
                type="button"
                onClick={() => handleDownload("hero")}
                className={`flex items-center justify-center gap-2 rounded-full border border-[var(--dark-gray)] px-8 py-6 text-[var(--dark-gray)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--beige)] hover:shadow-[0_8px_22px_rgb(0,0,0,0.12)] ${downloadAnimationTarget === "hero" ? "paolav2-download-press" : ""}`}
              >
                <FileDown className="h-4 w-4" />
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[var(--beige)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Habilidades clave</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <div className="space-y-6">
                {[
                  {
                    icon: Palette,
                    title: "Diseño UX/UI y prototipos",
                    text: "Interfaces funcionales, limpias y orientadas a claridad.",
                  },
                  {
                    icon: LayoutGrid,
                    title: "Arquitectura de información",
                    text: "Estructuras navegables, rutas claras y contenidos organizados.",
                  },
                  {
                    icon: FileText,
                    title: "Análisis y mejora de procesos",
                    text: "Identificación de fricciones y optimización operativa.",
                  },
                  {
                    icon: Archive,
                    title: "Documentación y sistemas internos",
                    text: "Procedimientos claros, replicables y escalables.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="rounded-xl bg-[var(--sage)] p-3">
                      <Icon className="h-5 w-5 text-[var(--dark-gray)]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg text-[var(--dark-gray)]">{title}</h3>
                      <p className="text-sm text-[var(--warm-gray)]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
              <div className="space-y-6">
                {[
                  { icon: ShoppingBag, title: "Gestión de stock y vencimientos", text: "Control de inventario" },
                  {
                    icon: Users,
                    title: "Relación con proveedores",
                    text: "Coordinación, pedidos y comunicación fluida.",
                  },
                  {
                    icon: DollarSign,
                    title: "Control de presupuesto",
                    text: "Administración, proyección y seguimiento financiero.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Atención al cliente y coordinación operativa",
                    text: "Organización diaria, resolución de problemas y visión centrada en usuarios.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="rounded-xl bg-[var(--sand)] p-3">
                      <Icon className="h-5 w-5 text-[var(--dark-gray)]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg text-[var(--dark-gray)]">{title}</h3>
                      <p className="text-sm text-[var(--warm-gray)]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro editorial */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg text-[var(--warm-gray)]">Procesos que se ordenan desde dentro.</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Proyectos seleccionados</h2>
          <p className="-mt-6 mb-10 text-center text-lg leading-relaxed text-[var(--warm-gray)]">
            Trabajo en la intersección entre procesos reales, experiencia de usuario y sistemas digitales. Estos son
            algunos de mis proyectos recientes:
          </p>
          <ProjectCarousel />
        </div>
      </section>

      {/* Download */}
      <section className="bg-[var(--beige)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-[32px] bg-white p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <div className="-mt-20 mb-8 flex justify-center">
              <div className="relative">
                <div className="h-32 w-32 rounded-full bg-[var(--beige)] p-1.5 shadow-[0_0_0_8px_rgba(255,255,255,0.8),0_8px_24px_rgb(0,0,0,0.08)] md:h-36 md:w-36">
                  <div className="h-full w-full overflow-hidden rounded-full ring-2 ring-white/50">
                    <Image
                      src={downloadImage}
                      alt="Paola Zerpa"
                      className="h-full w-full object-cover"
                      width={360}
                      height={360}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-center">
              <h2 className="text-2xl md:text-3xl">Descargar CV completo</h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--warm-gray)] md:text-lg">
                En mi recorrido vas a encontrar experiencia en:
              </p>
              <ul className="mx-auto max-w-xl list-disc space-y-2 pl-6 text-left text-base leading-relaxed text-[var(--warm-gray)] md:text-lg">
                <li>Atención al público</li>
                <li>Gestión de stock y vencimientos</li>
                <li>Administración y coordinación</li>
                <li>Relación con proveedores</li>
                <li>Documentación interna</li>
                <li>UX/UI Design</li>
                <li>Arquitectura de información</li>
                <li>Diseño de procesos y sistemas</li>
              </ul>
              <p className="text-base leading-relaxed text-[var(--warm-gray)] md:text-lg">
                Trabajo desde un enfoque práctico y estructurado: combinar diseño, sistemas y experiencia real para
                crear soluciones claras, funcionales y humanas. Todo en un solo lugar, ordenado y fácil de revisar.
              </p>
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={() => handleDownload("cta")}
                  className={`flex w-72 items-center justify-center gap-2 rounded-full bg-[var(--dark-gray)] px-10 py-6 text-white shadow-[0_4px_16px_rgb(0,0,0,0.12)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--dark-gray)]/92 hover:shadow-[0_8px_28px_rgb(0,0,0,0.16)] ${downloadAnimationTarget === "cta" ? "paolav2-download-press" : ""}`}
                >
                  <FileDown className="h-5 w-5" />
                  Descargar CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl md:text-4xl">¿Charlamos?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[var(--warm-gray)]">
            Estoy trabajando en UX/UI, sistemas y procesos. Si tenés una idea, un proyecto o querés conversar sobre
            cómo mejorar flujos internos, te leo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => (window.location.href = "mailto:correo@ejemplo.com")}
              className="flex items-center justify-center gap-2 rounded-full bg-[var(--dark-gray)] px-10 py-6 text-white shadow-[0_4px_16px_rgb(0,0,0,0.1)] transition hover:bg-[var(--dark-gray)]/90"
            >
              <Mail className="h-5 w-5" />
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--sand)] px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-2 text-lg text-[var(--warm-gray)]">
            Somos formas en movimiento, diseñando nuestra luz desde dentro.*
          </p>
          <p className="text-sm text-[var(--warm-gray)]">© 2024 Paola Zerpa. Diseñadora de procesos y sistemas.</p>
        </div>
      </footer>
    </div>
  );
}
