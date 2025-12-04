import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "CV — Jorge Pulido",
  description: "Perfil, experiencia, educación y habilidades de Jorge Pulido.",
};

export default function JorgeLayout({ children }: { children: ReactNode }) {
  return (
    <section className="jorge-theme">
      <div className="jorge-wrapper">{children}</div>
    </section>
  );
}
