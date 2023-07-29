import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchDomain() {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Busca tu dominio online</h2>
          <span className="p-2 font-light text-center">
            Obten un 20% de descuento en tu primera compra
          </span>
        </div>
        <div className="flex w-72 rounded-md  border border-gray-200 items-center pl-2 justify-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className=" w-3/4 p-2 placeholder:px-2 rounded-md"
            placeholder="Escribe tu dominio"
            type="search"
            name=""
            id=""
          />
          <input
            className="bg-btn-color px-4 p-2 rounded-r-md text-white"
            type="submit"
            value="Buscar"
          />
        </div>
        <div className="grid grid-cols-5 gap-2">
          <div>
            <h2>.com</h2>
          </div>
          <div>
            <h2>.net</h2>
          </div>
          <div>
            <h2>.org</h2>
          </div>
          <div>
            <h2>.online</h2>
          </div>
          <div>
            <h2>.co</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDomain;
