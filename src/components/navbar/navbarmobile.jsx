import { faMoon, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function NavbarMobile() {
  return (
    <>
      <nav className=" flex h-full overflow-hidden p-2  items-center justify-between">
        <h2 className="font-semibold text-lg">TechMastersWeb</h2>
        <div className="flex items-center justify-center gap-4">
          <FontAwesomeIcon size="lg" icon={faMoon} />
          <FontAwesomeIcon icon={faUser} />
          <hr className="bg-bg-sombra dark:bg-bg-sombra w-[1px] flex h-[20px]" />

          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
      <div className="flex flex-col overflow-hidden float-right bg-btn-color w-52 h-[92.8vh] items-center  text-black ">
        <Link className="">Home</Link>
        <Link>Services</Link>
        <Link>About</Link>
        <Link>Portafolio</Link>
      </div>
    </>
  );
}

export default NavbarMobile;
