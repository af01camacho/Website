/* ===== COMPONENTS =====*/
import Navbar from "../../components/navbar/navbar";
import InfoServices from "../../components/infoServices/infoServices";
import InfoServicesMobil from "../../components/infoServices/infoServicesMobil";
import TopServicesDesktop from "../../components/topServices/topServicesDesktop";
import InfoServicesTablet from "../../components/infoServices/infoServicesTablet";

function Services({ changeDarkMode }) {
  return (
    <>
      <Navbar changeDarkMode={changeDarkMode} />
      <div className="hidden lg:contents xl:contents">
        <InfoServices />
      </div>
      <div className="xl:hidden sm:hidden lg:hidden md:hidden">
        <InfoServicesMobil />
      </div>
      <div className="hidden sm:contents md:contents lg:hidden xl:hidden">
        <InfoServicesTablet />
      </div>
      {/* ===== Top Services =====*/}
      <div className="">
        <TopServicesDesktop />
      </div>
    </>
  );
}

export default Services;
