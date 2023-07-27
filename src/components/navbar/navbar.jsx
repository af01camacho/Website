import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

export function NavbarDesktop() {
  return (
    <>
      <nav className="md:hidden sm:hidden lg:flex hidden  items-center justify-around bg-primary-color h-16">
        {/* Logo */}
        <div className="flex text-xl uppercase font-extrabold font-primary-font">
          <h2 className="text-second-color">Masters</h2>
          <h2 className="text-white">Web</h2>
        </div>
        {/* Menu */}
        <ul className="text-white font-primary-font uppercase font-bold  gap-5 flex">
          <Link>Aplicaciones</Link>
          <Link>Servicios</Link>
          <Link>Contactanos</Link>
          <Link>Portafolio</Link>
        </ul>
        <div>
          <button className="bg-second-color p-2 rounded-sm text-white text-m">
            Iniciar Sesion
          </button>
        </div>
      </nav>
    </>
  );
}

export function NavbarMobile() {
  return (
    <>
      <div className="bg-primary-color lg:hidden flex justify-evenly h-14  items-center">
        {/* Menu */}
        <div className="bg-[#ffffff5e] p-1 rounded-s">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#f2f2f2" }}
          />
        </div>

        {/* Logo */}
        <div className="flex uppercase text-white font-primary-font font-extrabold text-2xl justify-center">
          <h2>Master</h2>
          <h2 className="text-second-color">Web</h2>
        </div>
        <div>
          <button className="bg-second-color p-1 rounded-sm text-white font-primary-font ">
            Contactarnos
          </button>
        </div>
      </div>
    </>
  );
}
