/* ===== COMPONENTS =====*/
import Navbar from "../../components/navbar/navbar";
import InfoServices from "../../components/infoServices/infoServices"
import InfoServicesMobil from "../../components/infoServices/infoServicesMobil";
import TopServicesDesktop from "../../components/topServices/topServicesDesktop";

function Services() {
  return(
    <>
        <Navbar />
        <div className="hidden lg:contents xl:contents">
            <InfoServices />
        </div>
        <div className="xl:hidden sm:hidden lg:hidden md:hidden">
            <InfoServicesMobil />
        </div>
        <div>
            <TopServicesDesktop />
        </div>
    </>
  );
}

export default Services;
