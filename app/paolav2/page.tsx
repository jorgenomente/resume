"use client";

import { useCallback, useRef } from "react";
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

type Html2PdfType = typeof import("html2pdf.js")["default"];

export default function Paolav2Page() {
  const html2pdfRef = useRef<Html2PdfType | null>(null);

  const loadHtml2Pdf = useCallback(async () => {
    if (html2pdfRef.current) return html2pdfRef.current;
    const pdfModule = await import("html2pdf.js");
    const instance = (pdfModule.default ?? pdfModule) as Html2PdfType;
    html2pdfRef.current = instance;
    return instance;
  }, []);

  const handleDownload = useCallback(async () => {
    const element = document.getElementById("paolav2-page");
    if (!element) return;

    try {
      const html2pdf = await loadHtml2Pdf();
      const options = {
        margin: 0,
        filename: "cv-paolav2.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] as const },
      };

      await html2pdf().set(options).from(element).save();
    } catch (error) {
      console.error("No se pudo generar el PDF", error);
    }
  }, [loadHtml2Pdf]);

  const handleViewProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const heroImage =
    "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzYyOTkxNHww&ixlib=rb-4.1.0&q=80&w=1200";

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
              <h2 className="text-xl text-[var(--warm-gray)] md:text-2xl">Diseñadora UX/UI & Estratega Digital</h2>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-[var(--warm-gray)]">
              Combino diseño, sistemas y experiencia real en operaciones. Entiendo cómo funciona un negocio desde
              adentro —proveedores, stock, presupuesto, atención al público— y uso ese enfoque práctico para diseñar
              soluciones simples y funcionales.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={handleViewProjects}
                className="rounded-full bg-[var(--dark-gray)] px-8 py-6 text-white shadow-[0_4px_16px_rgb(0,0,0,0.1)] transition hover:bg-[var(--dark-gray)]/90"
              >
                Ver proyectos
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 rounded-full border border-[var(--dark-gray)] px-8 py-6 text-[var(--dark-gray)] transition hover:bg-[var(--beige)]"
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
                  { icon: Palette, title: "Diseño UX/UI, prototipos y UI", text: "Interfaces funcionales y visuales" },
                  { icon: LayoutGrid, title: "Arquitectura de información", text: "Organización clara y navegable" },
                  { icon: FileText, title: "Análisis y mejora de procesos", text: "Optimización operativa" },
                  { icon: Archive, title: "Documentación y orden interno", text: "Sistemas claros y escalables" },
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
                  { icon: Users, title: "Seguimiento de proveedores", text: "Coordinación y relaciones" },
                  { icon: DollarSign, title: "Control de presupuesto", text: "Administración financiera" },
                  {
                    icon: MessageCircle,
                    title: "Atención al cliente y coordinación operativa",
                    text: "Gestión de equipos y comunicación",
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

      {/* Projects */}
      <section id="projects" className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl md:text-4xl">Proyectos seleccionados</h2>
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
                      src={heroImage}
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
                En este archivo vas a encontrar mi recorrido completo: experiencia en atención al público, gestión de
                stock y vencimientos, proveedores, administración y coordinación de equipos; además de mi camino en
                diseño, sistemas y organización.
              </p>
              <p className="text-base leading-relaxed text-[var(--warm-gray)] md:text-lg">
                Todo en un solo lugar, claro y ordenado.
              </p>
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex w-72 items-center justify-center gap-2 rounded-full bg-[var(--dark-gray)] px-10 py-6 text-white shadow-[0_4px_16px_rgb(0,0,0,0.12)] transition hover:bg-[var(--dark-gray)]/90 hover:shadow-[0_6px_20px_rgb(0,0,0,0.16)]"
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
            Estoy creando proyectos, aprendiendo y trabajando en diseño, sistemas y operaciones. Si querés que
            colaboremos, te leo.
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
          <p className="text-sm text-[var(--warm-gray)]">© 2024 Paola Zerpa. Diseñadora UX/UI & Estratega Digital.</p>
        </div>
      </footer>
    </div>
  );
}
