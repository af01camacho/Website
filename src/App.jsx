import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";

const rutas = ["/", "/services", "/projecs"];

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      }
    </>
  );
}

export default App;
