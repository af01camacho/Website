import Cards from "../../components/cards/cards";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import SeccionBuscar from "../../secciones/seccionBuscar/seccionBuscar";


function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SeccionBuscar />
      <Cards />
    </div>
  );
}

export default Home;
