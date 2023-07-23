import imghero from "../../assets/undraw_design_components_9vy6.svg";

import Typewriter from "typewriter-effect";
import Cards from "../cards/cards";

function Hero() {
  return (
    <div className="flex flex-wrap h-[700px] items-center bg-[#0b0d4d] text-white">
      <div className="w-[50%] justify-center items-center flex flex-wrap">
        <h2 className="font-extrabold text-4xl flex flex-wrap w-full justify-center">
          <Typewriter
            options={{
              strings: [
                "HACEMOS TUS IDEAS REALIDAD",
                "TE ASESORAMOS COMPLETAMENTE",
                "TU NEGOCIO SIN LIMITES",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <h2 className="text-2xl font-bold">
          Encuntra asesoria en uno de nuestros experto
        </h2>
        <div className="flex flex-col w-4/5 gap-y-5 ">
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
