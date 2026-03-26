import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
     <section className="hero">
  <div className="container hero-content">
    <div className="hero-text">
      <span className="hero-kicker">DESARROLLO WEB, DATOS Y ACCESIBILIDAD</span>

      <h1>Rodrigo Valderrama</h1>

      <h2>
        Desarrollador Full Stack con experiencia en análisis de datos,
        desarrollo web y diseño digital
      </h2>

      <p>
        Construyo soluciones digitales funcionales combinando desarrollo,
        automatización, visualización de datos y enfoque en experiencia de usuario.
      </p>
    </div>
    <div className="hero-image">
  <img
    src="/img/hero-programming.jpg"
    alt="Ilustración de laptop con código, representando desarrollo web y programación"
  />
</div>

  </div>
</section>

        <section id="sobre-mi" className="section">
          <div className="container about-container">
            <h2>Sobre mí</h2>

            <p>
              Soy <strong>Rodrigo Valderrama</strong>, desarrollador Full Stack
              con experiencia en <strong>análisis de datos</strong>,
              <strong> desarrollo web</strong>, <strong>diseño gráfico</strong> y
              <strong> accesibilidad digital</strong>.
            </p>

            <p>
              He trabajado en entornos corporativos y tecnológicos, participando en
              procesos de <strong>automatización de reportes</strong>,
              <strong> visualización de datos</strong>, desarrollo de soluciones
              digitales y mejora de procesos.
            </p>

            <p>
              Mi perfil combina pensamiento analítico, creatividad visual y
              capacidad de adaptación, integrando herramientas técnicas con una
              mirada centrada en la experiencia de las personas.
            </p>

            <p>
              Además de mi formación en desarrollo de software, cuento con base en
              <strong> kinesiología</strong> y <strong>diseño gráfico</strong>, lo
              que me permite abordar los proyectos con una visión integral,
              humana y funcional.
            </p>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="container">
            <h2 className="section-title-center">Experiencia</h2>

            <div className="cards-grid landing-grid">
              <article className="card">
                <span className="card-date">2021 – 2024</span>
                <h3>Analista de Datos y Gestión de la Información — Apex America</h3>
                <p>
                  Implementé automatización de reportes con SQL, Excel, Power BI,
                  BigQuery y Looker Studio, reduciendo tareas manuales y mejorando
                  la eficiencia operativa.
                </p>
              </article>

              <article className="card">
                <span className="card-date">2020 – 2021</span>
                <h3>Representante de Atención al Cliente — WOM Redes Sociales</h3>
                <p>
                  Desarrollé soluciones internas orientadas a ventas y atención,
                  resolviendo casos críticos y fortaleciendo la experiencia de cliente
                  en canales digitales.
                </p>
              </article>

              <article className="card">
                <span className="card-date">2012 – 2020</span>
                <h3>Diseñador Gráfico — Universidad de Talca</h3>
                <p>
                  Diseñé material gráfico y audiovisual para proyectos académicos y
                  científicos, combinando creatividad, comunicación visual y precisión
                  técnica.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="educacion" className="section">
  <div className="container">
    <h2 className="section-title-center">Educación</h2>

    <div className="cards-grid education-grid">
      <article className="card education-card">
        <a
          href="/certificados/talento-digital.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <img
            src="/certificados/talento-digital-preview.jpg"
            alt="Vista previa certificado Full Stack JavaScript Trainee"
            className="certificate-image"
          />
        </a>

        <h3>Full Stack JavaScript Trainee</h3>
        <p>
          Formación en desarrollo de aplicaciones Full Stack, actualmente en
          curso con Talento Digital Chile y SENCE.
        </p>
        <p className="certificate-note">Haz clic en la imagen para abrir el PDF.</p>
      </article>

      <article className="card education-card">
        <a
          href="/certificados/generation-java.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <img
            src="/certificados/generation-java-preview.jpg"
            alt="Vista previa certificado Full Stack Java Junior Generation Chile"
            className="certificate-image"
          />
        </a>

        <h3>Full Stack Java Junior Java Generation Chile</h3>
        <p>
          Programa intensivo de 520 horas con foco en desarrollo web, buenas
          prácticas, pruebas unitarias y trabajo colaborativo.
        </p>
        <p className="certificate-note">Haz clic en la imagen para abrir el PDF.</p>
      </article>

      <article className="card education-card">
        <a
          href="/certificados/kine.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          <img
            src="/certificados/kine-preview.jpg"
            alt="Vista previa certificado o documento de Kinesiología"
            className="certificate-image"
          />
        </a>

        <h3>Kinesiología</h3>
        <p>
          Formación complementaria que fortalece mi visión integral,
          combinando análisis, creatividad, investigación y enfoque en las
          personas.
        </p>
        <p className="certificate-note">Haz clic en la imagen para abrir el PDF.</p>
      </article>
    </div>
  </div>
</section>

        <section id="habilidades" className="section">
          <div className="container">
            <h2 className="section-title-center">Habilidades</h2>

            <div className="skills-grid-single">
              <div className="card skill-item">Java</div>
              <div className="card skill-item">JavaScript (ES6+)</div>
              <div className="card skill-item">React</div>
              <div className="card skill-item">HTML5 y CSS3</div>
              <div className="card skill-item">Bootstrap</div>
              <div className="card skill-item">MySQL y PostgreSQL</div>
              <div className="card skill-item">SQL y BigQuery</div>
              <div className="card skill-item">Power BI y Looker Studio</div>
              <div className="card skill-item">Git y GitHub</div>
              <div className="card skill-item">REST APIs</div>
              <div className="card skill-item">Accesibilidad web (WCAG / A11Y)</div>
              <div className="card skill-item">Scrum y Kanban</div>
            </div>
          </div>
        </section>

