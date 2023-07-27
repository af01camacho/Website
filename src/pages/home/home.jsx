import BtnWsp from "../../components/botonWsp/botonwsp";
import CardsInfo from "../../components/cards/cards-info";
import { Hero } from "../../components/hero/hero";
import { NavbarMobile, NavbarDesktop } from "../../components/navbar/navbar";
import { TopBar } from "../../components/topbar/topbar";
import CardInfoSection from "../../secciones/cards-info/card-info";
import SeccionBuscar from "../../secciones/seccionBuscar/seccionBuscar";

function Home() {
  return (
    <div>
      <BtnWsp />
      <TopBar />
      <NavbarDesktop />
      <NavbarMobile />
      <Hero />
      <CardsInfo />
      <SeccionBuscar />
      <CardInfoSection />
    </div>
  );
}

export default Home;
