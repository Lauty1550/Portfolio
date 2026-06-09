type ProyectoCardProps = {
  imagenUrl: string;
  pageUrl: string;
};

export default function ProyectoCard({
  imagenUrl,
  pageUrl,
}: ProyectoCardProps) {
  return (
    <main className="card">
      <a href={pageUrl} target="_blank" rel="noopener noreferrer">
        <img className="proyecto-imagen" src={imagenUrl} draggable={false} />
      </a>
    </main>
  );
}
