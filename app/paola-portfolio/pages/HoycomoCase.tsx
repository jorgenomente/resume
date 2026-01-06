"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { InsightBlock } from "../components/InsightBlock";
import { BackToHome } from "../components/BackToHome";
import { ScrollToTop } from "../components/ScrollToTop";
import { motionVariants, scrollViewport } from "../lib/motion";

const imgHero = "/paola-portfolio/Hoycomo/Container-3.png";
const imgOnboarding = "/paola-portfolio/Hoycomo/Container.png";
const imgHome = "/paola-portfolio/Hoycomo/Container-3.png";
const imgRecipe = "/paola-portfolio/Hoycomo/Container-4.png";
const imgMiniReadings = "/paola-portfolio/Hoycomo/Container-2.png";
const imgSearchIngredient = "/paola-portfolio/Hoycomo/Container-1.png";

export function HoycomoCase() {
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <main className="pt-16">
        <section className="container-portfolio pt-6 md:pt-8">
          <BackToHome position="top" />
        </section>

        <section className="container-portfolio section-spacing">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 md:gap-16 items-start">
            <motion.div {...motionVariants.hero} className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <p className="text-[0.938rem] md:text-[1rem] text-[#2a2a2a] tracking-tight">
                  HOYCOMO — Aplicación mobile de decisiones alimentarias
                </p>

                <h1 className="text-[2rem] md:text-[2.25rem] text-[#2a2a2a] leading-tight tracking-tight">
                  Diseño que reduce fricción en cada decisión
                </h1>

                <p className="text-[1rem] md:text-[1.125rem] text-[#4a4a4a] leading-relaxed">
                  HoyComo es una aplicación mobile diseñada para acompañar decisiones cotidianas de alimentación saludable
                  desde una mirada humana y realista. UX Research + diseño de producto para reducir fricción mental y
                  transformar la pregunta &quot;¿qué como hoy?&quot; en una experiencia clara y accionable.
                </p>
              </div>

              <p className="text-[0.875rem] text-[#6b6b6b] font-mono">UX que acompaña decisiones humanas · Mobile · UX Research</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[280px] lg:max-w-none"
            >
              <div className="aspect-[9/19.5] bg-[#f5f4f0] rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-[#2a2a2a]">
                <img src={imgHero} alt="HoyComo interface" className="w-full h-full object-cover" />
              </div>
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

          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.quote}
            >
              <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight leading-relaxed">
                El problema no es la comida.
                <br />
                Es la <span className="text-[#D4A89C]">decisión</span>.
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.reveal}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-[0.813rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">Fatiga</p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed">
                    Decidir qué comer todos los días agota.
                  </p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed">
                    La fricción aparece antes de cocinar.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[0.813rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">Culpa</p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed">Planes rígidos que no se cumplen.</p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-relaxed">
                    Sensación de &quot;fallar&quot; incluso queriendo comer mejor.
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f4f0] p-8 rounded space-y-4">
                <p className="text-[1.25rem] text-[#2a2a2a] italic leading-relaxed">
                  &quot;El problema no es saber qué comer,
                  <br />
                  es decidir sin agotarse en el intento.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.sectionEnter}
            className="space-y-12 text-center max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              <p className="text-[2.25rem] text-[#2a2a2a] leading-tight tracking-tight">
                Las personas no necesitan más opciones.
              </p>
              <p className="text-[2.25rem] text-[#2a2a2a] font-bold leading-tight tracking-tight">
                Necesitan menos carga.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">El usuario no busca recetas</p>
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">Busca alivio</p>
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">
                Busca sentir que está &quot;bien&quot; con lo que elige
              </p>
            </div>
          </motion.div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.reveal}
            >
              <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight">
                Diseñar para acompañar decisiones, no imponerlas
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <InsightBlock title="Reducir decisiones simultáneas" index={0} />
              <InsightBlock title="Sugerir sin imponer" index={1} />
              <InsightBlock title="Diseñar estados calmos" index={2} />
              <InsightBlock title="UX emocional + funcional" index={3} />
              <InsightBlock title="Lenguaje cercano" index={4} />
              <InsightBlock title="Ritmo antes que eficiencia" index={5} />
            </div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.reveal}
            className="space-y-16"
          >
            <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight">Decisiones de UX que marcaron la diferencia</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Sugerencias contextuales",
                  text: "El sistema propone según el día, no según reglas rígidas.",
                  change: "Qué cambia: el usuario siente que la app lo entiende, no que lo controla.",
                },
                {
                  title: "Planificación flexible",
                  text: 'El usuario adapta, no "falla".',
                  change: "Qué cambia: se elimina la culpa, se refuerza la autonomía.",
                },
                {
                  title: "Microcontenidos",
                  text: "Mini lecturas que refuerzan hábitos sin abrumar.",
                  change: "Qué cambia: información útil sin saturación ni interrupciones.",
                },
                {
                  title: "Flujos simples",
                  text: "Menos pasos = menos fricción.",
                  change: "Qué cambia: el usuario llega al resultado sin agotarse en el proceso.",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-3">
                  <p className="text-[1.25rem] text-[#D4A89C] font-medium">{item.title}</p>
                  <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">{item.text}</p>
                  <p className="text-[0.875rem] text-[#6b6b6b]">{item.change}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.reveal}
            className="space-y-16"
          >
            <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight">Producto en uso real</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Onboarding", description: "Sin preguntas invasivas. Solo lo necesario para empezar.", image: imgOnboarding },
                { title: "Home contextual", description: "Sugiere según el momento, no según un plan rígido.", image: imgHome },
                { title: "Receta", description: "Información clara, sin distracciones innecesarias.", image: imgRecipe },
                { title: "Mini lecturas", description: "Contenido breve que acompaña, no que interrumpe.", image: imgMiniReadings },
                { title: "Búsqueda por ingrediente", description: "Reduce fricción: usa lo que ya tienes.", image: imgSearchIngredient },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden aspect-[9/16]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[1rem] text-[#2a2a2a]">{item.title}</p>
                    <p className="text-[0.875rem] text-[#6b6b6b]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <div className="grid lg:grid-cols-[320px_1fr] gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.quote}
            >
              <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight leading-relaxed">
                El impacto de HOYCOMO no se mide en calorías contadas.
                <br />
                <br />
                Se mide en decisiones que dejaron de cansar.
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.reveal}
              className="space-y-6"
            >
              <p className="text-[1rem] text-[#D4A89C] font-medium">Menos desgaste mental al decidir</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">Más continuidad en hábitos alimenticios</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">Mejor relación con la comida</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">Sensación real de acompañamiento</p>
            </motion.div>
          </div>
        </section>

        <section className="container-portfolio section-spacing border-t border-[#e8e6e1]">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={scrollViewport}
            variants={motionVariants.sectionEnter}
            className="space-y-12 max-w-3xl mx-auto text-center"
          >
            <p className="text-[1.25rem] text-[#2a2a2a] leading-relaxed">
              HOYCOMO muestra mi forma de diseñar productos: entender el contexto emocional del usuario y reducir fricción
              sin agregar complejidad.
            </p>

            <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">
              Diseño claridad. Para que las decisiones cotidianas no cansen.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a
                href="mailto:paolazerpak@gmail.com"
                className="px-8 py-3 border-b-[3px] border-[#e8e6e1] text-[#6b6b6b] transition-smooth hover:border-[#b8956a]"
              >
                Contactar
              </a>
            </div>
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
