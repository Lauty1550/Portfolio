import "../css/Header.css";
import Avatar from "./Avatar";
type HeaderProps = {
  switchButton: React.ReactNode;
};

export default function Header({ switchButton }: HeaderProps) {
  return (
    <nav className="navbar">
      <main className="header">
        <Avatar classCSS="image-header" />
        <h1 className="header-title"> Lautaro Jaime</h1>
        {switchButton}
      </main>
    </nav>
  );
}
