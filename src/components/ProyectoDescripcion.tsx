type ProyectoDescripcionProps = {
  titulo: string;
  descripcion: string;
};

export default function ProyectoDescripcion({
  titulo,
  descripcion,
}: ProyectoDescripcionProps) {
  return (
    <main className="proyecto-informacion">
      <h1 className="titulo-proyecto">{titulo}</h1>
      <h2 className="descripcion descripcion-proyecto">{descripcion}</h2>
    </main>
  );
}
