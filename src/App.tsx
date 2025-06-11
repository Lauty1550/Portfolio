import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./css/Root.css";
import SwitchButton from "./components/SwitchButton";
import Content from "./components/Content";

export default function App() {
  const [darkMode, setDarkmode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved !== null ? JSON.parse(saved) : true; // Modo oscuro por defecto
  });

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

  function toggleDarkMode() {
    setDarkmode((prev: boolean) => !prev);
  }

  return (
    <main className="root">
      <div className="home">
        <Header
          switchButton={
            <SwitchButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
        />
        <Content darkMode={darkMode} />

        {/* <Footer/>  */}
      </div>
    </main>
  );
}
