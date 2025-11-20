export const profile = {
  name: "Nombre Apellido",
  role: "Título profesional o rol deseado",
  meta: "Ciudad, País · Idiomas",
  descriptor: "3-4 etiquetas clave del perfil",
  summary:
    "Breve resumen (4-5 líneas) que combine trayectoria, enfoque y propuesta de valor. Incluí logros concretos, tecnologías o metodologías que uses, y el tipo de impacto que buscás generar.",
  location: "Ubicación",
  links: [
    { label: "Instagram", href: "https://instagram.com/usuario" },
    // { label: "LinkedIn", href: "" },
    // { label: "Portafolio", href: "" },
  ],
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  points: string[];
  highlight?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Empresa / Proyecto",
    role: "Rol o cargo",
    period: "Año – Año",
    points: [
      "Logro o responsabilidad destacada 1.",
      "Logro o responsabilidad destacada 2 (incluí métricas si es posible).",
      "Logro o responsabilidad destacada 3.",
      "Logro o responsabilidad destacada 4.",
    ],
    highlight: true,
  },
  {
    company: "Empresa / Proyecto",
    role: "Rol o cargo",
    period: "Año – Año",
    points: [
      "Logro o responsabilidad 1.",
      "Logro o responsabilidad 2.",
      "Logro o responsabilidad 3.",
    ],
  },
  {
    company: "Empresa / Proyecto",
    role: "Rol o cargo",
    period: "Año – Año",
    points: [
      "Logro o responsabilidad 1.",
      "Logro o responsabilidad 2.",
    ],
  },
];

export const education = [
  {
    school: "Institución",
    title: "Título o programa",
    details: [
      "Detalle o foco 1.",
      "Detalle o foco 2.",
      "Detalle o foco 3 (opcional).",
    ],
  },
  {
    school: "Institución",
    title: "Certificación / Curso",
    details: ["Detalle 1.", "Detalle 2 (opcional)."],
  },
];

export const skills = {
  profesionales: [
    "Habilidad profesional 1",
    "Habilidad profesional 2",
    "Habilidad profesional 3",
    "Habilidad profesional 4",
    "Habilidad profesional 5",
  ],
  tecnologia: [
    "Tecnología o stack 1",
    "Tecnología o stack 2",
    "Tecnología o stack 3",
    "Tecnología o stack 4",
  ],
  personales: [
    "Habilidad blanda 1",
    "Habilidad blanda 2",
    "Habilidad blanda 3",
  ],
};
