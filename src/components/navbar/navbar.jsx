import NavbarDesktop from "./navbardesktop";
import NavbarMobile from "./navbarmobile";
import NavbarTablet from "./navbartablet";

function Navbar({ changeDarkMode }) {
  return (
    <div className="font-primary-font dark:bg-primary-color-dm dark:text-white">
      <div className="hidden  lg:contents xl:contents">
        <NavbarDesktop />
      </div>
      <div className=" contents xl:hidden sm:hidden md:hidden lg:hidden 2xl:hidden">
        <NavbarMobile changeDarkMode={changeDarkMode} />
      </div>
      <div className="hidden sm:contents md:contents lg:hidden xl:hidden">
        <NavbarTablet />
      </div>
    </div>
  );
}

export default Navbar;
