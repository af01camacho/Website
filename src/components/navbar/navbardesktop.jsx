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
  const [money, setMoney] = useState('')
  console.log(money)

  function HandleClick() {
    setToggle(!toggle);
  }

  return (
    <>
      <nav className="flex justify-around shadow-md p-4 place-items-center gap-2">
        <ul className="flex gap-4 text-sm md:hidden lg:contents">
          <Link to="/">Home</Link>
          <Link>About</Link>
          <Link to="/services">Services</Link>
          <Link>Portafolio</Link>
        </ul>
        <div>
          <h2 className="font-bold text-xl">TechMastersWeb</h2>
        </div>
        <div className="flex items-center gap-1">
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

          <div className="bg-btn-color rounded-md px-1 ">
            <select onChange={(e) =>  setMoney(e.target.value)}  className="text-white bg-transparent outline-none p-2 " name="" id="">
              <option className="text-black" selected
                value="USD">USD</option>
              <option  className="text-black dark:text-black" value="COL">COL</option>
            </select>
          </div>
        </div>
      </nav>
      <div
        className={
          toggle ? "transition" : "transition ease-in-out -translate-y-[500px]"
        }
      >
        <LoginDesktop />
      </div>
    </>
  );
}

export default NavbarDesktop;
