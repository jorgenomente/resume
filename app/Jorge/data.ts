export const profile = {
  name: "Jorge Pulido",
  role: "Estudiante de Marketing Digital",
  meta: "Buenos Aires, Argentina · Inglés avanzado",
  descriptor: "Ventas · Operaciones · IA aplicada a procesos",
  summary:
    "Profesional en formación que combina gestión operativa, ventas y marketing digital con el uso estratégico de la Inteligencia Artificial para optimizar procesos y crear soluciones digitales escalables. Co-creador del sistema GeStock, una plataforma desarrollada con IA para la gestión de stock, proveedores y pagos. Me destaco por mi enfoque analítico, capacidad de organización y visión tecnológica aplicada a la mejora continua.",
  location: "Buenos Aires, Argentina",
  links: [
    { label: "Instagram", href: "https://instagram.com/jorgenomente" },
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
    company: "Tienda Nova Caballito",
    role: "Coordinador de Ventas y Operaciones",
    period: "2023 – Actualidad",
    points: [
      "Organización de pedidos, control de stock y coordinación con proveedores.",
      "Implementación de GeStock, sistema de gestión interna asistido por IA para automatizar pedidos, vencimientos y pagos.",
      "Análisis de datos operativos para mejorar tiempos y reducir errores.",
      "Comunicación con clientes y optimización de la experiencia en tienda.",
    ],
  },
  {
    company: "Proyecto GeStock / GeStock Multitenant",
    role: "Co-diseñador y Gestor Operativo del Sistema",
    period: "2024 – Actualidad",
    points: [
      "Desarrollo de un sistema integral para la gestión de proveedores, pagos y stock con Next.js, Supabase y Prisma, integrando IA en el diseño UX/UI, documentación y automatización de procesos.",
      "Diseño de arquitectura multi-tenant y base de datos relacional.",
      "Creación de interfaces funcionales asistidas por Figma AI y ChatGPT.",
      "Optimización de políticas RLS y flujos de aprobación automatizados.",
      "Documentación interactiva y uso de prompts técnicos para desarrollo.",
    ],
  },
  {
    company: "Lionbridge, INC.",
    role: "Intérprete Inglés – Español",
    period: "2021 – Presente",
    points: [
      "Interpretación telefónica para clientes en Estados Unidos.",
      "Facilitación de comunicación efectiva entre hablantes de inglés y español.",
      "Precisión lingüística y sensibilidad cultural en diversos contextos.",
    ],
  },
  {
    company: "iarte",
    role: "Community Manager",
    period: "Abril 2025 – Presente",
    points: [
      "Contenido informativo y visual para aumentar visibilidad y engagement.",
      "Estrategias basadas en insights y métricas.",
      "Apoyo en campañas segmentadas en Instagram.",
    ],
  },
];

export const education = [
  {
    school: "Coderhouse",
    title: "Diplomatura en Marketing Digital (en curso)",
    details: [
      "Análisis de datos, automatización y estrategia digital.",
      "Community Manager, Customer Experience, Habilidades Blandas.",
      "Enfoque en automatización, análisis de datos y herramientas de Inteligencia Artificial aplicadas al marketing y la gestión digital.",
    ],
  },
  {
    school: "Two Hour Writer – Dan Koe",
    title: "Copywriting Skill",
    details: ["Ecosistema de contenido en Notion y escritura estratégica."],
  },
];

export const skills = {
  profesionales: [
    "Fundamentos de Marketing Digital",
    "Creación de Contenido · Redes Sociales",
    "Meta Ads / Business Suite",
    "Canva · Notion · CapCut",
    "Comunicación y Atención al Cliente",
    "Inglés Avanzado",
  ],
  tecnologia: [
    "Diseño y prototipado asistido por IA (ChatGPT, Figma AI, Codex)",
    "Automatización de flujos y documentación técnica con IA",
    "Arquitectura de sistemas multi-tenant (Next.js, Supabase, Prisma)",
    "Optimización de datos y procesos con IA aplicada",
    "Pensamiento sistémico y enfoque UX/UI basado en datos",
  ],
  personales: [
    "Creatividad",
    "Comunicación asertiva",
    "Resolución de problemas",
    "Pensamiento crítico",
  ],
};
