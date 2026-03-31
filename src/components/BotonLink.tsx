import RepoIcon from "../assets/RepoIcon";
import UrlIcon from "../assets/UrlIcon";
import { useTheme } from "../context/ThemeContext";
import "../css/BotonLink.css";

type BotonLinkProps = {
  pageUrl: string;
  type: "URL" | "CODE";
};

export default function BotonLink({ pageUrl, type }: BotonLinkProps) {
  const { darkMode } = useTheme();

  if (pageUrl === "") return;

  return (
    <a
      href={pageUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button className="boton-link">
        <span>{type === "URL" ? "Live" : "Code"}</span>

        {type === "URL" ? (
          <UrlIcon color={darkMode ? "black" : "white"} />
        ) : (
          <RepoIcon color={darkMode ? "black" : "white"} />
        )}
      </button>
    </a>
  );
}
