import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "CV — Paola V2",
  description: "Perfil, experiencia, educación y habilidades de Paola.",
};

export default function Paolav2Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-[var(--cream)] text-[var(--dark-gray)]">
      {children}
    </section>
  );
}
