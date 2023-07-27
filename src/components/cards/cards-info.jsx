import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faPenNib } from "@fortawesome/free-solid-svg-icons";

function CardsInfo() {
  return (
    <>
      <div className="pb-20">
        <div className="grid gap-5 grid-cols-1 pt-10    md:grid-cols-4 lg:grid-cols-4 place-content-centers place-items-center">
          <div className="shadow-xl rounded-md flex-col uppercase font-bold font-primary-font text-xl text-center bg-white h-[250px] w-3/4 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faShield}
              size="2xl"
              style={{ color: "#ff6b00" }}
            />
            <h2>Seguridad</h2>
          </div>
          <div className="shadow-xl rounded-md bg-white h-[250px] w-3/4 flex items-center justify-center">
            <FontAwesomeIcon icon={faPenNib} style={{ color: "#ff6b00" }} />
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
