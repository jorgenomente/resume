export const MOTION_TIMING = {
  active: 0.08,
  hover: 0.12,
  reveal: 0.24,
  sectionEnter: 0.3,
  pageEnter: 0.4,
} as const;

export const MOTION_EASING = {
  editorial: [0.22, 1, 0.36, 1] as const,
  ui: [0.4, 0, 0.2, 1] as const,
} as const;

export const motionVariants = {
  hero: {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TIMING.pageEnter,
        ease: MOTION_EASING.editorial,
      },
    },
  },

  sectionEnter: {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter,
        ease: MOTION_EASING.editorial,
      },
    },
  },

  reveal: {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TIMING.reveal,
        ease: MOTION_EASING.editorial,
      },
    },
  },

  quote: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TIMING.sectionEnter,
        ease: MOTION_EASING.editorial,
      },
    },
  },

  cardImage: {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      },
    },
  },

  ctaHover: {
    rest: { y: 0 },
    hover: {
      y: -1,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      },
    },
  },

  ctaArrow: {
    rest: { x: 0 },
    hover: {
      x: 4,
      transition: {
        duration: MOTION_TIMING.hover,
        ease: MOTION_EASING.ui,
      },
    },
  },

  pulsoHero: {
    initial: { opacity: 0, y: 6 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION_TIMING.pageEnter,
        ease: MOTION_EASING.editorial,
      },
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
      },
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
      },
    },
  },
} as const;

export const scrollViewport = {
  once: true,
  margin: "-80px",
} as const;

