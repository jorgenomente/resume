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
  const colorMixFallback = useRef("rgba(161, 161, 161, 0.5)");

  const loadHtml2Pdf = useCallback(async () => {
    if (html2pdfRef.current) return html2pdfRef.current;

    const pdfModule = await import("html2pdf.js");
    const instance = (pdfModule.default ?? pdfModule) as Html2PdfType;
    html2pdfRef.current = instance;
    return instance;
  }, []);

  const removeUnsupportedColorMix = useCallback((doc: Document) => {
    const replacement = colorMixFallback.current;
    const sanitizeValue = (value: string) =>
      value.replace(/color-mix\([^)]*\)/g, replacement).replace(/\bin oklab\b/g, "in srgb");

    const sanitizeNode = (node: Element) => {
      const style = node.getAttribute("style");
      if (style && (style.includes("color-mix(") || style.includes(" in oklab"))) {
        node.setAttribute("style", sanitizeValue(style));
      }
    };

    doc.querySelectorAll("style").forEach((styleEl) => {
      const cssText = styleEl.textContent;
      if (!cssText || (!cssText.includes("color-mix(") && !cssText.includes(" in oklab"))) return;
      styleEl.textContent = sanitizeValue(cssText);
    });

    doc.querySelectorAll<HTMLElement>("[style]").forEach(sanitizeNode);

    const sanitizeCssRules = (rules: CSSRuleList | undefined) => {
      if (!rules) return;
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        if (!rule) continue;

        if ("style" in rule && rule.style) {
          const styleDecl = rule.style as CSSStyleDeclaration;
          for (let j = 0; j < styleDecl.length; j++) {
            const property = styleDecl.item(j);
            if (!property) continue;
            const value = styleDecl.getPropertyValue(property);
            if (value.includes("color-mix(") || value.includes(" in oklab")) {
              const priority = styleDecl.getPropertyPriority(property);
              styleDecl.setProperty(property, sanitizeValue(value), priority);
            }
          }
        }

        if ("cssRules" in rule) {
          sanitizeCssRules((rule as CSSGroupingRule).cssRules);
        }
      }
    };

    Array.from(doc.styleSheets || []).forEach((sheet) => {
      const cssSheet = sheet as CSSStyleSheet;
      try {
        if (!("cssRules" in cssSheet)) return;
        sanitizeCssRules(cssSheet.cssRules);
      } catch (error) {
        // Algunas hojas de estilo externas pueden no ser accesibles; las ignoramos.
      }
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    removeUnsupportedColorMix(document);

    void loadHtml2Pdf().catch((error) => {
      console.error("No se pudo precargar html2pdf.js", error);
    });
  }, [loadHtml2Pdf, removeUnsupportedColorMix]);

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
          onclone: (doc: Document) => {
            try {
              removeUnsupportedColorMix(doc);
            } catch (error) {
              console.warn("No se pudieron sanitizar las funciones color-mix", error);
            }
          },
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
  }, [loadHtml2Pdf, removeUnsupportedColorMix]);

  return (
    <main id="jorge-cv" className="flex w-full flex-col gap-8 pt-2 sm:pt-4">
      <header className="jorge-header">
        <div className="relative flex flex-col gap-6 p-7 pt-12 sm:p-8 sm:pt-14 md:flex-row md:items-center md:gap-10">
          <div className="flex flex-1 flex-col gap-6">
            <div className="space-y-3">
              <p className="text-sm text-[color:var(--text-dim)]">{profile.meta}</p>
              <h1 className="text-4xl font-semibold text-[color:var(--ink-100)] md:text-5xl">{profile.name}</h1>
              <p className="text-lg text-[color:var(--ink-300)] md:text-xl">{profile.role}</p>
              <p className="text-sm font-medium text-[color:var(--ink-100)] opacity-80 md:text-base">{profile.descriptor}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="jorge-button jorge-button--secondary"
                >
                  {link.label}
                </a>
              ))}
              <a href="/CV%20-%20Jorge%20Pulido.pdf" download="CV - Jorge Pulido.pdf" className="jorge-button">
                Descargar CV
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:jorgenomente@gmail.com"
                className="flex items-center gap-2 text-[color:var(--ink-100)] transition-colors hover:text-[color:var(--ink-300)]"
              >
                <span aria-hidden="true">📧</span>
                <span>jorgenomente@gmail.com</span>
              </a>
              <a
                href="https://wa.me/541127725677"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[color:var(--ink-100)] transition-colors hover:text-[color:var(--ink-300)]"
              >
                <span aria-hidden="true">📞</span>
                <span>+54 11 2772 5677</span>
              </a>
            </div>
          </div>
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border border-[color:var(--ink-500)]/40 bg-[rgba(2,16,36,0.6)] jorge-ring sm:h-32 sm:w-32 md:h-40 md:w-40">
            <Image
              src="/propic.png"
              alt="Foto de Jorge Pulido"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 160px"
              priority
              unoptimized
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <Card className="md:col-span-2">
          <SectionWrap>
            <SectionTitle>Perfil</SectionTitle>
            <div className="jorge-divider mt-3 pt-4 space-y-4">
              <p className="leading-relaxed text-[color:var(--text-0)] opacity-90">{profile.summary}</p>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--ink-300)]">
                  Áreas destacadas
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge highlight>Servicio en salón</Badge>
                  <Badge>Manejo de tiempos &amp; alta demanda</Badge>
                  <Badge>Atención al cliente</Badge>
                  <Badge>Trabajo en equipo</Badge>
                  <Badge>Coordinación con cocina &amp; barra</Badge>
                </div>
              </div>
            </div>
          </SectionWrap>
        </Card>

        <Card>
          <SectionWrap>
            <SectionTitle>Experiencia</SectionTitle>
            <div className="jorge-divider mt-3 pt-4 space-y-5">
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
            <SectionTitle>Habilidades</SectionTitle>
            <div className="jorge-divider mt-3 pt-4 space-y-5">
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-300)]">
                  💼 Habilidades Profesionales
                </h3>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-[color:var(--text-0)] opacity-90 marker:text-[color:var(--ink-300)]">
                  {skills.profesionales.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-300)]">
                  ⚙️ Tecnología e Inteligencia Artificial
                </h3>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-[color:var(--text-0)] opacity-90 marker:text-[color:var(--ink-100)]">
                  {skills.tecnologia.map((techSkill) => (
                    <li key={techSkill}>{techSkill}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--ink-300)]">
                  🤝 Habilidades Personales
                </h3>
                <ul className="list-disc space-y-1.5 pl-5 text-sm text-[color:var(--text-0)] opacity-90 marker:text-[color:var(--ink-300)]">
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
            <SectionTitle>Educación</SectionTitle>
            <div className="jorge-divider mt-3 pt-4 space-y-5">
              {education.map((item) => (
                <div key={`${item.school}-${item.title}`} className="space-y-2">
                  <h3 className="text-base font-semibold text-[color:var(--ink-100)]">{item.school}</h3>
                  <p className="text-sm text-[color:var(--text-dim)]">{item.title}</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-[color:var(--text-0)] opacity-90 marker:text-[color:var(--ink-300)]">
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

      <footer className="pb-4 text-center text-xs text-[color:var(--text-dim)]">
        Paleta azul Jorge · #021024 · #052659 · #C1E8FF
      </footer>
    </main>
  );
}
