import NavbarDesktop from "./navbardesktop";
import NavbarMobile from "./navbarmobile";


function Navbar({ changeDarkMode }) {
  return (
    <div className=" font-primary-font dark:bg-primary-color-dm dark:text-white">
      <div className="hidden sm:contents md:contents lg:contents xl:contents">
        <NavbarDesktop changeDarkMode={changeDarkMode} />
      </div>
      <div className="  contents xl:hidden sm:hidden md:hidden lg:hidden 2xl:hidden">
        <NavbarMobile changeDarkMode={changeDarkMode} />
      </div>
    
    </div>
  );
}

export default Navbar;
