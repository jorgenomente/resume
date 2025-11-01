"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Card } from "./_components/Card";
import { Badge } from "./_components/Badge";
import { SectionTitle, SectionWrap } from "./_components/Section";
import { TimelineItem } from "./_components/TimelineItem";
import { education, experience, profile, skills } from "./data";

type Html2PdfType = typeof import("html2pdf.js")["default"];

export default function JorgePage() {
  const html2pdfRef = useRef<Html2PdfType | null>(null);

  const loadHtml2Pdf = useCallback(async () => {
    if (html2pdfRef.current) return html2pdfRef.current;

    const pdfModule = await import("html2pdf.js");
    const instance = (pdfModule.default ?? pdfModule) as Html2PdfType;
    html2pdfRef.current = instance;
    return instance;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    void loadHtml2Pdf().catch((error) => {
      console.error("No se pudo precargar html2pdf.js", error);
    });
  }, [loadHtml2Pdf]);

  const handleDownload = useCallback(async () => {
    if (typeof window === "undefined") return;
    const element = document.getElementById("jorge-cv");
    if (!element) return;

    try {
      const html2pdf = await loadHtml2Pdf();
      document.body.classList.add("jorge-print");
      // Espera dos frames para permitir que el DOM aplique los estilos de impresión antes de renderizar.
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => resolve());
        });
      });

      const options = {
        margin: 0,
        filename: "jorge-pulido-cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          dpi: 192,
          backgroundColor: "#ffffff",
          letterRendering: true,
        },
        jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] as const },
      };

      await html2pdf().set(options).from(element).save();
    } catch (error) {
      console.error("No se pudo generar el PDF", error);
    } finally {
      document.body.classList.remove("jorge-print");
    }
  }, [loadHtml2Pdf]);

  return (
    <main id="jorge-cv" className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 sm:px-6">
      <div className="relative pt-6 sm:pt-8">
        <button type="button" className="jorge-button jorge-button--floating" onClick={handleDownload}>
          Descargar CV (PDF)
        </button>
        <header
          className="jorge-header overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
          style={{
            background:
              "linear-gradient(140deg, rgba(23,59,63,0.6), rgba(184,110,72,0.35) 45%, rgba(12,20,21,0.78))",
          }}
        >
          <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">{profile.location}</div>
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  <span className="jorge-gradient-text">{profile.name}</span>
                </h1>
                <p className="text-lg text-white/80">{profile.role}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {profile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-1 text-white/70 sm:text-right">
                  <a href="mailto:jorgenomente@gmail.com" className="transition-colors hover:text-white">
                    jorgenomente@gmail.com
                  </a>
                  <a href="tel:+541127725677" className="transition-colors hover:text-white">
                    +54 11 2772 5677
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/20 jorge-ring sm:h-32 sm:w-32 md:h-36 md:w-36">
              <Image
                src="/propic.png"
                alt="Foto de Jorge Pulido"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                priority
                unoptimized
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </header>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="md:col-span-2">
          <SectionWrap>
            <SectionTitle>Perfil</SectionTitle>
            <p className="text-white/85 leading-relaxed">{profile.summary}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge>💼 Gestión operativa</Badge>
              <Badge>⚙️ IA aplicada</Badge>
              <Badge>📊 Optimización de procesos</Badge>
              <Badge>🎯 Marketing Digital</Badge>
            </div>
          </SectionWrap>
        </Card>

        <Card>
          <SectionWrap>
            <SectionTitle>Habilidades</SectionTitle>
            <div className="space-y-4">
              <div>
                <h3 className="mb-1 text-sm font-medium text-white/90">💼 Habilidades Profesionales</h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
                  {skills.profesionales.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <h3 className="mb-1 text-sm font-medium text-white/90">⚙️ Tecnología e Inteligencia Artificial</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm text-white/80 sm:pl-5">
                  {skills.tecnologia.map((techSkill) => (
                    <li key={techSkill}>{techSkill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-sm font-medium text-white/90">🤝 Habilidades Personales</h3>
                <ul className="list-disc space-y-1 pl-5 text-sm text-white/80">
                  {skills.personales.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionWrap>
        </Card>

        <Card className="md:col-span-2">
          <SectionWrap>
            <SectionTitle>Experiencia</SectionTitle>
            <div className="space-y-5">
              {experience.map((item) => (
                <TimelineItem
                  key={`${item.company}-${item.role}`}
                  title={item.company}
                  subtitle={item.role}
                  period={item.period}
                  points={item.points}
                  highlight={item.highlight}
                />
              ))}
            </div>
          </SectionWrap>
        </Card>

        <Card>
          <SectionWrap>
            <SectionTitle>Educación</SectionTitle>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={`${item.school}-${item.title}`} className="border-b border-white/15 pb-3 last:border-0">
                  <h3 className="font-medium text-white/95">{item.school}</h3>
                  <p className="text-sm text-white/75">{item.title}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionWrap>
        </Card>
      </div>

      <footer className="pb-4 text-center text-xs text-white/50">
        Hecho con Next.js + Tailwind — Acentos <span className="text-[#173B3F]">azul petróleo</span> y{" "}
        <span className="text-[#B86E48]">cobre</span>.
      </footer>
    </main>
  );
}
