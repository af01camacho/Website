import TypeWriter from "../typewriter/typewriter";
import imghero from "../../assets/Settings (1).gif";
export function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center   md:grid-cols-2 bg-primary-color ">
        {/* Card 1  */}
        <div className="text-white flex items-center order-2 justify-center flex-col">
          <TypeWriter />
          <h2>Quedate seguro en manos de nuestros expertos.!</h2>
          <div className="flex flex-col gap-2 p-2 items-center">
            <input
              className=" w-[400px]  p-2 text-black outline-none"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="  w-[400px] text-black p-2 outline-none"
              placeholder="Telefono"
              type="tel"
              name=""
              id=""
            />
            <span>
              * No reveles informacion extra como tarjetas de credito *
            </span>
            <input
              className=" w-[400px] bg-second-color font-primary-font text-l font-bold p-2"
              type="submit"
              value="Enviar"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[450px] justify-center order-1 flex items-center">
          <img src={imghero} alt="" />
        </div>
      </div>
    </>
  );
}
