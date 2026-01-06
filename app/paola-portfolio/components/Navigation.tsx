export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/80 backdrop-blur-sm border-b border-[#e8e6e1]">
      <div className="container-portfolio">
        <div className="flex items-center justify-between h-16">
          <a href="/paola-portfolio" className="text-[#2a2a2a] font-medium">
            Paola Zerpa
          </a>

          <div className="flex items-center gap-8">
            <a
              href="/paola-portfolio#proyectos"
              className="text-[0.875rem] text-[#4a4a4a] transition-smooth hover:text-[#2a2a2a]"
            >
              Proyectos
            </a>
            <a
              href="/paola-portfolio#sobre-mi"
              className="text-[0.875rem] text-[#4a4a4a] transition-smooth hover:text-[#2a2a2a]"
            >
              Sobre mí
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

