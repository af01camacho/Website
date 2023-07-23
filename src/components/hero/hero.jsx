import imghero from "../../assets/undraw_design_components_9vy6.svg";
import Cards from "../cards/cards";

function Hero() {
  return (
    <div className="flex h-[700px] items-center bg-[#0b0d4d] text-white">
      <div className="w-[50%] justify-center items-center flex flex-wrap">
        <h1 className="text-4xl  font-extrabold">HACEMOS TUS IDEAS REALIDAD</h1>
        <h2 className="text-2xl font-bold">
          Encuntra asesoria en uno de nuestros experto
        </h2>
        <div className="flex flex-col w-4/5 gap-y-4 py-5">
          <input
            className="p-2"
            placeholder="Nombre"
            type="text"
            name=""
            id=""
          />
          <input
            className="p-2"
            placeholder="Telefono"
            type="number"
            name=""
            id=""
          />
          <button className="bg-[#f26419] rounded-sm p-2">Enviar</button>
          <span>* Nunca reveles informaciones de tarjetas de creditos</span>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <img
          className="w-3/4 flex items-center justify-center"
          src={imghero}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
