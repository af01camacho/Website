import { CardsDesktop, CardsMobile } from "../../components/cards/cards";
import Hero from "../../components/hero/hero";
import { Navbar, NavbarMobile } from "../../components/navbar/navbar";
import SeccionBuscar from "../../secciones/seccionBuscar/seccionBuscar";

function Home() {
  return (
    <div className="">
      <Navbar />
      <NavbarMobile />
      <Hero />
      <CardsDesktop />
      <CardsMobile />
      <SeccionBuscar />
    </div>
  );
}

export default Home;
