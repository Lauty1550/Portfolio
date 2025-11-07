import { useEffect } from "react";
import Header from "./components/Header";
import "./css/Root.css";
import SwitchButton from "./components/SwitchButton";
import Content from "./components/Content";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { darkMode } = useTheme();

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <main className="root">
      <div className="home">
        <Header switchButton={<SwitchButton />} />
        <Content />

        {/* <Footer/>  */}
      </div>
    </main>
  );
}
