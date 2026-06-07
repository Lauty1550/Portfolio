import type { Icons } from "../types/Icons";
import ProyectoCard from "./ProyectoCard";
import ProyectoDescripcion from "./ProyectoDescripcion";

type ProyectoComponentProps = {
  imagenUrl: string;
  titulo: string;
  descripcion: string;
  pageUrl: string;
  codeUrl: string;
  skills: Icons[];
};

export default function ProyectoComponent({
  imagenUrl,
  titulo,
  descripcion,
  pageUrl,
  skills,
  codeUrl,
}: ProyectoComponentProps) {
  return (
    <article className="card-container">
      <ProyectoCard imagenUrl={imagenUrl} pageUrl={pageUrl} />
      <ProyectoDescripcion
        titulo={titulo}
        descripcion={descripcion}
        pageUrl={pageUrl}
        codeUrl={codeUrl}
        skills={skills}
      />
    </article>
  );
}
