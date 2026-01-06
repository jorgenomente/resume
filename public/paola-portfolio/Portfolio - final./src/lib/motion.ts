/**
 * Sistema unificado de motion para el portfolio
 * Timing y easing consistentes en toda la aplicación
 */

// Timing (en segundos)
export const MOTION_TIMING = {
  active: 0.08,       // 80ms
  hover: 0.12,        // 120ms
  reveal: 0.24,       // 240ms
  sectionEnter: 0.3,  // 300ms
  pageEnter: 0.4,     // 400ms
} as const;

// Easing functions
export const MOTION_EASING = {
  editorial: [0.22, 1, 0.36, 1] as const,    // cubic-bezier(0.22, 1, 0.36, 1) - Para contenido
  ui: [0.4, 0, 0.2, 1] as const,             // cubic-bezier(0.4, 0, 0.2, 1) - Para UI/hover
} as const;

// Variantes predefinidas para Motion
export const motionVariants = {
  // Hero animations - fade + translateY 8px
  hero: {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.pageEnter,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  // Section enter animations
  sectionEnter: {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  // Scroll reveal animations - bloques completos
  reveal: {
    initial: { opacity: 0, y: 8 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.reveal,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  // Quote animations - entrada suave y pausada
  quote: {
    initial: { opacity: 0, y: 12 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  // Card image hover - scale 1.02
  cardImage: {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      }
    },
  },

  // CTA hover - elevación sutil
  ctaHover: {
    rest: { y: 0 },
    hover: {
      y: -1,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      }
    },
  },

  // CTA arrow shift
  ctaArrow: {
    rest: { x: 0 },
    hover: {
      x: 4,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      }
    },
  },

  // Pulso specific - minimal motion, más opacity
  pulsoHero: {
    initial: { opacity: 0, y: 6 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.pageEnter,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  pulsoReveal: {
    initial: { opacity: 0, y: 6 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter,
        ease: MOTION_EASING.editorial,
      }
    },
  },

  pulsoQuote: {
    initial: { opacity: 0, y: 4 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter * 1.2,
        ease: MOTION_EASING.editorial,
      }
    },
  },
} as const;

// Viewport settings para scroll reveal
export const scrollViewport = {
  once: true,
  margin: "-80px",
} as const;