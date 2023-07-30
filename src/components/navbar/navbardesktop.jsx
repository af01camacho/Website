import {
  faPhone,
  faMoon,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginDesktop } from "../login/login";
import { useState } from "react";

function NavbarDesktop({ changeDarkMode }) {
  const [toggle, setToggle] = useState(false);

  function HandleClick() {
    if (toggle == true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <>
      <nav className="flex justify-around shadow-md  p-3 place-items-center gap-2">
        <ul className="flex gap-4 text-md">
          <Link to="/">Home</Link>
          <Link>About</Link>
          <Link to="/services">Services</Link>
          <Link>Portafilio</Link>
        </ul>
        <div>
          <h2 className="font-bold text-3xl">TechMastersWeb</h2>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            className="cursor-pointer dark:border dark:border-gray-600 text-black border-gray-300 border dark:text-white py-3 text-center w-10 rounded-full"
            size="s"
            icon={faPhone}
          />

          <FontAwesomeIcon
            className="cursor-pointer dark:border dark:border-gray-600 text-black border-gray-300 border dark:text-white py-3 text-center w-10 rounded-full"
            onClick={changeDarkMode}
            size="s"
            icon={faMoon}
          />

          <FontAwesomeIcon
            className="cursor-pointer dark:border dark:border-gray-600 text-black border-gray-300 border dark:text-white py-3 text-center w-10 rounded-full"
            size="s"
            icon={faRightToBracket}
          />
          <input
            className="p-[6px] border dark:border-gray-700 border-gray-300 rounded-md"
            type="submit"
            value="Logearse"
            onClick={HandleClick}
          />

          <input
            className="bg-btn-color p-2 rounded-md text-white"
            type="submit"
            value="Registrarse"
          />
        </div>
      </nav>
      <div
        className={
          toggle
            ? "transition "
            : "transition ease-in-out   -translate-y-[500px]"
        }
      >
        <LoginDesktop />
      </div>
    </>
  );
}

export default NavbarDesktop;
