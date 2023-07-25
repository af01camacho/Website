import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faHeadset,
  faMoneyCheckDollar,
  faFileShield,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export function CardsDesktop() {
  return (
    <>
      <div className="hidden md:flex justify-center">
        <div className="flex flex-wrap absolute top-[700px]  justify-center  py-10 gap-3 uppercase 	 ">
          {/* Card #1 */}
          <div className=" bg-white rounded-sm w-[192px] lg:w-[250px]  h-[250px] shadow-2xl justify-center items-center flex py-12">
            <div className="flex flex-col align-baseline gap-4">
              <FontAwesomeIcon
                icon={faPenNib}
                size="2xl"
                style={{ color: "#ff6b00" }}
              />
              <h2 className="font-extrabold text-2xl font-primary-font">
                Design Web
              </h2>
            </div>
          </div>
          {/* Card #2 */}
          <div className="bg-white rounded-sm lg:w-[250px] w-[192px] h-[270px] shadow-2xl justify-center items-center flex py-12">
            <div className="flex flex-col align-baseline gap-4">
              <FontAwesomeIcon
                icon={faHeadset}
                size="2xl"
                style={{ color: "#ff6b00" }}
              />
              <h2 className="font-extrabold text-2xl font-primary-font">
                Soporte 24/7
              </h2>
            </div>
          </div>
          {/* Card #3 */}
          <div className=" bg-white rounded-sm w-[192px] lg:w-[250px] h-[250px] shadow-2xl justify-center items-center flex py-12">
            <div className="flex flex-col align-baseline gap-4 items-center">
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                size="2xl"
                style={{ color: "#ff6b00" }}
              />
              <h2 className="font-extrabold text-2xl font-primary-font text-center">
                Pagos accesibles
              </h2>
            </div>
          </div>
          {/* Card #4 */}
          <div className=" bg-white rounded-sm  w-[192px] lg:w-[250px] h-[280px] shadow-2xl justify-center items-center flex py-12">
            <div className="flex flex-col align-baseline gap-4">
              <FontAwesomeIcon
                icon={faFileShield}
                size="2xl"
                style={{ color: "#ff6b00" }}
              />
              <h2 className="font-extrabold text-2xl font-primary-font text-center">
                proteccion de datos
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function CardsMobile() {
  return (
    <>
      <div className="md:hidden bg-primary-color flex flex-col items-center">
        <div className=" flex w-4/5 p-2 m-2 h-[200px]  items-center justify-center flex-col  gap-2 uppercase font-bold font-primary-font rounded-xl bg-white">
          <FontAwesomeIcon
            icon={faPenNib}
            size="2xl"
            style={{ color: "#ff6b00" }}
          />
          <h2>Design Web</h2>
        </div>

        <div className="flex w-4/5 p-2 m-2 h-[200px]  items-center justify-center flex-col gap-2 uppercase font-bold font-primary-font rounded-xl bg-white">
          <FontAwesomeIcon
            icon={faHeadset}
            size="2xl"
            style={{ color: "#ff6b00" }}
          />
          <h2>Soporte 24/7</h2>
        </div>
        <div className="flex w-4/5 p-2 m-2 h-[200px]  items-center justify-center flex-col gap-2 uppercase font-bold font-primary-font rounded-xl bg-white">
          <FontAwesomeIcon
            icon={faMoneyCheckDollar}
            size="2xl"
            style={{ color: "#ff6b00" }}
          />
          <h2>Pagos Faciles</h2>
        </div>
        <div className="flex w-4/5 p-2 m-2 h-[200px] items-center justify-center flex-col gap-2 uppercase font-bold font-primary-font rounded-xl  bg-white">
          <FontAwesomeIcon
            icon={faFileShield}
            size="2xl"
            style={{ color: "#ff6b00" }}
          />
          <h2>Proteccion de datos</h2>
        </div>
      </div>
    </>
  );
}
