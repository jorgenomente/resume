import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "Paola Zerpa — Portfolio",
  description: "Pagina independiente para Paola Zerpa.",
};

export default function PaolaZerpaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="paolazerpa-page">{children}</section>;
}
