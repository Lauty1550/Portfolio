import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import { useTheme } from "../context/ThemeContext";

export default function SwitchButton() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <button className="switch-theme-color" onClick={toggleDarkMode}>
        {" "}
        {darkMode ? <SunIcon color="white" /> : <MoonIcon color="black" />}
      </button>
    </>
  );
}
