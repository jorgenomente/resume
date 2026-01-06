import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ProjectCard } from './components/ProjectCard';
import { ValueCard } from './components/ValueCard';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { HeroVariantControl } from './components/HeroVariantControl';
import { ScrollToTop } from './components/ScrollToTop';
import { NoduxCase } from './pages/NoduxCase';
import { HoycomoCase } from './pages/HoycomoCase';
import { PulsoCase } from './pages/PulsoCase';
import { motionVariants, scrollViewport } from './lib/motion';

// Import project images from Figma
import imgNodux from "figma:asset/09fc8d4c050466e25519bc62a685d3cfe82da07a.png";
import imgHoycomo from "figma:asset/95e9202750db8848415821871809f1ebbe7e5f8a.png";
import imgPulso from "figma:asset/2eb29f6b1af508fb881fd8ff527e83dd6ab7f03a.png";
import imgHero from "figma:asset/f47c55f1d88b26a37e67343871dc9d0591019bb5.png";

// Hero content variants
const heroVariants = {
  // Variante A — Editorial / Identidad personal
  editorial: {
    eyebrow: 'NARRATIVA · SENTIDO · RITMO',
    headline: 'Product Designer especializada en sistemas y procesos reales',
    subtitle: 'Diseño experiencias donde el sentido guía la forma.',
    statementParts: [
      { text: 'Trabajo con narrativa, tono y estructura para que un producto se sienta claro, humano y consistente en el tiempo.', accent: false }
    ],
    expertiseTags: ['Narrativa', 'Tono & microcopy', 'Estructura editorial'],
    staggerDelay: 60, // ms between elements
    ctas: {
      primary: { text: 'Explorar mi trabajo', href: '#proyectos' },
      secondary: { text: 'Cómo trabajo el lenguaje', href: '#sobre-mi' }
    }
  },
  
  // Variante B — Recruiters / Hiring managers
  recruiter: {
    eyebrow: 'Usuario · Decisión · Fricción',
    headline: 'Product Designer especializada en sistemas y procesos reales',
    subtitle: 'Diseño para reducir carga cognitiva y acompañar decisiones reales.',
    statementParts: [
      { text: 'Convierto problemas difusos en ', accent: false },
      { text: 'flujos claros', accent: true },
      { text: ', feedback comprensible y experiencias que se sostienen en el día a día.', accent: false }
    ],
    expertiseTags: ['UX Research', 'Decision UX', 'Flujos simples'],
    staggerDelay: 40, // faster feel for Usuario variant
    ctas: {
      primary: { text: 'Explorar mi trabajo', href: '#proyectos' },
      secondary: { text: 'Ver decisiones UX', href: '#sobre-mi' }
    }
  },
  
  // Variante C — Técnica / Producto
  technical: {
    eyebrow: 'Sistemas · Escalabilidad · Claridad',
    headline: 'Product Designer especializada en sistemas y procesos reales',
    subtitle: 'Diseño sistemas que se sostienen en contextos reales.',
    statementParts: [
      { text: 'Ordeno complejidad operativa en ', accent: false },
      { text: 'patrones claros', accent: true },
      { text: ' para equipos que trabajan con procesos reales y repetibles.', accent: false }
    ],
    expertiseTags: ['UX Systems', 'Product Strategy', 'Escalabilidad'],
    staggerDelay: 60, // firm, stable feel
    ctas: {
      primary: { text: 'Explorar mi trabajo', href: '#proyectos' },
      secondary: { text: 'Ver arquitectura de sistemas', href: '#sobre-mi' }
    }
  }
};

