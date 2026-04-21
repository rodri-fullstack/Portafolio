import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container nav">
        <a href="#inicio" className="brand" onClick={handleLinkClick}>
          Portafolio Rodrigo Valderrama
        </a>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="main-menu" className={`menu ${isOpen ? "menu-open" : ""}`}>
          <a href="#sobre-mi" onClick={handleLinkClick}>Sobre mí</a>
          <a href="#experiencia" onClick={handleLinkClick}>Experiencia</a>
          <a href="#educacion" onClick={handleLinkClick}>Educación</a>
          <a href="#habilidades" onClick={handleLinkClick}>Habilidades</a>
          <a href="#proyectos" onClick={handleLinkClick}>Proyectos</a>
          <a href="#certificaciones" onClick={handleLinkClick}>Certificaciones</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;