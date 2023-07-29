import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import SearchDomain from "../../sections/search-domain/searchdomain";

function Home({ toogleDarkMode }) {
  return (
    <>
      <Navbar />
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
