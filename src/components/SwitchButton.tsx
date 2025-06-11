import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";

type SwitchButtonProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function SwitchButton({
  darkMode,
  toggleDarkMode,
}: SwitchButtonProps) {
  return (
    <>
      <button className="switch-theme-color" onClick={toggleDarkMode}>
        {" "}
        {darkMode ? <SunIcon color="white" /> : <MoonIcon color="black" />}
      </button>
    </>
  );
}
