import CopyButton from "../assets/CopyIcon";
import SendButton from "../assets/SendIcon";
import "../css/Mail.css";

type MailComponentProps = {
  darkMode: boolean;
};

export default function MailComponent({ darkMode }: MailComponentProps) {
  return (
    <main className="mail-component">
      <h1 className="mail"> lauty.jaime.09@gmail.com</h1>
      <SendButton color={darkMode ? "white" : "black"} />
      <CopyButton color={darkMode ? "white" : "black"} />
    </main>
  );
}
