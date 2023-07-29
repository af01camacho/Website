import { faMoon, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavbarMobile() {
  const [click, setClick] = useState(false);
  const handleclick = () => {
    setClick(!click);
  };
  return (
    <>
      <nav className=" shadow-sm flex py-3   items-center justify-around">
        <h2 className="font-semibold text-lg">TechMastersWeb</h2>
        <div className="flex items-center justify-center gap-4">
          <FontAwesomeIcon size="lg" icon={faMoon} />
          <FontAwesomeIcon icon={faUser} />
          <hr className="bg-bg-sombra dark:bg-bg-sombra w-[1px] flex h-[20px]" />

          <FontAwesomeIcon onClick={handleclick} icon={faBars} />
        </div>
      </nav>
      <div
        className={
          click
            ? `flex flex-col p-2 gap-2 transition ease-in-out delay-150	 "`
            : "translate-y-[-4000px] absolute  "
        }
      >
        <Link className="">Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Portafolio</Link>
      </div>
    </>
  );
}

export default NavbarMobile;
