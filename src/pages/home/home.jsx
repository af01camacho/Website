import Cards from "../../components/cards/cards";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";

function Home() {
  return (
    <div className="bg-[#0b0d4d]">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
}

export default Home;
