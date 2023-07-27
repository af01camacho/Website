import { Hero } from "../../components/hero/hero";
import { NavbarMobile, NavbarDesktop } from "../../components/navbar/navbar";
import { TopBar } from "../../components/topbar/topbar";
import CardInfoSection from "../../secciones/cards-info/card-info";
import CardsPrice from "../../secciones/cards-price/cards-price";

import SeccionBuscar from "../../secciones/seccionBuscar/seccionBuscar";

function Home() {
  return (
    <div>
      <TopBar />
      <NavbarDesktop />
      <NavbarMobile />
      <Hero />
      <SeccionBuscar />
      <div>
        <CardsPrice />
        <CardInfoSection />
      </div>
    </div>
  );
}

export default Home;
