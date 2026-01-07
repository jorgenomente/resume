"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  ChevronRight,
  Grid3X3,
  Laptop,
  LayoutDashboard,
  Linkedin,
  List,
  Mail,
  Menu,
  MessageCircleX,
  Minimize2,
  Mouse,
  Phone,
  Search,
  Settings,
  ShoppingCart,
  Sun,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { Button } from "./components/Button";
import { ProjectCard } from "./components/ProjectCard";
import { ServiceCardCollapsible } from "./components/ServiceCardCollapsible";
import { MethodStepSequential } from "./components/MethodStepSequential";
import { PrincipleCard } from "./components/PrincipleCard";

const imgFrame484 = "/PA1/src/assets/66186e220726058b39ad5a758150970a5d9304df.png";
const imgFrame485 = "/PA1/src/assets/024323c82374fd791030e2239e6ab9958a9cd66d.png";
const imgFrame486 = "/PA1/src/assets/ab1798e0c4cce39c924013cdc3318bc4ae5cbdac.png";
const imgProfile = "/PA1/src/assets/10b4299ec2844579dcb41f731091753136678039.png";
const imgTeam = "/PA1/src/assets/92a0fa11fefa5195b99fedff2a1eaf0b61b6d64e.png";

export default function PaolaZerpaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeMethodStep, setActiveMethodStep] = useState(0);
  const methodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (methodRef.current) {
        const rect = methodRef.current.getBoundingClientRect();
        const containerTop = window.scrollY + rect.top;
        const containerHeight = rect.height || 1;
        const viewportFocus = window.scrollY + window.innerHeight * 0.45;
        const progress = (viewportFocus - containerTop) / containerHeight;
        const clampedProgress = Math.max(0, Math.min(0.999, progress));
        const stepIndex = Math.floor(clampedProgress * 4);
        setActiveMethodStep(Math.min(Math.max(stepIndex, 0), 3));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f1e7] overflow-x-hidden">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-[#13293d]/95 backdrop-blur-md shadow-lg" : "bg-[#13293d]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff] rounded-full animate-pulse" />
                <Sun className="absolute inset-0 m-auto w-5 h-5 text-[#13293d]" />
              </div>
              <span className="font-['Space_Grotesk'] text-[#f47dcf] text-sm">
                Claridad • Experiencia
              </span>
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#f47dcf] p-2"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#proyectos"
                className="font-['Space_Mono'] text-sm text-[#f6f1e7] hover:text-[#f47dcf] transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#metodo"
                className="font-['Space_Mono'] text-sm text-[#f6f1e7] hover:text-[#f47dcf] transition-colors"
              >
                Método
              </a>
              <a
                href="#servicios"
                className="font-['Space_Mono'] text-sm text-[#f6f1e7] hover:text-[#f47dcf] transition-colors"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="font-['Space_Mono'] text-sm text-[#f6f1e7] hover:text-[#f47dcf] transition-colors"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#13293d] border-t border-[#f47dcf]/20"
          >
            <nav className="flex flex-col p-4 gap-3">
              {[
                { href: "#proyectos", label: "Proyectos" },
                { href: "#metodo", label: "Método" },
                { href: "#servicios", label: "Servicios" },
                { href: "#contacto", label: "Contacto" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-['Space_Mono'] text-sm text-[#f6f1e7] hover:text-[#f47dcf] transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8 inline-block"
          >
            <Mouse className="w-7 h-7 text-[#f47dcf]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <p className="font-['Space_Grotesk'] font-medium text-base text-[#13293d] mb-2">
              Soy Paola
            </p>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-[#f47dcf]/40 to-transparent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-['Space_Grotesk'] font-medium text-[32px] sm:text-5xl lg:text-6xl text-[#13293d] leading-tight mb-8 tracking-tight"
          >
            <span className="block sm:hidden">Diseño para</span>
            <span className="block sm:hidden">escalar sin caos</span>
            <span className="block sm:hidden">y reducir errores</span>
            <span className="hidden sm:inline">
              Diseño para
              <br />
              escalar sin caos
              <br />
              y reducir errores.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="font-['Space_Grotesk'] font-medium text-lg text-[#13293d] mb-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff]">
                Sistemas, procesos y comunicación
              </span>
              <br />
              <span>para uso real.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block mb-10"
          >
            <div className="bg-gradient-to-br from-[rgba(244,125,207,0.15)] to-[rgba(199,185,255,0.15)] border border-[rgba(244,125,207,0.4)] rounded-2xl p-6 shadow-[0px_0px_20px_0px_rgba(244,125,207,0.2)] max-w-lg mx-auto">
              <p className="font-['Space_Grotesk'] font-medium text-sm sm:text-base text-[#13293d] leading-relaxed">
                Trabajo con equipos y operaciones donde{" "}
                <span className="font-bold">todo funciona, pero se desgasta</span> porque
                depende de{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] font-medium">
                  atención constante
                </span>
                .
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="primary" icon="arrow" href="#proyectos">
              Portfolio
            </Button>
            <Button variant="secondary" icon="download" href="#contacto">
              Descargar guía
            </Button>
          </motion.div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#f47dcf]/10 to-[#c7b9ff]/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#c7b9ff]/10 to-[#f47dcf]/10 rounded-full blur-3xl -z-10" />
      </section>

      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(244,125,207,0.4)] to-[rgba(199,185,255,0.4)] -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 px-4"
          >
            <h2 className="font-['Space_Grotesk'] font-medium text-4xl md:text-5xl text-[#13293d] mb-4">
              Proyectos
            </h2>
            <p className="font-['Space_Mono'] text-base md:text-lg text-[#13293d] max-w-2xl">
              Muestro <span className="font-bold">decisiones de diseño</span>, no solo
              estética visual.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <ProjectCard
              title="De Excel a un sistema integrado"
              category="Operación · pedidos y control"
              description="Diseñé un sistema que centraliza pedidos, estados y presupuesto."
              bulletPoints={[
                "Pedidos + estados visibles.",
                "Control de presupuesto semanal.",
                "Menos errores y menos carga mental.",
              ]}
              impact="Seguimiento semanal más claro y más autonomía del equipo."
              keyDecision="Centralizar información dispersa para eliminar búsqueda manual y decisiones repetitivas."
              image={imgFrame484}
              href="https://nodux1.vercel.app/demo/dashboard"
              delay={0}
            />

            <ProjectCard
              title="Comunicación clara para uso real"
              category="Copys · mensajes · estructura"
              description="Optimicé contenido para uso final."
              bulletPoints={[
                "Simplifiqué microcopys para reducir fricción.",
                "Reescribí textos clave (estados, mensajes, CTAs).",
                "Alineé tono, intención y estructura.",
              ]}
              impact="Menos ambigüedad. Decisiones más claras."
              keyDecision="Priorizar claridad sobre completitud: decir lo justo para que la persona actúe sin dudar."
              image={imgFrame485}
              href="https://www.figma.com/design/hutgtwWXVYPlikjgJ6rXom/Microcopys?node-id=0-1&t=3xAQzwuZDadC4K1V-1"
              delay={0.1}
            />

            <ProjectCard
              title="Identidad visual funcional"
              category="Marca · estética con intención"
              description="Convertí ideas en una identidad consistente."
              bulletPoints={[
                "Definí tono visual y sistema base.",
                "Ordené tipografías, color y usos.",
                "Coherencia entre lo que es y lo que se comunica.",
              ]}
              impact="Mejor primera impresión y más intención de contacto."
              keyDecision="Crear sistema visual que refuerza jerarquía y reduce decisiones de diseño futuras."
              image={imgFrame486}
              href="https://www.figma.com/design/og12a23torttMtN5M46gmz/Branding?t=3xAQzwuZDadC4K1V-1"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <section id="metodo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Space_Grotesk'] font-medium text-4xl md:text-5xl text-[#13293d] mb-6">
                  Cómo diseño claridad
                </h2>

                <div className="bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff] rounded-2xl p-6 shadow-xl">
                  <p className="font-['Space_Mono'] text-base text-[#13293d] leading-relaxed">
                    Diseño productos y sistemas partiendo de{" "}
                    <span className="font-bold">cómo el trabajo se vive en la práctica</span>,
                    no desde escenarios ideales.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-8 relative rounded-2xl overflow-hidden shadow-2xl"
                >
                    <img
                      src={imgProfile}
                      alt="Proceso de trabajo"
                    className="w-full h-64 object-cover"
                    style={{ objectPosition: "50% 30%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13293d]/60 to-transparent" />
                </motion.div>
              </motion.div>
            </div>

            <div className="space-y-6" ref={methodRef}>
              <MethodStepSequential
                title="Observar"
                description="La experiencia real: dónde hay fricción, cansancio y confusión."
                icon={Search}
                index={0}
                isActive={activeMethodStep === 0}
              />

              <MethodStepSequential
                title="Decidir"
                description="Dónde se piensa de más y qué decisión falta estar diseñada."
                icon={Grid3X3}
                index={1}
                isActive={activeMethodStep === 1}
              />

              <MethodStepSequential
                title="Reducir"
                description="Lo que exige esfuerzo innecesario, memoria o atención constante."
                icon={Minimize2}
                index={2}
                isActive={activeMethodStep === 2}
              />

              <MethodStepSequential
                title="Priorizar"
                description="Decisiones de diseño que alivian la operación y mejoran el uso real."
                icon={List}
                index={3}
                isActive={activeMethodStep === 3}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 bg-[#f3d9a4] rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#f47dcf]" />

            <h3 className="font-['Space_Mono'] font-bold text-lg text-[#13293d] mb-6">
              Trabajo donde hay:
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: MessageCircleX, text: "Confusión" },
                { icon: ShoppingCart, text: "Fricción" },
                { icon: Users, text: "Cansancio operativo" },
                { icon: Laptop, text: 'Sistemas que "funcionan"' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[rgba(244,125,207,0.4)] to-[rgba(199,185,255,0.4)] rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                >
                  <item.icon className="w-8 h-8 text-[#f47dcf]" />
                  <p className="font-['Space_Mono'] text-sm text-[#13293d]">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-['Space_Mono'] font-bold text-base text-black text-center max-w-md mx-auto"
            >
              El orden es la consecuencia de un sistema bien diseñado.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#13293d] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-['Space_Grotesk'] font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] mb-6">
              Cuando el sistema está bien diseñado, estos son los cambios que se producen de forma
              consistente:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <PrincipleCard
              title="Más claridad operativa"
              description="Las personas saben: qué hacer, cuándo y por qué, sin tener que preguntar o interpretar."
              icon={Workflow}
              delay={0}
            />

            <PrincipleCard
              title="Menos carga mental"
              description="Menos decisiones innecesarias, menos memoria exigida, menos agotamiento diario."
              icon={Brain}
              delay={0.1}
            />

            <PrincipleCard
              title="Menos errores evitables"
              description="Estados claros, reglas explícitas y flujos que previenen fallos antes de que ocurran."
              icon={LayoutDashboard}
              delay={0.2}
            />

            <PrincipleCard
              title="Mejor ejecución"
              description="El trabajo avanza con menos fricción y menos dependencia de urgencias o personas clave."
              icon={ChevronRight}
              delay={0.3}
            />

            <PrincipleCard
              title="Sistemas que se sostienen"
              description='Lo diseñado no depende de estar "encima", funciona incluso cuando hay rotación o cansancio.'
              icon={Settings}
              delay={0.4}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff] rounded-2xl p-6 text-center shadow-xl">
                <p className="font-['Space_Grotesk'] font-medium text-lg text-[#13293d]">
                  Claridad para el uso real
                </p>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-['Space_Grotesk'] font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#f47dcf] to-[#c7b9ff]"
          >
            Diseño para que las cosas, no solo se vean ordenadas, también para que funcionen mejor
            en la práctica.
          </motion.p>
        </div>
      </section>

      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f6f1e7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-['Space_Grotesk'] font-medium text-4xl md:text-5xl text-[#13293d] mb-8">
              Formas de trabajar conmigo
            </h2>

            <div className="bg-gradient-to-br from-[rgba(244,125,207,0.15)] to-[rgba(199,185,255,0.15)] border border-[rgba(244,125,207,0.4)] rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <h3 className="font-['Space_Grotesk'] font-medium text-2xl text-[#13293d] mb-4">
                ¿Cuál elijo?
              </h3>
              <div className="space-y-3 text-left">
                {[
                  {
                    label: "Audit",
                    text: "si no sabes qué está fallando.",
                  },
                  {
                    label: "Ops",
                    text: "si necesitas sostener el orden en el día a día.",
                  },
                  {
                    label: "Sprint",
                    text: "si el problema ya está claro y hay que destrabarlo rápido.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#f47dcf] to-[#c7b9ff] flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="font-['Space_Mono'] text-base text-black">
                      <span className="font-bold">{item.label}</span> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceCardCollapsible
              title="Clarity Audit"
              subtitle="Diagnóstico inicial"
              description="Para cuando hay fricción y no ves el origen."
              features="Observamos cómo se vive el trabajo en la práctica para detectar: dónde se piensa de más, qué decisiones faltan, qué está generando desgaste."
              items={["Análisis del problema", "Diagnóstico claro", "Prioridades"]}
              cta="Quiero un audit"
              ctaHref="https://wa.me/message/GZH5BQEALJNCL1"
              icon={Target}
              delay={0}
            />

            <ServiceCardCollapsible
              title="Clarity Ops"
              subtitle="Acompañamiento mensual"
              description="Para diseñar claridad operativa sostenible."
              features="Trabajamos sobre flujos, sistemas y comunicación para el día a día: menos urgencias, menos centralización, más claridad para ejecutar."
              items={["Flujos claros", "Sistemas livianos", "Comunicación operativa"]}
              cta="Cómo trabajamos"
              ctaHref="https://wa.me/message/GZH5BQEALJNCL1"
              icon={Settings}
              delay={0.1}
            />

            <ServiceCardCollapsible
              title="Clarity Sprint"
              subtitle="Intensivo de 2 semanas"
              description="Para resolver un problema puntual."
              features="Nos concentramos en analizar, diseñar y ordenar un punto crítico: foco total, decisiones claras, solución concreta."
              items={["Análisis", "Rediseño", "Sistema completo"]}
              cta="Quiero un sprint"
              ctaHref="https://wa.me/message/GZH5BQEALJNCL1"
              icon={Target}
              delay={0.2}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative"
          >
            <img src={imgTeam} alt="Trabajo en equipo" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#f47dcf]/40 to-[#c7b9ff]/40 opacity-40" />
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#13293d] text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-['Space_Grotesk'] font-medium text-4xl md:text-5xl text-[#fcfcfd] mb-8">
              Conectemos
            </h2>

            <motion.a
              href="mailto:paolazerpak@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[rgba(244,125,207,0.4)] to-[rgba(199,185,255,0.4)] rounded-full px-8 py-4 mb-12 group"
            >
              <span className="font-['Space_Mono'] text-base text-[#f6f1e7]">Escribeme</span>
              <motion.div whileHover={{ x: 4, y: -4 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight className="w-5 h-5 text-[#f6f1e7]" />
              </motion.div>
            </motion.a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <motion.a
                href="https://www.linkedin.com/in/paolazerpa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: "#f47dcf" }}
                className="flex items-center gap-2 font-['Space_Mono'] text-base text-[#f47dcf] underline"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </motion.a>

              <motion.a
                href="https://wa.me/message/GZH5BQEALJNCL1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="font-['Space_Mono'] text-sm text-[#fcfcfd] underline flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                +54 9 11 3365 2899
              </motion.a>

              <motion.a
                href="mailto:paolazerpak@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="font-['Space_Mono'] text-sm text-[#fcfcfd] underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                paolazerpak@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#13293d] border-t border-[#f47dcf]/20 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-['Space_Mono'] text-sm text-[#f6f1e7]/60">
            © {new Date().getFullYear()} Paola Zerpa · Product Designer · Criterio
            para uso real
          </p>
        </div>
      </footer>
    </div>
  );
}
