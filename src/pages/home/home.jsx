import { useEffect } from "react";
import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import SearchDomain from "../../sections/search-domain/searchdomain";

function Home() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = document.documentElement.classList.contains("dark");

  const changeDarkMode = () => {
    toggleDarkMode
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Navbar changeDarkMode={changeDarkMode} />
      {/* Design Mobile */}
      <div className="contents md:hidden lg:hidden sm:hidden xl:hidden font-primary-font">
        <HeroMobile />
        <SearchDomain />
      </div>
      {/* Design Desktop */}
      <div className="hidden lg:contents xl:contents">
        <HeroDesktop />
      </div>
    </>
  );
}

export default Home;
