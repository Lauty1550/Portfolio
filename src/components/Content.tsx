import "../css/Content.css";
import Avatar from "./Avatar";
import "../css/ProyectoCard.css";
import ProyectoComponent from "./ProyectoComponent";
import StarIcon from "../assets/StarIcon";
import GitHubButton from "../assets/GitHubIcon";
import InstagramButton from "../assets/InstagramIcon";
import "../css/SocialButton.css";
import LinkedInButton from "../assets/LinkedInIcon";
import AboutMeIcon from "../assets/AboutMeIcon";
import EmailIcon from "../assets/EmailIcon";
import MailComponent from "./MailComponent";
import { useTheme } from "../context/ThemeContext";

export default function Content() {
  const { darkMode } = useTheme();

  return (
    <main className="content">
      <section className="content-presentacion">
        <Avatar classCSS="image-border" />
        <header className="header-presentacion">
          <h1 className="titulo">Lautaro Jaime</h1>
          <h2 className="descripcion">
            Desarrolador de software frontend y backend
          </h2>
          <div className="social-container">
            <LinkedInButton color={darkMode ? "white" : "black"} />
            <GitHubButton color={darkMode ? "white" : "black"} />
            <InstagramButton color={darkMode ? "white" : "black"} />
          </div>
        </header>
      </section>
      <hr className="linea-horizontal"></hr>

      <section className="section">
        <h1 className="subtitulo">
          Sobre mi <AboutMeIcon color={darkMode ? "white" : "#424dadff"} />
        </h1>
        <p className="parrafo">
          Soy estudiante de la UNLP y actualmente me encuentro cursando la
          Licenciatura en Sistemas. Paralelamente, estoy a dos finales de
          completar la carrera de Analista en Tecnologías de la Información y la
          Comunicación (ATIC).
        </p>

        <p className="parrafo">
          Me apasiona el desarrollo de software tanto en frontend como en
          backend, y disfruto especialmente trabajar con React en el entorno
          web.
        </p>
      </section>

      <br></br>

      <section className="section">
        <h1 className="subtitulo">
          Proyectos <StarIcon color={darkMode ? "white" : "#424dadff"} />
        </h1>
        <ProyectoComponent
          imagenUrl="PanCost.png"
          titulo="PanCost"
          descripcion="Sistema de gestión de costos para panaderías. Actualmente es utilizado por una panadería local para el análisis de costos y precios."
          pageUrl="https://pan-cost-showcase.vercel.app/"
          codeUrl="https://github.com/Lauty1550/PanCost-frontend.git"
          skills={[
            "TypeScriptIcon",
            "ReactIcon",
            "ExpressIcon",
            "PosgreSqlIcon",
            "CssIcon",
          ]}
        />
        <ProyectoComponent
          imagenUrl="/FloorPlan.png"
          titulo="FloorPlan Management"
          descripcion="Sistema de organizacion de planos de construccion. Proyecto universitario."
          pageUrl="https://floor-plan-management-system.vercel.app/home"
          codeUrl="https://github.com/Lauty1550/Floorplan-Management-System"
          skills={[
            "JavaScriptIcon",
            "ReactIcon",
            "NestJSIcon",
            "MongoDbIcon",
            "CssIcon",
          ]}
        />
        <ProyectoComponent
          imagenUrl="Schneider.jpg"
          titulo="KaiserCalc"
          descripcion="Calculadora de estadistiscas y sinergias de jugadores de CTDT. Utilizada por la comunidad latina del juego movil."
          pageUrl="https://kaiser-calc-js-git-develop-lautyjaime09-gmailcoms-projects.vercel.app/"
          codeUrl="https://github.com/Lauty1550/KaiserCalc"
          skills={["PythonIcon", "ReactIcon", "CssIcon"]}
        />
      </section>

      <br></br>

      <section className="section">
        <h1 className="subtitulo">
          Email <EmailIcon color={darkMode ? "white" : "#424dadff"} />
        </h1>
        <MailComponent />
      </section>

      <br></br>
    </main>
  );
}
