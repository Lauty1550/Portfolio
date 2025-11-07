import UrlIcon from "../assets/UrlIcon";
import { useTheme } from "../context/ThemeContext";
import "../css/BotonLink.css";

type BotonLinkProps = {
  pageUrl: string;
};

export default function BotonLink({ pageUrl }: BotonLinkProps) {
  const { darkMode } = useTheme();

  return (
    <a
      href={pageUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button className="boton-link">
        <span>Live</span> <UrlIcon color={darkMode ? "black" : "white"} />
      </button>
    </a>
  );
}
