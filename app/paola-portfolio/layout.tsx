import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "Paola Zerpa — Portfolio",
  description: "CV y portfolio de Paola Zerpa (procesos, UX/UI y operaciones).",
};

export default function PaolaPortfolioLayout({ children }: { children: ReactNode }) {
  return <section className="paola-portfolio-page">{children}</section>;
}
