import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import ProjectCarousel from "./components/ProjectCarousel";
import { 
  FileDown, 
  Mail, 
  Palette, 
  Archive, 
  LayoutGrid, 
  FileText,
  ShoppingBag,
  DollarSign,
  Users,
  MessageCircle
} from "lucide-react";

export default function App() {
  const handleDownloadCV = () => {
    console.log("Download CV");
  };

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    console.log("Contact");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzYyOTkxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Paola Zerpa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hero Text */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
                  Paola Zerpa
                </h1>
                <h2 className="text-xl md:text-2xl text-[var(--warm-gray)]">
                  Diseñadora UX/UI & Estratega Digital
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-[var(--warm-gray)] max-w-xl">
                Combino diseño, sistemas y experiencia real en operaciones. 
                Entiendo cómo funciona un negocio desde adentro —proveedores, stock, 
                presupuesto, atención al público— y uso ese enfoque práctico para 
                diseñar soluciones simples y funcionales.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={handleViewProjects}
                  className="bg-[var(--dark-gray)] hover:bg-[var(--dark-gray)]/90 text-white rounded-full px-8 py-6 shadow-[0_4px_16px_rgb(0,0,0,0.1)]"
                >
                  Ver proyectos
                </Button>
                <Button 
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-[var(--dark-gray)] text-[var(--dark-gray)] hover:bg-[var(--beige)] rounded-full px-8 py-6"
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-6 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Habilidades clave
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Column 1 - Design Skills */}
            <Card className="p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-0">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sage)] rounded-xl">
                    <Palette className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Diseño UX/UI, prototipos y UI</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Interfaces funcionales y visuales
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sage)] rounded-xl">
                    <LayoutGrid className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Arquitectura de información</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Organización clara y navegable
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sage)] rounded-xl">
                    <FileText className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Análisis y mejora de procesos</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Optimización operativa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sage)] rounded-xl">
                    <Archive className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Documentación y orden interno</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Sistemas claros y escalables
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Column 2 - Operations Skills */}
            <Card className="p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-0">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sand)] rounded-xl">
                    <ShoppingBag className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Gestión de stock y vencimientos</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Control de inventario
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sand)] rounded-xl">
                    <Users className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Seguimiento de proveedores</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Coordinación y relaciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sand)] rounded-xl">
                    <DollarSign className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Control de presupuesto</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Administración financiera
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--sand)] rounded-xl">
                    <MessageCircle className="h-5 w-5 text-[var(--dark-gray)]" />
                  </div>
                  <div>
                    <h3 className="mb-1">Atención al cliente y coordinación operativa</h3>
                    <p className="text-sm text-[var(--warm-gray)]">
                      Gestión de equipos y comunicación
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Proyectos seleccionados
          </h2>

          <ProjectCarousel />
        </div>
      </section>

      {/* Download CV Section */}
      <section className="py-16 md:py-24 px-6 bg-[var(--beige)]">
        <div className="max-w-3xl mx-auto">
          <Card className="relative p-12 md:p-16 bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-0">
            {/* Avatar */}
            <div className="flex justify-center mb-8 -mt-20">
              <div className="relative">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-[var(--beige)] p-1.5 shadow-[0_0_0_8px_rgba(255,255,255,0.8),0_8px_24px_rgb(0,0,0,0.08)]">
                  <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/50">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzYyOTkxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Paola Zerpa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl">
                Descargar CV completo
              </h2>
              
              <p className="text-base md:text-lg text-[var(--warm-gray)] leading-relaxed max-w-xl mx-auto">
                En este archivo vas a encontrar mi recorrido completo: experiencia en atención 
                al público, gestión de stock y vencimientos, proveedores, administración y 
                coordinación de equipos; además de mi camino en diseño, sistemas y organización.
              </p>
              
              <p className="text-base md:text-lg text-[var(--warm-gray)] leading-relaxed">
                Todo en un solo lugar, claro y ordenado.
              </p>
              
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-[var(--dark-gray)] hover:bg-[var(--dark-gray)]/90 text-white rounded-full px-10 py-6 w-72 shadow-[0_4px_16px_rgb(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgb(0,0,0,0.16)] transition-all"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Charlamos?
          </h2>
          
          <p className="text-lg text-[var(--warm-gray)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Estoy creando proyectos, aprendiendo y trabajando en diseño, sistemas y operaciones. 
            Si querés que colaboremos, te leo.
          </p>
          
          <Button 
            onClick={handleContact}
            className="bg-[var(--dark-gray)] hover:bg-[var(--dark-gray)]/90 text-white rounded-full px-10 py-6 shadow-[0_4px_16px_rgb(0,0,0,0.1)]"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contactar
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-[var(--warm-gray)]">
            © 2024 Paola Zerpa. Diseñadora UX/UI & Estratega Digital.
          </p>
        </div>
      </footer>
    </div>
  );
}