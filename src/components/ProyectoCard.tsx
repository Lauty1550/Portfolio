type ProyectoCardProps = {
  imagenUrl: string;
};

export default function ProyectoCard({ imagenUrl }: ProyectoCardProps) {
  return (
    <main className="card">
      <img className="proyecto-imagen" src={imagenUrl} />
    </main>
  );
}
