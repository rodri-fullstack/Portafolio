function Navbar() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#inicio" className="brand">
          Portafolio Rodrigo Valderrama
        </a>

        <nav className="menu">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#educacion">Educación</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;