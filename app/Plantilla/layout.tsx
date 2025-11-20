import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "CV — Persona",
  description: "Perfil, experiencia, educación y habilidades de la persona.",
};

export default function PlantillaLayout({ children }: { children: ReactNode }) {
  return (
    <section className="plantilla-theme">
      <div className="plantilla-wrapper">{children}</div>
    </section>
  );
}
