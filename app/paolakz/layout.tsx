import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./styles.css";

export const metadata: Metadata = {
  title: "PaolaKZ — CV y proyectos",
  description:
    "Perfil de Paola Zerpa con experiencia en UX/UI, procesos y sistemas de trabajo.",
};

export default function PaolakzLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section className="paolakz-page min-h-screen bg-[#F4EFE4]">{children}</section>;
}
