import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imghero from "../../assets/undraw_home_screen_re_640d.svg";
export function HeroDesktop() {
  return (
    <>
      <div className="grid grid-cols-2 items-center py-10 dark:bg-primary-color-dm dark:text-white">
        <div className="flex flex-col gap-3 items-center justify-center p-5">
          <h2 className="text-5xl font-black">
            Diseñamos por ti tu proxima gran idea de trabajo
          </h2>
          <span className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            incidunt impedit atque voluptatem similique reiciendis ipsa officiis
            laborum neque nostrum repellendus vel, mollitia doloremque
            blanditiis quaerat nulla animi natus commodi!
          </span>
          <div className=" w-full flex justify-between dark:border-none  border  ">
            <input
              className=" dark:bg-gray-600 w-full outline-none px-4  "
              placeholder="Coloca tu correo"
              type="email"
              name=""
              id=""
            />
            <input
              className="bg-btn-color text-white w-1/4 p-2"
              type="submit"
              value="Enviar"
            />
          </div>
        </div>
        <div className="flex items-center">
          <img src={imghero} alt="" />
        </div>
      </div>
    </>
  );
}

export function HeroTablet() {
  return <>Tablet</>;
}

export function HeroMobile() {
  return (
    <>
      <div className="font-primary-font px-3 dark:bg-primary-color-dm dark:text-white">
        <div className="p-2">
          <h2 className="text-3xl font-extrabold">
            Diseñamos por ti tu proxima gran idea de trabajo
          </h2>
          <span className="font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
            pariatur voluptatibus corporis non velit assumenda perferendis,
            reiciendis mollitia? Atque vitae quidem blanditiis. Tenetur
            repudiandae adipisci corporis distinctio inventore, numquam
            voluptatibus.
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-3 py-2">
          <div className="flex w-full items-center rounded-md px-3 border-gray-200 border dark:border-none dark:bg-gray-600">
            <FontAwesomeIcon style={{ color: "#6B7280" }} icon={faEnvelope} />
            <input
              className=" dark:bg-gray-600 outline-none  p-2"
              placeholder="Coloca tu email"
              type="email"
              name=""
              id=""
            />
          </div>
          <input
            className="bg-btn-color text-white font-semibold rounded-md p-3 w-full"
            type="submit"
            value="Enviar"
          />
          <span>* No reveles informacion de tarjetas de creditos</span>
        </div>
      </div>
    </>
  );
}
