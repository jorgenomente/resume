"use client";

import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { InsightBlock } from "../components/InsightBlock";
import { BackToHome } from "../components/BackToHome";
import { ScrollToTop } from "../components/ScrollToTop";
import { motionVariants, scrollViewport } from "../lib/motion";

const imgHero = "/paola-portfolio/nodux/NoduxCase.png";
const imgDashboard = "/paola-portfolio/nodux/Container.png";
const imgPagos = "/paola-portfolio/nodux/Container-1.png";
const imgPedidos = "/paola-portfolio/nodux/Container-2.png";
const imgVencimientos = "/paola-portfolio/nodux/Container-3.png";

export function NoduxCase() {
  return (
    <>
      <Navigation />
      <ScrollToTop />

      <main className="pt-16">
        <section className="container-portfolio pt-6 md:pt-8">
          <BackToHome position="top" />
        </section>

        <section className="container-portfolio section-spacing">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div {...motionVariants.hero} className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <p className="text-[0.938rem] md:text-[1rem] text-[#2a2a2a] tracking-tight">
                  NODUX — Sistema de Gestión Operativa
                </p>

                <h1 className="text-[1.75rem] md:text-[2.25rem] text-[#2a2a2a] leading-[1.2] tracking-tight">
                  Diseñar claridad en sistemas complejos
                </h1>

                <p className="text-[0.938rem] md:text-[1.125rem] text-[#4a4a4a] leading-[1.65]">
                  Herramienta interna que organiza procesos operativos fragmentados. El objetivo: que equipos reales trabajen
                  mejor, más rápido y sin errores.
                </p>
              </div>

              <p className="text-[0.813rem] md:text-[0.875rem] text-[#6b6b6b] font-mono">
                Product Design · UX Systems · B2B SaaS
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={imgHero} alt="NODUX Interface" className="w-full" />
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
              <h2 className="text-[1.125rem] md:text-[1.25rem] text-[#2a2a2a] tracking-tight leading-[1.5]">
                El problema no era tecnológico.
                <br />
                Era <span className="text-[#D4A89C]">operativo</span>.
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
                  <p className="text-[0.813rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">Contexto</p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-[1.65]">
                    Equipos operativos gestionaban pedidos, inventario y logística usando múltiples herramientas desconectadas.
                  </p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-[1.65]">
                    Resultado: errores frecuentes, duplicación de tareas, falta de trazabilidad.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[0.813rem] text-[#D4A89C] tracking-[0.08em] uppercase font-medium">Fricción real</p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-[1.65]">
                    No había un sistema unificado para seguir el estado de cada proceso.
                  </p>
                  <p className="text-[0.875rem] text-[#6b6b6b] leading-[1.65]">
                    Los equipos perdían tiempo buscando información básica.
                  </p>
                </div>
              </div>

              <div className="bg-[#f5f4f0] p-6 md:p-8 rounded space-y-4">
                <p className="text-[1.063rem] md:text-[1.25rem] text-[#2a2a2a] italic leading-[1.5]">
                  &quot;No necesitamos más funcionalidades.
                  <br />
                  Necesitamos ver todo el proceso en un solo lugar.&quot;
                </p>
                <p className="text-[0.875rem] text-[#6b6b6b]">— Líder de Operaciones</p>
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
            <h2 className="text-[2.25rem] text-[#2a2a2a] leading-tight tracking-tight">
              El sistema no debe competir con los procesos.
            </h2>
            <h2 className="text-[2.25rem] text-[#2a2a2a] font-bold leading-tight tracking-tight">Debe reflejarlos.</h2>

            <div className="space-y-4 pt-8">
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">El problema no era falta de información</p>
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">
                Era exceso de fricción para acceder a ella
              </p>
              <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">
                NODUX organiza procesos tal como los equipos ya trabajan
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
              <h2 className="text-[1.25rem] text-[#2a2a2a] tracking-tight">Enfoque de diseño</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <InsightBlock title="Arquitectura modular y escalable" index={0} />
              <InsightBlock title="Flujos basados en roles reales" index={1} />
              <InsightBlock title="Jerarquía visual que prioriza acciones" index={2} />
              <InsightBlock title="Estados claros en cada etapa" index={3} />
              <InsightBlock title="Feedback inmediato" index={4} />
              <InsightBlock title="Diseño para velocidad operativa" index={5} />
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
              <div className="space-y-3">
                <p className="text-[1.25rem] text-[#D4A89C] font-medium">Vista unificada de procesos</p>
                <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">
                  Todo el flujo operativo visible en una sola pantalla.
                </p>
                <p className="text-[0.875rem] text-[#6b6b6b]">
                  Qué cambia: Se elimina la necesidad de cambiar entre múltiples sistemas.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[1.25rem] text-[#D4A89C] font-medium">Estados con código de color</p>
                <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">
                  Identificación visual inmediata del estado de cada tarea.
                </p>
                <p className="text-[0.875rem] text-[#6b6b6b]">
                  Qué cambia: Reducción del tiempo de comprensión del estado operativo.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[1.25rem] text-[#D4A89C] font-medium">Acciones contextuales</p>
                <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">
                  Cada rol ve solo las acciones que puede ejecutar.
                </p>
                <p className="text-[0.875rem] text-[#6b6b6b]">
                  Qué cambia: Menos fricción cognitiva, más velocidad de ejecución.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-[1.25rem] text-[#D4A89C] font-medium">Historial de cambios automático</p>
                <p className="text-[1rem] text-[#4a4a4a] leading-relaxed">
                  Registro de cada modificación sin trabajo manual.
                </p>
                <p className="text-[0.875rem] text-[#6b6b6b]">Qué cambia: Trazabilidad total, responsabilidad clara.</p>
              </div>
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

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Dashboard principal",
                  description: "Vista general del estado operativo en tiempo real.",
                  image: imgDashboard,
                },
                {
                  title: "Gestión de pedidos",
                  description: "Flujo completo desde creación hasta entrega.",
                  image: imgPedidos,
                },
                {
                  title: "Control de inventario",
                  description: "Seguimiento de stock y alertas automáticas.",
                  image: imgVencimientos,
                },
                {
                  title: "Asignación de tareas",
                  description: "Distribución automática según carga de trabajo.",
                  image: imgPagos,
                },
              ].map((item) => (
                <div key={item.title} className="space-y-4">
                  <div className="bg-[#f5f4f0] rounded-lg overflow-hidden aspect-video">
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
                El impacto de NODUX no se mide en métricas de engagement.
                <br />
                <br />
                Se mide en procesos que funcionan.
              </h2>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={scrollViewport}
              variants={motionVariants.reveal}
              className="space-y-6"
            >
              <p className="text-[1rem] text-[#D4A89C] font-medium">Reducción del 60% en errores operativos</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">40% menos tiempo en gestión de pedidos</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">Trazabilidad completa de procesos</p>
              <p className="text-[1rem] text-[#D4A89C] font-medium">
                Onboarding de nuevos operadores reducido a la mitad
              </p>
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
              NODUX muestra mi forma de diseñar sistemas: entender el problema operativo real, diseñar arquitectura escalable
              y priorizar claridad sobre decoración.
            </p>

            <p className="text-[1.125rem] text-[#4a4a4a] leading-relaxed">
              Diseño para que las personas trabajen mejor. Sin fricción. Con claridad.
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
