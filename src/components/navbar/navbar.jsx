import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="flex items-center h-20 justify-around py-2 bg-[#000348] text-white">
        <h4 className="flex font-bold text-2xl text-[#f26419]">
          Web <h4 className="text-white">Masters</h4>
        </h4>
        <ul className="flex gap-5 font-bold">
          <Link to="/"> Aplicaciones </Link>
          <Link to="/"> Servicios </Link>
          <Link to="/"> Precios </Link>
          <Link to="/"> Soporte </Link>
        </ul>
        <button className="rounded-xs p-2 w-1/6 bg-[#f26419]">
          Contactanos
        </button>
      </nav>
    </>
  );
}

export default Navbar;
