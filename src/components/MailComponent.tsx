import CopyButton from "../assets/CopyIcon";
import SendButton from "../assets/SendIcon";
import { useTheme } from "../context/ThemeContext";
import "../css/Mail.css";

export default function MailComponent() {
  const { darkMode } = useTheme();

  return (
    <main className="mail-component">
      <h1 className="mail"> lauty.jaime.09@gmail.com</h1>
      <SendButton color={darkMode ? "white" : "black"} />
      <CopyButton color={darkMode ? "white" : "black"} />
    </main>
  );
}
