import type { Icons } from "../types/Icons";
import BotonLink from "./BotonLink";
import IconWrapper from "./IconWrapper";

type ProyectoDescripcionProps = {
  titulo: string;
  descripcion: string;
  pageUrl: string;
  codeUrl: string;
  skills: Icons[];
};

export default function ProyectoDescripcion({
  titulo,
  descripcion,
  pageUrl,
  skills,
  codeUrl,
}: ProyectoDescripcionProps) {
  return (
    <main className="proyecto-informacion">
      <h1 className="titulo-proyecto">{titulo}</h1>
      <h2 className="descripcion descripcion-proyecto">{descripcion}</h2>
      <article className="project-icons">
        {skills.map((skill) => (
          <span>{<IconWrapper skill={skill} />}</span>
        ))}
      </article>

      <div className="project-buttons">
        <BotonLink pageUrl={pageUrl} type="URL" />
        <BotonLink pageUrl={codeUrl} type="CODE" />
      </div>
    </main>
  );
}
