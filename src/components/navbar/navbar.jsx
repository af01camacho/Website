import {
  faMoon,
  faPhone,
  faEnvelope,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <>
      <nav className="font-primary-font dark:bg-primary-color-dm dark:text-white">
        <div className="flex justify-between px-16">
          <div className="flex items-center gap-4 text-sm">
            <FontAwesomeIcon icon={faPhone} /> <span>3138024690</span>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <span>soporte@techmastersweb.com</span>
          </div>
          <div className="flex p-2 justify-end gap-1 ">
            <select
              className="outline-none cursor-pointer dark:bg-primary-color-dm"
              name=""
              id=""
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            <div className="flex items-center justify-center">
              <hr className="  w-[20px] rotate-90 " />
            </div>
            <div>
              <select
                className="outline-none cursor-pointer dark:bg-primary-color-dm"
                name=""
                id=""
              >
                <option value="USD">USD</option>
                <option value="COL">COL</option>
              </select>
            </div>
            <div className="px-2 cursor-pointer">
              <FontAwesomeIcon icon={faMoon} style={{ color: "#1f2a37" }} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-[90%] " />
        </div>

        <div className="flex justify-around  px-16 py-4 items-center">
          <h2 className="text-2xl font-semibold">TechMastersWeb</h2>
          <div></div>
          <ul className="flex gap-5">
            <Link>Aplicaciones</Link>
            <Link>Services</Link>
            <Link>About</Link>
            <Link>Planes</Link>
            <Link>Dominios</Link>
            <Link>Hosting</Link>
            <Link>Portafolio</Link>
          </ul>
          <div className="flex items-center justify-center">
            <hr className="  w-[30px] rotate-90 " />
          </div>
          <div className="border dark:bg-[#4B5563] border-gray-250 dark:border-none p-2 pl-4 rounded-md">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              className=" px-4 w-80 outline-none dark:bg-[#4B5563]"
              placeholder="Search"
              type="search"
              name=""
              id=""
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
