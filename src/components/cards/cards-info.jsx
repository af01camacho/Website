import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faPenNib } from "@fortawesome/free-solid-svg-icons";

function CardsInfo() {
  return (
    <>
      <div>
        <div className=" grid gap-5 grid-cols-1    md:grid-cols-4 lg:grid-cols-4 p-2 place-content-centers place-items-center">
          <div className="shadow-xl rounded-md flex-col uppercase font-extrabold font-primary-font text-xl text-center bg-white h-[250px] w-3/4 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faShield}
              size="2xl"
              style={{ color: "#ff6b00" }}
            />
            <h2>Seguridad</h2>
          </div>
          <div className="shadow-xl rounded-md flex-col uppercase font-extrabold font-primary-font text-xl text-center bg-white h-[250px] w-3/4 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faPenNib}
              size="2xl"
              style={{ color: "#ff6b00" }}
            />
            <h2>Diseño</h2>
          </div>
          <div className="shadow-xl rounded-md bg-white h-[250px] w-3/4 flex items-center justify-center">
            cards
          </div>
          <div className="shadow-xl rounded-md bg-white h-[250px] w-3/4 flex items-center justify-center">
            cards
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsInfo;
