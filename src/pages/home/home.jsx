import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";

function Home({ toogleDarkMode }) {
  return (
    <>
      <Navbar />
      {/* Design Mobile */}
      <div className="contents md:hidden lg:hidden sm:hidden xl:hidden">
        <HeroMobile />
      </div>
      {/* Design Desktop */}
      <div className="hidden lg:contents xl:contents">
        <HeroDesktop />
      </div>
    </>
  );
}

export default Home;
