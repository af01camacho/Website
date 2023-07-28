import { useState } from "react";
import Search from "../../components/search/search";

const SeccionBuscar = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (data) => {
    setSearchResults(data);
  };

  return (
    <div className="  py-5 w-full bg-primary-color ">
      <div className="flex lg:flex-col flex-col md:flex-col items-center w-full  ">
        <div className=" break-words text-center md:w-fit flex items-center flex-col justify-center">
          <h2 className="text-2xl font-extrabold uppercase text-white mb-2 font-primary-font">
            Registra tu dominio Aquí hoy
          </h2>
          <p className="text-s w-fit text-center text-gray-400 mb-4 font-primary-font">
            En el registro de tu primer dominio .com o .org contratando
            cualquiera de nuestros planes
          </p>
        </div>
        <div className="md:w-fit w-fit flex justify-center md:justify-end  items-center">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {searchResults.map((result, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <p className="font-semibold mb-2">Dominio: {result.domain}</p>
            <p className="text-sm">
              Disponibilidad:{" "}
              {result.available ? "Disponible" : "No disponible"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionBuscar;
