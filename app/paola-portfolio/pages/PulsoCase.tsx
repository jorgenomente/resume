"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { BackToHome } from "../components/BackToHome";
import { ScrollToTop } from "../components/ScrollToTop";
import { motionVariants, scrollViewport } from "../lib/motion";

export function PulsoCase() {
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <main className="pt-16">
        <section className="container-portfolio pt-6 md:pt-8">
          <BackToHome position="top" />
        </section>

        <section className="container-portfolio section-spacing">
          <motion.div {...motionVariants.pulsoHero} className="max-w-2xl space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-[0.75rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">
                Narrativa · Ritmo · Sentido
              </p>

              <h1 className="text-[2.75rem] sm:text-[3.5rem] text-[#2a2a2a] leading-[1.1] tracking-tight">
                Escribir también es una forma de escucharse.
              </h1>

              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#4a4a4a] leading-relaxed tracking-tight">
                PULSO nace de la necesidad de tener un espacio donde escribir sin ser medido, evaluado o interrumpido.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="container-portfolio pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={scrollViewport}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f5f4f0] rounded aspect-[2/1] w-full"
          />
        </section>

        <section className="container-portfolio section-spacing">
          <div className="max-w-xl mx-auto space-y-20 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoQuote}
              className="space-y-8"
            >
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Hay días en que la mente necesita espacio.</p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoQuote}
              className="space-y-8 pt-16"
            >
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">PULSO no busca resolverlo todo.</p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Busca acompañar.</p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Dar ritmo.</p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Dar lugar.</p>
            </motion.div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1] relative">
          <div
            className="absolute top-0 left-0 right-0 h-[12px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,168,156,0.25), rgba(184,149,106,0.15), transparent)",
              filter: "blur(2px)",
            }}
          />
          <div className="max-w-md mx-auto space-y-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoQuote}
              className="bg-[rgba(255,255,255,0.4)] p-12 space-y-12 text-center"
            >
              <p className="text-[2rem] text-[#2a2a2a] leading-relaxed">No dicta rutinas.</p>
              <p className="text-[2rem] text-[#2a2a2a] leading-relaxed">No corrige.</p>
              <p className="text-[2rem] text-[#2a2a2a] leading-relaxed">No analiza.</p>
              <p className="text-[2rem] text-[#2a2a2a] leading-relaxed">Solo ofrece espacio.</p>
            </motion.div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoReveal}
            >
              <p className="text-[0.75rem] text-[#8a8a8a] tracking-[0.05em] uppercase">Diseño</p>
            </motion.div>

            <div className="space-y-24">
              {[
                { number: "01", title: "Sin notificaciones", description: "El bienestar emocional no necesita recordatorios." },
                { number: "02", title: "Sin métricas", description: "No todo debe medirse para tener valor." },
                { number: "03", title: "Sin compartir", description: "Lo que se escribe es íntimo." },
              ].map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={scrollViewport}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-[80px_1fr] gap-8"
                >
                  <p className="text-[0.75rem] text-[#8a8a8a] tracking-[0.05em] uppercase">{principle.number} · Diseño</p>
                  <div className="space-y-3">
                    <h3 className="text-[2rem] text-[#2a2a2a] leading-tight">{principle.title}</h3>
                    <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.pulsoReveal}
            className="bg-[#f5f4f0] px-8 sm:px-12 md:px-24 py-16 sm:py-24 md:py-32 space-y-16 sm:space-y-24"
          >
            <p className="text-[0.75rem] text-[#8a8a8a] tracking-[0.05em] uppercase">Experiencia</p>

            <div className="max-w-xl space-y-6 sm:space-y-8">
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">Es de noche.</p>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">Abrís PULSO.</p>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">La página en blanco.</p>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">
                Sin avisos. Sin instrucciones.
              </p>
            </div>

            <div className="max-w-xl space-y-6 sm:space-y-8 pt-4 sm:pt-8">
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">Escribís.</p>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">No editás.</p>
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">No corregís.</p>
            </div>

            <div className="pt-8 sm:pt-16">
              <p className="text-[1.125rem] sm:text-[1.25rem] text-[#2a2a2a] leading-relaxed">
                Solo dejás salir lo que estaba adentro.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <div className="max-w-xl mx-auto space-y-20 text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoQuote}
              className="space-y-12"
            >
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">
                En un mundo que pide optimizar, medir y registrar todo,
              </p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">PULSO invita simplemente a estar.</p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.pulsoQuote}
              className="space-y-12 pt-16"
            >
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">A veces, lo más radical no es hacer más.</p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Es escribir.</p>
              <p className="text-[1.75rem] text-[#2a2a2a] leading-relaxed">Y escucharse.</p>
            </motion.div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.pulsoReveal}
            className="max-w-xl mx-auto text-center space-y-8"
          >
            <h2 className="text-[3rem] text-[#2a2a2a] leading-tight tracking-wide">PULSO</h2>
            <p className="text-[0.875rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">
              Escritura · Ritmo · Silencio
            </p>
          </motion.div>
        </section>

        <section className="container-portfolio pt-16 pb-8">
          <BackToHome position="bottom" />
        </section>
      </main>

      <Footer />
    </>
  );
}

