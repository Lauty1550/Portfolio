import CssIcon from "../assets/CssIcon";
import MongoDbIcon from "../assets/MongoDbIcon";
import MySqlIcon from "../assets/MySqlIcon";
import NestJSIcon from "../assets/NestJs";
import PythonIcon from "../assets/PythonIcon";
import ReactIcon from "../assets/ReactIcon";
import SpringBootIcon from "../assets/SpringBootIcon";
import type { Icons } from "../types/Icons";
import BotonLink from "./BotonLink";

type ProyectoDescripcionProps = {
  titulo: string;
  descripcion: string;
  pageUrl: string;
  skills: Icons[];
};

const IconMap = {
  ReactIcon: <ReactIcon />,
  CssIcon: <CssIcon />,
  MongoDbIcon: <MongoDbIcon />,
  MySqlIcon: <MySqlIcon />,
  NestJSIcon: <NestJSIcon />,
  SpringBootIcon: <SpringBootIcon />,
  PythonIcon: <PythonIcon />,
} as const;

export default function ProyectoDescripcion({
  titulo,
  descripcion,
  pageUrl,
  skills,
}: ProyectoDescripcionProps) {
  return (
    <main className="proyecto-informacion">
      <h1 className="titulo-proyecto">{titulo}</h1>
      <h2 className="descripcion descripcion-proyecto">{descripcion}</h2>
      <article className="project-icons">
        {skills.map((skill) => (
          <span>{IconMap[skill]}</span>
        ))}
      </article>
      <BotonLink pageUrl={pageUrl} />
    </main>
  );
}
