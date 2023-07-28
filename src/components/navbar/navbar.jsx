import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useState } from "react";

export function NavbarDesktop() {
  const menu = [
    {link: "Aplicaciones", route: '/'},
    {link: "Servicios", route: '/services'},
    {link: "Contactanos", route: '/contacto'},
    {link: "Portafolio", route: '/portafolio'}
  ]

  return (
    <>
      <nav className="md:hidden sm:hidden bg-[#000248f2] lg:flex hidden  items-center justify-around h-16">
        {/* Logo */}
        <div className="flex text-xl uppercase font-extrabold font-primary-font">
          <h2 className="text-second-color">Masters</h2>
          <h2 className="text-white">Web</h2>
        </div>
        {/* Menu */}
        <ul className="text-white font-primary-font uppercase font-bold  gap-5 flex">
          {menu.map((item, index) => {
            return(
              <li key={index} className="border-spacing-y-10 text-second-color">
                <Link to={item.route}>{item.link}</Link>
              </li>
            )
          })}
        </ul>
        <div>
          <button className="bg-second-color px-4 py-2 rounded-full text-white text-m">
            <FontAwesomeIcon icon={faUser} style={{ color: "white" }} /> Login
          </button>
        </div>
      </nav>
    </>
  );
}

export function NavbarMobile() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const menu = [
    { link: "Aplicaciones", route: "/" },
    { link: "Servicios", route: "/services" },
    { link: "Contactanos", route: "/contacto" },
    { link: "Portafolio", route: "/portafolio" },
  ];

  return (
    <>
      <div className="bg-[#0d0f51] lg:hidden flex justify-evenly h-14 items-center">
        {/* Menu */}
        <div className="p-1 rounded-s cursor-pointer" onClick={showMenu}>
          <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#f2f2f2" }} />
        </div>

        <div className="flex uppercase text-primary-color font-primary-font font-extrabold text-2xl justify-center">
          <h2 className="text-second-color">Master</h2>
          <h2 className="text-white">Web</h2>
        </div>

        <div>
          <button className="bg-second-color p-1 rounded-sm text-white font-primary-font">
            Contactarnos
          </button>
        </div>
      </div>

      <ul
        className={`${
          active ? "block" : "hidden"
        } bg-[#0d0f51] lg:hidden flex flex-col gap-5 text-white font-primary-font uppercase font-bold items-center py-2`}
      >
        {menu.map((item, index) => (
          <li key={index} className="border-spacing-y-10 text-second-color">
            <Link to={item.route}>{item.link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}