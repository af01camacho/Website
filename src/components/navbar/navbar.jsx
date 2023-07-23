import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Menu Desktop */}
      <nav className="md:flex hidden bg-primary-color  py-5 justify-around text-white items-center">
        <h2 className="text-second-color flex font-bold text-2xl">
          Web <h2 className="text-white">Master</h2>
        </h2>
        <ul className="flex gap-5 font-bold text-xm">
          <Link>Aplicaciones</Link>
          <Link>Servicios</Link>
          <Link>Precios</Link>
          <Link>Soporte</Link>
        </ul>

        <button className="font-semibold rounded-sm p-2 w-1/6 bg-second-color text-white">
          Contactanos
        </button>
      </nav>
    </>
  );
}

export default Navbar;
