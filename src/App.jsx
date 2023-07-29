import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = document.documentElement.classList.contains("dark");

  const changeDarkMode = () => {
    toggleDarkMode
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home changeDarkMode={changeDarkMode} />} />
        <Route
          path="/services"
          element={<Services changeDarkMode={changeDarkMode} />}
        />
      </Routes>
    </>
  );
}

export default App;
