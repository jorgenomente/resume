export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  links?: PortfolioLink[];
};

export type PortfolioExperience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const portfolioProfile = {
  name: "Paola Zerpa",
  headline: "CV & Portfolio — Diseño de procesos y sistemas",
  role: "Diseñadora de procesos · UX/UI · Operaciones",
  location: "Argentina",
  summary:
    "Ordeno flujos, optimizo procesos y diseño sistemas simples de operar. Vengo de operaciones reales (proveedores, stock, presupuestos y coordinación) y traduzco esa experiencia en soluciones digitales claras, humanas y eficientes.",
  contact: {
    email: "paolazerpak@gmail.com",
    whatsapp: "https://wa.me/0000000000",
    linkedin: "https://www.linkedin.com",
  },
  resume: {
    href: "/CV - Paola Zerpa.pdf",
    filename: "CV - Paola Zerpa.pdf",
  },
} as const;

export const portfolioSkills: { title: string; items: string[] }[] = [
  {
    title: "Procesos y operaciones",
    items: [
      "Mapeo de procesos (AS-IS / TO-BE)",
      "Estandarización y documentación",
      "Indicadores, tableros y seguimiento",
      "Gestión de stock, vencimientos y proveedores",
    ],
  },
  {
    title: "Sistemas y producto",
    items: ["Arquitectura de información", "UX/UI (Figma)", "Prototipado y handoff", "Definición de flujos y reglas"],
  },
];

export const portfolioExperience: PortfolioExperience[] = [
  {
    role: "Operaciones & mejora de procesos",
    company: "Gastronomía / retail",
    period: "2021 — 2025",
    highlights: [
      "Orden de inventario, control de vencimientos y abastecimiento.",
      "Estandarización de tareas y checklists para equipos.",
      "Mejora de flujo de trabajo para reducir fricción y errores.",
    ],
  },
  {
    role: "Diseño UX/UI & sistemas internos",
    company: "Proyectos freelance",
    period: "2023 — 2025",
    highlights: [
      "Diseño de interfaces y flujos operativos (onboarding, pedidos, control).",
      "Documentación y guías simples para uso cotidiano.",
      "Prototipos navegables y entregables listos para desarrollo.",
    ],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Tablero de control de stock",
    description: "Un sistema simple para registrar movimientos, alertas de vencimiento y puntos de reposición.",
    tags: ["Procesos", "Operaciones", "Sistema"],
  },
  {
    title: "Flujo de pedidos a proveedores",
    description: "Estandarización del ciclo de compra: pedido → recepción → control → registro.",
    tags: ["Procesos", "Documentación"],
  },
  {
    title: "Plantilla de SOPs + checklists",
    description: "Kit de documentación para equipos: tareas diarias, roles, y auditoría rápida.",
    tags: ["Sistemas internos", "Escalabilidad"],
  },
];
