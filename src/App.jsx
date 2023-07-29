import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import { useState } from "react";

function App({ toogleDarkMode }) {
  const [DarkMode, setDarkMode] = useState(false);

  function toogleDarkMode() {
    if (DarkMode == false) {
      document.querySelector("html").classList.toggle("dark");
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home DarkMode={toogleDarkMode} />} />
      </Routes>
    </>
  );
}

export default App;
