export const profile = {
  name: "Jorge Pulido",
  role: "Estudiante de Marketing Digital",
  meta: "Buenos Aires, Argentina · Inglés avanzado",
  descriptor: "Ventas · Operaciones · IA aplicada a procesos",
  summary:
    "Profesional en formación con experiencia en tareas administrativas: carga y organización de facturas, gestión documental, seguimiento de pagos y comunicación con proveedores. Aporto orden, criterio operativo y capacidad de gestionar información con exactitud. Además, complemento este perfil con habilidades en marketing digital y el uso de herramientas tecnológicas e IA para mejorar la eficiencia de los procesos internos.",
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
    role: "Coordinador de Ventas, Operaciones y Administración",
    period: "2025",
    points: [
      "Gestión administrativa de proveedores: carga, digitalización y organización de facturas; registro de notas de crédito; seguimiento de pagos y envío de comprobantes.",
      "Coordinación integral de pedidos y stock, manteniendo actualizados los registros internos y garantizando la disponibilidad de productos.",
      "Análisis de datos operativos para mejorar tiempos y reducir errores.",
      "Comunicación con clientes y optimización de la experiencia en tienda.",
    ],
  },
  {
    company: "Desarrollador Web y Sistemas para Negocios",
    role: "Freelance · Desarrollo, diseño y estrategia digital",
    period: "2025",
    points: [
      "Desarrollo de landing pages, sitios web y mini-sistemas en tecnologías modernas.",
      "Diseño y construcción de sistemas internos simples para emprendedores y negocios (gestión de pedidos, pagos, stock, etc.).",
      "Integración de herramientas digitales para mejorar procesos (automatizaciones, bases de datos, paneles).",
      "Creación de estrategias de marketing digital y optimización de presencia online.",
      "Acompañamiento técnico para escalar operaciones y presencia digital.",
      "Resultado: soluciones web claras, rápidas y funcionales que mejoran conversión y ordenan procesos.",
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
