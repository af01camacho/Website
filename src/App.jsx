import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Services from "./pages/services/services";

function App({ toogleDarkMode }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
