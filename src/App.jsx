import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Error404 from "./pages/error/404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
