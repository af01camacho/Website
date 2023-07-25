import TypeWriter from "../typewriter/typewriter";
import imghero from "../../assets/undraw_design_components_9vy6.svg";
export function HeroDesktop() {
  return (
    <>
      <div className="font-primary-font hidden md:flex lg:flex-row md:flex-col-reverse  items-center justify-center px-10  bg-[#0b0d4d] h-[700px] text-white">
        <div className="h-[500px] gap-2 justify-start flex-col  flex w-fit">
          <TypeWriter />
          <h3 className="flex  justify-center font-semibold text-[15px] py-2">
            Encuentra asesoramiento de nuestros expertos
          </h3>
          <div className="flex flex-col items-center gap-5">
            <input
              className="w-[400px] p-3 outline-0 text-black"
              placeholder="Nombre"
              type="text"
              name="name"
              id=""
            />
            <input
              className="w-[400px] p-3 outline-0 text-black"
              placeholder="telefono"
              type="number"
              name=""
              id=""
            />
            <h4>*No reveles informacion de tarjetas de creditos</h4>

            <button className="bg-second-color p-3 rounded-sm w-3/5">
              Registrarse
            </button>
          </div>
        </div>
        <div className="h-[350px] justify-center items-center flex-col  flex w-fit">
          <img className="w-3/4 md:w-2/4 lg:w-3/4" src={imghero} alt="" />
        </div>
      </div>
    </>
  );
}
export function HeroMobile() {
  return (
    <div className="">
      <div className="flex-col flex-wrap items-center gap-5 md:hidden py-4 flex bg-[#0b0d4d] text-white p-2 text-center">
        <TypeWriter />

        <img className="w-3/4 " src={imghero} alt="" />

        <div className="flex flex-col items-center gap-5">
          <input
            className="w-[400px] p-3 outline-0 text-black"
            placeholder="Nombre"
            type="text"
            name="name"
            id=""
          />
          <input
            className="w-[400px] p-3 outline-0 text-black"
            placeholder="telefono"
            type="number"
            name=""
            id=""
          />
          <h4>*No reveles informacion de tarjetas de creditos</h4>

          <button className="bg-second-color p-3 rounded-sm w-3/5">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