<section id="proyectos" className="section">
  <div className="container">
    <h2 className="section-title-center">Proyectos</h2>

    <div className="cards-grid landing-grid">
      <article className="card project-card">
        <img
          src="/public/proyectos/nanaikit.jpg"
          alt="Vista previa del proyecto Nanai Kit"
          className="project-image"
        />
        <h3>Nanai Kit</h3>
        <p>
          Plataforma emocional accesible desarrollada con React y Bootstrap,
          enfocada en autogestión emocional, categorización por niveles y kits
          personalizados.
        </p>

        <div className="project-links">
          <a
            href="https://nanai-kit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver proyecto
          </a>

          <a
            href="https://github.com/rodri-fullstack/NanaiKit"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            GitHub
          </a>
        </div>
      </article>

      <article className="card project-card">
        <img
          src="/public/proyectos/portafolio.jpg"
          alt="Vista previa del portafolio personal"
          className="project-image"
        />
        <h3>Portafolio personal</h3>
        <p>
          Sitio web diseñado para presentar experiencia, habilidades técnicas
          y proyectos de desarrollo con una identidad clara y profesional.
        </p>

        <div className="project-links">
          <a
            href="https://tuportafolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Ver proyecto
          </a>

          <a
            href="https://github.com/tuusuario/portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            GitHub
          </a>
        </div>
      </article>

      <article className="card project-card">
        <img
          src="/public/proyectos/NPS-TAPP.png"
          alt="Vista previa de soluciones digitales y visualización"
          className="project-image"
        />
        <h3>Soluciones digitales y visualización</h3>
        <p>
          Desarrollo de herramientas orientadas a optimizar procesos, mejorar
          la comunicación visual y apoyar la toma de decisiones basada en datos.
        </p>

        <div className="project-links">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
          
          </a>

          <a
            href="https://github.com/tuusuario/visualizacion"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link secondary"
          >
            
          </a>
        </div>
      </article>
    </div>
  </div>
</section>



        <section id="certificaciones" className="section">
  <div className="container">
    <h2 className="section-title-center">Certificaciones</h2>

    <div className="cards-grid certifications-grid">
      <article className="card certification-card">
        <span className="card-date">2023</span>
        <span className="cert-badge">Certificación</span>
        <h3>Metodologías Ágiles en la Implementación de Proyectos</h3>
        <p className="cert-institution">Servicio Nacional de Capacitación y Empleo</p>
        <p>Con una duración de 120 hrs, Chile.</p>
        <a
          href="/certificados/MetodologiasAgiles.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
                 <img
            src="/certificados/MetodologiasAgiles.jpg"
            alt="Vista previa certificado o documento de Metodologías Ágiles"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>

      <article className="card certification-card">
        <span className="card-date">2025 </span>
        <span className="cert-badge">Curso</span>
        <h3>Ciberseguridad y Datos Personales</h3>
        <p className="cert-institution">Instituto Profesional IACC</p>
        <p>Con una duración de 4 hrs, Chile.</p>
        <a
          href="/certificados/ciberseguridad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >

        <img
            src="/certificados/ciberseguridad.jpg"
            alt="Vista previa certificado o documento de Ciberseguridad"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>

      <article className="card certification-card">
        <span className="card-date">2022</span>
        <span className="cert-badge">Curso</span>
        <h3>Manejo de Office</h3>
        <p className="cert-institution">Servicio Nacional de Capacitación y Empleo</p>
        <p>Con una duración de 100 hrs, Chile.</p>
        <a
          href="/certificados/Office365.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
         <img
            src="/certificados/Office365.jpg"
            alt="Vista previa certificado o documento de Manejo de Office"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>

      <article className="card certification-card">
        <span className="card-date">2022</span>
        <span className="cert-badge">Curso</span>
        <h3>Aplicación de Herramientas Tecnológicas para la Educación y la Enseñanza</h3>
        <p className="cert-institution">Servicio Nacional de Capacitación y Empleo</p>
        <p>Con una duración de 50 hrs, Chile.</p>
        <a
          href="/certificados/ManejoHerramientas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
             <img
            src="/certificados/ManejoHerramientas.jpg"
            alt="Vista previa certificado o documento de Manejo de Herramientas Tecnológicas para la Educación y la Enseñanza"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>

      <article className="card certification-card">
        <span className="card-date">2022</span>
        <span className="cert-badge">Curso</span>
        <h3>Herramientas Básicas de Power BI para el Análisis de Datos</h3>
        <p className="cert-institution">Contacto Laboral</p>
        <p>Con una duración de 24 hrs, Chile.</p>
        <a
          href="/certificados/power-bi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
             <img
            src="/certificados/power-bi.jpg"
            alt="Vista previa certificado o documento de Power BI"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>

      <article className="card certification-card">
        <span className="card-date">2022</span>
        <span className="cert-badge">Certificación</span>
        <h3>Microsoft Excel Intermedio</h3>
        <p className="cert-institution">The Ninja Company SpA</p>
        <p>Con una duración de 40 hrs, Chile.</p>
        <a
          href="/certificados/Excel_Intermedio.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          <img
            src="/certificados/Excel_Intermedio.jpg"
            alt="Vista previa certificado o documento de Microsoft Excel Intermedio"
            className="certificate-image"
          />
          Ver certificado
        </a>
      </article>
    </div>
  </div>
</section>
      </main>
    </>
  );
}

export default App;