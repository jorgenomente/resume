export const profile = {
  name: "Jorge Pulido",
  role: "Customer Experience · Atención al Cliente",
  meta: "Buenos Aires, Argentina · Inglés avanzado · Remoto/híbrido",
  descriptor: "Soporte omnicanal · Mejora de procesos",
  summary:
    "Especialista en Customer Experience con base en operaciones y comunicación bilingüe. Atiendo y resuelvo casos en canales digitales y en tienda, documentando incidencias y mejoras para reducir tiempos de respuesta. Combino escucha activa, organización y uso de herramientas digitales/IA para estandarizar respuestas, seguimiento postventa y feedback. Busco equipos donde la voz del cliente y la eficiencia del servicio sean prioridad.",
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
    role: "Customer Experience & Operaciones Retail",
    period: "2025",
    points: [
      "Atención en tienda y por WhatsApp para consultas, cambios y devoluciones, priorizando resolución en el primer contacto.",
      "Implementé respuestas rápidas, checklists y notas de crédito en Notion/Sheets para reducir tiempos de respuesta y errores en pedidos.",
      "Seguimiento postventa: coordinación de entregas, confirmación de stock y notificaciones proactivas a clientes.",
      "Registro de incidencias y derivación a proveedores para mejorar disponibilidad y experiencia en punto de venta.",
    ],
  },
  {
    company: "Desarrollador Web y Sistemas para Negocios",
    role: "Freelance · Implementación de experiencia digital",
    period: "2025",
    points: [
      "Diseño de flujos de onboarding y soporte en sitios y landings (formularios, pantallas de gracias, seguimiento).",
      "Configuración de bases de conocimiento y guiones con IA para respuestas consistentes en chat o email.",
      "Automatización ligera de captura de leads/tickets con bases de datos simples (Notion/Sheets) y dashboards operativos.",
      "Medición de tiempos de respuesta y feedback de usuarios para iterar copys, CTAs y experiencias.",
    ],
  },
  {
    company: "Lionbridge, INC.",
    role: "Intérprete Inglés – Español (Contact Center)",
    period: "2021 – Presente",
    points: [
      "Atención telefónica para clientes en Estados Unidos, asegurando claridad y empatía en cada llamada.",
      "Escucha activa y manejo de objeciones para resolver situaciones complejas bajo presión.",
      "Cumplimiento de protocolos de calidad y confidencialidad en entornos regulados.",
    ],
  },
  {
    company: "iarte",
    role: "Community Manager & CX",
    period: "Abril 2025 – Presente",
    points: [
      "Gestión de mensajes directos y comentarios, derivando leads y resolviendo consultas frecuentes.",
      "Calendario de contenidos orientado a preguntas frecuentes y soporte preventivo.",
      "Reportes con insights de clientes para ajustar campañas y materiales de ayuda.",
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
    "Atención omnicanal (WhatsApp, email, presencial)",
    "Resolución de reclamos y devoluciones",
    "Seguimiento postventa y feedback del cliente",
    "Documentación de casos y creación de respuestas estándar",
    "Comunicación clara en español e inglés (C1)",
    "Coordinación con operaciones y proveedores",
  ],
  tecnologia: [
    "Google Sheets y Notion para bases de conocimiento y seguimiento",
    "Bandejas compartidas y CRM básico para tickets",
    "Plantillas y macros con IA (ChatGPT) para respuestas rápidas y consistentes",
    "Automatización ligera con formularios y webhooks",
    "Tableros operativos y métricas simples (TTR, CSAT, NPS cualitativo)",
  ],
  personales: [
    "Empatía y tono cercano",
    "Resolución de problemas en tiempo real",
    "Priorización y manejo de tiempos",
    "Orientación a métricas y mejora continua",
    "Trabajo en equipo y coordinación multifuncional",
  ],
};
