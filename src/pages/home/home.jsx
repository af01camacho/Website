import { CardsDesktop, CardsMobile } from "../../components/cards/cards";
import { HeroDesktop, HeroMobile } from "../../components/hero/hero";
import { Navbar, NavbarMobile } from "../../components/navbar/navbar";
import SeccionBuscar from "../../secciones/seccionBuscar/seccionBuscar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <NavbarMobile />
      <HeroDesktop />
      <HeroMobile />
      <CardsDesktop />
      <CardsMobile />
      <SeccionBuscar />
    </div>
  );
}

export default Home;
