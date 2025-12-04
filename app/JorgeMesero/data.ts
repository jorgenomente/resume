export const profile = {
  name: "Jorge Pulido",
  role: "Estudiante de Marketing Digital",
  meta: "CABA, Argentina · Inglés Avanzado",
  descriptor: "Camarero · Servicio al Cliente · Operaciones en Gastronomía",
  summary:
    "Profesional con experiencia en servicio en salón, atención al cliente y trabajo en equipos de alta demanda. Manejo toma de pedidos, coordinación con cocina y barra, armado de salón, control básico de stock y estándares de servicio. Me destaco por el trato claro, la buena comunicación, la rapidez y el cuidado del detalle. Además, cuento con inglés avanzado y experiencia en entornos donde la organización y el ritmo son claves.",
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
    company: "Negroni – Recoleta",
    role: "Camarero — Sushi & Nikkei",
    period: "2024 – 2025",
    points: [
      "Servicio en salón, toma de pedidos y coordinación con cocina y barra.",
      "Recomendación de platos y acompañamiento al cliente.",
      "Manejo de alta demanda y tiempos ajustados.",
      "Conocimiento básico de sushi y armado de mesas.",
    ],
  },
  {
    company: "Lionbridge",
    role: "Intérprete Inglés – Español",
    period: "2021 – 2023",
    points: [
      "Interpretación remota para equipos internacionales.",
      "Comunicación clara, escucha activa y resolución rápida en distintos contextos.",
      "Manejo de situaciones complejas bajo presión.",
      "Posición útil para destacar inglés avanzado, atención al cliente y trabajo bajo presión.",
    ],
  },
  {
    company: "Grab a Wiener",
    role: "Encargado",
    period: "2022",
    points: [
      "Supervisión de equipo y organización general del servicio.",
      "Control de stock, mise en place y estándares de calidad.",
      "Manejo de caja y coordinación operativa en alta rotación.",
    ],
  },
  {
    company: "Quotidiano – Recoleta",
    role: "Camarero",
    period: "2021 – 2022",
    points: [
      "Servicio en mesas y manejo de tiempos en alta demanda.",
      "Conocimientos básicos de vinos y cocina italiana.",
      "Organización del salón y soporte general.",
    ],
  },
  {
    company: "Experience Baires",
    role: "Guía de Turismo",
    period: "2021 – 2022",
    points: [
      "Conducción de grupos en recorridos culturales y gastronómicos.",
      "Comunicación clara y manejo de grupos internacionales.",
      "Atención al público y hospitalidad.",
    ],
  },
  {
    company: "Brandon – Palermo",
    role: "Camarero",
    period: "2020 – 2021",
    points: [
      "Asesoramiento sobre carta, vinos y tragos.",
      "Fajinado, copas y mantenimiento de estaciones.",
      "Servicio en salón y soporte general.",
    ],
  },
  {
    company: "La Azulada – Cañitas",
    role: "Camarero",
    period: "2019 – 2020",
    points: [
      "Atención al comensal y armado de salón.",
      "Toma de pedidos y preparación del espacio de trabajo.",
      "Asistencia en el flujo general de servicio.",
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
    "Servicio en salón · Atención al cliente",
    "Toma de pedidos · Manejo de alta demanda",
    "Coordinación con cocina y barra",
    "Recomendación de platos (Sushi, Nikkei, Italiano)",
    "Manejo de caja básico · Organización de salón",
    "Mise en place · Fajinado · Estaciones de servicio",
    "Control básico de stock",
    "Inglés avanzado",
  ],
  tecnologia: [
    "Manejo de sistemas de gestión simples (POS, comandas digitales)",
    "Uso básico de herramientas digitales (Google Sheets, Drive)",
    "Organización y registro de información operativa",
    "Comunicación por WhatsApp Business / CRM básico",
    "Agilidad para aprender sistemas nuevos",
  ],
  personales: [
    "Buena comunicación y trato con el cliente",
    "Rapidez y manejo de tiempos",
    "Trabajo en equipo",
    "Organización y atención al detalle",
    "Adaptabilidad a alta demanda",
    "Resolución de problemas y criterio práctico",
  ],
};
