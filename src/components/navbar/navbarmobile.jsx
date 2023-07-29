import { faMoon, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarMobile() {
  return (
    <>
      <nav className=" flex p-3   items-center justify-between">
        <h2 className="font-semibold text-lg">TechMastersWeb</h2>
        <div className="flex items-center justify-center gap-4">
          <FontAwesomeIcon size="lg" icon={faMoon} />
          <FontAwesomeIcon icon={faUser} />
          <hr className="bg-bg-sombra dark:bg-bg-sombra w-[1px] flex h-[20px]" />

          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  );
}

export default NavbarMobile;
