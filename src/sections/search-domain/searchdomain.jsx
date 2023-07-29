import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchDomain() {
  return (
    <>
      <div className="dark:bg-primary-color-dm dark:text-white gap-2 grid grid-cols-1 px-3 place-items-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Busca tu dominio online</h2>
          <span className="p-2 font-light text-center">
            Obten un 20% de descuento en tu primera compra
          </span>
        </div>
        <div className="flex w-full rounded-md border border-gray-200 dark:border-none dark:bg-gray-600 items-center pl-2 justify-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className=" dark:bg-gray-600 outline-none dark:border-none w-3/4 p-2 placeholder:px-2 rounded-md"
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
        <div className="grid grid-cols-5 gap-3">
          <div className="flex flex-col items-center">
            <h2 className="font-bold">.com</h2>
            <h2 className="font-light text-sm">$55.000</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">.net</h2>
            <h2 className="font-light text-sm">$55.000</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">.org</h2>
            <h2 className="font-light text-sm">$55.000</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">.co</h2>
            <h2 className="font-light text-sm">$55.000</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold">.online</h2>
            <h2 className="font-light text-sm">$55.000</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDomain;
