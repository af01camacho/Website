import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
export function Navbar() {
  return (
    <>
      {/* Menu Desktop */}
      <nav className="uppercase font-primary-font md:flex hidden bg-primary-color  py-5 justify-around text-white items-center">
        <h2 className="text-second-color flex font-bold text-2xl">
          Web{" "}
          <h2 className="text-second-color text-white flex font-bold text-2xl">
            Master
          </h2>
        </h2>
        <ul className="flex gap-5 font-bold text-xm">
          <Link to="/">Aplicaciones</Link>
          <Link to="/services">Servicios</Link>
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

export function NavbarMobile() {
  return (
    <>
      <nav className="p-2 justify-around items-center md:hidden flex bg-primary-color  uppercase font-primary-font">
        <FontAwesomeIcon icon={faBars} style={{ color: "#f0f0f0" }} />
        <div className="w-[10px]"></div>
        <h2 className="flex text-second-color font-extrabold text-2xl">
          Master <h2 className="text-white">Web</h2>
        </h2>
        <button className="text-white bg-second-color rounded-sm text-xs uppercase   p-2 justify-center flex w-[120px]">
          Contactanos
        </button>
      </nav>
    </>
  );
}
