import ProyectoCard from "./ProyectoCard";
import ProyectoDescripcion from "./ProyectoDescripcion";

type ProyectoComponentProps = {
  imagenUrl: string;
  titulo: string;
  descripcion: string;
};

export default function ProyectoComponent({
  imagenUrl,
  titulo,
  descripcion,
}: ProyectoComponentProps) {
  return (
    <article className="card-container">
      <ProyectoCard imagenUrl={imagenUrl} />
      <ProyectoDescripcion titulo={titulo} descripcion={descripcion} />
    </article>
  );
}
