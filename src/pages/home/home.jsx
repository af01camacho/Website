import { useEffect } from "react";
import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import { SearchDomainDesktop } from "../../components/searchdomain/searchdomain";


function Home({ changeDarkMode }) {
  return (
    <div className="font-primary-font">
      
      <Navbar changeDarkMode={changeDarkMode} />
      <HeroDesktop />
      {/* Design Mobile */}
      <div className="contents md:hidden lg:hidden sm:hidden xl:hidden font-primary-font">
        {/* <HeroMobile /> */}
        
      
      </div>
      {/* Design Desktop */}
      <div className="hidden lg:contents xl:contents">
        

      </div>
      <SearchDomainDesktop/>
    </div>
  );
}

export default Home;
