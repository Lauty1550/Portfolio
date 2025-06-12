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

export default function Content({ darkMode }: { darkMode: boolean }) {
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
          Sobre mi <AboutMeIcon color={darkMode ? "white" : "black"} />
        </h1>
        <p className="parrafo">
          Ultimo año en la carrera analista en TIC de la UNLP
        </p>
      </section>

      <br></br>

      <section className="section">
        <h1 className="subtitulo">
          {" "}
          Proyectos <StarIcon color={darkMode ? "white" : "black"} />
        </h1>
        <ProyectoComponent
          imagenUrl="Schneider.jpg"
          titulo="Captain Tsubasa Team"
          descripcion="Calculadora de estadistiscas y sinergias de jugadores"
        />
        <ProyectoComponent
          imagenUrl="/FloorPlan.png"
          titulo="FloorPlan Management"
          descripcion="Sistema de organizacion de planos de construccion"
        />
      </section>

      <br></br>

      <section className="section">
        <h1 className="subtitulo">
          Email <EmailIcon color={darkMode ? "white" : "black"} />
        </h1>
        <MailComponent />
      </section>

      <br></br>
    </main>
  );
}
