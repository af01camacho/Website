import { useEffect } from "react";
import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import { SearchDomainDesktop } from "../../components/searchdomain/searchdomain";
import FooterDesktop from "../../components/footer/footerDesktop";
import FooterMobile from "../../components/footer/footerMobile";
import FooterTablet from "../../components/footer/footerTablet";

function Home({ changeDarkMode }) {
  return (
    <div className="font-primary-font">
      <Navbar changeDarkMode={changeDarkMode} />
      <HeroDesktop />
      <SearchDomainDesktop />
      {/* Design Desktop */}
      <div className="hidden lg:contents xl:contents">
        <FooterDesktop />
      </div>

      {/* Design Mobile */}
      <div className="contents md:hidden lg:hidden sm:hidden xl:hidden font-primary-font">
        <FooterMobile />
      </div>
      {/* Design Tablet */}
      <div className="hidden sm:contents md:contents lg:hidden xl:hidden">
        <FooterTablet />
      </div>
    </div>
  );
}

export default Home;