function HomePage() {
  const [activeVariant, setActiveVariant] = useState<keyof typeof heroVariants>('editorial');
  const hero = heroVariants[activeVariant];
  
  // Scroll-based animation refs
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity/translateY values
  // Subtle editorial scroll response in first 20-40px
  const h1Opacity = useTransform(scrollY, [0, 40], [1, 0.92]);
  const h1Y = useTransform(scrollY, [0, 40], [0, -4]);
  const contentOpacity = useTransform(scrollY, [0, 40], [1, 0.85]);
  const dividerOpacity = useTransform(scrollY, [0, 40], [1, 0.6]);

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container-portfolio section-spacing" ref={heroRef}>
          {/* Variant Control - Tabs */}
          <div className="mb-10 md:mb-16">
            <HeroVariantControl 
              activeVariant={activeVariant}
              onVariantChange={setActiveVariant}
            />
          </div>

          {/* Hero Visual Container - Above content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.25, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="relative w-full aspect-[4/3] md:aspect-[16/7] rounded-lg overflow-hidden mb-12 md:mb-16"
          >
            {/* Background image - abstract marble */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1602536100338-c7762727ddb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1hcmJsZSUyMGNyZWFtfGVufDF8fHx8MTc2NTgxMzYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay - dark unified tone */}
            <div 
              className="absolute inset-0 bg-[#2a2a2a] opacity-[0.44]"
            />

            {/* Subtle gradient accent overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  radial-gradient(circle at 20% 30%, rgba(212,168,156,0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(184,149,106,0.25) 0%, transparent 50%)
                `,
              }}
            />
          </motion.div>

          {/* Hero Content - Below image on light background */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.28, 
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="space-y-8 md:space-y-12">
                {/* H1 - Dark editorial title for light background */}
                <motion.h1 
                  style={{ 
                    opacity: h1Opacity,
                    y: h1Y
                  }}
                  className="text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.02em] font-bold text-[#2B2B2A]"
                >
                  Product Designer especializada en sistemas y procesos reales
                </motion.h1>

                {/* Animated content - eyebrow, subtitle, statement, tags, secondary CTA */}
                <AnimatePresence mode="wait">
                  <div
                    key={activeVariant}
                    style={{ opacity: 1 }}
                    className="space-y-6 md:space-y-8"
                  >
                    {/* Eyebrow - Coral muted */}
                    <p
                      style={{ opacity: 1 }}
                      className="text-[0.813rem] text-[#CFA89A] tracking-[0.08em] uppercase font-medium"
                    >
                      {hero.eyebrow}
                    </p>

                    {/* Subtitle (H2) - Dark warm gray editorial */}
                    <h2
                      style={{ opacity: 1 }}
                      className="text-[1.375rem] sm:text-[1.5rem] md:text-[1.75rem] text-[#2B2B2A] leading-[1.35] tracking-[-0.015em] font-medium"
                    >
                      {hero.subtitle}
                    </h2>

                    {/* Statement - Dark warm gray body text */}
                    <p
                      style={{ opacity: 1 }}
                      className="text-[0.938rem] sm:text-[1rem] md:text-[1.063rem] text-[#2B2B2A] leading-[1.5] max-w-[38rem]"
                    >
                      {hero.statementParts.map((part, index) => {
                        const lines = part.text.split('\\n');
                        return lines.map((line, lineIndex) => (
                          <span key={`${index}-${lineIndex}`}>
                            <span className={part.accent ? 'text-[#D9A18A] font-medium' : ''}>
                              {line}
                            </span>
                            {lineIndex < lines.length - 1 && <br />}
                          </span>
                        ));
                      })}
                    </p>

                    {/* Expertise Tags */}
                    <div
                      style={{ opacity: 1 }}
                      className="flex flex-wrap gap-2 pt-2 md:pt-4"
                    >
                      {hero.expertiseTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[rgba(207,168,154,0.12)] text-[0.688rem] text-[#8B7366] tracking-[0.01em] rounded border border-[rgba(207,168,154,0.2)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div
                      style={{ opacity: 1 }}
                      className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 pt-4 md:pt-6"
                    >
                      {/* Primary CTA */}
                      <motion.a
                        href={hero.ctas.primary.href}
                        className="w-full sm:w-auto px-8 py-3.5 bg-[#2a2a2a] text-white text-[0.938rem] text-center rounded-lg transition-hover hover:bg-[#1a1a1a]"
                        initial="rest"
                        whileHover="hover"
                        variants={motionVariants.ctaHover}
                      >
                        {hero.ctas.primary.text}
                      </motion.a>
                      
                      {/* Secondary CTA - text button with arrow */}
                      <motion.a
                        href={hero.ctas.secondary.href}
                        className="inline-flex items-center gap-2 text-[0.938rem] text-[#2B2B2A] transition-hover hover:text-[#D9A18A] hover:gap-3 group"
                        initial="rest"
                        whileHover="hover"
                      >
                        {hero.ctas.secondary.text}
                        <span className="transition-all duration-120 group-hover:text-[#CFA89A]">→</span>
                      </motion.a>
                    </div>
                  </div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="container-portfolio section-spacing relative">
          {/* Scroll-responsive divider with coral gradient signature */}
          <motion.div 
            style={{ opacity: dividerOpacity }}
            className="absolute top-0 left-0 right-0 h-[12px]"
          >
            <div 
              className="h-full w-full"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(212,168,156,0.25), rgba(184,149,106,0.15), transparent)',
                filter: 'blur(2px)'
              }}
            ></div>
          </motion.div>
          
          <div className="space-y-24">
            {/* Section Header */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.reveal}
              className="space-y-6"
            >
              {/* Coral eyebrow with gradient underline */}
              <div className="inline-flex flex-col gap-2">
                <label className="text-[#D4A89C] tracking-[0.08em] uppercase font-medium text-[0.813rem]">Proyectos Seleccionados</label>
                <div 
                  className="h-[10px] w-20 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(212,168,156,0.55), rgba(184,149,106,0.35), transparent)',
                    filter: 'blur(1.5px)'
                  }}
                ></div>
              </div>
              <h2 className="text-[1.5rem] text-[#2a2a2a] tracking-tight max-w-2xl">
                Tres proyectos. Tres capas del diseño de producto.
              </h2>
              <p className="text-[1rem] text-[#4a4a4a] leading-relaxed max-w-xl">
                Sistemas que escalan. Decisiones que guían. Narrativas que <span className="text-[#D4A89C] font-medium">conectan</span>.
              </p>
            </motion.div>

            {/* Project Cards */}
            <div className="space-y-20">
              <ProjectCard
                title="NODUX — Sistema de Gestión Operativa"
                subtitle="Sistemas · Procesos · Decisión operativa"
                description="NODUX es un sistema digital de gestión operativa diseñado para equipos que trabajan con pedidos, pagos, proveedores y control de información en el día a día. El proyecto aborda problemas reales de desorden, errores manuales y sobrecarga cognitiva, transformando procesos dispersos en flujos claros, estados comprensibles y acciones concretas."
                category="Sistemas"
                tags={['B2B SaaS', 'UX Systems', 'Flujos']}
                image={imgNodux}
                link="#nodux"
                index={0}
              />

              <ProjectCard
                title="HOYCOMO — Aplicación de decisiones alimentarias"
                subtitle="Usuario · Decisión · UX emocional"
                description="HoyComo es una aplicación mobile enfocada en facilitar decisiones cotidianas de alimentación saludable, adaptadas al ritmo y contexto real de las personas. El proyecto combina UX Research y diseño de producto para reducir fricción mental, acompañar hábitos y transformar la pregunta '¿qué como hoy?' en una experiencia simple, cercana y accionable."
                category="Decisión"
                tags={['Mobile Design', 'UX Research', 'B2C']}
                image={imgHoycomo}
                link="#hoycomo"
                index={1}
              />

              <ProjectCard
                title="PULSO — Producto editorial de journaling"
                subtitle="Narrativa · Ritmo · Sentido"
                description="Pulso es un proyecto de producto editorial enfocado en journaling y autoconocimiento, que convierte la introspección en una experiencia tangible y sostenida en el tiempo. El diseño integra sistema visual, narrativa y estructura de uso para acompañar procesos emocionales reales, priorizando claridad, ritmo y coherencia."
                category="Sentido"
                tags={['Wellbeing', 'Minimal Design', 'Writing']}
                image={imgPulso}
                link="#pulso"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.reveal}
            className="space-y-12"
          >
            {/* Coral eyebrow with gradient underline */}
            <div className="inline-flex flex-col gap-2">
              <label className="text-[#D4A89C] tracking-[0.08em] uppercase font-medium text-[0.813rem]">Por qué trabajar conmigo</label>
              <div 
                className="h-[10px] w-16 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(212,168,156,0.55), rgba(184,149,106,0.35), transparent)',
                  filter: 'blur(1.5px)'
                }}
              ></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <ValueCard
                title="Pensamiento sistémico"
                description="Diseño soluciones que escalan y se adaptan al crecimiento del producto o la marca sin perder coherencia."
                index={0}
              />
              <ValueCard
                title="Enfoque en lo real"
                description="Priorizo la usabilidad en contextos reales sobre estéticas que no resuelven problemas concretos."
                index={1}
              />
              <ValueCard
                title="Claridad y autonomía"
                description="Comunico decisiones con criterio claro y trabajo con autonomía dentro de equipos multidisciplinarios."
                index={2}
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.reveal}
            className="max-w-5xl mx-auto"
          >
            {/* Coral eyebrow with gradient underline */}
            <div className="mb-12 inline-flex flex-col gap-2">
              <label className="text-[#D4A89C] tracking-[0.08em] uppercase font-medium text-[0.813rem]">Cómo trabajo</label>
              <div 
                className="h-[10px] w-20 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, rgba(212,168,156,0.55), rgba(184,149,106,0.35), transparent)',
                  filter: 'blur(1.5px)'
                }}
              ></div>
            </div>

            {/* Two Column Layout: Statement + Image */}
            <div className="grid lg:grid-cols-[1fr,40%] gap-12 lg:gap-16 items-center">
              {/* Left Column: Statement */}
              <div>
                <h2 className="text-[1.75rem] sm:text-[2rem] text-[#2a2a2a] leading-[1.25] tracking-[-0.015em] font-medium">
                  Diseño para que las <span className="text-[#D4A89C] font-medium">decisiones</span> difíciles se vuelvan claras y los procesos complejos funcionen en el día a día.
                </h2>
              </div>

              {/* Right Column: Image */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={scrollViewport}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[4/3] rounded overflow-hidden bg-[#f5f4f0]"
              >
                <img
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzM0OTc2NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact CTA Section */}
        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.reveal}
            className="max-w-3xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-[1.125rem] text-[#2a2a2a]">
                Diseño con criterio.
              </p>
              <p className="text-[1.125rem] text-[#2a2a2a]">
                Sistemas, decisiones y sentido.
              </p>
            </div>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[1rem] text-[#2a2a2a] transition-hover hover:gap-3 group"
            >
              Conectar en LinkedIn
              <span className="group-hover:text-[#D4A89C] transition-colors duration-120">→</span>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'nodux' | 'hoycomo' | 'pulso'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'nodux') setCurrentPage('nodux');
      else if (hash === 'hoycomo') setCurrentPage('hoycomo');
      else if (hash === 'pulso') setCurrentPage('pulso');
      else setCurrentPage('home');
      
      // Scroll to top when page changes
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'nodux') return <NoduxCase />;
  if (currentPage === 'hoycomo') return <HoycomoCase />;
  if (currentPage === 'pulso') return <PulsoCase />;
  
  return <HomePage />;
}