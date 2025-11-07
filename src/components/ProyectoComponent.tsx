import ProyectoCard from "./ProyectoCard";
import ProyectoDescripcion from "./ProyectoDescripcion";

type ProyectoComponentProps = {
  imagenUrl: string;
  titulo: string;
  descripcion: string;
  pageUrl: string;
};

export default function ProyectoComponent({
  imagenUrl,
  titulo,
  descripcion,
  pageUrl,
}: ProyectoComponentProps) {
  return (
    <article className="card-container">
      <ProyectoCard imagenUrl={imagenUrl} pageUrl={pageUrl} />
      <ProyectoDescripcion
        titulo={titulo}
        descripcion={descripcion}
        pageUrl={pageUrl}
      />
    </article>
  );
}
